import MyCard from "../component/home/MyCard";
import MyTech from "../component/home/MyTech";

function Home() {
  return (
    <>
      <div className="grid grid-cols-[25%_75%] gap-2">
          <MyCard />
          <MyTech />
      </div>
    </>);
}

export default Home;