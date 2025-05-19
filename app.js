import express from "express";

const app = express()




app.get('/', (req, res) => {
    res.json({
        message: "Hello backend working"
    })
})

app.listen(3000)