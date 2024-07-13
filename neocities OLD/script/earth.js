var changedText = 0;
function changeText (num) {
    var grabby = document.getElementsByClassName("terminal-text");
    if (changedText < 1) { //black and white
        for (var i = 0; i<grabby.length; i++) { 
            for (var j=0;j<grabby[i].children.length;j++) {
                grabby[i].children[j].style = "color: black;    list-style-type: disc;";
            }
            grabby[i].style="font-family:Arial, Helvetica, sans-serif;"
        }
        document.getElementById("row-"+num).style = "background-color: white;";
        changedText = 1;
    }
    else if (changedText < 2) { //pink and gold
        for (var i = 0; i<grabby.length; i++) { 
            for (var j=0;j<grabby[i].children.length;j++) {
                grabby[i].children[j].style = "color: rgb(156, 80, 13); list-style-type: '🪔\t';     background: rgba(255, 227, 227, 0.5);  width: fit-content;";
            }
            grabby[i].style="font-family:Apple Chancery, cursive;" 
        }
        document.getElementById("row-"+num).style = "background-color: #ffc9d0;    background-image: url('https://64.media.tumblr.com/58dd77730e806a9a2e82fd52f394bcd1/6a961020457e613a-b2/s500x750/e56d49df50c926fcd75f265a1f0cf7a52bb6802b.png');";
        changedText = 2;
    }
    else if (changedText < 3) { //tumblr blue
        for (var i = 0; i<grabby.length; i++) { 
            for (var j=0;j<grabby[i].children.length;j++) {
                grabby[i].children[j].style = "color: #f4f5f6;  list-style-type: '𝘁   ";
            }
        }
        document.getElementById("row-"+num).style = "background-color: #001935;";
        changedText = 3;
    }
    else if (changedText < 4) { //edgy
        for (var i = 0; i<grabby.length; i++) { 
            for (var j=0;j<grabby[i].children.length;j++) {
                grabby[i].children[j].style = "color: white;  list-style-type: '>>>\t';    background: #eb3b3b80;  width: fit-content;";
            }
            grabby[i].style = "font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif";
        }
        document.getElementById("row-"+num).style = "background-color: rgb(164, 15, 15); background-image: url('https://64.media.tumblr.com/a57cf4e07f14055242fa62a019d5b030/ccd06b4fcc697bd8-67/s400x600/dd327268b001eee166054c6fe5d27aa6bc3e9445.png');";
        changedText = 4;
    }
    else if (changedText < 5) { //blue
        for (var i = 0; i<grabby.length; i++) { 
            for (var j=0;j<grabby[i].children.length;j++) {
                let terminalPoint="C:\\neocities\\Users\\low-voltage\\Home>";
                grabby[i].children[j].style = 'color: rgb(255, 255, 255); list-style-type:' + terminalPoint + ' ;';
            }
            grabby[i].style="font-family:'Courier New', Courier, monospace;"
        }
        document.getElementById("row-"+num).style = "background-color: rgb(0, 88, 255);";
        changedText = 5;
    }
    else { //back to normal
        for (var i = 0; i<grabby.length; i++) { 
            for (var j=0;j<grabby[i].children.length;j++) {
                let terminalPoint="C:\\neocities\\Users\\low-voltage\\Home>";
                grabby[i].children[j].style = 'color: rgb(45, 224, 17); list-style-type:' + terminalPoint + ' ;';
            }
            grabby[i].style="font-family:'Courier New', Courier, monospace;"
        }
        document.getElementById("row-"+num).style = "background-color: #1a1c1a; font-family:'Courier New', Courier, monospace;";
        changedText = 0;
    }
}