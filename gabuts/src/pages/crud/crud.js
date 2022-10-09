import { useState, useEffect, useId} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import "./crud.css";
import List from "../tampil crud/list";
import {uid} from "uid"

const Crud = () => {
    const [contacts, setContacts] = useState([
        {
            id: 1,
            name: "John",
            telp: "08123123123",
        },
        {
            id: 2,
            name: "alex",
            telp: "08124123123",
        },
    ]);

    // untuk update data (edit)
    const [isUpdate, setIsUpdate] = useState({id: null, status: false });

    // untuk menyimpan data
    const [formData, setformData] = useState({
        name: "",
        telp: "", 
    });

    function handleChange(e){
        let data = {...formData};
        data[e.target.name] = e.target.value;
        setformData(data);
    }

    function handleSubmit(e){
        e.preventDefault();
        alert("oke");
        let data = [...contacts];
        // validasi
        if(formData.name === ""){
            return false;
        }
        if(formData.telp === ""){
            return false;
        }

        // validasi untuk update
        if(isUpdate.status){
            data.forEach((contact)=>{
                if(contact.id === isUpdate.id){
                    contact.name = formData.name;
                    contact.telp = formData.telp;
                }
            }); 
        }else{
            // menambahkan contact
            data.push({id: uid(), name: formData.name,telp: formData.telp});
        }

        setContacts(data);
        setformData({name: "", telp: ""});
        setIsUpdate({id: null, status: false});
        
    }
    
    // untuk menemukan id saat kita edit
    function handleEdit(id){
        let data = [...contacts];
        let foundData = data.find((contact) => contact.id === id);
        setformData({name:foundData.name, telp:foundData.telp});
        setIsUpdate({id: id, status: true});
    }
    
    //untuk delete
    function handleDelete(id){
        let data = [...contacts];
        let filteredData = data.filter((contact) => contact.id !== id);
        setContacts(filteredData);
    }

    return(

    <div className="Crud">
      <div className="fixed-top bg-white pb-3 mx-auto" style={{ width: 400 }}>
        <h1 className="px-3 py-3 font-weight-bold">My Contact List</h1>
        <form onSubmit={handleSubmit} className="px-3 py-4">
          <div className="form-group">
            <label htmlFor="">Name</label>
            <input
              type="text"
              onChange={handleChange}
              className="form-control"
              value={formData.name}
              name="name"
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="">No. Telp</label>
            <input
              type="text"
              onChange={handleChange}
              value={formData.telp}
              className="form-control"
              name="telp"
            />
          </div>
          <div>
            <button type="submit" className="btn btn-primary w-100 mt-3">
              Save
            </button>
          </div>
        </form>
         <List handleEdit={handleEdit} handleDelete={handleDelete} data={contacts}/>
      </div>
      <div style={{ marginTop: 350 }}>
       
      </div>
    </div>
    )
}

export default Crud