const image = (name) => new URL(`../assets/img/${name}`, import.meta.url).href

export const CARDS = [
  { id: 1, image: image('allay.webp') },
  { id: 2, image: image('axolotl.webp') },
  { id: 3, image: image('creeper.webp') },
  { id: 4, image: image('golem.webp') },
  { id: 5, image: image('skeleton.webp') },
  { id: 6, image: image('vix.webp') },
  { id: 7, image: image('wither.webp') },
  { id: 8, image: image('zombie.webp') },
]
