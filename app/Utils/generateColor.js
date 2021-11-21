export function getColor() {
  let chance = Math.random() * 3
  return chance > 1 ? 'transparent' : 'red'
}
export function getRandomColor() {
  let randColor = Math.floor(Math.random() * 16777215).toString(16);
  return '#' + randColor
}