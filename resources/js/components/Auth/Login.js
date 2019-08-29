import React from 'react';
import { connect } from 'react-redux';
import axios from '../../actions/request';
import {loginEndpoint} from '../../actions/endpoints';

const login = ({props}) => { 
              return (
                <div className="flex justify-end w-full my-9 clearfix">
                    <form onSubmit={onLoginSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 m-auto my-24">  
                        <h3>SignIn</h3>     
                        <span id="errorSpan" className="block sm:inline text-red-dark my-2"></span>
                        <div className="mb-4 my-6">
                            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" 
                                id="email" 
                                name="email"
                                type="email" 
                                placeholder="chloe@gmail.com"
                                onChange={handleEmailChange}/>
                            <p 
                                className="text-red-dark text-xs italic">
                            </p>
                        </div>
                        
                        <div className="mb-6">
                            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                                id="password" 
                                name="password"
                                type="password" 
                                placeholder="****"
                                onChange={handlePasswordChange}/>
                            <p className="text-red-dark text-xs italic">
                            </p>
                        </div>
                        
                        <div className="flex items-center justify-between">
                        <button type={"submit"} id="login-submit-button" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-black-700 rounded">
                            Sign In
                        </button>
                        </div>
                    </form>
                </div>
              );
            }
    const inputValidationState = {email: false, password: false};

    const handleEmailChange = e => {
        const email = e.target.value;
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const validEmail = emailRegex.test(String(email).toLowerCase());

        if (!validEmail) {
            inputValidationState['email']=false;
            removeElementClass('bg-blue-500 hover:bg-blue-700');
            toggleButton('bg-gray-500 hover:bg-gray-700', true);
            displayErrorMessage('email must match chloe@mail.com');
            return;
        }

        inputValidationState['email']=true;
        if(checkInputValidationState()){
            removeElementClass('bg-gray-500 hover:bg-gray-700');
            toggleButton('bg-blue-500 hover:bg-blue-700', false);
            displayErrorMessage(null);
        }
        return;
    }

    const handlePasswordChange = e => {
        const password = e.target.value;
        var passwRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        const validatePassword = password.match(passwRegex);
    
        if(!validatePassword) { 
            inputValidationState['password']=false;
            removeElementClass('bg-blue-500 hover:bg-blue-700');
            toggleButton('bg-gray-500 hover:bg-gray-700', true);
            displayErrorMessage('password must be 6 to 20 characters <br/>must contain at least one numeric digit <br/>one uppercase and one lowercase letter');
            return;
        }
        
        inputValidationState['password']=true;
        if(checkInputValidationState()){
            removeElementClass('bg-gray-500 hover:bg-gray-700');
            toggleButton('bg-blue-500 hover:bg-blue-700', false);
            displayErrorMessage(null);
        }
        return;
    }

    const checkInputValidationState = () => {
        const isValid = Object.values(inputValidationState).filter(valid=> {
            if(valid) return true;
        });
        if(isValid.length === 2) {
            return true;
        }
        return false;
    }

    const toggleButton = (classes, disable = true) => {
        const btn = document.querySelector('#login-submit-button');
        classes.split(' ').map(css => btn.classList.add(css));
        btn.disabled = disable;
    }

    const elementContainsClass = (e, cssClass) => {
        return e.classList.contains(cssClass);
    }

    const removeElementClass = (classes) => {
        const btn = document.querySelector('#login-submit-button');
        classes.split(' ').map(css => {
            if(elementContainsClass(btn, css)) {
                btn.classList.remove(css);
            }
        });
    }

    const displayErrorMessage = (message) => {
        const errorSpan = document.querySelector('#errorSpan');
        errorSpan.innerHTML = message;
    }

    const onLoginSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const data = {email, password};

        axios.post(loginEndpoint, data)
            .then(response => {
                console.log(response)
                //this.props.dispatch(loginUser());
                //this.loadCartService();
            })
            .catch(error => {
                console.log(error.response.data);
                errors = error.response.data;
            });
    };

const mapStateToProps = state => {
    return { authentication: state.authentication };
};

const Login = connect(mapStateToProps)(login);

export default Login;