const formulario=$("Calculador");
function $(elemento) {
    return document.getElementById(elemento);}
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const ladoA=$("ladoA").value;
    const ladoB=$("ladoB").value;
    const ladoC=$("ladoC").value;
    const mensaje=$("mensaje").value;

    if (ladoA.value === "") {
        mensaje.textContent = "ingrese ladoA";
        return 
    }
    else if (ladoB.value === "") {
        mensaje.textContent = "Ingrese ladoB";
        return
    } 
    else if (ladoC.value === "") {
        mensaje.textContent = "Ingrese ladoC ";
        return
    } 
    else if (ladoA.value < ladoC.value) {
        mensaje.textContent = "lado A tiene que ser mayor que ladoC";
        return
    } 
    else if (ladoA < 0 ||ladoB < 0 ||ladoC < 0) {
        mensaje.textContent = "El valor debe ser positivo";
        return
    }
    const area = (ladoB * ladoC)+ ((ladoA - ladoC) * ladoB)/2
    alert (`Las medidas del terreno son ${area} metros²`)
})