/* Themes */
function palette (option) {
    if (option==1) { /* regretting having not started at 0 */
      document.getElementsByTagName("body")[0].style="background-color: rgb(86, 113, 68); color:white;";  //green
      document.getElementById("row-1").style = "background-color: rgba(66, 82, 43, 0.72); background: url('https://get.pxhere.com/photo/tree-nature-forest-wilderness-branch-plant-leaf-flower-moss-wild-green-jungle-botany-spruce-vegetation-rainforest-deciduous-woodland-habitat-ecosystem-bemoost-magic-forest-fairy-tale-forest-biome-old-growth-forest-natural-environment-geographical-feature-woody-plant-temperate-broadleaf-and-mixed-forest-temperate-coniferous-forest-druid-grove-953299.jpg');background-position: left;";
    } else if (option==2) {
        document.getElementsByTagName("body")[0].style="background-color: #16659475; color:white;"; //blue
        document.getElementById("row-1").style = "background-color: rgba(66, 82, 43, 0.72); background: url('https://cdn.pixabay.com/photo/2015/03/26/15/55/coral-reef-692957_1280.jpg');background-position: left;";
        document.getElementById("row-2").style = "color: black;";
    } else if (option==3) {

    } else if (option==4) {
        document.getElementsByTagName("body")[0].style="background-color: rgb(56, 57, 55); color:white;"; //dark
        document.getElementById("row-1").style = "background: #1a1c269c;";

    } else if (option==5) {
        document.getElementsByTagName("body")[0].style="background-color: rgb(242, 255, 233); color:black;"; //light
        document.getElementById("row-1").style = "color: black;background: url('https://images.pexels.com/photos/714258/pexels-photo-714258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');background-position: center;";
        
    }  
}
function expand (id) {
    let toex = document.getElementById(id);
    if (toex.style.display=="none") {
        toex.style.display = "block";
    } else {
        toex.style.display = "none";
    }
}

/* Navigation*/
function expandnavigation(type) {
    if (type=="home") {
        console.log("TODO: redirect to top of feed, updating new stuff");
    } else if (type=="settings") {
        window.location = "./index.html";
    } else {
        if (type=="activity") {
            let elem = document.getElementById('expandactivitypane').style;
            if (elem.display == "block") {
                elem.display = "none";
            } else {
                elem.display = "block";
            }
        } else if (type=="inbox") {
            let elem = document.getElementById('expandinboxpane').style;
            if (elem.display == "block") {
                elem.display = "none";
            } else {
                elem.display = "block";
            }
        } else if (type=="account") {
            let elem = document.getElementById('expandaccountpane').style;
            if (elem.display == "block") {
                elem.display = "none";
            } else {
                elem.display = "block";
            }
        }
    }
}