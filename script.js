// =========================
// LOGIN
// =========================

const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {
    loginBtn.addEventListener("click", function () {

        const username =
            document.querySelector('input[type="text"]').value;

        const password =
            document.querySelector('input[type="password"]').value;

        if (username === "" || password === "") {

            alert("Username dan Password wajib diisi!");

            return;
        }

        window.location.href = "dashboard.html";
    });
}


// =========================
// SIDEBAR ACTIVE
// =========================

const menuItems = document.querySelectorAll(".sidebar ul li");

menuItems.forEach(item => {

    item.addEventListener("click", function () {

        menuItems.forEach(menu => {
            menu.classList.remove("active");
        });

        this.classList.add("active");

    });

});


// =========================
// LOGOUT
// =========================

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", function () {

        const konfirmasi = confirm(
            "Apakah Anda yakin ingin logout?"
        );

        if (konfirmasi) {

            window.location.href = "index.html";

        }

    });

}