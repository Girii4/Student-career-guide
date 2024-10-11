import React, { useState } from 'react';
import { companies } from './data/companies';
import CompanyList from './components/CompanyList';
import CompanyDetails from './components/CompanyDetails';
import SearchBar from './components/SearchBar';
import { GraduationCap } from 'lucide-react';

function App() {
  const [selectedCompanyId, setSelectedCompanyId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const selectedCompany = companies.find(company => company.id === selectedCompanyId);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold flex items-center">
            <GraduationCap className="w-8 h-8 mr-2" />
            Student Career Guide
          </h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        {selectedCompany ? (
          <div>
            <button
              onClick={() => setSelectedCompanyId(null)}
              className="mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Back to Companies
            </button>
            <CompanyDetails company={selectedCompany} />
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Select a Company</h2>
            <CompanyList
              companies={companies}
              onSelectCompany={setSelectedCompanyId}
              searchTerm={searchTerm}
            />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;