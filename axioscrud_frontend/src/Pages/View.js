import { useEffect, useState } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Http from "./Http";

export default function View(props){

    const navigate = useNavigate();

    const [inputs, setInputs] = useState({});
    // for recive data thus i get new variable but not use it  later
    const [users, setUsers] = useState([]);
    // for get user id 
    const {id} = useParams();

    // use ,[] cause data want just one not multuiple times 
    useEffect(() =>{
        fetchUser();
    },[]);

    const fetchUser = () =>{
        Http.get('/users/'+id+'/edit').then((res)=>{
            setInputs({
                name:res.data.name,
                email:res.data.email
            });
        });
    }

    // const handleChange =(event) => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //         setInputs(values =>  ({...values,[name]:value}))

    // }
    // const submitForm = () =>{
    //     Http.put('/users/'+id,inputs).then((res)=>{
    //         navigate('/');
    //         // console.log(inputs);
    //     })

    // }
    return(
        <div>
            <h2>Edit User</h2>
            <div className="row">
                <div className="col-md-6">
                    <div className="card p-4">
                        <h2>Name</h2>
                        <p>{inputs.name}</p>
                        <h2>Email</h2>
                        <p>{inputs.email}</p>
                        {/* <label>Name</label>
                        <input type="text" name="name" className="form-control md-2" 
                        value ={inputs.name || ''}
                        onChange= {handleChange}
                        />

                        <label>Email</label>
                        <input type="email" name="email" className="form-control md-2" 
                        value ={inputs.email || ''}
                        onChange= {handleChange}
                        /> */}

                        {/* <label>Password</label>
                        <input type="password" name="password" className="form-control md-2" 
                         value ={inputs.password || ''}
                         onChange= {handleChange}
                        /> */}

                        {/* <button onClick={submitForm} className="btn btn-info mt-2">Update </button> */}
                    </div>

                </div>

            </div>
        </div>
    )
}