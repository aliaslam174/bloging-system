const createpost = require('../models/CreatePost');



const mobileCategory = async (req, res) => {

console.log("sdfsdf")
    try {
        const data = await createpost.find({category:'Gadget'})
        console.log(data)

        return res.status(201).json({
            status: true,
            data: data
        })
    } catch (error) {

    }
}

const softwareCategory = async (req, res) => {

    console.log("sdfsdf")
        try {
            const data = await createpost.find({category:'Softweare'})
            console.log(data)
    
            return res.status(201).json({
                status: true,
                data: data
            })
        } catch (error) {
    
        }
    }

module.exports={
    mobileCategory,
    softwareCategory
}