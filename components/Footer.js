import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-gray-900">
      <footer className="flex flex-wrap items-center justify-between p-3 m-auto">
        <div className="container mx-auto flex flex-col flex-wrap items-center justify-between pt-2 pb-3">
          <ul className="flex mx-auto text-white text-center">
            <Link href="/">
              <li className="p-2 cursor-pointer hover:underline">Home</li>
            </Link>
            <Link href="/blogs">
              <li className="p-2 cursor-pointer hover:underline">Blogs</li>
            </Link>
            <Link href="/projects">
              <li className="p-2 cursor-pointer hover:underline">Projects</li>
            </Link>
            <Link href="/about">
              <li className="p-2 cursor-pointer hover:underline">About</li>
            </Link>
          </ul>
          <ul className="flex mx-auto text-white text-center">
            <li className="p-2 cursor-pointer">
              <i className="fab fa-instagram fill-current text-white hover:text-purple-400"></i>
            </li>
            <li className="p-2 cursor-pointer">
              <i className="fab fa-github fill-current text-white hover:text-purple-400"></i>
            </li>
            <li className="p-2 cursor-pointer">
              <i className="fab fa-twitter fill-current text-white hover:text-purple-400"></i>
            </li>
          </ul>
          <div className="flex mx-auto p-5 text-white text-center">
            © 2021 Pruthvi Mohanlal. All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
