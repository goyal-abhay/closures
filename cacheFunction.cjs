let cacheFunction = (cb) => {
    let cache = {}
    if (typeof cb !== 'function'){
        throw new Error('Invalid cb function')
    }
    return function(...args){
        const arrStr = JSON.stringify(...args)
        if (cache.hasOwnProperty(arrStr)){
            return cache[arrStr]
        }
        else {
            const res = cb(...args)
            cache[arrStr] = res
            return res
        }    
    }
}

module.exports = cacheFunction;