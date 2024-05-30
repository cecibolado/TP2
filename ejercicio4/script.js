const $ = (id) => document.getElementById(id)
const formulario = $("formulario")
formulario.onsubmit = (e) => {
    e.preventDefault()

    const altura = $('altura').value
    const peso = $('peso').value
   
    if (altura > 0 && peso > 0) {
        let imc = peso / (altura * altura)
        alert('Su IMC es: ' + imc.toFixed(2))
    } else {
        alert('Por favor, ingrese valores válidos.')
}
}