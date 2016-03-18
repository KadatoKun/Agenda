var w;
var h;
var bod;
w = screen.width;
h = screen.height;

    bod = document.getElementById("cuerpo");
    bod.style.width = w + "px";
    bod.style.height = h + "px";

function girar() {
var a;
var b;
    
    a = document.getElementById("gira");
    a.style.transition = "4s ease";
    b = Math.floor(Math.random() * 360);
    a.style.transform = 'rotate(' + b + 'deg)';
    a.style.webkitTransform = 'rotate(' + b + 'deg)';
    
    if (b >= 340 && b <= 359 || b >= 0 && b <= 20) {
        alert("Turno de A");
    }else if (b >= 25 && b <= 65) {
        alert("Turno de B");
    }else if (b >= 70 && b <= 110) {
        alert("Turno de C");
    }else if (b >= 115 && b <= 155) {
        alert("Turno de D");
    }else if (b >= 160 && b <= 200) {
        alert("Turno de E");
    }else if (b >= 205 && b <= 245) {
        alert("Turno de F");
    }else if (b >= 250 && b <= 290) {
        alert("Turno de G");
    }else if (b >= 295 && b <= 335) {
        alert("Turno de H");
    }
    
}
