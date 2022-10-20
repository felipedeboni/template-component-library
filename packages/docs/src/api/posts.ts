import { rest } from 'msw';

export const createPost = rest.post('/api/posts/create', (req, res, ctx) => {
  return res(
    ctx.json({
      message: 'it works'
    })
  );
});
