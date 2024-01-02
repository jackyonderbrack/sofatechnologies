import "./imagesRow.css";

type ImagesRowProps = {
  imageUrls: string[];
};

const ImagesRow: React.FC<ImagesRowProps> = ({ imageUrls }) => {
  return (
    <div className="flex w-full justify-content-evenly">
      {imageUrls.map((url: string, index: number) => (
        <img
          key={index}
          src={url}
          alt={`Image ${index}`}
          className="rounded-2xl"
        />
      ))}
    </div>
  );
};

export default ImagesRow;
