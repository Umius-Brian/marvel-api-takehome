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

// await graphql begins data retrieval
const fetchDataAndCreateCharacter = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const query = getPageQuery();
  const result = await graphql(query);
  if (result.errors) {
    return console.error(result.errors);
  }
  return createCharacterPage(createPage, result.data.charactersNode);
}

// create URLs for all posts, tags, pages, and authors fetched
exports.createPages = async ({ graphql, actions }) => {
  await fetchDataAndCreateCharacter({ graphql, actions });
}