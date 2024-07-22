import IdeasTree from "../component/ideas/IdeasTree";


function Ideas(){
  return (
    <>
   <div className="grid grid-cols-[25%_75%] gap-2">
        <IdeasTree/>
      </div>
  </>);
}

export default Ideas;