import React from 'react'
import { Link } from 'gatsby'
import connect from '../img/connect_nature.svg'
import logo from '../img/connect_nature_2.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Accueil">
              <img src={logo} alt="logo" style={{ width: '88px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/plantes-interieur">
                Plantes d'intérieur
              </Link>
              <Link className="navbar-item" to="/fruits-legumes">
                Fruits & Légumes
              </Link>
              <Link className="navbar-item" to="/plantes-potageres">
                Plantes potagères
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
            <Link className="navbar-item" to="/about">
                À propos
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <a
                className="navbar-item"
                href="https://les-petites-plantes-d-ysa.netlify.app/admin/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={connect} alt="Login" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
