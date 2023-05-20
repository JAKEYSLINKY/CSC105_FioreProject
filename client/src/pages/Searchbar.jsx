import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

function Searchbar() {
	const [active, setActive] = useState(false);
	const handleClick = () => {
		setActive(!active);
	};

  return (
	<div style={{height:"48px",backgroundColor:"black", marginRight:"10px"}} >
		<Button onClick ={handleClick} style={active ? {backgroundColor:"#333333",borderRadius:"50px",marginRight:"10px",marginTop:"5px"} : {backgroundColor:"white",borderRadius:"50px",marginRight:"10px",marginTop:"5px",color:"black"}}> Recents </Button>
		<Button onClick ={handleClick} style={active ? {backgroundColor:"#333333",borderRadius:"50px",marginRight:"10px",marginTop:"5px"} : {backgroundColor:"white",borderRadius:"50px",marginRight:"10px",marginTop:"5px",color:"black"}}> Alphabetical </Button>
		<Button onClick ={handleClick} style={active ? {backgroundColor:"#333333",borderRadius:"50px",marginRight:"10px",marginTop:"5px"} : {backgroundColor:"white",borderRadius:"50px",marginRight:"10px",marginTop:"5px",color:"black"}}> Recently add </Button>
	</div>
  )
}

export default Searchbar;
