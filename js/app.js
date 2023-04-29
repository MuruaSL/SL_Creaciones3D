let elemento
elemento = document
console.log(elemento)

// definicion de la bd de productos [string de objetos]
let productos =[
    {id:1 , img:"../img/tienda/bigben.png",
            titulo: "Big Ben" , 
            descripcion:"Agrega un toque de la arquitectura icónica de Londres a tu hogar con nuestra detallada pieza" , 
            precio:1000 },

    {id:2 , img:"../img/tienda/eifelcomplex.png",
            titulo: "Torre Eifel Detallada", 
            descripcion:"Celebra la belleza y el encanto de París con nuestra Torre Eiffel de detalles precisos y elegantes" , 
            precio:1000 },

    {id:3 , img:"../img/tienda/cristoredentor.png",
            titulo: "Cristo Redentor", 
            descripcion:"Añade un toque de la cultura brasileña a tu hogar con nuestra estatua del Cristo Redentor en 3D" , 
            precio:1000 },

    {id:4 , img:"../img/tienda/nefertitisNSFW.png",
            titulo: "Nefertiti (NSFW)", 
            descripcion:"Sumérgete en la belleza de la cultura egipcia con nuestra estatuilla de la reina Nefertiti ¡Perfecta como pieza de colección!" , 
            precio:1000 },

    {id:5 , img:"../img/tienda/camellovonoroid.png",
            titulo: "Camello (Voronoi)", 
            descripcion:"Añade una dimensión moderna y vanguardista a tu decoración con nuestra estatuilla de camello con diseño vonoroi." , 
            precio:1000 },

    {id:6 , img:"../img/tienda/esfigie.png",
            titulo: "Esfinge de Guiza", 
            descripcion:"Déjate seducir por la enigmática presencia de la Gran Esfinge de Guiza con nuestra estatuilla 3D" , 
            precio:1000 },

    {id:7 , img:"../img/tienda/mandalorian.png",
            titulo: "Mandalorian", 
            descripcion:"Añade un toque de la galaxia muy, muy lejana a tu hogar con nuestra estatua del Mandaloriano" , 
            precio:1000 },

    {id:8 , img:"../img/tienda/halconmile.png",
            titulo: "Halcon milenario", 
            descripcion:"Trae un poco de la emoción y la aventura de Star Wars a tu hogar con nuestra réplica del Halcón Milenario " , 
            precio:1000 },

    {id:9 , img:"../img/tienda/yodaBbPintado.png",
            titulo: "Baby Yoda", 
            descripcion:"Trae la ternura del personaje más querido de Star Wars a tu hogar con nuestra réplica de Baby Yoda" , 
            precio:1000 },
    {id:10 , img:"../img/tienda/calaberaLapicero.png",
            titulo: "Craneo lapicero" , 
            descripcion:"Lapicero calavera detallado. Úsalo en la oficina, la escuela o en casa." , 
            precio:1540}
]

const seccion_productos = document.querySelector("#section_shop")

for(let producto of productos){
    let contenedor = document.createElement("div")
    contenedor.innerHTML=
    `
    <article class="container card   separador-tarjeta">
        <div class="card-border-top">
        </div>
        <img src="${producto.img}" class="card-img-top " alt="${producto.titulo}">
        <span> ${producto.titulo} </span>
        <p class="job"> ${producto.descripcion}</p>
        <button> Agregar al carrito $${producto.precio}</button>
    </article>
    `
    seccion_productos.appendChild(contenedor)
}


