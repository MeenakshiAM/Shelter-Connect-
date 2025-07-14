package com.ShelterConnect.shelterConnect.repository;

import com.ShelterConnect.shelterConnect.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface UserRepo extends JpaRepository<User,Long> {
    @Query("SELECT u FROM User u WHERE u.name = :name AND u.password = :password")
    User findByNameAndPassword(@Param("name") String name, @Param("password") String password);

    Optional<User> findByEmail(String email);
}
