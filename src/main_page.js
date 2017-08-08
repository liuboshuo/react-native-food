import React, {Component} from 'react'
import Routers from './routers'
import {connect} from 'react-redux'
class Main_Page extends Component{

    componentDidMount() {
        const {dispacth} = this.props;

    }
    render(){
        return(<Routers/>)
    }
}

function mapStateToProps(state) {
    return state
}
export default connect(mapStateToProps) (Main_Page);