## Some notes

Check the .env file you prob need to change the address to your own mongodb if it's not running

## Implemented REST API so far:

### Users:

1. Register new user POST /api/users
2. Authenticate a user POST /api/users/login
3. Get user data GET /api/users/me
4. Get users GET /api/users/


### Posts:

1. Get posts GET /api/posts
2. Make a post POST /api/posts
3. Update post PUT /api/posts/:id
4. Delete post DELETE /api/posts/:id


## TODO:
Implement a client/frontend with login, logout, addUser, updateUser, 
removeUser, listUsers, addPost, listPosts