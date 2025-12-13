import { useState, useEffect } from "react";
import "./Banner.css";
import photos from './photos';

const ImageSection = ({ images, speed, reverse, onImageClick }) => {
  const imagesStyle = {
    animation: `swipe ${speed}ms linear infinite ${reverse ? 'reverse' : 'normal'}`,
  };

  return (
    <div className='images' style={imagesStyle}>
      {images.map((name) => (
        <div className='image' key={name} onClick={() => onImageClick(name)}>
          <img src={`/photos/${name}`} alt="ACM Event" loading="lazy" />
        </div>
      ))}
    </div>
  );
};

export default function Banner({ speed = 60000 }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const midPoint = Math.ceil(photos.length / 2);
  const row1 = photos.slice(0, midPoint);
  const row2 = photos.slice(midPoint);

  // Close formatting on 'Esc' key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className='banner-app'>
      <div className='banner-wrapper'>
        <div className='wrapper'>
          <ImageSection images={row1} speed={speed} onImageClick={setSelectedImage} />
          <ImageSection images={row1} speed={speed} onImageClick={setSelectedImage} />
        </div>
      </div>
      <div className='banner-wrapper'>
        <div className='wrapper'>
          <ImageSection images={row2} speed={speed} reverse={true} onImageClick={setSelectedImage} />
          <ImageSection images={row2} speed={speed} reverse={true} onImageClick={setSelectedImage} />
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="banner-modal" onClick={() => setSelectedImage(null)}>
          <div className="banner-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="banner-close-btn" onClick={() => setSelectedImage(null)}>&times;</button>
            <img src={`/photos/${selectedImage}`} alt="Zoomed Event" />
          </div>
        </div>
      )}
    </div>
  );
}