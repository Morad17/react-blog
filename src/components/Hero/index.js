import React from 'react'
import './style.css'
import Card from '../Ui/Card/index.js'
import Logo from '../Logo/index.js'
import Navbar from '../Navbar'
/**
* @author
* @function 
**/

const Hero = (props) => {
  return(
    <div>
      <Card style={{ margin:'0 0.7%'}}>
        <div style={{ padding:'50px 0'}}>
          <Logo />
        </div>
        <Navbar />
      </Card>
    </div>
   )

 }

export default Hero