const express = require('express');
const departmentRouter = express.Router();
const db = require('../db/department');

departmentRouter.get('/', async (req, res, next) =>{
    try{
        let results = await db.allDepartment();
        res.json(results);
    }catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});


departmentRouter.get('/:id', async (req, res, next) =>{
    try{
        let results = await db.one(req.params.id);
        res.json(results);
    }catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = departmentRouter;