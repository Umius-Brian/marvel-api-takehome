import React, { Component } from "react"
import { getImagePath } from "../../../utils/imagePath"
import { extendParentClass, extendBaseClass } from "../../../utils/classes"

export class Item extends Component {
  baseClass = extendParentClass.bind(this)("item");
  extend = extendBaseClass.bind(this);

  render() {
    const { thumbnail, title } = this.props;
    const path = getImagePath(thumbnail);

    return (
      <div className={this.baseClass}>
        <img src={path} alt={title} className={this.extend("image")} />
      </div>
    )
  }
}

export default Item;