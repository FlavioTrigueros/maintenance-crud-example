package com.example.maintenance.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.*;

@Configuration
public class AppConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
          .allowedOrigins("http://localhost:4200") // frontend dev
          .allowedMethods("GET","POST","PUT","DELETE")
          .allowedHeaders("*");
    }

    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }
}
