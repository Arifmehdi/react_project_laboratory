import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";
import Http from "./Http";

export default function Create(){

    const navigate = useNavigate();

    const [inputs, setInputs] = useState({});
    const handleChange =(event) => {
        const name = event.target.name;
        const value = event.target.value;
            setInputs(values =>  ({...values,[name]:value}))

    }
    const submitForm = () =>{
        Http.post('/users',inputs).then((res)=>{
            navigate('/');
            // console.log(inputs);
        })

    }
    return(
        <div>
            <h2>New User</h2>
            <div className="row">
                <div className="col-md-6">
                    <div className="card p-4">
                        <label>Name</label>
                        <input type="text" name="name" className="form-control md-2" 
                        value ={inputs.name || ''}
                        onChange= {handleChange}
                        />

                        <label>Email</label>
                        <input type="email" name="email" className="form-control md-2" 
                        value ={inputs.email || ''}
                        onChange= {handleChange}
                        />

                        <label>Password</label>
                        <input type="password" name="password" className="form-control md-2" 
                         value ={inputs.password || ''}
                         onChange= {handleChange}
                        />

                        <button onClick={submitForm} className="btn btn-info mt-2">Create </button>
                    </div>

                </div>

            </div>
        </div>
    )
}