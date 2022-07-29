const { Router } = require('express');

const Nfl = require('../models/Nfl');

module.exports = Router()

  .get('/:id', async (req, res) => {
    console.log('id param:', req.params.id);
    const nfl = await Nfl.getById(req.params.id);
    res.json(nfl);
  })
  .get('/', async (req, res) => {
    const nfls = await Nfl.getAll();
    const nflId = nfls.map((nfl) => ({ id:nfl.id, name:nfl.name }));
    console.log(nflId);
    res.json(nflId);
  });

