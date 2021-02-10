import createElement from '../../lib/createElement'

const characters = []

export default function HouseFilter(createCards) {
  const filterGryffindor = createElement('button')
  filterGryffindor.textContent = 'Gryffindor'
  filterGryffindor.addEventListener('click', () => {
    const charactersGryffindor = characters.filter(
      character => character.house === 'Gryffindor'
    )
    console.log(charactersGryffindor)
    createCards(charactersGryffindor)
  })
  document.body.append(filterGryffindor)
}
