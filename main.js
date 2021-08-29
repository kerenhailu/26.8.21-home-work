// ArrayElement = [
//   document.getElementById("one"),
//   document.getElementById("two"),
//   document.getElementById("three"),
//   document.getElementById("four"),
//   document.getElementById("five"),
//   document.getElementById("six"),
//   document.getElementById("seven"),
//   document.getElementById("eight"),
//   document.getElementById("nine"),
//   document.getElementById("ten"),
// ];

// window.setTimeout(() => {
//   document.getElementById("one").style.backgroundColor = "blue";
//   document.getElementById("two").style.backgroundColor = "green";
//   document.getElementById("three").style.backgroundColor = "red";
// }, 1000);

// window.setTimeout(() => {
//   document.getElementById("one").style.border = "5px solid black";
//   document.getElementById("two").style.border = "5px solid black";
//   document.getElementById("three").style.border = "5px solid black";
//   document.getElementById("four").style.border = "5px solid black";
//   document.getElementById("five").style.border = "5px solid black";
//   document.getElementById("six").style.border = "5px solid black";
//   document.getElementById("seven").style.border = "5px solid black";
//   document.getElementById("eight").style.border = "5px solid black";
//   document.getElementById("nine").style.border = "5px solid black";
//   document.getElementById("ten").style.border = "5px solid black";
// }, 2000);

// window.window.setTimeout(() => {
//   document.getElementById("seven").style.display = "none";
//   document.getElementById("eight").style.display = "none";
//   document.getElementById("nine").style.display = "none";
// }, 3000);

// ------------------------------3(לא הצלחתי)
// document.getElementById("btnAskThree").onclick = () => {
//   window.setInterval(() => {
//     var height = parseInt(AskThree.style.height);
//     AskThree.style.height = `${parseInt(height - 10)}+"px"`;
//     console.log(height);
//     AskThree.style.left = 50 + "px";
//     AskThree.style.bottom = 50 + "px";
//   }, 1000);
// };
// -----------------------------------------------------------4
// btnInput.onclick = () => {
//   inputP.innerHTML = `${parseInt(inputNumber.value * 5)}`;
//   console.log(`${parseInt(inputNumber.value * 5)}`);
// };

// inputNumber.oninput = () => {
//   inputP.innerHTML = `${inputNumber}`;
//   console.log(`${inputNumber}`);
// };
// -----------------------------------------------------------5

// var dontMove=window.setInterval(() => {
//   var random=Math.floor(Math.random() * 1000)
//   askFive.style.margin = random+"px";
// }, 2000);

// btnAskFive.onclick = () => {
//   window.clearInterval(
//     dontMove
//   )
// };
// -----------------------------------------------------------6(לא הצלחתי)
// הדפס את מיקום האירוע X,Y(השתמש ב- event).?
// טפל ב- COUNTER?


// ArrayCountries = [
//   {
//     Name: "Ethiopia",
//     flag: "https://cdn.pixabay.com/photo/2016/10/21/19/30/ethiopia-1758949__480.png",
//   },
//   {
//     Name: "UnitedStates",
//     flag: "https://cdn.pixabay.com/photo/2015/07/10/17/21/american-839775__340.jpg",
//   },
//   {
//     Name: "Japan",
//     flag: "https://cdn.pixabay.com/photo/2013/07/13/14/15/japan-162328__480.png",
//   },
// ];

// var COUNTERC = 0;
// var stop=window.setInterval(() => {
//   var randomFlag=Math.floor(Math.random() * 100)
//   img.style.margin = randomFlag+"px";
//   img.src = ArrayCountries[COUNTERC].flag;
//   CountriesP.innerHTML=COUNTERC
//   COUNTERC++;
//   img.onclick = () => {
//     img.style.display = "none";
    
//     COUNTERC=COUNTERC
//     document.write(COUNTERC)
//   };
//   if (COUNTERC == ArrayCountries.length) {
//     window.clearInterval(stop)
//   }
// }, 3000);

// ----------------------------------------------form 1
// inputPas
// inputEmail
// inputPasGood

// form.onsubmit=(event)=>{
//     event.preventDefault();
//     if(inputPas.value==inputPasGood.value){
//         pForm.innerHTML=(`<p>the same paasword</p>`)
//         console.log("the same");
//     }
//     if(inputPas.value.length==8){
//         pForm.innerHTML=(`<p>the length paasword is 8</p>`)
//         console.log("the 8");
//     }
// }

// -----------------------------------------------------form 2
// NameForm2
// EmailForm2 
// imgForm2 
// Pform2
// btnForm2
form2.oninput=(event)=>{
  event.preventDefault();
if(NameForm2.value.length==10){
  Pform2.innerHTML="yes"
  Pform2.style.backgroundColor="green"
  console.log("yes");
}
if(NameForm2.value.length!=10){
  Pform2.innerHTML="no"
  Pform2.style.backgroundColor="red"
  console.log("no");
}
}

