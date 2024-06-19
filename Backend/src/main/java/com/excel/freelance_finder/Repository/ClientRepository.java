package com.excel.freelance_finder.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.excel.freelance_finder.entity.ClientUser;

public interface ClientRepository extends JpaRepository<ClientUser, Integer> {

	Optional<ClientUser> findByClientEmail(String clientEmail);
}
