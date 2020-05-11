const fs = require('fs');

function a() {
  console.log('我在读取前')
  fs.readFile('./1.txt', (err, data) => {
    if (err) return err;
    else return data;
  })
  console.log('我在读取后')
}

module.exports.a = a;

// export default class Change{
//   constructor(){

//   }

//   writ(){
//     fs.readFile('./1.txt',(err,data)=>{
//       if(err){
//         return err
//       }
//       else{
//         return data;
//       }
//     })
//   }

// }
