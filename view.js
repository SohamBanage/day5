function changeimg(p){
    let imgTag = document.querySelector("#id1");
    if(p==1){
        imgTag.setAttribute("src","https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/v/0/t/-original-imaghxa5rgcv5enm.jpeg?q=70");
    }
    else if(p==2){
        imgTag.setAttribute("src","https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/3/i/g/-original-imaghxgwvahvrype.jpeg?q=70");

    }
    else if(p==3){
        imgTag.setAttribute("src","https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/r/k/g/-original-imaghxgwyqdxmsd7.jpeg?q=70");
    }

}
function like(){
    let h1counterTag=document.querySelector("#count");
    let exeval = h1counterTag.innerHTML;
    let newval = parseInt(exeval)+1;
    h1counterTag.innerHTML=newval;
}
function Dislike(){
    let h1counterTag=document.querySelector("#count2");
    let exeval = h1counterTag.innerHTML;
    let newval = parseInt(exeval)+1;
    h1counterTag.innerHTML=newval;
}
