

import './banner.css';
const Banner = () => {
  return (
    <div className="h-[600px]  mt-12 flex justify-center items-center banner mb-44  ">
      <div className="space-y-10 content ">
        <h1 className="text-5xl font-bold text-black">I Grow By Helping People In Need</h1>
        <div>
          <form>
            <div className="flex justify-center ">
              <div className="relative w-8/12">
                <input
                  type="search"
                  id="search-dropdown"
                  className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-black border-l-1 border border-black   dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Search here......."
                  required
                />
                <button
                  type="submit"
                  className="absolute top-0 right-0 text-base  px-10  font-semibold h-full text-white bg-[#FF444A] rounded-r-lg border  hover:bg-[#FF444A]   "
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
