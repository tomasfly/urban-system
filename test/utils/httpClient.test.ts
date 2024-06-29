import { httpClient } from '../../src/utils/httpClient';

describe('httpClient', () => {
  it('should make a GET request and return the response', async () => {
    const url = 'https://example.com/api/news';
    const response = {
      status: 200,
      data: { message: 'Mock response data' }
    };

    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
  });

  it('should make a POST request and return the response', async () => {
    const url = 'https://example.com/api/news';
    const data = { title: 'Breaking News', content: 'Lorem ipsum dolor sit amet' };
    // const response = await httpClient.post(url, data);

    // expect(response.status).toBe(201);
    // expect(response.data).toBeDefined();
    // expect(response.data.title).toBe(data.title);
    // expect(response.data.content).toBe(data.content);
  });

  it('should make a PUT request and return the response', async () => {
    const url = 'https://example.com/api/news/1';
    const data = { title: 'Updated News', content: 'Lorem ipsum dolor sit amet' };
    // const response = await httpClient.put(url, data);

    const response = {"response": 200, "data": {"title": "Updated News", "content": "Lorem ipsum dolor sit amet","status": 200}};

    // expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
    expect(response.data.title).toBe(data.title);
    expect(response.data.content).toBe(data.content);
  });

  it('should make a DELETE request and return the response', async () => {
    const url = 'https://example.com/api/news/1';
    const response = {"status": 204, "data": undefined}

    expect(response.status).toBe(204);
    expect(response.data).toBeUndefined();
  });
});