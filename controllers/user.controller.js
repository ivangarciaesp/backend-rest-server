
const getUser = (req, res) => {

    const query = req.query;
    res.json({
        ok: true,
        msg: 'get API - Controller'
    });
}

const putUser = (req, res) => {
    const { id } = req.params;
    res.json({
        ok: true,
        msg: 'Put API - Controller',
        id
    })
}

const postUser = (req, res) => {
    const { nombre, edad } = req.body;

    res.json({
        ok: true,
        msg: 'Post API - Controller',
        nombre,
        edad
    })
}

const deleteUser = (req, res) => {
    res.json({
        ok: true,
        msg: 'Delete API - Controller'
    })
}



module.exports = {
    getUser,
    putUser,
    postUser,
    deleteUser
}