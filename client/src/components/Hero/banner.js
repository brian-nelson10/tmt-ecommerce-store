import React, { Component } from "react";
import './banner.css';
import StoreBanner from '../../assets/images/storeBanner.png';

export default class Banner extends Component {
  state = {
    isOpen: true,
  }
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  componentDidMount() {
    window.addEventListener("scroll", this.resizeHeaderOnScroll);
  }
  resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 1,
      headerEl = document.getElementById("logo");

    if (distanceY > shrinkOn) {
      headerEl.classList.add("logoShrink");
    } else {
      headerEl.classList.remove("logoShrink");
    }
  }

  render() {
    return <div>
        <img id="logo" src={StoreBanner} alt="store banner" />
        </div>
     
  };
};