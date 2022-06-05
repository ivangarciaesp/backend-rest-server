const { Router } = require('express');
const {
    getUser,
    postUser,
    putUser,
    deleteUser
} = require('../controllers/user.controller');

const router = Router();

// here we are declaring the routes.

// note: Due to into the middlewares we are declaring the static folder, the server goes to show the content into public folder for the root route:  '/'.

//In that case, the '/' into routes following will not be a real functionality. That means It dosen't works. The others declarated routes  will be working perfectly.

router.get('/', getUser);

router.get('/:id', getUser);

router.put('/:id', putUser);

router.post('/', postUser);

router.delete('/:id', deleteUser);

module.exports = router;