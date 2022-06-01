var random = (Math.random() * 38) - 5;
console.log(random)

if (random >= -5 && random <= 10) {
    document.write("The weather is cold")
} else if (random > 10 && random < 32)

{
    document.write("The weather is moderate")
} else {
    document.write("The weather is hot")
}

if (random < 10) {
    document.getElementsByClassName("card")[0].innerHTML = `<img src="https://cdn.pixabay.com/photo/2017/02/13/11/45/ice-2062433_960_720.jpg" class="card-img-top" alt="...">
    <div class="card-body">
        <p class="card-text">The weather is cold</p>
    </div>`;
} else if (random < 26) {
    document.getElementsByClassName("card")[0].innerHTML = `<img src="https://cdn.pixabay.com/photo/2013/08/11/04/24/city-171444_960_720.jpg" class="card-img-top" alt="...">
    <div class="card-body">
        <p class="card-text">The wather is moderate</p>
    </div>`;
} else {
    document.getElementsByClassName("card")[0].innerHTML = `<img src="https://cdn.pixabay.com/photo/2016/09/08/13/58/desert-1654439_960_720.jpg" class="card-img-top" alt="...">
    <div class="card-body">
        <p class="card-text">It's hot oof</p>
    </div>`;
}



function maximum(value) {
    if (toString.call(value) !== "[object Array]")
        return false;
    return Math.max.apply(null, value);
}
document.write(maximum([1, 7, -3, 9]));


var students = [
    ['Martin', 76],
    ['Thomas', 85],
    ['Klaus', 65],
    ['Maria', 93],
    ['David', 81]
];

var AvgMarks = 0;

for (var i = 0; i < students.length; i++) {
    AvgMarks += students[i][1];
    var avg = (AvgMarks / students.length);
}

console.log("Average grade: " + (AvgMarks) / students.length);

if (avg <= 60) { console.log("Not graded!"); } else if (avg >= 60 && avg <= 70) {
    console.log("Grade F");
} else if (avg >= 71 && avg <= 80) {
    console.log("Grade D");
} else if (avg >= 81 && avg <= 90) {
    console.log("Grade C");
} else if (avg >= 91 && avg <= 100) {
    console.log("Grade B ");
} else if (avg >= 101) {
    console.log("Grade A");
}