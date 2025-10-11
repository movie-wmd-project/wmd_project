let bg_title = document.getElementById("bg-title")
let image_bg =['../images/thelegent2.png','../images/thelord.jpg','../images/983569.jpg']
setInterval(() => {
let random = Math.floor(Math.random() * image_bg.length)
bg_title.src = image_bg[random]
}, 5000);
