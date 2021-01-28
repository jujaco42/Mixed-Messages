
function generateRandomNumber(num) {
    //use array length to generate random array index
    return Math.floor(Math.random() * num);
}

const messageObject = {
    favoriteColor: ['red','orange', 'yellow',
                'green', 'blue','indigo','violet'],
    favoriteMeal: ['cheeseburger and french fries', 
                'hot chicken breakfast biscuit', 
                'pork belly noodle bowl',
                'carnitas tacos',
                'Chicken salad sandwich and an apple'],
    favoriteSeason: ['Spring','Summer', 'Autumn', 'Winter']
};

// store message in an array
let messageArray = [];

for (let prop in messageObject) {
    //send length of array in object to generateRandom number
    let objectIndex = generateRandomNumber(messageObject[prop].length);
    
    //select the array element to be added to messageArray
    switch(prop) {
        case 'favoriteColor':
            messageArray.push(`Your favorite color is: ${messageObject[prop][objectIndex]}`);
            break
        case 'favoriteMeal':
            messageArray.push(`Your favorite meal is: ${messageObject[prop][objectIndex]}`);
            break
        case 'favoriteSeason':
            messageArray.push(`Your favoirite season is: ${messageObject[prop][objectIndex]}`);
            break
        default:
            messageArray.push('unidentified prop');
    }
}

function formatMessage(array) {
    //format message so array elements are each displayed on a new line
    return array.join('\n');
}

let display = formatMessage(messageArray)
console.log(display);