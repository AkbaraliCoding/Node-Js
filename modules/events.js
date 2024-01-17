const Events = require('events')


class Logger extends Events {
    log(a, b){
        this.emit("hello", a + b )
    }
}


const logger = new Logger()

logger.on("hello", (data)=>{
    console.log(data);
})



logger.log(9, 4)