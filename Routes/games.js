const express = require('express');
const router = express.Router();

const contactsController = require('../Controllers/index');

router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

router.post('/', contactsController.createGame);

router.put('/:id', contactsController.updateGame);

router.delete('/:id', contactsController.deleteGame);

module.exports = router;