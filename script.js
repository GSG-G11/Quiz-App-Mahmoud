

 const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];


   currentQuiz=0
score=0

const input=document.querySelector('#Enter')
const nextBtn=document.querySelector('#nextBtn')
const LeaderBoardBtn=document.querySelector('.toLeaderBoard')




const answerEl=document.querySelectorAll('.radioCh')
const questionEl=document.getElementsByClassName("question")[0]
const questionNum=document.getElementsByClassName("questionNo")[0]
const userName=document.getElementsByClassName("Name")[0]
const theResult=document.getElementById("score")


const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')



let data = window.location.search.substr(1).split("=")[1];
userName.innerText = data
console.log(userName)


   
    loadQuiz()

    function loadQuiz() {
        deselectAnswers()
    
const currentQuizData = quizData[currentQuiz]


questionEl.innerText = currentQuizData.question
questionNum.innerText = currentQuiz+1

a_text.innerText = currentQuizData.a
b_text.innerText = currentQuizData.b
c_text.innerText = currentQuizData.c
d_text.innerText = currentQuizData.d
  
    }


function deselectAnswers() {
    answerEl.forEach(answerEl => answerEl.checked = false)
}


function getSelected() {
    let answer

    answerEl.forEach(el => {
        if(el.checked) {
            answer = el.id
         
           
        }
    })

    return answer
}



nextBtn.addEventListener('click', () => {
    const answer = getSelected()
    console.log(answer)
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++
  
        if(currentQuiz < quizData.length) {
            loadQuiz()
        }


        else {
            window.location="./page3.html"
            theResult.innerText = score
        }
    }})




    LeaderBoardBtn.addEventListener('click', () => {
        window.location="./page4.html"})



//     localStorage.setItem("highscore",JSON.stringify([]))

    
// const highscore=JSON.parse(localStorage.getItem("highscore"))
//     console.log(highscore)

//     const scores={
// result:score,
// name:data


//     }

//     highscore.push(scores)
//     console.log(scores)