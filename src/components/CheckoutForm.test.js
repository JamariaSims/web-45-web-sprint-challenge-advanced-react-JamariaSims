import React from "react";
import * as libraryTesting from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows
describe("Checkout Form Test", () => {
	test("form header renders", () => {
		libraryTesting.render(<CheckoutForm />);
	});

	test("form shows success message on submit with form details", async () => {
		const header = libraryTesting.render(<CheckoutForm />);
		userEvent.click(header.getByRole("button"));
		await (() => {
			const successMessage = header.getByTestId(/successMessage/);
			expect(successMessage).toBeInTheDocument();
		});
	});
});
