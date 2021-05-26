import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import { Transition } from "@headlessui/react";

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />

        <link
          href="https://kit-pro.fontawesome.com/releases/v5.15.1/css/pro.min.css"
          rel="stylesheet"
        />
      </Head>

      <nav className="bg-gray-800 shadow" role="navigation">
        <div className="container mx-auto p-4 flex flex-wrap items-center md:flex-no-wrap">
          <div className="mr-4 md:mr-0 ml-4">
            <Link href="/">
              <a rel="home">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-purple-700 hover:text-purple-500 animate-bounce"
                  id="arrowLogo"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/">
                  <a
                    className={
                      router.pathname == "/"
                        ? "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    }
                    title="Link"
                    id="links"
                  >
                    Home
                  </a>
                </Link>

                <Link href="/blogs">
                  <a
                    className={
                      router.pathname == "/blogs"
                        ? "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    }
                    title="Link"
                    id="links"
                  >
                    Blogs
                  </a>
                </Link>

                <Link href="/projects">
                  <a
                    className={
                      router.pathname == "/projects"
                        ? "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    }
                    title="Link"
                    id="links"
                  >
                    Projects
                  </a>
                </Link>

                <Link href="/about">
                  <a
                    className={
                      router.pathname == "/about"
                        ? "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    }
                    title="Link"
                    id="links"
                  >
                    About
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="ml-auto md:hidden">
            <button
              className="flex items-center px-3 py-2 border rounded"
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link href="/">
                  <a
                    className={
                      router.pathname == "/"
                        ? "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    }
                    title="Link"
                    id="links"
                  >
                    Home
                  </a>
                </Link>

                <Link href="/blogs">
                  <a
                    className={
                      router.pathname == "/blogs"
                        ? "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    }
                    title="Link"
                    id="links"
                  >
                    Blogs
                  </a>
                </Link>

                <Link href="/projects">
                  <a
                    className={
                      router.pathname == "/projects"
                        ? "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    }
                    title="Link"
                    id="links"
                  >
                    Projects
                  </a>
                </Link>

                <Link href="/about">
                  <a
                    className={
                      router.pathname == "/about"
                        ? "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    }
                    title="Link"
                    id="links"
                  >
                    About
                  </a>
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export default Navbar;
