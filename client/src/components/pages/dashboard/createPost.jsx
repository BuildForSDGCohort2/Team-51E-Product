import React, { Component } from 'react'

export default class createPost extends Component {
    render() {
        return (
            <div>
                <section class="content">
                <div class="row">
                    <div class="col-md-3">
                    <a href="compose.html" class="btn btn-primary btn-block mb-3">Compose</a>
            
                    <div class="card">
                        <div class="card-header">
                        <h3 class="card-title">Folders</h3>
            
                        <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i>
                            </button>
                        </div>
                        </div>
                        <div class="card-body p-0">
                        <ul class="nav nav-pills flex-column">
                            <li class="nav-item active">
                            <a href="#" class="nav-link">
                                <i class="fas fa-inbox"></i> Inbox
                                <span class="badge bg-primary float-right">12</span>
                            </a>
                            </li>
                            <li class="nav-item">
                            <a href="#" class="nav-link">
                                <i class="far fa-envelope"></i> Sent
                            </a>
                            </li>
                            <li class="nav-item">
                                <a href="/createpost" class="nav-link">
                                    Create post
                                </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    
                    </div>
                    <div class="col-md-9">
                        <div class="card card-primary card-outline">
                            <div class="card-header">
                                <h3 class="card-title">Create Post</h3>
                            </div>

                            <div class="container my-5">
                                <div class="row justify-content-center">
                                    <div class="col-md-6 col-lg-6 col-xs-6">
                                        <div class="col-lg-5 ml-auto" data-aos="fade-up" data-aos-delay="500">
                                            <form action="" method="post" class="form-box">
                                                <h3 class="h4 text-black mb-4">Create Post</h3>
                                                <div class="form-group">
                                                    <input type="text" class="form-control" placeholder="Name of product"/>
                                                </div>
                                                <div class="form-group">
                                                    <input type="text" class="form-control" placeholder="Price"/>
                                                </div>
                                                <div class="form-group">
                                                    <textarea class="form-control">

                                                    </textarea>
                                                </div>
                                                <div class="form-group">
                                                    <input type="file" class="form-control" />
                                                </div>
                                                <div class="form-group">
                                                <input type="submit" class="btn btn-primary btn-pill" value="Create post"/>
                                                </div>
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                </section>
            </div>
        )
    }
}
