const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/EmployeeDB',{ useNewUrlParser:true },(err)=>{
if(!err)
{
    console.log('Connection succeed');
}
else{
    console.log('Connection failed'+err);
}
});

require('./employee.model');
