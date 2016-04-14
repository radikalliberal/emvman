 jssor_slider_init = function(idslide, iddesc) {

     var jssor_SlideshowTransitions = [{
         $Duration: 1200,
         $Opacity: 2
     }];

     var jssor_options = {
         $AutoPlay: false,
         $SlideshowOptions: {
             $Class: $JssorSlideshowRunner$,
             $Transitions: jssor_SlideshowTransitions,
             $TransitionsOrder: 1
         },
         $ArrowNavigatorOptions: {
             $Class: $JssorArrowNavigator$
         },
         $BulletNavigatorOptions: {
             $Class: $JssorBulletNavigator$
         }
     };

     var jssor_slider = new $JssorSlider$(idslide, jssor_options);
     document.cookie = iddesc + "=0";
     //responsive code begin
     //you can remove responsive code if you don't want the slider scales while window resizing
     function ScaleSlider() {
         var refSize = jssor_slider.$Elmt.parentNode.clientWidth;
         if (refSize) {
             refSize = Math.min(refSize, 600);
             jssor_slider.$ScaleWidth(refSize);
         } else {
             window.setTimeout(ScaleSlider, 30);
         }
     }
     ScaleSlider();
     $Jssor$.$AddEvent(window, "load", ScaleSlider);
     $Jssor$.$AddEvent(window, "resize", ScaleSlider);
     $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
     //responsive code end
 };