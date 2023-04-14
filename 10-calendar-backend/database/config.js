const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        console.log('Conectándose a BBDD ' + process.env.DB_CNN );
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true, 
            useUnifiedTopology: true    
        }); 
        console.log('DB Online');
    } catch (error) {
        console.log(error);
        throw new Error('Error al inicializar base de datos');
    }
}

module.exports = {
    dbConnection
}