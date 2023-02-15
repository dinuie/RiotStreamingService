import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import "./login.css";
import ApiUtils, { getCurrentUser, login } from "../util/ApiUtils";
import { ACCESS_TOKEN } from "../constants";
import { notification } from "antd";
import { Link, useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [usernameOrEmail, setUserName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("values");
    console.log(usernameOrEmail);
    console.log(password);
    login({ usernameOrEmail, password })
      .then((response) => {
        console.log(response.json);
        localStorage.setItem(ACCESS_TOKEN, response.accessToken);
        getCurrentUser();
        if (localStorage.getItem("from")) {
          navigate(localStorage.getItem("from"));
          localStorage.removeItem("from");
        } else {
          navigate("/home");
        }
      })
      .catch((error) => {
        if (error.status === 401) {
          notification.error({
            description:
              "Your Username or Password is incorrect. Please try again!",
          });
        } else {
          notification.error({
            description:
              error.message || "Sorry! Something went wrong. Please try again!",
          });
        }
      });
  };

  return (
    <Grid container justify="center" alignItems="center" className="root">
      <CssBaseline />
      <div
        style={{position: "fixed", top: 50, left: 435, right: 0, zIndex: 999 }}
      >
        <h1 class="text-purple-600 text-5xl font-bold cursor-pointer">
          RIOT STREAMING SERVICE
        </h1>
      </div>
      <div>
        <form noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="usernameOrEmail"
            name="usernameOrEmail"
            label="Email Address"
            style={{ backgroundColor: "white" }}
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            style={{ backgroundColor: "white" }}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            className="signup-form-button"
            style={{
              backgroundColor: "#9932CC",
              color: "white",
              transition: "background-color 0.2s ease-in-out",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#9932CC")
            }
          >
            Sign in
          </Button>
          <p style={{ color: "#9932CC", textAlign: "center" }}>
            Don't Have an Account? <Link to="/auth/register">Register!</Link>
          </p>
        </form>
      </div>
    </Grid>
  );
}
