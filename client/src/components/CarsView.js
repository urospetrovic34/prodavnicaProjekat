import './cars.css'
import React, { Component } from 'react'
import {Container,Card,CardImg,CardBody,CardTitle} from 'reactstrap'
import {getCars} from '../actions/carActions'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Link,BrowserRouter as Router} from 'react-router-dom'

export class CarsView extends Component {

    componentDidMount() {
        this.props.getCars()
    }

    static propTypes = {
        getCars:PropTypes.func.isRequired,
        car:PropTypes.object.isRequired
    }

    render() {
        const {cars} = this.props.car
        return (
            <Router>
            <Container className="container">
                {cars.map(({marka,model,karoserija,slika})=>(
                    <Card className="mt-3">
                        <CardBody>
                            <Link to="#"><img top width="100%" src={slika} alt="Slika" /></Link>
                            <CardTitle tag="h1"><Link to="#">{marka}</Link></CardTitle>
                            <CardTitle tag="p">{model}</CardTitle>
                            <CardTitle tag="p">{karoserija}</CardTitle>
                        </CardBody>
                    </Card>
                ))}
            </Container>
            </Router> 
        )
    }
}

const mapStateToProps = state => ({
    car:state.car
})

export default connect(mapStateToProps,{getCars})(CarsView)
