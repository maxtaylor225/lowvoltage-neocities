/* Thank you https://stackoverflow.com/a/9296325 */
function flashtextnavi() {
    if (document.getElementById("navilink").style.color === 'greenyellow') {
    document.getElementById("navi").style = "background-color:greenyellow";
    document.getElementById("navilink").style = "color:red";
    } else {
    document.getElementById("navi").style = "background-color:magenta";
    document.getElementById("navilink").style = "color:greenyellow";
    }
} 
function hellflasher () {
    let header = document.getElementById("header");
    let apolo = document.getElementById("apolo");
    if (header.style.color === 'red') {
        header.style.textShadow = "0 0 10px #f00, 0 0 20px #f00, 0 0 30px #f00, 0 0 40px #e64100, 0 0 50px #fff, 0 0 60px #000, 0 0 70px #fff";
        header.style.color = "white";
        apolo.style = "background-color:rgb(164, 15, 15); color: rgb(255, 255, 255)";
    } else {
        header.style.textShadow = "0 0 0";
        header.style.color = "red";
        apolo.style = "background-color:none; color: black";
    }
}
setInterval(function() {
    flashtextnavi();
    hellflasher();
}, 500 );
