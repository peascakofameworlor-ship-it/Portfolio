const year = document.querySelector("#year");
year.textContent = new Date().getFullYear();

//2. Mobile menu: show and hide the links
const menuButton = document.querySelector("#menu-button");
const nav = document.querySelector("#site-nav");

menuButton.addEventListener("click", function(){
    nav.classList.toggle("open");
    if (nav.classList.contains("open")){
        menuButton.textContent = "Close";
    }else{
        menuButton.textContent = "Menu";
    }
});

//3. Dark mode
const themeButton = document.querySelector("#theme-button");

if(localStorage.getItem("theme")==="dark"){
    document.body.classList.add("dark");
    themeButton.textContent = "Light mode";
}

themeButton.addEventListener("click", function(){
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")){
        themeButton.textContent = "Light mode";
        localStorage.setItem("theme", "dark");
    }else {
        themeButton.textContent = "Dark mode";
        localStorage.setItem("theme", "light")
    }
});

// 4. contact-form: friendly check
const form = document.querySelector(".contact-form");
const thanks = document.querySelector("#thanks");

function showerror(id, message){
    document.querySelector(id).textContent = message;
}

form.addEventListener("submit", function(event){
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();
    let ok = true;

    showerror("#name-error", "");
    showerror("#email-error", "");
    showerror("#message-error", "");
    thanks.hidden = true;

    if (name === ""){
        showerror("#name-error", "Please type your name.");
        ok = false;
    }
    if (email.includes("@")===false){
        showerror("#email-error", "Your email needs an @ sign.");
        ok = false;
    }
    if (message.length<10){
        showerror("#message-error", "Please write at least 10 characters.");
        ok = false;
    }

    if (ok){
        thanks.textContent = `Thanks, ${name}! Your message looks good.`;
        thanks.hidden = false;
        form.requestFullscreen();
    }
});

// changing Eyebrow to greeting 
const greeting = document.querySelector("#greeting");
const hours = new Date().getHours();

if (hours >= 5 && hours <12 ){ 
    greeting.textContent ="Good Morning";
    document.body.style.backgroundColor = "lightblue";
}
else if(hours >= 12 && hours < 17){
    greeting.textContent = "Good Afternoon";
    
}
else if(hours >= 17 && hours < 21){
    greeting.textContent = "Good Evening";
    document.body.style.backgroundColor = "purple";
}
else {
    greeting.textContent = "Good Night";
    document.body.style.backgroundColor = "";
}