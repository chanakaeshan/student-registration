# Student Registration

A project repository for managing student registration.

## Overview

This application provides functionality to register students, manage their information, and maintain a database of registered users. It is ideal for educational institutions or organizations requiring a simple registration system.

## Features

- Student sign-up and registration forms
- Storage and management of student information
- Basic CRUD operations for student records

## Technologies Used

- **JavaScript** (main language)
- Likely uses Node.js or a JavaScript-based framework for backend and/or frontend development (based on repo language)
- **Firebase Firestore** – Database
- **Firebase Admin SDK** – Authentication & Firestore access
- **Nodemailer** – Sending confirmation emails
- **dotenv** – Environment variable management

## Getting Started

To set up the project locally:

1. Clone this repository:
   ```sh
   git clone https://github.com/chanakaeshan/student-registration.git
   cd student-registration

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Configure environment variables**
    - Copy `.env.example` to `.env` and update values as needed.

4. **Start the server**
    ```bash
    npm start
    ```
    The server runs on `http://localhost:3000` by default.

    Run the Backend Server

    ```bash
    node server.js
    ```

   The server runs on port 5000 by default.
