import React, { Component } from "react"
import { extendBaseClass } from "../../../utils/classes"
import background from "./background@2x.png"
import Image from "gatsby-image"
import { extendBaseClass, extend } from "../../../utils/classes"

export class Header extends Component {
  baseClass = "header";
  extend = extendBaseClass.bind(this);

  render() {
    const { description, thumbnail } = this.props; //image data
    const content = this.extend("content");
    const body = extend(content, "body");
    return (
      <header className={this.baseClass}>
        <img
          src={background}
          alt="background-img"
          className={extend(this.baseClass, "background")}
        />
        <div className={content}>
          {thumbnail && (
            <Image
              className={extend(content, "thumbnail")}
              fluid={thumbnail.childImageSharp.fluid}
            /> //lazy loading
          )}
          <div className={body}>
            <p className={extend(body, "description")}>{description}</p>
            <button className={extend(body, "get-started")}>Get Started</button>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;