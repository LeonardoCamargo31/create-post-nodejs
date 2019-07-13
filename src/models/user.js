    
const UserModel = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        username: DataTypes.STRING,
        password: DataTypes.STRING
    })
    //criamos um metodo associate que recebe todos os models
    //models.Usuario, então já desestrutura
    User.associate = ({ Post }) => {
        //user tem muitos post
        User.hasMany(Post)
    }

    return User
}


module.exports = UserModel