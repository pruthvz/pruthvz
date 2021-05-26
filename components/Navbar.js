import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
const Navbar = () => {
  const router = useRouter();
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
          <div className="mr-4 md:mr-8">
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
          <div className="ml-auto md:hidden">
            <button
              className="flex items-center px-3 py-2 border rounded"
              type="button"
            >
              <svg
                className="h-3 w-3 bg-white"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div className="w-full md:w-auto md:flex-grow md:flex md:items-center">
            <ul className="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:mr-4 lg:mr-8 md:border-0">
              <li>
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
              </li>
              <li>
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
              </li>
              <li>
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
              </li>
              <li>
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
              </li>
            </ul>
            <ul className="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:ml-auto md:mt-0 md:pt-0 md:border-0">
              <li>
                <a
                  className="block px-4 py-1 md:p-2 lg:px-4 text-white transition duration-300 hover:text-purple-600 "
                  href="#"
                  title="Link"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  className="block px-4 py-1 md:p-2 lg:px-4 text-white transition duration-300 hover:text-purple-600 "
                  href="#"
                  title="Link"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
