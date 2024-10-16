import React, { useState } from 'react';

function ApplicationForm({ onBack }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [jobTitle, setJobTitle] = useState(''); // New state for job title
    const [jobDescription, setJobDescription] = useState(''); // New state for job description
    const [question1, setQuestion1] = useState('');
    const [question2, setQuestion2] = useState('');
    const [question3, setQuestion3] = useState('');
    const [resume, setResume] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <form onSubmit={handleSubmit} className="job-application-form application-form-box" style={{ textAlign: 'left' }}>
            <button type="button" className="button back-button" onClick={onBack} style={{ marginBottom: '20px' }}>Back</button>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'left' }}>Mobile Technician</h2>
            <p style={{ fontSize: '0.8rem', textAlign: 'left' }}>
                Join our dynamic team as a Mobile Technician. We are looking for highly skilled and
                motivated individuals to provide top-quality service to our customers in the field.
            </p>
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input"
                    required
                />
            </label>
            <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input"
                    required
                />
            </label>
            <label>
                Why do you want to work with us?
                <textarea
                    value={question1}
                    onChange={(e) => setQuestion1(e.target.value)}
                    className="input"
                    required
                />
            </label>
            <label>
                Describe your experience with mobile technology.
                <textarea
                    value={question2}
                    onChange={(e) => setQuestion2(e.target.value)}
                    className="input"
                    required
                />
            </label>
            <label>
                What are your career goals?
                <textarea
                    value={question3}
                    onChange={(e) => setQuestion3(e.target.value)}
                    className="input"
                    required
                />
            </label>
            <label>
                Upload Resume:
                <input
                    type="file"
                    onChange={(e) => setResume(e.target.files[0])}
                    className="input"
                    required
                />
            </label>
            <button type="submit" className="button">Submit Application</button>
        </form>
    );
}

export default ApplicationForm;