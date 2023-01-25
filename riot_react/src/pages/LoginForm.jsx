import React, { useState } from 'react';
// import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import swal from 'sweetalert';
import './login.css';
// import {Link} from 'react-router-dom';
import ApiUtils, {login} from '../util/ApiUtils';
// import * as async_hooks from "async_hooks";
import {ACCESS_TOKEN} from '../constants';
import {notification} from "antd";
import {Link} from "react-router-dom";
// import classes from "*.module.css";
// import classes from "*.module.css";

// import {Form, Input,Button, notification} from 'antd';
// import Icon from "antd/es/icon";

// const FormItem = Form.Item;

// const useStyles = makeStyles((theme) => ({
//     root: {
//         height: '100vh',
//     },
//     image: {
//         backgroundImage: 'url(https://source.unsplash.com/random)',
//         backgroundSize: 'cover',
//     },
//     paper: {
//         margin: theme.spacing(8, 4),
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//     },
//     avatar: {
//         margin: theme.spacing(1),
//         backgroundColor: theme.palette.secondary.main,
//     },
//     form: {
//         width: '100%',
//         marginTop: theme.spacing(1),
//     },
//     submit: {
//         margin: theme.spacing(3, 0, 2),
//     },
// }));

export default function LoginForm() {
    // const classes = useStyles();
    const [usernameOrEmail, setUserName] = useState();
    const [password, setPassword] = useState();

     const handleSubmit=async event=> {
         event.preventDefault();
         console.log("values")
         console.log(usernameOrEmail)
         console.log(password)


         // this.props.form.validateFields((err, values) => {
         //    if (!err) {
         // const loginRequest = Object.assign({}, values);
         login({usernameOrEmail, password})
             .then(response => {
                 console.log(response.json)
                 localStorage.setItem(ACCESS_TOKEN, response.accessToken);
                 this.props.onLogin();

             }).catch(error => {
             if (error.status === 401) {
                 notification.error({
                     description: 'Your Username or Password is incorrect. Please try again!'
                 });
             } else {
                 notification.error({
                     description: error.message || 'Sorry! Something went wrong. Please try again!'
                 });
             }
         });


     }

    return (

        <Grid container>
            <CssBaseline/>
            {/*<Grid item xs={false} md={7} className={classes.image}/>*/}
            {/*<Grid item xs={12} md={5} component={Paper} elevation={6} square>*/}
                <div >
                    {/*<Avatar className={classes.avatar}>*/}
                    {/*    <LockOutlinedIcon/>*/}
                    {/*</Avatar>*/}
                    {/*<Typography component="h1" variant="h5">*/}
                    {/*    Sign in*/}
                    {/*</Typography>*/}
                    <form  noValidate onSubmit={handleSubmit}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="usernameOrEmail"
                            name="usernameOrEmail"
                            label="Email Address"
                            onChange={e => setUserName(e.target.value)}
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
                            onChange={e => setPassword(e.target.value)}
                        />
                        <Button type="primary"
                                htmlType="submit"
                                size="large"
                                className="signup-form-button"
                                >Sign in</Button>
                        Don't Have an Account?  <Link to="/auth/register">Register!</Link>
                    </form>
                </div>
            {/*</Grid>*/}
        </Grid>
    );
}