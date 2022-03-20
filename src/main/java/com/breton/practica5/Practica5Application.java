package com.breton.practica5;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class Practica5Application {

	public static void main(String[] args) {
		SpringApplication.run(Practica5Application.class, args);
	}

}
