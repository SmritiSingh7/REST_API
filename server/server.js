const express = require('express');
const apiPatientRouter = require('./routes/patient');
const apiDepartmentRouter = require('./routes/department');
const apiNurseRouter = require('./routes/nurse');
const apiReportRouter = require('./routes/report');
const  app = express();


app.use(express.json());


app.use('/api/patient', apiPatientRouter);
app.use('/api/nurse', apiNurseRouter);
app.use('/api/department', apiDepartmentRouter);
app.use('/api/report', apiReportRouter);



app.listen(3000, () => console.log('Express server is runnig at port no : 3000'));

