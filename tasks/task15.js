function createLogger() {
    const logs = []
    return {
        log(message){
            logs.push(message)
        },
        getLogs(){
            return logs
        }
    }
}

function createRandomGenerator(min, max) {
    return  () => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    
}
const logger = new createLogger()
logger.log('fff')
logger.log('ggg')
console.log(logger.getLogs())

const randomGenerator =  createRandomGenerator(1, 100);
console.log(randomGenerator())