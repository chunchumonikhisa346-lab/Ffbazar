// Auto Slider

let slideIndex = 0;

const slides = [
"images/slider1.jpg",
"images/slider2.jpg",
"images/slider3.jpg"
];

function autoSlider(){

const slider = document.getElementById("slider");

if(slider){

slider.src = slides[slideIndex];

slideIndex++;

if(slideIndex >= slides.length){

slideIndex = 0;

}

}

}

setInterval(autoSlider,3000);

window.onload = autoSlider;


// Login Check

function checkLogin(){

const user = localStorage.getItem("ffbazar_user");

if(user){

const loginBtn = document.getElementById("loginBtn");

if(loginBtn){

loginBtn.innerHTML="Profile";
loginBtn.href="profile.html";

}

}

}

checkLogin();


// Login

function login(email){

localStorage.setItem("ffbazar_user",email);

window.location="index.html";

}


// Logout

function logout(){

localStorage.removeItem("ffbazar_user");

window.location="login.html";

}


// Card Click

function openProduct(link){

window.location=link;

}


// Notice

const notice = document.getElementById("notice");

if(notice){

const text=[

"🔥 Welcome To FF Bazar",

"💎 Instant Top Up",

"❤️ 24/7 Support"

];

let n=0;

setInterval(()=>{

notice.innerHTML=text[n];

n++;

if(n>=text.length){

n=0;

}

},3000);

}
