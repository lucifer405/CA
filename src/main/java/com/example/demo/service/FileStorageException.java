package com.example.demo.service;

public class FileStorageException extends RuntimeException {

	public FileStorageException(String meesage) {
		super(meesage);
	}
	
	public FileStorageException(String message,Throwable cause) {
		super(message,cause);
	}
}
