import { Magic } from '@magic-sdk/admin';

export default defineEventHandler((event) => {
    const mAdmin = new Magic('test');
    return {
        api: 'works',
    };
});
