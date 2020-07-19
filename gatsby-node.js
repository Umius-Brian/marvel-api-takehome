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
  const { id } = info;
  createPage({
    context: {
      id,
    },
    component: path.resolve("./src/templates/Character/index.js"),
    path: id,
  })
}

const fetchDataAndCreateCharacter = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const query = getPageQuery();
  const result = await graphql(query)
  if (result.errors) {
    return console.error(result.errors)
  }
  return createCharacterPage(createPage, result.data.charactersNode)
}

export const createPage = async ({ graphql, actions }) => {
  await fetchDataAndCreateCharacter({ graphql, actions })
}