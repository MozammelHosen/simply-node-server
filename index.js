const express = require('express');
const app = express();
const port = process.env.PORT || 5000

// Mildware configuration

const users = [
    {id:1, name: 'John', email: 'john@example.com'},
    {id:1, name: 'amith', email: 'amith@example.com'},
    {id:1, name: 'smith', email: 'smith@example.com'}
]
app.get("/users", (req, res) => {
    res.send(users)
})

app.get('/', (req, res) =>{
    res.send("node server starting")
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })