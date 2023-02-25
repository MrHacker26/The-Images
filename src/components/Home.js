import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import ImageModal from "./ImageModal";

function Home() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("random");

  const searchImages = async (query) => {
    try {
      if (query === "" || query.length < 3) {
        setQuery("Random");
        // console.log(data);
        setImages(data);
      } else {
        setLoading(true);
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?page=15&query=${query}`,
          {
            headers: {
              Authorization:
                "Client-ID iWtdKhowzSj3ERiYFU8Cv-4Q-g0Zxe9b2RF5ytFpcvE",
            },
          }
        );
        setLoading(false);
        setQuery(query);
        setImages(response.data.results);
      }
    } catch (error) {
      setLoading(true);
      console.error(error);
    }
  };

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        setLoading(true);
        const res = await axios.get(`https://api.unsplash.com/photos?`, {
          headers: {
            Authorization:
              "Client-ID iWtdKhowzSj3ERiYFU8Cv-4Q-g0Zxe9b2RF5ytFpcvE",
          },
        });
        setLoading(false);
        setImages(res.data);
        setData(res.data);
      } catch (error) {
        setLoading(true);
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto md:px-0 px-3">
      <SearchBar onSearch={searchImages} />
      <p className=" text-slate-600 mt-12 dark:text-white ">
        Showing results for:
      </p>
      <p className="text-4xl font-bold mb-16 text-slate-600 dark:text-white">
        {query}
      </p>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ImageList images={images} onImageClick={handleImageClick} />
      )}
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default Home;
