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