import React, { useState } from 'react';
import { Upload } from 'lucide-react';

export default function EstimateForm() {
  const [formData, setFormData] = useState({
    service: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="py-20 bg-white" id="estimate">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Get a Free Estimate</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Service Needed</label>
              <select 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
              >
                <option value="">Select a service</option>
                <option value="removal">Tree Removal</option>
                <option value="trimming">Tree Trimming</option>
                <option value="emergency">Emergency Service</option>
                <option value="stump">Stump Grinding</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input 
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input 
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Phone</label>
                <input 
                  type="tel"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Address</label>
                <input 
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Additional Details</label>
              <textarea 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600">Drop images here or click to upload</p>
              <input type="file" className="hidden" multiple accept="image/*" />
            </div>

            <button 
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-lg transition"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}