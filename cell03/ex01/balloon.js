ball_size=200;
min=200;
max=420;
let i=0;


function grow(){
    ball_size=ball_size+10;
    if(ball_size<420 && ball_size>200){
    balloon.style.width =ball_size+"px";
    balloon.style.height=ball_size+10 +"px";
    }
    else if(ball_size>=420){
    balloon.style.width =200+"px";
    balloon.style.height=200 +"px";
    }
    change_color();

}

function smaller(){
    ball_size=ball_size-5;
    if(ball_size<420 && ball_size>200){
    balloon.style.width =ball_size+"px";
    balloon.style.height=ball_size+"px";
    }
    else{
        balloon.style.width =200 +"px";
    }
    change_color2();

}

function change_color(){
    i+=1;
    const color=["red","green","blue"];
    balloon.style.backgroundColor= color[i%3];
    
}
function change_color2(){
    i-=1;
    const color=["red","green","blue"];
    balloon.style.backgroundColor= color[i%3];
    
}
            
            