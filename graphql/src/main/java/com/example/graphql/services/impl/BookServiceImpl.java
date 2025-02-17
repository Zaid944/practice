package com.example.graphql.services.impl;

import com.example.graphql.entities.Book;
import com.example.graphql.repositories.BookRepo;
import com.example.graphql.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

//autowire
@Service
public class BookServiceImpl implements BookService {

    private BookRepo bookRepo;

    @Autowired
    public BookServiceImpl(BookRepo bookRepo) {
        this.bookRepo = bookRepo;
    }

    @Override
    public Book create(Book book) {
        return this.bookRepo.save(book);
    }

    @Override
    public List<Book> getAll() {
        return this.bookRepo.findAll();
    }

    @Override
    public Book get(int bookId) {
        return this.bookRepo.findById(bookId).orElseThrow(() -> new RuntimeException("Book you are looking for not found on server !!"));
    }
}
