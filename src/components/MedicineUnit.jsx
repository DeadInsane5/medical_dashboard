import React from "react";
import '../styles/MedicineUnit.css';

function MecineUnit(props) {
    return (
        <div id="medicine-unit"><div>{props.name}</div> <div>{props.mg}</div> <div>{props.dose}</div></div>
    )
}

export default MecineUnit;