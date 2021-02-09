import React from 'react'
import ProductDB from '../db/products.js'
import Product from '../component/product.component'
import { Row, Col } from 'react-bootstrap'

function HomeScreen() {
	return (
		<>
		<Row>
		{ ProductDB.map(product =>
			<Col key={product._id}sm={12} md={6} lg={3}>
		 		<Product product={product}/>
		 	</Col>
		)}
		 </Row>

		</>
	)
}

export default HomeScreen