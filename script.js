let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.valume = 1
    text_speak.lang = "hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe() {
    let day = new Date();
    let hours = day.getHours();

    if (hours >= 0 && hours < 12) {
        speak("Good Morning Mam");
    }
    else if (hours >= 12 && hours < 16) {
        speak("Good Afternoon Mam");
    }
    else {
        speak("Good Evening Mam"); // Fixed the message for evening hours
    }
}


window.addEventListener('load', () => {
    wishMe();
});

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();

recognition.onresult = (event) => {
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    document.getElementById("output").innerText = transcript; // Error fix kiya
    takeCommand(transcript.toLowerCase())
};

btn = document.getElementById("btn"); // btn ko define kiya
btn.addEventListener("click", () => {
    recognition.start();
    btn.style.display = "none"
    voice.style.display = "block"
});
function takeCommand(message) {
    btn.style.display = "flex"
    voice.style.display = "none"
    if (message.includes("hello") || message.includes("hey")) {
        speak("hello ma'am, what can i help you?")
    }
    else if (message.includes("who are you")) {
        speak("i am virtual assistant ,created by saniya ma'am")
    }
    else if (message.includes("how are you")) {
        speak("i am doing well, thank you for asking ,and what about you?")
    }
    else if (message.includes("thank you")) {
        speak("you'r welcome")
    }
    else if (message.includes("college")) {
        speak("chutiya college, sala harami mc kahi  ka ,job nahi lagwata hain")
    }

    else if (message.includes("tumhara naam kya hain")) {
        speak("my name is sandy ,created by sandhya ma'am")
    }
    else if (message.includes("where are you from")) {
        speak("i am from virtual world")
    }
    else if (message.includes("kitna age hain tumhara")) {
        speak("0 years old")
    }
    else if (message.includes(" youtube")) {
        speak("opening youtube....")
        window.open("https://www.youtube.com")
    }
    else if (message.includes("google")) {
        speak("opening google....")
        window.open("https://www.google.co.in/")
    }
    else if (message.includes("open whatsapp")) {
        speak("opening whatsapp....")
        window.open("whatsapp://")
    }
    else if (message.includes("chatgtp")) {
        speak("opening chatgtp....")
        window.open(" https://chat.openai.com/")
    }
    else if (message.includes("chrome")) {
        speak("opening chrome....")
        window.open(" https://www.google.com/chrome/")
    }
    else if (message.includes("open w3schools")) {
        speak("opening w3schools....")
        window.open("https://www.w3schools.com")
    }
    else if (message.includes("open instagram")) {
        speak("opening instagram....")
        window.open("https://www.instagram.com")
    }
    else if (message.includes("open facebook")) {
        speak("opening facebook....")
        window.open("https://www.facebook.com")
    }
    else if (message.includes("girl image")) {
        speak("opening girls images....")
        window.open("https://www.pexels.com/search/girl/")
    }
    else if (message.includes("meesho")) {
        speak("opening meesho....")
        window.open("https://www.meesho.com/")
    }
    else if (message.includes("flipkart")) {
        speak("opening flipkart....")
        window.open("https://www.flipkart.com/")
    }
    else if (message.includes("amazon")) {
        speak("opening amazon....")
        window.open("https://www.amazon.in/")
    }
    else if (message.includes("myntra")) {
        speak("opening myntra....")
        window.open("https://www.myntra.com/login")
    }
    else if (message.includes("java compiler")) {
        speak("opening java compiler....")
        window.open("https://www.programiz.com/java-programming/online-compiler/")
    }
    else if (message.includes("python compiler")) {
        speak("opening python compiler....")
        window.open(" https://www.programiz.com/python-programming/online-compiler/")
    }
    else if (message.includes("c compiler")) {
        speak("opening c compiler....")
        window.open(" https://www.programiz.com/c-programming/online-compiler/")
    }
    else if (message.includes("photo background remover")) {
        speak("opening photo background remover....")
        window.open("https://www.remove.bg/")
    }
    else if (message.includes("gif background remover")) {
        speak("opening gif background remover....")
        window.open("https://onlinegiftools.com/remove-gif-background")
    }
    else if (message.includes("train ticket")) {
        speak("opening train ticket application....")
        window.open("https://www.confirmtkt.com")
    }
    else if (message.includes("irct")) {
        speak("opening irct train ticket application....")
        window.open(" https://www.irctc.co.in")
    }
    else if (message.includes("calculator")) {
        speak("opening whatsapp....")
        window.open("calculator://")
    }
    else if (message.includes("time")) {
        let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" })
        speak(time)
    }
    else if (message.includes("date")) {
        let date = new Date().toLocaleString(undefined, { day: "numeric", month: "short" })
        speak(date)
    }
    else {
        let finalText = "This is what I found on the internet regarding: " + (message.replace("sandy", "").replace("sand", "") || message);
        speak(finalText);
    
        // Ensure URL string interpolation is correct and message is sanitized for the URL
        window.open(`https://www.google.com/search?q=${encodeURIComponent(message.replace("saniya jamal", ""))}`, "_blank");
    }
}    