import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { StoreContext } from "../../context/StoreContext";
import { assets } from '../../assets/assets';
import './MyOrder.css';



const MyOrder = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(url+"/api/order/userOrders",{},{headers:{token}});
    setData(response.data.data);
    console.log(response.data.data);
  }

  // call the function whenever the component is loaded
  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className='my-orders'>
        <h2>My Orders</h2>
        <div className="container">
           {
             data.map((order,index)=>{
               return (
                  <div key={index} className="my-orders-order">
                     <img src={assets.parcel_icon} alt=''/>
                     <p>{order.items.map((item,index)=>{
                        if(index === order.items.length-1){
                          return item.name+" x "+item.quantity
                        }
                        else{
                          return item.name+" x "+item.quantity+" , "
                        }
                      })} </p>
                      <p>${order.amount}.00</p>
                      <p>Items: {order.items.length}</p>
                      <p><span>&#x25cf;</span> <b>{order.status}</b></p>
                      <button onClick={fetchOrders}>TrackOrder</button>
                  </div>
               )
             })
           } 
        </div>
      
    </div>
  );
};

export default MyOrder;
