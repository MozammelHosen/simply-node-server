const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000

// Mildware configuration
app.use(cors());
app.use(express.json());

// add Mongodb

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.rq6dngb.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



const users = [
    {id:1, name: 'John', email: 'john@example.com'},
    {id:2, name: 'amith', email: 'amith@example.com'},
    {id:3, name: 'smith', email: 'smith@example.com'}
]
app.get("/users", (req, res) => {
    res.send(users)
})
// create data post request
app.post("/users", (req, res) => {
    console.log("post api called");
    const user = req.body;
    user.id= users.length+1;
    users.push(user)
    console.log(req.body);
    res.send(user);
})


app.get('/', (req, res) =>{
    res.send("node server starting")
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })