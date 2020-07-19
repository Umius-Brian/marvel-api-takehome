import React, { Component } from "react"
import { extend, extendBaseClass } from "../../../utils/classes"
import List from "./List"


export class Details extends Component {
  baseClass = "details";
  extend = extendBaseClass.bind(this);

  getImagePath = () => {
    const { path, extension } = this.props.thumbnail;
    return `${path}.${extension}`;
  }
  render() {
    const content = extend(this.baseClass, "content");
    return (
      <section className={this.baseClass}>
        <h2 className={this.extend("title")}>
          Contrary to popular belief, he knows exactly what he's doing.
        </h2>
        <div className={content}>
          <img
            src={this.getImagePath()}
            alt="Iron Man"
            className={extend(content, "thumbnail")}
        />
        <List parentClass={content} />
        </div>
      </section>
    )
  }
}

export default Details;