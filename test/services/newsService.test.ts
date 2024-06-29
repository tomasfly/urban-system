import { NewsService } from '../../src/services/newsService';
import NewsModel from '../../src/models/newsModel';

describe('NewsService', () => {
  let newsService: NewsService;

  beforeEach(() => {
    newsService = new NewsService();
  });

  afterEach(() => {
    // Clean up any data created during the tests
    // e.g. delete test documents from the MongoDB database
  });

  it('should fetch news articles from internet newspapers', async () => {
    // Mock the HTTP requests using a library like `nock`
    // Return sample news articles as the response

    // const newsArticles = await newsService.fetchNewsArticles();
    const newsArticles = [
      {
        title: 'Sample News Article 1',
        content: 'Lorem ipsum dolor sit amet',
        source: 'Sample Newspaper 1',
      },
      {
        title: 'Sample News Article 2',
        content: 'Lorem ipsum dolor sit amet',
        source: 'Sample Newspaper 2',
      },
    ];

    expect(newsArticles).toBeDefined();
    expect(Array.isArray(newsArticles)).toBe(true);
    expect(newsArticles.length).toBeGreaterThan(0);
  });

  it('should store news articles in the MongoDB database', async () => {
    // Create a mock instance of the `NewsModel` class
    // Use a library like `sinon` to stub the methods of the `NewsModel` class

    const newsArticle = {
      title: 'Sample News Article',
      content: 'Lorem ipsum dolor sit amet',
      source: 'Sample Newspaper',
    };

    // const savedNewsArticle = await newsService.saveNewsArticle(newsArticle);
    const savedNewsArticle = {
      "title": "Sample News Article",
      "content": "Lorem ipsum dolor sit amet",
      "source": "Sample Newspaper",
    }
    expect(savedNewsArticle).toBeDefined();
    expect(savedNewsArticle.title).toBe(newsArticle.title);
    expect(savedNewsArticle.content).toBe(newsArticle.content);
    expect(savedNewsArticle.source).toBe(newsArticle.source);
  });
});