let body = document.querySelector("body");
let main_div = document.getElementsByClassName("main")[0];
let inp1 = document.querySelectorAll(".inp");
let h2 = document.querySelector("h2");
let h4 = document.createElement("h4");
let h44 = document.createElement("h4");
let h1 = document.createElement("h1");
let btn = document.getElementById("btn");

let lead1 = document.getElementById("lead-child-11");
let lead2 = document.getElementById("lead-child-12");
let lead3 = document.getElementById("lead-child-21");
let lead4 = document.getElementById("lead-child-22");

let num2 = document.createElement("h3");
let num3 = document.createElement("h3");

let Win = 0;
let turn = "X";
let copy = "";
let sum1 = 0;
let sum2 = 0;
let num = 0;
let i = 0;

let user = prompt("Enter Your Name = ");
let info = prompt("Do you want to play this game with ur friend or Computer ?(F/C)");

let player_1;


if(info == "F"){

    player_1 = prompt("Enter Your friend's Name = ");

    lead1.insertAdjacentElement('afterbegin',h1);

    h1.innerText = user;
    h1.style.color = "red";
    h1.style.textAlign = "center";
    h1.style.fontSize = "1rem";
    h1.style.justifyContent = "1rem";
    h1.style.marginBottom = "-1rem";

    lead1.style.paddingTop = "0.5rem";


    let h3 = document.createElement("h3");

    lead3.insertAdjacentElement('afterbegin',h3);

    h3.innerText = player_1;
    h3.style.color = "green";
    h3.style.textAlign = "center";
    h3.style.fontSize = "1rem";
    h3.style.justifyContent = "1rem";
    h3.style.marginTop = "0rem";

    lead3.style.paddingTop = "0.5rem";


    num2.innerText = `${sum1}`;

    lead2.insertAdjacentElement('afterbegin',num2);

    num2.style.color = "white";
    num2.style.textAlign = "center";
    num2.style.marginTop = "1rem";


    num3.innerText = `${sum2}`;

    lead4.insertAdjacentElement('afterbegin',num3);

    num3.style.color = "white";
    num3.style.textAlign = "center";
    num3.style.marginTop = "1rem";


    inp1.forEach(cell => {

        cell.addEventListener("click", handleCellClick);

    });


    function handleCellClick(event){

        if(event.target.textContent == ""){

            if(turn == "X"){

                sum1++;

                num2.innerText = `${sum1}`;

                h2.innerText = `It's ${user}'s Turn`;


                setTimeout(function(){

                    event.target.textContent = "X";

                    event.target.style.textAlign = "center";
                    event.target.style.color = "White";
                    event.target.style.fontSize = "1.5rem";

                    event.target.disabled = true;

                    CheckWinner();
                    CheckDraw();

                    if(Win == 2){
                        return;
                    }

                    h2.innerText = `It's ${player_1}'s Turn`;

                },600);


                turn = "O";

            }

            else{

                setTimeout(function(){

                    event.target.textContent = "O";

                    event.target.style.textAlign = "center";
                    event.target.style.color = "White";
                    event.target.style.fontSize = "1.5rem";

                    event.target.disabled = true;

                    CheckWinner();
                    CheckDraw();

                    if(Win == 2){
                        return;
                    }

                    h2.innerText = `It's ${user}'s Turn`;

                },600);


                sum2++;

                num3.innerText = `${sum2}`;

                turn = "X";

            }

        }

    }

}


