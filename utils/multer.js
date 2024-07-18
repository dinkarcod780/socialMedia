const multer = require("multer");
const path = require("path");


const storage = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, "./public/images");
    },
    filename: (req,file,cb)=>{
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random()*1e9);

        const uppdatefilename = uniqueSuffix + path.extname(file.originalname);
        cb(null, uppdatefilename);
    },
});

const upload = multer({
    storage:storage
});

module.exports = upload;