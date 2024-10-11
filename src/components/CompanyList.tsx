import React from 'react';
import { Company } from '../types';
import { Building2 } from 'lucide-react';

interface CompanyListProps {
  companies: Company[];
  onSelectCompany: (companyId: string) => void;
  searchTerm: string;
}

const CompanyList: React.FC<CompanyListProps> = ({ companies, onSelectCompany, searchTerm }) => {
  const filteredCompanies = companies.filter(
    (company) =>
      company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.jobRoles.some((role) =>
        role.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredCompanies.map((company) => (
        <div
          key={company.id}
          className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => onSelectCompany(company.id)}
        >
          <div className="flex items-center mb-2">
            <Building2 className="w-6 h-6 mr-2 text-blue-500" />
            <h3 className="text-lg font-semibold">{company.name}</h3>
          </div>
          <p className="text-gray-600">{company.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CompanyList;