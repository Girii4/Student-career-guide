import React from 'react';
import { Company } from '../types';
import { Briefcase, Code, Book, Youtube } from 'lucide-react';

interface CompanyDetailsProps {
  company: Company;
}

const CompanyDetails: React.FC<CompanyDetailsProps> = ({ company }) => {
  const renderLink = (url: string, index: number) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      return (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:underline text-red-500"
        >
          <Youtube className="w-4 h-4 mr-1" />
          YouTube Resource {index + 1}
        </a>
      );
    }
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className="hover:underline">
        Resource {index + 1}
      </a>
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">{company.name}</h2>
      <p className="text-gray-600 mb-6">{company.description}</p>

      <h3 className="text-xl font-semibold mb-3">Job Roles</h3>
      {company.jobRoles.map((role, index) => (
        <div key={index} className="mb-6">
          <h4 className="text-lg font-semibold flex items-center">
            <Briefcase className="w-5 h-5 mr-2 text-blue-500" />
            {role.title}
          </h4>
          <p className="text-gray-600 ml-7 mb-2">{role.description}</p>
          <div className="ml-7">
            <h5 className="font-semibold mt-2 mb-1">Required Skills:</h5>
            <ul className="list-disc list-inside text-gray-600">
              {role.requiredSkills.map((skill, skillIndex) => (
                <li key={skillIndex}>{skill}</li>
              ))}
            </ul>
            <h5 className="font-semibold mt-3 mb-1">Study Materials:</h5>
            <ul className="list-disc list-inside text-blue-500">
              {role.studyMaterials.map((material, materialIndex) => (
                <li key={materialIndex}>{renderLink(material, materialIndex)}</li>
              ))}
            </ul>
            {role.interviewTips && (
              <>
                <h5 className="font-semibold mt-3 mb-1">Interview Tips:</h5>
                <ul className="list-disc list-inside text-green-500">
                  {role.interviewTips.map((tip, tipIndex) => (
                    <li key={tipIndex}>{tip}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      ))}

      {company.companyInterviewTips && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Company Interview Tips</h3>
          <ul className="list-disc list-inside text-green-500">
            {company.companyInterviewTips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-3 flex items-center">
          <Code className="w-6 h-6 mr-2 text-green-500" />
          Preferred Skills
        </h3>
        <ul className="list-disc list-inside text-gray-600">
          {company.preferredSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-3 flex items-center">
          <Book className="w-6 h-6 mr-2 text-purple-500" />
          Preferred Languages
        </h3>
        <ul className="list-disc list-inside text-gray-600">
          {company.preferredLanguages.map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CompanyDetails;
