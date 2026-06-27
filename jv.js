const yesBtn = document.getElementById("forgiveBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

yesBtn.onclick = function(){
    message.innerHTML =
    "Yayyy ❤️ Anh biết em sẽ tha lỗi mà! Cảm ơn công chúa của anh 🥰";
};

noBtn.onmouseover = function(){
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
};

// Tạo trái tim rơi
function createHeart(){
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration =
        Math.random() * 3 + 2 + "s";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },5000);
}

setInterval(createHeart,300);
const text = "Anh xin lỗi... Anh thật sự không muốn làm em buồn ❤️";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

typeWriter();   
const yesBtn = document.getElementById("forgiveBtn");
const noBtn = document.getElementById("noBtn");

let size = 1;

noBtn.addEventListener("mouseover", () => {
    size += 0.2;
    yesBtn.style.transform = `scale(${size})`;
}); 
yesBtn.onclick = function(){
    message.innerHTML = "Yayyy ❤️ Em đã tha lỗi rồi!";
    createFireworks();
};

function createFireworks(){
    for(let i=0;i<100;i++){
        const heart = document.createElement("div");

        heart.innerHTML = "💖";
        heart.style.position = "absolute";
        heart.style.left = "50%";
        heart.style.top = "50%";
        heart.style.fontSize = "30px";
        heart.style.transition = "2s";

        document.body.appendChild(heart);

        setTimeout(()=>{
            heart.style.left =
                Math.random()*window.innerWidth+"px";

            heart.style.top =
                Math.random()*window.innerHeight+"px";

            heart.style.opacity = 0;
        },100);

        setTimeout(()=>{
            heart.remove();
        },2000);
    }
}
function createHeart() {
    const heart = document.createElement("div");

    heart.innerHTML = "❤️";
    heart.style.position = "absolute";
    heart.style.left = Math.random()*100 + "vw";
    heart.style.top = "-50px";
    heart.style.fontSize =
        Math.random()*20 + 20 + "px";

    document.body.appendChild(heart);

    let top = -50;

    const fall = setInterval(() => {
        top += 3;
        heart.style.top = top + "px";

        if(top > window.innerHeight){
            clearInterval(fall);
            heart.remove();
        }
    },30);
}

setInterval(createHeart, 300);