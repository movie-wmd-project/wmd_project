let bg_title = document.getElementById("bg-title")
let image_bg =['../images/thelegent2.png','../images/thelord.jpg','../images/983569.jpg']
setInterval(() => {
let random = Math.floor(Math.random() * image_bg.length)
bg_title.src = image_bg[random]
}, 5000);




const data_c1=[
{
    name:"The Lord of the Rings",
    img:"../images/thelord.jpg",
    time:"2h 30min",
    yer:2012,
    reting:5,
    coalite:"4k",
    type:"Action"

},
{
    name:"The Lord of the Rings",
    img:"../images/thelord.jpg",
    time:"2h 30min",
    yer:2012,
    reting:5,
    coalite:"4k",
    type:"Action"

},
{
    name:"The Lord of the Rings",
    img:"../images/thelord.jpg",
    time:"2h 30min",
    yer:2012,
    reting:5,
    coalite:"4k",
    type:"Action"

},
{
    name:"The Lord of the Rings",
    img:"../images/thelord.jpg",
    time:"2h 30min",
    yer:2012,
    reting:5,
    coalite:"4k",
    type:"Action"

},
{
    name:"The Lord of the Rings",
    img:"../images/thelord.jpg",
    time:"2h 30min",
    yer:2012,
    reting:5,
    coalite:"4k",
    type:"Action"

},
{
    name:"The Lord of the Rings",
    img:"../images/thelord.jpg",
    time:"2h 30min",
    yer:2012,
    reting:5,
    coalite:"4k",
    type:"Action"

},
{
    name:"The Lord of the Rings",
    img:"../images/thelord.jpg",
    time:"2h 30min",
    yer:2012,
    reting:5,
    coalite:"4k",
    type:"Action"

},
]


const data_c2=[
{
    name:"The Lord of the Rings",
    img:"../images/thelord.jpg",
    time:"2h 30min",
    yer:2012,
    reting:2,
    coalite:"4k",
    type:"Action"

},
{
    name:"The Lord of the Rings",
    img:"../images/thelord.jpg",
    time:"2h 30min",
    yer:2012,
    reting:2,
    coalite:"4k",
    type:"Action"

},
{
    name:"The Lord of the Rings",
    img:"../images/thelord.jpg",
    time:"2h 30min",
    yer:2012,
    reting:2,
    coalite:"4k",
    type:"Action"

},
{
    name:"The Lord of the Rings",
    img:"../images/thelord.jpg",
    time:"2h 30min",
    yer:2012,
    reting:2,
    coalite:"4k",
    type:"Action"

},
{
    name:"The Lord of the Rings",
    img:"../images/thelord.jpg",
    time:"2h 30min",
    yer:2012,
    reting:2,
    coalite:"4k",
    type:"Action"

},
{
    name:"The Lord of the Rings",
    img:"../images/thelord.jpg",
    time:"2h 30min",
    yer:2012,
    reting:2,
    coalite:"4k",
    type:"Action"

},
{
    name:"The Lord of the Rings",
    img:"../images/thelord.jpg",
    time:"2h 30min",
    yer:2012,
    reting:2,
    coalite:"4k",
    type:"Action"

},
]


const data_c3=[
{
    name:"The Lord of the Rings",
    img:"../images/thelord.jpg",
    time:"2h 30min",
    yer:2012,
    reting:2,
    coalite:"4k",
    type:"Action"

},
{
    name:"The Lord of the Rings",
    img:"../images/thelord.jpg",
    time:"2h 30min",
    yer:2012,
    reting:2,
    coalite:"4k",
    type:"Action"

},
{
    name:"The Lord of the Rings",
    img:"../images/thelord.jpg",
    time:"2h 30min",
    yer:2012,
    reting:2,
    coalite:"4k",
    type:"Action"

},
{
    name:"The Lord of the Rings",
    img:"../images/thelord.jpg",
    time:"2h 30min",
    yer:2012,
    reting:2,
    coalite:"4k",
    type:"Action"

},
{
    name:"The Lord of the Rings",
    img:"../images/thelord.jpg",
    time:"2h 30min",
    yer:2012,
    reting:2,
    coalite:"4k",
    type:"Action"

},
{
    name:"The Lord of the Rings",
    img:"../images/thelord.jpg",
    time:"2h 30min",
    yer:2012,
    reting:2,
    coalite:"4k",
    type:"Action"

},
{
    name:"The Lord of the Rings",
    img:"../images/thelord.jpg",
    time:"2h 30min",
    yer:2012,
    reting:2,
    coalite:"4k",
    type:"Action"

},
]

