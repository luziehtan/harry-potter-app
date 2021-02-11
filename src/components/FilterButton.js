import createElement from '../lib/createElement'

export default function FilterButton(house, characters, createCards) {
  const button = createElement('span', {
    role: 'button',
    innerHTML: `
    <img class="HouseFilter__icons" src="../../assets/${house.toLowerCase()}icon.png" alt="${house}" title="${house}">`,
  })
  button.addEventListener('click', () => {
    const filteredCharacters = characters.filter(
      character => character.house === house
    )
    createCards(filteredCharacters)
  })

  return button
}
