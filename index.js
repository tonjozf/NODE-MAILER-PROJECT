const express = require('express')
const app = express()
const port = 4000
app.use(express.json())
const routes = require('./Routes/route')

app.use(('/'),routes)









app.listen(port,()=>{console.log(`server is running on port ${port}`)})