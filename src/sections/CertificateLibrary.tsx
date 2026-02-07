import React from 'react';
import { certificates } from '@/data/certificates';

const CertificateLibrary: React.FC = () => {
  return (
    <section id="certificates" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <div key={cert.id} className="bg-white rounded-lg shadow-md p-6">
              <img 
                src={cert.image} 
                alt={cert.title} 
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-gray-600 mb-2">{cert.institution}</p>
              <p className="text-sm text-gray-500">{cert.date}</p>
              <p className="text-gray-700 mt-2">{cert.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {cert.skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateLibrary;
