function isEvenOrOdd(c) {
       if (c % 2 === 0) {
         return 'Even';
      } else {
         return "Odd";
       }
    }


    function isPrime(c) {
        if (c <= 1) return false;
        if (c === 2) return true;
        if (c % 2 === 0) return false;

        for (let i = 3; i <= Math.sqrt(c); i += 2) {
            if (c % i === 0) return false;
        }
            return true;
    }


    function isPalindrome(str) {
        const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, ''); //Clean String
        const reversedStr = cleanedStr.split('').reverse().join('');
        return cleanedStr ===reversedStr;
    }


    
    const number = 29;
    const text = "Boat";


    console.log(`The number ${number} is ${isEvenOrOdd(number)}.`);

    if (isPrime(Number)) {
        console.log(`The number ${number} is a prime number.`);
    }else {
        console.log(`The number ${number} is not a prime number.`);
    }
    
    console.log(`The string "${text}" is ${isPalindrome(text) ? 'a palindrome' : 'not a palindrome'}.`);


    const choice = 2;

    switch (choice) {
        case 1:
            console.log('You selected option 1.');
            break;
        case 2:
            console.log('You selected option 2.');
            break;
        case 3:
            console.log('You selected option 3.');
            break;
        default:
            console.log('Invalid choice.');
    }

