package pl.kostrzynski.uiconfronter.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.kostrzynski.uiconfronter.model.entity.PageInfo;
import pl.kostrzynski.uiconfronter.model.microlink.Microlink;
import pl.kostrzynski.uiconfronter.repository.PageInfoRepo;
import pl.kostrzynski.uiconfronter.service.ArchiveConsumer;
import pl.kostrzynski.uiconfronter.service.MicrolinkConsumer;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping(value = "/UI-Confronter",
        produces = MediaType.APPLICATION_JSON_VALUE)
public class UiConfronterApi {

    private final ArchiveConsumer archiveConsumer;
    private final MicrolinkConsumer microlinkConsumer;
    private final PageInfoRepo pageInfoRepo;

    @Autowired
    public UiConfronterApi(ArchiveConsumer archiveConsumer, MicrolinkConsumer microlinkConsumer, PageInfoRepo pageInfoRepo) {
        this.archiveConsumer = archiveConsumer;
        this.microlinkConsumer = microlinkConsumer;
        this.pageInfoRepo = pageInfoRepo;
    }

    @GetMapping("/all")
    public ResponseEntity<List<PageInfo>> getAllPages() {
        return new ResponseEntity<>(pageInfoRepo.findAll(), HttpStatus.ACCEPTED);
    }

    @GetMapping("/compare-info")
    public ResponseEntity<List<Microlink>> getCompareInfo(@RequestParam String url,
                                                          @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate localDate) {

        String olderLink = archiveConsumer.getOlderLink(url, localDate);
        if (olderLink == null) return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        Microlink oldMicrolink = microlinkConsumer.getMicrolinkInfo(olderLink);

        Microlink newMicrolink;
        if (oldMicrolink.getData() != null)
            newMicrolink = microlinkConsumer.getMicrolinkInfo(url);
        else return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        if (oldMicrolink.getData() == null) return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        return new ResponseEntity<>(new ArrayList<>(Arrays.asList(oldMicrolink, newMicrolink)), HttpStatus.ACCEPTED);
    }

    @GetMapping("/get-older-link")
    public ResponseEntity<String> getOlderLink(@RequestParam String url,
                                               @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate localDate) {
        String olderLink = archiveConsumer.getOlderLink(url, localDate);
        if (olderLink == null) return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        return new ResponseEntity<>(olderLink, HttpStatus.ACCEPTED);
    }

    @PostMapping
    public ResponseEntity<HttpStatus> savePageInfo(@RequestBody PageInfo pageInfo) {
        try {
            pageInfoRepo.save(pageInfo);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteById(@PathVariable long id) {
        try {
            pageInfoRepo.deleteById(id);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
