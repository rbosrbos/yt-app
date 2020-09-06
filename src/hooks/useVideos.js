import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

/**
 * Custom hook
 * @param {*} defaultSearchTerm 
 */

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);
  const KEY = 'AIzaSyB9DGej9ucJeg_z3jQutl1g_v2BWvvNltU';

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY,
        q: term,
      },
    });
    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
