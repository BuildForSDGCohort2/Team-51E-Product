import React, { Component } from 'react'
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';

export default class signin extends Component {
    _Submit(e) {
        e.preventDefault()
        this.props.history.push('/mail')
    }
    render() {
        return (
            <div>
                <Header />
                <div class="container my-5">
                    <div class="row justify-content-center">
                        <div class="col-md-6 col-lg-6 col-xs-6">
                        <div class="card  text-center card-form">
                            <div class="header pt-3 grey lighten-2">
                                <h3 class="text">Log in <i class="fa fa-sign-in ml-1"></i></h3>
                                <h6 class="font-weight-light ">Enter your login details</h6>
                            </div>
                            <div class="card-body">
                            
                            <form>
                                <div class="md-form text-left">
                                    <label for="Form-email4"> <i class="fa fa-mail ml-1"></i> Email</label>
                                    <input type="text" id="Form-email4" class="form-control"/>
                                </div>
                                <div class="md-form text-left">
                                <label for="Form-pass4">Password</label>
                                            <input type="password" id="Form-pass4" class="form-control"/>
                                            <p class="font-small grey-text d-flex justify-content-end">Forgot <a href="#" class="dark-grey-text font-weight-bold ml-1"> Password?</a></p>
                                        </div>
                                <div class="text-center mb-4">
                                            <button type="button" class="btn btn-primary btn-pill">Log in <i class="fa fa-sign-in ml-1"></i></button>
                                </div>
                                        <p class="font-small grey-text d-flex justify-content-end">Don't have an account? Sign up</p>
                            </form>

                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
