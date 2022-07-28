const { Router } = require('express');

const { nfls } = require('../../data/nfls.js');

const router = Router();

router
  .get('/:id', (req, res) => {
    console.log('id param:', req.params.id);
    const nfl = nfls.find((nfl) => nfl.id === req.params.id);
    res.json(nfl);
  })
  .get('/', (req, res) => {
    console.log(nfls);
    const nflId = nfls.map((nfl) => ({ id:nfl.id, name:nfl.name }));
    res.json(nflId);
  });

module.exports = router;
