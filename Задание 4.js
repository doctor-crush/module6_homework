function printNumbersInterval(num1, num2) {
    let currentNum = num1;

    const intervalId = setInterval(() => {
        console.log(currentNum);
        if (currentNum === num2) {
            clearInterval(intervalId);
        }
        currentNum++;
    }, 1000);
}

printNumbersInterval(5, 15);