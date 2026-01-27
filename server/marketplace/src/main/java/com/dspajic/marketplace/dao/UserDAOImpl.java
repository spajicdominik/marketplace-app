package com.dspajic.marketplace.dao;

import com.dspajic.marketplace.entities.User;
import jakarta.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public class UserDAOImpl implements UserDAO {

    private EntityManager entityManager;

    @Autowired
    public UserDAOImpl(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    @Transactional      //since we are preforming an update on a database
    public void save(User theUser) {
        entityManager.persist(theUser);
    }
}
