import React from 'react'
import { Container, Card } from 'react-bootstrap'
import Rating from '../rating.component'

function Product({product}) {
	return (
		<>
		<Container>
			<Card className="my-3 p-3 rounded">
				<Card.Body>
					<Card.Title>
						<h1>{product.name}</h1>
					</Card.Title>
					<Card.Text as="div">
						<div className="my-3">
							<Rating
								value={product.rating}
								text={`${product.numReviews} review`}
							/>
						</div>
					</Card.Text>
					<Card.Text as ="h3">
						${product.price}
					</Card.Text>
				</Card.Body>
			</Card>
		</Container>
		</>
	)
}

export default Product
