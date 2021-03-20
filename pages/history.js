import React from 'react';
import { useSelector} from "react-redux";

function history() {
 const historyData = useSelector(state=> state.show.data);
 console.log(historyData);

//  const renderTable =()=>{
//      try{
//          return historyData.map((items, index)=>{
//              const {name, point} = items;
//              return(
//                  <tr >
//                     <td>name</td>
//                     <td>point</td>
//                  </tr>
//              );
//          })

//      }catch(err){
//          console.log(err);
//      }
//  }
    return (
        <div>
        
                
               
            
        </div>
    )
}

export default history
