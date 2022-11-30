const Sequilize = require('sequelize');

const sequelize = new Sequelize("KaeMelo", "root", "30121995",{
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(function(){
    console.log("Database connection seccessful!");
    
}).catch(function(){
    console.log("[ERRO] Database connection not performed!");
})

module.export = sequelize;
