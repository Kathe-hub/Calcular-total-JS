const precio = 400000;

let cantidad = document.querySelector('#cantidad');
let color = document.querySelector('#color');
let boton_calcular = document.querySelector('#calculo');
let total = document.querySelector('#total');
let cantidad_final = document.querySelector('#cantidad-final');
let color_final = document.querySelector('#color-final');


boton_calcular.addEventListener('click', function (){
    let valor_final = cantidad.value * precio;
    total.innerHTML = '$' + valor_final.toLocaleString('cl-CL'); 
    cantidad_final.innerHTML = cantidad.value;
    color_final.style.backgroundColor = color.value;
});
 

