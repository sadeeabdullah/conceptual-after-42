/* eslint-disable react/prop-types */


const Cart = ({selectedActor,remaining,totalCost}) => {
    
    return (
        <div className='text-white'>
            <h1 className="text-3xl">Selected Actors : {selectedActor.length}</h1>
            <p className="text-xl">Remaining: {remaining}</p>
            <p className="text-xl">Total cost: {totalCost}</p>
            {
                selectedActor.map(actor=>(
                    
                <li key={actor.id}>{actor.name}</li>
                ))
            }
        </div>
    );
};

export default Cart;