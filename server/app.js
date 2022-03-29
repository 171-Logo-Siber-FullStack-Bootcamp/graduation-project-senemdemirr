const express = require('express');
const cors = require('cors');
const router = require("./routes/routes.js");
const fileUpload = require("express-fileupload");

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());
app.use("/", router)
app.use(fileUpload())

app.post("/upload", async (req, res) => {
    if (!req.files){
        return res.status(500).send({
            msg: "Dosya bulunamadı."
        })
    }

    const file = req.files.file;

    await file.mv(`./public/uploads/${file.name}`, function (err){
        if (err) {
            console.log(err)
            return res.status(500).send({ msg: "Hata oluştu."})
        }
        return res.send({name: file.name, path: `/${file.name}`});
    })
})

// Listen
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

