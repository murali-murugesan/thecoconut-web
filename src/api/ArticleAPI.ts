import { Article } from "@types";

  export async function getArticle(articleId : string): Promise<Article> {
    const response = await fetch('https://thecoconut-article.proudbay-13759061.australiaeast.azurecontainerapps.io/thecoconut/api/getarticle/' + articleId, { method: 'GET', mode: 'cors' });
    //const response = await fetch('http://localhost:8080/thecoconut/api/getarticle/' + articleId, { method: 'GET', mode: 'cors' });
    const data = await response.json();
    return data;
  }