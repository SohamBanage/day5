function greatestNum(){
    let input1 = parseInt (document.querySelector("#id1").value);
    let input2 = parseInt (document.querySelector("#id2").value);
    let input3 = parseInt (document.querySelector("#id3").value);

    if(input1 > input2 && input1 > input3){
        alert(input1 + " is greater")
    }
    else if(input2 > input1 && input2 > input3){
        alert(input2+ " is greater")
    }
    else{
        alert(input3+ " is greatest")
    }
    
}