const resultsList = document.querySelector(".results-list");
const listInput = document.querySelector(".list-input");
const listInput2 = document.querySelector(".list-input2");
const addBtn = document.querySelector(".add");

function rollDice (size) {
    const randomDice = Math.ceil(Math.random()*size)
    return randomDice
}

function rollMultipleDice (quantity, size){
    let diceArray = []
    for (let i = 0; i<quantity; i++){
        let rolledDie = rollDice(size);
        diceArray.push(rolledDie);
    }
    return diceArray
}

function addArray (array) {
    let total = 0
    for (let i = 0; i<array.length;i++){
        total = total + array[i]
    }
    console.log(total)
    return total
}

addBtn.addEventListener('click', function(){
    //Create an Li
    const newLi = document.createElement('LI');
    //liContent must equal the content I want to display
    const liContent = document.createTextNode(rollMultipleDice(listInput.value,listInput2.value) + '     ' + addArray(rollMultipleDice(listInput.value,listInput2.value)));
    //Add the input value inside that new Li
    newLi.appendChild(liContent);
    //Attach the Li to the user list
    resultsList.appendChild(newLi);
});

