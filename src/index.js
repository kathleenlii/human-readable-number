module.exports = function toReadable(number) {
    var num = [
        "zero",
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
    var tens = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number < 20) {
        return num[number];
    }

    var digit = number % 10;

    if (number < 100) {
        const numberString = digit ? ` ${num[digit]}` : "";

        return `${tens[Math.floor(number / 10) - 2]}${numberString}`;
    }

    const tensString = number % 100 == 0 ? "" : ` ${toReadable(number % 100)}`;

    return `${num[Math.floor(number / 100)]} hundred${tensString}`;
}
