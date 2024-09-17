import Body from "./Body";
import Header from "./Header";


const Container = ({user}) => {

  return (
    <div
      className="fixed top-0 left-0 w-full h-screen"
      style={{ background: "#000000" }}
    >
      <Header user={user}></Header>
      <Body></Body>
    </div>
  );
};

export default Container;
