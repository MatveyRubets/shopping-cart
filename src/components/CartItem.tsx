import React from "react";
import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utils/formatCurrency";

type CartItemProps = {
	id: number;
	quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
	const { removeItemFromCart } = useShoppingCart();
	const item = storeItems.find(item => item.id === id);
	if (item == null) return null;

	return (
		<Stack direction="horizontal" gap={2} className="d-flex align-items-center">
			<img
				src={item.imgUrl}
				alt={item.name}
				style={{ minWidth: "125px", height: "75px" }}
			/>
			<div className="me-auto">
				<div>
					{item.name}{" "}
					{quantity > 1 && (
						<span className="text-muted" style={{ fontSize: ".65rem" }}>
							x{quantity}
						</span>
					)}
				</div>
				<div className="text-muted" style={{ fontSize: ".6125rem" }}>
					{formatCurrency(item.price)}
				</div>
			</div>
			<div style={{ fontSize: ".825rem" }}>
				{formatCurrency(item.price * quantity)}
			</div>
			<Button
				variant="danger"
				size="sm"
				onClick={() => removeItemFromCart(item.id)}
			>
				&times;
			</Button>
		</Stack>
	);
};

export default CartItem;
