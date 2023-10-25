window.onload = function () {
    const modoFacil = document.getElementById('Facil');
    const modoDificil = document.getElementById('difícil');
    const muestra=document.getElementById('muestra');
    const opciones = document.querySelectorAll('.opcion');
    const jugar = document.getElementById('Jugar');
    const invisible = document.getElementById('invisible');
    
    
    let modoDificilActivo = false;

    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    function facil() {
        
        if (modoDificilActivo) {
            modoDificilActivo = false;
            opciones.forEach((opcion) => {
                opcion.style.backgroundColor = 'transparent';
            });
        }

        const colorCorrecto = getRandomColor();
        
        const rgb = document.getElementById("rgb").innerHTML=colorCorrecto;
        
        const colores = [colorCorrecto, getRandomColor(), getRandomColor()];
        colores.sort(() => Math.random() - 0.5);

        
        opciones.forEach((opcion, index) => {
            opcion.style.backgroundColor = colores[index];
            opcion.addEventListener('click', () => verificarAdivinanza(colores[index], opcion));
        });
    

    function verificarAdivinanza(color, opcion) {
        if (color === colorCorrecto) {
           
            muestra.style.backgroundColor = colorCorrecto;
            modoDificil.style.backgroundColor = colorCorrecto;
            modoFacil.style.backgroundColor = colorCorrecto;
            jugar.style.backgroundColor = colorCorrecto;
            for (let i = 0; i < 3; i++) {
                opciones[i].style.backgroundColor = colorCorrecto;
            }
               
            
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } else {
            opcion.style.transition="0.5s";
           
            opcion.style.backgroundColor = 'transparent'; 
        }
    }
}

function dificil() {
        
    const colorCorrecto = getRandomColor();
    
    const rgb = document.getElementById("rgb").innerHTML=colorCorrecto;
    
    const colores = [colorCorrecto, getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()];
    colores.sort(() => Math.random() - 0.5);

    
    opciones.forEach((opcion, index) => {
        opcion.style.backgroundColor = colores[index];
        opcion.addEventListener('click', () => verificarAdivinanza(colores[index], opcion));
    });

    modoDificilActivo = true;
function verificarAdivinanza(color, opcion) {
    if (color === colorCorrecto) {
       
        opciones.forEach((opcion) => {
            opcion.style.backgroundColor = colorCorrecto;
            muestra.style.backgroundColor = colorCorrecto;
            modoDificil.style.backgroundColor = colorCorrecto;
            modoFacil.style.backgroundColor = colorCorrecto;
            jugar.style.backgroundColor = colorCorrecto;
        });
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    } else {
        opcion.style.transition="0.5s";
        opcion.style.backgroundColor = 'transparent'; 
        
    }
}

}


modoFacil.addEventListener('click', () => {
    invisible.style.color = "transparent";
    jugar.style.backgroundColor = "lightblue";
    jugar.style.color = "black";
    jugar.addEventListener('click', () => {
    
        facil();
        
    });
    });


modoDificil.addEventListener('click', () => {
    jugar.style.backgroundColor = "lightblue";
    invisible.style.color = "transparent";
    jugar.style.color = "black";
    jugar.addEventListener('click', () => {
    
        dificil(); 
        
    });
    
});


    
}