import React, { Component } from "react"
import { extendParentClass, extendBaseClass } from "../../../../utils/classes"
import Link from "./Link"

const links = [
  {
    to: "/sign-in",
    children: "Sign In",
  },
  {
    to: "/sign-up",
    children: "Sign Up",
    variant: "sign-up",
  }
];

export class Links extends Component {
  baseClass = extendParentClass.bind(this)("links");
  extend = extendBaseClass.bind(this);

  renderLink = (linkData, index) => (
    <Link {...linkData} key={index} parentClass={this.baseClass} />
  )

  renderLinks = () => links.map(this.renderLink);

  render() {
    return <ul className={this.baseClass}>{this.renderLinks()}</ul>
  }
}

export default Links;