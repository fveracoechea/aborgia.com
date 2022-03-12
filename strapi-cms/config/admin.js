module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '10069495f4a002b0d1a23b1f99d17bf4'),
  },
});
