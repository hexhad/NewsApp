import { articles_url, sources, apiKey } from "../config/rest_config";

export async function getArticles() {
    try {
        let article = await fetch(`${articles_url}?sources=${sources}`, {
            headers: {
                'X-API-KEY': apiKey
            }
        });

        let result = await article.json();
        return result.articles;

    } catch (error) {
        throw error;
    }
}