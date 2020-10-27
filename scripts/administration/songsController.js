function init() {
    var contenido = document.querySelector('#CuerpoTabla')
    contenido.innerHTML = ""
    fetch('http://localhost:3000/songs')
        .then(response => response.json())
        .catch(error => {
            console.log(error)
        })
        .then(res => {
            //Recorriendo nuestro res e incrementando el innerHTML de nuestro elemento
            //Identificado como contenido
            for (var i in res) {
                console.log(res[i])
                contenido.innerHTML +=
                    `<tr>
            <th>${res[i].name}</th>
            <th>${res[i].artist}</th>
            <th>${res[i].album}</th>
            <th>${res[i].image}</th>
            <th>${res[i].date}</th>
            <th>${res[i].link_spotify}</th>
            <th>${res[i].link_youtube}</th>
            </tr>`
            }
        })
}

init();