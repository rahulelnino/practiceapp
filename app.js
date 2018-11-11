var emitter = require('./server');

emitter.on('cricket',()=>{
    console.log('cricket is logged');
})

emitter.on('tennis',()=>{
    console.log('tennis is logged');
})

emitter.on('football',()=>{
    console.log('football is logged');
})

emitter.cricket();
emitter.tennis();
