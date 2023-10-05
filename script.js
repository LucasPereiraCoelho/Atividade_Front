let resultados = document.querySelector(".resultados")
let form = document.querySelector(".form")
let filme = document.querySelector(".filme")
let card = document.querySelector(".card")

async function getAPI(filme){
    request = await fetch(`https://www.omdbapi.com/?s=${filme}&apikey=e6c43dc6`)
    data = await request.json()

    data.Search.forEach((elemento)=>{
        resultados.innerHTML += `
        <div class="card">
            <p>${elemento.Title}</p>
            <img src="${elemento.Poster}" alt="">  
        </div>
        
        `
    })


}

form.addEventListener('submit',function(e){
    e.preventDefault();
    resultados.innerHTML = ''
    getAPI(filme.value)
    filme.value = ''
})



