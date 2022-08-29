let form1 = document.getElementById('form1')
let display1 = document.getElementById('display1')
let display2 = document.getElementById('display2')
let display3 = document.getElementById('display3')
let input3 = document.getElementById('slot3')
let input2 = document.getElementById('slot2')
let input1 = document.getElementById('slot1')

form1.addEventListener("submit", (e) => {
    e.preventDefault();
    /*let guessedNumbers2 = []
    guessedNumbers2[0] = document.getElementById('slot1').value
    guessedNumbers2[1] = document.getElementById('slot2').value
    */

    let guessedNumbers3 = []
    guessedNumbers3[0] = document.getElementById('slot1').value
    guessedNumbers3[1] = document.getElementById('slot2').value
    if(input3.value !== ''){
        guessedNumbers3[2] = input3.value
    }
    

    display1.value = guessedNumbers3
    /*if(guessedNumbers3.length == 2){
        display1.value = guessedNumbers2
    }else{
        display1.value = guessedNumbers3
    }*/

    const generatedNums = [];
    for (let i = 0; i < 6; i++) {
        let generatedNum = Math.floor(Math.random() * 100)
        generatedNums[i] = generatedNum
        display2.value = generatedNums
    }
    


    
      
      if(generatedNums.includes(guessedNumbers3)){
        display3.innerHTML =  "you win"
        display3.style.color = "rgba(4,125,9,1)";
          
    }
    
    else{
            display3.innerHTML = "you lost"
            display3.style.color = "#da3400";
        }
         if(display1.value ==','){
            display3.innerHTML = "please enter 2 or 3 numbers for 2sure or 3direct respectively"
            display2.value = " "
            display1.value = " "
        }   

})