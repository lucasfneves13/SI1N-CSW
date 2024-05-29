const email = document.getElementById("email")
const senha = document.getElementById("password")
console.log("oi")
document.getElementById("login").addEventListener("submit", function(){
    if(email.value === "adm@uvv.br" && senha.value === "ADM#123"){
        window.alert("Bem-vindo")
    }
    else{window.alert("Errado")}
})