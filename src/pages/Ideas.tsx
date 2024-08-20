import { getArticle } from "@api";
import { ArticleContainer } from "@components";
import { useSelectedMenu } from "@components/CoconutLayout";
import { Article } from "@types";
import { useEffect, useState } from "react";

function Ideas() {
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
        <ArticleContainer article={article} />
      </div>
    </>);
}

export default Ideas;