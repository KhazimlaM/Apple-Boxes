// get a reference  apple DOM elements
const apple1Element = document.querySelector(".apples1")
const apple2Element = document.querySelector(".apples2")
const apple3Element = document.querySelector(".apples3")
const apple4Element = document.querySelector(".apples4")
const apple5Element = document.querySelector(".apples5")
const apple6Element = document.querySelector(".apples6")
const apple7Element = document.querySelector(".apples7")
const apple8Element = document.querySelector(".apples8")


//get a reference to the calculate and total buttons
 const button1Element = document.querySelector(".button1")
 const button2Element = document.querySelector(".button2")
 const total1Element = document.querySelector(".total1")
 const total2Element = document.querySelector(".total2")

 

const apples = appleBoxes();

//add an event listener for when the 'calculate' button is pressed
button1Element.addEventListener('click', () => {
    alert("hi")

    apples.setCostPaid(Number(apple1Element.value));
    apples.setApplesBought(Number(apple2Element.value));
    apples.setApplesToSell(Number(apple3Element.value));
    apples.setDesiredProfit(Number(apple4Element.value));
        

});



