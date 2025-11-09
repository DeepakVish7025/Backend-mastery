What are Cookies?

Cookies chhoti data files hoti hain jo browser me store hoti hain — mainly user info, login sessions, ya preferences store karne ke liye.
Express me inhe handle karna easy hota hai using cookie-parser middleware.

🔹 Step 1: Install cookie-parser
npm install cookie-parser

🔹 Step 2: Use in Express App
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser()); // enable cookie parsing

// Set cookie
app.get('/setcookie', (req, res) => {
  res.cookie('username', 'Deepak', { maxAge: 60000, httpOnly: true });
  res.send('Cookie set successfully!');
});

// Get cookie
app.get('/getcookie', (req, res) => {
  const user = req.cookies.username;
  res.send(`Hello ${user || 'Guest'}`);
});

// Clear cookie
app.get('/clearcookie', (req, res) => {
  res.clearCookie('username');
  res.send('Cookie cleared!');
});

app.listen(3000, () => console.log('Server running on port 3000'));

🔹 Key Points:

👉 res.cookie(name, value, options) → Set cookie
👉 req.cookies → Get cookies
👉 res.clearCookie(name) → Delete cookie
👉 maxAge → Cookie expiry time (in ms)
👉 httpOnly → JS se access block (secure)

In short (Hinglish):
Express me cookies user info store karne ke liye hoti hain.
cookie-parser middleware se tum easily set, get, aur clear kar sakte ho.














What Are Headers and Status Codes in HTTP?
Headers in HTTP
Definition:
Headers are key-value pairs in an HTTP request or response that provide metadata about the communication. They influence how the server or client processes the message.

Types of Headers:

Request Headers:

Sent by the client to the server.
Example: User-Agent, Accept, Authorization.
Purpose: Specify client information, authentication, and desired response format.
Example:

GET /api/data HTTP/1.1
Host: example.com
User-Agent: Mozilla/5.0
Accept: application/json
Response Headers:

Sent by the server to the client.
Example: Content-Type, Set-Cookie, Cache-Control.
Purpose: Provide details about the server response, such as type and size of the data.
Example:

HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 123
Entity Headers:

Describe the body of the request or response.
Example: Content-Type, Content-Length, Content-Encoding.
Custom Headers:

Developers can create their own headers, usually prefixed with X- (e.g., X-Correlation-ID).
Status Codes in HTTP
Definition:
Status codes are numerical codes included in HTTP responses to indicate the outcome of the request.

Classification of Status Codes:

1xx: Informational

Indicates the request is being processed.
Example:
100 Continue: Request received, continue to send body.
101 Switching Protocols: Protocol switching in progress.
2xx: Success

The request was successful.
Example:
200 OK: The request was successful.
201 Created: A resource was created successfully.
204 No Content: The request succeeded but there's no content to send back.
3xx: Redirection

Further action is required to complete the request.
Example:
301 Moved Permanently: Resource moved to a new URL permanently.
302 Found: Temporary redirect to another URL.
304 Not Modified: Cached version can be used.
4xx: Client Errors

The client sent a bad request.
Example:
400 Bad Request: Invalid request from the client.
401 Unauthorized: Authentication is required.
403 Forbidden: The client doesn't have permission.
404 Not Found: Resource not found.
5xx: Server Errors

The server failed to fulfill a valid request.
Example:
500 Internal Server Error: Generic server error.
502 Bad Gateway: Invalid response from the upstream server.
503 Service Unavailable: The server is currently unavailable.
Headers and Status Code Example
Client Request:

GET /users HTTP/1.1
Host: api.example.com
Authorization: Bearer <token>
User-Agent: PostmanRuntime/7.29.0
Server Response:

HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 234
Set-Cookie: session_id=12345; HttpOnly
Key Points to Remember
Headers:

Facilitate communication by specifying request/response metadata.
Must follow syntax: Header-Name: Header-Value.
Status Codes:

A clear, concise indicator of what happened during the request.
Follow the classification to understand the nature of the response (informational, success, redirection, client, or server error).