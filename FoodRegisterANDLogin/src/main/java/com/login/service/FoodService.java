package com.login.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.login.Entity.FoodEntity;
import com.login.repo.FoodRepository;

@Service
public class FoodService {

    @Autowired
    private FoodRepository repo;

    public List<FoodEntity> getAllFood() {
        return repo.findAll();
    }

    public FoodEntity addFood(FoodEntity food) {
        return repo.save(food);
    }

    public Optional<FoodEntity> getFoodById(Long id) {
        return repo.findById(id);
    }

    public List<FoodEntity> searchFood(String name) {
        return repo.findByNameContainingIgnoreCase(name);
    }
}
