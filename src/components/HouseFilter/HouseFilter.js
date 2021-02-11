import './HouseFilter.css'
import createElement from '../../lib/createElement'
import getCharacters from '../../services/getCharacters'
import FilterButton from '../FilterButton'

export default function HouseFilter(createCards) {
  const hogwartsButtonBox = createElement('div', {
    className: 'HouseFilter__box--big',
  })
  document.body.append(hogwartsButtonBox)

  const filterButtonBox = createElement('div', {
    className: 'HouseFilter__box',
  })
  document.body.append(filterButtonBox)

  const characters = []
  getCharacters()
    .then(people => characters.push(...people))
    .catch(error => console.log(error))

  const filterGryffindor = FilterButton('Gryffindor', characters, createCards) // house, characters, createCards
  const filterHufflepuff = FilterButton('Hufflepuff', characters, createCards) // house, characters, createCards
  const filterRavenclaw = FilterButton('Ravenclaw', characters, createCards) // house, characters, createCards
  const filterSlytherin = FilterButton('Slytherin', characters, createCards) // house, characters, createCards

  const allHouses = createElement('span', {
    role: 'button',
    innerHTML: `
    <img class="HouseFilter__icon--big" src="../../assets/hogwartslogo.png" alt="All Houses" title="All Houses">`,
  })
  allHouses.addEventListener('click', () => {
    createCards(characters)
  })

  filterButtonBox.append(
    filterGryffindor,
    filterHufflepuff,
    filterRavenclaw,
    filterSlytherin
  )

  hogwartsButtonBox.append(allHouses)
}
