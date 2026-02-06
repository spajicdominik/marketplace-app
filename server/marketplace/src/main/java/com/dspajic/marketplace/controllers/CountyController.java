package com.dspajic.marketplace.controllers;

import com.dspajic.marketplace.entities.County;
import com.dspajic.marketplace.service.CountyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class CountyController {

    @Autowired
    CountyService service;

    @GetMapping("/counties")
    public List<County> getAllCountys() {
        return service.getAllCountys();
    }

    @GetMapping("/counties/{id}")
    public County getCountyById(@PathVariable("id") Integer id) {
        return service.getCountyById(id);
    }

    @PostMapping("/counties")
    public Integer addCounty(@RequestBody County entity) {
        return service.addCounty(entity);
    }

    @PutMapping("/counties")
    public int updateCounty(@RequestBody County entity) {
        return service.updateCounty(entity);
    }

    @DeleteMapping("/counties/{id}")
    public void deleteCounty(@PathVariable("id") Integer id) {
        service.deleteCounty(id);
    }
}
