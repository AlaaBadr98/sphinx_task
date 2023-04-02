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
    if(val===1){
        document.getElementById('sol_1').style.color ="#fff";
        document.getElementById('sol_1').style.backgroundColor ="#0fa0c5";
        document.getElementById('sol_2').style.color ="#0fa0c5";
        document.getElementById('sol_2').style.backgroundColor ="#fff";
        questionNum=1;
    }else{
        document.getElementById('sol_2').style.color ="#fff";
        document.getElementById('sol_2').style.backgroundColor ="#0fa0c5";
        document.getElementById('sol_1').style.color ="#0fa0c5";
        document.getElementById('sol_1').style.backgroundColor ="#fff";
        questionNum=2;
    }
 sol=ans;
};
function putSol(num,ans){
    // right answer 
    if(ans===sol){ 
        document.getElementById("correct").play();
       
       
       if(num==1){
        document.getElementById('q_1_sol').style.display='';
        document.getElementById('ans-1').innerHTML=sol;
        document.getElementById("img-1").src="media/tikMark-small.png";
     }
     else if (num==2){
        document.getElementById('q_2_sol').style.display='';
        document.getElementById('ans-2').innerHTML=sol;
        document.getElementById("img-2").src="media/tikMark-small.png";
     }
     else {
        document.getElementById('q_3_sol').style.display='';
        document.getElementById('ans-3').innerHTML=sol;
        document.getElementById("img-3").src="media/tikMark-small.png";
     }

    //  wrong answer 
    }else{
        document.getElementById("incorrect").play();
        if(num==1){
            document.getElementById('ans-1').innerHTML=sol;
            document.getElementById("img-1").src="media/Wrong-PNG-Image.png";
            setTimeout(function(){
                document.getElementById('q_1_sol').style.display='none';
               
            }, 1000);
            document.getElementById('q_1_sol').style.display='';
            num=0;
            
         }
         else if (num==2){
            document.getElementById('ans-2').innerHTML=sol;
            document.getElementById("img-2").src="media/Wrong-PNG-Image.png";
            setTimeout(function(){
                document.getElementById('q_2_sol').style.display='none';
               
            }, 1000);
            document.getElementById('q_2_sol').style.display='';
         }
         else {
            document.getElementById('ans-3').innerHTML=sol;
            document.getElementById("img-3").src="media/Wrong-PNG-Image.png";
            setTimeout(function(){
                document.getElementById('q_3_sol').style.display='none';
               
            }, 1000);
            document.getElementById('q_3_sol').style.display='';
         }
    }
     
    };
    //   show all anwsers 
    function showAllAnswar(){
        document.getElementById('q_1_sol').style.display='';
        document.getElementById('q_2_sol').style.display='';
        document.getElementById('q_3_sol').style.display='';

    }
//  restart the question 
    function restart(){
        document.getElementById('q_1_sol').style.display='none';
        document.getElementById('q_2_sol').style.display='none';
        document.getElementById('q_3_sol').style.display='none';


    }

    
 

