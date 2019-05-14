var basic;
$("button").click(function() {
    basic= $("#feels").val();
    if(basic==="Happy"|| basic=== "happy") {
        happyFeel();
    } else if(basic==="sad"|| basic==="Sad") {
        sadFeel();
    }
});
var url;
function changeimg(picture,id) {
    $("#"+id).attr("src", picture);
}
function happyFeel() {
   var array=["https://media0.giphy.com/media/lF1XZv45kIwMw/giphy.gif","https://media1.giphy.com/media/5GoVLqeAOo6PK/giphy.gif", "https://media.giphy.com/media/fP33mkcYLLPWM/giphy.gif"];
  var id=1;
  
   array.forEach(function(element) {
        changeimg(element,id.toString()); 
        id++;
        
    
    });

   
    $("body").css("background-color", "#e9b0fc");
  }
function sadFeel() {
    var array=[
        "https://data.whicdn.com/images/310589380/original.gif",
        "https://media2.giphy.com/media/ULKnZ7hW07rlS/giphy.gif",
        "https://media.giphy.com/media/d2lcHJTG5Tscg/giphy.gif"
    ];
        var id=1;
    array.forEach(function(element) {
        changeimg(element,id.toString()); 
       
        id++;
    });
         
    $("body").css("background-color", "#393a60"); 
     
}





