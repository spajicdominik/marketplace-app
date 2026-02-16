package com.dspajic.marketplace.service;

import com.dspajic.marketplace.dao.LocationRepository;
import com.dspajic.marketplace.dto.userdisplay.LocationDisplayDto;
import com.dspajic.marketplace.entities.Location;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LocationServiceImpl implements LocationService{

    @Autowired
    LocationRepository repository;

    @Override
    public List<Location> getAllLocations() {
        return repository.getAllLocations();
    }

    @Override
    public Location getLocationById(Long id) {
        return repository.getLocationById(id);
    }

    @Override
    public Long addLocation(Location location) {
        return repository.addLocation(location);
    }

    @Override
    public Integer updateLocation(Location location) {
        return repository.updateLocation(location);
    }

    @Override
    public void deleteLocation(Integer id) {
        repository.deleteLocation(id);
    }

    @Override
    public LocationDisplayDto getLocationByCity(Integer cityId) {
        return repository.getLocationByCity(cityId);
    }
}
