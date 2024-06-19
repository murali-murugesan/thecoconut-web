import LearningTree from "../component/learnings/LearningTree";

function Learnings() {
  return (
    <>
      <div className="grid grid-flow-col gap-4">
        <div className="row-span-2 max-h-screen">
          <LearningTree />
        </div>
        <div className="col-span-12 h-96">

        </div>
      </div>
    </>);
}


export default Learnings;