package com.example.demo.controller;

import java.io.IOException;
import java.util.List;

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
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.example.demo.enums.status;
import com.example.demo.member.Credentials;
import com.example.demo.model.FileResponse;
import com.example.demo.model.Hotel_Facility;
import com.example.demo.model.Jobs;
import com.example.demo.model.Posts;
import com.example.demo.model.Profile;
import com.example.demo.model.User;
import com.example.demo.repository.FileResponseRepository;
import com.example.demo.repository.HotelRepository;
import com.example.demo.repository.JobRepository;
import com.example.demo.repository.PostsRepository;
import com.example.demo.repository.ProfileRepo;
import com.example.demo.repository.UserRepo;
import com.example.demo.service.FileStorageService;
import com.example.demo.service.UserService;


@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private UserRepo uRepo;
	@Autowired
	private UserService uService;
	@Autowired
	private ProfileRepo pRepo;
	@Autowired
	private JobRepository jRepo;
	@Autowired
	private PostsRepository postRepo;
	
	@Autowired
	private HotelRepository hotelRepo;
	
	@PostMapping("/addPosts")
	public Posts addPosts(@RequestBody Posts posts) {
		return postRepo.save(posts);
	}
	
	@PostMapping("/signup")
	public status studentSignUp(@RequestBody User user) {
		return uService.createUser(user);
	}
	
	@PostMapping("/profile")
	public Profile userProfile(@RequestBody Profile profile) {
		return pRepo.save(profile);
	}
	
	@PostMapping("/addJobs")
	public Jobs addJobs(@RequestBody Jobs jobs) {
		return jRepo.save(jobs);
	}
	@GetMapping("/posts")
	public List<Posts> getAllPosts(){
		return postRepo.findAll();
	}
	@GetMapping("/userDetails")
	public List<User> getAllSignupDetails(){
		return uRepo.findAll();
	}
	@GetMapping("/userProfileDetails")
	public List<Profile> getAllProfileDetails(){
		return pRepo.findAll();
	}
	
	@GetMapping("/jobDetails")
	public List<Jobs> getAllJobs(){
		return jRepo.findAll();
	}

	@PostMapping("/login")
	public Object login(@RequestBody Credentials credentials) {
		Object res=uService.login(credentials);
		if(res==null) {
			throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "WrongCRedentials");
		}
		return  res;
	}
	
	@Autowired
	private FileStorageService fileStorageService;
	
	@Autowired
	private FileResponseRepository fileResponseRepo;
	

	
	@PostMapping("/addCafe")
	public FileResponse addResAndCafe(@RequestBody FileResponse fileResponse) {
		return fileResponseRepo.save(fileResponse);
	}
	
	@GetMapping("/cafeDetails")
	public List<FileResponse> getAllCafeDetails(){
		return fileResponseRepo.findAll();
	}
	
	@PostMapping("/addHotels")
	public Hotel_Facility addHotels(@RequestBody Hotel_Facility hotel_Facility) {
		return hotelRepo.save(hotel_Facility);
	}
	
	@GetMapping("/hotelDetails")
	public List<Hotel_Facility> getAllHotels(){
		return hotelRepo.findAll();
	}
	
	@PutMapping
	public ResponseEntity<FileResponse> uploadFile(@RequestParam("file") MultipartFile file){
		String fileName=fileStorageService.storeFile(file);
		String fileDownloadUri=ServletUriComponentsBuilder.fromCurrentContextPath()
				.path("/files/")
				.path(fileName)
				.toUriString();
		 
		FileResponse fileResponse=new FileResponse(
				fileName,fileDownloadUri,file.getContentType(),file.getSize());
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
