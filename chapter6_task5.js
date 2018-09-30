    var input = "Javascript is awesome";
    for (var i = 0;i < input.length; i++){
    if (input === "a") {
        i = 4;
    } else if (input === "o") {
        i = 0;
    }else if (input === 'e') {
        i = 3;
    }else if (input === "i") {
i = 1;
    } else  {
    i = 'У вас нету данных символов';
    }
    };
    var output = input[i];
    console.log(output);