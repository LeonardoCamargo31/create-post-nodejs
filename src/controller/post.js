const validation = require('../utils/validation')

const createForm = (req, res) => {
    res.render('post',{errors:null})
}

const createProcess = async ({ Post }, req, res) => {
    try{
        let { name, description } = req.body
        const UserId = 1;
        await Post.create({ name, description, UserId })
        res.redirect('/post')

    }catch(error){
        const errors = validation(error)
        //console.log(errors)
        res.render('post',{errors})
    }
}

module.exports = {
    createForm,
    createProcess
}