const express = require('express');
const patientRouter = express.Router();
const db = require('../db/patient');

patientRouter.get('/', async (req, res, next) =>{
    try{
        let results = await db.allPatient();
        res.json(results);
    }catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

patientRouter.get('/:id', async (req, res, next) =>{
    try{
        let results = await db.one(req.params.id);
        res.json(results);
    }catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});


patientRouter.post('/addpatient', async (req, res, next) =>{
    try{
        let results = await db.create(req.body);
        res.json(results);
    }catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

patientRouter.post('/editpatient', async (req, res, next) =>{
    try{
        let results = await db.edit(req.body);
        res.json(results);
    }catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});


module.exports = patientRouter;