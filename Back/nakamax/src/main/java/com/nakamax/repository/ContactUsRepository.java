package com.nakamax.repository;

import com.nakamax.model.ContactUs;
import org.springframework.data.repository.CrudRepository;

import java.util.ArrayList;
import java.util.Optional;

public interface ContactUsRepository extends CrudRepository<ContactUs,Integer> {
    //Obtine todos los registros de los contactus
    ArrayList<ContactUs> findAll();
    
    //Obtinen los comentarios por id del comentario
    Optional<ContactUs> findById(Integer id);

}
