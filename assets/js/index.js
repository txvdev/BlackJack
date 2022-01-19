// document.addEventListener('DOMContentLoaded', () => {
    
//     const btnPedir = document.getElementById('btnPedir');
//     const jugadorCartas = document.getElementById('jugador-cartas');
    
//     // Variables
//     let deck = [];
//     const tipos = ['C', 'D', 'H', 'S'];
//     const special = ['A', 'J', 'Q', 'K']

//     // Crea la Baraja
//     const crearDeck = () => {

//         for( let i = 2; i <= 10; i++) {
//             for (let tipo of tipos){
//                 deck.push(i + tipo);
//             } 
//         }

//         for (let tipo of tipos) {
//             for (let esp of special) {
//                 deck.push(esp + tipo)
//             }
//         }

//         //console.log(deck);
//         deck = _.shuffle(deck);
//         console.log(`Baraja Barajeada ${deck}`);
//         return deck;
//     }

//     // Regresa una Carta
//     const pedirCarta = () => {
//         if (deck.length === 0) {
//             throw 'No hay mas cartas en el Mazo'
//         }

//         const lastCard = deck.pop();
//         console.log(deck);
//         console.log(lastCard);
//         return lastCard;
//     }

//     const cardValue = (lastCard) => {
//         const valor = lastCard.substring(0, lastCard.length - 1);
//         let puntos = 0;

//         if (isNaN(valor)) {
//             puntos = ( valor === 'A' ) ? 11 : 10;
//         } else {
//             puntos = parseInt(valor);
//         }

//         console.log(puntos);
//     }

//     crearDeck()
//     pedirCarta();
//     cardValue('Kd');
    
// })

document.addEventListener('DOMContentLoaded', () => {
    //VARIABLES
    let deck = [];
    const suits = ['C', 'D', 'H', 'S'];
    const figures = ['A', 'J', 'Q', 'K'];
    let playerPoints = 0;
    let pcPoints = 0;

    //REFERENCIAS HTML
    const btnPedir = document.getElementById('btnPedir');
    const btnDetener = document.getElementById('btnDetener');
    const btnNuevo = document.getElementById('btnNuevo');
    const score = document.querySelectorAll('small');
    const cartasJugador = document.getElementById('jugador-cartas');
    const cartasPC = document.getElementById('computadora-cartas');
    //Crea una nueva Baraja
    const createDeck = () => {

        for( let i = 2; i <= 10; i++){
            for (suit of suits) {
                deck.push(i + suit);
            }
        };
        for (figure of figures){
            for (suit of suits){
                deck.push(figure + suit);
            }
        }

        console.log(`Baraja completa: ${deck}`);
        deck = _.shuffle(deck);
        console.log(`Baraja Barajeada ${deck}`);
        return deck;
    };

    //Función para pedir carta
    const pedirCarta = () => {

        if ( deck.length === 0) {
            throw 'No quedan mas cartas en el Mazo'
        }

        let lastCard = deck.pop();

        //console.log(lastCard);
        return lastCard;
    }
    
    //Función Valor de una carta
    const cardValue = (card) => {
        let value = card.slice(0, card.length - 1);
        let points = 0;

        if (isNaN(value)) {
            value === 'A' ? points = 11 : points = 10
        } else {
            points = parseInt(value);
        }
        
        console.log(`carta sacada: ${points}`);
        return points;
    }

    //TURNO PC
    const playerPC = (puntosMinimos) => {
        do {
            const card = pedirCarta();
            console.log(`card = ${card}`)
            pcPoints = pcPoints + cardValue( card );
            score[1].innerHTML = pcPoints
            
            const imgCard = document.createElement('img');
            imgCard.src = `assets/cartas/${card}.png`
            imgCard.classList.add('carta')
            cartasPC.appendChild(imgCard);

            if ( puntosMinimos > 21) {
                break;
            }

        } while( pcPoints < puntosMinimos && puntosMinimos < 22 );
    };
    
    //EVENTOS
    btnPedir.addEventListener('click', () => {

        const card = pedirCarta();
        console.log(`card = ${card}`)
        playerPoints = playerPoints + cardValue( card );
        score[0].innerHTML = playerPoints
        
        const imgCard = document.createElement('img');
        //const cartel = document.createElement('div')
        //imgCard.setAttribute('src', 'assets/cartas/' + card + '.png')
        imgCard.src = `assets/cartas/${card}.png`
        //imgCard.setAttribute('class', 'carta')
        imgCard.classList.add('carta')
        cartasJugador.appendChild(imgCard);

        if( playerPoints > 21 ) {
            console.warn('Lo siento mucho, perdiste')
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            // while (cartasJugador.lastElementChild) {
            //     cartasJugador.removeChild(cartasJugador.lastElementChild)
            // }
            // cartasJugador.appendChild(cartel);
            // cartel.innerHTML = 'Has perdido'
            playerPC(playerPoints)
        } else if ( playerPoints === 21 ) {
            console.warn('21, GENIAL Has Ganado!')
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            playerPC(playerPoints)
        }
        console.log(`Puntuación : ${playerPoints}`);
        
    });

    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;

        playerPC(playerPoints);
    });

    //RUN
    createDeck();
    //pedirCarta();
    //cardValue(pedirCarta());

});

