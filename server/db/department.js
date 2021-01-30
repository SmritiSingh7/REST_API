const pool = require("../connection");

let department = {}


department.allDepartment = () => {
    return new Promise((resolve,reject) => {
        pool.query('SELECT * FROM Department ', (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });


};

department.one = (id) => {
    return new Promise((resolve,reject) => {
        pool.query('SELECT * FROM Department WHERE Department_ID = ?', [id] ,(err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results[0]);
        });
    });


};


module.exports = department;