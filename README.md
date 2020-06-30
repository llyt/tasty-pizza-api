# Tasty Pizza API

It's an API for head project [Tasty Pizza](https://github.com/llyt/tasty-pizza).

# How to use

Clone project to local machine
```
git clone git@github.com:llyt/tasty-pizza-api.git
```

Install dependencies
```
npm install
```

Add environment variable for DB connection
```
touch .env
```

Into `.env` put your Mongo Atlas credentials in variable `MONGO_URL`

and

```
npm run dev
```


#Build with

- [Express](https://github.com/expressjs/express)
- [Mongoose ODM](https://github.com/Automattic/mongoose)
- [MongoDB Atlas](https://www.mongodb.com/)