import { useState } from "react";

export default function useForm() {
	const [values, setValues] = useState({
		firstName: "",
		lastName: "",
		address: "",
		city: "",
		state: "",
		zip: "",
		showSuccessMessage: false,
	});
	return [values, setValues];
}
