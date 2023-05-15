
import MovieList from'./MovieList';
import { useEffect, useState } from 'react';
function Home() {
 const [movieList,setmovieList]=useState([]);
   
        
        const gitList=()=>{
            const serverurl = `http://localhost:3003/trending`;
            fetch(serverurl)
            .then(result=>{
                console.log(result);
            result.json()
            .then(data=>{
                console.log(data);
                setmovieList(data);
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
        <MovieList data={movieList}/>
        </>
    );
}

export default Home;