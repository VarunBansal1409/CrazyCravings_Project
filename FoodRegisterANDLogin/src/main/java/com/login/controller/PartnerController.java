package com.login.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.login.Entity.FoodEntity;
import com.login.Entity.PartnerEntity;
import com.login.service.PartnerService;

@RestController
@RequestMapping("/api")

public class PartnerController {

    @Autowired
    private PartnerService partnerService;

    @PostMapping("/partners")
    public PartnerEntity addPartnerFood(@RequestBody PartnerEntity partnerFood) {
        return partnerService.addPartnerFood(partnerFood);
    }

    @GetMapping("/partners")
    public List<PartnerEntity> getAllPartners() {
        return partnerService.getAllPartners();
    }

    @DeleteMapping("/partners/{id}")
    public ResponseEntity<Void> deletePartner(@PathVariable Integer id) {
        boolean removed = partnerService.deletePartner(id);
        if (removed) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/foods/all")
    public List<FoodEntity> getAllFoodsCombined() {
        System.out.println("PartnerController: Requesting all foods combined");
        return partnerService.getAllFoodsCombined();
    }

    @GetMapping("/partners/byNumber/{partnerNo}")
    public ResponseEntity<List<PartnerEntity>> getByPartnerNo(@PathVariable String partnerNo) {
        System.out.println("PartnerController: Searching for partner with number: " + partnerNo);
        List<PartnerEntity> items = partnerService.getByPartnerNo(partnerNo);
        System.out.println("PartnerController: Found " + items.size() + " items for number: " + partnerNo);
        return ResponseEntity.ok(items);
    }
}
