import { Link } from 'react-router-dom'

function Work() {
  return (
    <div className="flex flex-col items-center justify-center pt-40 pb-20">
      <div className="w-[250px] h-[360px] sm:w-[800px] bg-white flex flex-col sm:flex-row gap-10 items-center shadow-lg shadow-orange-600">
        <img
          src="/work1.png"
          alt=""
          className="w-[230px] h-[200px] sm:w-[400px] sm:h-[300px] my-4 sm:mx-7 shadow-md shadow-black"
        />

        <div className="text-black text-center">
          <p className="text-xl font-bold sm:text-2xl sm:font-extrabold">Ecommerce Website</p>
          <Link
            to="https://github.com/Vansh2744/Ecommerce-Website"
            className="font-bold text-orange-400">
            View Project
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Work
