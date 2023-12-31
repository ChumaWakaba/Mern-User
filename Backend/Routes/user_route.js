const express = require("express");
const { getAllUser, getUserById, addUser, updateUserById, deleteUserById } = require("../Controllers/user-controller");

const router = express.Router();

router.get('/', getAllUser);
router.get('/:id', getUserById);
router.post('/', addUser);
router.put('/:id', updateUserById);
router.delete('/:id', deleteUserById);

module.exports = router;