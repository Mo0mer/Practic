let name = window.prompt("Впиши имя, путник!", "Нам все равно)");
window.alert("Твое имя - " + name);
let result = window.confirm("Хочешь еще?");
if (result == true){
    if (window.confirm("Не надоело?") == false){
        name = window.prompt("Впиши имя, путник!", "Нам все равно)");
        window.alert("Твое имя - " + name);
    }
    else{
        window.alert("Ну и гуляй");
    }
}
else{
    window.alert("Ну и гуляй");
}

