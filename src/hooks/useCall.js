import { useEffect } from "react";
import Axios from "axios";

const useCall = async (url) => {
	Axios.get(url);
};

export default useCall;
