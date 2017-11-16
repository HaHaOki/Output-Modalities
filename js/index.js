<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

function random() {
return !Math.round(Math.random());
}

function makeBeep() {
    
    var rand = random();
    
    console.log(rand);
    
    if(rand) {
        navigator.notification.beep(1);
        navigator.notification.message(True);
    }
    else{
        navigator.notification.beep(2);
        navigator.notification.message(False);
    }
}

$("#myText").text("value");
$(document).on("pagecreate","#pageone",function(){
  
  	$('#taprandom').on("tap",function(){
    	makeBeep();
 	});
    

	//$('#taptext').on("tap",function(){
    	//alert("Stop tapping!");
        //$(this).css('color', 'red');
 	//}); 

	//$('#swipetext').on("swipeleft",function(){
    	//$(this).css('color', 'green');
        
  	//});   

});