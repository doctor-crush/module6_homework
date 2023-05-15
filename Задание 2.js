function isPrime(num) {
    if (num === 0 || num === 1) {
        console.log(`${num} не является простым числом`);
    } else if (num > 1000) {
        console.log(`Данные неверны: ${num} больше 1000`);
    } else {
        let isPrime = true;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(`${num} - простое число`);
        } else {
            console.log(`${num} не является простым числом`);
        }
    }
}
isPrime()