let c1 = document.getElementById("c1")
data_c1.map((movie)=>{
    let reting_html =[]
    for (let reting = 0; reting < movie.reting; reting++) {
       reting_html.push('<i class="fa-regular fa-star"></i>') 
    }
    c1.innerHTML +=`
    
     <div class="box-movie-title-contener">
             <img src="../images/thelord.jpg" alt="">
             <div class="info-movie">
 
                 <h1 class="name-mobie">${movie.name}</h1> <br>
                 <button id="play-m" class="play-m"> <i  class="fa-solid fa-circle-play"></i></button>
                 <p class="minet"><i class="fa-solid fa-clock"></i>${movie.time}</p>
                 <p class="minet"><i class="fa-solid fa-calendar"></i> ${movie.yer}</p>
                 <p class="minet"><i class="fa-solid fa-film"></i> ${movie.type}</pp>
                 <p class="Riteng">${reting_html.join('')}</p>
             </div>
             <div class="shadow"></div>
    </div>



    `

})
let view=document.getElementById("play-m")
view.addEventListener("click",function(e){
    console.log(e.target);
                  
})


let c2 = document.getElementById("c2")
data_c2.map((movie)=>{
    let reting_html =[]
    for (let reting = 0; reting < movie.reting; reting++) {
       reting_html.push('<i class="fa-regular fa-star"></i>') 
    }
    c2.innerHTML +=`
    
     <div class="box-movie-title-contener">
             <img src="../images/thelord.jpg" alt="">
             <div class="info-movie">
 
                 <h1 class="name-mobie">${movie.name}</h1> <br>
                 <button class="play-m"> <a href="../ViewMovie/viewMoie.html"><i class="fa-solid fa-circle-play"></i></a></button>
                 <p class="minet"><i class="fa-solid fa-clock"></i>${movie.time}</p>
                 <p class="minet"><i class="fa-solid fa-calendar"></i> ${movie.yer}</p>
                 <p class="minet"><i class="fa-solid fa-film"></i> ${movie.type}</pp>
                 <p class="Riteng">${reting_html.join('')}</p>
             </div>
             <div class="shadow"></div>
    </div>



    `

})

let c3 = document.getElementById("c3")
data_c3.map((movie)=>{
    let reting_html =[]
    for (let reting = 0; reting < movie.reting; reting++) {
       reting_html.push('<i class="fa-regular fa-star"></i>') 
    }
    c3.innerHTML +=`
    
     <div class="box-movie-title-contener">
             <img src="../images/thelord.jpg" alt="">
             <div class="info-movie">
 
                 <h1 class="name-mobie">${movie.name}</h1> <br>
                 <button class="play-m"> <a href="../ViewMovie/viewMoie.html"><i class="fa-solid fa-circle-play"></i></a></button>
                 <p class="minet"><i class="fa-solid fa-clock"></i>${movie.time}</p>
                 <p class="minet"><i class="fa-solid fa-calendar"></i> ${movie.yer}</p>
                 <p class="minet"><i class="fa-solid fa-film"></i> ${movie.type}</pp>
                 <p class="Riteng">${reting_html.join('')}</p>
             </div>
             <div class="shadow"></div>
    </div>



    `

})

