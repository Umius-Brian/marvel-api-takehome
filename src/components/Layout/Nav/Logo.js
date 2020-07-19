import React, { Component } from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"
import { extendParentClass, extendBaseClass } from "../../../utils/classes"


export class Logo extends Component {
  baseClass = extendParentClass.bind(this)("logo");
  extend = extendBaseClass.bind(this);

  render() {
    const { data } = this.props;
    return (
      <Link to="/" className={this.baseClass}>
        {data && (
          <Image
            fluid={data.file.childImageSharp.fluid}
            className={this.extend("image")}
          />
        )}
      </Link>
    )
  }
}

export class LogoWithQuery extends Component {
  render() {
    const { parentClass } = this.props;
    return (
      <StaticQuery
        query={graphql`
          {
            file(name: { eq: "logo" }) {
              childImageSharp {
                fluid(quality: 100, maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => <Logo data={data} parentClass={parentClass} />}
      ></StaticQuery>
    )
  }
}

export default LogoWithQuery;