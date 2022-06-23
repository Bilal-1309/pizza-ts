import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const FullPizza: React.FC = () => {

  const [pizza, setPizza] = useState<{
    imageUrl: string,
    title: string,
    price: number
  }>();

  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPizza() {
      try{
        const {data} = await axios.get(`https://628def33a339dfef87a3d6dd.mockapi.io/pizzas/${id}`);
        setPizza(data)
      }catch (e){
        navigate('*');
      }
    }
    fetchPizza()
  },[])


  if(!pizza) {
    return <>Загрузка...</>;
  }

  return (
    <div className='container'>
      <img src={pizza.imageUrl} alt=""/>
      <h2>{pizza.title}</h2>
      <h4>{pizza.price}</h4>
    </div>
  );
};

export default FullPizza;