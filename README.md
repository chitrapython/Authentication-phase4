User Authentication System

Main Goal:

The main goal of this project is to securely manage user access to a website or application.
It allows users to register, log in, and log out safely, ensuring that only authorized users can access certain pages or data.




Features:

User registration (sign up)

User login with username/email and password

Password encryption for security

Forgot password/reset option

Logout function

Session or token-based authentication

Access control (only logged-in users can see protected pages)





Technologies Used:

Frontend: HTML, CSS, JavaScript

Backend: Node.js, Express.js

Database: MongoDB

Security: bcrypt (for password hashing), JSON Web Token (JWT) or session

Hosting (optional): GitHub, Render, or Vercel





 How It Works:

1. The user registers by entering their name, email, and password.


2. The password is hashed (encrypted) and stored in the database.


3. The user logs in with their email and password.


4. The system verifies the login details:

If correct → user gets access.

If wrong → error message shown.



5. After login, the system creates a session or token to keep the user logged in.


6. When the user logs out, the session/token is destroyed.
