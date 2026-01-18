import React, { useState } from 'react';
import './App.css';

function App() {
  const [applications, setApplications] = useState([]);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dob: ''
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      setApplications([...applications, { ...formData, id: data.applicationId }]);
      setFormData({ fullName: '', email: '', phone: '', dob: '' });
      alert('Application submitted successfully!');
    } catch (error) {
      alert('Error submitting application: ' + error.message);
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Passport Management System</h1>
        <p>Online Application Portal</p>
      </header>

      <main className="main-content">
        <section className="form-section">
          <h2>Submit Passport Application</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        </section>

        {applications.length > 0 && (
          <section className="applications-section">
            <h2>Your Applications</h2>
            <div className="applications-list">
              {applications.map((app, index) => (
                <div key={index} className="application-card">
                  <p><strong>ID:</strong> {app.id}</p>
                  <p><strong>Name:</strong> {app.fullName}</p>
                  <p><strong>Email:</strong> {app.email}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
