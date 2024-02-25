import React from 'react'
import { Link } from 'react-router-dom';

function Home() {

    return (
        <div className="container mt-3">
            <div className="row d-flex justify-content-center">
                <div className="col-6">
                    <div className="card text-center">
                        <div className="card-header" style={{ background: "#edeef0" }}>
                            <h4>Welcome to Draven Labs</h4>
                            <Link className='btn btn-outline-dark m-2' to='/register'><b>Register</b></Link>
                            <Link className='btn btn-outline-dark' to='/login'><b>Login</b></Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home