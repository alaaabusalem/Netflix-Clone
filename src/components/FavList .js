
import { useEffect, useState } from 'react';
import FavListCard from './FavListCard';

function FavList() {
 const [favlist,setfavlist]=useState([]);
   
       
        const gitList=()=>{
            const serverurl = `http://localhost:3005/gitFavList`;
            fetch(serverurl)
            .then(result=>{
                console.log(result);
            result.json()
            .then(data=>{
                console.log(data);
                setfavlist(data);
                
            })
            })
            .catch(error=>{
                console.log(`there is something error`);
            })

        }

        useEffect(()=>{
           
            gitList()
        },[])

    return (
        <>
        <FavListCard favlist={favlist}/>
      </>
        
    );
}

export default FavList;