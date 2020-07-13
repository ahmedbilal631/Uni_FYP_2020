import React, { Component } from 'react';
import NavBar from '../Header/Nav_bar_admin';
import Admin_Footer from '../Footer/Admin_Footer';
import Side_menu_bar from '../Header/Side_menu_bar'
import Content from './content';

//dom
import {Link} from 'react-router-dom';

//custom css
import './main_page.css'

class Main_page extends Component {
    render() {
        return (
            <div>
                <div>
                    <NavBar />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col s12 m12 l3 xl3">
                            <Side_menu_bar />                            
                        </div>
                        <div className="col s0 m0 l1 xl1"></div>
                        <div className="col s12 m12 l8 xl8">
                            <Content />
                        </div>
                    </div>
                </div>
                <div>
                    <Admin_Footer />
                </div>
            </div>
        )
    }
}
export default Main_page