else if(info == "C"){

    lead1.insertAdjacentElement('afterbegin',h4);

    h4.innerText = user;
    h4.style.color = "red";
    h4.style.textAlign = "center";
    h4.style.fontSize = "1rem";
    h4.style.justifyContent = "1rem";
    h4.style.marginBottom = "-1rem";

    lead1.style.paddingTop = "0.5rem";


    lead3.insertAdjacentElement('afterbegin',h44);

    h44.innerText = "Computer";
    h44.style.color = "green";
    h44.style.textAlign = "center";
    h44.style.fontSize = "1rem";
    h44.style.justifyContent = "1rem";
    h44.style.marginTop = "0rem";

    lead3.style.paddingTop = "0.5rem";


    num2.innerText = `${sum1}`;

    lead2.insertAdjacentElement('afterbegin',num2);

    num2.style.color = "white";
    num2.style.textAlign = "center";
    num2.style.marginTop = "1rem";


    num3.innerText = `${sum2}`;

    lead4.insertAdjacentElement('afterbegin',num3);

    num3.style.color = "white";
    num3.style.textAlign = "center";
    num3.style.marginTop = "1rem";


    inp1.forEach(cell => {

        cell.addEventListener("click", CompClick);

    });


    function CompClick(event){

        h2.innerText = `It's ${user}'s Turn`;


        if(turn == "X"){

            if(event.target.textContent == ""){

                sum1++;

                num2.innerText = `${sum1}`;


                setTimeout(function(){

                    event.target.textContent = "X";

                    event.target.style.textAlign = "center";
                    event.target.style.color = "White";
                    event.target.style.fontSize = "1.5rem";

                    event.target.disabled = true;


                    CheckWinner();
                    CheckDraw();


                    if(Win == 2){
                        return;
                    }


                    let emptyBox = Array.from(inp1)
                        .find(cell => cell.textContent == "");


                    if(!emptyBox){
                        return;
                    }


                    h2.innerText = `It's Computer's Turn`;

                    turn = "O";


                    setTimeout(function(){

                        if(turn == "O" && Win != 2){

                            sum2++;

                            num3.innerText = `${sum2}`;

                            Putcomp();

                        }

                    },1000);

                },600);

            }

        }

    }

}


else{

    alert("Don't Enter anything else apart from (F/C)");

    location.reload();

}



let WinningPatterns = [

    ["1","2","3"],
    ["4","5","6"],
    ["7","8","9"],

    ["1","4","7"],
    ["2","5","8"],
    ["3","6","9"],

    ["1","5","9"],
    ["3","5","7"]

];



function Putcomp(){

    turn = "X";

    let found = false;


    for(let pattern of WinningPatterns){

        let box1 = document.getElementById(pattern[0]);
        let box2 = document.getElementById(pattern[1]);
        let box3 = document.getElementById(pattern[2]);


        if(
            box1.textContent == "O" &&
            box2.textContent == "O" &&
            box3.textContent == ""
        ){

            box3.textContent = "O";

            box3.style.textAlign = "center";
            box3.style.color = "White";
            box3.style.fontSize = "1.5rem";

            box3.disabled = true;

            CheckWinner();
            CheckDraw();

            found = true;

            break;
        }


        else if(
            box1.textContent == "O" &&
            box2.textContent == "" &&
            box3.textContent == "O"
        ){

            box2.textContent = "O";

            box2.style.textAlign = "center";
            box2.style.color = "White";
            box2.style.fontSize = "1.5rem";

            box2.disabled = true;

            CheckWinner();
            CheckDraw();

            found = true;

            break;
        }


        else if(
            box1.textContent == "" &&
            box2.textContent == "O" &&
            box3.textContent == "O"
        ){

            box1.textContent = "O";

            box1.style.textAlign = "center";
            box1.style.color = "White";
            box1.style.fontSize = "1.5rem";

            box1.disabled = true;

            CheckWinner();
            CheckDraw();

            found = true;

            break;
        }


        else if(
            box1.textContent == "X" &&
            box2.textContent == "X" &&
            box3.textContent == ""
        ){

            box3.textContent = "O";

            found = true;
        }


        else if(
            box1.textContent == "X" &&
            box2.textContent == "" &&
            box3.textContent == "X"
        ){

            box2.textContent = "O";

            found = true;
        }


        else if(
            box1.textContent == "" &&
            box2.textContent == "X" &&
            box3.textContent == "X"
        ){

            box1.textContent = "O";

            found = true;
        }


        if(found){

            let chosen = [box1,box2,box3]
                .find(b => b.textContent == "O");

            chosen.style.textAlign = "center";
            chosen.style.color = "White";
            chosen.style.fontSize = "1.5rem";

            chosen.disabled = true;


            CheckWinner();
            CheckDraw();

            break;
        }

    }


    if(!found){

        while(true){

            let randum = Math.floor(Math.random() * 9 + 1);

            let indx = document.getElementById(randum.toString());


            if(indx.textContent == ""){

                indx.textContent = "O";

                indx.style.textAlign = "center";
                indx.style.color = "White";
                indx.style.fontSize = "1.5rem";

                indx.disabled = true;


                CheckWinner();
                CheckDraw();

                break;

            }

        }

    }

}



