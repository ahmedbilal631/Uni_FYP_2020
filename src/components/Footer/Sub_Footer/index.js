import React, { Component } from 'react';
import './styleSF.css';

class SubFooter extends Component {
    render() {
        return (
            <div className="my_sub_footer" style={{marginTop: '0px'}}>
                <div className="myCopyright">&copy;mySoftRack-2020</div>
                <div className="mySF_items_list">
                    <span className="mySF_item">admin</span> ||
                    <span className="mySF_item">about us</span> ||
                    <span className="mySF_item">terms & conditions</span> ||
                    <span className="mySF_item">help?</span> ||
                    <span className="mySF_item">contact us</span>
                </div>
            </div>
        )
    }
}

export default SubFooter;