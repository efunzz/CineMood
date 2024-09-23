import Marquee from "react-fast-marquee";

function InfiniteTicker({ images }) {
  return (
    <Marquee>
      {images.map((img, index) => (
        <img
          src={img}
          className="movie-ticker-image"
          key={index}
          alt={`movie-poster-${index}`}
        />
      ))}
    </Marquee>
  );
}

export default InfiniteTicker;
