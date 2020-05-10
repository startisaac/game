
const questionNumberSpan=document.querySelector(".question-num-value");
const totalQuestionSpan=document.querySelector(".total-question");
const question=document.querySelector (".question");
const op1=document.querySelector(".option1");
const op2=document.querySelector(".option1");
const op3=document.querySelector(".option1");
const op4=document.querySelector(".option1");
let questionIndex;
let index=0;

//questions, option and answers

const questions= [
    {
        q: 'How many bones does an adult has?', option:['312','207','206','204'],
        answer:2
    },
    {
        q: 'The number of bones in a baby is about?', option:['206','less than 206','over 300','None of the above'],
        answer:2
    },
    {
        q: 'Digestion of food in the human body end in the ?', option:['ileum','Small intestine','Large intestine','stomach'],
        answer:1
    },
    {
        q: 'The nutrients in food is absorbed in the ?', option:['mouth','Small intestine','Large intestine','stomach'],
        answer:1
    }, 
    {
        q: 'which of the following constitute a large part of the human body?', option:['tongue','Small intestine','Large intestine','skin'],
        answer:3
    }
]

//set questions and answers


totalQuestionSpan.innerHTML=question.clientHeight;
function load(){
    questionNumberSpan.innerHTML=index+1;
    question.innerHTML=questions[questionIndex].q;
    op1.innerHTML=questions[questionIndex].options[0];
    op2.innerHTML=questions[questionIndex].options[1];
    op3.innerHTML=questions[questionIndex].options[2];
    op4.innerHTML=questions[questionIndex].options[3];
    inndex++;
}
function randomQuestions()}{
    let randomNumber=Math.floor(Math.random()*questions.length);
    questionIndex=randomNumber;
    //console.log(questionIndex)
    load();
}

window.onload=function(){
    tandomQea
}
 

