import React from "react";
import MecineUnit from "./components/MedicineUnit";
import './styles/Medicine.css';

function Medicine() {
  return (
    <div>
      <h1>Medicine Tracking</h1>
      <div>
        <ul id="medicine-list">
          <li><MecineUnit name="Paracetamol" mg="500mg" dose="Twice a day" /></li>
          <li><MecineUnit name="Ibuprofen" mg="200mg" dose="Once a day" /></li>
          <li><MecineUnit name="Amoxicillin" mg="250mg" dose="Thrice a day" /></li>
          <li><MecineUnit name="Cetirizine" mg="10mg" dose="Once a day" /></li>
          <li><MecineUnit name="Metformin" mg="500mg" dose="Twice a day" /></li>
        </ul>
      </div>
    </div>
  );
}

export default Medicine;