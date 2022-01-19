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

        console.log(lastCard)
        return lastCard;
    }
    
    //RUN
    createDeck();
    pedirCarta();

});

