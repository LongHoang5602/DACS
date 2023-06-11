import { useState, useEffect } from "react";

//set cái time p ở network khong phai chạy từng chữ
//''
//h
//ho
//
function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);
    useEffect(() =>{
        const handler = setTimeout(() =>setDebounceValue(value),delay);
    
        return()=> clearTimeout(handler);
    
        },[value]);
    return debounceValue;
}

export default useDebounce;

