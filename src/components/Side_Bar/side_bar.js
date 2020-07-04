import React, { Component } from 'react'

class Side_bar extends Component {
    render() {
        return (
            <div>
                 <nav> !-- navbar content here  -- </nav>

                    <ul id="slide-out" class="sidenav">
                    <li><div class="user-view">
                     <div class="background">
                     {/* <img src="images/office.jpg"> */}
                     bg
                    </div>
    {/* <a href="#user"><img class="circle" src="images/yuna.jpg"></a> */}
    {/* <a href="#name"><span class="white-text name">John Doe</span></a> */}
    {/* <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a> */}
                    </div></li>
  <li><i class="material-icons">cloud</i>First Link With Icon></li>
  <li><i class="material-icons">cloud</i>First Link With Icon></li>
  <li><i class="material-icons">cloud</i>First Link With Icon></li>
</ul>
<i class="material-icons">menu</i>
                hey this is the side bar..
            </div>
        )
    }
}

export default Side_bar