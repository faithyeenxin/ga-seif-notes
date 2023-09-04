## React FrontEnd with Express Backend + MongoDB/Mongoose ORM Database

Here's an example of how a simple React front end can connect to an Express backend.
To start the repo and to see everything working, please perform the steps below:

### TO GET FRONT END UP & RUNNING 🤓

```javascript
cd client
npm install
npm run dev
```

### TO GET FRONT END UP & RUNNING 🥸

```javascript
cd server
npm install
npm run start OR nodemon server.js
```

##### <em>to note: if you are using nodemon, make sure it's installed </em>

In order for our backend to display data i've created seed routes (eg line 30 - 54 in server.js) this allows me to have some data in my database in any situation where i restart my server and lose my data.

this is also good for deployment if you do not want to manually insert data through your frontend repeatedly.

Thus to initiate this / in order for my front end to display data i have to initiate the seed.

to seed products, simply visit:
http://localhost:3100/seed

to seed clients, simply visit:
http://localhost:3100/clients/seed

### So what's should I know or do to get data to be served?

1. set up express and database (mongo/mongoose)
2. set up models/schema which determines how our data would be (2 METHODS):

- 2a. directly in server.js (see products)
- 2b. controller (see client)

3. create routes that we can call either from POSTMAN or through our browser which serves data
4. ensure that front end are able to fetch the data (CORS)
5. perform fetch method on the front end! make sure url is the same as where backend is hosted (see port)
