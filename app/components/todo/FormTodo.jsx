'use client';

import Image from 'next/legacy/image';
import { useForm } from 'react-hook-form';
import createPic from '@/public/create.webp';
import editPic from '@/public/edit.webp';

const FormTodo = ({ isEditing, submit, initialValues }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initialValues?.data });

  return (
    <div className="flex flex-row card w-full bg-secondary shadow-xl rounded-lg mx-auto justify-center mt-16 h-auto text-slate-200 mb-10">
      <div className="w-1/2 relative overflow-hidden rounded-l">
        {isEditing ? (
          <Image
            src={editPic}
            layout="fill"
            sizes="(max-width: 768px) 100vw"
            objectFit="cover"
            alt="edit-pict"
            placeholder="blur"
          />
        ) : (
          <Image
            src={createPic}
            layout="fill"
            sizes="(max-width: 768px) 100vw"
            objectFit="cover"
            alt="create-pict"
            placeholder="blur"
          />
        )}
      </div>
      <div className="w-1/2 p-10 ">
        <div className="justify-center">
          <div className="text-left">
            <h2 className="text-4xl font-bold">
              {isEditing ? (
                <>
                  Edit your{' '}
                  <span className="text-accent hover:text-primary">Todo</span>
                </>
              ) : (
                <>
                  Create New{' '}
                  <span className="text-accent hover:text-primary">Todo</span>
                </>
              )}
            </h2>
            <p className="font-semibold mb-7">
              {isEditing ? (
                <>
                  Modify your{' '}
                  <span className="text-accent font-bold hover:text-primary">
                    Todo
                  </span>{' '}
                  task
                </>
              ) : (
                <>
                  Tell us what you wanted{' '}
                  <span className="text-accent font-bold hover:text-primary">
                    Todo!
                  </span>
                </>
              )}
            </p>
          </div>
          <form onSubmit={handleSubmit(submit)}>
            <div className="form-control w-full mx-auto mb-5">
              <label className="label font-medium">Title</label>
              <input
                className="input bg-primary rounded-lg "
                placeholder="Snorkeling"
                {...register('title', { required: true })}
              />
              {errors.title && (
                <p className="text-red-600 m-px">Title is required</p>
              )}
              <label className="label font-medium">Description</label>
              <textarea
                className="textarea bg-primary rounded-lg "
                placeholder="Snorkeling at Lombok Island"
                {...register('description', { required: true })}
              />
              {errors.description && (
                <p className="text-red-600 m-px">Description is required</p>
              )}
              <label className="label font-medium">Status</label>
              <select
                className="select bg-primary rounded-lg "
                {...register('status', { required: true })}
              >
                <option value="INPROGRESS">In Progress</option>
                <option value="DONE">Finished</option>
              </select>
              {errors.status && (
                <p className="text-red-600 m-px">Status is required</p>
              )}
              <label className="label font-medium">Priority</label>
              <select
                className="select bg-primary rounded-lg "
                {...register('priority', { required: true })}
              >
                <option value="LOW">Low</option>
                <option value="MEDIUM">Medium</option>
                <option value="HIGH">High</option>
                <option value="URGENT">Urgent</option>
              </select>
              {errors.priority && (
                <p className="text-red-600 m-px">Priority is required</p>
              )}
            </div>
            <button
              className="btn btn-outline btn-primary w-full rounded-full text-md mt-1"
              type="submit"
            >
              {isEditing ? 'Update' : 'Create'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormTodo;
