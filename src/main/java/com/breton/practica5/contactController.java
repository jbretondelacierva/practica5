package com.breton.practica5;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class contactController {

    private java.util.ArrayList<Contact> contactList = new java.util.ArrayList<Contact>();

    @GetMapping("/contact")
    public Contact getLastContact(){
        return contactList.get(contactList.size()-1);
    }

    @PostMapping("/contact")
    public Contact postContact(@RequestBody Contact contacto)
    {
        contactList.add(contacto);
        return contactList.get(contactList.size()-1);
    }

}
