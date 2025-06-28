import React, { useState } from "react";

const Journey = () => {
  const [activeJourneyTab, setActiveJourneyTab] = useState("EDUCATION");

  const educationData = [
    {
      degree: "MASTER OF COMPUTER APPLICATIONS",
      institution: "Lourdes Matha College of Science and Technology",
      university: "APJ Abdul Kalam Technological University",
      period: "2021-2023",
      cgpa: "7.87",
      type: "education"
    },
    {
      degree: "BACHELOR OF COMPUTER APPLICATIONS",
      institution: "Christ Nagar College",
      university: "Kerala University",
      period: "2018-2021",
      cgpa: "6.7",
      type: "education"
    },
    {
      degree: "HIGHER SECONDARY EDUCATION",
      institution: "Nirmala Bhavan Higher Secondary School",
      university: "State Board",
      period: "2016-2018",
      cgpa: "6.7",
      type: "education"
    },
    {
      degree: "MATRICULATION",
      institution: "Holy Angels Convent Higher Secondary School",
      university: "State Board",
      period: "2015-2016",
      cgpa: "6.5",
      type: "education"
    }
  ];

  const experienceData = [
    {
      company: "Deienami",
      role: "Product Engineer",
      period: "Sep 2024 - Present",
      duration: "9 months",
      location: "Trivandrum, Kerala",
      type: "Full Time",
      totalExperience: "1.9 years total",
      description: "Working as a Product Engineer focusing on product development and engineering solutions."
    },
    {
      company: "Deienami",
      role: "Software Solution Engineer",
      period: "Sep 2023 - Sep 2024",
      duration: "1 year",
      location: "Trivandrum, Kerala",
      type: "Full Time",
      description: "Developed software solutions and engineered technical implementations."
    }
  ];

  const TimelineItem = ({ item, index, isLast }) => {
    const isEducation = activeJourneyTab === "EDUCATION";

    return (
      <div className="relative flex items-start space-x-4 pb-8">
        {/* Timeline Line */}
        <div className="flex flex-col items-center">
          <div className="w-4 h-4 bg-purple-500 rounded-full border-4 border-purple-900/50 z-10"></div>
          {!isLast && (
            <div className="w-0.5 h-full bg-purple-700/30 mt-2"></div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 bg-black/30 backdrop-blur-sm rounded-xl border border-purple-700/30 p-6 hover:bg-purple-900/10 transition-all duration-300">
          {isEducation ? (
            <>
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-purple-400">{item.degree}</h3>
                <span className="text-sm text-gray-400 bg-purple-900/30 px-3 py-1 rounded-full">
                  {item.period}
                </span>
              </div>
              <p className="text-white font-medium mb-1">{item.institution}</p>
              <p className="text-gray-300 mb-2">{item.university}</p>
              <div className="flex items-center">
                <span className="text-sm text-purple-300">CGPA: </span>
                <span className="text-sm text-white font-medium ml-1">{item.cgpa}</span>
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {item.company.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-purple-400">{item.company}</h3>
                      {item.totalExperience && (
                        <p className="text-xs text-gray-400">{item.type} • {item.totalExperience}</p>
                      )}
                    </div>
                  </div>
                </div>
                <span className="text-sm text-gray-400 bg-purple-900/30 px-3 py-1 rounded-full">
                  {item.duration}
                </span>
              </div>

              <h4 className="text-xl font-semibold text-white mb-2">{item.role}</h4>

              <div className="flex items-center space-x-4 text-sm text-gray-300 mb-3">
                <div className="flex items-center space-x-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <span>{item.period}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span>{item.location}</span>
                </div>
              </div>

              <p className="text-gray-300 text-sm">{item.description}</p>
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full">
      {/* Journey Sub-navigation */}
      <div className="flex justify-center mb-8">
        <div className="flex space-x-2 bg-black/20 backdrop-blur-sm p-1 rounded-lg border border-purple-700/20">
          {["EDUCATION", "EXPERIENCE"].map((tab) => (
            <button
              key={tab}
              className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                activeJourneyTab === tab
                  ? "bg-blue-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
              onClick={() => setActiveJourneyTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline Content */}
      <div className="max-w-4xl mx-auto">
        {activeJourneyTab === "EDUCATION" ? (
          <div className="space-y-0">
            {educationData.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                index={index}
                isLast={index === educationData.length - 1}
              />
            ))}
          </div>
        ) : (
          <div className="space-y-0">
            {experienceData.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                index={index}
                isLast={index === experienceData.length - 1}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Journey;