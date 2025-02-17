package com.example.graphql.controllers;

import com.example.graphql.entities.Book;
import com.example.graphql.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@RestController
//@RequestMapping("/books")
@Controller
public class BookController {
    @Autowired
    private BookService bookService;

    //create
//    @PostMapping
    @MutationMapping("createBook")
    public Book create(@Argument BookInput book){
        Book b = new Book();
        b.setTitle(book.getTitle());
        b.setAuthor(book.getAuthor());
        b.setPrice(book.getPrice());
        b.setPages(book.getPages());
        b.setDesc(book.getDesc());
        return this.bookService.create(b);
    }

    //get all
//    @GetMapping
    @QueryMapping("allBooks")
    public List<Book> getAll() {
        return this.bookService.getAll();
    }

    //get single book
//    @GetMapping("/{bookId}")
    @QueryMapping("getBook")
    public Book get(@Argument int bookId) {
        return this.bookService.get(bookId);
    }

}

class BookInput {
    private String title;
    private String desc;
    private String author;
    private double price;
    private int pages;

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public void setPages(int pages) {
        this.pages = pages;
    }


    public String getTitle() {
        return title;
    }

    public String getDesc() {
        return desc;
    }

    public String getAuthor() {
        return author;
    }

    public double getPrice() {
        return price;
    }

    public int getPages() {
        return pages;
    }
}