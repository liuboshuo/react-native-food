import React from 'react'
import {Provider} from 'react-redux'
import configureStore from "./store/store";
import Routers from './routers'

export default class Application extends React.Component {
    render (){
        const store = configureStore();
        return (
            <Provider store={store}>

                <Routers />

            </Provider>
        )
    }
}