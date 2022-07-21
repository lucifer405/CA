package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.FileResponse;

@Repository
public interface FileResponseRepository extends JpaRepository<FileResponse, Integer>{

}
