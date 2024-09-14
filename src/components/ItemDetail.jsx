import TrackDetails from "./TrackDetails";

const ItemDetail = ({ items, trackss }) => {
  // Check if `items` is defined before rendering anything
  if (!items) {
    return <p className="text-white">Loading...</p>;
  }

  return (
    <div className="sub-parent-conatiner">
      <div
        key={items.id}
        className="top-artist-picture-details flex px-4 bg-slate-900"
      >
        <div className="items-photo flex h-40 w-40 rounded-full  mt-8 justify-center">
          {items.type === "artist" &&
          items.images &&
          items.images.length > 0 ? (
            <img
              src={
                items.images[0].url ||
                items.images[1].url ||
                items.images[2].url
              }
              alt={items.name}
              className="h-[160px] w-[160px] rounded-full object-cover shadow-lg shadow-black"
            />
          ) : (
            <div className="h-[160px] w-[160px]  flex items-center justify-center">
              <img
                src={
                  items.images[0].url ||
                  items.images[1].url ||
                  items.images[2].url
                }
                alt={items.name}
                className="h-[160px] w-[160px]  object-cover shadow-lg shadow-black"
              />
            </div>
          )}
        </div>
        <div className="artist-details  ml-2 px-2 py-4">
          {/* <p className="text-white px-2">{items.type}</p> */}
          {items.type === "artist" ? (
            <span className="text-white px-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-blue-500" // Adjust size and color as needed
              >
                {/* Circle Background */}
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  fill="currentColor"
                  className="text-blue-500"
                />
                {/* Checkmark */}
                <path
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  d="M8 12l2 2 4-4"
                />
              </svg>
              <p className="text-white px-3">Verified Artist</p>
            </span>
          ) : (
            <span className="flex  items-center py-3">
              <span className="h-2 w-2 rounded-full bg-white"></span>
              <p className="text-gray-300 px-2">{items.type}</p>
            </span>
          )}
          <span>
            {items.type === "artist" ? (
              <h1 className="font-bold text-8xl text-white px-2 ">
                {items.name}
              </h1>
            ) : (
              <span>
                <h3 className="font-bold text-5xl leading-normal text-white truncate">
                  {items.name.replace(/\s+/g, " ").trim()}
                </h3>
                <p className="text-gray-300  truncate max-w-3xl">
                  {items.description}
                </p>
                <span className="flex space-x-2 ">
                  <p className="text-gray-300 ">{items.owner.display_name}</p>

                  <span className="flex  items-center">
                    <span className="h-2 w-2 rounded-full bg-white"></span>
                    <p className="text-gray-300 px-2">{items.tracks.total}</p>
                  </span>
                </span>
              </span>
            )}

            <p className="text-white text-md font-semibold py-6 ">
              {items.type === "artist" && items.followers
                ? `${items.followers.total.toLocaleString()} followers`
                : ""}
            </p>
          </span>
        </div>
      </div>
      <div className="p-7">
        <TrackDetails trackssl={trackss}></TrackDetails>
      </div>
    </div>
  );
};

export default ItemDetail;
