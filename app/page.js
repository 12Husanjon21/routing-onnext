import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <nav className="flex justify-center items-center mt-48">
        <ul>
          <li className="flex items-center text-2xl">
            Enter to
            <p className="text-xl transition-transform hover:scale-125 duration-300">
              <Link className="text-4xl ml-10 mr-10 underline text-blue-500 hover:text-blue-700" href='/complex-dashboard'> Dashboard</Link>
            </p>
            page
          </li>
        </ul>
      </nav>
    </main>
  );
}
