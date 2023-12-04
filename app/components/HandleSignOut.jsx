'use client';
import { signOut } from 'next-auth/react';
import { HiOutlineLogout } from 'react-icons/hi';

const HandleSignOut = () => {
  return (
    <div>
      <button
        className="btn btn-ghost"
        onClick={() =>
          signOut({
            redirect: true,
            callbackUrl: `${window.location.origin}/auth/sign-in`,
          })
        }
      >
        <div className="flex items-center gap-1px">
          <h3 className="font-semibold text-slate-300">LOG OUT</h3>
          <HiOutlineLogout size={30} className="rotate-180 text-accent" />
        </div>
      </button>
    </div>
  );
};

export default HandleSignOut;
