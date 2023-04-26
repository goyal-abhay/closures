let limitFunctionCallCount = (cb,n) => {
    if (cb === undefined || n === undefined){
        throw new Error('Invalid arguements')
    }
    let returnCB = () => {
        if (n>0){
            n--;
            return cb()
        }
        else return null
    }
    return returnCB;
}

module.exports = limitFunctionCallCount;