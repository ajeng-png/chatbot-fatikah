const responses = {
    "halo": "Halo juga, ada yang bisa kubantu? 😊",
    "kamu namanya siapa?": "Aku asisten Fatikah nii! 🤖✨",
    "kamu siapa?": "Aku asisten Fatikah nii! 🤖✨",
    "siapa namamu": "Aku asisten Fatikah nii! 🤖✨",
    "siapa kamu?": "Aku asisten Fatikah nii! 🤖✨",
    "fatikah siapa?": "Dia adalah manusia yang sangat cantik dan baik hati. 💖",
    "siapa fatikah?": "Dia adalah manusia yang sangat cantik dan baik hati. 💖",
    "siapa dia?": "Dia adalah manusia yang sangat cantik dan baik hati. 💖",
    "kamu bisa apa": "Aku bisa melakukan apapun, tapi terbatas limit, karena masih proses pengembangan. 🚀",
    "jelaskan tentang izzah": "Izzah adalah salah satu teman Fatikah yang baik hati, dan selalu membantu Fatikah. Izzah adalah teman Fatikah dari SD hingga saat ini. Fatikah nitip pesan buat Izzah: 'Semoga kita selalu berteman sampai kapanpun ya, sampai jannah-Nya, AAMIIN. Udah ya Izzah!' 💕",
    "jelaskan tentang arikah": "Arikah adalah salah satu teman Fatikah yang sangat lemah lembut dan baik hati. Hatinya itu murni sekali, tidak ragu membantu teman yang sedang kesusahan. Terus jadi manusia baik ya Arikah! Kata Fatikah buat kamu: 'Semoga kita selalu berteman sampai kapanpun ya, sampai Jannah-Nya, AAMIIN.' 😊💖",
    "terima kasih": "Sama-sama! Senang bisa membantu. 😊",
    "bye": "Sampai jumpa lagi! 👋"
};

function getResponse(userInput) {
    userInput = userInput.toLowerCase(); // Biar case insensitive
    for (let key in responses) {
        if (userInput.includes(key)) {
            return responses[key];
        }
    }
    return "Hmm... aku kurang paham. Bisa dijelaskan lagi? 🤔";
}

function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    if (userInput.trim() === "") return;

    const chatBox = document.getElementById("chatBox");
    chatBox.innerHTML += `<p><strong>Kamu:</strong> ${userInput}</p>`;
    chatBox.innerHTML += `<p><strong>Chatbot:</strong> ${getResponse(userInput)}</p>`;

    document.getElementById("userInput").value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

