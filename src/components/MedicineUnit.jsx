import React from "react";

function MecineUnit(props) {
    return (
        <div id="medicine-unit">{props.name} - {props.mg} - {props.dose}</div>
    )
}

export default MecineUnit;