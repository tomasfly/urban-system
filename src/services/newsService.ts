import NewsModel from '../models/newsModel';
import axios from 'axios';
import { config } from '../config';

export class NewsService {
  async fetchNewsArticles(): Promise<void> {
    try {
      // Make HTTP request to fetch news articles from internet newspapers
      const response = await axios.get('https://example.com/news');

      // Store the news articles in the MongoDB database
      const newsArticles = response.data.articles;
      for (const article of newsArticles) {
        const news = new NewsModel(article.title, article.description, article.url);
        await news.save();
      }
    } catch (error) {
      console.error('Error fetching news articles:', error);
    }
  }
}