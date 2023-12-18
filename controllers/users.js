const getAllUsers = (req, res) => {
    res.json({ message: 'Obtener todos los usuarios' });
};

const addUser = (req, res) => {
    const { name, email } = req.body;
    res.json({ message: `Crear usuario: ${name} con email: ${email}` });
};

module.exports = { getAllUsers, addUser };
