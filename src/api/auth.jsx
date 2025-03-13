import React from "react";

async function SignupLogic(username, email, password, confirmPassword) {
    if (password && confirmPassword) {
        if (password === confirmPassword) {
            try {
                const response = await fetch('http://127.0.0.1:8000/user/v1/signup/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username,
                        email,
                        password,
                    }),
                });

                const data = await response.json();

                if (data) {
                    alert("Registration successful!");
                    localStorage.setItem('user_id', data.id);
                } else {
                    alert("Signup failed!");
                }
            } catch (error) {
                alert("An error occurred while signing up");
            }
        } else {
            alert("Passwords do not match");
        }
    }
};

export default SignupLogic;
