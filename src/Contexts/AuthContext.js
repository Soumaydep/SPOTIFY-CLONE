import { createContext, useContext, useEffect, useState } from "react";
import { getTokenFromUrl } from "../config";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();
const AuthContext = createContext();

export const AuthProvider=({ children })=>
{
    const [token, setToken] = useState(null);

    useEffect(() => {

    const savedToken=localStorage.getItem("spotify_token");
    if(savedToken)  
    {
      setToken(savedToken);
      spotify.setAccessToken(savedToken);
    }
    else{
      const hash = getTokenFromUrl();
      window.location.hash = "";
      const _token = hash.access_token;
      if (_token) {
      localStorage.setItem("spotify_token",_token);
      setToken(_token);
      spotify.setAccessToken(_token);
      
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token }}>
      {children}
    </AuthContext.Provider>
  );

}

// Custom hook for accessing Auth context
export const useAuth = () => useContext(AuthContext);