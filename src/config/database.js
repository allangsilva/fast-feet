module.exports = {
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: 'docker',
  database: 'fast-feet',
  define: {
    timestamps: true,
    underscoded: true,
    underscodedAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};
