module.exports = function toReadable(number) {
    let humanReadableNumber;

    const ONE_WORD_NUMBERS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    const DOZENS = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (0 <= number && number < 20) {
        humanReadableNumber = ONE_WORD_NUMBERS[number];
    }

    else if (number < 100) {
        let remainder10 = number % 10;
        if (remainder10 === 0) {
            humanReadableNumber = DOZENS[(number / 10)];
        }
        else {
            let dozens = number - remainder10;
            humanReadableNumber = DOZENS[(dozens / 10)] + ' ' + ONE_WORD_NUMBERS[remainder10];
        }
    }
    else if (number < 1000) {
        let remainder100 = number % 100;
        let remainder10 = number % 10;
        if (remainder100 === 0) {
            humanReadableNumber = ONE_WORD_NUMBERS[(number / 100)] + ' hundred';
        }
        else if (remainder100 % 10 === 0) {
            humanReadableNumber = ONE_WORD_NUMBERS[((number - remainder100) / 100)] + ' hundred ' + DOZENS[(remainder100 / 10)];
        }
        else if (10 < remainder100 && remainder100 < 20) {
            humanReadableNumber = ONE_WORD_NUMBERS[((number - remainder100) / 100)] + ' hundred ' + ONE_WORD_NUMBERS[remainder100];
        }
        else if (remainder100 < 10) {
            humanReadableNumber = ONE_WORD_NUMBERS[((number - remainder100) / 100)] + ' hundred ' + ONE_WORD_NUMBERS[remainder10];
        }
        else if (remainder100 >= 20) {
            humanReadableNumber = ONE_WORD_NUMBERS[((number - remainder100) / 100)] + ' hundred ' + DOZENS[((remainder100 - remainder10) / 10)] + ' ' + ONE_WORD_NUMBERS[remainder10];
        }
        else {
            console.log('given number is out of range 100 to 999');
        }
    } else {
        console.log('given number is out of range 0 to 999');
    }


    return humanReadableNumber;
}
