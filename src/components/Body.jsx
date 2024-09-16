import { useEffect, useState } from "react";
import useHooks from "../CustomsHooks/useHooks";
import TagListSongs from "./TagListSongs";
import { FaTimes } from "react-icons/fa";
import ItemDetail from "./ItemDetail";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import axios from "axios";
import PlayerTrack from "./PlayerTrack";
// import LeftSection from "./LeftSection";

const Body = () => {
  const { playList, artists, searchSpotify, searchResults, albums, tracks } =
    useHooks();
  const [propsState, setPropsState] = useState([]);
  const [selectedbtn, setSelectedbtn] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [tracklist, setTracksList] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const navigate = useNavigate();
  const { type, id } = useParams(); // Get the item id,type from the URL
  const { token } = useAuth();

  const fetchTracks = async (id, type) => {
    try {
      // Build the API endpoint based on the type of item
      const url = `https://api.spotify.com/v1/${type}s/${id}/${
        type === "artist" ? "top-tracks?market=US" : "tracks"
      }`;

      const trackResponse = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // Handle different responses based on item type
      const tracksOpt =
        trackResponse.data.tracks || trackResponse.data.items || [];

      // Set the tracks list state with the fetched data
      setTracksList(tracksOpt);
      // console.log("travckList---------> :", tracklist);
      // console.log("ID:", id, "Track Response:", trackResponse);
    } catch (error) {
      console.error("Error fetching tracks:", error);
    }
  };

  const handleItemClick = (item) => {
    if (item && item.id && item.type) {
      setSelectedItem(item); // Store the selected item in the state
      fetchTracks(item.id, item.type); // Fetch tracks for the selected item
      navigate(`/${item.type}/${item.id}`, { replace: true }); // Update the URL without reloading
    }
  };

  useEffect(() => {
    if (type && id) {
      // console.log("URL changed to:", type, id);
      // Find the corresponding item in propsState
      const foundItem = propsState.find((item) => item.id === id);
      setSelectedItem(foundItem);
    }
  }, [type, id, propsState]);

  useEffect(() => {
    if (searchResults && Object.keys(searchResults).length > 0) {
      // Ensure each result type is defined before accessing its items
      const albums = searchResults.albums?.items || [];
      const artistss = searchResults.artists?.items || [];
      const playlists = searchResults.playlists?.items || [];
      const tracks = searchResults.tracks?.items || [];

      // Flatten all search result items into a single array
      const allResults = [...albums, ...artistss, ...playlists, ...tracks];

      // If there are results, set them in the state
      if (allResults.length > 0) {
        setPropsState(allResults);
      } else {
        // Handle case when no search results are returned
        setPropsState([]); // Optionally set this to [] if you want to clear previous state
      }
    }
  }, [searchResults]);

  const shuffleArray = (array) => {
    return array.sort(() => Math.random());
  };

  // Merging the playlists and artists data on initial load
  useEffect(() => {
    // Only merge playlists and artists on the initial load, not on button clicks
    if (selectedbtn === null) {
      const mergedData = [...playList, ...artists];
      const shuffledData = shuffleArray(mergedData);
      setPropsState(shuffledData);
    }
  }, [playList, artists]);

  // When the selected button is clicked, prevent resetting the state
  const handleClose = () => {
    setSelectedbtn(null); // Reset selected button state
    setQuery(""); // Reset the search query
    // Optionally, you can restore the default state here if needed
  };

  const buttons = [
    { id: "playList", label: "Playlist" },
    { id: "artists", label: "Artists" },
    { id: "albums", label: "Albums" },
  ];

  // Handle button clicks and preserve the selected state
  const handlebtnClicked = (btnid) => {
    setSelectedbtn(btnid); // Set selected button

    if (btnid === "playList") {
      setPropsState(playList); // Show only playlist data
    } else if (btnid === "artists") {
      setPropsState(artists); // Show only artist data
    } else if (btnid === "albums") {
      setPropsState(albums); // Show only albums data
    }
  };

  const toggleSearch = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    searchSpotify(value); // Trigger search// `searchSpotify` should set the `searchResults` state accordingly
  };



  // This function is passed to ItemDetail and updates selectedTrack
  const handleTrackSelect = (track) => {
    setSelectedTrack(track); // Set the selected track
  };


  return (
    <>
      <div className="body-container px-2 m-1 flex  justify-around">
        <div
          className="left-section w-5/12 px-5  rounded-md"
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

          <div className="four-btn mt-2 ml-2 flex items-center">
            <div className="grid grid-cols-3 gap-2">
              {selectedbtn === null ? (
                buttons.map((btn) => (
                  <button
                    key={btn.id}
                    onClick={() => handlebtnClicked(btn.id)}
                    className="text-white text-sm font-medium rounded-full px-4 py-2"
                    style={{ background: "#1f1f1f" }}
                  >
                    {btn.label}
                  </button>
                ))
              ) : (
                <div className="flex">
                  <button
                    onClick={handleClose}
                    className="h-8 w-8 rounded-full mr-2"
                    style={{ background: "#1f1f1f" }}
                  >
                    <span>
                      <svg
                        className="ml-2"
                        data-encore-id="icon"
                        role="img"
                        fill="#ffffff"
                        width="16px"
                        height="16px"
                        aria-hidden="true"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.47 2.47a.75.75 0 0 1 1.06 0L8 6.94l4.47-4.47a.75.75 0 1 1 1.06 1.06L9.06 8l4.47 4.47a.75.75 0 1 1-1.06 1.06L8 9.06l-4.47 4.47a.75.75 0 0 1-1.06-1.06L6.94 8 2.47 3.53a.75.75 0 0 1 0-1.06Z"></path>
                      </svg>
                    </span>
                  </button>

                  <button
                    className="text-white text-sm font-medium rounded-full px-4 py-2"
                    style={{ background: "#1f1f1f" }}
                  >
                    {buttons.find((btn) => btn.id === selectedbtn)?.label}
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="seacrh-recent-playlists-parent p-2 mb-2  max-h-[469px] overflow-y-scroll scroll-smooth">
            <div className="relative flex items-center justify-between mt-2 px-1">
              <div className="flex items-center relative">
                <button
                  onClick={toggleSearch}
                  className={`absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer transition-all duration-300 begin-2.5 ${
                    isOpen
                      ? ""
                      : "hover:bg-gray-800 hover:rounded-full p-2 flex-start"
                  }`}
                >
                  <svg
                    fill="#ffffff"
                    role="img"
                    width="20px"
                    height="20px"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10.533 1.27893C5.35215 1.27893 1.12598 5.41887 1.12598 10.5579C1.12598 15.697 5.35215 19.8369 10.533 19.8369C12.767 19.8369 14.8235 19.0671 16.4402 17.7794L20.7929 22.132C21.1834 22.5226 21.8166 22.5226 22.2071 22.132C22.5976 21.7415 22.5976 21.1083 22.2071 20.7178L17.8634 16.3741C19.1616 14.7849 19.94 12.7634 19.94 10.5579C19.94 5.41887 15.7138 1.27893 10.533 1.27893ZM3.12598 10.5579C3.12598 6.55226 6.42768 3.27893 10.533 3.27893C14.6383 3.27893 17.94 6.55226 17.94 10.5579C17.94 14.5636 14.6383 17.8369 10.533 17.8369C6.42768 17.8369 3.12598 14.5636 3.12598 10.5579Z"></path>
                  </svg>
                </button>

                <input
                  type="search"
                  value={query}
                  onChange={handleSearchChange}
                  placeholder="Search in Your Library"
                  className={`transition-all duration-300 ease-in-out pl-10 pr-2 py-1 border-none rounded text-gray-300 bg-gray-800 ${
                    isOpen
                      ? "w-60 opacity-100 visible"
                      : "w-0 opacity-0 invisible"
                  }`}
                />
                {/* The "X" button */}
                {query && (
                  <button
                    onClick={handleClose} // Clear input on click
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    <FaTimes />
                  </button>
                )}
              </div>

              <div className="flex items-center px-2 mr-3">
                <span
                  className="font-semibold text-white text-md px-3"
                  style={{
                    visibility: isOpen ? "hidden" : "visible",
                  }}
                >
                  Recents
                </span>
                <span>
                  <svg
                    fill="#ffffff"
                    role="img"
                    width="18px"
                    height="18px"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 14.5H5V13h10v1.5zm0-5.75H5v-1.5h10v1.5zM15 3H5V1.5h10V3zM3 3H1V1.5h2V3zm0 11.5H1V13h2v1.5zm0-5.75H1v-1.5h2v1.5z"></path>
                  </svg>
                </span>
              </div>
            </div>

            <TagListSongs props={propsState} onItemClick={handleItemClick} />
          </div>
        </div>

        <div className="right-section w-full  ml-2 rounded-md bg-gradient-to-b from-[#545754] via-[#262726] to-[#121212]  h-[580px] scrollable-content overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-850 scrollbar-track-gray-900 scroll-smooth">
          {/* {!selectedItem ? <LeftSection/> : <ItemDetail items={selectedItem} />} */}
          {selectedItem && tracklist.length > 0 && (
            <ItemDetail items={selectedItem} trackss={tracklist} onTrackSelect={handleTrackSelect}/>
          )}
        </div>
      </div>
      <div>
        <PlayerTrack  selectedTrack={selectedTrack}  />
      </div>
    </>
  );
};
export default Body;
