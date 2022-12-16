import { Content } from './content';

describe('Notification Content', () => {
  test('it should be able to create a notification content', () => {
    const content = new Content('You received a notification');

    expect(content).toBeTruthy();
  });

  test('it should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('aaa')).toThrow();
  });

  test('it should not be able to create a notification content with less than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
