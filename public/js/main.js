(function() {
    
    $( "#colorI" ).change(function() {
        document.getElementById('hex1').innerHTML = colorI.value;
    });

    $( "#colorF" ).change(function() {
        document.getElementById('hex2').innerHTML = colorF.value;
    });

    $( ".palbox" ).click(function() {
        var color = $(this).css( "background-color" );
        var hex = hexc(color) + "";
        $("#colorData").html("RGB: " + color + "<br>HEX: " + hex + "<br>Color name: " + ntc.name(hex)[1]);
    });
})();

function make(){
    $("#palt1").css("background-color", colorI.value.toString());
    $("#palt10").css("background-color", colorF.value.toString());

    var inicial = parseInt(colorI.value.replace("#",""),16);
    var final = parseInt(colorF.value.replace("#",""),16);

    var medio = [];
    var medioHex = [];

    medioHex[0] = colorI.value;
    medioHex[9] = colorF.value;

    //level 1
    
    medio[4] = Math.trunc((inicial + final)/2);
    medioHex[4] = "#" + medio[4].toString(16).padStart(6,"000000");
    medio[2] = Math.trunc((inicial + medio[4])/2);
    medioHex[2] = "#" + medio[2].toString(16).padStart(6,"000000");
    medio[1] = Math.trunc((inicial + medio[2])/2);
    medioHex[1] = "#" + medio[1].toString(16).padStart(6,"000000");

    //level 2
    medio[3] = Math.trunc((medio[2] + medio[4])/2);
    medioHex[3] = "#" + medio[3].toString(16).padStart(6,"000000");
    medio[7] = Math.trunc((medio[4] + final)/2);
    medioHex[7] = "#" + medio[7].toString(16).padStart(6,"000000");
    medio[6] = Math.trunc((medio[4] + medio[7])/2);
    medioHex[6] = "#" + medio[6].toString(16).padStart(6,"000000");
    medio[5] = Math.trunc((medio[4] + medio[6])/2);
    medioHex[5] = "#" + medio[5].toString(16).padStart(6,"000000");
    medio[8] = Math.trunc((medio[7] + final)/2);
    medioHex[8] = "#" + medio[8].toString(16).padStart(6,"000000");



    for (var i=0;i<=9;i++){
        $("#palt"+(i+1)).css("background-color", medioHex[i]);
    }
}

//vendor
function hexc(colorval) {
    var colord = "";
    var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    delete(parts[0]);
    for (var i = 1; i <= 3; ++i) {
      parts[i] = parseInt(parts[i]).toString(16);
      if (parts[i].length == 1) parts[i] = '0' + parts[i];
    }
    colord = '#' + parts.join('');
    return colord;
  }