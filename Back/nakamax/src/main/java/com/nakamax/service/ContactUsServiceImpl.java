package com.nakamax.service;

import com.nakamax.model.ContactUs;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class ContactUsServiceImpl implements ContactUsService{
    private final ContactUsService contactUsService;

    public ContactUsServiceImpl(ContactUsService contactUsService) {
        this.contactUsService = contactUsService;
    }

    @Override
    public ArrayList<ContactUs> findAll() {
        return contactUsService.findAll();
    }

    @Override
    public Optional<ContactUs> findById(Integer id) {
        return contactUsService.findById(id);
    }

    @Override
    public void saveContactUs(ContactUs contactUs) {
        contactUsService.saveContactUs(contactUs);
    }

    @Override
    public void delete(Integer id) {
        contactUsService.delete(id);
    }
}
