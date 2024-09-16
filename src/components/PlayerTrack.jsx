import { useState, useEffect } from "react";

const PlayerTrack = ({ selectedTrack }) => {
  // Simulate track progress
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(50); // Add a volume state (0 to 100)

  // Simulate the progress of the song over time
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 0)); // Reset when it reaches 100%
    }, 1000); // Progress every second
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Handle volume change
  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  return (
    <div className="bg-black p-3 rounded-lg grid grid-cols-12 gap-4">
      {/* Left Section: Album Art and Track Details */}
      <div className="flex px-5 items-center space-x-4 col-span-3">
        <img
          src={
            selectedTrack?.track?.album?.images?.[0]?.url ||
            selectedTrack?.album?.images?.[0]?.url
          }
          alt="Album Art"
          className="w-12 h-12 object-cover"
        />
        <div className="max-w-xs overflow-hidden">
          {/* Truncate Track Name */}
          <p className="text-white truncate max-w-full">
            {selectedTrack?.track?.name || selectedTrack?.name}
          </p>
          {/* Truncate Artist Name */}
          <div className="text-gray-400 truncate max-w-full">
            {selectedTrack?.track?.artists?.map((artist, idx) => (
              <span key={artist.id}>
                {artist.name}
                {idx < selectedTrack?.track?.artists.length - 1 && ", "}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Middle Section: Play Controls */}
      <div className="flex flex-col justify-center items-center col-span-6">
        <div className="flex items-center space-x-4">
          {/* Previous Button */}
          <div className="h-8 w-8 rounded-full flex items-center justify-center hover:bg-gray-700 transition duration-200">
            <svg
              className="h-4 w-4"
              fill="#fff"
              role="img"
              aria-hidden="true"
              viewBox="0 0 16 16"
            >
              <path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"></path>
            </svg>
          </div>
          {/* Play Button */}
          <div className="h-8 w-8 rounded-full flex items-center justify-center bg-slate-50 hover:bg-slate-300 transition duration-200">
            <svg className="h-4 w-4" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
            </svg>
          </div>
          {/* Next Button */}
          <div className="h-8 w-8 rounded-full flex items-center justify-center hover:bg-gray-700 transition duration-200">
            <svg
              className="h-4 w-4"
              fill="#fff"
              role="img"
              aria-hidden="true"
              viewBox="0 0 16 16"
            >
              <path d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"></path>
            </svg>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-2 w-8/12 h-2 bg-gray-700 rounded-full">
          <div
            className="h-2 bg-slate-200 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Right Section: Volume Control */}
      <div className="flex items-center justify-end col-span-3 space-x-4 mr-2">
        <svg
          className="h-4 w-4"
          fill="#fff"
          data-encore-id="icon"
          role="img"
          aria-hidden="true"
          viewBox="0 0 48"
        >
          <path d="M11.196 8 6 5v6l5.196-3z"></path>
          <path d="M15.002 1.75A1.75 1.75 0 0 0 13.252 0h-10.5a1.75 1.75 0 0 0-1.75 1.75v12.5c0 .966.783 1.75 1.75 1.75h10.5a1.75 1.75 0 0 0 1.75-1.75V1.75zm-1.75-.25a.25.25 0 0 1 .25.25v12.5a.25.25 0 0 1-.25.25h-10.5a.25.25 0 0 1-.25-.25V1.75a.25.25 0 0 1 .25-.25h10.5z"></path>
        </svg>
        <svg
          className="h-4 w-4"
          fill="#fff"
          data-encore-id="icon"
          role="img"
          aria-hidden="true"
          viewBox="0 0 48"
        >
          <path d="M13.426 2.574a2.831 2.831 0 0 0-4.797 1.55l3.247 3.247a2.831 2.831 0 0 0 1.55-4.797zM10.5 8.118l-2.619-2.62A63303.13 63303.13 0 0 0 4.74 9.075L2.065 12.12a1.287 1.287 0 0 0 1.816 1.816l3.06-2.688 3.56-3.129zM7.12 4.094a4.331 4.331 0 1 1 4.786 4.786l-3.974 3.493-3.06 2.689a2.787 2.787 0 0 1-3.933-3.933l2.676-3.045 3.505-3.99z"></path>
        </svg>
        <svg
          className="h-4 w-4"
          fill="#fff"
          data-encore-id="icon"
          role="img"
          aria-hidden="true"
          viewBox="0 0 48"
        >
          <path d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 0 1 3.5 1h9a2.5 2.5 0 0 1 0 5h-9A2.5 2.5 0 0 1 1 3.5zm2.5-1a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2h-9z"></path>
        </svg>
        <svg
          className="h-4 w-4"
          fill="#fff"
          data-encore-id="icon"
          role="img"
          aria-hidden="true"
          viewBox="0 0 48"
        >
          <path d="M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15h-6.5A1.75 1.75 0 0 1 6 13.25V2.75zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h6.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25h-6.5zm-6 0a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25H4V11H1.75A1.75 1.75 0 0 1 0 9.25v-6.5C0 1.784.784 1 1.75 1H4v1.5H1.75zM4 15H2v-1.5h2V15z"></path>
          <path d="M13 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-1-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
        </svg>

        <svg
          className="h-4 w-4"
          fill="#fff"
          data-encore-id="icon"
          role="presentation"
          aria-label="Volume medium"
          aria-hidden="true"
          viewBox="0 0 48"
        >
          <path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 6.087a4.502 4.502 0 0 0 0-8.474v1.65a2.999 2.999 0 0 1 0 5.175v1.649z"></path>
        </svg>

        {/* Volume Control Slider */}
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={handleVolumeChange}
          className="slider outline-none cursor-pointer w-3/12 h-2 bg-gray-300 rounded-full appearance-none"
          style={{
            background: `linear-gradient(to right, #edf2f7 ${volume}%, #4a5568  ${volume}%)`,
          }}
        />
        <svg
          className="h-4 w-4"
          fill="#fff"
          data-encore-id="icon"
          role="img"
          aria-hidden="true"
          viewBox="0 0 48"
        >
          <path d="M16 2.45c0-.8-.65-1.45-1.45-1.45H1.45C.65 1 0 1.65 0 2.45v11.1C0 14.35.65 15 1.45 15h5.557v-1.5H1.5v-11h13V7H16V2.45z"></path>
          <path d="M15.25 9.007a.75.75 0 0 1 .75.75v4.493a.75.75 0 0 1-.75.75H9.325a.75.75 0 0 1-.75-.75V9.757a.75.75 0 0 1 .75-.75h5.925z"></path>
        </svg>
        <svg
          className="h-4 w-4"
          fill="#fff"
          data-encore-id="icon"
          role="img"
          aria-hidden="true"
          viewBox="0 0 48"
        >
          <path d="M6.53 9.47a.75.75 0 0 1 0 1.06l-2.72 2.72h1.018a.75.75 0 0 1 0 1.5H1.25v-3.579a.75.75 0 0 1 1.5 0v1.018l2.72-2.72a.75.75 0 0 1 1.06 0zm2.94-2.94a.75.75 0 0 1 0-1.06l2.72-2.72h-1.018a.75.75 0 1 1 0-1.5h3.578v3.579a.75.75 0 0 1-1.5 0V3.81l-2.72 2.72a.75.75 0 0 1-1.06 0z"></path>
        </svg>
      </div>
    </div>
  );
};

export default PlayerTrack;
