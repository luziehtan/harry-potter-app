import './Card.css'
import createElement from '../../lib/createElement'

export default function Card(image, name, house, alive) {
  const Card = createElement(
    'section',
    { className: 'Card' },
    image,
    name,
    house,
    alive
  )
  Card.style.backgroundColor = getColorByHouse(house)
  Card.style.color = 'var(--font-color)'
  Card.innerHTML = `
  <section class="Card__img--border">
  <img class="Card__img" src="${image}"></section>
  <h2>${name}</h2>
  <span class="Card_housename">${house}</span>
 `
  if (!alive) {
    Card.append(isCharacterAlive(alive))
  }

  function getColorByHouse(house) {
    if (house === 'Gryffindor') return 'var(--color-gryffindor)'
    if (house === 'Slytherin') return 'var(--color-slytherin)'
    if (house === 'Hufflepuff') return 'var(--color-hufflepuff)'
    if (house === 'Ravenclaw') return 'var(--color-ravenclaw)'
    if (house === '') return 'var(--color-black)'
  }

  function isCharacterAlive(alive) {
    if (alive === false) {
      const deadBanner = createElement('img', {
        className: 'Card__DeadBanner',
        src: '../../assets/cross-solid.svg',
      })
      const deadPhoto = Card.querySelector('.Card__img')
      deadPhoto.classList.add('grayscale')

      return deadBanner
    }
  }

  return Card
}
