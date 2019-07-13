//injeto a dependencia sequelize
//com import lá na index ele já injeta sequelize e DataTypes (que seria o Sequelize)
const PostModel = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,//não permitir campo nulo 
            validate: {
                notEmpty: {//não permitir campo vazio 
                    msg: "O nome não pode ser vazio"
                },
                len: {
                    args: [4, 20],
                    msg: "O nome deve ter entre 4 e 20 caracteres"
                }
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,//não permitir campo nulo 
            validate: {
                notEmpty: {//não permitir campo vazio 
                    msg: "A descrição não pode ser vazia"
                }
            }
        }
    })
    Post.associate = ({ User }) => {
        //post pertence a um user
        Post.belongsTo(User)
    }

    return Post
}


module.exports = PostModel