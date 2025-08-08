import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Notification = ({ t, message }) => {
  const navigate = useNavigate();

  return (
    <div className='max-w-md w-full bg-white shadow-md rounded-xl flex border border-gray-200 hover:shadow-lg hover:scale-[1.02] transition-transform duration-200 ease-in-out overflow-hidden'>
      {/* Left side: Avatar + text */}
      <div className='flex-1 p-4 flex items-start'>
        <img
          src={message.from_user_id.profile_picture}
          className='h-10 w-10 rounded-full flex-shrink-0 mt-0.5 object-cover'
          alt={message.from_user_id.full_name}
        />
        <div className='ml-3 flex-1'>
          <p className='text-sm font-semibold text-gray-900 leading-tight'>
            {message.from_user_id.full_name}
          </p>
          <p className='text-sm text-gray-500 truncate max-w-[200px]'>
            {message.text}
          </p>
        </div>
      </div>

      {/* Right side: Reply button */}
      <div className='border-l border-gray-200 flex'>
        <button
          onClick={() => {
            navigate(`/messages/${message.from_user_id._id}`);
            toast.dismiss(t.id);
          }}
          className='px-5 py-3 text-indigo-600 font-medium hover:bg-indigo-50 focus:outline-none focus:bg-indigo-100 transition-colors'>
          Reply
        </button>
      </div>
    </div>
  );
};

export default Notification;
