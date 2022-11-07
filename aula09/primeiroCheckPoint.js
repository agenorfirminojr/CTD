function aquecercomida(opcao, tempo) {
    let tempoIdeal;
    let comida;
    switch (opcao) {
        case 1:
            tempoIdeal = 10;
            comida = '🍿 Pipoca';
            break;
        case 2:
            tempoIdeal = 8;
            comida = '🍝 Macarrão';
            break;
        case 3:
            tempoIdeal = 15;
            comida = '🍖 Carne';
            break;
        case 4:
            tempoIdeal = 12;
            comida = 'Feijão';
            break;
        case 5:
            tempoIdeal = 8;
            comida = '🧁 Brigadeiro';
            break;
        default:
            tempoIdeal = 0;
            comida = '⚠ Prato inexistente!';
    }


    if (tempo > (tempoIdeal * 2)) {
        console.log('O prato', comida, 'queimou!!!!♨');
    }
    else if (tempo < tempoIdeal) {
        console.log('Tempo insuficiente para fazer', comida);
    }
    else if (tempo > (tempoIdeal * 3)) {
        console.log('💣KABUMM!!!!');
    }
    else if (tempo == tempoIdeal)
    {
        console.log('O prato', comida, 'está pronto! Bom apetite!😋');
    }
}


aquecercomida(1, 10);
aquecercomida(1, 30);
aquecercomida(1, 3);
aquecercomida(2, 8);
aquecercomida(2, 17);
aquecercomida(2, 6);
aquecercomida(3, 15);
aquecercomida(3, 50);
aquecercomida(3, 10);
aquecercomida(4, 12);
aquecercomida(4, 25);
aquecercomida(4, 10);
aquecercomida(5, 8);
aquecercomida(5, 17);
aquecercomida(5, 5);