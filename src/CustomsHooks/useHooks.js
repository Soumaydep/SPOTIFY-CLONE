import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../Contexts/AuthContext';

const useHooks = () => {
  const [artists, setArtists] = useState([]);
  const [playList, setPlaylist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      if (token) {
        setIsLoading(true);
        try {
          const [response1, response2] = await Promise.all([
            axios.get("https://api.spotify.com/v1/me/playlists", { headers: { Authorization: `Bearer ${token}` } }),
            axios.get("https://api.spotify.com/v1/me/top/artists", { headers: { Authorization: `Bearer ${token}` } }),
          ]);

          setPlaylist(response1.data.items);
          setArtists(response2.data.items);
        } catch (error) {
          setError("Failed to fetch data.");
          console.error("Error fetching data:", error.response?.data || error.message);
        } finally {
          setIsLoading(false);
        }
      } else {
        setError("No valid token found.");
        setIsLoading(false);
      }
    };

    fetchData();
  }, [token]);

  return { artists, playList, isLoading, error };
};

export default useHooks;