// var ranNum = Math.ceil(Math.random() * 25) * (Math.round(Math.random()) ? 1 : -1)
// console.log(ranNum)

// basic1
// function randomNumber(min, max) { // min and max included
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// console.log(randomNumber(-5, 25));


// if (randomNumber(-5, 25) < 10) {
//     console.log('The weather is cold')
// } else {
//     console.log('The weather is moderate')
// };

// const myArray = [5, 8, 7, 6, 3];
// console.log(Math.max(...myArray));

var array = [1, 2, 3, 6, 12, 13, 17, 3];
var largest = 0;

for (var i = 0; i < array.length; i++) {
    if (largest < array[i]) { largest = array[i]; }
}
console.log(largest);

function randomNumber(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}


let randNum = randomNumber(-5, 40)
console.log(randNum);

if (randNum < 10) {
    document.getElementById('pic').innerHTML = `<img id="pic" src="https://cdn.pixabay.com/photo/2017/02/10/03/12/winter-2054297_1280.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>`
} else if (randNum < 20) {

    document.getElementById('pic').innerHTML = `<img id="pic" src="https://cdn.pixabay.com/photo/2018/05/02/18/23/landscape-3369304_1280.jpg" class="card-img-top" alt="...">
    <div class="card-body">
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>`
} else {
    document.getElementById('pic').innerHTML = `<img id="pic" src="https://cdn.pixabay.com/photo/2017/10/06/01/52/fire-2821775_1280.jpg" class="card-img-top" alt="...">
    <div class="card-body">
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>`
}


let classStudents = [
    ["Martin", 76],
    ["Thomas", 85],
    ["Klaus", 65],
    ["Maria", 93],
    ["David", 81]
]
let grades = 0;

for (let i = 0; i < classStudents.length; i++) {
    grades += classStudents[i][1];

}
let average = (grades / classStudents.length);
console.log("Average grade: " + average + ' ' + check(average));



function check(result) {
    if (result < 60) {
        return ("Grade : F");
    } else if (result < 70) {
        return ("Grade : D");
    } else if (result < 80) {
        return ("Grade : C");
    } else if (result < 90) {
        return ("Grade : B");
    } else if (result < 100) {
        return ("Grade : A");
    }
}

for (let grade of classStudents) {
    console.log(grade[0] + ' ' + grade[1] + ' ' + check(grade[1]));
    // check(grade[1]);
}

for (var i = 1; i < 101; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}
let star = "*";

for (let i = 0; i < 6; i++) {
    console.log(star);
    star = star + "*";
}