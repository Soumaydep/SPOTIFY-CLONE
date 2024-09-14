const TrackDetails = ({ trackssl }) => {
  const handletrackItem = (tr) => {
    const trdetails = tr;
    const trackId = tr?.track?.id || tr?.id;
    const trackName = tr?.track?.name || tr?.name;
    const previewUrl=tr?.preview_url||"No preview url"
    
    console.log("trdetails:-->", trdetails);
    console.log("tr_id:", trackId, "tr_name:", trackName,"previewUrl:",previewUrl);
    
  };

  return (
    <div>
      {trackssl?.length ? (
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
            {trackssl.map((tr, index) => (
              <tr
                key={index}
                className="hover:bg-gray-800 "
                onClick={() => handletrackItem(tr)}
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
                  {tr?.track?.album?.name || tr?.album?.name || "Unknown Album"}
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
  );
};

export default TrackDetails;
