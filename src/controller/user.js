const createForm = (req, res) => {
    res.render('index')
}

const createProcess = async ({ User }, req, res) => {
    let { username, password } = req.body

    await User.create({ username, password })
    res.redirect('/user')
}

module.exports = {
    createForm,
    createProcess
}