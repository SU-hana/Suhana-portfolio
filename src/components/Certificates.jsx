import React, { useState } from "react";

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  // Your original certificates data
  const certificatesData = [
    {
      id: 1,
      title: "Data Base Management System Power Programmer Virtual",
      issuer: "Meta",
      date: "2024",
      credentialId: "ABC123456",
      skills: ["React", "JavaScript", "Frontend Development"],
      image: "/dbms.jpg",
      type: "Certificate",
      bgColor: "from-blue-500 to-blue-700",
      textColor: "text-white"
    },
    {
      id: 2,
      title: "Python 3.4.3",
      issuer: "Luminar Technolab",
      date: "2023",
      credentialId: "LT789012",
      skills: ["Python", "Django", "Full Stack"],
      image: "/python.jpg",
      type: "Certificate of Completion",
      bgColor: "from-yellow-400 to-orange-500",
      textColor: "text-gray-800"
    },
    {
      id: 3,
      title: "Introduction to Internet of Things",
      issuer: "Amazon Web Services",
      date: "2024",
      credentialId: "AWS345678",
      skills: ["AWS", "Cloud Computing", "DevOps"],
      image: "/IoT.jpg",
      type: "Certificate",
      bgColor: "from-orange-500 to-red-500",
      textColor: "text-white"
    }
  ];

  const CertificateCard = ({ certificate }) => {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
        {/* Certificate Image */}
        <div className="h-80 bg-gray-100 relative overflow-hidden">
          <img
            src={certificate.image}
            alt={certificate.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          {/* Fallback if image doesn't load */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-white hidden">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
              </div>
              <p className="text-sm font-medium">Certificate</p>
            </div>
          </div>

          {/* Hover Overlay with View Button */}
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={() => setSelectedCertificate(certificate)}
              className="text-white text-lg font-medium hover:text-gray-200 transition-colors transform scale-95 group-hover:scale-100 duration-300"
            >
              View Certificate
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-6">
      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificatesData.map((certificate) => (
          <CertificateCard key={certificate.id} certificate={certificate} />
        ))}
      </div>

      {/* Certificate Modal - Clean View */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-5xl w-full max-h-[95vh] overflow-hidden">
            {/* Close Button - Top Right */}
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            {/* Certificate Display */}
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
              {selectedCertificate.image.endsWith('.pdf') ? (
                <div className="flex items-center justify-center h-96 bg-gray-100">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 1H7a2 2 0 00-2 2v16a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <p className="text-gray-600 mb-4">PDF Certificate</p>
                    <a
                      href={selectedCertificate.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                    >
                      Open PDF Certificate
                    </a>
                  </div>
                </div>
              ) : (
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className="w-full h-auto max-h-[90vh] object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
              )}
              {/* Fallback for broken images */}
              <div className="hidden items-center justify-center h-96 bg-gray-100">
                <div className="text-center">
                  <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                    </svg>
                  </div>
                  <p className="text-gray-600">Certificate Preview Not Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;