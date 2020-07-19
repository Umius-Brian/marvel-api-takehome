import React, { Component } from "react"
import {Link as BaseLink } from "gatsby"
import { string } from "prop-types"
import {
  extendParentClass,
  extendBaseClass,
  getClassWithVariant
} from "../../../../utils/classes"

export class Link extends Component {
  static propTypes = {
    children: string.isRequired,
    to: string.isRequired,
    parentClass: string.isRequired
  };

  baseClass = extendParentClass.bind(this)("item");
  extend = extendBaseClass.bind(this);

  getLinkClass = () => {
    const { variant } = this.props;
    const baseClass = this.extend("link");
    return getClassWithVariant(variant, baseClass);
  }

  render() {
    const { children, to } = this.props;
    return (
      <li className={this.baseClass}>
        <BaseLink to={to} className={this.getLinkClass()}>
          {children}
        </BaseLink> 
      </li>
    )
  }
}

export default Link;