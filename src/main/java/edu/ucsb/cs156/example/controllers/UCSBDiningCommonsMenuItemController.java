package edu.ucsb.cs156.example.controllers;

import edu.ucsb.cs156.example.entities.UCSBDiningCommonsMenuItem;
import edu.ucsb.cs156.example.errors.EntityNotFoundException;
import edu.ucsb.cs156.example.repositories.UCSBDiningCommonsMenuItemRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import javax.validation.Valid;
@Api(description = "UCSBDiningCommonsMenuItem")
@RequestMapping("/api/UCSBDiningCommonsMenuItem")
@RestController
@Slf4j
public class UCSBDiningCommonsMenuItemController extends ApiController {
    @Autowired
    UCSBDiningCommonsMenuItemRepository ucsbDiningCommonsMenuItemRepository;
    @ApiOperation (value = "List of all UCSB Dining Commons Menu Items")
    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("/all")
    public Iterable<UCSBDiningCommonsMenuItem> allMenuItems() {
        Iterable<UCSBDiningCommonsMenuItem> menuitems = ucsbDiningCommonsMenuItemRepository.findAll();
        return menuitems;
    }
    @ApiOperation(value = "Get a UCSB dining commons menu item")
    @PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping("")
    public UCSBDiningCommonsMenuItem getById(
        @ApiParam("id") @RequestParam Long id){
            UCSBDiningCommonsMenuItem menuItem = ucsbDiningCommonsMenuItemRepository.findById(id)
            .orElseThrow(() -> new EntityNotFoundException(UCSBDiningCommonsMenuItem.class, id));
            return menuItem;
    }
    @ApiOperation(value = "Create a new menu item")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PostMapping("/post")
    public UCSBDiningCommonsMenuItem postMenuItem(
        @ApiParam("diningCommonsCode")@RequestParam String diningCommonsCode,
        @ApiParam("name") @RequestParam String name,
        @ApiParam("station") @RequestParam String station
        )
    {
            UCSBDiningCommonsMenuItem menuitem = new UCSBDiningCommonsMenuItem();
            menuitem.setDiningCommonsCode(diningCommonsCode);
            menuitem.setName(name);
            menuitem.setStation(station);
    
            UCSBDiningCommonsMenuItem savedMenuItem = ucsbDiningCommonsMenuItemRepository.save(menuitem);
    
            return savedMenuItem;
    }

    @ApiOperation(value = "Delete a UCSB dining commons menu item")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @DeleteMapping("")
    public Object deleteMenuItem(
            @ApiParam("id") @RequestParam Long id) {
        UCSBDiningCommonsMenuItem menuitem = ucsbDiningCommonsMenuItemRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException(UCSBDiningCommonsMenuItem.class, id));

        ucsbDiningCommonsMenuItemRepository.delete(menuitem);
        return genericMessage("UCSBDiningCommonsMenuItem with the id of %s is deleted".formatted(id));
    }
    @ApiOperation(value = "Update a single UCSB Dining Commons Menu item")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PutMapping("")
    public UCSBDiningCommonsMenuItem updateMenuItem(
        @ApiParam("id") @RequestParam Long id,
        @RequestBody @Valid UCSBDiningCommonsMenuItem incoming) {

        UCSBDiningCommonsMenuItem menuitem = ucsbDiningCommonsMenuItemRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException(UCSBDiningCommonsMenuItem.class, id));
        menuitem.setName(incoming.getName());
        menuitem.setDiningCommonsCode(incoming.getDiningCommonsCode());
        menuitem.setStation(incoming.getStation());
        ucsbDiningCommonsMenuItemRepository.save(menuitem);

        return menuitem;
    }   
  

}

