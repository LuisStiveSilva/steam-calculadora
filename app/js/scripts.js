const form = document.getElementById('form')
const button = document.getElementById('button')
const input = document.getElementById('input')
const output = document.getElementById('output')


form.addEventListener('submit', (e)=>{
    e.preventDefault()
    let total = calcularImpuesto(parseFloat(input.value))
    let respuesta = total.toString()
    let index = respuesta.indexOf('.')
    if(respuesta==0){
        output.textContent = `Resultado: $0.00`
    }
    if(index>0){
        output.textContent = `Resultado: $${respuesta.slice(0, index+3)}`
    } else {
        output.textContent = `Resultado: $${respuesta}`
    }
})

const calcularImpuesto = (num) =>{
    suma = num + num*0.64
    return suma
}