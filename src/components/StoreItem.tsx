import React from "react";
import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utils/formatCurrency";

type StoreItemProps = {
	id: number;
	name: string;
	price: number;
	imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
	const {
		getItemQuantity,
		increaseItemQuantity,
		decreaseItemQuantity,
		removeItemFromCart,
	} = useShoppingCart();

	const quantity = getItemQuantity(id);

	return (
		<Card className="h-100">
			<Card.Img
				style={{ objectFit: "cover" }}
				variant="top"
				src={imgUrl}
				height="200px"
			/>
			<Card.Body className="d-flex flex-column">
				<Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
					<span className="fs-2">{name}</span>
					<span className="ms-2 text-muted">{formatCurrency(price)}</span>
				</Card.Title>
				<div className="mt-auto">
					{quantity === 0 ? (
						<Button onClick={() => increaseItemQuantity(id)} className="w-100">
							Add to Cart
						</Button>
					) : (
						<div
							className="d-flex align-items-center flex-column"
							style={{ gap: "0.5rem" }}
						>
							<div
								className="d-flex align-items-center justify-content-center"
								style={{ gap: "0.5rem" }}
							>
								<Button onClick={() => decreaseItemQuantity(id)}>-</Button>
								<div>
									<span className="fs-3">{quantity} </span>in cart
								</div>
								<Button onClick={() => increaseItemQuantity(id)}>+</Button>
							</div>
							<Button
								onClick={() => removeItemFromCart(id)}
								variant="danger"
								size="sm"
							>
								Remove
							</Button>
						</div>
					)}
				</div>
			</Card.Body>
		</Card>
	);
};

export default StoreItem;
