// Our dependecies
const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

// help in user submited
app.use(express.json())
app.use(cors())

// run sever
app.listen(3002, ()=>{
    console.log('Sever is running on port 3002')
})

// Database (mysql)
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'ldb',
})

// register user
app.post('/register', (req, res)=>{
    // We need to get variables sent from the form
    const sentEmail = req.body.Email
    const sentUserName = req.body.UserName
    const sentPassword = req.body.Password

    // Create SQL statement to insert the user to the Database table
    const SQL = 'INSERT INTO users (email, username,password) VALUES (?,?,?)'
    const Values = [sentEmail, sentUserName, sentPassword]

    // Execute the sql statement stated above
    db.query(SQL, Values, (err, results)=>{
        if(err){
            res.send(err)
        }else{
            console.log('User inserted successful')
            res.send({message:'User Added'})
        }
    })
})

app.post('/dashboard/add-book', (req, res)=>{
    const bookName = req.body.bookName
    const author = req.body.author
    const type = req.body.type
    const file = req.body.file

    const SQL = 'INSERT INTO books (book_name, author,type,file_path) VALUES (?,?,?,?)'
    const Values = [bookName, author, type, file]

    db.query(SQL, Values, (err, results)=>{
        if(err){
            res.send(err)
        }else{
            console.log('Book added successful!')
            res.send({message: "Book Added"})
        }
    })
})

// login user
app.post('/login', (req,res)=>{
    // We need to get variables sent from the form
    const sentloginUserName = req.body.LoginUserName
    const sentloginPassword = req.body.LoginPassword

    // Create SQL statement to insert the user to the Database table
    const SQL = 'SELECT * FROM users WHERE username = ? && password = ?'
    const Values = [sentloginUserName, sentloginPassword]

    // Execute the sql statement stated above
    db.query(SQL, Values, (err, results)=>{
        if(err){
            res.send({error: err})
        }

        if(results.length > 0){
            res.send(results)
        }else{
            res.send({message: "Credentials Don't match!"})
        }
    })
        
})