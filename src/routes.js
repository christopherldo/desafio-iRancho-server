const express = require('express');
const router = express.Router();

const {
  pessoaController
} = require('./app/controllers');

const {
  pessoaValidator
} = require('./app/validators');

// Know if server is on by requesting this route
router.get('/ping', (req, res) => {
  res.json({
    pong: true,
  });
});

/* 
 * Pessoa related routes
 */
router.get('/pessoa/:id',
  pessoaValidator.readById,
  pessoaController.readById,
);

router.put('/pessoa/:id',
  pessoaValidator.update,
  pessoaController.update,
);

router.patch('/pessoa/:id',
  pessoaValidator.toggleActivate,
  pessoaController.toggleActivate,
);

router.delete('/pessoa/:id',
  pessoaValidator.delete,
  pessoaController.delete,
);

router.get('/pessoa/',
  pessoaController.readAll,
);

router.post('/pessoa/',
  pessoaValidator.create,
  pessoaController.create,
);

/* 
 * Animal related routes
 */

module.exports = router;