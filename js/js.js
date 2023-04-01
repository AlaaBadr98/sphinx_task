// let zoom = Number((window.innerWidth / window.screen.width).toFixed(-3));
// document.firstElementChild.style.transform = "scale("+zoom+")";


// dummy section 

function setDummyShow() {
    
    document.getElementById("show").style.display = "none";
    document.getElementById("help-btn").style.display = "none";
    console.log('done');
    document.getElementById("dummy-sec").style.display = "";
}

function removeDummyShow() {
    document.getElementById("dummy-sec").style.display = "none";
    document.getElementById("help-btn").style.display = "none";
    document.getElementById("show").style.display = "block";
    console.log('done');
   
}
// help section 

function setHelpBtn() {
    
    document.getElementById("show").style.display = "none";
    document.getElementById("dummy-sec").style.display = "none";
    console.log('done');
    document.getElementById("help-btn").style.display = "";
}

function removeHelpBtn() {
    document.getElementById("help-btn").style.display = "none";
    document.getElementById("dummy-sec").style.display = "none";
    document.getElementById("show").style.display = "block";
    console.log('done');
   
}
//  the solutions of questions 
var sol='' , questionNum='';
function saveSol(val,ans){
console.log(val);
 document.getElementById(val).style.color ="#fff";
 document.getElementById(val).style.backgroundColor ="#0fa0c5";
 sol=ans;
 questionNum=val

};
function putSol(ans){
    if(ans===sol){
       document.getElementById("correct").play();
       document.getElementById(questionNum).style.color ="#000";
       document.getElementById(questionNum).style.backgroundColor ="#fff";
       showAns(questionNum);
       sol='' ; questionNum='';
       


    }else{
        document.getElementById("incorrect").play();
    }
     
    };

    function showAns(questionNum){
        console.log(questionNum);
     if(questionNum=='sol_1'){
        console.log(questionNum);
        document.getElementById('q_1_sol').style.display='';
     }
     else if (questionNum=='sol_2'){
        document.getElementById('q_2_sol').style.display='';
     }
     else {
        document.getElementById('q_3_sol').style.display='';
        console.log("qjjjjjj");
     }
    }
 