function CheckWinner(){

    for(let pattern of WinningPatterns){

        let box1 = document.getElementById(pattern[0]);
        let box2 = document.getElementById(pattern[1]);
        let box3 = document.getElementById(pattern[2]);


        if(
            box1.textContent != "" &&
            box1.textContent == box2.textContent &&
            box2.textContent == box3.textContent
        ){

            if(info == "F"){

                if(box1.textContent == "O"){

                    console.log(`Its ${player_1} won`);

                    box1.style.color = "red";
                    box2.style.color = "red";
                    box3.style.color = "red";

                    let WinnerName = player_1;

                    Win = 2;

                    WinningLabel(WinnerName);

                    break;

                }

                else{

                    console.log("Winner");

                    box1.style.color = "red";
                    box2.style.color = "red";
                    box3.style.color = "red";

                    let WinnerName = user;

                    Win = 2;

                    WinningLabel(WinnerName);

                    break;

                }

            }


            else if(info == "C"){

                if(box1.textContent == "O"){

                    console.log(`Its Computer's won`);

                    box1.style.color = "red";
                    box2.style.color = "red";
                    box3.style.color = "red";

                    let WinnerName = "Computer";

                    Win = 2;

                    WinningLabel(WinnerName);

                    break;

                }


                else{

                    console.log("Winner");

                    box1.style.color = "red";
                    box2.style.color = "red";
                    box3.style.color = "red";

                    let WinnerName = user;

                    Win = 2;

                    WinningLabel(WinnerName);

                    break;

                }

            }

        }

    }

}



function WinningLabel(WinnerName){

    setTimeout(function(){

        let div = document.createElement("div");

        main_div.append(div);

        div.style.border = "1px solid transparent";
        div.style.height = "17rem";
        div.style.width = "100%";
        div.style.marginTop = "2rem";
        div.style.backgroundColor = "transparent";
        div.style.position = "fixed";


        if(WinnerName == "Computer"){

            let h2 = document.createElement("h2");

            div.insertAdjacentElement('afterbegin',h2);

            h2.innerText = "COMPUTER WON";

            h2.style.textAlign = "center";
            h2.style.color = "#c1121f";
            h2.style.zIndex = "10";
            h2.style.marginTop = "3rem";
            h2.style.fontSize = "1rem";
            h2.style.transition = "all 4s ease";


            setTimeout(() => {

                h2.style.fontSize = "3rem";

            },50);

        }


        else{

            let h2 = document.createElement("h2");
            let h1 = document.createElement("h4");

            div.insertAdjacentElement('afterbegin',h2);

            div.append(h1);

            h2.innerText = `ConGrats! ${WinnerName.toUpperCase()}`;

            h1.innerText = "YOU WON";

            h1.style.color = "red";
            h1.style.zIndex = "11";
            h1.style.fontSize = "1rem";
            h1.style.textAlign = "center";

            h2.style.textAlign = "center";
            h2.style.color = "#c1121f";
            h2.style.zIndex = "10";
            h2.style.marginTop = "3rem";
            h2.style.fontSize = "1rem";

            h1.style.transition = "all 4s ease";
            h2.style.transition = "all 4s ease";


            setTimeout(() => {

                h1.style.fontSize = "3.5rem";
                h2.style.fontSize = "3rem";

            },50);

        }

    },2000);

}



function CheckDraw(){

    let filled = true;


    inp1.forEach(cell => {

        if(cell.textContent == ""){

            filled = false;

        }

    });


    if(filled && Win == 0){

        setTimeout(function(){

            let div = document.createElement("div");

            main_div.append(div);

            div.style.position = "fixed";
            div.style.border = "1px solid transparent";
            div.style.height = "17rem";
            div.style.width = "100%";
            div.style.backgroundColor = "black";


            let h1 = document.createElement("h1");

            div.insertAdjacentElement('afterbegin',h1);

            h1.innerText = "MATCH DRAW";

            h1.style.color = "red";
            h1.style.fontSize = "5rem";
            h1.style.textAlign = "center";
            h1.style.marginTop = "5rem";

        },2000);

    }

}



btn.addEventListener("click",function(){

    location.reload();

});
