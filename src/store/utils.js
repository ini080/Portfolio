/* image URL 가져오기 */
const getImageUrl = (name) => {
  return new URL(`../assets/icons/${name}.png`, import.meta.url).href
}

export default {
  getImageUrl
}
