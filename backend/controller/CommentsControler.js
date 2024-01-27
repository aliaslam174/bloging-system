const usercomments = require('../models/Comments')


const createcomments = async (req, res) => {
    
    
    try {
        const comment = await usercomments.create(
            req.body
        )

        const comments = await usercomments.find({
            postid: req.body.postid
           
        })


        res.status(200).json({
            status:true,
            message: "comment created successfully",
            data: comments
        })
    } catch (error) {

    }
}
const getcomments = async (req, res) => {
    try {
        const comments = await usercomments.find(
            {}
        )


        res.json({

            data: comments
        })
    } catch (error) {

    }
}
const getbypostcomments = async (req, res) => {
    const id=req.params.id
  
    
    try {
        const comments = await usercomments.find({postid:id, status:"aprroved"})


        res.json({

            data: comments
        })
    } catch (error) {

    }
}

const updatecmnt = async (req, res) => {
    const id = req.params.id;
    console.log(id)
    try {
      const data=  await usercomments.findByIdAndUpdate(id, req.body);
        return res.status(200).json({
            stutus: true,
            message: "updated successfully",
            data,data
        })

    } catch (error) {

        return res.status(400).json({
            stutus: false,
            message: "product not update"
        })
    }
}

const deletecomments = async (req, res) => {
    const parems = req.params.id



    try {
        const data = await usercomments.findByIdAndDelete(
            parems
        )


        return res.json({
            message: "successfully deleted",
            data: data
        })
    } catch (error) {

    }
}
module.exports = { createcomments, getcomments ,updatecmnt,deletecomments,getbypostcomments}