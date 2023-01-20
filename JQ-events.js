// Mouse Events	Keyboard Events	Form Events	Document/Window Events
// click	             keypress	    submit	        load
// dblclick	        keydown	        change	        resize
// mouseenter	        keyup	        focus	        scroll
// mouseleave	 	                     blur	        unload


// In jQuery, most DOM events have an equivalent jQuery method.

// To assign a click event to all paragraphs on a page, you can do this:
// ..........js 
$("p").click();
// The next step is to define what should happen when the event fires. You must pass a function to the event:
// * change function
$("p").click(function(){
  $(this).hide();
});
// * dblclick function
$("p").dblclick(function(){
  $(this).hide();
});

// *mouseenter
$("#p1").mouseenter(function(){
  alert("You entered p1!");
});

// mouseleave()
$("#p1").mouseleave(function(){
  alert("Bye! You now leave p1!");
});

// *mousedown()
$("#p1").mousedown(function(){
  alert("Mouse down over p1!");
});

// *mouseup()
$("#p1").mouseup(function(){
  alert("Mouse up over p1!");
});

// *hover
$("#p1").hover(function(){
    alert("you entered p1")
},
function(){
    alert("bye you now leave")
})


// *focus()

$("input").focus(function(){
  $(this).css("background-color", "#cccccc");
});

// *blur()
$("input").blur(function(){
  $(this).css("background-color", "#ffffff");
});


// The on() Method
// 1
$("p").on("click", function(){
  $(this).hide();
});

// 2
$("p").on({
  mouseenter: function(){
    $(this).css("background-color", "lightgray");
  },
  mouseleave: function(){
    $(this).css("background-color", "lightblue");
  },
  click: function(){
    $(this).css("background-color", "yellow");
  }
});
