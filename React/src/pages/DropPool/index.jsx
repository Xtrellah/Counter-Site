import './style.css';
import React, { useState } from "react";
import CaseDropPool from "../../components/CaseDropPool";

export default function DropPool() {
    const [caseType, setCaseType] = useState("current");

    const handleCaseTypeChange = (type) => {
        setCaseType(type);
    };

    return (
        <div>
            <h1 className="audiowide-regular">Drop Pool</h1>
            <h2 className="audiowide-regular">Checkout the current drop pool available</h2>

            <div className="case-menu">
                <h4 onClick={() => handleCaseTypeChange("current")}>Current</h4>
                <h4 onClick={() => handleCaseTypeChange("rare")}>Rare</h4>
                <h4 onClick={() => handleCaseTypeChange("discontinued")}>Discontinued</h4>
            </div>

            <CaseDropPool caseType={caseType} />
        </div>
    );
}
