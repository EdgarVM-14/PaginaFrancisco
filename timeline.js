const frameworks =[
    {
        name: "Marzo del 2020",
        descripcion: "La pandemia obligó al cierre casi total de las escuelas en el mundo, afectando a más de 1,600 millones de estudiantes y 63 millones de docentes, con un impacto mayor en los países menos desarrollados.",
    },
    {
        name: "16 de marzo de 2020",
        descripcion: "Se publica en el Diario Oficial de la Federación el Acuerdo que establece la suspensión de clases a partir del 23 de marzo, afectando a 274 mil escuelas, 33 millones de estudiantes y 2 millones de docentes en todos los niveles educativos",
    },
    {
        name: "23 de marzo de 2020",
        descripcion: "Se ejecuta la suspensión de clases de manera inmediata, iniciando la transición hacia la educación a distancia y el traslado de la actividad educativa al entorno familiar",
    },
    {
        name: "22 de abril de 2020",
        descripcion: "Se impulsa el programa Aprende en Casa a través de plataformas digitales y televisión educativa, evidenciando las desigualdades en el acceso a la tecnología y recursos digitales",
    },
    {
        name: "Septiembre de 2021",
        descripcion: "Con la mejora en la situación epidemiológica y protocolos sanitarios establecidos, las escuelas comienzan a reabrir de forma escalonada, retomando la enseñanza presencial con medidas de seguridad",
    },
    {
        name: "Finales de 2022",
        descripcion: "Las medidas restrictivas se relajan gradualmente, marcando el fin de la etapa crítica de la pandemia y dando paso a una normalización progresiva en la educación y otros ámbitos sociales",
    }
]
function volverAlJuego() {
    window.location.href = "index.html"; // Regresa al juego
}
//html

var html = "";
frameworks.forEach(e => {
    html += `
        <div class='child'>
            <div class='content'>
            <br>            
                <h4>${e.name}</h4>
                <p>${e.descripcion}</p>
            </div>
        </div>
    `;
});


timeline.innerHTML = html

var _items = document.querySelectorAll(".child")
_items.forEach(element =>{
    if(element.offsetTop <300)
        element.classList.add("_show")
})

window.addEventListener("scroll", e=>{
var scroll = document.documentElement.scrollTop
_items.forEach(elem=>{
    if(elem.offsetTop - window.innerHeight/2 < scroll){
        elem.classList.add("_show")
        elem.classList.remove("_hide")
    }else{
        elem.classList.remove("_show")
        elem.classList.add("_hide")
    }
})
})