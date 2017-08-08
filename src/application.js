import React from 'react'
import {Provider} from 'react-redux'
import configureStore from "./store/store";
import Main_Page from './main_page'

export default class Application extends React.Component {
    render (){
        //  设置store
        const store = configureStore();
        // 最外层需要 Provider 标签
        return (
            <Provider store={store}>

                {/* 路由 */}
                <Main_Page />

            </Provider>
        )
    }
}