var element = document.getElementById("body");
var shw_hex_clr = document.getElementById("shw_hex_clr");
function changeStyle(){
    var hex =[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
    var hex_c= "";
    for(var i=0;i<6;i++){
        var j=Math.floor(Math.random() * 16);
        hex_c=hex[j]+hex_c;
    }
    var hex_clr="  #"+hex_c;
    shw_hex_clr.innerHTML=hex_clr;
    element.style.backgroundColor=hex_clr;
}