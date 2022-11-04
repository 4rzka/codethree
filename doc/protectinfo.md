## Some notes

Check the .env file you prob need to change the address to your own mongodb if it's not running

## Implemented REST API so far:

### Users:

Register new user POST /api/users
Authenticate a user POST /api/users/login
Get user data POST /api/users/me


### Posts:

Get posts GET /api/posts
Make a post POST /api/posts
Update post PUT /api/posts/:id
Delete post DELETE /api/posts/:id


## TODO:
Implement a client/frontend with login, logout, addUser, updateUser, 
removeUser, listUsers, addPost, listPosts