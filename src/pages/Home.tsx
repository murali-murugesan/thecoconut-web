import MyCard from "../component/home/MyCard";
import CoconutTech from "../component/home/CoconutTech";

function Home() {
  return (
    <>
      <div className="grid grid-flow-col gap-4">
        <div className="row-span-2 max-h-screen">
          <MyCard />
        </div>
        <div className="col-span-8">
          <CoconutTech />
        </div>
      </div>
    </>);
}

export default Home;