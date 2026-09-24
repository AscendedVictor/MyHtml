let filmButton = document.getElementById("filmButton")  // button id aldik
let SilmeButton = document.getElementById("Film Button")
let filmList = document.getElementById("filmList")  // film list aldik
let filmler = JSON.parse(localStorage.getItem("filmler")) || []


filmler.forEach(function(film) {
    filmList.innerHTML += `
    <div class="film-card">
        <img src="${film.poster}" alt="Film">
        <h3>${film.title}</h3>
        <p>${film.yildiz}</p>
        <p>${film.year}</p>
        <p>${film.rating}</p>
    </div>
    `
})

    




    







 

    
 
filmButton.addEventListener("click", function () { // tiklayinca fonkisoyn eklicez
    let filmName = prompt("Film adini girin") //kullanicidan yazi aldik
    let puanalma = prompt("Puani giriniz")
    let yildiz = ""

    if (puanalma == 1)
        yildiz = "★☆☆☆☆"

    else if (puanalma == 2)
        yildiz = "★★☆☆☆"
    else if (puanalma == 3)
        yildiz = "★★★☆☆"
    else if (puanalma == 4)
        yildiz = "★★★★☆"
    else if (puanalma == 5)
        yildiz = "★★★★★"
    else yildiz = "☆☆☆☆☆"


fetch(`https://www.omdbapi.com/?t=${filmName}&apikey=5dfe2bbf`)
    .then(Response => Response.json())
    .then(data => {
        console.log(data.Title)
        filmler.push({
            title : data.Title,
            poster : data.Poster,
            year : data.Year,
            rating : data.imdbRating,
            yildiz:yildiz

            
        })
        
        
       localStorage.setItem("filmler",JSON.stringify(filmler))
    



filmList.innerHTML += `  
    <div class="film-card">
    <img src = "${data.Poster}" alt="Film"> 

        <h3>${data.Title}</h3>
        <p>${yildiz}</p>
        <p>${data.Year}</p>
        <p>${data.imdbRating}</p>

        
    </div>
    
`;
        
    })

    
    // bu aldigimiz listi birlitlen carda eklicez

});
