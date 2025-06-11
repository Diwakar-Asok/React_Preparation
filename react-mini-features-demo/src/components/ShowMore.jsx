import React, {useState, useEffect} from "react";
import axios from "axios";

const ShowMore = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)
  const [visibleAlbum, setVisibleAlbum] = useState(50);

  useEffect(() => {
    const fetchAlbums = async () => {
      setLoading(true)
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/albums`);
        setAlbums(response.data)
        setError(null)
      }
      catch (error) {
        setError(error)
      }
      finally {
        setLoading(false)
      }
    }
    fetchAlbums();
  }, [])

  if (loading){
    return <p>Loading...</p>
  }

  if (error){
    return <p>Error: {error.message}</p>
  }
  return (
    <div>
      {albums ? (
        <ul>
          {albums.slice(0, visibleAlbum).map((album) => (
            <li key={album.id}>{album.title}</li>
          ))

          }
        </ul>
      ) : "No Data available"}  
     { visibleAlbum < albums.length && <button onClick={() => setVisibleAlbum(visibleAlbum + 50)}>Show More</button>}
    </div>
  )
}

export default ShowMore;