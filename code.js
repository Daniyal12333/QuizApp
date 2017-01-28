var questions=[
    {
        question:"Q1. Kindly ask him to play the piano, he is a __________ pianist.",
        option1:"Fragile",
        option2:"Virtuoso",
        option3:"Voracious",

    },
    {
        question:"Q2. Please be careful, the luggage contains __________ items.",
        option1:"Fragile",
        option2:"virtuoso",
        option3:"voracious",

    },
    {
        question:"Q3. Due to gas leakage, all people especially children are",
        option1:"fragile",
        option2:"virtuoso",
        option3:"vulnerable",

    },
    {
        question:"Q4. Nuclear energy is __________ dangerous to be used widely.",
        option1:"So",
        option2:"such",
        option3:"too",

    },
    {
        question:"Q5. If I have money, I __________ it tomorrow.",
        option1:"will purchase ",
        option2:"would purchase ",
        option3:"have purchase",

    }
]
var correctAnswers=["option2","option1","option3","option3","option1"];
var start=document.getElementById("startquiz");
var timer=document.getElementById("timer");
var quiz=document.getElementById("quiz");
var choice=quiz.getElementsByClassName("answer");
var next=document.getElementById("next");
var result=document.getElementById("result");
var index=document.getElementById("index");
scoresheet=document.getElementById("scoresheet");
var index=0,score=0,total=0,ans=0;
var minute=4;
var seconds=59;
var interval;
function startQuiz(){
    document.getElementById("scoresheet").className="hide";
     index=0,score=0,total=0,ans=0;
    var minute=4;
   var seconds=59;
    document.getElementById("index").className="hide";
    document.getElementById("quiz").className="show";
    interval=setInterval(time,1000);
    mainquiz();
}
function mainquiz() {
    document.getElementById("ques").innerHTML=questions[index].question;
    for(j=0;j<choice.length;j++){
        choice[j].checked=false;
    }
    next.disabled="true";
            choice[0].nextSibling.textContent = questions[index].option1;
            choice[1].nextSibling.textContent = questions[index].option2;
            choice[2].nextSibling.textContent = questions[index].option3;
}
function nextquestion() {
    for(var i=0;i<choice.length;i++){
        if(choice[i].checked){
            if(choice[i].value===correctAnswers[ans]){
                score++;
            }
        }
    }
        index++;
        ans++;
        if(index===questions.length){
        mainresult();
        }
        mainquiz();
}    
    
function mainresult(){
    console.log(score);
    clearInterval(interval);
    quiz.className="hide"
    document.getElementById("correctans").innerHTML="Correct:"+score+" Out Of "+questions.length;
    total=(score/questions.length)*100;
    console.log(total);
    document.getElementById("percentage").innerHTML="Percentage: "+total+"%";
    scoresheet.className="show";
}

function  enable() {
    next.disabled=false}
    function time(){
        timer.innerHTML=minute+":"+seconds;
        seconds--;
        if(seconds<0){
            minute--;
            seconds=59;
            if(minute<0){
                alert("Times up.");
                mainresult();
            }
        }
    }
        start.addEventListener("click",startQuiz);
        next.addEventListener("click",nextquestion);
        choice[0].addEventListener("click",enable);
        choice[1].addEventListener("click",enable);
        choice[2].addEventListener("click",enable);
        choice[3].addEventListener("click",enable);