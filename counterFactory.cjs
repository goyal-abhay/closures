let counterFactory = () => {
    
    let count = 0
    let addCount = () => {
        ++count
        return count
    }
    let obj = {
        increment : addCount,
        decrement : function subCount() {
            --count;
            return count
        },
    }


    return obj

}

module.exports = counterFactory;