let turn=1;
let gameover=0;
let arr=[[0,0,0],[0,0,0],[0,0,0]];
const msg=document.getElementById("turn");
function markbox(element){
    console.log(element);
    let row=parseInt(element.id.substring(1,2));
    let column=parseInt(element.id.substring(2,3));
    if(arr[row][column]||gameover)
        return;
    if(turn==1){
        element.innerHTML=`<i class="fas fa-times fa-3x"></i>`;
        turn=2;
        arr[row][column]=1;
        if(checkWin(1,row,column)){
            msg.innerHTML=`<h1>Player One Won</h1>`;
            gameover=1;
        }
        else if(checkGameOver()){
            msg.innerHTML=`<h1>Game Ended in a Tie</h1>`;
            gameover=1;
        }
        else
            msg.innerHTML=`<h1>Player Two's Turn</h1>`;
    }
    else{
        element.innerHTML=`<i class="far fa-circle fa-3x"></i>`;
        turn=1;
        arr[row][column]=2;
        if(checkWin(2,row,column)){
            msg.innerHTML=`<h1>Player Two Won</h1>`;
            gameover=1;
        }
        else if(checkGameOver()){
            msg.innerHTML=`<h1>Game Ended in a Tie</h1>`;
            gameover=1;
        }
        else
            msg.innerHTML=`<h1>Player One's Turn</h1>`;
    }
}
function checkWin(player,rowNum,columnNum){
    if(checkRowWin(player,rowNum)||checkColumnWin(player,columnNum)||checkLeftDiagonalWin(player)||checkRightDiagonalWin(player))
        return true;
    else
        return false;
}
function checkRowWin(player,rowNum){
    for(let j=0;j<3;j++){
        if(arr[rowNum][j]!=player)
            return false;
    }
    return true;
}
function checkColumnWin(player,columnNum){
    for(let i=0;i<3;i++){
        if(arr[i][columnNum]!=player)
            return false;
    }
    return true;
}
function checkLeftDiagonalWin(player){
    for(let i=0;i<3;i++){
        if(arr[i][i]!=player)
            return false;
    }
    return true;
}
function checkRightDiagonalWin(player){
    for(let i=0,j=2;i<3;i++,j--){
        if(arr[i][j]!=player)
            return false;
    }
    return true;
}
function checkGameOver(){
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(!arr[i][j])
                return false;
        }
    }
    return true;
}