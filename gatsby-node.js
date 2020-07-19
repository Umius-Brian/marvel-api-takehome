const path = require(`path`)

// retrieve character ID
const getPageQuery = () => `
query CharacterQuery {
  charactersNode {
    id
  }
}
`

// each character's page and info
const createCharacterPage = (createPage, info) => {
  const { id } = info
  createPage({
    context({
      context: {
        id,
      },
      component: path.resolve("./src/templates/Character/index.js"),
      path: id,
    })
}
