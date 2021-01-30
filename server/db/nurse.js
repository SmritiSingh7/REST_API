const pool = require("../connection");

let nurse = {}

nurse.allNurse = () => {
    return new Promise((resolve,reject) => {
        pool.query('select * from User as u inner join Roles as r on u.User_RoleID = r.Role_ID where r.Role_Name = "Nurse" ', (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });


};

nurse.one = (id) => {
    return new Promise((resolve,reject) => {
        pool.query('select * from User as u inner join Roles as r on u.User_RoleID = r.Role_ID where r.Role_Name = "Nurse" AND u.User_ID = ?', [id] ,(err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results[0]);
        });
    });


};

module.exports = nurse;