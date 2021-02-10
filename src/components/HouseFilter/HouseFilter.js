import createElement from '../../lib/createElement'
import getCharacters from '../../services/getCharacters'

export default function HouseFilter(createCards) {
  const characters = []
  getCharacters()
    .then(people => characters.push(...people))
    .catch(error => console.log(error))
  const filterGryffindor = createElement('button', {
    textContent: 'Gryffindor',
  })
  filterGryffindor.addEventListener('click', () => {
    const charactersGryffindor = characters.filter(
      character => character.house === 'Gryffindor'
    )
    createCards(charactersGryffindor)
  })

  const filterHufflepuff = createElement('button', {
    textContent: 'Hufflepuff',
  })
  filterHufflepuff.addEventListener('click', () => {
    const charactersHufflepuff = characters.filter(
      character => character.house === 'Hufflepuff'
    )
    createCards(charactersHufflepuff)
  })

  const filterRavenclaw = createElement('button', {
    textContent: 'Ravenclaw',
  })
  filterRavenclaw.addEventListener('click', () => {
    const charactersRavenclaw = characters.filter(
      character => character.house === 'Ravenclaw'
    )
    createCards(charactersRavenclaw)
  })

  const filterSlytherin = createElement('button', {
    textContent: 'Slytherin',
  })
  filterSlytherin.addEventListener('click', () => {
    const charactersSlytherin = characters.filter(
      character => character.house === 'Slytherin'
    )
    createCards(charactersSlytherin)
  })

  const allHouses = createElement('button', {
    textContent: 'All Houses',
  })
  allHouses.addEventListener('click', () => {
    createCards(characters)
  })

  document.body.append(
    filterGryffindor,
    filterHufflepuff,
    filterRavenclaw,
    filterSlytherin,
    allHouses
  )
}
