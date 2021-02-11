import './HouseFilter.css'
import createElement from '../../lib/createElement'
import getCharacters from '../../services/getCharacters'

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
  const filterGryffindor = createElement('span', {
    role: 'button',
    innerHTML: `
    <img class="HouseFilter__icons" src="../../assets/gryffindoricon.png" alt="Gryffindor" title="Gryffindor">`,
  })
  filterGryffindor.addEventListener('click', () => {
    const charactersGryffindor = characters.filter(
      character => character.house === 'Gryffindor'
    )
    createCards(charactersGryffindor)
  })

  const filterHufflepuff = createElement('span', {
    role: 'button',
    innerHTML: `
    <img class="HouseFilter__icons" src="../../assets/hufflepufficon.png" alt="Hufflepuff" title="Hufflepuff">`,
  })
  filterHufflepuff.addEventListener('click', () => {
    const charactersHufflepuff = characters.filter(
      character => character.house === 'Hufflepuff'
    )
    createCards(charactersHufflepuff)
  })

  const filterRavenclaw = createElement('span', {
    role: 'button',
    innerHTML: `
    <img class="HouseFilter__icons" src="../../assets/ravenclawicon.png" alt="Ravenclaw" title="Ravenclaw">`,
  })
  filterRavenclaw.addEventListener('click', () => {
    const charactersRavenclaw = characters.filter(
      character => character.house === 'Ravenclaw'
    )
    createCards(charactersRavenclaw)
  })

  const filterSlytherin = createElement('span', {
    role: 'button',
    innerHTML: `
    <img class="HouseFilter__icons" src="../../assets/slytherinicon.png" alt="Slytherin" title="Slytherin">`,
  })
  filterSlytherin.addEventListener('click', () => {
    const charactersSlytherin = characters.filter(
      character => character.house === 'Slytherin'
    )
    createCards(charactersSlytherin)
  })

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
