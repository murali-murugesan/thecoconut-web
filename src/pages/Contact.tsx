import { MyCard, MyTech } from "@components";

function Contact() {
  return (
    <>
      <div className="grid grid-cols-[25%_75%] gap-2">
          <MyCard />
          <MyTech />
      </div>
    </>);
}

export default Contact;