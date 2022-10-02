let pelis = {}

fetch('https://japceibal.github.io/japflix_api/movies-data.json')
.then(resp => resp.json())
.then(data => {
    console.log(data)
    pelis = data
})

function setProdID(id){
    pelis.forEach(element => {
        if (element.id == id){
            document.getElementById("offcanvasTopLabel").innerHTML = element.title
            document.getElementById("over_view").innerHTML = element.overview
        }
    })
}

function buscar(){
    //Borramos lo que tiene en la lista previamente
    document.getElementById("lista").innerHTML = ""
    //Verifico en la consola si el valor ingresado en el input lo toma correctamente
    console.log(document.getElementById("inputBuscar").value)
    let elemento
    let html = ""
    //Recorro las 101 pelis
    pelis.forEach(element => {
        //Si el título de la peli incluye el valor ingresado en el input debo añadir la información de esa peli a mi lista
        if(element.title.includes(document.getElementById("inputBuscar").value)){
            console.log(element.title);
            html =  `<div onclick="setProdID(${element.id})" class="list-group-item list-group-item-action" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                        <div class="row">
                            <p>${element.title}</p>
                        </div>
                    </div>`
            document.getElementById("lista").innerHTML += html
        //Si el título de la peli no incluye valor ingresado en el input procedo a verificar si los generos de la peli coinciden con lo ingresado en el input
        }else{
            //En la variable elemento me guardo toda la información de la peli
            elemento = element
            //Recorro todos los generos de la peli
            element.genres.forEach(element => {
                //Comparo para verificar si coincide con la búsqueda y si coincide la añado a la lista
                if(element.name.includes(document.getElementById("inputBuscar").value)){
                    console.log(elemento.title);
                    html =  `<div onclick="setProdID(${elemento.id})" class="list-group-item list-group-item-action" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                                <div class="row">
                                    <p>${elemento.title}</p>
                                </div>
                            </div>`
                    document.getElementById("lista").innerHTML += html

                }
            } )
        }
    });
}