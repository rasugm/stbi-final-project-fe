// MODIFY FROM https://www.freecodecamp.org/news/understanding-memoize-in-javascript-51d07d19430e/
interface MemoOptions {
    maxAge: number; //in seconds
}

interface Cache extends MemoOptions {
    [key: string]: any;
}

const memoize = <T>(fn: (...arg: any) => T, options?: MemoOptions) => {
    let cache: Cache = {
        maxAge: Infinity,
    };
    return (...args: any): T => {
        let n = args;
        if (n in cache) {
            if (Date.now() < cache.maxAge) {
                return cache[n];
            } else {
                let result = fn(...n);
                cache[n] = result;
                cache.maxAge = options?.maxAge ? Date.now() + options.maxAge * 1000 : Infinity;
                return result;
            }
        } else {
            let result = fn(...n);
            cache[n] = result;
            cache.maxAge = options?.maxAge ? Date.now() + options.maxAge * 1000 : Infinity;
            return result;
        }
    };
};

export default memoize;
