## AuthExpress
<hr>

This is a REST API providing user authentication features. Featuring endpoints for user registration, login, and verification, it ensures secure password encryption and smooth user authentication.
<hr>

<h3> Features:</h3>
<ul>
  <li>When users register, their passwords are encrypted using salt for enhanced security.</li>
  <li>Process user login information by authenticating the email and password, comparing the hashed password stored in the database with the hashed password provided by the user, and generating a session token for authenticated users.</li>
  <li>Return the list of authenticated users. </li>
  <li>Delete the user with a specific ID. Only authenticated users who are the owners of the account can perform this action.</li>
  <li>Update the information of the user with a specific ID. Only authenticated users who are the owners of the account can perform this action.</li>
</ul>

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
<h3> The API has the following endpoints: </h3>

| Methods |  URLs  | Action |
|:-----|:--------:|------:|
| POST   | /auth/login | Authenticates a user by validating their email and password, and creates a session token for the authenticated user. |
| POST   | /auth/register | Registers a new user by creating an account with a username, email, and password, where the password is hashed for security |
| GET   | /users | Retrieves a list of authenticated users |
| DELETE   | /user/:id | Deletes a user with a specific ID. Only authenticated users who are the account owners can perform this action |
| PATCH   | /users/:id | Updates the information of a user with a specific ID. Only authenticated users who are the account owners can perform this action. |

<hr>
Your feedback and contributions are welcome!



