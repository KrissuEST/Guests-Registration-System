package com.kristjan.springbootlibrary.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)   //This status will be returned to the client
//Whenever record not exist in the database then Rest API will throw this exception.
public class ResourceNotFoundException extends RuntimeException {

    private static final long serialVersionUID = 1L;

    public ResourceNotFoundException(String message) {
        super(message);   //we pass this message to superclass
    }

}