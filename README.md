## AuthExpress
<hr>

This is a REST API providing user authentication features. Featuring endpoints for user registration, login, and verification, it ensures secure password encryption and smooth user authentication.
<hr>

<h3> Features:</h3>
* When users register, their passwords are encrypted using salt for enhanced security.
* Process user login information by authenticating the email and password, comparing the hashed password stored in the database with the hashed password provided by the user, and generating a session token for authenticated users.
* Return the list of authenticated users. 
* Delete the user with a specific ID. Only authenticated users who are the owners of the account can perform this action.
* Update the information of the user with a specific ID. Only authenticated users who are the owners of the account can perform this action.

<h3> Installation </h3>

```bash
git clone https://github.com/ttruongg/AuthExpress.git

```
<h3> Navigate to the project directory </h3> 

```bash
cd AuthExpress

```

### install dependencies
```bash
npm install

```

<hr>
Your feedback and contributions are welcome!



