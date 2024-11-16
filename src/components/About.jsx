function About() {
  const skills = [
    { image: "/react.jpg", name: "React", level: 8 },
    { image: "/next.jpg", name: "Next.js", level: 5 },
    { image: "/native.png", name: "React Native", level: 5 },
    { image: "/mongodb.png", name: "MongoDB", level: 7 },
    { image: "/tailwind.png", name: "Tailwind CSS", level: 8 },
  ];

  const certificates = [
    {
      name: "WEBATHON",
      image: "hackathon.png",
      description:
        "Collaborated in fast-paced hackathons to design and develop solutions to real-world challenges within 24 hours. Successfully worked with teams to create prototypes and minimum viable products, applying skills in rapid problem-solving, teamwork, and technology. Presented projects to judges, receiving valuable feedback and recognition. Gained hands-on experience with new tools, enhancing technical and interpersonal skills while networking with industry professionals and peers.",
      url: "https://certificate.givemycertificate.com/c/bfa503f0-2e73-4cf2-a161-762a70cc8e05",
    },
    {
      name: "INTERNSHIP TRAINING",
      image: "intern.png",
      description:
        "During the summer internship, I enhanced my skills in web development by working on various tasks and projects. I focused on improving my knowledge in front-end and back-end development, applying concepts learned to real-world applications. I developed a To-Do List application using Express.js. Additionally, I worked with React and Vite, building responsive and dynamic user interfaces and integrating Tailwind CSS for efficient styling.",
      url: "https://online.codingblocks.com/app/certificates/CBOL-302125-74d519d3",
    },
  ];

  return (
    <div className="py-28 flex flex-col items-center sm:py-36 sm:px-32 h-full">
      <h1 className="text-3xl sm:text-5xl font-bold mb-6 sm:mb-10">SKILLS</h1>
      <div className="flex flex-col sm:grid sm:grid-cols-2 gap-10 sm:gap-20 h-full">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex sm:flex-row h-[100px] w-[260px] sm:h-[230px] sm:w-[600px] bg-slate-600 gap-5 shadow-md shadow-orange-500 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-orange-500 sm:hover:shadow-xl sm:hover:shadow-orange-500">
            <img
              src={skill.image}
              alt={`${skill.name} Logo`}
              className="h-[100px] w-[100px] sm:h-[230px] sm:w-[230px]"
            />
            <div className="flex flex-col sm:gap-5 justify-center pr-5">
              <h1 className="sm:text-3xl font-bold text-orange-600">
                {skill.name}
              </h1>
              <div>
                <h1 className="font-bold">Skill Level</h1>
                <input
                  type="range"
                  max={10}
                  min={1}
                  value={skill.level}
                  readOnly
                  aria-label={`Skill level for ${skill.name}`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="text-white w-[250px] sm:w-[900px] mt-24" />
      <h1 className="text-3xl sm:text-5xl font-bold mt-10 sm:mt-20 my-7 sm:my-10 sm:mb-20">
        CERTIFICATIONS
      </h1>
      <div className="flex flex-col gap-20">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-gray-600 h-[340px] w-[250px] sm:h-[500px] sm:w-[1000px] sm:pr-10 flex flex-col sm:flex-row items-center justify-center shadow-lg hover:shadow-orange-500 sm:shadow-xl sm:hover:shadow-orange-500 gap-10 sm:gap-10">
            <img
              src={cert.image}
              alt={`${cert.name} Certificate`}
              className="h-[220px] w-[220px] sm:h-[460px] sm:w-[460px] sm:ml-[20px] sm:shadow-md sm:shadow-black transition-all delay-300 ease-in-out scale-105"
            />
            <div className="flex flex-col px-5 sm:gap-10">
              <h1 className="sm:text-3xl font-extrabold text-orange-600">
                {cert.name}
              </h1>
              <p className="hidden sm:block sm:text-xl">{cert.description}</p>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 bg-slate-300 sm:w-40 text-center rounded-md shadow-sm shadow-black hover:bg-slate-200">
                Visit Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
