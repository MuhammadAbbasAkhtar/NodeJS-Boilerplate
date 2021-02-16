const path = require('path');
const pino = require('pino')

const logger = pino({
    prettyPrint: {},
    prettifier: require('pino-colada') 
})

const prettyLog = msg => {
    logger.info(msg)
}
const sendResponse = (res, code, obj) => {
    if(!Number.isInteger(code)){
        let obj = code;
        code = 200
    }
    if(!res.headersSent)
    return res.status(code).json(obj)
}

const sendResponseMsg = (res, message, success, code) => {
    if(!res.headersSent)
    return res.status(code).json({message, success})
}
const baseDIR = subdir => {
    return path.join(__dirname, subdir);
}

module.exports = {
    sendResponse,
    sendResponseMsg,
    prettyLog,
    baseDIR
}