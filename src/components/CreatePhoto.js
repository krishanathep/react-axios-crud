import axios from 'axios';
import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const CreatePhoto = () => {
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [size, setSize] = useState('');
    const [status, setStatus] = useState('');

    const photoData = () => {
        axios.post('https://www.full-stack-app.com/demos/public/api/photos/',{
            name,
            url,
            size,
            status
        })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Create Photo Page</h1>
                </div>
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title">Create Photo</h5>
                        </div>
                        <div className="card-body">
                            <form action="">
                                <div className="form-group">
                                    <label htmlFor="">Name</label>
                                    <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Url</label>
                                    <input type="text" className="form-control" onChange={(e) => setUrl(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Size</label>
                                    <input type="text" className="form-control" onChange={(e) => setSize(e.target.value)} />
                                </div>
                                <div className="form-group">
                                <label htmlFor="">Status</label>
                                    <input type="text" className="form-control" onChange={(e) => setStatus(e.target.value)} />
                                </div>
                                <div className="form-group float-right">
                                <button onClick={photoData} className="btn btn-primary mr-1">Submit</button>
                                <Link to="/photos" className="btn btn-danger">Cancel</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePhoto
