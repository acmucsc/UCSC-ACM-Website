import "./Banner.css";
import { images } from './data';

export function ImageSection({ images, speed }) {
  const imagesStyle = {
    animation: `swipe ${speed}ms linear infinite`,
  };

  return (
    <div className='images' style={imagesStyle}>
      {images.map(({ src, name }) => (
        <div className='image' key={name}>
            <img src={src} alt={name} />
        </div>
        ))}
    </div>
  );
}

export default function Banner({ speed }) {
  return (
    <div className='banner-app'>
        <div className='banner-wrapper'>
        <div className='wrapper'>
            <ImageSection images={images} speed={speed} />
            <ImageSection images={images} speed={speed} />
        </div>
        </div>
    </div>
  );
}