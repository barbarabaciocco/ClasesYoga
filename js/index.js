let nombreCompleto = prompt("Ingresa tu nombre")
console.log("Bienvenido/a" , nombreCompleto)

function clasesPrecios (id) {
    switch(id){
        case 1:
            alert("La clase de Hatha Yoga cuesta $ 1000")
            break
        case 2:
            alert("La clase de Yoga Flow cuesta $ 1200")
            break
        case 3:
            alert("La clase de Aero Yoga cuesta $ 1600")
            break
        case 4:
            alert("La clase de Fitness Yoga cuesta $ 1400")
            break
        case 5:
            alert("La clase de Kundalini Yoga  cuesta $ 1800")
            break
        case 6:
            alert("La clase de Yoga Pre-Natal cuesta $ 1300")
            break
        default:
            alert("No entendimos tu selección")
    }
}

function consultarClases () {
    let preguntar = true

    while (preguntar) {
        let idClases = prompt("Ingresa el código numérico de la clase que queres tomar:")
    
        if (idClases !== "" && idClases !== null) {
            clasesPrecios(parseInt(idClases))
        } else {
            console.warn("Ingresa un código de clase válido.")
        }
        preguntar = confirm ("¿Deseás conocer el precio de otra clase?")
    }
}

