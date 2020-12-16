import React,{Component} from 'react'
import {Navbar,DropdownItem,DropdownToggle,UncontrolledDropdown,DropdownMenu,NavbarText,NavbarBrand,NavLink,NavbarToggler,Collapse,Container,Nav,NavItem} from 'reactstrap'

class AppNavbar extends Component {

    state = {
        isOpen:true
    }

    toggle = () => {
        this.setState({isOpen:!this.state.isOpen})
    }

    render(){
        return(
            <div>
      <Navbar color="danger" light expand="md">
        <NavbarBrand className="text-white"  href="/">Prodavnica</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="text-white">
              <NavLink className="text-white" href="#">Components</NavLink>
            </NavItem>
            <NavItem className="text-white">
              <NavLink className="text-white" href="#">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
        )
    }
}

export default AppNavbar
