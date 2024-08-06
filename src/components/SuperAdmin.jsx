// src/components/SuperAdminForm.js
import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import '../css/SUperAdmin.css'; // Import custom CSS for styling
import NavBar from './NavBar';

const SuperAdminForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    cin: '',
    gstin: '',
    pan: '',
    companyAddress: '',
    officialPhoneNumber: '',
    officialEmail: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="animated-background">
      <div className="background-effect"></div>
      <div className="background-effect"></div>
      <div className="background-effect"></div>
      <div className="form-container">
        <Typography variant="h4" align="center" gutterBottom className="title">
          Company Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Company Name"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
            className="input-field"
          />
          <TextField
            label="CIN"
            name="cin"
            type="text"
            value={formData.cin}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
            className="input-field"
          />
          <TextField
            label="GSTIN"
            name="gstin"
            type="text"
            value={formData.gstin}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
            className="input-field"
          />
          <TextField
            label="PAN"
            name="pan"
            type="text"
            value={formData.pan}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
            className="input-field"
          />
          <TextField
            label="Company Address"
            name="companyAddress"
            value={formData.companyAddress}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
            className="input-field"
          />
          <TextField
            label="Official Phone Number"
            name="officialPhoneNumber"
            value={formData.officialPhoneNumber}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
            className="input-field"
          />
          <TextField
            label="Official Email"
            name="officialEmail"
            type="email"
            value={formData.officialEmail}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
            className="input-field"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth className="submit-button">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SuperAdminForm;