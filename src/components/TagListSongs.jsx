const TagListSongs = () => {
  return (
    <div className="group hover:bg-gray-900 px-1 py-1 rounded-md" >
      {/* song and playlist and artists */}
      <div className="flex p-2">
        <div className="flex items-center justify-center h-12 w-12 bg-slate-500">
          <span>
            <svg
              className="hidden group-hover:block"
              fill="#fff"
              height="25"
              width="25"
              data-encore-id="icon"
              role="img"
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
            </svg>
          </span>
        </div>
        <div className="px-2">
          <p className="font-medium text-white">Melody by underated gems</p>
          <p className="font-thin text-white">rishi</p>
        </div>
      </div>
    </div>
  );
};

export default TagListSongs;
