package com.dspajic.marketplace.service;

import com.dspajic.marketplace.entities.Location;

import java.util.List;

public interface LocationService {
    List<Location> getAllLocations();
    Location getLocationById(Integer id);
    Integer addLocation(Location entity);
    Integer updateLocation(Location entity);
    void deleteLocation(Integer id);
}
