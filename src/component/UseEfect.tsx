import React, { useState } from 'react'
import axios from 'axios';
function UseEfect() {
const [data,setData]=useState([]);

    React.useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then(res=>{
            setData(res.data)
        })
    },[])

  return (

    <div>
<h2>hhhh</h2>
<ul>

{data.map((item:any)=>

<li key={item.id}>

</li>

)}


</ul>


    </div>

  )
}

export default UseEfect