import React, { Component } from 'react'
import {getCars} from '../actions/carActions'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Container,Card,CardBody,CardTitle,CardFooter} from 'reactstrap'

class SingleCarPage extends Component{

    componentDidMount() {
        this.props.getCars(this.props.match.params.id)
    }

    static propTypes = {
        getCars:PropTypes.func.isRequired,
        car:PropTypes.object.isRequired
    }

    render(){
        console.log(this.props)
        const {cars} = this.props.car
        const var1 = this.props.car.cars.filter(car=>car._id===this.props.match.params.id)
        console.log(var1)
        return (
            <div>
                {var1.map(({_id,marka,model,karoserija,slika,godiste,kilometraza,gorivo,snagaMotora})=>(
                    <Container className="containerflex">
                        <Card className="m-3">
                        <CardBody>
                            <img top width="100%" src={slika} alt="Slika" />
                            <CardTitle tag="h1">{marka}</CardTitle>
                            <CardTitle tag="p">{model}</CardTitle>
                            <CardTitle tag="p">{karoserija}</CardTitle>
                        </CardBody>
                        <CardFooter>
                            <CardTitle tag="p">{godiste}</CardTitle>
                            <CardTitle tag="p">{kilometraza} km.</CardTitle>
                            <CardTitle tag="p">{gorivo}</CardTitle>
                            <CardTitle tag="p">{snagaMotora} ks.</CardTitle>
                        </CardFooter>
                    </Card>
                    </Container>
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    car:state.car
})

export default connect(mapStateToProps,{getCars})(SingleCarPage)
