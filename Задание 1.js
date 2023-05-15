function analyzeArray(arr) {
    let evenCount = 0;
    let oddCount = 0;
    let zeroCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== "number") {
            continue;
        }

        if (arr[i] === 0) {
            zeroCount++;
        } else if (arr[i] % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    console.log(`Четных чисел: ${evenCount}`);
    console.log(`Нечетных чисел: ${oddCount}`);
    console.log(`Нулей: ${zeroCount}`);
}

const myArray = [1, 2, 3, 4, 5, 6, 0, null, undefined, "string"];
analyzeArray(myArray);
