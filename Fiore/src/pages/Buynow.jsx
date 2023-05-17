import CustomCardBouquet from "../components/CustomCardBouquet";
import React from 'react';
import Layout from '../components/Navbar';

function Buynow() {
	const dataBouquet=[
		{title:"RabbitNote",price:"999 Baht",image:'src/assets/bouquet/bou03.PNG'},
		{title:"TripleSun",price:"789 Baht",image:'src/assets/bouquet/bou15.PNG'},
		{title:"MixGarden",price:"879 Baht",image:'src/assets/bouquet/bou01.PNG'},
		{title:"Scalet",price:"989 Baht",image:'src/assets/bouquet/bou10.PNG'},
		{title:"Bearry",price:"1,129 Baht",image:'src/assets/bouquet/bou12.PNG'},
		{title:"Mink",price:"999 Baht",image:'src/assets/bouquet/bou13.PNG'},
		{title:"MonoKai",price:"1,099 Baht",image:'src/assets/bouquet/bou09.PNG'},
		{title:"Joluno",price:"789 Baht",image:'src/assets/bouquet/bou07.PNG'},
		{title:"Nattha",price:"1,199 Baht",image:'src/assets/bouquet/bou05.PNG'},
		{title:"Cotton",price:"1,209 Baht",image:'src/assets/bouquet/bou04.PNG'},
		{title:"OnlyYou",price:"999 Baht",image:'src/assets/bouquet/bou14.PNG'},
		{title:"FlowerFull",price:"549 Baht",image:'src/assets/bouquet/bou02.PNG'},
		{title:"Prema",price:"1,299 Baht",image:'src/assets/bouquet/bou08.PNG'},
		{title:"WonderDay",price:"799 Baht",image:'src/assets/bouquet/bou06.PNG'},
		{title:"Mr.Sunshine",price:"1,098 Baht",image:'src/assets/bouquet/bou11.PNG'},

	];


 return ( <Layout>
		 <div style={{ marginLeft: "49px" }}>
          	<h1
            	className="fontSwanky"
            	style={{
              	color: "#CD7D20",
              	fontWeight: 400,
             	 fontSize: "40px",
              	textAlign: "center",
            }}
          >
            Your Bouqet
          </h1>
		  </div>
		</Layout>
	)

}

export default Buynow
