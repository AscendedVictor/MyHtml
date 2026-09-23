let filmButton = document.getElementById("filmButton")  // button id aldik
let filmList = document.getElementById("filmList")  // film list aldik




 
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
