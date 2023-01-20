// Hide, Show, Toggle, Slide, Fade, and Animate. 
// jQuery hide() and show()
$("#hide").click(function(){
    $("p").hide();
  });
  
  $("#show").click(function(){
    $("p").show();
  });
// exapmle

  $("button").click(function(){
    $("p").hide(1000);
  });

//   jQuery toggle()
$("button").click(function(){
  $("p").toggle();
});
// jQuery fadeIn() Method
// The jQuery fadeIn() method is used to fade in a hidden element.

// Syntax:

// $(selector).fadeIn(speed,callback);
// The optional speed parameter specifies the duration of the effect. It can take the following values: "slow", "fast", or milliseconds.

// The optional callback parameter is a function to be executed after the fading completes.

// The following example demonstrates the fadeIn() method with different parameters:
```
Example
$("button").click(function(){
  $("#div1").fadeIn();
  $("#div2").fadeIn("slow");
  $("#div3").fadeIn(3000);
});
```
// jQuery fadeOut() Method
// The jQuery fadeOut() method is used to fade out a visible element.

// Syntax:

// $(selector).fadeOut(speed,callback);
// T

$("button").click(function(){
  $("#div1").fadeOut();
  $(".div1").fadeOut("slow");
  $("div").fadeOut(1000)
})


// jQuery fadeToggle() Method
// The jQuery fadeToggle() method toggles between the fadeIn() and fadeOut() methods.

// If the elements are faded out, fadeToggle() will fade them in.

// If the elements are faded in, fadeToggle() will fade them out.

// Syntax:

$(selector).fadeToggle(speed,callback);
$("button").click(function(){
  $("#div1").fadeToggle()
  $("#div2").fadeToggle("slow")
  $("#div3").fadeToggle(1000)
})

// jQuery fadeTo() Method
// The jQuery fadeTo() method allows fading to a given opacity (value between 0 and 1).

// Syntax:

// $(selector).fadeTo(speed,opacity,callback);
// The required speed parameter specifies the duration of the effect. It can take the following values: "slow", "fast", or milliseconds.

// The required opacity parameter in the fadeTo() method specifies fading to a given opacity (value between 0 and 1).

// The optional callback parameter is a function to be executed after the function completes.

// The following example demonstrates the fadeTo() method with different parameters:
$("button").click(function(){
  $("#div1").fadeTo("slow", 0.15);
  $("#div2").fadeTo("slow", 0.4);
  $("#div3").fadeTo("slow", 0.7);
});


// Slide
// jQuery slideDown() Method
// jQuery slideDown()
// Demonstrates the jQuery slideDown() method.

// jQuery slideUp()
// Demonstrates the jQuery slideUp() method.

// jQuery slideToggle()
// Demonstrates the jQuery slideToggle() method.
// The jQuery slideDown() method is used to slide down an element.

// Syntax:

// $(selector).slideDown(speed,callback);
// The optional speed parameter specifies the duration of the effect. It can take the following values: "slow", "fast", or milliseconds.

// The optional callback parameter is a function to be executed after the sliding completes.

// The following example demonstrates the slideDown() method:
$("#flip").click(function(){
  $("#dive1").slideDown()
})
// The jQuery slideToggle() method toggles between the slideDown() and slideUp() methods.

// If the elements have been slid down, slideToggle() will slide them up.

// If the elements have been slid up, slideToggle() will slide them down.

// $(selector).slideToggle(speed,callback);
// The optional speed parameter can take the following values: "slow", "fast", milliseconds.

// The optional callback parameter is a function to be executed after the sliding completes.

// The following example demonstrates the slideToggle() method:

// Example
$("#flip").click(function(){
  $("#panel").slideToggle();
});



// jQuery Animations - The animate() Method
// The jQuery animate() method is used to create custom animations.

// Syntax:

// $(selector).animate({params},speed,callback);
// The required params parameter defines the CSS properties to be animated.

// The optional speed parameter specifies the duration of the effect. It can take the following values: "slow", "fast", or milliseconds.

// The optional callback parameter is a function to be executed after the animation completes.
$("button").click(function(){
  $("div").animate({left: '250px'});
}); 
// ......
// tip
// remember         by default, all HTML elements have a static position, and cannot be moved.
// To manipulate the position, remember to first set the CSS position property of the element to relative, fixed, or absolute
// .....
// we can do animation by
// - Manipulate Multiple Properties

//  - Using Relative Values
// It is also possible to define relative values (the value is then relative to the element's current value). This is done by putting += or -= in front of the value:

// Example
$("button").click(function(){
  $("div").animate({
    left: '250px',
    height: '+=150px',
    width: '+=150px'
  });
}); 
// Is it possible to manipulate ALL CSS properties with the animate() method?

// Yes, almost! However, there is one important thing to remember: all property names must be camel-cased when used with the animate() method: You will need to write paddingLeft instead of padding-left, marginRight instead of margin-right, and so on.

// Also, color animation is not included in the core jQuery library.


```
// jQuery animate() - Uses Queue Functionality

```

// By default, jQuery comes with queue functionality for animations.

// This means that if you write multiple animate() calls after each other, jQuery creates an "internal" queue with these method calls. Then it runs the animate calls ONE by ONE.

// So, if you want to perform different animations after each other, we take advantage of the queue functionality:

// Example 1
$("button").click(function(){
  var div = $("div");
  div.animate({height: '300px', opacity: '0.4'}, "slow");
  div.animate({width: '300px', opacity: '0.8'}, "slow");
  div.animate({height: '100px', opacity: '0.4'}, "slow");
  div.animate({width: '100px', opacity: '0.8'}, "slow");
}); 

// jQuery Stop Animations
// The jQuery stop() method is used to stop an animation or effect before it is finished.

// The stop() method works for all jQuery effect functions, including sliding, fading and custom animations.

// Syntax:

// $(selector).stop(stopAll,goToEnd);
// The optional stopAll parameter specifies whether also the animation queue should be cleared or not. Default is false, which means that only the active animation will be stopped, allowing any queued animations to be performed afterwards.

// The optional goToEnd parameter specifies whether or not to complete the current animation immediately. Default is false.

// So, by default, the stop() method kills the current animation being performed on the selected element.
