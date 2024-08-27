
export interface Article {
    key : string;
    title: string;
    context: ArticleContext[];
    content : string;
    images : string[];
}

interface ArticleContext {
    item: string;
    description: string;
}