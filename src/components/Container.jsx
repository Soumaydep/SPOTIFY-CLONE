import Body from "./Body";
import Header from "./Header";
import useHooks from "../CustomsHooks/useHooks";

const Container = () => {
  const { artists,playList } = useHooks();
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen"
      style={{ background: "#000000" }}
    >
      {playList.map((playList) => {
        console.log(playList);
      })}

      <Header></Header>
      <Body></Body>
    </div>
  );
};

export default Container;
