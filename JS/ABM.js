//A futuro la posibilidad de cargar productos es si tiene un permiso especial.

let materiales = []


//Carga de Material para la venta 
class Material{
    constructor(nombre, lugarColocacion, acabado, fabricante, medida, uso, precio ){
        this.nombre = nombre
        this.lugarColocacion = lugarColocacion
        this.acabado = acabado
        this.fabricante = fabricante
        this.medida = medida
        this.uso = uso
        this.precio = precio
    }
}

let botonCargar = document.getElementById('cargarProductoButton')
let divRevestimientos = document.getElementById('materiales')
let productsForm = document.getElementById('productsForm')


productsForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    let nombre = document.getElementById('nombre').value
    let lugarColocacion = document.getElementById('lugarColocacion').value
    let acabado = document.getElementById('acabado').value
    let fabricante = document.getElementById('fabricante').value
    let medida = document.getElementById('medida').value
    let uso = document.getElementById('uso').value
    let precio = document.getElementById('precio').value

    //console.log(nombre,lugarColocacion, acabado,fabricante,medida,uso,`$ ${precio}`)
    const materialForm= new Material (nombre, lugarColocacion, acabado, fabricante, medida, uso, precio )
    materiales.push(materialForm)
    productsForm.reset()
    localStorage.setItem ('materiales',JSON.stringify(materiales))
})


botonCargar.addEventListener('click',(e)=>{
    e.preventDefault()
    let detallesParseados= JSON.parse(localStorage.getItem('materiales'))
    divRevestimientos.innerHTML = ""
    detallesParseados.forEach((material, indice)=> {
            divRevestimientos.innerHTML +=`
            <div class="card border-primary mb-3" id="tipo${indice + 1}" style="max-width: 20rem;">
                <div class="card-body">
                    <h5 class="card-title">${material.nombre} - ${material.fabricante}</h5>
                        <p>Lugar de colocación: ${material.lugarColocacion} </p>
                        <p>Acabado: ${material.acabado} </p>
                        <p>Fabricante: ${material.fabricante} </p>
                        <p>Dimensiones: ${material.medida} </p>
                        <p>Intensidad de uso: ${material.uso} </p>
                        <h6>$ ${material.precio} </h6>
                        <button type="button" class="btn btn-danger" id="boton${indice+1}">Eliminar</button>
                    
                </div>
            </div>`
    })
    

    detallesParseados.forEach((material, indice)=> {
        console.log(`boton${indice + 1}`)
        document.getElementById(`boton${indice + 1}`).addEventListener('click', () => {

            divRevestimientos.removeChild(document.getElementById(`tipo${indice + 1}`))
            materiales.splice(indice,1)
            localStorage.setItem('materiales',JSON.stringify(materiales))
            console.log(`material ${material.nombre}eliminado`)
        })
    })
})


