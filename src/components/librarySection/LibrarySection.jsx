const LibrarySection = () => {
  return (
    <>
      <div className="py-10">
        <div className="container">
          <div className="grid items-center grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <img
                src="library-section-img.jpg"
                alt=""
                className="max-w-[400px] block mx-auto h-[350px] w-full drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
              />
            </div>
            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <h1 className="text-3xl font-bold sm:text-4xl">
                Library at your fingertips
              </h1>
              <p className="text-sm leading-5 tracking-wide text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                odio minus enim sint quia architecto distinctio quisquam autem
                suscipit praesentium?
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="w-12 h-12 p-4 text-4xl rounded-full shadow-sm bg-violet-100 dark:bg-violet-400"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/sv"
                  >
                    <path
                      fill="none"
                      strokeWidth="2"
                      d="M7,11 L7,6 C7,3 9,1 12,1 C15,1 17,3 17,6 L17,11 M12,23 C15.8659932,23 19,19.8659932 19,16 C19,12.1340068 15.8659932,9 12,9 C8.13400675,9 5,12.1340068 5,16 C5,19.8659932 8.13400675,23 12,23 Z M12,15 L12,19 M12,16 C12.5522847,16 13,15.5522847 13,15 C13,14.4477153 12.5522847,14 12,14 C11.4477153,14 11,14.4477153 11,15 C11,15.5522847 11.4477153,16 12,16 Z"
                    ></path>
                  </svg>
                  <p>Quality Books</p>
                </div>
                <div className="flex items-center gap-4">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="w-12 h-12 p-4 text-4xl bg-orange-100 rounded-full shadow-sm dark:bg-orange-400"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="none"
                      strokeWidth="2"
                      d="M7,11 L7,6 C7,3 9,1 12,1 C15,1 17,3 17,6 L17,11 M12,23 C15.8659932,23 19,19.8659932 19,16 C19,12.1340068 15.8659932,9 12,9 C8.13400675,9 5,12.1340068 5,16 C5,19.8659932 8.13400675,23 12,23 Z M12,15 L12,19 M12,16 C12.5522847,16 13,15.5522847 13,15 C13,14.4477153 12.5522847,14 12,14 C11.4477153,14 11,14.4477153 11,15 C11,15.5522847 11.4477153,16 12,16 Z"
                    ></path>
                  </svg>
                  <p>Fast Delivery</p>
                </div>
                <div className="flex items-center gap-4">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="w-12 h-12 p-4 text-4xl bg-green-100 rounded-full shadow-sm dark:bg-green-400"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="none"
                      strokeWidth="2"
                      d="M7,11 L7,6 C7,3 9,1 12,1 C15,1 17,3 17,6 L17,11 M12,23 C15.8659932,23 19,19.8659932 19,16 C19,12.1340068 15.8659932,9 12,9 C8.13400675,9 5,12.1340068 5,16 C5,19.8659932 8.13400675,23 12,23 Z M12,15 L12,19 M12,16 C12.5522847,16 13,15.5522847 13,15 C13,14.4477153 12.5522847,14 12,14 C11.4477153,14 11,14.4477153 11,15 C11,15.5522847 11.4477153,16 12,16 Z"
                    ></path>
                  </svg>
                  <p>Easy Payment method</p>
                </div>
                <div className="flex items-center gap-4">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="w-12 h-12 p-4 text-4xl bg-yellow-100 rounded-full shadow-sm dark:bg-yellow-400"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="none"
                      strokeWidth="2"
                      d="M7,11 L7,6 C7,3 9,1 12,1 C15,1 17,3 17,6 L17,11 M12,23 C15.8659932,23 19,19.8659932 19,16 C19,12.1340068 15.8659932,9 12,9 C8.13400675,9 5,12.1340068 5,16 C5,19.8659932 8.13400675,23 12,23 Z M12,15 L12,19 M12,16 C12.5522847,16 13,15.5522847 13,15 C13,14.4477153 12.5522847,14 12,14 C11.4477153,14 11,14.4477153 11,15 C11,15.5522847 11.4477153,16 12,16 Z"
                    ></path>
                  </svg>
                  <p>Get offers on books</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LibrarySection;
