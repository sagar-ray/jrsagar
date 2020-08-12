$(document).ready(function() {
     
    // For Auto writte coding
    var typed = new Typed('.auto-coding-writte', {
        strings: [ 
        
        "  <p>   </p> ", 
        "  <p> <span style='color:#9473c1'>if</span> (settings.controls) { <br> <span style='color:transparent ;'>d</span><span style='color:#9473c1'>var</span> x = wrapper[pluginName](<span style='color:green ;'> 'controls' </span>) ; <br> <span style='color:transparent ;'>d</span><span style='color:#9473c1'>var</span> next = x.next ; <br> <span style='color:transparent ;'>d</span><span style='color:#9473c1'>var</span> prev = x.prev ; <br><br> <span style='color:transparent ;'>d</span>next.click(<span style='color:#9473c1'>function</span> (e) { <br> <span style='color:transparent ;'>dd</span>wrapper[pluginName](<span style='color:green ;'> 'next' </span>) ; <br><br> <span style='color:transparent ;'>dd</span>e.<span style='color:yellow ;'>preventDefault</span>() ; <br> <span style='color:transparent ;'>dd</span> <span style='color:#9473c1'>if</span>  (settings.pauseOnHit) { <br> <span style='color:transparent ;'>ddd</span>wrapper[pluginName](<span style='color:green ;'> 'autoPlayPause' </span>) ; <br> <span style='color:transparent ;'>dd</span>} <br> <span style='color:transparent ;'>d</span>}) ; <span style='color:#555;'> // End next click </span> <br> <br> <span style='color:transparent;'>d</span>prev.click(<span style='color:#9473c1'>function</span> (e) { <br> <span style='color:transparent;'>d</span>wrapper[pluginName]( <span style='color:green ;'> 'prev' </span> ) ; <br><span style='color:transparent;'>dd</span>e.<span style='color:yellow ;'>preventDefault</span>() ; <br><br><span style='color:transparent;'>dd</span> <span style='color:#9473c1'>if</span> (settings.pauseOnHit) { <br><span style='color:transparent;'>ddd</span>wrapper[pluginName]( <span style='color:green ;'> 'autoPlayPause' </span> ) ; <br><span style='color:transparent;'>dd</span> }<br><span style='color:transparent;'>d</span> }); <span style='color:#555;'> // End prev click </span> <br>  ", 

    ],
        typeSpeed:20,
        loop: true,
        backSpeed:0,
        backDelay:300
    }); 

});