package pl.kostrzynski.uiconfronter.service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import pl.kostrzynski.uiconfronter.model.microlink.Microlink;

@Service
public class MicrolinkConsumer {

    private final String URL = "https://api.microlink.io";

    public Microlink getMicrolinkInfo(String link){
        link = checkLink(link);
        RestTemplate restTemplate=new RestTemplate();
        ResponseEntity<Microlink>forObject = restTemplate.getForEntity(URL+"?url={link}",Microlink.class, link);
        if(forObject.getStatusCode().is2xxSuccessful()){
            return forObject.getBody();
        }else return null;
    }

    private String checkLink(String link) {
        if(!link.contains("http://"))link = "https://"+link;
        return link;
    }
}

