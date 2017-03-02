import React, {Component} from 'react'
import styles from './styles.scss'

import { Jumbotron, Button } from 'react-bootstrap'

import image from 'img/boilerplate-slice.png'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render () {
        return (
            <Jumbotron className={styles.flex_center}>
                <img src={image} alt="boilerplate"/>
                <h1>Boilerplate</h1>
                <Button bsStyle="success" bsSize="large">Get Started</Button>
            </Jumbotron>
        )
    }
}

Home.PropTypes = {}
