// pages/ticket/[id].tsx
import { useRouter } from 'next/router';
import type { NextPage } from 'next';

interface Comment {
  id: string;
  author: string;
  content: string;
  createdAt: string;
}

const TicketDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Sample data - replace with actual data fetching
  const comments: Comment[] = [
    {
      id: '1',
      author: 'Support Team',
      content: 'We are looking into this issue.',
      createdAt: '2023-05-02T10:30:00Z'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl font-bold">Ticket #{id}</h1>
            <p className="text-gray-600">Created on May 1, 2023</p>
          </div>
          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
            In Progress
          </span>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Issue Description</h2>
          <p className="text-gray-700">
            The application crashes when trying to submit the support form. 
            This happens consistently on Chrome browser version 112.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Comments</h2>
          <div className="space-y-4">
            {comments.map(comment => (
              <div key={comment.id} className="border-b pb-4">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{comment.author}</span>
                  <span className="text-gray-500 text-sm">
                    {new Date(comment.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <p>{comment.content}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <textarea 
            className="w-full p-3 border rounded-lg mb-3" 
            rows={4} 
            placeholder="Add a comment..."
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Post Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketDetail;