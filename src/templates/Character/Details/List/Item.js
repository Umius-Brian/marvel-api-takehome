import React, { Component } from "react"
import { extendParentClass, extendBaseClass } from "../../../../utils/classes"

export class Item extends Component {
  baseClass = extendParentClass.bind(this)("item");
  extend = extendBaseClass.bind(this);

  render() {
    const { title, description, icon } = this.props;
    return (
      <li className={this.baseClass}>
        <img src={icon} alt={title} className={this.extend("icon")}></img>
        <h3 className={this.extend("title")}>{title}</h3>
        <p className={this.extend("description")}>{description}</p>
      </li>
    )
  }
}

export default Item;