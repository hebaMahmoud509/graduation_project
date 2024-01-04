# Diabetes Complication Detection System

## Overview

This project is an AI-powered system designed to detect diabetes complications, specifically Diabetic Foot Ulcers (DFU) and Diabetic Retinopathy (DR). The system includes models for lab technicians and patients, controllers for managing patients and users, and views for email templates.

## Technologies Used

- Node.js
- MongoDB
- Flask
- Twilio
- JWT

## Folder Structure

- `models/`: Contains user and patient models.
- `controllers/`: Includes controllers for patients and users.
- `views/`: Contains email templates.
- `server.js`: Main Node.js server file.
- `app.py`: Flask application file.

## Models

### User Model

- Name
- Email (must be unique)
- Hashed Password
- National ID (must be unique)
- Phone Number
- Timestamp for creating and updating the record

### Patient Model

- Name
- National ID
- Phone Number
- Gender
- Address
- Foot Image Path on the Server
- Retina Image Path on the Server
- Foot Ulcer Diagnosis
- Retina Diagnosis
- Timestamp for adding and updating records

## Controllers

### Patient Controller

1. **Add Patient**: Adding new patients to the database.
2. **Get Patient**: Fetch a specific patient using their national id.
3. **Update Patient**: Update the patient’s information or add new attributes.
4. **Diagnose DFU**: Check if the patient has DFU.
5. **Diagnose DR**: Check if the patient has DR.

### User Controller

1. **Register User**: Signup lab technicians.
2. **Authenticate User**: Sign in users.
3. **Forget Password**: When a user requests to reset their password or forgot it, it sends an email with the URL to direct them to the password reset page.
4. **Password Reset**: Enter the new password to reset it.

## Views

1. **Email Template - Signup Confirmation**: Sent when the user registers to confirm signup.
2. **Email Template - Password Reset**: Contains the URI for password resetting.

## Setup Instructions

1. Install Node.js, MongoDB, Flask, and other dependencies.
2. Set up your MongoDB database and configure connection details in `server.js`.
3. Set up Twilio credentials for SMS functionalities.
4. Update JWT secret in your authentication process.
5. Run the Node.js server using `node server.js`.
6. Run the Flask application using `python app.py`.
