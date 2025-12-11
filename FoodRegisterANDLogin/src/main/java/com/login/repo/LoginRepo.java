package com.login.repo;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.login.Entity.LoginEntity;

@Repository
public interface LoginRepo extends JpaRepository<LoginEntity, Integer>{
    Optional<LoginEntity> findByEmail(String email);
}
