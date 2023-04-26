let limitFunctionCallCount = (cb,n) => {
    let returnCB = () => {
        if (n>0){
            n--;
            return cb()
        }
        else return null
    }
    return returnCB()
}

module.exports = limitFunctionCallCount;