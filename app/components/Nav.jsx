import Link from 'next/link';
import { LuListTodo } from 'react-icons/lu';
import { MdFormatListBulletedAdd } from 'react-icons/md';
import HandleSignOut from './HandleSignOut';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

const Nav = async () => {
  const session = await getServerSession(authOptions);
  if (session === null) {
    return null;
  }
  return (
    <div className="navbar bg-primary">
      {/* {session === null ? null : } */}
      <div className="flex">
        <button className="btn btn-ghost ">
          <Link href="/" className="flex items-center gap-1">
            <LuListTodo size={30} className="text-accent -mr-1px" />
            <h3 className="text-slate-300 font-serif font-semibold text-xl ">
              <span className="text-accent">Todo</span>App
            </h3>
          </Link>
        </button>
      </div>

      <div className="flex mx-auto">
        <button className="btn btn-ghost">
          <Link href="/todo/create" className="flex items-center">
            <h3 className="font-semibold text-slate-300 mr-1">ADD</h3>
            <MdFormatListBulletedAdd size={25} className="text-accent" />
          </Link>
        </button>
      </div>

      <HandleSignOut />

      {/* <button className="btn btn-ghost">
        <Link href="/auth/sign-in" className="flex items-center">
          <h3 className="font-semibold text-slate-300">LOG IN</h3>
          <HiOutlineLogin size={30} className="rotate-180 text-slate-300" />
        </Link>
      </button> */}
    </div>
  );
};

export default Nav;
