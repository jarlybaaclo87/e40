// document.addEventListener('DOMContentLoaded', function(){

// const timeDemoDiv = document.getElementById('timerDemo');
// let seconds = 0;
// let timerInterval;

// function startTimer() {
//     // Update the timer every second
//     timerInterval = setInterval(() => {
//         seconds++;
//         console.log(seconds);// Display on console just for checking if it is working as expected...
//         timeDemoDiv.textContent = seconds; //display the text in div
//         if (seconds === 60) { //reset seconds is exact equal to 60
//             seconds = 0;
//         }
//     }, 1000); // 1 second
// }
// startTimer();// Start the timer when the page loads
// });

window.onload=()=>{
    let timer=0;
    setInterval(()=>{
        timer+=plus1();
        if(timer==10) timer=0;
    }, 500);
    function plus1(){
        document.getElementById("timerDisplay").innerHTML=timer;
        console.log(timer);
        return 1;
    }
}