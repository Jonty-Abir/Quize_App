import { useEffect, useState } from "react";

export default function useFetchImg(url,methods,headers){
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(false);
    const [result,setResult]=useState(null);
     useEffect(()=>{
        async function requestForImg(){
            try{
                setLoading(true);
                setError(false);
            const response= await fetch(url,{
                method:methods||'GET',
                headers:headers,
            });
            const result =await response.json();
            setLoading(false);
            setResult(result);
            }catch(err){
                console.log(err.message)
                setLoading(false);
                setError(true);
            }
        }
        requestForImg();
     // eslint-disable-next-line react-hooks/exhaustive-deps
     },[]);
     return{
        loading,error,result
     }
}