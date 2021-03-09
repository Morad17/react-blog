import React from 'react'
import Card from '../Ui/Card'
import './style.css'
/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {
  return(
    <div className="sidebarContainer">
      <Card style={{ marginBottom:'20px', padding:'10px', boxSizing:'border-box'}}>
        <div className="cardHeader">
          <span>About Us</span>
        </div>
        <div className="profileImage">
          <img src="/images/profile-img.png" alt=""/>
        </div>
        <div className="cardBody center">
          <p>Morad El Bouchikhi Senior Developer</p>
        </div>
      </Card>
    <Card>
      <div className="cardHeader">
        <span>Social Network</span>
      </div>
    </Card>
    <Card>
      <div className="cardHeader">
        <span>Recent posts</span>
      </div>
    </Card>
  </div>


    
   )
  }


export default Sidebar