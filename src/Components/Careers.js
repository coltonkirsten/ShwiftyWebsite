import React, { useState } from 'react';
import ApplicationForm from './ApplicationForm';
import './Careers.css'; // Assuming you're adding some custom styles in a CSS file

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
        <div className="careers-container">
            {!showForm && (
                <div className="job-card">
                    <div className="job-details">
                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'left' }}>Mobile Technician</h2>
                        <p style={{ fontSize: '1rem', textAlign: 'left' }}>
                            We are seeking a skilled and reliable Mobile Automotive Technician to join our team. The ideal candidate will possess strong diagnostic abilities and a passion for providing exceptional service to our customers in a mobile environment. You will be responsible for performing a range of automotive repairs and maintenance services directly at customer locations.
                        </p>
                        <h3 style={{ fontSize: '1.2rem', textAlign: 'left' }}>Key Responsibilities:</h3>
                        <ul style={{ fontSize: '1rem', textAlign: 'left' }}>
                            <li>Diagnose and repair vehicle issues, including engine, transmission, brake, and electrical systems.</li>
                            <li>Perform routine maintenance services such as oil changes, tire rotations, and brake inspections.</li>
                            <li>Use diagnostic equipment and tools to identify and troubleshoot vehicle problems.</li>
                            <li>Maintain accurate records of services performed and parts used.</li>
                            <li>Communicate effectively with customers about services needed, repairs, and costs.</li>
                            <li>Ensure all safety protocols and standards are followed.</li>
                            <li>Stay current with automotive technology and repair techniques.</li>
                        </ul>
                        <h3 style={{ fontSize: '1.2rem', textAlign: 'left' }}>Qualifications:</h3>
                        <ul style={{ fontSize: '1rem', textAlign: 'left' }}>
                            <li>High school diploma or equivalent; automotive technician certification preferred.</li>
                            <li>Proven experience as an automotive technician or mechanic.</li>
                            <li>Strong knowledge of automotive systems and repair techniques.</li>
                            <li>Valid driver’s license and clean driving record.</li>
                            <li>Excellent problem-solving skills and attention to detail.</li>
                            <li>Ability to work independently and manage time effectively.</li>
                            <li>Strong communication and customer service skills.</li>
                        </ul>
                        <h3 style={{ fontSize: '1.2rem', textAlign: 'left' }}>Benefits:</h3>
                        <ul style={{ fontSize: '1rem', textAlign: 'left' }}>
                            <li>Competitive salary and commission structure.</li>
                            <li>Flexible working hours.</li>
                            <li>Company-provided tools and equipment.</li>
                            <li>Opportunities for ongoing training and development.</li>
                        </ul>
                    </div>
                    <button className="button apply-button" onClick={handleApplyClick}>Apply</button>
                </div>
            )}
            {showForm && <ApplicationForm onBack={handleBackClick} />}
        </div>
    );
}

export default Careers;