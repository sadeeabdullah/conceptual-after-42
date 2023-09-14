/* eslint-disable react/jsx-key */
// eslint-disable react/jsx-key 
import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
// import Swal from 'sweetalert2/dist/sweetalert2.js'


const Home = () => {
    const [allActor,setallActor]=useState([]);
    const [selectedActor,setSelectedActor]=useState([]);
    const [remaining , setRemaining]=useState(0);
    const [totalCost,setTotalCost]=useState(0)
    useEffect(()=>{
        fetch('./data.json')
        .then(res=>res.json())
        .then(data=>setallActor(data))
    },[])
    const handleSelectActor = (actor)=>{
        const isExist = selectedActor.find(item=>item.id==actor.id);
        let count = actor.salary;
        if(isExist){
            return alert('already booked')
        }

       else{
        selectedActor.forEach(item =>{
            count+=item.salary
        })
        const totalRemaining = 20000-count;

        if(count>20000){
         return   alert ('taka nei')
        }
        
        else{
            setTotalCost(count)
        setRemaining(totalRemaining)
        setSelectedActor([...selectedActor,actor])
        }
       }
    }
    // console.log(selectedActor)
    
    return (
        <div className='flex gap-20 p-12'>
            {/* here the cards started */}
            <div className='w-2/3 grid grid-cols-3 gap-4'>
                {/* the card */}
           {
            allActor.map(actor=>(
                <div className=' text-white text-2xl border-2 border-gray-500 flex flex-col items-center justify-center   bg-black-600/30 space-y-4  backdrop-brightness-75  p-5'>
                <img className='w-20 rounded-full' src={actor.image} alt="" />
                <p>{actor.name}</p>
                <p className='text-sm text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, delectus!</p>
                <div className='flex gap-3 text-sm w-full justify-evenly'>
                <p>Salary:{actor.salary}$ </p>
                <p>{actor.role} </p>
                </div>
                <button onClick={()=>handleSelectActor(actor)} className='btn btn-success'>Select</button>
            </div>
            ))
           }
            
            
                  
            </div>
            {/* the cart started */}
            <Cart remaining={remaining} totalCost={totalCost} selectedActor = {selectedActor}></Cart>
        </div>
    );
};

export default Home;