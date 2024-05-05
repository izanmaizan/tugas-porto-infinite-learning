import React from "react";
import izanfilm from "../assets/portfolio/izanfilm.png";
import logindesign from "../assets/portfolio/logindesign.png";
import zanfood from "../assets/portfolio/zanfood.png";
import zerumov from "../assets/portfolio/zerumov.png";
import portotailwind from "../assets/portfolio/portotailwind.png";
import bookinghotel from "../assets/portfolio/bookinghotel.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: izanfilm,
      link: 'https://movies-react-zans.vercel.app/',
      repo: 'https://github.com/izanmaizan/MoviesReact'
    },
    {
      id: 2,
      src: logindesign,
      link: 'https://izanmaizan.github.io/Portofolio-4-Navbar-Form-Login-Register/',
      repo: 'https://github.com/izanmaizan/Portofolio-4-Navbar-Form-Login-Register'
    },
    {
      id: 3,
      src: bookinghotel,
      link: 'https://restapi-crud-iota.vercel.app/',
      repo: 'https://github.com/izanmaizan/project-restapi-refa-javami-kurnia/'
    },
    {
      id: 4,
      src: zanfood,
      link: 'https://izanmaizan.github.io/Implementasi-Web-Food-Diary-dari-Proyek-Figma/',
      repo: 'https://github.com/izanmaizan/Implementasi-Web-Food-Diary-dari-Proyek-Figma'
    },
    {
      id: 5,
      src: zerumov,
      link: 'https://zerumov-react-api.vercel.app/',
      repo: 'https://github.com/izanmaizan/zerumov-reactAPI'
    },
    {
      id: 6,
      src: portotailwind,
      link: 'https://izanmaizan.github.io/web-portolofio-simple-taildwindcss/',
      repo: 'https://github.com/izanmaizan/web-portolofio-simple-taildwindcss'
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Lihat beberapa Portofolio yang telah saya buat.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(link, '_blank')}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
