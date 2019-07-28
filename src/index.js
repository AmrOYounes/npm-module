import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import ReactDOM from 'react-dom';
import Dropdown from './dropdown';
import DropdownItem from './dropDownItem';
import './dropdown.css';
import logo from './logo.svg';


export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      homeDropDownIsVisible: false,
      aboutDropDownIsVisible: false,
      careerDropDownIsVisible: false
    };
  }

  toggleHomeLinks = () => {
    this.setState({
      homeDropDownIsVisible: !this.state.homeDropDownIsVisible,
      aboutDropDownIsVisible: false,
      careerDropDownIsVisible: false
    })
  }

  toggleAboutLinks = () => {
    this.setState({
      homeDropDownIsVisible: false,
      aboutDropDownIsVisible: !this.state.aboutDropDownIsVisible,
      careerDropDownIsVisible: false
    })
  }

  hideNavbarDropDownMenu = () => {
    this.setState({
      homeDropDownIsVisible: false,
      aboutDropDownIsVisible: false,
      careerDropDownIsVisible: false

    })
  }
  toggleCarreLink = () => {
    this.setState({
      homeDropDownIsVisible: false,
      aboutDropDownIsVisible: false,
      careerDropDownIsVisible: !this.state.careerDropDownIsVisible

    })
  }
  componentWillMount() {
    document.addEventListener('click', this.handleClick, false);
  }
  componentWillUnmount() {
    // make sure you remove the listener when the component is destroyed
    document.removeEventListener('click', this.handleClick, false);
  }
  handleClick = e => {

    if (!ReactDOM.findDOMNode(this).contains(e.target)) {
      this.hideNavbarDropDownMenu();
    }

  }
  render() {
    return (
      <div>
        <nav className="navbar"  >
          <img src={logo} alt="City Tour Conpoany" />
          <ul className="nav-links"  >

            <li >
              <a onClick={this.toggleHomeLinks}> home </a>
              {this.state.homeDropDownIsVisible && <Dropdown    >
                <DropdownItem><a>react</a></DropdownItem>
                <DropdownItem><a>angular</a></DropdownItem>
                <DropdownItem><img src="https://randomuser.me/api/portraits/med/men/62.jpg" /></DropdownItem>
                <DropdownItem><button>Logout</button></DropdownItem>
              </Dropdown>
              }
            </li>

            <li>
              <a onClick={this.toggleAboutLinks} >about</a>
              {this.state.aboutDropDownIsVisible && <Dropdown    >

                <DropdownItem><a>c++</a></DropdownItem>
                <DropdownItem><a>java</a></DropdownItem>
                <DropdownItem><img src="https://randomuser.me/api/portraits/med/men/62.jpg" /></DropdownItem>
                <DropdownItem><button>Logout</button></DropdownItem>
              </Dropdown>}
            </li>

            <li>
              <a onClick={this.toggleCarreLink} href="#">career</a>
              {this.state.careerDropDownIsVisible && <Dropdown    >
                <DropdownItem><a>weback</a></DropdownItem>
                <DropdownItem><a>gulp</a></DropdownItem>
                <DropdownItem><img src="https://randomuser.me/api/portraits/med/men/62.jpg" /></DropdownItem>
                <DropdownItem><button>Logout</button></DropdownItem>
              </Dropdown>}
            </li>
          </ul>
        </nav>
        <br />
      </div>
    );
  }
}
