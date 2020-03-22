module.exports = function toReadable(number) {
    let humanReadableNumber = 'None';

    const UNITS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    const DOZENS = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number < 20) {
        humanReadableNumber = UNITS[number];
    }

    else if (number < 100) {
        let remainder = number % 10;
        if (remainder == 0) {
            humanReadableNumber = DOZENS[(number / 10)];
        }
        else {
            let dozens = number - remainder;
            humanReadableNumber = DOZENS[(dozens / 10)] + ' ' + UNITS[remainder];
        }
    }
    else if (number < 1000) {
        let remainder2 = number % 100;
        if (remainder2 == 0) {
            humanReadableNumber = UNITS[(number / 100)] + ' hundred';
        }
        else if (remainder2 % 10 == 0) {
            humanReadableNumber = UNITS[((number - remainder2) / 100)] + ' hundred ' + DOZENS[(remainder2 / 10)];
        }
        else if (10 < remainder2 && remainder2 < 20) {
            humanReadableNumber = UNITS[((number - (number % 100)) / 100)] + ' hundred ' + UNITS[(number % 100)];
        }
        else if (remainder2 < 10) {
            humanReadableNumber = UNITS[((number - (number % 100)) / 100)] + ' hundred ' + UNITS[(number % 10)];
        }
        else {
            humanReadableNumber = UNITS[((number - (number % 100)) / 100)] + ' hundred ' + DOZENS[(((number % 100) - (number % 10)) / 10)] + ' ' + UNITS[(number % 10)];
        }
    }


    return humanReadableNumber;
}
