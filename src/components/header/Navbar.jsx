const Navbar = () => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return (
    <div className="duration-200 bg-white shadow-lg dark:bg-gray-900 dark:text-white">
      <div className="container py-3">
        <div className="flex items-center justify-between">
          <div>
            <a
              href="#"
              className="flex items-center justify-center gap-2 text-3xl font-bold "
            >
              <img src="/public/bookLogo.png" alt="" className="w-10" />
              Books
            </a>
          </div>
          <div className="flex items-center justify-between gap-4 ">
            <div>
              <div className="relative">
                <img
                  src="/assets/light-mode-button-X4OXHFfW.png"
                  alt=""
                  className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 opacity-100"
                />
                <img
                  src="/assets/dark-mode-button-85jBkhOs.png"
                  alt=""
                  className="w-12 cursor-pointer drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)] duration-300 "
                />
              </div>
            </div>
            <ul className="items-center hidden gap-4 sm:flex ">
              <li>
                <a
                  href="/#"
                  className="inline-block px-4 py-4 duration-200 hover:text-blue-400"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="inline-block px-4 py-4 duration-200 hover:text-blue-400"
                >
                  Best Seller
                </a>
              </li>
              <li className="relative cursor-pointer group">
                <a href="/#" className="flex h-[72px] items-center gap[2px]">
                  Quick Links
                  <span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 320 512"
                      className="transition duration-300 group-hover:rotate-180"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                    </svg>
                  </span>
                </a>
                <div className="absolute -left-9 z-[10] hidden group-hover:block text-black bg-white p-2 shadow-md w-[150px]">
                  <ul>
                    <li>
                      <a
                        href="/#"
                        className="inline-block w-full p-2 rounded-md hover:bg-blue-300"
                      >
                        Trending Books
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#"
                        className="inline-block w-full p-2 rounded-md hover:bg-blue-300"
                      >
                        Best Selling
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#"
                        className="inline-block w-full p-2 rounded-md hover:bg-blue-300"
                      >
                        Authors
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <button className="flex items-center gap-3 px-4 py-1 text-white duration-300 bg-blue-500 rounded-full hover:scale-105">
              Order
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 576 512"
                className="text-xl text-white cursor-pointer drop-shadow-sm"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
