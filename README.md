#Local user authentication server using JWT.

This is a server with authentication using nodejs + express, its based on local database using mongodb.

to use it simply clone it then npm install the packages.

it is based on email and password , also using bcrypt to secure the password

routes
/signin
/signup

for  private routes use middleware requireAuth.

sign out must be handle on the client.

