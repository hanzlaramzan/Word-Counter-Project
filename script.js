let textbox = document.getElementById("textbox");

textbox.addEventListener('input', function(){
    var text = this.value;
    let char = text.length;
    document.getElementById("char").innerHTML = char;

    text = text.trim();               // trim() remove the space left and right
    let words = text.split(" ");
    let cleanList = words.filter(function(elm){
        return elm != "";
    });
    document.getElementById("word").innerHTML = cleanList.length;
});