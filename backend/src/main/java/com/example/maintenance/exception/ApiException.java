package com.example.maintenance.exception;

public class ApiException extends RuntimeException {
    public ApiException(String message) { super(message); }
    public static class NotFound extends ApiException {
        public NotFound(String msg) { super(msg); }
    }
    public static class BadRequest extends ApiException {
        public BadRequest(String msg) { super(msg); }
    }
}
