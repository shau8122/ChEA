import { useState } from "react";
import classes from "./Sponsers.module.css";

const Sponsers = () => {
    const [year, setYear] = useState(2023);
    return (
        <div className={classes.sponsPage}>
            <div className={classes.sponsCont}>
                {year===2022&&<div className={classes.lastSpons}>
                    <img src="https://www.iiche.org.in/images/icons/logoiiche.png" alt="sponsName"/>
                    <img src="https://www.gammaprep.com/assets/images/Gamma_Logo.svg" alt="sponsName" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg" alt="sponsName" />
                    <img src="https://d24uab5gycr2uz.cloudfront.net/uploads/white_theme/images/elm_logo.svg" alt="sponsName" />
                </div>}
                {year===2023&&<div className={classes.lastSpons}>
                    <img src="" alt="sponsName" />
                    <img src="" alt="sponsName" />
                </div>}
                <div className={classes.years}>
                    <button onClick={()=>setYear(2022)}>
                        2022
                    </button>
                    <button onClick={()=>setYear(2023)}>
                        2023
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Sponsers;