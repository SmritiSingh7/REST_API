const pool = require("../connection");

let patient = {}

patient.allPatient = () => {
    return new Promise((resolve,reject) => {
        pool.query('SELECT * FROM Patient ', (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });


};

patient.one = (id) => {
    return new Promise((resolve,reject) => {
        pool.query('SELECT * FROM Patient WHERE Patient_ID = ?', [id] ,(err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results[0]);
        });
    });


};

patient.create = (obj) => {
    return new Promise((resolve,reject) => {
        console.log(obj);
        const mysqlquery = 'INSERT INTO Patient SET ?;'
        pool.query(mysqlquery, [obj],(err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results[0]);
        });
    });


};

patient.edit = (obj) => {
    return new Promise((resolve,reject) => {
        var params = [
            obj,     //data for update
            obj.Patient_ID //condition for update
        ]
        const mysqlquery = 'UPDATE Patient SET ? WHERE Patient_ID = ?;'
        pool.query(mysqlquery, params,(err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results[0]);
        });
    });


};


module.exports = patient;