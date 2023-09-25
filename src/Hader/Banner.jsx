

import './banner.css';
const Banner = () => {
  return (
    <div className="h-[600px] bg-sky-300 mt-12 flex justify-center items-center banner">
      <div className="space-y-10 content border-">
        <h1 className="text-5xl font-bold text-black">I Grow By Helping People In Need</h1>
        <div>
          <form>
            <div className="flex">
              <div className="relative w-full">
                <input
                  type="search"
                  id="search-dropdown"
                  className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                  placeholder="Search here......."
                  required
                />
                <button
                  type="submit"
                  className="absolute top-0 right-0 p-2.5 px-10 text-sm font-medium h-full text-white bg-[#FF444A] rounded-r-lg border  hover:bg-[#FF444A]  focus:outline-none focus:ring-blue-300 "
                >search</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
