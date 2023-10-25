window.onload = function () {
    
    const muestra = document.getElementById('muestra');
    const opciones = document.querySelectorAll('.opcion');

    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    function iniciarJuego() {
        
        const colorCorrecto = getRandomColor();
        muestra.style.backgroundColor = colorCorrecto;

        
        const colores = [colorCorrecto, getRandomColor(), getRandomColor()];
        colores.sort(() => Math.random() - 0.5);

        
        opciones.forEach((opcion, index) => {
            opcion.style.backgroundColor = colores[index];
            opcion.addEventListener('click', () => verificarAdivinanza(colores[index], opcion));
        });
    

    function verificarAdivinanza(color, opcion) {
        if (color === colorCorrecto) {
            
            opciones.forEach((opcion) => {
                opcion.style.backgroundColor = colorCorrecto;
               
            });
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        } else {
            opcion.style.backgroundColor = 'transparent';  
        }
    }
}
iniciarJuego();

    
};