import { FaBeer } from "react-icons/fa";

export default function Carousal({slides}){
    return (
    <div className="overflow-hidden relative">
    <div className="flex"> 
        {slides.map((s)=>{
            return <img src ={s} />
        })}
    </div>
    </div>
    );
}