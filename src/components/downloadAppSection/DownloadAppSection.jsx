import StoreButton from "./StoreButton";

const DownloadAppSection = () => {
  return (
    <div className="p-6 bg-gray-200">
      <div className="flex flex-col items-center p-4 justify-items-center">
        <h1 className="text-2xl font-semibold text-center ">
          Read Books at your fingertips
        </h1>
        <div className="flex gap-4 p-4">
          <StoreButton src="app-store.png" />
          <StoreButton src="play-store.png" />
        </div>
      </div>
    </div>
  );
};

export default DownloadAppSection;
