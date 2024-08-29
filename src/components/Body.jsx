import TagListSongs from "./TagListSongs";

const Body = () => {
  return (
    <div className="body-container px-2 m-1">
      <div
        className="left-section w-4/12 px-5 rounded-md"
        style={{ background: "#121212" }}
      >
        <div className="heading-icon flex justify-between items-center">
          <div className=" flex  py-5 px-3">
            <span className="text-white">
              <svg
                fill="#ffffff"
                width="27px"
                height="27px"
                data-encore-id="icon"
                role="img"
                viewBox="0 0 24 24"
              >
                <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path>
              </svg>
            </span>
            <p className="text-gray-500 ml-2 font-medium text-lg hover:text-white">
              Your Library
            </p>
          </div>

          <div className="two-btn flex py-3 px-5 mr-5">
            <span className="text-white rounded-full px-2 py-2 flex h-26 w-26 hover:bg-gray-900 mr-2">
              <button className="items-center ">
                <svg
                  fill="#ffffff"
                  width="22px"
                  height="20px"
                  data-encore-id="icon"
                  role="img"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path>
                </svg>
              </button>
            </span>
            <span className="text-white rounded-full px-2 py-2 flex h-26 w-26 hover:bg-gray-900 mr-2">
              <button className="items-center">
                <svg
                  fill="#ffffff"
                  width="20px"
                  height="20px"
                  data-encore-id="icon"
                  role="img"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.19 1A.749.749 0 0 1 8.47.47L16 7.99l-7.53 7.521a.75.75 0 0 1-1.234-.815.75.75 0 0 1 .174-.243l5.72-5.714H.75a.75.75 0 1 1 0-1.498h12.38L7.41 1.529a.749.749 0 0 1-.22-.53z"></path>
                </svg>
              </button>
            </span>
          </div>
        </div>

        <div className="three-btn px-2 py-2 flex w-7/12 justify-around">
          <button
            className="text-white font-semibold rounded-full px-2 py-2 w-full mr-2"
            style={{ background: "#1f1f1f" }}
          >
            Playlists
          </button>
          <button
            className="text-white font-semibold rounded-full w-full mr-2"
            style={{ background: "#1f1f1f" }}
          >
            Artists
          </button>
          <button
            className="text-white font-semibold rounded-full w-full mr-2"
            style={{ background: "#1f1f1f" }}
          >
            Albums
          </button>
        </div>
        <div className="seacrh-recent-playlists-parent  px-2 max-h-[500px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 scroll-smooth">
          <div className="seacrh-recent flex justify-between items-center p-2 ">
            <span>
              <svg
                fill="#ffffff"
                data-encore-id="icon"
                role="img"
                width="20px"
                height="20px"
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <path d="M10.533 1.27893C5.35215 1.27893 1.12598 5.41887 1.12598 10.5579C1.12598 15.697 5.35215 19.8369 10.533 19.8369C12.767 19.8369 14.8235 19.0671 16.4402 17.7794L20.7929 22.132C21.1834 22.5226 21.8166 22.5226 22.2071 22.132C22.5976 21.7415 22.5976 21.1083 22.2071 20.7178L17.8634 16.3741C19.1616 14.7849 19.94 12.7634 19.94 10.5579C19.94 5.41887 15.7138 1.27893 10.533 1.27893ZM3.12598 10.5579C3.12598 6.55226 6.42768 3.27893 10.533 3.27893C14.6383 3.27893 17.94 6.55226 17.94 10.5579C17.94 14.5636 14.6383 17.8369 10.533 17.8369C6.42768 17.8369 3.12598 14.5636 3.12598 10.5579Z"></path>
              </svg>
            </span>
            <div className="flex justify-between align-center items-center px-2 mr-3">
              <span className="font-semibold text-white text-md text-center px-3">
                Recents
              </span>
              <span>
                <svg
                  fill="#ffffff"
                  data-encore-id="icon"
                  role="img"
                  width="18px"
                  height="18px"
                  viewBox="0 0 16 16"
                  class="Svg-sc-ytk21e-0 cAMMLk"
                >
                  <path d="M15 14.5H5V13h10v1.5zm0-5.75H5v-1.5h10v1.5zM15 3H5V1.5h10V3zM3 3H1V1.5h2V3zm0 11.5H1V13h2v1.5zm0-5.75H1v-1.5h2v1.5z"></path>
                </svg>
              </span>
            </div>
          </div>

          <TagListSongs></TagListSongs>
          <TagListSongs></TagListSongs>
          <TagListSongs></TagListSongs>
          <TagListSongs></TagListSongs>
          <TagListSongs></TagListSongs>
          <TagListSongs></TagListSongs>
          <TagListSongs></TagListSongs>
          <TagListSongs></TagListSongs>
          <TagListSongs></TagListSongs>
          <TagListSongs></TagListSongs>
          <TagListSongs></TagListSongs>
        </div>
      </div>

      <div className="right-section"></div>
    </div>
  );
};
export default Body;
