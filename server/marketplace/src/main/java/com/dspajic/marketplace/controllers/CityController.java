package com.dspajic.marketplace.controllers;

import com.dspajic.marketplace.dto.newpost.CityDto;
import com.dspajic.marketplace.entities.City;
import com.dspajic.marketplace.service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class CityController {

    @Autowired
    CityService service;

    @GetMapping("/cities")
    public List<City> getAllCitys() {
        return service.getAllCitys();
    }

    @GetMapping("/cities/{id}")
    public City getCityById(@PathVariable("id") Integer id) {
        return service.getCityById(id);
    }

    @PostMapping("/cities")
    public Integer addCity(@RequestBody City entity) {
        return service.addCity(entity);
    }

    @PutMapping("/cities")
    public int updateCity(@RequestBody City entity) {
        return service.updateCity(entity);
    }

    @DeleteMapping("/cities/{id}")
    public void deleteCity(@PathVariable("id") Integer id) {
        service.deleteCity(id);
    }

    @GetMapping("/cities/county/{id}")
    public List<CityDto> getCityByCountyId(@PathVariable("id") Integer id) {
        return service.getCityByCountyId(id);
    }
}
