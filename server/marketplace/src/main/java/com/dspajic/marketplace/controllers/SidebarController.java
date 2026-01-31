package com.dspajic.marketplace.controllers;

import com.dspajic.marketplace.dto.SidebarDto;
import com.dspajic.marketplace.entities.SidebarItem;
import com.dspajic.marketplace.service.SidebarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class SidebarController {
    @Autowired
    SidebarService sidebarService;

    @GetMapping("/get-all-sidebar-items")
    public List<SidebarItem> getAllSidebarItems() {
        return sidebarService.getAllSidebarItems();
    }

    @GetMapping("/get-sidebar-list")
    public List<SidebarDto> getSidebarItems() {
        return sidebarService.getSidebarDto();
    }
}
