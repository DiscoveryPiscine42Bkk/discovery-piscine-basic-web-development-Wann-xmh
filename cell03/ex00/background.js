function Change_color(){
    var a = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256)
    var c = Math.floor(Math.random()*256);
    // alert(1);
    document.body.style.background= "rgb(" + a + "," + b + "," + c + ")";
}

// function random_color(){
//     let a = Math.floor(Math.random()*255)+1;
//     let b = Math.floor(Math.random()*255)+1;
//     let c = Math.floor(Math.random()*255)+1;
//     return rgb(a,b,c);

// }