import React, { Component } from "react"
import axios from "axios"
import Item from "./Item"
import $ from "jquery"

export class Comics extends Component {
  baseClass = "comics";

  state = {
    comics: null,
  };

  setComics = comics => this.setState({ comics });

  fetchComics = async() => {
    const { data } = await axios.get(
      `https://gateway.marvel.com:443/v1/public/comics?characters=1009368&apikey=${process.env.GATSBY_PUBLIC_KEY}`
    )
    return data.data.results;
  }

  fetchAndSetComics = async () => {
    const comics = await this.fetchComics();
    this.setComics(comics);
  }

  renderComic = (comic, index) => (
    <Item {...comic} key={index} parentClass={this.baseClass} />
  )

  renderComics = () => {
    const { comics } = this.state;
    return comics.map(this.renderComic);
  }

  enableCarousel = () => {
    const carousel = $(`.${this.baseClass}`);

    if (carousel) {
      carousel.not(".slick-initialized").slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 3,
        arrows: false,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      })
    }
  }

  async componentDidMount() {
    await this.fetchAndSetComics();
  }

  componentDidUpdate() {
    this.enableCarousel();
  }

  render() {
    const { comics } = this.state;
    return (
      <section className={this.baseClass}>
        {comics && this.renderComics()}
      </section>
    )
  }
}

export default Comics;