import React from 'react'

function Watchlist() {

    const selected = useSelector(state => {
        return state.watchlistReducer;
      });

    return (
        <div className="w-96 h-96">

           {
               selected?.map((data)=>{
                  
                   <div>
                       <p>{data}</p>
                   </div>
               })
           }
            
        </div>
    )
}

export default Watchlist
