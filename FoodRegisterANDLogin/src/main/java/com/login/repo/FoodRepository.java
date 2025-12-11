package com.login.repo;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.login.Entity.FoodEntity;


public interface FoodRepository extends JpaRepository<FoodEntity, Long> {
              
	List<FoodEntity> findByNameContainingIgnoreCase(String name);
}
