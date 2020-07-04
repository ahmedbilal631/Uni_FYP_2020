import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Dummy_Pic from '../../media/dummy_profile.jpg';

//react setup
// import {connect} from 'react-redux';
// import {add_post, update_post} from '../../redux/actions/postAction/post_actions';


class Post extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
          isShow: true,
          item: this.props.post_data,
        };
      }


    componentDidMount(){
        this.setState({
            item : this.props.post_data
        })
        console.log('from post did mount', this.state);
        

    window.jQuery(document).ready(function(){
        window.jQuery('.slider').slider();
      });
}

    render() {
        let post = this.props.post_data;
        console.log(post,'from post props');
        console.log(this.state,'from post state');
        
        return (
            <div>
                  <div className="card sticky-action">
                   <div className="card-image waves-effect waves-block waves-light">
                  {/* <img className="activator" src={post.dp_image} alt="images/office.jpg" /> */}
                  </div>
                  <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">{this.state.item.name}<i className="material-icons right">more_vert</i></span>
        {/* <div><span>Address : {post.location}</span> <span> , {post.country}</span></div> */}

                  <p><a href="#">This is a link</a></p>
                  </div>
    
                  <div class="card-action">.Here the actions btns..</div>

                 <div className="card-reveal">
        {/* <span className="card-title grey-text text-darken-4">{post.name} - Details<i className="material-icons right">close</i></span> */}
        {/* <p>{post.description} - Here is some more information about this product that is only revealed once clicked on.</p> */}
                 </div>
                 </div>
            </div>
        )
    }
}


//here the redux data will be converted into props
const mapStateToProps=(state)=>{
    return{
        recievedUsers: state.posts
    }
};
// export default connect(mapStateToProps, null)(Post);
export default Post;