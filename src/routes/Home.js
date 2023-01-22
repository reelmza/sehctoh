import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Swiper
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

// Featured project images
import featuredProjectA from "../images/hero/Slide-A.webp";
import featuredProjectB from "../images/featured-projects/project-B.jpeg";
import featuredProjectC from "../images/featured-projects/project-C.jpeg";

// Services vectors
import crane from "../images/services/crane.png";
import sketch from "../images/services/sketch.png";
import survey from "../images/services/survey.png";

// Patner images
import aviareLogo from "../images/partners/aviare-logo.jpeg";
import aerokeysLogo from "../images/partners/aerokeys-logo.png";
import oayastechLogo from "../images/partners/oayastech-logo.png";
import walkiyaLogo from "../images/partners/walkiya-logo.svg";

// All pictures
import jerry from "../images/all/jerry.png";
import niasse from "../images/all/niasse.jpg";
import kudla from "../images/all/kudla.jpg";
import peter from "../images/all/peter.jpg";

const Home = () => {
  return (
    <div className="home">
      {/* Hero section*/}
      <Swiper
        className="hero h-[45vh] lg:h-[85vh] mb-20"
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {/* Slide A */}
        <SwiperSlide className="slide-a h-full w-full px-5 lg:px-32">
          <div className="h-full w-[100vw] mx-[-20px] lg:mx-[-128px] px-5 lg:px-[128px] bg-[rgba(0,0,0,0.6)] text-white flex flex-col justify-center items-center">
            <div className="title mb-5 lg:mb-16 text-4xl lg:text-6xl font-semibold text-center">
              Satisfied Local & <br /> Global Clients
            </div>
            <Link to={"/clients"}>
              <button className="h-12 px-8 lg:px-10 flex items-center shadow rounded-sm bg-blue-600">
                <div className="mr-1 font-semibold">Our Clients</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </SwiperSlide>

        {/* Slide B */}
        <SwiperSlide className="slide-b h-full w-full px-5 lg:px-32">
          <div className="h-full w-[100vw] mx-[-20px] lg:mx-[-128px] px-5 lg:px-[128px] bg-[rgba(0,0,0,0.6)] text-white flex flex-col justify-center items-center">
            <div className="title mb-5 lg:mb-16 text-4xl lg:text-6xl font-semibold text-center">
              Best Architectural
              <br /> Services
            </div>
            <Link to={"/services"}>
              <button className="h-12 px-8 lg:px-10 flex items-center shadow rounded-sm bg-blue-600">
                <div className="mr-1 font-semibold">Our Services</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </SwiperSlide>

        {/* Slide C */}
        <SwiperSlide className="slide-c h-full w-full px-5 lg:px-32">
          <div className="h-full w-[100vw] mx-[-20px] lg:mx-[-128px] px-5 lg:px-[128px] bg-[rgba(0,0,0,0.6)] text-white flex flex-col justify-center items-center">
            <div className="title mb-5 lg:mb-16 text-4xl lg:text-6xl font-semibold text-center">
              Immpresive <br /> Statistics Record
            </div>
            <Link to={"/projects"}>
              <button className="h-12 px-8 lg:px-10 flex items-center shadow rounded-sm bg-blue-600">
                <div className="mr-1 font-semibold">Our Projects</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Projects section */}
      <div className="projects-overview mb-10 lg:mb-20" id="projects">
        <div className="mb-8 px-5 lg:px-32 text-3xl font-semibold text-center">
          Sehctor Projects
        </div>
        <div className="projects flex flex-wrap items-center justify-between px-5 lg:px-32 ">
          {/* Project  1*/}
          <div className="w-[100%] lg:w-[32%] mb-10 lg:mb-0 p-5 py-10 lg:p-8 rounded shadow-lg bg-white">
            {/* Project Image */}
            <div className="w-full mb-5 overflow-hidden">
              <img
                className="rounded-sm aspect-video"
                src={featuredProjectA}
                alt="project"
              />
            </div>

            {/* Project Text & Button */}
            <div>
              <div className="text-xl lg:text-2xl font-semibold mb-5">
                Nirvana Gardens
              </div>
              <div className="leading-[1.5] mb-8 text-gray-500">
                Situated in Karu, FCT Nirvana gardens provides a leisure spot
                for hundreds of daily customers.
              </div>
              <Link className="w-full" to={"/projects"}>
                <button className="h-12 w-full flex items-center justify-center shadow rounded-sm bg-gradient-to-tr from-blue-600 to-blue-500 text-white">
                  <div className="font-semibold">See Project</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>

          {/* Project  2*/}
          <div className="w-[100%] lg:w-[32%] mb-10 lg:mb-0 p-5 py-10 lg:p-8 rounded shadow-lg bg-white">
            {/* Project Image */}
            <div className="w-full mb-5 overflow-hidden">
              <img
                className="rounded-sm aspect-video"
                src={featuredProjectB}
                alt="project"
              />
            </div>

            {/* Project Text & Button */}
            <div>
              <div className="text-xl lg:text-2xl font-semibold mb-5">
                Niasse Mansions
              </div>
              <div className="leading-[1.5] mb-8 text-gray-500">
                Owned by Politician Ahmed Khalifa Niasse, this structure boasts
                twenty rooms and two halls.
              </div>
              <Link className="w-full" to={"/projects"}>
                <button className="h-12 w-full flex items-center justify-center shadow rounded-sm bg-gradient-to-tr from-blue-600 to-blue-500 text-white">
                  <div className="font-semibold">See Project</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>

          {/* Project  3*/}
          <div className="w-[100%] lg:w-[32%] mb-10 lg:mb-0 p-5 py-10 lg:p-8 rounded shadow-lg bg-white">
            {/* Project Image */}
            <div className="w-full mb-5 overflow-hidden">
              <img
                className="rounded-sm aspect-video"
                src={featuredProjectC}
                alt="project"
              />
            </div>

            {/* Project Text & Button */}
            <div>
              <div className="text-xl lg:text-2xl font-semibold mb-5">
                Q-Manor Asokoro
              </div>
              <div className="leading-[1.5] mb-8 text-gray-500">
                Q-Manor is an 8 blocks estate of 4 bedroom duplexes in Asokoro,
                FCT in collaboration with Aviare Ltd.
              </div>
              <Link className="w-full" to={"/projects"}>
                <button className="h-12 w-full flex items-center justify-center shadow rounded-sm bg-gradient-to-tr from-blue-600 to-blue-500 text-white">
                  <div className="font-semibold">See Project</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services section */}
      <div className="services mb-20" id="services">
        <div className="mb-8 px-5 lg:px-32 text-3xl font-semibold text-center">
          Sehctor Services
        </div>

        <div className="flex flex-wrap items-center justify-between px-5 lg:px-32">
          {/* Service  1*/}
          <div className="w-[100%] lg:w-[30%] flex flex-col items-center p-5 lg:p-8 rounded bg-white">
            {/* Project Image */}
            <div className="h-[64px] mb-5 overflow-hidden">
              <img
                className="rounded-sm aspect-square"
                src={crane}
                alt="project"
              />
            </div>

            {/* Project Text & Button */}
            <div className="text-center">
              <div className="text-xl lg:text-2xl font-semibold mb-5">
                Construction
              </div>
              <div className="leading-[1.5] mb-8 text-gray-500">
                Dedicated to delivering quality buildings whether on a small
                scale or on industry standard.
              </div>
            </div>
          </div>

          {/* Service  2*/}
          <div className="w-[100%] lg:w-[30%] flex flex-col items-center  p-5 lg:p-8 rounded bg-white">
            {/* Project Image */}
            <div className="h-[64px] mb-5 overflow-hidden">
              <img
                className="rounded-sm aspect-square"
                src={sketch}
                alt="project"
              />
            </div>

            {/* Project Text & Button */}
            <div className="text-center">
              <div className="text-xl lg:text-2xl font-semibold mb-5">
                Building Plans
              </div>
              <div className="leading-[1.5] mb-8 text-gray-500">
                Delivering modern and accesible building plans to our clients is
                top priority.
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="w-[100%] lg:w-[30%]  flex flex-col items-center  p-5  lg:p-8 rounded bg-white">
            {/* Project Image */}
            <div className="h-[64px] mb-5 overflow-hidden">
              <img
                className="rounded-sm aspect-square"
                src={survey}
                alt="project"
              />
            </div>

            {/* Project Text & Button */}
            <div className="text-center">
              <div className="text-xl lg:text-2xl font-semibold mb-5">
                Structural Survey
              </div>
              <div className="leading-[1.5] mb-8 text-gray-500">
                Inspecting new and renovated buildings to make sure it's up to
                standard.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clients */}
      <div className="bg-slate-900 text-white py-20 px-5 lg:px-32 mb-10 lg:mb-20">
        <div className="pb-20 text-3xl font-semibold text-center">
          Client Feedbacks
        </div>

        <div className="clients flex flex-wrap items-start justify-between">
          {/* Client 1 */}
          <div className="flex flex-col justify-between w-full lg:w-[30%] min-h-[340px] p-10 border rounded-lg mb-10 lg:mb-0">
            <div className="font-semibold text-xl">Work Quality</div>
            <div className="text-slate-300">
              Sehctor architects delivers nothing but the best standards, will
              recommend them for any construction project.
            </div>
            <div className="flex items-center">
              <div className="h-[48px] mr-5">
                <img
                  className="h-full rounded-full"
                  src={niasse}
                  alt="khalifa niasse"
                />
              </div>
              <div className="text-slate-300 italic leading-[1]">
                <div>Ahmed Khalifa Niasse</div>
                <div className="text-sm">Senegaleese Politician</div>
              </div>
            </div>
          </div>

          {/* Client 2 */}
          <div className="flex flex-col justify-between w-full lg:w-[30%] min-h-[340px] mb-10 lg:mb-0 p-10 border rounded-lg">
            <div className="font-semibold text-xl">Professionalism</div>
            <div className="text-slate-300">
              Working with sehctor architects, you wont have to ever bother
              about getting anything less than the industry standard, they are
              always professional.
            </div>
            <div className="flex items-center">
              <div className="h-[48px] mr-5">
                <img
                  className="h-full rounded-full"
                  src={kudla}
                  alt="khalifa niasse"
                />
              </div>
              <div className="text-slate-300 italic leading-[1]">
                <div>Satumari Kudla</div>
                <div className="text-sm">C.E.O Aerokeys Nigeria</div>
              </div>
            </div>
          </div>

          {/* Client 2 */}
          <div className="flex flex-col justify-between w-full lg:w-[30%] min-h-[340px] p-10  border rounded-lg">
            <div className="font-semibold text-xl">High Work Rate</div>
            <div className="text-slate-300">
              Sehctor architects have delivered all the contracts awarded to us
              with precise accuracy and dedication, will work with them at any
              chance.
            </div>
            <div className="flex items-center">
              <div className="h-[48px] mr-5">
                <img
                  className="h-full rounded-full"
                  src={peter}
                  alt="khalifa niasse"
                />
              </div>
              <div className="text-slate-300 italic leading-[1]">
                <div>Dr. Peter Oaya David</div>
                <div className="text-sm">C.E.O Oayatech Nigeria</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Owner */}
      <div className="owner w-full flex flex-wrap items-center justify-between mb-20 px-5 lg:px-32">
        <div className="w-full lg:w-[35%] mb-10 lg:mb-0">
          <img src={jerry} className="w-full rounded-full" alt="user" />
        </div>
        <div className="w-full lg:w-[55%]">
          <div className="font-semibold text-4xl lg:text-6xl mb-10">
            Arc. Emmanuel Jerry
          </div>
          <div className="mb-10 lg:text-xl text-gray-500 leading-[1.5]">
            Sehctor architects is managed and headed by Arc. Emmanuel Jerry and
            colleagues, he hails from Adamawa state, Nigeria and so far has had
            an impressive career locally and accross the country.
          </div>

          <Link to={"/"}>
            <button className="h-12 w-[50%] lg:w-[40%] flex items-center justify-center shadow rounded-sm bg-gradient-to-tr from-blue-600 to-blue-500 text-white">
              <div className="font-semibold mr-1">Connect</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M2 10c0-3.967 3.69-7 8-7 4.31 0 8 3.033 8 7s-3.69 7-8 7a9.165 9.165 0 01-1.504-.123 5.976 5.976 0 01-3.935 1.107.75.75 0 01-.584-1.143 3.478 3.478 0 00.522-1.756C2.979 13.825 2 12.025 2 10z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>

      {/* Patners section*/}
      <div className="patners w-full mb-20 px-5 lg:px-32">
        <div className="mb-8 px-5 lg:px-32 text-3xl font-semibold text-center">
          Sehctor Patners
        </div>
        <div className="w-full flex flex-wrap items-center justify-between">
          <img
            className="lg:mb-0 h-8 lg:h-16"
            src={aviareLogo}
            alt="Aviare consult logo"
          />
          <img
            className="lg:mb-0 h-8 lg:h-16"
            src={walkiyaLogo}
            alt="Walkiya limited logo"
          />
          <img
            className="lg:mb-0 h-8 lg:h-16"
            src={oayastechLogo}
            alt="Oayastech Nigeria logo"
          />
          <img
            className="lg:mb-0 h-8 lg:h-16 mt-10 lg:mt-0"
            src={aerokeysLogo}
            alt="Aerokeys logo"
          />
        </div>
      </div>

      {/* Footer */}
    </div>
  );
};

export default Home;
