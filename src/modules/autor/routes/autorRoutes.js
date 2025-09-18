const express = require('express');
const AutorController = require('../controllers/autorController');
const router = express.Router();

router.get('/', AutorController.listar);
router.post('/', AutorController.criar);
router.put('/:cod_autor', AutorController.atualizar);
router.delete('/:cod_autor', AutorController.deletar);

module.exports = router;