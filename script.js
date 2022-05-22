

knopka1 = document.querySelector("#knopka1");
knopka2 = document.querySelector("#knopka2");
knopka3 = document.querySelector("#knopka3");
kvadrat = document.querySelector("#kvadrat");
console.dir(kvadrat);

// Добавить кнопку, которая будет:

// Менять размер квадрата.
// Размер сделай: ширина — 100px и высота — 100px

// Добавь отступ слева от квадрата. Отступ — 100px

knopka1.onclick = function() {
    
   
        kvadrat.style.width = "100px";
        kvadrat.style.height = "100px";
        kvadrat.style.marginLeft = "100px";

    
}

// Добавь вторую кнопку, которая будет менять цвет фигуры:

// Добавлять отступ сверху. Отступ — 100px

// Сделай так чтобы при каждом клике на кнопку менялся цвет фигуры . То синий то желтый
knopka2.onclick = function () {
    
    if (kvadrat.style.background == "" || kvadrat.style.background == "blue") {
    kvadrat.style.background = "yellow";
} else {
    kvadrat.style.background = "blue";
    }

    if (kvadrat.style.marginTop == "") {
        kvadrat.style.marginTop = "100px";
    } else {
        kvadrat.style.marginTop = "";
}
}

// Добавить третью кнопку, которая будет: менять форму фигуры

// Если цвета фигуры синий, то она превращается в квадрат.

// Если цвета фигуры желтый, то она превращается в круг.
knopka3.onclick = function () {
    
        if (kvadrat.style.background == "blue") {
        kvadrat.style.borderRadius = 0;
    } else {
        kvadrat.style.borderRadius = "50%";
}

}