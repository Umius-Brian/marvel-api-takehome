import React, { Component } from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"


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

export class