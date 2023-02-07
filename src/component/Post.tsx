import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import  { useState } from 'react'
import {Box, Button, Input, SimpleGrid} from "@chakra-ui/react";
function Post() {
    const [firestName , setFirestName] = React.useState("")
    const [lastName , setLastName] = React.useState("")
    const [email , setEmail] = React.useState<any>()
    const [numer , setNumer] = React.useState<any>()

const api = "https://63e226a5ad0093bf29c8eb0d.mockapi.io/lab"

const [data,setData]=React. useState<any[]>([]);

    React.useEffect(()=>{
        axios.get('https://63e226a5ad0093bf29c8eb0d.mockapi.io/lab').then(res=>{
            setData(res.data)
        })
    },[])


const navigate = useNavigate()
const PostData = ()=>{
    if(firestName.length >=3 &&lastName.length>=3 ){
        axios.post(api,{
            firestName,
            lastName,
            email,
            numer
        }).then(res=>{
            console.log(res);
            
        })
        navigate("/")
        axios.get("https://63e226a5ad0093bf29c8eb0d.mockapi.io/lab")
    }else{
        alert("Please write correct information")
    }

}

const rem=(id:string)=>{
    axios.delete(`https://63e226a5ad0093bf29c8eb0d.mockapi.io/lab/${id}`).then(res=>{
        setData(data.filter((del)=>{
            return del.id!=id
        }))
    })

}
  return (
  <>
  
 
    <SimpleGrid column={1} justifyContent='center' >
        <Input placeholder='الاسم' onChange={e =>{setFirestName(e.target.value)}}></Input>
        <Input placeholder=' اسم العائله' onChange={e =>{setLastName(e.target.value)}}></Input>
        <Input placeholder=' البريد الاكتروني' onChange={e =>{setEmail(e.target.value)}}></Input>
        <Input placeholder=' رقم التواصل' onChange={e =>{setNumer(e.target.value)}}></Input>

        <Button onClick={PostData}>تسجيل البيانات</Button>
    
    <Box mt={50} border='1px'>
    <ul>

{data.map((item:any)=>

<li key={item.id}>
<p>الاسم {item.firestName}</p>
<p>اسم العائله {item.lastName}</p>
<p>البريد الاكتروني {item.email}</p>

<p>رقم التواصل {item.numer}</p>

<Button  bg='red'  >remove</Button>
</li>

)}


</ul>
    </Box>
   </SimpleGrid> 
    
     </>
  )
}

export default Post