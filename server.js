import "dotenv/config"
import express from "express";
const app = express()

const PORT = process.env.PORT || 6000

app.use(express.json())
app.use(express.urlencoded({extended:false}))


// app.get("/",(req,res)=>{
//     res.send("Hii my Gf")
// })

// route file
import routes from "./routes/index.js"
app.use(routes)

app.listen(PORT, () => console.log(`Server start on PORT ${PORT}`))