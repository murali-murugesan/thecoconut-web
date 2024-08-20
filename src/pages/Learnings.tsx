import { getArticle } from "@api";
import { LearningsTree } from "@components";
import { useSelectedMenu } from "@components/CoconutLayout";
import { Article } from "@types";
import { useEffect, useState } from "react";

function Learnings() {
  const [article, setArticle] = useState<Article | null>(null);
  const selectedMenu = useSelectedMenu();

  useEffect(() => {
    getArticle(selectedMenu).then((response) => {
      setArticle(response);
    });
  }, [selectedMenu]);

  return (
    <>
      <div>
        <LearningsTree/>
      </div>
    </>);
}


export default Learnings;