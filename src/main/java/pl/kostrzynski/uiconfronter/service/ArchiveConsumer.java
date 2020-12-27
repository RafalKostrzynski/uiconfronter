package pl.kostrzynski.uiconfronter.service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import pl.kostrzynski.uiconfronter.model.archive.Archive;

import java.time.LocalDate;
import java.util.Objects;

@Service
public class ArchiveConsumer {

    public String getOlderLink(String newUrl, LocalDate timeStamp) {
        RestTemplate restTemplate = new RestTemplate();
        final String URL = "https://archive.org/wayback/available";
        ResponseEntity<Archive> forObject = restTemplate.getForEntity(URL + "?url={newUrl}&timestamp={timestamp}", Archive.class, newUrl, getTimestamp(timeStamp));
        if (forObject.getStatusCode().is2xxSuccessful() &&
                Objects.requireNonNull(forObject.getBody()).getArchived_snapshots().getClosest() != null) {
            return forObject.getBody().getArchived_snapshots().getClosest().getUrl();
        } else {
            return null;
        }
    }

    private String getTimestamp(LocalDate timeStamp) {
        return String.valueOf(timeStamp.getYear() + timeStamp.getMonthValue() + timeStamp.getDayOfMonth());
    }

}
