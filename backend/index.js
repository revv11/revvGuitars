const express = require("express")
const app = express()
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const multer = require('multer')
const path = require('path')
const cors = require('cors')
const port = 4000;



app.use(express.json());
app.use(cors());
//database connect with mongodb
mongoose.connect('mongodb+srv://revv:revv11@cluster0.orhbdgl.mongodb.net/e-commerce')
    .then(()=>{
        app.listen(port, (err)=>{
            if(!err){
                console.log('listening on port '+ port)

            }
            else{
                console.log("Error:"+ err)
            }
        })
    })

//Image storage Engine

const storage  = multer.diskStorage({
    destination: './upload/images',
    filename: (req,file,cb)=>{
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage})

app.use('/images', express.static('./upload/images'))

app.get('/', (req,res)=>{
    res.send("Express app is running")
})

app.post('/upload', upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })

})