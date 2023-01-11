import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
// ES6 Modules or TypeScript


import Http from './Http';

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchAllUsers();
    }, []);

    const fetchAllUsers = () => {
        Http.get('/users').then(res => {
            setUsers(res.data);
        })
    }



      
//delete data and confirm with swal
    const deleteUser = (id) => {

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

                  // create onclick function to param id 
              Http.delete('/users/'+id).then(res => {
                // setUsers(res.data);
                fetchAllUsers();
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
            <h2>User listing</h2>
            <table className='table table-hover'>
                <thead className='table-dark'>
                    <tr>
                        <th>S/N</th>
                        <th>Name</th>
                        <th>email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {users.map((user, index) => (
                    <tr key={index}>
                        <td>{++index}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <Link to ={{pathname: "/view/"+user.id}} className="btn btn-success"> View</Link>&nbsp;
                            <Link to={{ pathname:"/edit/" + user.id}} className='btn btn-primary'>Edit</Link> &nbsp;
                            <button className="btn btn-danger" onClick={()=>{deleteUser(user.id)}}> Delete</button>
                        </td>
                    </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
};

export default Home;