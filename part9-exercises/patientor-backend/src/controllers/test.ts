export const testBackend = (_req: any, res: any) => {

    console.log('Pinged here!');

    return res.json('pong');
};