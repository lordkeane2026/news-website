import React, {Component} from 'react';
import LoginService from "../services/LoginService";
import {Navigate} from "react-router-dom";

class LoginComponent extends Component {
    cons

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.login = this.login.bind(this);
        this.redirectToHome = false;
    }

    changeUserNameHandler = (event) => {
        this.setState(({username: event.target.value}))
    }

    changePasswordHandler = (event) => {
        this.setState(({password: event.target.value}))
    }

    login = (event) => {
        event.preventDefault();
        let param = {username: this.state.username, password: this.state.password};
        console.log('result => ' + JSON.stringify(param));
        LoginService.getLogin(param).then(res => {
            window.sessionStorage.setItem('user', JSON.stringify(res));
             this.setState({redirectToHome: true});
        });
    }

    cancel = (event) => {
        this.setState({redirectToHome: true});
    }

    render() {
        if (this.state.redirectToHome) {
            return <Navigate to="/log"/>;
        }
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Login</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="username">Username : </label>
                                        <input placeholder="Username" type="text" name="username" id="username"
                                               className="form-control"
                                               value={this.state.username} onChange={this.changeUserNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password : </label>
                                        <input placeholder="Password" type="password" name="password" id="password"
                                               className="form-control"
                                               value={this.state.password} onChange={this.changePasswordHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.login}>Login</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginComponent;