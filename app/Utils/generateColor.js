export function getColor() {
  let chance = Math.random() * 3
  return chance > 1 ? 'green' : 'red'
}