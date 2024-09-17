const ItemDetail = ({ items, trackss,onTrackSelect }) => {
  // Check if `items` is defined before rendering anything
  if (!items) {
    return <p className="text-white">Loading...</p>;
  }

  const handleTrackItemClick = (track) => {
    // console.log("track:",track);
    onTrackSelect(track); // Call the parent function to set the selected track
  };

  return (
    <div className="sub-parent-conatiner">
      <div
        key={items.id}
        className="top-artist-picture-details flex px-4 bg-slate-900"
      >
        <div className="items-photo flex h-40 w-40 rounded-full  mt-5 mb-4 justify-center">
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
        {/* <TrackDetails trackssl={trackss}></TrackDetails> */}
        <div>
          {trackss?.length ? (
            <table className="text-white w-full">
              <thead className="border-b-2 border-b-gray-700">
                <tr>
                  <th className="text-left ">#</th>
                  <th className="text-left">.</th>
                  <th className="text-left  px-2">Title</th>
                  <th className="text-left ">Album</th>
                  <th className="text-left ">Date Added</th>
                  <th className="text-left ">🕛</th>
                </tr>
              </thead>
              <tbody className="cursor-pointer">
                {trackss.map((tr, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-800"
                    onClick={() => handleTrackItemClick(tr)}
                  >
                    <div class="relative group mt-5">
                      <div class="text-gray-500 group-hover:opacity-0 transition-opacity">
                        {index + 1}
                      </div>

                      <div class="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-12 h-12 text-gray-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M14.752 11.168l-6.528-4.032A1 1 0 007 7v10a1 1 0 001.224.97l6.528-2.464a1 1 0 00.648-.91v-2.32a1 1 0 00-.648-.91z"
                          />
                        </svg>
                      </div>
                    </div>
                    <td className="py-2 px-5">
                      <img
                        src={
                          tr?.track?.album?.images?.[0]?.url ||
                          tr?.album?.images?.[0]?.url
                        }
                        alt="Album Art"
                        className="w-12 h-12 object-cover"
                      />
                    </td>
                    <td className="py-2 px-2">
                      <div>{tr?.track?.name || tr?.name}</div>
                      <div className="text-gray-400">
                        {tr?.track?.artists?.map((artist, idx) => (
                          <span key={artist.id}>
                            {artist.name}
                            {idx < tr?.track?.artists.length - 1 && ", "}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-2">
                      {tr?.track?.album?.name ||
                        tr?.album?.name ||
                        "Unknown Album"}
                    </td>
                    <td className="py-2">
                      {tr?.added_at || tr?.album?.release_date
                        ? new Date(
                            tr.added_at || tr?.album?.release_date
                          ).toLocaleDateString()
                        : "N/A"}
                    </td>
                    <td className="py-2">
                      {Math.floor(
                        (tr?.track?.duration_ms || tr?.duration_ms) / 60000
                      )}
                      :
                      {(
                        ((tr?.track?.duration_ms || tr?.duration_ms) % 60000) /
                        1000
                      )
                        .toFixed(0)
                        .padStart(2, "0")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-white">No tracks available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
