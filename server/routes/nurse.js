const express = require('express');
const nurseRouter = express.Router();
const db = require('../db/nurse');

nurseRouter.get('/', async (req, res, next) =>{
    try{
        let results = await db.allNurse();
        res.json(results);
    }catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});


nurseRouter.get('/:id', async (req, res, next) =>{
    try{
        let results = await db.one(req.params.id);
        res.json(results);
    }catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = nurseRouter;