import React from "react";
import { Card } from "react-bootstrap";
import { formatCurrency } from "../utils/formatCurrency";

type StoreItemProps = {
	id: number;
	name: string;
	price: number;
	imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
	return (
		<Card>
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
			</Card.Body>
		</Card>
	);
};

export default StoreItem;