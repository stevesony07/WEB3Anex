import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { auth } from '@/firebase/config';
import { Button } from '../shared/Button';

export const DemoRequest = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectDetails: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await emailjs.send(
        'service_vsd13eh',
        'template_fk2oaqs',
        {
          to_email: 'your-company@email.com',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          company: formData.company,
          project_details: formData.projectDetails
        },
        'Vw5X3ep68UEX31HnG'
      );
      alert('Thank you for your interest! We will contact you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectDetails: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an error sending your request. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-cyberpunk-bg py-20">
      <div className="max-w-3xl mx-auto bg-black/50 p-8 rounded-lg backdrop-blur-sm">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl cyber-text gradient-text">Request a Demo</h2>
          <Button 
            type="outline" 
            onClick={() => navigate('/')}
          >
            Return Home
          </Button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="p-3 bg-transparent border border-cyber-blue rounded"
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="p-3 bg-transparent border border-cyber-blue rounded"
            />
          </div>
          
          <input
            type="tel"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className="w-full p-3 bg-transparent border border-cyber-blue rounded"
          />
          
          <input
            type="text"
            placeholder="Company Name"
            value={formData.company}
            onChange={(e) => setFormData({...formData, company: e.target.value})}
            className="w-full p-3 bg-transparent border border-cyber-blue rounded"
          />
          
          <textarea
            placeholder="Project Details"
            required
            value={formData.projectDetails}
            onChange={(e) => setFormData({...formData, projectDetails: e.target.value})}
            className="w-full p-3 bg-transparent border border-cyber-blue rounded h-32"
          />
          
          <button
            type="submit"
            className="w-full p-3 bg-cyber-blue text-black hover:bg-transparent hover:text-cyber-blue border border-cyber-blue transition-all duration-300 rounded"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}; 