let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");

let winmsg1=document.querySelector(".win-msg");
let newgame1=document.querySelector(".newgame");
let msgcontainer1=document.querySelector(".msg-container");

 
// 2d array
let arrays=[
    [0,1,2] ,             
    [3,4,5] ,             
    [6,7,8] ,             
    [0,3,6] ,
    [1,4,7] ,
    [2,5,8] ,
    [0,4,8] ,
    [2,4,6] ,
   
]



let count=0;
let turn0=true;    
boxes.forEach((box)=>{                               
    box.addEventListener("click",()=>{               
        if(turn0){
            box.innerText="0";
            turn0=false;
            box.disabled=true;
            count+=1;

        }else{
            box.innerText="x";
            turn0=true;
            box.disabled=true;
            count+=1;

        }
      

        winnercheck();

    })
}

);


//checking  who win after clickaton f every button

let winnercheck = ()=> {
    for(onearr of arrays){
        
        
        let position1=boxes[onearr[0]].innerText;
        let position2=boxes[onearr[1]].innerText;
        let position3=boxes[onearr[2]].innerText;
        //check everyone is filled
        if(position1 !== "" && position2 !== "" && position3 !== "" )
        {
            //check values are same
            if(position1 === position2 && position2 ===  position3  )
               {
                    // console.log(`winner is ${position1}`)
                    printwinner(position1);
                    
                }
               

        }

    }

}

//print the winner on screen
let printwinner = (winner) => {
    winmsg1.innerText=`CONGRATULATIONS !! ${winner} WINNER`; //text chng 1st
    msgcontainer1.classList.remove("hide");  //display:none set in css now remove due to hide class remove 
    //stop the game by disabling the buttons
    disablebuttons()
    
}

let disablebuttons = () =>{
    for(box of boxes){
        box.disabled=true;
    }
}


//new game button and reset button settings

let newgame = () => {
     turn0=true;
    msgcontainer1.classList.add("hide");
    freshbuttons();
    

}

let freshbuttons = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";

    }
}

 

reset.addEventListener("click", newgame)
newgame1.addEventListener("click", newgame)

