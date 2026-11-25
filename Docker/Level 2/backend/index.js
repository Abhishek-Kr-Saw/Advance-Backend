import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()

const port = process.env.PORT || 5000

const app = express()
app.use(cors())

app.get('/', (req,res) => {
    return res.status(200).json({
        'message':"Hello from docker level2"
    })
})

app.listen(port, () =>{
    console.log(`Server is running on ${port}`)
})

