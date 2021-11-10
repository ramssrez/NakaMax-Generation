package com.nakamax.service;

import com.nakamax.model.ContactUs;
import com.nakamax.repository.ContactUsRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class ContactUsServiceImpl implements ContactUsService{
    private final ContactUsRepository contactUsRepository;

    public ContactUsServiceImpl(ContactUsRepository contactUsRepository) {
        this.contactUsRepository = contactUsRepository;
    }

    @Override
    public ArrayList<ContactUs> findAll() {
        return contactUsRepository.findAll();
    }

    @Override
    public Optional<ContactUs> findById(Integer id) {
        return contactUsRepository.findById(id);
    }

    @Override
    public void saveContactUs(ContactUs contactUs) {
        contactUsRepository.save(contactUs);
    }

    @Override
    public void delete(Integer id) {
        contactUsRepository.deleteById(id);
    }
}
