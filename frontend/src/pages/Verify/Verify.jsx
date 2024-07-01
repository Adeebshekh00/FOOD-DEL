import React, { useEffect,useContext } from 'react'
import './Verify.css'
import { StoreContext } from '../../context/StoreContext'
import {useNavigate, useSearchParams} from 'react-router-dom'
import axios from "axios"

const Verify = () => {

  const [searchParams,setSearchParams] = useSearchParams();
  const success = searchParams.get("success")
  const orderId = searchParams.get("orderId")
  const {url} = useContext(StoreContext);
  const navigate = useNavigate();

  console.log(success,orderId);

  const verifyPayment = async (req,res) =>{
      const response = await axios.post(url+"/api/order/verify",{success,orderId});
      if(response.data.success)
          navigate("/myorders");
      else
          navigate("/");
  }

  useEffect(()=>{
      verifyPayment()
  },[])

  return (
    <div className='spinner'>
        
    </div>
  )
}

export default Verify