import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="w-full flex flex-wrap justify-between px-5 lg:px-32 py-10 bg-slate-900">
      <form
        className="form w-full mb-10 lg:mb-0 lg:w-[25%]"
        name="contact"
        data-netlify="true"
        method="POST"
      >
        {/* Name */}
        <div className="form-control w-full mb-4">
          <div className="mb-1 text-sm text-white">Name:</div>
          <input
            className="w-full h-10 p-3 rounded-sm"
            type="text"
            name="sender-name"
            required
          />
        </div>

        {/* Email */}
        <div className="form-control w-full mb-4">
          <div className="mb-1 text-sm text-white">E-mail:</div>
          <input
            className="w-full h-10 p-3 rounded-sm"
            type="email"
            name="sender-email"
            required
          />
        </div>

        {/* Text */}
        <div className="form-control w-full mb-4">
          <div className="mb-1 text-sm text-white">Message:</div>
          <textarea
            className="w-full h-28 p-3 rounded-sm"
            name="sender-message"
            maxLength={50}
          ></textarea>
        </div>

        <button
          className="h-12 w-full flex items-center justify-center shadow rounded-sm bg-gradient-to-tr from-blue-600 to-blue-500 text-white"
          type="submit"
        >
          <div className="font-semibold mb-[2px] mr-1">Send Message</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
          </svg>
        </button>
      </form>

      <div className="w-full mb-10 lg:mb-0 lg:w-[25%]">
        <div className="text-xl text-slate-100 font-semibold">Address</div>
        <div className="text mb-5 text-slate-400">
          Plot 1019, <br />
          Gimbiya Street, Area 11, Garki, F.C.T
        </div>

        <div className="text-xl text-slate-100 font-semibold">Phone</div>
        <div className="text-slate-400">
          09051514444 <br /> 08089338283
        </div>
      </div>

      <div className="w-full lg:w-[25%]">
        <div className="text-xl text-slate-100 font-semibold">Socials</div>
        <Link className="text-slate-400" to="/">
          <div>Facebook</div>
        </Link>
        <Link className="text-slate-400" to="/">
          <div>Twitter</div>
        </Link>
        <Link className="text-slate-400" to="/">
          <div>Whatsapp</div>
        </Link>
        <div className="mt-10 text-slate-400 text-center lg:text-left">
          All rights reserved &copy; 2023
        </div>
      </div>
    </div>
  );
};

export default Footer;
