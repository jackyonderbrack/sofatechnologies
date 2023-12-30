import './imagesRow.css';

type ImagesRowProps = {
  imageUrls: string[];
};

const ImagesRow: React.FC<ImagesRowProps> = ({ imageUrls }) => {
  return (
    <div className="images-row flex flex-wrap justify-content-center">
      {imageUrls.map(
        (url: string, index: number) =>
          index < 8 && (
            <img
              key={index}
              src={url}
              alt={`Image ${index}`}
              className="rounded-2xl"
            />
          )
      )}
    </div>
  );
};

export default ImagesRow;
