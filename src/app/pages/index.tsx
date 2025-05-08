// pages/index.tsx
import { useState } from 'react';
import type { NextPage } from 'next';
import TicketList from '../components/TicketList';
import NewTicketModal from '../components/NewTicketModal';

interface StatusCardProps {
  title: string;
  count: number;
}

const StatusCard: React.FC<StatusCardProps> = ({ title, count }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h3 className="text-gray-500">{title}</h3>
    <p className="text-2xl font-bold">{count}</p>
  </div>
);

const Home: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Support Dashboard</h1>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Create New Ticket
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatusCard title="Open Tickets" count={24} />
        <StatusCard title="In Progress" count={12} />
        <StatusCard title="Resolved" count={56} />
        <StatusCard title="High Priority" count={8} />
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Recent Tickets</h2>
        <TicketList />
      </div>

      <NewTicketModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default Home;