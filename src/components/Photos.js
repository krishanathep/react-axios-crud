import React, {useState,useEffect} from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'

const Photos = () => {
    const baseUrl = 'https://www.full-stack-app.com/demos/public/api/photos'

    const[photos, setPhotos] = useState ([])
    const[loading, setLoading] = useState(false)
    const[error, setError] = useState(null)

    const getData = async () =>{
        try {
            setLoading(true)
            const res = await axios.get(baseUrl)
            //console.log(res.data.photos)
            setPhotos(res.data.photos)
        }catch (error) {
            //console.log(error)
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(()=>{
        getData();
    },[])

    if(loading === true) {
        return (
            <div className="text-center mt-5">
               <p>loading...</p>
            </div>
        )
    }

    if(error){
        return(
            <div className="text-center mt-5">
               <p>เกิดข้อผิดพลาดจากเซอเวอร์</p>
            </div>
        )
    }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Photos-List</h1>
        </div>
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Photos List</h5>
            </div>
            <div className="card-body">
            <div className="float-right mb-3">
          <Link to="/createphoto" className='btn btn-success'>Create</Link>
        </div>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Url</th>
                    <th>Name</th>
                    <th>Size</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {photos.map((photo)=>{
                      return (
                        <tr key={photo.id}>
                        <td>{ photo.id }</td>
                        <td><img src={photo.photo_url} alt="" width='100' /></td>
                        <td>{ photo.photo_name }</td>
                        <td>{ photo.photo_size }</td>
                        <td>{ photo.photo_status }</td>
                        <td>{ photo.created_at }</td>
                        <td>
                            <button className='btn btn-info'>view</button>
                            <button className='btn btn-primary mr-1 ml-1'>edit</button>
                            <button className='btn btn-danger'>delete</button>
                        </td>
                      </tr>
                      )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photos;
