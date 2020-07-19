import React, { Component } from "react"
import Item from "./Item"
import businessmanIcon from "./Businessman Icon.svg"
import engineerIcon from "./Engineer Icon.svg"
import geniusIcon from "./Genius Icon.svg"
import tacticianIcon from "./Tactician Icon.svg"
import { extendParentClass } from "../../../../utils/classes"

export class List extends Component {
  baseClass = extendParentClass.bind(this)("list")

  details = [
    {
      title: "Super-Genius Intelligence",
      description:
        "Tony Stark is far more than a mechanical engineering prodigy who graduated from the Massachusetts Institute of Technology with honors at the age of 17.",
      icon: geniusIcon,
    },
    {
      title: "Master Engineer",
      description:
        "He is an excellent engineer and mechanic capable of fixing almost any, if not all machinery.",
      icon: engineerIcon,
    },
    {
      title: "Master Businessman",
      description: "Stark is extremely well-respected in the business world, able to command people's attentions when he speaks on economic matters. He has built up several multi-million dollar companies from virtually nothing.",
      icon: tacticianIcon,
    },
    {
      title: "Expert Tactician",
      description: "He is a brilliant tactician capable of quickly formulating battle strategies and new plans if the situation changes, like being able to elaborate complex plans in order to defeat different enemies.",
      icon: businessmanIcon,
    },
  ]

  renderItem = (itemData, index) => (
    <Item {...itemData} key={index} parentClass={this.baseClass} />
  );

  renderItems = () => this.details.map(this.renderItem);
  
  render() {
    return <ul className={this.baseClass}>{this.renderItems()}</ul>
  }
}

export default List;