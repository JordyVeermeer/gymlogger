package com.jordyveermeer.GymLoggerAPI.interceptors;

import com.jordyveermeer.GymLoggerAPI.services.UserService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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

        String id = userService.jwtIdExtractor(authHeader);

        userService.createUserIfNotExists(id);

        return true;
    }


    public void setUserService(UserService userService) {
        this.userService = userService;
    }
}
