import React from 'react'
import bgCover from '../assets/20240223_133323.jpg'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
const imgStyle = {
    width: "100%",
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}
const divStyle = {
    position: 'relative',
    textAlign: 'center',
    color: "white"
}
function LandingPage() {
    return (
        <>
            <div style={divStyle} >
                <img src={bgCover} alt="image" style={imgStyle} />
                <div className='text-dark' style={{
                    position: 'absolute',
                    top: '20%',
                    left: '20px',
                    width: "50%"
                    // border:"10px solid black"
                }}>
                    <Typography variant='h3' gutterBottom style={{ fontFamily: `"Kanit", sans-serif`, fontWeight: "700", fontStyle: "normal" }}>Say Hello! to your personal health tracker</Typography>
                    <br />
                    <Typography variant="h6" style={{ color: '#727272', fontFamily: `"Kanit", sans-serif`, fontWeight: "400", fontStyle: "normal" }} gutterBottom>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat dolor architecto corrupti ullam deserunt quam eum voluptate minus libero cumque inventore beatae maiores, ad nihil ratione tempore culpa nobis? Officiis, molestias enim omnis excepturi quam placeat nihil repudiandae. Quaerat repudiandae fugiat quod unde ut possimus earum fugit harum itaque velit magni quo ea expedita, placeat soluta aliquid non illum voluptas facilis cum, corporis explicabo ipsa doloremque! Quasi amet dicta fugit quod consectetur, quas perferendis molestias voluptas, ea maxime qui provident repellat debitis quidem magnam? Dolorem, similique voluptatum optio asperiores quos dolores earum iure doloremque magnam animi autem officiis adipisci quia?
                    </Typography>
                    <div className="container-fluid">
                        <div className="card-body">
                            <Link to="/register"><button className="btn btn-outline-dark mt-5">Get started</button></Link>
                            <Link to=""><button className="btn btn-outline-dark mt-5 mx-2" data-bs-toggle="modal" data-bs-target="#exampleModal">Explore products</button></Link>
                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ marginTop: "300px" }}>
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                           {}
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage