import React, { useEffect } from "react";
import useForm from "../hooks/useForm";
const CheckoutForm = () => {
	const [values, setValues] = useForm();
	const ShowSuccess = (e) => {
		e.preventDefault();
		setValues({ ...values, ["showSuccessMessage"]: true });
	};
	return (
		<>
			<form onSubmit={ShowSuccess}>
				<h2>Checkout Form</h2>
				<label>
					First Name:
					<input
						name="firstName"
						value={values.firstName}
						onChange={(e) => {
							e.preventDefault();
							setValues({ ...values, [e.target.name]: e.target.value });
						}}
					/>
				</label>
				<label>
					Last Name:
					<input
						name="lastName"
						value={values.lastName}
						onChange={(e) => {
							e.preventDefault();
							setValues({ ...values, [e.target.name]: e.target.value });
						}}
					/>
				</label>
				<label>
					Address:
					<input
						name="address"
						value={values.address}
						onChange={(e) => {
							e.preventDefault();
							setValues({ ...values, [e.target.name]: e.target.value });
						}}
					/>
				</label>
				<label>
					City:
					<input
						name="city"
						value={values.city}
						onChange={(e) => {
							e.preventDefault();
							setValues({ ...values, [e.target.name]: e.target.value });
						}}
					/>
				</label>
				<label>
					State:
					<input
						name="state"
						value={values.state}
						onChange={(e) => {
							e.preventDefault();
							setValues({ ...values, [e.target.name]: e.target.value });
						}}
					/>
				</label>
				<label>
					Zip:
					<input
						name="zip"
						value={values.zip}
						onChange={(e) => {
							e.preventDefault();
							setValues({ ...values, [e.target.name]: e.target.value });
						}}
					/>
				</label>
				<button type="submit">Checkout</button>
			</form>

			{values.showSuccessMessage && (
				<div className="success-message" data-testid="successMessage">
					<p>
						You have ordered some plants! Woo-hoo! <span role="img">🎉</span>
					</p>
					<p>Your new green friends will be shipped to:</p>
					<br />
					<br />
					<p>
						{values.firstName} {values.lastName}
					</p>
					<p>{values.address}</p>
					<p>
						{values.city}, {values.state} {values.zip}
					</p>
				</div>
			)}
		</>
	);
};

export default CheckoutForm;
