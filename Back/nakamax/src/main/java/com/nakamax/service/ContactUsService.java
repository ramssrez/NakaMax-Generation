package com.nakamax.service;

import com.nakamax.model.ContactUs;

import java.util.ArrayList;
import java.util.Optional;

public interface ContactUsService {
    ArrayList<ContactUs> findAll();

    Optional<ContactUs> findById(Integer id);

    void saveContactUs(ContactUs contactUs);

    void delete(Integer id);
}
