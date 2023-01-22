import { Link, NavLink } from "react-router-dom";
import facebookIcon from "../images/all/facebook.png";
import messageIcon from "../images/all/message.png";

const Header = () => {
  const activeDesktopNavStyle = { color: "blue", fontWeight: "600" };

  return (
    <div className="header w-full fixed top-0 left-0 z-20 bg-white">
      <div className="header-top h-20 lg:h-24 flex items-center lg:justify-between lg:border-b lg:px-32">
        {/* Mobile Nav */}
        <div className="lg:hidden mobile-navigation h-full">
          <div className="menu-btn h-full flex items-center pl-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>

        {/* Mobile & Desktop Logo */}
        <div className="logo grow lg:grow-0 h-8 lg:h-28 flex items-center justify-center lg:justify-start">
          {/* Mobile Logo */}
          <svg
            className="ml-[-24px] lg:ml-[0px] lg:hidden h-full"
            id="outputsvg"
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="114"
            viewBox="0 0 1470 840"
          >
            <g id="l1Hpgc9mSzh0qF4lsLumjhM" fill="rgb(37,60,136)">
              <g>
                <path
                  id="p17SB7h81W"
                  d="M 290 780 c 0 -52 -14 -57 -100 -36 -37 9 -71 16 -74 16 -3 0 -6 -16 -6 -35 0 -32 3 -35 43 -45 23 -6 62 -17 87 -23 l 45 -13 3 -78 c 2 -44 -1 -83 -6 -88 -5 -5 -44 0 -91 10 l -81 20 2 -172 3 -171 50 -12 c 364 -92 581 -143 592 -139 7 3 13 21 13 41 0 33 -2 35 -32 35 -18 0 -145 29 -283 63 l -250 63 0 95 0 94 30 -3 c 47 -5 55 -18 55 -88 l 0 -63 38 -10 c 134 -33 424 -91 432 -86 5 3 10 19 10 34 l 0 27 -195 44 -195 43 0 33 c 0 22 4 32 13 29 55 -19 351 -86 363 -81 8 3 14 19 14 40 0 29 -3 34 -22 33 -25 -1 -333 70 -358 83 -17 8 -26 145 -11 169 7 11 38 5 171 -28 89 -23 175 -41 191 -41 26 0 29 3 29 33 l 0 32 -163 39 c -239 58 -227 53 -227 81 l 0 25 195 0 195 0 0 35 0 35 -240 0 -240 0 0 -40 z "
                ></path>
              </g>
            </g>
            <g id="l6FoTiFX1bPsCJI1050naXn" fill="rgb(91,135,229)">
              <g>
                <path
                  id="p9q2PeMpX"
                  d="M 740 785 l 0 -35 193 -2 c 187 -3 192 -4 195 -24 3 -19 -12 -25 -192 -69 l -196 -47 0 -34 c 0 -19 5 -34 12 -34 10 0 91 20 253 61 22 6 55 15 74 21 23 7 35 7 40 -1 4 -5 6 -47 6 -93 l -1 -82 -29 -7 c -83 -20 -332 -82 -342 -85 -8 -2 -13 -19 -13 -40 0 -25 4 -35 12 -31 7 2 91 24 185 48 184 46 202 45 189 -5 -4 -16 -15 -27 -29 -30 -12 -3 -71 -16 -132 -30 -60 -13 -136 -30 -167 -36 -57 -11 -58 -12 -58 -46 0 -29 3 -34 18 -31 9 3 73 17 142 32 247 52 305 67 312 78 4 7 8 40 8 74 l 0 62 43 11 c 23 6 56 14 72 18 l 30 8 2 149 c 2 83 -1 156 -5 162 -6 10 -20 10 -66 -2 -31 -8 -61 -15 -66 -15 -5 0 -10 19 -12 43 l -3 42 -237 3 -238 2 0 -35 z  m 536 -170 c 3 -25 3 -65 0 -90 -6 -39 -10 -45 -32 -45 -24 0 -24 2 -24 84 0 83 4 93 37 95 7 1 15 -19 19 -44 z "
                ></path>
                <path
                  id="pYCRpg5pp"
                  d="M 1115 174 c -116 -30 -247 -62 -292 -72 l -83 -17 0 -38 c 0 -34 2 -38 21 -32 23 8 470 121 539 137 56 13 70 24 70 54 0 33 -9 32 -255 -32 z "
                ></path>
              </g>
            </g>
          </svg>

          {/* Desktop Logo */}
          <svg
            className="hidden lg:block img-fluid h-full"
            id="outputsvg"
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="144"
            viewBox="0 0 1470 840"
          >
            <g id="l1Hpgc9mSzh0qF4lsLumjhM" fill="rgb(37,60,136)">
              <g>
                <path
                  id="p17SB7h81W"
                  d="M 290 780 c 0 -52 -14 -57 -100 -36 -37 9 -71 16 -74 16 -3 0 -6 -16 -6 -35 0 -32 3 -35 43 -45 23 -6 62 -17 87 -23 l 45 -13 3 -78 c 2 -44 -1 -83 -6 -88 -5 -5 -44 0 -91 10 l -81 20 2 -172 3 -171 50 -12 c 364 -92 581 -143 592 -139 7 3 13 21 13 41 0 33 -2 35 -32 35 -18 0 -145 29 -283 63 l -250 63 0 95 0 94 30 -3 c 47 -5 55 -18 55 -88 l 0 -63 38 -10 c 134 -33 424 -91 432 -86 5 3 10 19 10 34 l 0 27 -195 44 -195 43 0 33 c 0 22 4 32 13 29 55 -19 351 -86 363 -81 8 3 14 19 14 40 0 29 -3 34 -22 33 -25 -1 -333 70 -358 83 -17 8 -26 145 -11 169 7 11 38 5 171 -28 89 -23 175 -41 191 -41 26 0 29 3 29 33 l 0 32 -163 39 c -239 58 -227 53 -227 81 l 0 25 195 0 195 0 0 35 0 35 -240 0 -240 0 0 -40 z "
                ></path>
              </g>
            </g>
            <g id="l6FoTiFX1bPsCJI1050naXn" fill="rgb(91,135,229)">
              <g>
                <path
                  id="p9q2PeMpX"
                  d="M 740 785 l 0 -35 193 -2 c 187 -3 192 -4 195 -24 3 -19 -12 -25 -192 -69 l -196 -47 0 -34 c 0 -19 5 -34 12 -34 10 0 91 20 253 61 22 6 55 15 74 21 23 7 35 7 40 -1 4 -5 6 -47 6 -93 l -1 -82 -29 -7 c -83 -20 -332 -82 -342 -85 -8 -2 -13 -19 -13 -40 0 -25 4 -35 12 -31 7 2 91 24 185 48 184 46 202 45 189 -5 -4 -16 -15 -27 -29 -30 -12 -3 -71 -16 -132 -30 -60 -13 -136 -30 -167 -36 -57 -11 -58 -12 -58 -46 0 -29 3 -34 18 -31 9 3 73 17 142 32 247 52 305 67 312 78 4 7 8 40 8 74 l 0 62 43 11 c 23 6 56 14 72 18 l 30 8 2 149 c 2 83 -1 156 -5 162 -6 10 -20 10 -66 -2 -31 -8 -61 -15 -66 -15 -5 0 -10 19 -12 43 l -3 42 -237 3 -238 2 0 -35 z  m 536 -170 c 3 -25 3 -65 0 -90 -6 -39 -10 -45 -32 -45 -24 0 -24 2 -24 84 0 83 4 93 37 95 7 1 15 -19 19 -44 z "
                ></path>
                <path
                  id="pYCRpg5pp"
                  d="M 1115 174 c -116 -30 -247 -62 -292 -72 l -83 -17 0 -38 c 0 -34 2 -38 21 -32 23 8 470 121 539 137 56 13 70 24 70 54 0 33 -9 32 -255 -32 z "
                ></path>
              </g>
            </g>
          </svg>
          {/* Logo text */}
          <div className="leading-none lg:leading-6 text-sm md:text-md lg:text-2xl font-bold mt-[5px] lg:ml-2 text-[#2a5bc5]">
            SEHCTOR <br /> ARCHITECTS
          </div>
        </div>

        {/* Desktop Contacts */}
        <div className="header-contacts h-full hidden lg:flex items-center">
          <div className="contact-item flex items-center mr-4">
            <div className="icon h-fit text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
            </div>
            <div className="icon-text ml-2  text-sm leading-4">
              <div className="icont-text-top">08167363938</div>
              <div className="icont-text-bottom text-gray-500">
                sehctorarchitects@gmail.com
              </div>
            </div>
          </div>

          <div className="contact-item flex items-center mr-4">
            <div className="icon h-fit text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </div>
            <div className="icon-text ml-2 text-sm leading-4">
              <div className="icont-text-top">Plot 1019, Gimbiya St.</div>
              <div className="icont-text-bottom text-gray-500">
                Area 11, Garki, FCT
              </div>
            </div>
          </div>

          <div className="contact-item flex items-center mr-4">
            <div className="icon h-fit text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="icon-text ml-2 text-sm leading-4">
              <div className="icont-text-top">Monday - Friday</div>
              <div className="icont-text-bottom text-gray-500">
                8:00AM - 3:00PM
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden h-16 lg:flex items-center justify-between header-bottom border-b lg:px-32">
        {/* Nav Links */}
        <ul className="nav-links flex items-center text-gray-500">
          <li className="mr-5">
            <NavLink
              to={"/"}
              className="hover:text-black"
              style={({ isActive }) =>
                isActive ? activeDesktopNavStyle : undefined
              }
            >
              HOME
            </NavLink>
          </li>
          <li className="mr-5">
            <NavLink
              to={"/about"}
              className="hover:text-black"
              style={({ isActive }) =>
                isActive ? activeDesktopNavStyle : undefined
              }
            >
              ABOUT US
            </NavLink>
          </li>
          <li className="mr-5">
            <NavLink
              to={"/services"}
              className="hover:text-black"
              style={({ isActive }) =>
                isActive ? activeDesktopNavStyle : undefined
              }
            >
              OUR SERVICES
            </NavLink>
          </li>
          <li className="mr-5">
            <NavLink
              to={"/gallery"}
              className="hover:text-black"
              style={({ isActive }) =>
                isActive ? activeDesktopNavStyle : undefined
              }
            >
              GALLERY
            </NavLink>
          </li>
          <li className="mr-5">
            <NavLink
              to={"/contact"}
              className="hover:text-black"
              style={({ isActive }) =>
                isActive ? activeDesktopNavStyle : undefined
              }
            >
              CONTACT
            </NavLink>
          </li>

          <li className="mr-5">
            <a href={"#contact"} className="hover:text-black">
              MESSAGE US
            </a>
          </li>
        </ul>

        {/* Nav Socials */}
        <div className="social flex h-full">
          <div className="instagram h-full flex items-center border-x px-6">
            <Link to="/contact">
              <img
                className="h-[32px]"
                src={facebookIcon}
                alt="facebook icon png"
              />
            </Link>
          </div>
          <div className="facebook h-full flex items-center border-r px-6">
            <a
              href="https://facebook.com/jerrye8"
              rel="noreferrer"
              target="_blank"
            >
              <img
                className="h-[32px]"
                src={messageIcon}
                alt="message icon png"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
