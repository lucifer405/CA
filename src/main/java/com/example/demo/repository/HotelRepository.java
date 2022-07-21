package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Hotel_Facility;

@Repository
public interface HotelRepository extends JpaRepository<Hotel_Facility, String>{

}
