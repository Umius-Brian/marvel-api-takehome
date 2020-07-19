import React, { Component } from "react"
import { Helmet } from "react-helmet"
import { string } from "prop-types"

export class Layout extends Component {
  static propTypes = {
    title: string.isRequired,
  }

  render() {
    const { children, title } = this.props;
    return (
      <div>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        {children}
      </div>
    )  
  }
}

export default Layout;