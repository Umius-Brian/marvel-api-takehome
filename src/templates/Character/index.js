import React from "react";
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Header from "./Header"
import Details from "./Details"
import Comics from "./Comics"


export class Character extends Component {
  render() {
    const { charactersNode, file } = this.props.data;
    const { name, description, thumbnail } = charactersNode;
    return (
      <Layout title={name}>
        <Header thumbnail={file} description={description} />
        <Details thumbnail={thumbnail} />
        <Comics />
      </Layout>
    )
  }
};

// graphql source marvel to obtain Iron Man info
export const query = graphql`
  {
    charactersNode {
      description
      name
      id
      thumbnail {
        path
        extension
      }
    };
    file(name: { eq: "character" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  };
`

export default Character;