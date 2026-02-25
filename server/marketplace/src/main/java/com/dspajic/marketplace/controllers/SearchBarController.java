package com.dspajic.marketplace.controllers;

import com.dspajic.marketplace.dto.searchbar.SearchBarDto;
import com.dspajic.marketplace.entities.Product;
import com.dspajic.marketplace.service.SearchBarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class SearchBarController {
    @Autowired
    SearchBarService service;

    @GetMapping("/search-bar-items")
    public SearchBarDto getSearchBar() {
        return service.getDto();
    }
}
