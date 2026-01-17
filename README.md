
# Appointment Scheduling REST API

This project is a full-stack Appointment Scheduling application, featuring a Spring Boot REST API backend and a Vite/React frontend. It allows users to create, view, update, and manage appointments efficiently.

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Backend Setup (Spring Boot)](#backend-setup-spring-boot)
- [Frontend Setup (Vite/React)](#frontend-setup-viterea)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [License](#license)

---

## Features
- User registration and management
- Appointment creation, update, and deletion
- View appointments by user
- RESTful API design
- Modern React frontend (Vite)

## Project Structure

```
Appointment-Scheduling-REST-API-/
│   README.md
│
├── appointment/                # Spring Boot backend
│   ├── pom.xml
│   └── src/
│       └── main/java/com/example/appointment/
│           ├── controller/
│           ├── model/
│           ├── repository/
│           └── service/
│
├── appointment-frontend/       # Vite/React frontend
│   ├── package.json
│   └── src/
│       ├── api/
│       └── components/
└── ...
```

## Backend Setup (Spring Boot)

1. Navigate to the backend directory:
	```sh
	cd appointment
	```
2. Build and run the application:
	```sh
	./mvnw spring-boot:run
	```
	The API will be available at `http://localhost:8080` by default.

## Frontend Setup (Vite/React)

1. Navigate to the frontend directory:
	```sh
	cd appointment-frontend
	```
2. Install dependencies:
	```sh
	npm install
	```
3. Start the development server:
	```sh
	npm run dev
	```
	The app will be available at `http://localhost:5173` by default.

## API Endpoints

### User Endpoints
- `POST /users` - Create a new user
- `GET /users/{id}` - Get user by ID
- `GET /users` - List all users

### Appointment Endpoints
- `POST /appointments` - Create a new appointment
- `GET /appointments` - List all appointments
- `GET /appointments/{id}` - Get appointment by ID
- `PUT /appointments/{id}` - Update appointment
- `DELETE /appointments/{id}` - Delete appointment
- `GET /users/{userId}/appointments` - List appointments for a user

## Usage

1. Start the backend server (Spring Boot)
2. Start the frontend server (Vite/React)
3. Access the frontend in your browser and interact with the API

## License

This project is licensed under the MIT License.
