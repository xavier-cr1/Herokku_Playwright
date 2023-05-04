import { test, expect } from '@playwright/test';

test('should create a person', async ({ request }) => {
    const post_persons_response = await request.post(`http://localhost:8080/people`, {
        data: {
            "id": 2,
            "name": "Frank",
            "age": 18
        }
    });
    expect(post_persons_response.status()).toBe(200);
  
    const get_persons_response = await request.get(`http://localhost:8080/people`);
    expect(get_persons_response.status()).toBe(200);
    expect(await get_persons_response.json()).toContainEqual(expect.objectContaining({
        "id": 2,
        "name": "Frank",
        "age": 18
    }));
  });