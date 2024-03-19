// Arry
// q 1
var futureStudent = [];
// q2;
var studentName = ["Suleman", "Mukaram", "Farooq"];
// q3
var string = ["SirFAraz"];
// q4
var number = [123];
// q5
var boolean = [true, false,];
// q6
var mixArr = ["SirAli", true, 123, ];
// q7
var qualifications = [" " + "SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

for(var i = 1; i <= 7 ; i++ ){
        
         document.write( + i + ")"+qualifications[i] +"<br>");
        
}


// q8
var score = michalScore = 320;
    var jhonScore = 230;
    var tonyScore = 480;
var totalScore = 500;
var percentage = (score / totalScore)* 100;
document.write("Score of Michal is " + michalScore+ "." + " Percentage" + percentage + "%")
var percentage = (jhonScore / totalScore)* 100;
document.write("<br> Score of Jhone is "+ jhonScore + "."+" percentage" + percentage + "%")
var percentage = (tonyScore / totalScore)* 100;
document.write("<br> Score of Tony is "+ tonyScore + "."+" percentage" + percentage + "%")

// q9
// a

var colors = ["Red", "Green", "Blue", "Yellow"];


document.write("<br><b>Original Array:</b> " + colors.join(", ") + "<br>");


var newColor = prompt("Enter a color to add to the beginning of the array:");


colors.unshift(newColor);


document.write("<b>Updated Array:</b> " + colors.join(", "));

// b

var colors = ["Red", "Green", "Blue", "Yellow"];


document.write("<br><b>Original Array:</b> " + colors.join(", ") + "<br>");


var newColor = prompt("Enter a color to add to the end of the array:");


colors.push(newColor);


document.write("<b>Updated Array:</b> " + colors.join(", "));

// c

var colors = ["Red", "Green", "Blue", "Yellow"];


document.write("<br><b>Original Array:</b> " + colors.join(", ") + "<br>");


var newColor1 = prompt("Enter the first color to add to the beginning of the array:");
var newColor2 = prompt("Enter the second color to add to the beginning of the array:");


colors.unshift(newColor2, newColor1); 

document.write("<b>Updated Array:</b> " + colors.join(", "));

// d

var colors = ["Red", "Green", "Blue", "Yellow"];


document.write("<br><b>Original Array:</b> " + colors.join(", ") + "<br>");


colors.shift();


document.write("<b>Updated Array:</b> " + colors.join(", "));

// e

var colors = ["Red", "Green", "Blue", "Yellow"];


document.write("<br><b>Original Array:</b> " + colors.join(", ") + "<br>");


colors.pop();


document.write("<b>Updated Array:</b> " + colors.join(", "));

// f

var colors = ["Red", "Green", "Blue", "Yellow"];


document.write("<br><b>Original Array:</b> " + colors.join(", ") + "<br>");


var index = parseInt(prompt("Enter the index at which you want to add a color (0 to " + colors.length + "):"));


while (isNaN(index) || index < 0 || index > colors.length) {
    index = parseInt(prompt("Invalid input! Please enter a valid index (0 to " + colors.length + "):"));
}

var newColor = prompt("Enter the color name you want to add:");


colors.splice(index, 0, newColor);


document.write("<b>Updated Array:</b> " + colors.join(", "));

// g

var colors = ["Red", "Green", "Blue", "Yellow"];


document.write("<br><b>Original Array:</b> " + colors.join(", ") + "<br>");


var index = parseInt(prompt("Enter the index from which you want to delete color(s) (0 to " + (colors.length - 1) + "):"));


while (isNaN(index) || index < 0 || index >= colors.length) {
    index = parseInt(prompt("Invalid input! Please enter a valid index (0 to " + (colors.length - 1) + "):"));
}


var deleteCount = parseInt(prompt("Enter the number of colors you want to delete from the chosen index:"));


while (isNaN(deleteCount) || deleteCount < 1 || deleteCount > (colors.length - index)) {
    deleteCount = parseInt(prompt("Invalid input! Please enter a valid delete count (1 to " + (colors.length - index) + "):"));
}


colors.splice(index, deleteCount);


document.write("<b>Updated Array:</b> " + colors.join(", "));

// q10

var studentScores = [320, 230, 480, 120];

document.write("<br><b>Original Scores:</b><br>");
document.write("[" + studentScores.join(", ") + "]<br>");


studentScores.sort(function(a, b) {
    return a - b;
});


document.write("<b>Sorted Scores (Ascending Order):</b><br>");
document.write("[" + studentScores.join(", ") + "]");

// q11

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];


document.write("<br><b>Original Cities:</b><br>");
document.write("[" + cities.join(", ") + "]<br>");


var selectedCities = [];


selectedCities.push(cities[2], cities[3]);


