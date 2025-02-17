package com.example.graphql;

import com.example.graphql.entities.Book;
import com.example.graphql.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class GraphqlApplication implements CommandLineRunner {

	@Autowired
	private BookService bookService;

	public static void main(String[] args) {
		SpringApplication.run(GraphqlApplication.class, args);

	}

	@Override
	public void run(String... args) throws Exception {
		Book b1 = new Book();
		b1.setTitle("complete book 1");
		b1.setDesc("learning");
		b1.setPages(1000);
		b1.setPrice(10000);
		b1.setAuthor("zaid");

		Book b2 = new Book();
		b2.setTitle("complete book 2");
		b2.setDesc("learning");
		b2.setPages(1000);
		b2.setPrice(10000);
		b2.setAuthor("zaid");

		this.bookService.create(b1);
		this.bookService.create(b2);
	}
}
