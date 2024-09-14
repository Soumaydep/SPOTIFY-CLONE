import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../Contexts/AuthContext';
import { useParams } from 'react-router-dom';

const useHooks = () => {
  const [artists, setArtists] = useState([]);
  const [playList, setPlaylist] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [searchResults, setSearchResults] = useState({});
  const[sercherr,searchSetError]=useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token } = useAuth();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      if (!token) {
        setError("No valid token found.");
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      try {
        // Fetch playlists
        const playlistsResponse = await axios.get("https://api.spotify.com/v1/me/playlists", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setPlaylist(playlistsResponse.data.items || []);

        // Fetch top artists
        const artistsResponse = await axios.get("https://api.spotify.com/v1/me/top/artists", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setArtists(artistsResponse.data.items || []);

        // Fetch albums
        const albumsResponse = await axios.get("https://api.spotify.com/v1/albums/4mFLdK8SkUo3cx8ERLQC92", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setAlbums(albumsResponse.data.items || []);
       
        

      } catch (error) {
        setError("Failed to fetch data.");
        console.error("Error fetching data:", error.response?.data || error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [token,id]);

  // Search function to query Spotify API
  const searchSpotify = async (query) => {

    if (query.trim() === "") {
      setSearchResults({});
      return;
    }
    setIsLoading(true);
    try {
      if (query.trim().length > 1 && !/^[\W_]+$/.test(query)) {
        setIsLoading(true);
        const response = await axios.get(`https://api.spotify.com/v1/search`, {
          headers: { Authorization: `Bearer ${token}` },
          params: {
            q: query,
            type: "artist,album,playlist,track", // You can adjust the types based on what you want to search for
            limit: 20 // Optional: Adjust the limit as needed
          }
        });
        setSearchResults(response.data); // Response includes artists, albums, playlists, and tracks
      } else {
        setSearchResults({ artists: { items: [] }, albums: { items: [] }, playlists: { items: [] }, tracks: { items: [] } });
      }
    } catch (error) {
      searchSetError("Failed to search Spotify.");
      console.error("Error searching Spotify:", error.response?.data || error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { artists, playList, albums,searchResults, searchSpotify, isLoading, error,sercherr };
};

export default useHooks;
