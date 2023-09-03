package com.jordyveermeer.GymLoggerAPI.interceptors;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.jordyveermeer.GymLoggerAPI.models.User;
import com.jordyveermeer.GymLoggerAPI.repositories.UserRepository;
import com.jordyveermeer.GymLoggerAPI.services.UserService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import java.util.Base64;
import java.util.Map;

@Component
public class UserInterceptor implements HandlerInterceptor {

    private UserService userService;

    private Logger logger = LoggerFactory.getLogger(UserInterceptor.class);

    public UserInterceptor(UserService userService) {
        this.userService = userService;
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);

        // skip if no auth header
        if (authHeader == null) {
            return true;
        }

        String id = jwtIdExtractor(authHeader);

        userService.createUserIfNotExists(id);

        return true;
    }

    private String jwtIdExtractor(String token) {
        Base64.Decoder decoder = Base64.getUrlDecoder();
        ObjectMapper mapper = new ObjectMapper();

        String[] chunks = token.split("\\.");
        String payload = new String(decoder.decode(chunks[1]));
        logger.debug("payload: " + payload);

        String id = null;

        try {
            Map<String, String> map = mapper.readValue(payload, Map.class);
            id = map.get("sub").split("\\|")[1];
        } catch (Exception e) {
            e.printStackTrace();
        }

        return id;
    }

    public void setUserService(UserService userService) {
        this.userService = userService;
    }
}
