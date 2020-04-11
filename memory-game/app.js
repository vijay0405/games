document.addEventListener('DOMContentLoaded', ()=>{
    const cardArr = [
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'apple',
            img: 'images/apple.png'
        },
        {
            name: 'burger',
            img: 'images/burger.png'
        },
        {
            name: 'cake',
            img: 'images/cake.png'
        },
        {
            name: 'chicken',
            img: 'images/chicken.png'
        },
        {
            name: 'soup',
            img: 'images/soup.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'apple',
            img: 'images/apple.png'
        },
        {
            name: 'burger',
            img: 'images/burger.png'
        },
        {
            name: 'cake',
            img: 'images/cake.png'
        },
        {
            name: 'chicken',
            img: 'images/chicken.png'
        },
        {
            name: 'soup',
            img: 'images/soup.png'
        }
    ]


    cardArr.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const result = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    function createBoard() {
        for (let i = 0; i < cardArr.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/Diamond-100.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOne = cardsChosenId[0]
        const optionTwo = cardsChosenId[1]
        if(cardsChosen[0] == cardsChosen[1]) {
            alert("Found Match")
            cards[optionOne].setAttribute('src', 'images/Cool-100.png')
            cards[optionTwo].setAttribute('src', 'images/Cool-100.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOne].setAttribute('src', 'images/Cheeky-100.png')
            cards[optionTwo].setAttribute('src', 'images/Cheeky-100.png')
            alert("Try Again")
        }
        cardsChosen = []
        cardsChosenId = []
        result.textContent = cardsWon.length
        if(cardsWon.length == cardArr.length/2) {
            result.textContent = "Congratulations You found All matches."
        }
    }


    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArr[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArr[cardId].img)
        if (cardsChosen.length == 2){
            console.log(cardsChosen, cardsChosenId)
            setTimeout(checkForMatch, 500)

        }
    }

    createBoard()





})


