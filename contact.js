const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// Login
function Login(){
    var a = new Array();
    up1 = new Object();
    up2 = new Object();

    up1 = {
        name: "edehdivine042@gmail.com",
        password: btoa("nmasi2008")
    };

    up2 = {
        name: "edehcalister@gmail.com",
        password: btoa("cally1967")
    };

    var username = document.getElementById("uname").value;
    var password = document.getElementById("psw").value;

    localStorage.setItem("all_users", JSON.stringify(a));

    a = JSON.parse((localStorage.getItem("all_users")));
    a.push({name: username, password: password});
    localStorage.setItem("name", JSON.stringify(a));

    for (var i = 0; i < a.length; i++){
        var li = document.createElement("li");
        li.innerHTML = a[i]["name"];
        document.getElementById("listuser").appendChild(li);
    }
}
// function Login(){
//     const hash = Object.fromEntries(a.map(e => [e.name, e.password]))
//     var username = document.getElementById("uname").value;
//     var password = document.getElementById("psw").value;
//     for(let key of hash){
//         if (key[0] === username && key[1] === atob(password)){
//             alert("Login Successful");
//         }
//         else{
//             alert("Login Failed")
//         }
//     }
//   }
  