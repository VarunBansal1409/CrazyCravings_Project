package com.login.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.login.Entity.FoodEntity;
import com.login.Entity.PartnerEntity;
import com.login.repo.FoodRepository;
import com.login.repo.PartnerRepository;

@Service
public class PartnerService {

    @Autowired
    private PartnerRepository partnerRepo;

    @Autowired
    private FoodRepository foodRepo;

    public PartnerEntity addPartnerFood(PartnerEntity partnerFood) {
        return partnerRepo.save(partnerFood);
    }

    public List<PartnerEntity> getAllPartners() {
        return partnerRepo.findAll();
    }

    public boolean deletePartner(Integer id) {
        if (partnerRepo.existsById(id)) {
            partnerRepo.deleteById(id);
            return true;
        } else {
            return false;
        }
    }

    public List<PartnerEntity> getByPartnerNo(String partnerNo) {
        return partnerRepo.findByPartnerNo(partnerNo);
    }

    public List<FoodEntity> getAllFoodsCombined() {
        List<FoodEntity> mainFoods = foodRepo.findAll();
        List<PartnerEntity> partners = partnerRepo.findAll();

        System.out.println("PartnerService: Main foods found: " + mainFoods.size());
        System.out.println("PartnerService: Partners found: " + partners.size());

        List<FoodEntity> combined = new ArrayList<>(mainFoods);

        for (PartnerEntity p : partners) {
            FoodEntity f = new FoodEntity(p.getName(), p.getPrice(), p.getImage());
            f.setId(1000000L + p.getId());
            combined.add(f);
        }

        System.out.println("PartnerService: Total combined foods: " + combined.size());
        return combined;
    }
}
