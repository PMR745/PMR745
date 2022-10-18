// @ts-nocheck
const skillGraph = document.querySelectorAll(".skill_graph"),
    progressValue = document.querySelectorAll(".progress_value");

let progressStartValue = 0,
    progressEndValue = [99, 75, 60, 99, 95, 82, 100],
    speed = 100;

// for(let i = 0; i < progressEndValue.length; i++) {
// let progress = setInterval(() => {
//     progressStartValue++;
//     // @ts-ignore
//     progressValue[i].textContent = `${progressStartValue}%`;
//     skillGraph[i].style.background = `conic-gradient(#04fc43 ${progressStartValue*3.6}deg, white 0deg)`;

//     if(progressStartValue == progressEndValue[i]) {
//         clearInterval(progress);
//         skillGraph[i].style.boxShadow = "0 0 20px 3px #04fc43";
//     }

// }, speed);
// progressStartValue = 0;

// }

for(let i = 0; i < progressEndValue.length; i++) {
    progressValue[i].textContent = `${progressEndValue[i]}%`;
    skillGraph[i].style.background = `conic-gradient(#04fc43 ${progressEndValue[i]*3.6}deg, white 0deg)`
    skillGraph[i].style.boxShadow = "0 0 20px 3px #04fc43";
}