import Link from "next/link";

export default function Header() {
    return(
    <header>
        <div className="flex items-center justify-between mx-auto">
        <Link href={'/'} className="font-bold text-xl">Work Wizz</Link>
        <nav className="flex gap-2 *:py-2 *:px-4 *:rounded-md">
        <Link className="bg-gray-200" href={'/login'}>Login</Link>
        <Link className="bg-blue-600 text-white" href={'/post-job'}>Post a Job</Link>
      </nav>
      </div>
      </header>
      );
}