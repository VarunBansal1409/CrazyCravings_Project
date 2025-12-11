package com.login.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.login.Entity.FoodEntity;
import com.login.service.FoodService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class FoodController {

    @Autowired
    private FoodService service;

    // Get all foods
    @GetMapping("/foods")
    public List<FoodEntity> getFoods() {
        return service.getAllFood();
    }

    // Add food
    @PostMapping("/foods")
    public FoodEntity addFood(@RequestBody FoodEntity food) {
        return service.addFood(food);
    }

    // Get single food by id
    @GetMapping("/foods/{id}")
    public FoodEntity getFood(@PathVariable Long id) {
        return service.getFoodById(id).orElse(null);
    }

    // Search food by name: /api/foods/search?name=pizza
    @GetMapping("/foods/search")
    public List<FoodEntity> searchFoods(@RequestParam String name) {
        return service.searchFood(name);
    }
}
