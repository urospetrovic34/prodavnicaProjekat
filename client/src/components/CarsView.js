import React, { Component } from 'react'
import {Container,Card,CardImg,CardBody,CardTitle} from 'reactstrap'
import {getCars} from '../actions/carActions'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Link,BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import SingleCarPage from './SingleCarPage'

export class CarsView extends Component {

    componentDidMount() {
        this.props.getCars()
        console.log(this.props)
    }

    static propTypes = {
        getCars:PropTypes.func.isRequired,
        car:PropTypes.object.isRequired
    }

    render() {
        const {cars} = this.props.car
        return (
            <Container className="containerflex">
                {cars.map(({_id,marka,model,karoserija,slika})=>(
                    <Card className="m-3">
                        <CardBody>
                            <Link to={`${_id}`}><img top width="100%" src={slika} alt="Slika" /></Link>
                            <CardTitle tag="h1"><Link to={`${_id}`}>{marka}</Link></CardTitle>
                            <CardTitle tag="p">{model}</CardTitle>
                            <CardTitle tag="p">{karoserija}</CardTitle>
                        </CardBody>
                    </Card>
                ))}
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    car:state.car
})

export default connect(mapStateToProps,{getCars})(CarsView)
