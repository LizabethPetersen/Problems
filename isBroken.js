// Create cash drawer to give change from
const cashValues = [[2000, 4], [1000, 3], [500, 6], [100,16], [25, 42], [10, 26], [5, 57], [1, 87]];
const cashAvailable = new Map(cashValues);

// Create language lookup for denomination - used in returning natural language answer
const translateCash = {
    2000: 'twenties',
    1000: 'tens',
    500: 'fives',
    100: 'ones',
    25: 'quarters',
    10: 'dimes',
    5: 'nickles',
    1: 'pennies'
};

// Function that takes the cost of an item and the amount paid by the buyer, and makes correct change
const makeChange = function(cost, paid) {    
    change = {};
    cashAvailable.forEach((available, denomination) => {
        let changeDue = (paid - cost) * 100;
        const amount = (available > 0) ? Math.floor(changeDue / denomination) : 0;
        if (amount > 0) {
            const currencyType = translateCash[denomination];
            change[currencyType] = amount;
            cashAvailable.set(denomination, (available - amount));
            changeDue = changeDue - (amount * denomination);
        }
    });
}(5.67, 10);

console.log(change);