function like(){
    let h1counterTag=document.querySelector("#count");
    let exeval = h1counterTag.innerHTML;
    let newval = parseInt(exeval)+1;
    h1counterTag.innerHTML=newval;
}