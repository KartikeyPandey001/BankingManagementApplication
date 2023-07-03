package com.app;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.shadow.com.univocity.parsers.annotations.Replace;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;

import com.app.dao.IUserDao;
import com.app.entities.User;

@SpringBootTest
@DataJpaTest

class Demo21ApplicationTests {
	@Autowired
	private IUserDao dao;
	

	@Test
	void testFindByEmailAndPassword() {
		assertNotNull(dao);
	//	assertNull(userService);
		User user = dao.findByEmailAndPassword("abc", "1234");
				
		assertEquals("Rama", user.getFirstName());

	}

}
