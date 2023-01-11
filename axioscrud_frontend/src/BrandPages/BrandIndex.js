import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Http from "../Pages/Http";
import { FaPlus } from 'react-icons/fa';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


const BrandIndex = () => {

    // ========for react bootstrap modal ===================
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // ========for react bootstrap modal ===================


    const [brands, setBrands] = useState([]); //to take a variable
    //console.log(brands) //for show console.log

    //
    useEffect(() => {
        fetchAllBrands();
    }, []) //for get 1 time data not multiply that []

    const fetchAllBrands = () => {
        Http.get('/brands/').then(res => {
            setBrands(res.data)

        }) // call api get method and fetch data
    }



    const deletebrands = (id) => {


        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )

                //   console.log(id) //for onClick we get id data
                Http.delete('/brands/' + id).then(res => {
                    fetchAllBrands(); // for call and show all tables data

                })
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your all file is safe :)',
                    'error'
                )
            }
        })

    }

    return (
        <div>
            <div className="text-end">

                {/* /========for react bootstrap modal button=================== */}
                <Button variant="primary" className="mt-3" onClick={handleShow}><FaPlus/> &nbsp;Add</Button>
                {/* /========for react bootstrap modal button=================== */}


            </div>
            <h2>Brand List</h2>
            <table className='table table-hover'>
                <thead className='table-dark'>
                    <tr >
                        <th>S/N</th>
                        <th>Brand Name</th>
                        <th>Brand Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* for loop we use map */}
                    {brands.map((brand, key) => (
                        <tr key={key}>
                            <td>{++key}</td>
                            <td>{brand.brand_name}</td>
                            <td>{brand.brand_desc}</td>
                            <td>
                                <Link to={{ pathName: '/editBrand/' + brand.id }} className="btn btn-success">View</Link> &nbsp;
                                <Link to={{ pathName: '/viewBrand/' + brand.id }} className="btn btn-primary">Edit</Link> &nbsp;
                                <button onClick={() => { deletebrands(brand.id) }} className="btn btn-danger">Delete</button>

                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>

            {/* /========for react bootstrap modal body=================== */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>


            {/* /========for react bootstrap modal body=================== */}
        </div>
    );
};






export default BrandIndex;