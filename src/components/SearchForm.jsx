import { useState } from "react"

export const SearchForm = ({setCity,fetchWeather})=>{
    //check the change if the useState is used in setCity
    const [input,setInput]=useState("");

        const handleSubmit = (e)=>{
        e.preventDefault();
        setCity(input);
        fetchWeather(input);
    }

    return(
        <div className="bg-amber-200 p-4">
        <form onSubmit={handleSubmit} className="m-4 flex items-center">
            <input
            type="text"
            value={input}
            onChange={(e)=>{setInput(e.target.value)}}
            placeholder="Enter Name of your city"
            className=" border-slate-500 p-2 rounded w-full"
            />
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
                Get Weather
            </button>

        </form>
    </div>)
}