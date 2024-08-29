const Search = () => {
  return (
    <>
      <form className="w-full">
        <div className="relative flex">
          <div className="absolute p-4">
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
          </div>
          <input
            type="search"
            placeholder="What do you want to play?"
            className="block w-full p-3 ps-10  rounded-full text-white"
            style={{ background: "#1f1f1f" }}
          ></input>

          <button className=" absolute end-2.5 bottom-2.5 px-4 border-l-2">
            <svg
              fill="#b3b3b3"
              strokeLinejoin="2"
              data-encore-id="icon"
              width="25px"
              height="25px"
              role="img"
              aria-hidden="true"
              viewBox="0 0 24 24"
              class="Svg-sc-ytk21e-0 bneLcE"
            >
              <path d="M4 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4H4V2zM1.513 9.37A1 1 0 0 1 2.291 9H21.71a1 1 0 0 1 .978 1.208l-2.17 10.208A2 2 0 0 1 18.562 22H5.438a2 2 0 0 1-1.956-1.584l-2.17-10.208a1 1 0 0 1 .201-.837zM12 17.834c1.933 0 3.5-1.044 3.5-2.333 0-1.289-1.567-2.333-3.5-2.333S8.5 14.21 8.5 15.5c0 1.289 1.567 2.333 3.5 2.333z"></path>
            </svg>
          </button>
        </div>
      </form>
    </>
  );
};

export default Search;
