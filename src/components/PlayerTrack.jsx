const PlayerTrack = ({ trackss }) => {
  return (
    <div>
      {trackss.map((tp, index) => {
        <div key={index}>
          <span>
            <img
              src={
                tp?.track?.album?.images?.[0]?.url ||
                tp?.album?.images?.[0]?.url
              }
              alt="Album Art"
              className="w-12 h-12 object-cover"
            />
          </span>
        </div>;
      })}
    </div>
  );
};

export default PlayerTrack;
