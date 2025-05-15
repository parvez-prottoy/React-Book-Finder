import star from "../../assets/star.svg";
import Favourite from "../shared/SVG/Favourite";
import Unfavourite from "../shared/SVG/Unfavourite";
export default function BookGridItem({ book, handleFavorite }) {
  const {
    id,
    name,
    author,
    thumbnail,
    price,
    rating,
    favourite,
    publishedYear,
  } = book;
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4">
        <img className="max-w-[144px] " src={thumbnail} alt={name} />
      </div>

      <div className="space-y-3">
        <h4 className="text-lg font-bold lg:text-xl">{name}</h4>
        <div className="flex justify-between">
          <p className="text-xs lg:text-sm">
            By : <span>{author}</span>
          </p>
          <p className="text-xs lg:text-sm">Pub. Year {publishedYear}</p>
        </div>

        <div className="flex items-center justify-between">
          <h4 className="text-lg font-bold lg:text-xl">${price}</h4>

          <div className="flex items-center space-x-1">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <img key={i} src={star} alt={`${rating} star`} />
              ))}
            <span className="text-xs lg:text-sm">({rating} star)</span>
          </div>
        </div>

        <div className="text-xs lg:text-sm">
          <button
            onClick={() => handleFavorite(id)}
            className={`flex min-w-[132px] w-full items-center justify-center gap-1 rounded-md  transition-all py-1.5 lg:py-1.5 cursor-pointer ${
              favourite
                ? "bg-[#DC2954]/[14%]  text-[#DC2954] hover:bg-[#DC2954]/[24%]"
                : "bg-[#1C4336]/[14%]  text-[#1C4336] hover:bg-[#1C4336]/[24%]"
            }`}
          >
            {favourite ? <Favourite /> : <Unfavourite />}
            Favourite
          </button>
        </div>
      </div>
    </div>
  );
}
