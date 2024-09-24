// var str = prompt("Enter some text");

// var numChars = str.length;

// for (var i = 0; i < numChars; i++) {
//     if (str.slice(i, i + 2) === "  ") {
//     alert("double space found!");
//     }
// }


// var text = "Pakistan got its independence on 14th August 1947. The country’s main purpose was to live life freely as Muslims. Pakistan is located in the south of Asia. It is in the south of the Arabian Sea. It has 4 neighboring countries. Pakistan is in 33rd rank among other countries based on area."

// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 5) === "south") {
//     text = text.slice(0, i) + "South" + text.slice(i + 5);
//     }
//  }

// console.log(text);
    
// var indexNum = text.indexOf("Arabian Sea");

// var startingText = text.slice(0,182);

// var replacingText = "Pacific Ocean";

// var remainingText = text.slice(indexNum + 11);

// console.log(startingText + replacingText + remainingText );


// var text = "The New Yorker magazine doesn't allow the phrase World War II. They say it shouldbe the Second World War.";

// var indexNum = text.indexOf("World War II");

// var startingText = text.slice(0,50);

// var replacingText = "The Second World War";

// var remainingText = text.slice(indexNum + 12);

// console.log(startingText + replacingText + remainingText );

var text = "The New Yorker magazine doesn't allow the phrase World War II. They say it shouldbe the Second World War.";

console.log(text.replaceAll("World War II" , "The Second World War"));


var number = +prompt("Enter any decimal no");

console.log("round" , Math.round(number));
console.log("ceil" , Math.ceil(number));
console.log("floor" , Math.floor(number));