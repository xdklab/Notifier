(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #btn_beep */
    $(document).on("click", "#btn_beep", function(evt)
    {
        /* your code goes here */ 
        navigator.notification.beep(1);
        
    });
    
        /* button  #btn_vibrate */
    $(document).on("click", "#btn_vibrate", function(evt)
    {
        /* your code goes here */ 
        navigator.vibrate(1000);
    });
    
        /* button  #btn_sound */
    $(document).on("click", "#btn_sound", function(evt)
    {
        /* your code goes here */ 
        // get the webroot 
        var rootpath = window.location.href ;
        rootpath = rootpath.substring( 0, rootpath.lastIndexOf('/') ) ;
        
        // if it is a real iOS device the webroot is "/"
        var ua = navigator.userAgent; 
        if( !window.tinyHippos && ua.match(/(ios)|(iphone)|(ipod)|(ipad)/ig) ) { // it's not an emulator and it's iOS  
            rootpath = "" ;
        }
        
        var mediaURL = rootpath + "/sounds/bark.wav";
     
        var my_media = new Media(mediaURL,
                            // success callback
                            function(){
                                console.log("media play successful");
                            },
                            // error callback
                            function(){
                                console.log("media play error" + err);
                            }
                        );
        my_media.play();
   
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
