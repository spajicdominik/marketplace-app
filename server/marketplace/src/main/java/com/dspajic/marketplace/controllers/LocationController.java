package com.dspajic.marketplace.controllers;

import com.dspajic.marketplace.dto.userdisplay.LocationDisplayDto;
import com.dspajic.marketplace.entities.Location;
import com.dspajic.marketplace.service.LocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class LocationController {

    @Autowired
    LocationService service;

    @GetMapping("/locations")
    public List<Location> getAllLocations() {
        return service.getAllLocations();
    }

    @GetMapping("/locations/{id}")
    public Location getLocationById(@PathVariable("id") Long id) {
        return service.getLocationById(id);
    }

    @PostMapping("/locations")
    public Long addLocation(@RequestBody Location entity) {
        return service.addLocation(entity);
    }

    @PutMapping("/locations")
    public int updateLocation(@RequestBody Location entity) {
        return service.updateLocation(entity);
    }

    @DeleteMapping("/locations/{id}")
    public void deleteLocation(@PathVariable("id") Integer id) {
        service.deleteLocation(id);
    }

    @GetMapping("/location-full/{city_id}")
    public LocationDisplayDto getLocationByCity(@PathVariable Integer city_id) { return service.getLocationByCity(city_id); }
}
