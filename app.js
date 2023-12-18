const express = require("express");
const app = express();
const userRoutes = require("./routes/users");
const productRoutes = require('./routes/product');
require("dotenv").config();

const mongoose = require("mongoose");
mongoose.set("strictQuery",false);




async function main(){
    await mongoose.connect(process.env.MONGO_CNN);
    console.log("Base de datos conectada");
}
main().catch(err => console.log(err));
// Faltaba la siguiente línea, sin esta línea no me permitía trabajar con datos en json
app.use(express.json());

app.use("/api/users",userRoutes);

app.use("/products",productRoutes);

// Ruta para obtener todos los usuarios
// app.get('/api/users', (req, res) => {
// Lógica para obtener y enviar todos los usuarios
// res.json({ message: 'Obtener todos los usuarios' });
// });

// Ruta para crear un nuevo usuario
// app.post('/api/users', (req, res) => {
// Lógica para crear un nuevo usuario
// const { name, email } = req.body;
// res.json({ message: `Crear usuario: ${name} con email: ${email}` });
// });
// Iniciar el servidor en un puerto específico
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Servidor iniciado en el puerto ${PORT}`);
});




