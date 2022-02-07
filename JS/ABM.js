//A futuro la posibilidad de cargar productos es si tiene un permiso especial.

let materiales = []


//Carga de Material para la venta 
class Material{
    constructor(nombre, fabricante, stock, precio ){
        this.nombre = nombre
        this.fabricante = fabricante
        this.stock = stock
        this.precio = precio
    }
}

let botonCargar = document.getElementById('cargarProductoButton')
let divRevestimientos = document.getElementById('materiales')
let productsForm = document.getElementById('productsForm')


productsForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    let nombre = document.getElementById('nombre').value
    let fabricante = document.getElementById('fabricante').value
    let stock = document.getElementById('stock').value
    let precio = document.getElementById('precio').value

    //console.log(nombre,lugarColocacion, acabado,fabricante,medida,uso,`$ ${precio}`)
    const materialForm= new Material (nombre, fabricante, stock, precio )
    materiales.push(materialForm)
    productsForm.reset()
    localStorage.setItem ('materiales',JSON.stringify(materiales))
})


botonCargar.addEventListener('click',(e)=>{
   
    e.preventDefault()
    //window.location.href='index.html'
    let detallesParseados= JSON.parse(localStorage.getItem('materiales'))
    divRevestimientos.innerHTML = ""
    detallesParseados.forEach((material, indice)=> {
            divRevestimientos.innerHTML +=`
            <div class="card border-primary mb-3" id="tipo${indice + 1}" style="max-width: 20rem;">
                <div class="card-body">
                <div class="card-body">
                    <p class="card-text">${material.fabricante}</p>
                    <h5 class="card-title">${material.nombre}</h5>
                    <h6 class="card-text">$${material.precio}</h6>
                    <p class="card-text">stock:  ${material.stock}</p>
                        <button type="button" class="btn btn-danger" id="boton${indice+1}">Eliminar</button>
                        <button type="button" class="btn btn-danger" id="botonPublicar${indice+1}">Publicar</button>
                        
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


