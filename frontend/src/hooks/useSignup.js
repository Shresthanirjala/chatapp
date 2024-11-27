import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useSignup = () => {
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();  // Initialize the useNavigate hook

	const signup = async ({ fullName, Username, password, confirmPassword, gender }) => {
		const success = handleInputErrors({ fullName, Username, password, confirmPassword, gender });
		if (!success) return;

		setLoading(true);
		try {
			const res = await fetch("/api/auth/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ fullName, Username, password, confirmPassword, gender }),
			});

			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}

			// Remove setAuthUser, as we do not want to log the user in immediately after signup
			// localStorage.setItem("chat-user", JSON.stringify(data));
			// setAuthUser(data); <-- remove this

			// Redirect to login page after successful signup
			toast.success("Signup successful! Please log in.");
			navigate("/login");  // Navigate to login page
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, signup };
};

export default useSignup;

function handleInputErrors({ fullName, Username, password, confirmPassword, gender }) {
	if (!fullName || !Username || !password || !confirmPassword || !gender) {
		toast.error("Please fill in all fields");
		return false;
	}

	if (password !== confirmPassword) {
		toast.error("Passwords do not match");
		return false;
	}

	if (password.length < 6) {
		toast.error("Password must be at least 6 characters");
		return false;
	}

	return true;
}
