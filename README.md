# Employee Management System 👨‍💼👩‍💼

A **full-stack Employee Management System** built with **Spring Boot**, **React**, and **MySQL**.  
This project demonstrates CRUD operations, REST API development, and front-end integration with a responsive UI.

---

## 🚀 Features
- Add, update, view, and delete employees
- RESTful API with **Spring Boot**
- Persistent data storage using **MySQL**
- Frontend built with **React + Bootstrap**
- Axios integration for API calls
- Form validation & error handling
- Responsive and user-friendly design

---

## 🛠 Tech Stack
**Backend**
- Java 17  
- Spring Boot (REST API, JPA, Hibernate)  
- Maven (dependency management)  
- MySQL (database)  

**Frontend**
- React (Vite setup)  
- Axios (HTTP client)  
- Bootstrap (styling & layout)  
- npm (package management)  

**Other**
- Git & GitHub for version control  

---

## ⚙️ Installation & Setup

1. Clone the Repository
```bash
git clone https://github.com/akl5sz/employee-management-system.git
cd employee-management-system
```
2. Database Setup (MySQL)

- Make sure MySQL is installed and running locally (default port: 3306).
- Log into MySQL and create the database:
```SQL CREATE DATABASE ems;```


- Update ems-backend/src/main/resources/application.properties with your MySQL username and password:
```bash
spring.datasource.url=jdbc:mysql://localhost:3306/ems
spring.datasource.username=root
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
```

3. Backend (Spring Boot)
```bash
cd ems-backend
mvn clean install
mvn spring-boot:run
```
Backend will start at: http://localhost:8080

4. Frontend (React)
```bash
cd ems-frontend
npm install
npm run dev
```
Frontend will start at: http://localhost:3000
