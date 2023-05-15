function makeexample(x) {
    return function(y) {
        return x + y;
    };
}

const add5 = makeexample(5);

console.log(add5(10));
