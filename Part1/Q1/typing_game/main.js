const question = document.getElementById("question")
const form = document.forms.typing
const input = document.getElementById("input")
const count = document.getElementById("count")
const startBtn = document.getElementById("start-btn")
const resetBtn = document.getElementById("reset-btn")
const timer = document.getElementById("timer")

let counter = 0
count.innerHTML = counter


let totalTime = 30
timer.innerHTML = totalTime

input.disabled = true

let timeoutId;

startBtn.addEventListener("click",()=>{
    input.disabled = false
    input.focus();
    
    const countDown = () => {
        totalTime--
        timer.innerHTML = totalTime
        console.log(totalTime)
        timeoutId = setTimeout(countDown,1000)
        if(totalTime === 0){
            clearTimeout(timeoutId)
            input.disabled = true
        }
    }
    countDown()
})

resetBtn.addEventListener("click",()=>{
    init()
    console.log(totalTime)
    clearTimeout(timeoutId)
})


const textList = [
    "baggio",
    "beckham",
    "zidane",
    "figo",
    "ronald",
    "sergio ramos",
    "raul",
    "roberto carlos"
]

let questionRandom = Math.floor(Math.random()*textList.length)
question.innerHTML = textList[questionRandom]

input.addEventListener("input",(e)=>{
    if(input.value === question.innerHTML){
        counter++
        count.innerHTML = counter
        input.value = ""
        questionRandom = Math.floor(Math.random()*textList.length)
        question.innerHTML = textList[questionRandom]
    }
})

function init(){
    input.focus();
    input.value = ""
    count.innerHTML = 0
    input.disabled = true
    questionRandom = Math.floor(Math.random()*textList.length)
    question.innerHTML = textList[questionRandom]
    totalTime = 30
    timer.innerHTML = totalTime
}


