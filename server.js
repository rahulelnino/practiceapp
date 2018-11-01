
const http = require('http');
const events = require('events');
const eventEmitter = events.EventEmitter;
const emitter = new eventEmitter();
const fs = require('fs') ;

const server = http.createServer((req,res)=>{
    res.writeHead(200,({'Content-Type':'application/json'}));
    res.end('Hello AB');
    console.log(req.method);
   });
   
   server.listen(3010,()=>{
       console.log("Server listening to port 3010");
    //    console.log(__filename);
    //    console.log(__dirname);
    //    console.log(process.cwd())
    //    console.log(process.env.my_current_env)
   });
var dater="Hi, This is Ian Bell";

   fs.readFile('read.txt','utf-8',(err,data)=>{
      if(err) {
          console.log(err);
      }
      console.log('Data is successfully read'+Date.now());
    });
   fs.writeFile(__dirname +'/writre.txt',dater,(err,data)=>{
          if(err){
              console.log(err);
          }
          console.log('Data is successfully written'+Date.now())
      });


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