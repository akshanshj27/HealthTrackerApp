import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, FormControl, InputLabel, MenuItem } from '@mui/material';
import Select from '@mui/material/Select';
import { useCart } from '../context/CartContext';
const baseUrl = 'http://localhost:50096/api/Products';

function Products() {
    const { cart, setCart } = useCart();
    const [sort, setSort] = useState('');
    const [pageNum, setPageNum] = useState(1);
    const [products, setProducts] = useState([]);

    // const fetchData = async (sortBy) => {
    //     try {
    //         const response = await axios.get(
    //             `${baseUrl}${sortBy ? '/filter?sort=' + sortBy : ''}`
    //         );
    //         setProducts(response.data);
    //     } catch (error) {
    //         console.log('Error data');
    //     }
    // };

    const fetchPageData = async (num, sortBy) => {
        try {
            const response = await axios.get(
                `${baseUrl}/Page?pageNum=${num}&pageSize=48&sort=${sortBy}`
            );
            setProducts(response.data);
        } catch (error) {
            console.log('Error data');
        }
    };

    useEffect(() => {
        // fetchData(sort);
        fetchPageData(pageNum, sort);
    }, [pageNum, sort]);

    const sortHandler = (event) => {
        setSort(event.target.value);

        fetchPageData(pageNum, event.target.value);
    };
    const pageHandler = (num) => {
        setPageNum((prevState) => prevState + num);
        fetchPageData(pageNum, sort);

    };

    const buyHandler = (item) => {
        console.log(item);
        const newCart = [...cart, item];
        setCart(newCart);
    };

    return (
        <>
            <div className="container mt-4">
                <Box sx={{ minWidth: 120 }}>
                    <FormControl style={{ width: '200px' }}>
                        <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={sort}
                            label="Sort By"
                            onChange={sortHandler}
                            style={{ backgroundColor: '' }}
                        >
                            <MenuItem value={''}>None</MenuItem>
                            <MenuItem value={'category'}>Category</MenuItem>
                            <MenuItem value={'low'}>Price : Low - High</MenuItem>
                            <MenuItem value={'high'}>Price : High - Low</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>
            <div className="container mt-4">
                <div className="row d-flex justify-content-center">
                    {products.map((item) => {
                        return (
                            <div className="col-3">
                                <div className="card m-1">
                                    <div
                                        className="card-header d-flex align-items-center justify-content-between"
                                        style={{ background: '#E6E6E9' }}
                                    >
                                        <h3
                                            className=""
                                            style={{ display: 'inline-block', marginLeft: '20px' }}
                                        >
                                            {item.Name}
                                        </h3>
                                        <i className="fa-solid fa-suitcase-medical fa-xl"></i>
                                    </div>
                                    <div
                                        className="card-body"
                                        style={{ backgroundColor: '#F4F4F6' }}
                                    >
                                        <p className="lead">{item.Description}</p>
                                        <h6>Price : {item.Price}</h6>
                                        <h6>Category : {item.Category}</h6>
                                    </div>
                                    <div className="card-footer">
                                        <button
                                            className="btn btn-outline-success m-1"
                                            onClick={() => buyHandler(item)}
                                            id={item.id}
                                        >
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="container d-flex justify-content-between align-items-center mt-3">
                <div
                    className="mb-5"
                    onClick={() => {
                        pageHandler(-1);
                    }}
                >
                    <button
                        className="btn btn-primary text-center ps-4 pe-4 py-2"
                        id="prev"
                    >
                        <i className="fa-solid fa-circle-left fa-xl" id="prevPage"></i>
                        &nbsp;&nbsp;Prev
                    </button>
                </div>
                <div
                    className=""
                    onClick={() => {
                        pageHandler(1);
                    }}
                    id="toNext"
                >
                    <button
                        className="btn btn-primary text-center ps-4 pe-4 py-2"
                        id="next"
                    >
                        Next&nbsp;&nbsp;
                        <i className="fa-solid fa-circle-right fa-xl" id="nextPage" ></i>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Products;
