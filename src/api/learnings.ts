import { Article } from "@types";

  export async function fetchArticles(articleId : string): Promise<Article[]> {
    const response = await fetch('http://localhost:8080/api/articles/' + articleId, { method: 'GET', mode: 'cors' });
    const data = await response.json();
    return data;
  }