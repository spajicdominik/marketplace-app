package com.dspajic.marketplace.controllers;

import com.dspajic.marketplace.entities.Country;
import com.dspajic.marketplace.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class CountryController {

    @Autowired
    CountryService service;

    @GetMapping("/countries")
    public List<Country> getAllCountrys() {
        return service.getAllCountrys();
    }

    @GetMapping("/countries/{id}")
    public Country getCountryById(@PathVariable("id") Integer id) {
        return service.getCountryById(id);
    }

    @PostMapping("/countries")
    public Integer addCountry(@RequestBody Country entity) {
        return service.addCountry(entity);
    }

    @PutMapping("/countries")
    public int updateCountry(@RequestBody Country entity) {
        return service.updateCountry(entity);
    }

    @DeleteMapping("/countries/{id}")
    public void deleteCountry(@PathVariable("id") Integer id) {
        service.deleteCountry(id);
    }
}