document.write("<b>Selected Cities:</b><br>");
document.write("[" + selectedCities.join(", ") + "]");

// q12

var arr = ["This", "is", "my", "cat"];


var singleString = arr.join(" ");


document.write("<br><b>Single String:</b> " + singleString);

// q13


var fifoArray = [];


fifoArray.push("keyboard");
fifoArray.push("mouse");
fifoArray.push("monitor");
fifoArray.push("printer");


var firstItem = fifoArray.shift();
var secondItem = fifoArray.shift();
var thirdItem = fifoArray.shift(); 
var fourthItem = fifoArray.shift();


document.write("<br><b>FIFO Values:</b> " + firstItem + ", " + secondItem + ", " + thirdItem + ", " + fourthItem);

// q14

var lifoArray = [];


lifoArray.push("printer");
lifoArray.push("monitor");
lifoArray.push("mouse");
lifoArray.push("keyboard");


var lastItem = lifoArray.pop(); 
var secondLastItem = lifoArray.pop(); 
var thirdLastItem = lifoArray.pop(); 
var fourthLastItem = lifoArray.pop();


document.write("<br><b>LIFO Values:</b> " + lastItem + ", " + secondLastItem + ", " + thirdLastItem + ", " + fourthLastItem);

// q15
// Array containing phone manufacturers
var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Generate HTML code for dropdown/select menu
var selectHTML = "<select id='phoneManufacturers'>";
for (var i = 0; i < manufacturers.length; i++) {
    selectHTML += "<option value='" + manufacturers[i] + "'>" + manufacturers[i] + "</option>";
}
selectHTML += "</select>";

// Display the dropdown/select menu in the browser
document.write(selectHTML);


// chapter 15 arry

// q1

var emptyArray = [];

// q2

var arrayWithString = ["Hello World"];
// q3


var alphabet = ["h", "i", "j", "k"];


alert(alphabet[2]);

// q4

var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];


var totalLength = alphabet.length;


alert("Total length of the array: " + totalLength);

// q5

// Declare an array with one element
var array = ["firstElement"];

// Add a second element with index in the array
array[1] = "secondElement";

// Create an alert whose message is the new element
alert("New element: " + array[1]);

// chapter 16
// q1

// Declare an array with one string element
var array = ["firstElement"];

// Add an additional element to the array using push
array.push("secondElement");

// Create an alert whose message is the last element
alert("Last element: " + array[array.length - 1]);

// q2
// Define the Alphabet array
var Alphabet = ["h", "i", "j", "k"];

// Remove the last element from the array
Alphabet.pop();
// q3

// Define the Alphabet array
var Alphabet = ["h", "i", "j", "k"];

// Add a new element, a number, to the end of the array
Alphabet.push(42);
// Chapter 16 (Array III)

// q1
// Define the sizes array
var sizes = ["S", "M", "XL", "XXL", "XXXL"];

// Remove the first element from the array
sizes.shift();

// q2

var sizes = ["S", "M", "XL", "XXL", "XXXL"];


sizes.shift();

// q3
// Declare an array with one element
var array = ["firstElement"];

// Add a second element to the beginning of the array
array.unshift("secondElement");

// Create an alert whose message is the new first element
alert("New first element: " + array[0]);


// q4
// Define the sizes array
var sizes = ["S", "M", "XL", "XXL", "XXXL"];

// Find the index of "M"
var indexM = sizes.indexOf("M");

// Insert "L" into the array between "M" and "XL"
sizes.splice(indexM + 1, 0, "L");

// q5
// Define the sizes array
var sizes = ["S", "M", "XL", "XXL", "XXXL"];

// Copy the first 3 sizes of the array into a new array
var regSizes = sizes.slice(0, 3);

// q6
// Define the pets array
var pets = ["dog", "cat", "ox", "duck", "frog"];

// Find the index of "dog"
var indexDog = pets.indexOf("dog");

// Add 2 elements after "dog"
pets.splice(indexDog + 1, 0, "parrot", "rabbit");

// Remove "cat", "ox", and "duck"
pets.splice(indexDog + 2, 3);

// Display the modified pets array
console.log(pets);

// q7
// Define the pets array
var pets = ["dog", "cat", "ox", "duck", "frog"];

// Find the index of "cat" and "ox"
var indexCat = pets.indexOf("cat");
var indexOx = pets.indexOf("ox");

// Remove "cat" and "ox"
pets.splice(indexCat, 1);
pets.splice(indexOx - 1, 1); // Adjusting the index for "ox" due to the removal of "cat"

// Display the modified pets array
console.log(pets);

// q8
// Define the pets array
var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];

// Reduce the array to "duck" and "frog" using slice
var reducedPets = pets.slice(3, 5);

// Display the reduced pets array
console.log(reducedPets);




