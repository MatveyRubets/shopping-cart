import React from "react";
import { Container, Navbar as NavbarBs, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Navbar = () => {
	const { openCart, cartQuantity } = useShoppingCart();

	return (
		<NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
			<Container>
				<Nav>
					<Nav.Link to={"/"} as={NavLink}>
						Home
					</Nav.Link>
					<Nav.Link to={"/store"} as={NavLink}>
						Store
					</Nav.Link>
					<Nav.Link to={"/about"} as={NavLink}>
						About
					</Nav.Link>
				</Nav>
				{cartQuantity > 0 && (
					<Button
						onClick={openCart}
						style={{ width: "3rem", height: "3rem", position: "relative" }}
						className="rounded"
						variant="outline-primary"
					>
						<svg
							version="1.1"
							id="Layer_1"
							xmlns="http://www.w3.org/2000/svg"
							x="0px"
							y="0px"
							viewBox="0 0 476.944 476.944"
						>
							<g>
								<path
									d="M84.176,379.875c-26.762,0-48.535,21.772-48.535,48.534s21.772,48.534,48.535,48.534c26.762,0,48.534-21.772,48.534-48.534
		S110.938,379.875,84.176,379.875z M84.176,446.944c-10.22,0-18.535-8.314-18.535-18.534s8.314-18.534,18.535-18.534
		c10.22,0,18.534,8.314,18.534,18.534S94.396,446.944,84.176,446.944z"
								/>
								<path
									d="M342.707,379.875c-26.762,0-48.534,21.772-48.534,48.534s21.772,48.534,48.534,48.534
		c26.762,0,48.535-21.772,48.535-48.534S369.469,379.875,342.707,379.875z M342.707,446.944c-10.22,0-18.534-8.314-18.534-18.534
		s8.314-18.534,18.534-18.534c10.22,0,18.535,8.314,18.535,18.534S352.927,446.944,342.707,446.944z"
								/>
								<path
									d="M413.322,0l-9.835,60H1.999l28.736,175.88c4.044,24.67,26.794,43.995,51.794,43.995h284.917l-6.557,40H50.642v30h335.73
		L438.804,30h36.141V0H413.322z M372.363,249.875H82.529c-10.174,0-20.543-8.808-22.188-18.841L37.298,90h361.271L372.363,249.875z"
								/>
							</g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
						</svg>

						<div
							className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
							style={{
								color: "white",
								width: "1.25rem",
								height: "1.25rem",
								position: "absolute",
								bottom: 0,
								right: 0,
								transform: "translate(25%, 25%)",
							}}
						>
							{cartQuantity}
						</div>
					</Button>
				)}
			</Container>
		</NavbarBs>
	);
};

export default Navbar;
