 //create, style and initialize display screen
 counter= document.createElement("div");
 counter.id = "content";
 counter.style="font-size: 4rem;";
 counter.value = 0;
 counter.innerHTML="0";
 document.body.appendChild(counter);

//create and style button structure
buttons = document.createElement("div");
buttons.style="display: flex; gap: 30px;"
document.body.appendChild(buttons);

btn_set1 = document.createElement("div");
btn_set1.style=" display: flex;align-items: center;gap: 5px;";
buttons.appendChild(btn_set1);

btn_set2 = document.createElement("div");
btn_set2.style=" display: flex;align-items: center;gap: 5px;";
buttons.appendChild(btn_set2);

// subtract buttons
subtractButton = document.createElement("button");
subtractButton.id="subtract";
subtractButton.innerHTML="-1";
subtractButton.value=1;
subtractButton.style="width: auto; min-width: 50px; padding: 5px;"
subtractButton.addEventListener("mouseover",()=>{
    subtractButton.style="width: auto; min-width: 50px; padding: 5px; border:2px solid  rgb(60, 207, 60) ;color: rgb(60, 207, 60); ";});
subtractButton.addEventListener("mouseout", ()=>{
    subtractButton.style="width: auto; min-width: 50px; padding: 5px;";})
btn_set1.appendChild(subtractButton);

//change subtract button
changeSub = document.createElement("button");
changeSub.id="changeSubtract";
changeSub.style="width: 100px;font-size: 20px;padding: 5px;";
changeSub.addEventListener("mouseover",()=>{
    changeSub.style="width: 100px;font-size: 20px;padding: 5px; border:2px solid  rgb(71, 71, 155);color: rgb(71, 71, 155);";});
changeSub.addEventListener("mouseout",()=>{
changeSub.style="width: 100px;font-size: 20px;padding: 5px;";});
changeSub.innerHTML="Select -";
changeSub.value=0;
btn_set1.appendChild(changeSub);

//add buttons
addButton = document.createElement("button");
addButton.id="add";
addButton.innerHTML="+1";
addButton.value=1;
addButton.style="width: auto;min-width: 50px;padding: 5px;";
addButton.addEventListener("mouseover",()=>{
    addButton.style="width: auto;min-width: 50px;padding: 5px; border:2px solid  rgb(60, 207, 60) ;color: rgb(60, 207, 60);";});
    addButton.addEventListener("mouseout",()=>{
        addButton.style="width: auto;min-width: 50px;padding: 5px;";
    })
btn_set2.appendChild(addButton);

//change add button
changeAdd = document.createElement("button");
changeAdd.id="changeAdd";
changeAdd.innerHTML="Select +";
changeAdd.value=0;
changeAdd.style="width: 100px;font-size: 20px;padding: 5px;";
changeAdd.addEventListener("mouseover",()=>{
    changeAdd.style="width: 100px;font-size: 20px;padding: 5px; border:2px solid  rgb(71, 71, 155);color: rgb(71, 71, 155);";});
changeAdd.addEventListener("mouseout",()=>{
changeAdd.style="width: 100px;font-size: 20px;padding: 5px;";});
btn_set2.appendChild(changeAdd);



 //display value
function display(){
    document.getElementById("content").innerHTML = String(counter.value);
}

//every time the (+) or (-) button is clicked display the variation on screen (float numbers can be used as well)
function add (){
    addButton.addEventListener("click", () => {
        console.log("click");
         counter.value += Number(addButton.value);
         counter.value = Math.round(counter.value * 100) / 100;
         
         display();
}
    )
 }

function subtract (){
    subtractButton.addEventListener("click", () => {
                 counter.value -=Number(subtractButton.value);
                 counter.value = Math.round(counter.value * 100) / 100;
                 display();
        }
    )
 }

 //feature to change (+) and (-) values
 function changeA(){
    changeAdd.addEventListener("click",()=>{
        let res = prompt("How much do you want to add?");
        res = Number(res);
        if(isNaN(res)){
            alert("You need to insert a number!");
            changeAdd.value = 0;
        }
        else{
            changeAdd.value = res;
            addButton.value = res;
            addButton.innerHTML = "+" + res;
        }
       
    })
 }

function changeS(){
    changeSub.addEventListener("click",()=>{
        let res = prompt("How much do you want to subtract?");
        res = Number(res);
        if(isNaN(res)){
            alert("You need to insert a number!");
            changeAdd.value = 0;
        }
        else{
            changeSub.value = res;
            subtractButton.value = res;
            subtractButton.innerHTML = "-" + res;
        }
       
    })
}

//call functions
display();
 add();
 subtract();
 changeA();
changeS();

