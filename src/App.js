import AppHeader from './components/AppHeader'
import getCharacters from './services/getCharacters'
import Card from './components/Card'
import createElement from './lib/createElement'
import HouseFilter from './components/HouseFilter'

export default function App() {
  const header = AppHeader(
    `Hogwarts Houses<span class="logo fas fa-hat-wizard"></span>`
  )
  document.body.append(header)

  HouseFilter(createCards)

  // fetch API (siehe services -> getCharacters.js)
  getCharacters()
    .then(characters => createCards(characters))
    .catch(error => handleGetCharacterError(error))

  function createCards(characters) {
    const cards = characters.map(character =>
      Card(character.image, character.name, character.house)
    )
    document.body.append(...cards)
  }

  function handleGetCharacterError(error) {
    const errorMessage = createElement(
      'strong',
      { style: 'color: crimson;' },
      error.message
    )
    document.body.append(errorMessage)
  }
}
