const express = require('express');
const router = express.Router();

router.get('/ping', (req, res) => {
  res.json({
    pong: true,
  });
});

module.exports = router;