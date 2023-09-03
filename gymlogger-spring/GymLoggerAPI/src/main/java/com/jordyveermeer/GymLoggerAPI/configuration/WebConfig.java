package com.jordyveermeer.GymLoggerAPI.configuration;

import com.jordyveermeer.GymLoggerAPI.interceptors.UserInterceptor;
import com.jordyveermeer.GymLoggerAPI.repositories.UserRepository;
import com.jordyveermeer.GymLoggerAPI.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {

    @Autowired
    private ApplicationContext applicationContext;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new UserInterceptor(applicationContext.getBean(UserService.class)));
    }
}
