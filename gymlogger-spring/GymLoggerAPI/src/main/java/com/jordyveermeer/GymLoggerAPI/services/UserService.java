package com.jordyveermeer.GymLoggerAPI.services;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.jordyveermeer.GymLoggerAPI.models.User;
import com.jordyveermeer.GymLoggerAPI.repositories.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.Base64;
import java.util.Map;

@Service
public class UserService {
    private final UserRepository userRepo;

    private Logger logger = LoggerFactory.getLogger(UserService.class);

    public UserService(UserRepository userRepo) {
        this.userRepo = userRepo;
    }

    public void createUserIfNotExists(String id) {
        if (!userRepo.existsById(id)) {
            userRepo.saveAndFlush(new User(id));
        }
    }

    public String jwtIdExtractor(String token) {
        Base64.Decoder decoder = Base64.getUrlDecoder();
        ObjectMapper mapper = new ObjectMapper();

        String[] chunks = token.split("\\.");
        String payload = new String(decoder.decode(chunks[1]));
        //logger.debug("payload: " + payload);

        String id = null;

        try {
            Map<String, String> map = mapper.readValue(payload, Map.class);
            id = map.get("sub").split("\\|")[1];
        } catch (Exception e) {
            e.printStackTrace();
        }

        return id;
    }
}
