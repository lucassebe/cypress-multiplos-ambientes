const { defineConfig } = require("cypress");

module.exports = defineConfig({

    env: {
        snapshotOnly: true,
        hideCredentials: true,
        hideCredentialsOptions: {
            auth: ['bearer'],
            body: ['company_id', 'username', "password"],
        }
    },
});