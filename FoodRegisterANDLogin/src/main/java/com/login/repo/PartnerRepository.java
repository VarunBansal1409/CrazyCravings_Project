package com.login.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.login.Entity.PartnerEntity;

public interface PartnerRepository extends JpaRepository<PartnerEntity, Integer>{

	List<PartnerEntity> findByNameContainingIgnoreCase(String name);
	
	List<PartnerEntity> findByPartnerNo(String partnerNo);
	
}
