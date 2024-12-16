// Our dependecies
const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const multer = require('multer')
const path = require('path')

// help in user submited
const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static('public'))

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

// Import files from add book
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.fieldname === 'file') {
            cb(null, 'public/files');
        } else if (file.fieldname === 'image') {
            cb(null, 'public/images');
        }
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + '-' + file.originalname);
    }
});

const upload = multer({
    storage: fileStorage
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

// app.post('/dashboard/add-book',upload.fields([{name:'file'},{name:'image'}]), (req, res)=>{
//     const {bookName, author, type} = req.body
//     const filePath = req.files.file ? req.files.file[0].path : null;
//     const imagePath = req.files.image ? req.files.image[0].path : null;

//     if(!filePath){
//         return res.status(400).json({error: "File upload failed"});
//     }

//     const SQL = 'INSERT INTO books (bookName, author,bookImage,type, path) VALUES (?,?,?,?,?)'
//     const Values = [bookName, author, imagePath,type, filePath]

//     db.query(SQL, Values, (err, results)=>{
//         if(err){
//             res.send(err)
//         }else{
//             console.log('Book added successful!')
//             res.send({message: "Book Added"})
//         }
//     })
// })

app.post('/dashboard/add-book', upload.fields([{ name: 'file' }, { name: 'image' }]), (req, res) => {
    const { bookName, author, type } = req.body;
    const filePath = req.files.file ? req.files.file[0].path : null;
    const imagePath = req.files.image ? req.files.image[0].path : null;

    if (!filePath) {
        return res.status(400).json({ error: 'File upload failed' });
    }

    const SQL = 'INSERT INTO books (bookName, author, bookImage, type, path) VALUES (?,?,?,?,?)';
    const Values = [bookName, author, imagePath, type, filePath];

    db.query(SQL, Values, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            console.log('Book added successfully!');
            res.send({ message: "Book Added" });
        }
    });
});

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