import React, { useEffect, useState } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/firebase";
import "./styles/Grid.css";
import { X } from "lucide-react";

function Grid() {
  const [imageUrls, setImageUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

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

  const handleImageClick = (url) => {
    setSelectedImage(url);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
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
          {imageUrls
            .slice()
            .reverse()
            .map((url, index) => (
              <div className="grid__box" key={index}>
                <button
                  className="grid__button"
                  onClick={() => handleSaveImage(url)}
                >
                  Save
                </button>
                <img
                  src={url}
                  alt={`Image ${index}`}
                  onClick={() => handleImageClick(url)}
                />
              </div>
            ))}
        </div>
      )}
      {selectedImage && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            <X
              className="modal__close"
              onClick={handleCloseModal}
              size={"40px"}
            />
            <img
              src={selectedImage}
              alt="Zoomed Image"
              className="modal__image"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Grid;
