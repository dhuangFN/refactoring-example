import { User } from './app';

describe('User class', () => {
    test('should be an adult if age is > 18', () => {
        const user = new User('John', 'Doe', 'john.doe@person.com', 30);
        expect(user.isAdult()).toBe(true);
    })
});