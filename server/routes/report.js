const express = require('express');
const reportRouter = express.Router();
const db = require('../db/report');

reportRouter.get('/', async (req, res, next) =>{
    try{
        let results = await db.allReport();
        res.json(results);
    }catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

reportRouter.get('/:id', async (req, res, next) =>{
    try{
        let results = await db.one(req.params.id);
        res.json(results);
    }catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});


reportRouter.get('/:id/:type', async (req, res, next) =>{
    try{
        let results = await db.searchbyPatIDandReporttype(req.params.id,req.params.type);
        res.json(results);
    }catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

reportRouter.post('/addreport', async (req, res, next) =>{
    try{
        let results = await db.create(req.body);
        res.json(results);
    }catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});




module.exports = reportRouter;