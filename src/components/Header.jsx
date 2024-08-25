import Search from "./Search";

const Header = () => {
  return (
    <div className="parent " style={{ background: "#000000" }}>
      <div className="heade-parent  flex justify-between p-1">
        <span>
          <svg
            fill="#ffffff"
            width="60px"
            height="60px"
            viewBox="-6.5 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>spotify</title>
            <path d="M13.2 20.84c-0.2 0-0.4-0.080-0.56-0.2-1.84-1.6-5.8-1.12-7.2-0.84-0.44 0.12-0.92-0.2-1-0.64-0.12-0.44 0.2-0.88 0.64-1 0.24-0.040 5.8-1.24 8.64 1.2 0.36 0.32 0.4 0.84 0.080 1.2-0.12 0.16-0.36 0.28-0.6 0.28zM14.2 18.44c-0.16 0-0.32-0.040-0.48-0.16-3.36-2.4-8.48-1.080-8.52-1.080-0.44 0.12-0.92-0.16-1.040-0.6s0.16-0.92 0.6-1.040c0.24-0.080 5.92-1.56 9.96 1.32 0.36 0.28 0.48 0.8 0.2 1.16-0.2 0.28-0.44 0.4-0.72 0.4zM15.24 15.72c-0.16 0-0.32-0.040-0.48-0.16-4.44-2.96-10.040-1.040-10.12-1.040-0.44 0.16-0.88-0.080-1.040-0.52s0.080-0.92 0.52-1.080c0.28-0.080 6.48-2.2 11.6 1.24 0.4 0.24 0.48 0.76 0.24 1.16-0.2 0.24-0.48 0.4-0.72 0.4zM9.6 25.6c-5.28 0-9.6-4.32-9.6-9.6s4.32-9.6 9.6-9.6 9.6 4.32 9.6 9.6-4.32 9.6-9.6 9.6zM9.6 8.080c-4.36 0-7.92 3.56-7.92 7.92s3.56 7.92 7.92 7.92 7.92-3.56 7.92-7.92-3.56-7.92-7.92-7.92z"></path>
          </svg>
        </span>

        <div className="flex items-center text-center w-4/12 ml-11">
          <span
            className="w-12 h-12 mt-1 mr-1  rounded-full px-1 py-2 items-center text-center"
            style={{ background: "#1f1f1f" }}
          >
            <svg
              fill="#ffffff"
              data-encore-id="icon"
              role="img"
              width="32px"
              height="35px"
              aria-hidden="true"
              viewBox="-6.5 0 32 32"
            >
              <path d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z"></path>
            </svg>
          </span>

          {/* search button */}
          <Search></Search>
        </div>

        <div className="flex justify-between items-center text-center me-1">
          <span>
            <a
              className="text-black  rounded-full px-5 py-2 font-medium cursor-pointer"
              style={{ background: "#ffffff" }}
            >
              Explore Premium
            </a>
          </span>

          <span className="px-5 flex justify-between items-center text-center">
            <svg
              className="rounded-full"
              stroke="#ffffff"
              width="20px"
              height="20px"
              data-encore-id="icon"
              role="img"
              aria-hidden="true"
              viewBox="0 0 16 16"
            >
              <path d="M4.995 8.745a.75.75 0 0 1 1.06 0L7.25 9.939V4a.75.75 0 0 1 1.5 0v5.94l1.195-1.195a.75.75 0 1 1 1.06 1.06L8 12.811l-.528-.528a.945.945 0 0 1-.005-.005L4.995 9.805a.75.75 0 0 1 0-1.06z"></path>
              <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13z"></path>
            </svg>
            <a className="text-white font-medium hover:underline ml-2">
              Install App
            </a>
          </span>
          <span className="flex relative mr-4">
            <span className="bg-sky-300 h-2 w-2 rounded-full absolute ml-6"></span>
            <svg
              className="rounded-md"
              stroke="#ffffff"
              stroke-width="0.5"
              width="25px"
              height="25px"
              data-encore-id="icon"
              role="img"
              aria-hidden="true"
              viewBox="0 0 16 16"
              class="Svg-sc-ytk21e-0 dYnaPI"
            >
              <path d="M8 1.5a4 4 0 0 0-4 4v3.27a.75.75 0 0 1-.1.373L2.255 12h11.49L12.1 9.142a.75.75 0 0 1-.1-.374V5.5a4 4 0 0 0-4-4zm-5.5 4a5.5 5.5 0 0 1 11 0v3.067l2.193 3.809a.75.75 0 0 1-.65 1.124H10.5a2.5 2.5 0 0 1-5 0H.957a.75.75 0 0 1-.65-1.124L2.5 8.569V5.5zm4.5 8a1 1 0 1 0 2 0H7z"></path>
            </svg>
          </span>
          <span
            className="  w-12 h-12 mt-1 mr-1 py-2 rounded-full"
            style={{ background: "#1f1f1f" }}
          >
            <svg
              fill="#ffffff"
              data-encore-id="icon"
              role="img"
              width="40px"
              height="40px"
              aria-hidden="true"
              viewBox="-6.5 0 32 32"
              class="Svg-sc-ytk21e-0 bneLcE"
            >
              <path d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z"></path>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
