function Home() {
  return (
    <div className="sm:px-10 mt-20">
      <div className="flex flex-col sm:flex-row sm:gap-10 p-10 sm:p-20 items-center justify-center sm:shadow-md sm:shadow-orange-500">
        <div className="sm:mt-40 flex flex-col gap-2 sm:gap-5 items-center justify-center text-center pb-20">
          <p className="text-[2rem] sm:text-[3.5rem] font-bold sm:font-extrabold text-orange-600">
            Hi, I&apos;m Vansh
          </p>
          <p className="text-2xl sm:text-3xl font-bold sm:font-extrabold">
            I&apos;m a Web Developer, Android Developer and a Gamer
          </p>
        </div>
        <img
          src="profile.jpg"
          className="hidden sm:block h-[400px] w-[400px]"
        />
        <img src="profile.png" className="sm:hidden h-[200px] w-[200px] shadow-lg shadow-orange-500 rounded-full" />
      </div>
    </div>
  );
}

export default Home
