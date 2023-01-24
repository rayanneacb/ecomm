import request from 'supertest';

import { app } from '../src/app.js'
import { client, getUsersCollection } from '../repositories/accountRepository.js';

describe('Account Creation', () => {
    afterEach(async () => {
        await client.connect();
        const usersCollection = await getUsersCollection(client);
        await usersCollection.deleteMany({});
        await client.close();
    });

    it('should create an user given correct user data', async () => {
        await request(app)
            .post('/accounts')
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .send({
                name: 'ana',
                email: 'ana@pagonxt.com',
                password: '1234'
            })
            .expect(201)
            .expect(({ body }) => {
                expect(body).toEqual({
                    id: expect.any(String),
                    name: 'ana',
                    email: 'ana@pagonxt.com',
                    createdDate: new Date().toISOString().slice(0, 10)
                })
            });
    });
});