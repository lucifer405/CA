package com.example.demo.controller;

import java.io.IOException;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.example.demo.model.FileResponse;
import com.example.demo.repository.FileResponseRepository;
import com.example.demo.service.FileStorageService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("files")
public class FileController {

	@Autowired
	private FileStorageService fileStorageService;
	
	@Autowired
	private FileResponseRepository fileResponseRepo;
	
	@PostMapping("/addCafe")
	public FileResponse addResAndCafe(@RequestBody FileResponse fileResponse) {
		return fileResponseRepo.save(fileResponse);
	}
	
	@PutMapping
	public ResponseEntity<FileResponse> uploadFile(@RequestParam("file") MultipartFile file){
		String fileName=fileStorageService.storeFile(file);
		String fileDownloadUri=ServletUriComponentsBuilder.fromCurrentContextPath()
				.path("/files/")
				.path(fileName)
				.toUriString();
		 
		FileResponse fileResponse=new FileResponse(fileName,fileDownloadUri,file.getContentType(),file.getSize());
		return new ResponseEntity<FileResponse>(fileResponse,HttpStatus.OK);
	}
	
	@GetMapping("/{fileName:.+}")
	public ResponseEntity<Resource> downloadFile(@PathVariable String fileName,HttpServletRequest request){
		Resource resource=fileStorageService.loadFileAsResource(fileName);
		String contentType=null;
		try {
			contentType=request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
			
		}catch(IOException ex){
			System.out.println("Could not determine fileType");
		}
		if(contentType==null) {
			contentType="application/octet-stream";
		}
		return ResponseEntity.ok()
				.contentType(MediaType.parseMediaType(contentType))
				.body(resource);
	}
	
}
