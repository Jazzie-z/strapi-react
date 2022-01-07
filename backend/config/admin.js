module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8e21a0b33fdeef6a6f63923b4898323e'),
  },
});
