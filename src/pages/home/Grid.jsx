import React, { useEffect, useState } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/firebase";
import "./styles/Grid.css";

function Grid() {
  const [imageUrls, setImageUrls] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const filesRef = ref(storage, "files");
        const fileList = await listAll(filesRef);
        const urls = await Promise.all(
          fileList.items.map(async (item) => {
            const url = await getDownloadURL(item);
            return url;
          })
        );
        setImageUrls(urls);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching images:", error);
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const handleSaveImage = (url) => {
    console.log(url);
    window.open(url, "_blank");
  };

  return (
    <section id="grid">
      {loading ? (
        <div className="loader">
          <div className="grid__loader">
            <div className="spinner"></div>
            <p>Loading...</p>
          </div>
        </div>
      ) : (
        <div className="grid__container">
          {imageUrls.map((url, index) => (
            <div className="grid__box" key={index}>
              <button
                className="grid__button"
                onClick={() => handleSaveImage(url)}
              >
                Save
              </button>
              <img src={url} alt={`Image ${index}`} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Grid;
