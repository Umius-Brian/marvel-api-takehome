import React, { Component } from "react"
import Links from "./Links/index"
import Logo from "./Logo"

export class Nav extends Component {
  baseClass = "nav"

  getNavClasses = () => {
    return this.baseClass;
  }

  render() {
    const id = "nav__content";
    return (
      <nav className={this.getNavClasses()}>
        <Logo parentClass={this.baseClass} />
        <div className={id} id={id}>
          <Links parentClass={this.baseClass} />
        </div>
      </nav>
    )
  }
}

export default Nav;