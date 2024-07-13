function expand (id) {
    let chosendiv = document.getElementById(id);
    if (chosendiv.style.display == "none") {
        document.getElementById(id).style="display:block;";
    } else {
        retract(id);
    }
}
function retract (id) {
    document.getElementById(id).style="display:none;";
}
var changedTheme = 0;
function findertheme (){
    var grabby = document.getElementById("row-2");
    if (changedTheme < 1) { //dark mode
        grabby.style= "background-color: #1a1c1a; color: white;";        
        for (var a=0;a<grabby.getElementsByTagName("a").length;a++) {
            grabby.getElementsByTagName("a")[a].style= "color: white; text-decoration:none;";
        }
        for (var h5=0;h5<grabby.getElementsByTagName("h5").length;h5++) {
            grabby.getElementsByTagName("h5")[h5].style= "color: white;";
        }
        changedTheme = 1;
    }
    else { //back to normal (light mode)
        grabby.style= "background-color: #fffeea; color: black;";        
        for (var a=0;a<grabby.getElementsByTagName("a").length;a++) {
            grabby.getElementsByTagName("a")[a].style= "color: black; text-decoration:none;";
        }
        for (var h5=0;h5<grabby.getElementsByTagName("h5").length;h5++) {
            grabby.getElementsByTagName("h5")[h5].style= "color: black;";
        }
        changedTheme = 0;
    }
}
function recentsessions () {
    document.getElementById("row-4").style="display:none";
    document.getElementById("row-5").style="display:block";

}
//Hidden
var grabcount = 0;
function grabbed() {
    console.log(grabcount); //comment out
    if (grabcount == 0) {
        document.getElementById("row-2").insertAdjacentHTML("beforeend", "<a href='https://www.youtube.com/watch?v=1OMTywqUPvg' style='text-decoration: none;'><li>🔗 Gif source [CW decay].lnk</li></a>");
        document.getElementsByTagName("body")[0].style = "background-color: #fdf4f4;"; //only one body in this page
        if (changedTheme) { //changedTheme == 1
            document.getElementById("row-2").style= "background-color: rgb(28, 26, 26); color: #fffc;";        
            for (var a=0;a<document.getElementById("row-2").getElementsByTagName("a").length;a++) {
                document.getElementById("row-2").getElementsByTagName("a")[a].style= "color: #fffc; text-decoration:none;";
            }
            for (var h5=0;h5<document.getElementById("row-2").getElementsByTagName("h5").length;h5++) {
                document.getElementById("row-2").getElementsByTagName("h5")[h5].style= "color: #fffc;";
            }
        } else { //changedTheme == 0
            document.getElementById("row-2").style= "background-color: rgb(239, 238, 209); color: #000000e3;";        
            for (var a=0;a<document.getElementById("row-2").getElementsByTagName("a").length;a++) {
                document.getElementById("row-2").getElementsByTagName("a")[a].style= "color: #000000e3; text-decoration:none;";
            }
            for (var h5=0;h5<document.getElementById("row-2").getElementsByTagName("h5").length;h5++) {
                document.getElementById("row-2").getElementsByTagName("h5")[h5].style= "color: #000000e3;";
            }
        }
        document.getElementById("row-3").style="opacity:95%"; 
    } else if (grabcount == 1) {
        document.getElementsByTagName("body")[0].style = "background-color: rgb(243, 222, 222);"; //only one body in this page
        if (changedTheme) { //changedTheme == 1
            document.getElementById("row-2").style= "background-color: rgb(22, 20, 20); color: rgba(255, 255, 255, 0.68);";        
            for (var a=0;a<document.getElementById("row-2").getElementsByTagName("a").length;a++) {
                document.getElementById("row-2").getElementsByTagName("a")[a].style= "color: rgba(255, 255, 255, 0.68); text-decoration:none;";
            }
            for (var h5=0;h5<document.getElementById("row-2").getElementsByTagName("h5").length;h5++) {
                document.getElementById("row-2").getElementsByTagName("h5")[h5].style= "color: rgba(255, 255, 255, 0.68);";
            }
        } else { //changedTheme == 0
            document.getElementById("row-2").style= "background-color: rgb(218, 217, 188); color: rgba(0, 0, 0, 0.77);";        
            for (var a=0;a<document.getElementById("row-2").getElementsByTagName("a").length;a++) {
                document.getElementById("row-2").getElementsByTagName("a")[a].style= "color: rgba(0, 0, 0, 0.77); text-decoration:none;";
            }
            for (var h5=0;h5<document.getElementById("row-2").getElementsByTagName("h5").length;h5++) {
                document.getElementById("row-2").getElementsByTagName("h5")[h5].style= "color: rgba(0, 0, 0, 0.77);";
            }
            
        }
        document.getElementById("row-2").insertAdjacentHTML("beforeend", "<h3 id='warn1'><span style='color:red;'>ARE YOU SURE?</span></h3>");
        document.getElementById("warn1").scrollIntoView();
        document.getElementById("row-3").style="opacity:85%"; 
    } else if (grabcount == 2) {
        document.getElementsByTagName("body")[0].style = "background-color: rgb(194, 159, 159);"; //only one body in this page
        if (changedTheme) { //changedTheme == 1
            document.getElementById("row-2").style= "background-color: rgb(24, 20, 20); color: rgba(255, 255, 255, 0.47);";        
            for (var a=0;a<document.getElementById("row-2").getElementsByTagName("a").length;a++) {
                document.getElementById("row-2").getElementsByTagName("a")[a].style= "color: rgba(255, 255, 255, 0.47); text-decoration:none;";
            }
            for (var h5=0;h5<document.getElementById("row-2").getElementsByTagName("h5").length;h5++) {
                document.getElementById("row-2").getElementsByTagName("h5")[h5].style= "color: rgba(255, 255, 255, 0.47);";
            }
        } else { //changedTheme == 0
            document.getElementById("row-2").style= "background-color: rgb(173, 173, 158); color: rgba(0, 0, 0, 0.47);";        
            for (var a=0;a<document.getElementById("row-2").getElementsByTagName("a").length;a++) {
                document.getElementById("row-2").getElementsByTagName("a")[a].style= "color: rgba(0, 0, 0, 0.47); text-decoration:none;";
            }
            for (var h5=0;h5<document.getElementById("row-2").getElementsByTagName("h5").length;h5++) {
                document.getElementById("row-2").getElementsByTagName("h5")[h5].style= "color: rgba(0, 0, 0, 0.47);";
            }
        }
        document.getElementById("row-2").insertAdjacentHTML("beforeend", "<h3 id='warn2'><span style='color:red;'>ARE YOU SURE?</span></h3>");
        document.getElementById("warn2").scrollIntoView();
        document.getElementById("row-3").style="opacity:70%"; 
    } else if (grabcount == 3) {
        document.getElementsByTagName("body")[0].style = "background-color: rgb(154, 72, 72);"; //only one body in this page
        if (changedTheme) { //changedTheme == 1
            document.getElementById("row-2").style= "background-color: rgb(26, 9, 9); color: rgba(255, 255, 255, 0.22);";        
            for (var a=0;a<document.getElementById("row-2").getElementsByTagName("a").length;a++) {
                document.getElementById("row-2").getElementsByTagName("a")[a].style= "color: rgba(255, 255, 255, 0.22); text-decoration:none;";
            }
            for (var h5=0;h5<document.getElementById("row-2").getElementsByTagName("h5").length;h5++) {
                document.getElementById("row-2").getElementsByTagName("h5")[h5].style= "color: rgba(255, 255, 255, 0.22);";
            }
        } else { //changedTheme == 0
            document.getElementById("row-2").style= "background-color: rgb(107, 107, 89); color: rgba(0, 0, 0, 0.22);";        
            for (var a=0;a<document.getElementById("row-2").getElementsByTagName("a").length;a++) {
                document.getElementById("row-2").getElementsByTagName("a")[a].style= "color: rgba(0, 0, 0, 0.22); text-decoration:none;";
            }
            for (var h5=0;h5<document.getElementById("row-2").getElementsByTagName("h5").length;h5++) {
                document.getElementById("row-2").getElementsByTagName("h5")[h5].style= "color: rgba(0, 0, 0, 0.22);";
            }
        }
        document.getElementById("row-2").insertAdjacentHTML("beforeend", "<h3 id='warn3'><span style='color:red;'>ARE YOU SURE?</span></h3>");
        document.getElementById("warn3").scrollIntoView();
        document.getElementById("row-3").style="opacity:50%"; 
    } else if (grabcount == 4) { 
        document.getElementsByTagName("body")[0].style = "background-color: rgb(154, 72, 72);";    
        if (changedTheme) { //changedTheme == 1
            document.getElementById("row-2").style= "background-color: rgb(35, 4, 4); color: rgba(255, 255, 255, 0.1);";        
            for (var a=0;a<document.getElementById("row-2").getElementsByTagName("a").length;a++) {
                document.getElementById("row-2").getElementsByTagName("a")[a].style= "color: rgba(255, 255, 255, 0.1); text-decoration:none;";
            }
            for (var h5=0;h5<document.getElementById("row-2").getElementsByTagName("h5").length;h5++) {
                document.getElementById("row-2").getElementsByTagName("h5")[h5].style= "color: rgba(255, 255, 255, 0.1);";
            }
        } else { //changedTheme == 0
            document.getElementById("row-2").style= "background-color: rgb(114, 114, 78); color: rgba(0, 0, 0, 0.1);";        
            for (var a=0;a<document.getElementById("row-2").getElementsByTagName("a").length;a++) {
                document.getElementById("row-2").getElementsByTagName("a")[a].style= "color: rgba(0, 0, 0, 0.1); text-decoration:none;";
            }
            for (var h5=0;h5<document.getElementById("row-2").getElementsByTagName("h5").length;h5++) {
                document.getElementById("row-2").getElementsByTagName("h5")[h5].style= "color: rgba(0, 0, 0, 0.1);";
            }
        }
        document.getElementById("row-2").insertAdjacentHTML("beforeend", "<h3 id='warn4'><span style='color:red;'>ARE YOU SURE?</span></h3>");
        document.getElementById("warn4").scrollIntoView();
        document.getElementById("row-3").style="opacity:20%"; 
    } else if (grabcount == 5) {
        document.getElementsByTagName("body")[0].style = "background: url('./v3/images/meat.gif');background-repeat: no-repeat; background-size: 100% 100%; overflow-y:unset; background-color: black;";    
        if (changedTheme) { //changedTheme == 1
            document.getElementById("row-2").style= "background-color: rgb(35, 4, 4); color: rgba(255, 255, 255, 0);";        
            for (var a=0;a<document.getElementById("row-2").getElementsByTagName("a").length;a++) {
                document.getElementById("row-2").getElementsByTagName("a")[a].style= "color: rgba(255, 255, 255, 0); text-decoration:none;";
            }
            for (var h5=0;h5<document.getElementById("row-2").getElementsByTagName("h5").length;h5++) {
                document.getElementById("row-2").getElementsByTagName("h5")[h5].style= "color: rgba(255, 255, 255, 0);";
            }
        } else { //changedTheme == 0
            document.getElementById("row-2").style= "background-color: rgb(82, 82, 61); color: rgba(0, 0, 0, 0);";        
            for (var a=0;a<document.getElementById("row-2").getElementsByTagName("a").length;a++) {
                document.getElementById("row-2").getElementsByTagName("a")[a].style= "color: rgba(0, 0, 0, 0); text-decoration:none;";
            }
            for (var h5=0;h5<document.getElementById("row-2").getElementsByTagName("h5").length;h5++) {
                document.getElementById("row-2").getElementsByTagName("h5")[h5].style= "color: rgba(0, 0, 0, 0);";
            }
        }
        document.getElementById("row-2").insertAdjacentHTML("beforeend", "<h1 id='warn5'><span style='color:red;'>ARE YOU SURE?</span></h1>");
        document.getElementById("warn5").scrollIntoView();
        document.getElementById("row-3").innerHTML=" "; 
        document.getElementById("row-3").style = "overflow-y: unset !important; opacity:0.3; border:none;";
        document.getElementById("row-3").insertAdjacentHTML("beforeend", "<p style='word-break: break-all;'><span style='color:red;'>STOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPLEASEPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPHURTINGMESTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTWHYAREYOUOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSPLEASETOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSPLEASEPLEASEPLEASETOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSJUSTTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOPSTOP</span><p>");

    } else if (grabcount == 6) {
        document.getElementById("row-2").style= "background-color: rgb(43, 28, 28); color: rgba(255, 255, 255, 0); border:none;";        
        document.getElementById("row-2").insertAdjacentHTML("beforeend", "<h1 id='warn5'><span style='color:#ff0000cf;'>ARE YOU SURE? ARE YOU SURE? ARE YOU SURE? ARE YOU SURE? ARE YOU SURE? ARE YOU SURE? ARE YOU SURE? ARE YOU SURE? ARE YOU SURE? ARE YOU SURE? ARE YOU SURE? ARE YOU SURE? ARE YOU SURE? ARE YOU SURE? ARE YOU SURE? ARE YOU SURE? ARE YOU SURE? ARE YOU SURE?</span></h1>");
        document.getElementById("warn5").scrollIntoView();
    } else if (grabcount == 7) {
        if (confirm("ARE YOU SURE?")) {
            document.getElementById("row-2").innerHTML="";
            document.getElementById("row-2").style="background:rgba(255, 255, 255, 0);border:none;overflow-y:unset;height:200px;";
            document.getElementById("row-3").innerHTML="";
            document.getElementById("row-3").style="background:rgba(255, 255, 255, 0);border:none;overflow-y:unset;";
            document.getElementById("row-4").style="background:rgba(255, 255, 255, 0);border:none;overflow-y:unset;";
          } else {
            window.location = "./music.html";
          } 
    } else if (grabcount == 8) {
        document.getElementById("row-3").innerHTML='<audio loop src="https://64.media.tumblr.com/2d58b72605f20879bf6f3740fa1910fd/17c19e5479190c39-b9/fcc2b0c8000d609e4c233fd5e7c7b074a44e39ca.mp3" autoplay></audio>';
        document.getElementById("row-4").insertAdjacentHTML("afterbegin", "<p>Hello.</p>");
    } else if (grabcount == 9) {
        document.getElementById("row-4").insertAdjacentHTML("afterbegin", "<p>stop clicking it.</p>");
    } else if (grabcount == 10) {
        document.getElementById("row-4").insertAdjacentHTML("afterbegin", "<p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p><p>stop clicking it.</p>");
    } else if (grabcount == 11) {
        window.location = "./v3/screens/398463246hell.html";
        grabcount = -1;
    } 
    grabcount++;
}
function grabby () {
    let grabbys = document.getElementsByClassName('grb');
    for (var i=0;i<grabbys.length;i++) {
        grabbys[i].addEventListener("click", grabbed); 
    }   
}