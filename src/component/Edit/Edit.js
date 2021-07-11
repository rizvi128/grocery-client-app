import React, { useEffect, useState } from 'react';
import './Edit.css';

import { useParams } from 'react-router-dom';

const Edit = () => {
    const [oldPd, setOldPd] =useState([])
    const{id} = useParams()
    console.log(id)
  

    useEffect(() => {
        const url =`http://localhost:5000/product/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data => console.log(data))
    }, [])
        // const loadInfoData = async () => {
            
            // const base_url = `http://localhost:5000/product/${id}`
            // const res = await fetch(base_url)
            // const data = await res.json()
//             setOldPd(data)
//         }
//         loadInfoData();
//     }, [id])

//   console.log(oldPd)


    // const onSubmit = data => {
    //     console.log(data)
       
    //     fetch(`http://localhost:5000/delete/${id}`, {
    //          method: "PATCH", 
    //          headers: {    "Content-type": "application/json"  },
    //          body: JSON.stringify({    title: "Corrected post"  })
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             if (data) {
    //                 history.push('/')
    //                 toast.success('POST UPDATE SUCCESSFULLY')
    //             }
    //         })
    //         .catch(error => {
    //             toast.error('FAILED TO UPDATE POST')
    //         })
    // }



    


    
    return (
        <div className="edit">
          <form>

           <input type="text" placeholder="name" />
           <input type="number" placeholder="price" />
           <button onClick={console.log('hello')}>Submit </button>


          </form>

       
       
        </div>
    );
};

export default Edit;