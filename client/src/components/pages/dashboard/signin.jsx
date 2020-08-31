import React, { Component } from 'react'

export default class signin extends Component {
    _Submit(e) {
        e.preventDefault()
        this.props.history.push('/mail')
    }
    render() {
        return (
            <div>
                <div class="container my-5">
                    <div class="row justify-content-center">
                        <div class="col-md-6 col-lg-6 col-xs-6">
                            <div class="col-lg-5 ml-auto" data-aos="fade-up" data-aos-delay="500">
                                <form class="form-box" onSubmit={this._Submit.bind(this)}>
                                    <h3 class="h4 text-black mb-4">Sign In</h3>
                                    <div class="form-group">
                                        <input type="email" class="form-control" placeholder="Email Addresss"/>
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control" placeholder="Password"/>
                                    </div>
                                    <div class="form-group">
                                    <input type="submit" class="btn btn-primary btn-pill" value="Sign in"/>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
