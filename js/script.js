// ========== WELCOME SPEECH ==========
document.addEventListener("DOMContentLoaded", function () {
    const name = prompt("Masukkan nama Anda:");
    const welcomeSpeech = document.getElementById("welcome-speech");

    if (name && name.trim() !== "") {
        welcomeSpeech.textContent = `Hi ${name}, Welcome To Website`;
    } else {
        welcomeSpeech.textContent = `Hi Guest, Welcome To Website`;
    }

    // tampilkan waktu realtime
    updateTime();
    setInterval(updateTime, 1000);
});

// ========== UPDATE REALTIME CLOCK ==========
function updateTime() {
    const now = new Date();
    document.getElementById("currentTime").textContent = now.toString();
}

// ========== HANDLE FORM SUBMISSION ==========
document.getElementById("submitBtn").addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const message = document.getElementById("message").value;

    const genderInputs = document.getElementsByName("gender");
    let gender = "";
    for (let g of genderInputs) {
        if (g.checked) {
            gender = g.value;
        }
    }

    // Validasi sederhana
    if (!name || !dob || !gender || !message) {
        alert("Harap isi semua field!");
        return;
    }

    // Tampilkan ke output panel
    document.getElementById("outName").textContent = name;
    document.getElementById("outDob").textContent = dob;
    document.getElementById("outGender").textContent = gender;
    document.getElementById("outMessage").textContent = message;
});
