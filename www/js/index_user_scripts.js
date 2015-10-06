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
        // beep 
        intel.xdk.notification.beep(1);
        
    });
    
        /* button  #btn_vibrate */
    $(document).on("click", "#btn_vibrate", function(evt)
    {
        /* your code goes here */ 
        intel.xdk.notification.vibrate();

    });
    
        /* button  #btn_sound */
    $(document).on("click", "#btn_sound", function(evt)
    {
        /* your code goes here */ 
       // intel.xdk.player.playSound("bark.wav");
        try {
                intel.xdk.player.playSound(intel.xdk.webRoot + "sounds/bark.wav");
            } catch (e) {}

    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
