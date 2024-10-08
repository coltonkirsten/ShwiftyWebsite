import React, { useState } from 'react';
import ApplicationForm from './ApplicationForm';

function Careers({ setIsApplicationFormVisible }) {
    const [showForm, setShowForm] = useState(false);

    const handleApplyClick = () => {
        setShowForm(true);
        setIsApplicationFormVisible(true);
    };

    const handleBackClick = () => {
        setShowForm(false);
        setIsApplicationFormVisible(false);
    };

    return (
        <div>
            {!showForm && (
                <>
                    <h2 className="subheading">Mobile Technician</h2>
                    <button className="button" onClick={handleApplyClick}>Apply</button>
                </>
            )}
            {showForm && <ApplicationForm onBack={handleBackClick} />}
        </div>
    );
}

export default Careers;
