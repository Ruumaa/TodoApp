'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { IoTrashBinSharp } from 'react-icons/io5';
import { toast } from 'react-toastify';

const DeleteTodo = ({ id, title }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const handleModal = () => {
    setOpen(!open);
  };
  const handleDelete = async (id) => {
    await fetch(`http://localhost:3000/api/todo/${id}`, { method: 'DELETE' });
    toast.success('Delete todo success');
    router.push('/');
    router.refresh();
    setOpen(false);
  };
  return (
    <>
      <IoTrashBinSharp
        size={23}
        className="text-red-700 hover:text-red-500 cursor-pointer"
        onClick={handleModal}
      />
      <div className={open ? 'modal modal-open' : 'modal'}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure to delete <span className="capitalize">{title}</span>
          </h3>
          <div className="modal-action gap-3">
            <button type="button" className="btn" onClick={handleModal}>
              No
            </button>
            <button
              type="button"
              className="btn btn-error"
              onClick={() => handleDelete(id)}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteTodo;
