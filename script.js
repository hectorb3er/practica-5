function zodiac(){
    let dia,mes;

    dia=parseInt(document.formulario.dia.value);
    mes=parseInt(document.formulario.mes.value);

    let image=document.getElementById("imagenes");

    if((dia>=20 && mes==3)||(dia<=20 && mes==4)){
        document.getElementById('Imagenes').src="./imagenes/Aries.png"
    }
    if((dia>=21 && mes==4)||(dia<=21 && mes==5)){
        document.getElementById('Imagenes').src="./imagenes/Tauro.png"
    }
    if((dia>=22 && mes==5)||(dia<=21 && mes==6)){
        document.getElementById('Imagenes').src="./imagenes/Geminis.png"
    }
    if((dia>=22 && mes==6)||(dia<=22 && mes==7)){
        document.getElementById('Imagenes').src="./imagenes/Cancer.png"
    }
    if((dia>=23 && mes==7)||(dia<=23 && mes==8)){
        document.getElementById('Imagenes').src="./imagenes/Leo.png"
    } 
    if((dia>=24 && mes==8)||(dia<=23 && mes==9)){
        document.getElementById('Imagenes').src="./imagenes/Virgo.png"
    }
    if((dia>=24 && mes==9)||(dia<=23 && mes==10)){
        document.getElementById('Imagenes').src="./imagenes/Libra.png"
    }
    if((dia>=24 && mes==10)||(dia<=22 && mes==11)){
        document.getElementById('Imagenes').src="./imagenes/Scorpio.png"
    }
    if((dia>=23 && mes==11)||(dia<=21 && mes==12)){
        document.getElementById('Imagenes').src="./imagenes/sagitario.png"
    }
    if((dia>=22 && mes==12)||(dia<=20 && mes==1)){
        document.getElementById('Imagenes').src="./imagenes/capricornio.png"
    }
    if((dia>=21 && mes==1)||(dia<=18 && mes==2)){
        document.getElementById('Imagenes').src="./imagenes/acuario.png"
    }
    if((dia>=19 && mes==2)||(dia<=20 && mes==3)){
        document.getElementById('Imagenes').src="./imagenes/piscis.png"
    }


}