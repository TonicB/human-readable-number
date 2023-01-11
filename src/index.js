module.exports = function toReadable(number) {
    let digits = number - Math.floor(number / 10) * 10;
    let decads = (number - Math.floor(number / 100) * 100 - digits) / 10;
    let hundreds = Math.floor(number / 100);
    let arrayDigits = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let arrayDecads = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eigthy",
        "ninety",
    ];

    if (number > 999) {
        return `слишком большое число`;
    } else if (number == 0) {
        return "zero";
    } else if (hundreds == 0 && decads < 2) {
        return `${arrayDigits[number]}`;
    } else if (hundreds == 0 && decads > 1) {
        return `${arrayDecads[decads]} ${arrayDigits[digits]}`;
        // } else if (number % 100 == 0 && hundreds !== 0) {
        //     return `${arrayDigits[hundreds]} hundred`;
    } else if (hundreds > 0 && decads < 2) {
        return `${arrayDigits[hundreds]} hundred ${
            arrayDigits[decads * 10 + digits]
        }`;
    } else if (hundreds > 0 && decads > 1) {
        return `${arrayDigits[hundreds]} hundred ${arrayDecads[decads]} ${arrayDigits[digits]}`;
    }
};
