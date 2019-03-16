function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}




var myQuestions=[{
    question: "What is 5+2",
    choises: {
        a: '8',
        b: '7',
        c: '6'
    },
    correctAnswer: "b"
},
{
    question: "What is 10 * 12",
    choises: {
        a: '100',
        b: '90',
        c: '120',
    },
    correctAnswer: 'c'
}];

$("#start").on("click", function(event){
    event.preventDefault() 
    var fiveMinutes = 60 * 5,
     display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
    $("#quiz").append(myQuestions);
})


var questionCounter = 0;
var rightAnswer =0;
var wrongAnswer = 0;


//Append questions to html here



//if thens for right and wrong answers
if (choises === correctAnswer){
    rightAnswer++;
} else {
    wrongAnswer++
}


//counter for right answers out of 10




