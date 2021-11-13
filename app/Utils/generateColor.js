export function getColor() {
  let chance = Math.random() * 2
  return chance > 1 ? 'green' : 'red'
}