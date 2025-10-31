let bg_title = document.getElementById("bg-title")
let image_bg =['../images/thelegent2.png','../images/thelord.jpg','../images/983569.jpg']
setInterval(() => {
let random = Math.floor(Math.random() * image_bg.length)
bg_title.src = image_bg[random]
}, 5000);


let open_menu = document.getElementById("open-menu")
let menu_a = document.getElementById("menu-a")
open_menu.addEventListener("click",function(){
  menu_a.style.display="block"
})

let b_m_c = document.getElementById("b-m-c")
b_m_c.addEventListener("click",function(){
menu_a.style.display="none"
console.log(1);
  
})



const data_c1 = [
  {
    name: "One Battle After Another",
    img: "one_battle_after_another.jpg",
    time: "2h 41min",
    yer: 2025,
    reting: 5,
    coalite: "4k",
    type: "Action/Thriller"
  },
  {
    name: "F1: The Movie",
    img: "f1_the_movie2025.jpg",
    time: "2h 35min",
    yer: 2025,
    reting: 4.5,
    coalite: "4k",
    type: "Sports/Action"
  },
  {
    name: "Sinners",
    img: "sinners2025.jpg",
    time: "2h 17min",
    yer: 2025,
    reting: 5,
    coalite: "4k",
    type: "Horror/Drama"
  },
  {
    name: "Diablo",
    img: "diablo2025.jpg",
    time: "1h 55min",
    yer: 2025,
    reting: 4.5,
    coalite: "4k",
    type: "Martial Arts/Action"
  },
  {
    name: "Lilo & Stitch",
    img: "lilo_stitch2025.jpg",
    time: "2h 00min",
    yer: 2025,
    reting: 4.5,
    coalite: "4k",
    type: "Family/Adventure"
  },
  {
    name: "Mission: Impossible – The Final Reckoning",
    img: "mission_impossible_final_reckoning.jpg",
    time: "2h 49min",
    yer: 2025,
    reting: 4.5,
    coalite: "4k",
    type: "Action/Spy"
  },
  {
    name: "The Fantastic Four: First Steps",
    img: "fantastic_four_first_steps.jpg",
    time: "1h 54min",
    yer: 2025,
    reting: 4,
    coalite: "4k",
    type: "Superhero"
  },
  {
    name: "How to Train Your Dragon (2025)",
    img: "how_to_train_your_dragon2025.jpg",
    time: "2h 04min",
    yer: 2025,
    reting: 4,
    coalite: "4k",
    type: "Adventure"
  },
  {
    name: "Oppenheimer",
    img: "Oppenheimer.jpg",
    time: "1h 55min",
    yer: 2025,
    reting: 3.5,
    coalite: "4k",
    type: "Horror/Thriller"
  },
  
  {
    name: "The Minecraft Movie",
    img: "the Minecraft Movie.jpg",
    time: "2h 09min",
    yer: 2025,
    reting: 3.5,
    coalite: "4k",
    type: "Animation/Family"
  }
];



const data_c2 = [
  {
    name: "Ne Zha 2",
    img: "Ne Zha 2.jpg", 
    time: "4", 
    yer: 2025, 
    reting: 4, 
    coalite: "4k", 
    type: "Animation/Fantasy"
  },
  {
    name: "Lilo & Stitch",
    img: "Lilo & Stitch.jpg", 
    time: "4", 
    yer: 2025, 
    reting: 4, 
    coalite: "4k", 
    type: "Action/Adventure"
  },
  {
    name: "The Masck",
    img: "themask.jpg", 
    time: "4", 
    yer: 2013, 
    reting: 4, 
    coalite: "4k", 
    type: "Animation/Family"
  },
  {
    name: "Jurassic World Rebirth",
    img: "Jurassic World Rebirth.jpg", 
    time: "4", 
    yer: 2025, 
    reting: 4, 
    coalite: "4k", 
    type: "Sci‑Fi/Adventure"
  },
  {
    name: "How to Train Your Dragon (2025)",
    img: "How to Train Your Dragon (2025).jpg", 
    time: "4", 
    yer: 2025, 
    reting: 4, 
    coalite: "4k", 
    type: "Adventure"
  },

  {
    name: "Superman",
    img: "Superman.jpg", 
    time: "4", 
    yer: 2025, 
    reting: 4, 
    coalite: "4k", 
    type: "Superhero/Action"
  }


];



const data_c3 = [
  {
    name: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
    img: "The Chronicles of Narni.jpg",
    time: "2h 23min",
    yer: 2005,
    reting: 4,
    coalite: "4k",
    type: "Adventure"
  },
  {
    name: "Willow",
    img: "Willow.jpg",
    time: "2h 6min",
    yer: 1988,
    reting: 3,
    coalite: "4k",
    type: "Adventure"
  },
  {
    name: "Legend",
    img: "Legend.jpg",
    time: "1h 29min",
    yer: 1985,
    reting: 3,
    coalite: "HD",
    type: "Fantasy"
  },
  {
    name: "Excalibur",
    img: "Excalibur.webp",
    time: "2h 21min",
    yer: 1981,
    reting: 3,
    coalite: "HD",
    type: "Medieval Fantasy"
  },
  {
    name: "Stardust",
    img: "Stardust.webp",
    time: "2h 8min",
    yer: 2007,
    reting: 4,
    coalite: "4k",
    type: "Romance"
  },
  
];


let c1 = document.getElementById("c1")
data_c1.map((movie)=>{
    let reting_html =[]
    for (let reting = 0; reting < movie.reting; reting++) {
       reting_html.push('<i class="fa-regular fa-star"></i>') 
    }
    c1.innerHTML +=`
    
     <div class="box-movie-title-contener">
            <i id="sv" class="fa-solid fa-bookmark"></i>
             <img src="../images/${movie.img}" alt="">
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



let c2 = document.getElementById("c2")
data_c2.map((movie)=>{
    let reting_html =[]
    for (let reting = 0; reting < movie.reting; reting++) {
       reting_html.push('<i class="fa-regular fa-star"></i>') 
    }
   c2.innerHTML+=`
    
     <div class="box-movie-title-contener">
            <i id="sv" class="fa-solid fa-bookmark"></i>
             <img src="../images/${movie.img}" alt="">
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
                 <i id="sv" class="fa-solid fa-bookmark"></i>
             <img src="../images/${movie.img}" alt="">
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

//save favorate list
let sv = document.getElementById("sv")
let Favorate = document.getElementById("Favorate")
sv.addEventListener("click",function(){   
localStorage.setItem("vaforate","saved")
sv.style.fontSize="40px"
Favorate.style.color="red"

})
if(localStorage.getItem("vaforate") === "saved"){
    Favorate.style.color="red"
}





