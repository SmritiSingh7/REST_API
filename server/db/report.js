const pool = require("../connection");

let report = {}

//get all Reports
report.allReport = () => {
    return new Promise((resolve,reject) => {
        pool.query('SELECT * FROM Report ', (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });


};

//get Report by id
report.one = (id) => {
    return new Promise((resolve,reject) => {
        pool.query('SELECT * FROM Report WHERE Report_ID = ?', [id] ,(err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results[0]);
        });
    });


};

//get report by Patient_ID and Report_TypeID
report.searchbyPatIDandReporttype = (id,type) => {
    return new Promise((resolve,reject) => {
        pool.query('SELECT * FROM Report WHERE Patient_ID = ? and Report_TypeID = ?', [id,type],(err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results[0]);
        });
    });


};

report.create = (obj) => {
    return new Promise((resolve,reject) => {
        console.log(obj);
        const mysqlquery = 'INSERT INTO Report SET ?;'
        pool.query(mysqlquery, [obj],(err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results[0]);
        });
    });


};


module.exports = report;