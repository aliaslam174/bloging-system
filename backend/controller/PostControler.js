const createpost = require('../models/CreatePost');
const cloudinary = require('cloudinary');
const fs = require('fs')
// create post  


          
cloudinary.config({ 
  cloud_name: 'dd9j1ch02', 
  api_key: '869668443839681', 
  api_secret: 'ycXFVP-c-koPJE9W0KV7r_WxPec' 
});

const createpostctr = async (req, res) => {
    try {

        console.log(req.body)
        
        // console.log(req.file)
        // // console.log(req.body)

        // const extension = req.file.mimetype.split("/")[1];
        // if (extension == "png" || extension == "jpg" || extension == "jpeg") {
        //     const fileName = req.file.filename + "." + extension;
        //     req.body.image = fileName
        //     console.log(fileName)

        //     fs.rename(req.file.path, `uploads/${fileName}`, () => {
        //         console.log("\nFile Renamed!\n");
        //     })
        // }
        // else {

        //     fs.unlink(req.file.path, () => console.log("file deleted"))
        //     return res.json({
        //         message: "only images are accepted"
        //     })
        // }
        // await createpost.create(
        //     req.body
        // )

        const b64 = Buffer.from(req.file.buffer).toString("base64");

        let dataURI = "data:" + req.file.mimetype + ";base64," + b64;

        const photoObject = await cloudinary.v2.uploader.upload(dataURI);



        // create post
        const newPost = await createpost.create({ content: req.body.content, imageUrl: photoObject.url, authorId: req.userId });
        return res.status(200).json({
            status: true,
            message: "post created successfully"
        })
    } catch (error) {
        console.log(error.message)
    }
}

// get all post
const getpostctr = async (req, res) => {

    const category = req.params.category;

    try {

        const query = {};
        if (category !== undefined) {
            query['category'] = category;
        }

        console.log(query)

        const data = await createpost.find(query).sort({ createdAt: -1 })


        return res.status(200).json({
            status: true,
            data: data
        })
    } catch (error) {
        console.log(error.message)
    }
}





// get singel post

const getpostbyidctr = async (req, res) => {
    const parems = req.params.id



    try {
        const data = await createpost.findById(
            parems
        )


        return res.json({

            data: data
        })
    } catch (error) {

    }
}
//delete  post


const deletepost = async (req, res) => {
    const parems = req.params.id



    try {
        const data = await createpost.findByIdAndDelete(
            parems
        )


        return res.json({
            message: "successfully deleted",
            data: data
        })
    } catch (error) {

    }
}

const updatapost = async (req, res) => {
    const parems = req.params.id



    try {
        const data = await createpost.findByIdAndUpdate(
            parems, req.body, { new: true }
        )


        return res.json({
            message: "successfully update",
            data: data
        })
    } catch (error) {

    }
}
module.exports = {
    createpostctr, getpostctr, getpostbyidctr, deletepost, updatapost
};