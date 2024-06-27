function inp(){
    let passIn = document.getElementById("password");
    let passVal = passIn.value;
    let curPass = "1445cow"

    if (passVal === curPass){
        alert("Пароль верный")
    }
    else{
        alert("Пароль неверный")
    }
}