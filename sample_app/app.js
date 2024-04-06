//load fs
const { forEach } = require('lodash');
const { Console } = require('node:console');
const fs=require('node:fs');
//read file
const filePath='./data.json';
//function getDataFromFile(){
//     const data=fs.readFileSync('./data.json','utf-8');
//     console.log(data);
//     return JSON.parse(data);
// }
//calling function getDataFromFile 
//OR
const getEmployeesFromFile =_=>JSON.parse(fs.readFileSync(filePath,'utf-8'));
//implementation of CRUD Opertions(create,read,update,delete)
//create
const createEmp = (employee) => {
    const data=getEmployeesFromFile();
    data.push(employee);
    fs.writeFileSync(filePath,JSON.stringify(data,null,2));
    console.log(data);
};
//read
const readData = _=>{
 const employees=getEmployeesFromFile();
    console.log(employees);
}
//update
const updateEmp = (employee) =>{
    const data=getEmployeesFromFile();
    const index=data.findIndex(e=>e.id===employee.id);
    if(index!==-1){
        data[index]=employee;
        fs.writeFileSync(filePath,JSON.stringify(data,null,2));
        console.log(data);
    }
} 
//updat all employess with the same id 
const updateEmps = (employee) =>{
    const data=getEmployeesFromFile();
    const newData=data.map(e=>e.id===employee.id?employee:e);
    fs.writeFileSync(filePath,JSON.stringify(newData,null,2));
    console.log(newData);
}
//delete
const deleteEmp =(id)=>{
    const data=getEmployeesFromFile();
    const index=data.findIndex(e=>e.id===id);
    if(index!==-1){
        data.splice(index,1);
        fs.writeFileSync(filePath,JSON.stringify(data,null,2));
        console.log(data);
    }
}
//delete all employess with the same id
const deleteEmps =(id)=>{
    const data=getEmployeesFromFile();
    const newData=data.filter(e=>e.id!==id);
    fs.writeFileSync(filePath,JSON.stringify(newData,null,2));
    console.log(newData);
}

//get arguments from command line
const args=process.argv[2];
//create
switch(args){
    case 'create':
       let emp={
           id:process.argv[3],
           name:process.argv[4],
           title:process.argv[5],
           old:process.argv[6]
       }
        createEmp(emp);
        break;
    case 'read':
        readData();
        break;
    case 'update':
        let empUpdate={
            id:process.argv[3],
            name:process.argv[4],
            title:process.argv[5],
            old:process.argv[6]
        }
        updateEmp(empUpdate);
        break;
    case 'delete':
        deleteEmp(process.argv[3]);
        break;
    case 'deleteAll':
        deleteEmps(process.argv[3]);
        break;
    case 'updateAll':
        let empUpdateAll={
            id:process.argv[3],
            name:process.argv[4],
            title:process.argv[5],
            old:process.argv[6]
        }
        updateEmps(empUpdateAll);
        break;
    default:
        console.log('invalid command');
}
///arg node file_path action id name title old //node app.js create 1 Fady Software Engineer 25
