// ==========================================
// PROJECT 2: LOCAL FAVORITES TRACKER
// LAB12: JavaScript Fundamentals
// ==========================================

console.log('JavaScript loaded successfully!');
console.log('LAB12: Applying Variables and Objects');

// Example: Creating a sample favorite place
const sampleFavorite = {
    name: 'Starbucks on University Drive',
    category: 'coffee',
    rating: 5,
    notes: 'Great study spot with fast wifi',
    dateAdded: new Date().toLocaleDateString()
};

console.log('Sample Favorite Object:');
console.log(sampleFavorite);

// Practice: Display information about the sample favorite
console.log('Place Name:', sampleFavorite.name);
console.log('Category:', sampleFavorite.category);
console.log('Rating:', sampleFavorite.rating, 'out of 5 stars');
console.log('Notes:', sampleFavorite.notes);
console.log('Date Added:', sampleFavorite.dateAdded);

// Build a formatted display message
let displayMessage = sampleFavorite.name + ' (' + sampleFavorite.category + ') - ' +
                     sampleFavorite.rating + '/5 stars';
console.log('Display Format:', displayMessage);

// Check data types
console.log('Data Types:');
console.log('  name is a', typeof sampleFavorite.name);
console.log('  rating is a', typeof sampleFavorite.rating);

console.log('Ready for LAB13: Functions & DOM Manipulation!');



let rating1 = 5;
let rating2 = 2;
let rating3 = 3;
let rating4 = 1;

let totalRating = rating1 + rating2 + rating3 + rating4;
let averageRating = totalRating / 4;

console.log('Total Rating:', totalRating);
console.log('Average Rating:', averageRating);
console.log('Average (rounded):', averageRating.toFixed(1));


let favorite4 = {
    name: 'Flower Child',
    category: 'food',  // Try: fitness, services, shopping
    rating: 4,
    notes: 'Great healthy options'
};

let favorite5 = {
    name: 'Toppers Pizza',
    category: 'food',
    rating: 3,
    notes: 'Great for late night, takes a long time'
};

// Display both with formatted strings
console.log(favorite4.name + ' (' + favorite4.category + ')');
console.log(favorite5.name + ' (' + favorite5.category + ')');