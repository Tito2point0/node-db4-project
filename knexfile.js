const sharedConfig = {
    client: 'sqlite3',
    useNullAsDefault: true,
    migrations: {
        directory: './migrations'
    },
    pool: {
        afterCreate: (conn, done) => {
            conn.run('PRAGMA foreign_keys = ON', done);
        }
    }
};

module.exports = {
    development: {
        ...sharedConfig,
        connection: { filename: './data/recipes.db3' },
        seeds: { directory: './seeds' }
    },
    testing: {
        ...sharedConfig,
        connection: { filename: './data/recipes-test.db3' }
    },
    production: { }

};