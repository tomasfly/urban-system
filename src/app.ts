import { NewsService } from './services/newsService';
import { NewsModel as ImportedNewsModel } from './models/newsModel';
import { config } from './config';

async function main() {
  try {
    // Create an instance of the NewsService class
    const newsService = new NewsService();

    // Fetch news articles from internet newspapers
    const newsArticles = await newsService.fetchNewsArticles();

    // Store news articles in the MongoDB database
    for (const article of newsArticles) {
      const news = new NewsModel(article);
      await news.save();
    }

    console.log('News articles stored successfully!');
  } catch (error) {
    console.error('Error storing news articles:', error);
  }
}

// Modify the save() method in the NewsModel class to return a promise that resolves to void
class NewsModel {
  // ... existing code ...

  async save(): Promise<void> {
    // ... existing code ...
  }
}

main();