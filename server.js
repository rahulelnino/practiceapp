const express = require('express');
const http = require('http');
const bodyparser = require('body-parser');
const cors = require('cors');
// const events = require('events');
// const eventEmitter = events.EventEmitter;
// const emitter = new eventEmitter();
// const fs = require('fs') ;
const port = 3000;
const app = express();
app.use(bodyparser.json());
app.use(cors());

// const server = http.createServer((req,res)=>{
//     res.writeHead(200,({'Content-Type':'application/json'}));
//     res.end('Hello AB');
//     console.log(req.method);
//    });
   app.get('/',(req,res)=>{
       res.send("Hello from Server");
   });

   app.post('/enroll',(req,res)=>{
       console.log(req.body);
       res.status(401).send({"message":"Data Received"});
   })
   app.listen(port,()=>{
       console.log("Server listening to port "+port);
    //    console.log(__filename);
    //    console.log(__dirname);
    //    console.log(process.cwd())
    //    console.log(process.env.my_current_env)
   });
// var dater="Hi, This is Ian Bell";

//    fs.readFile('read.txt','utf-8',(err,data)=>{
//       if(err) {
//           console.log(err);
//       }
//       console.log('Data is successfully read'+Date.now());
//     });
//    fs.writeFile(__dirname +'/writre.txt',dater,(err,data)=>{
//           if(err){
//               console.log(err);
//           }
//           console.log('Data is successfully written'+Date.now())
//       });


// emitter.cricket= ()=>{
//     emitter.emit('cricket','This is cricket');
// }

// emitter.tennis = ()=>{
//     emitter.emit('tennis','This is tennis');
//     setTimeout(()=>{
//         emitter.emit('football','this is football')
//     },3000)
// };

// module.exports = emitter;
// setTimeout(()=>{
//     console.log('Hello ABD');
// },2000);

// setInterval(()=>{
//     console.log('Hello Bell');
// },2000);

// clearInterval(()=>{
//     console.log('Hello cleared');
// },2000);