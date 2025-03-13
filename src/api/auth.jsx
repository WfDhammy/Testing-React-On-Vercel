import React from "react";

async function SignupLogic(username, email, password, confirmPassword) {
    if (password && confirmPassword) {
        if (password === confirmPassword) {
            try {
                const response = await fetch('http://localhost:8000/user/signup', {
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

                if (data.success) {
                    alert("Registration successful!");
                    localStorage.setItem('user_id', data.user.id);
                } else {
                    alert(data.message);
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
