# 42api-aggregator
42 API AGGREGATOR scrape 42 api school into a mysql DB with only *usefull* informations using [nodejs](https://nodejs.org/en/docs/) & [gruntjs](https://gruntjs.com/)

See [wiki](https://github.com/solareenlo/42api-aggregator/wiki)

## Getting started
### (mysql)
- start [mysql-nextjs-test](https://github.com/solareenlo/mysql-nextjs-test)

### (node & grunt)
- Install [nodejs](https://nodejs.org/) and make sure `npm` is in your **PATH**
- Install grunt $> `npm install -g grunt-cli`

### (project & node_modules)
```sh
git clone git@github.com:solareenlo/42api-aggregator.git
cd 42api-aggregator
npm install
```

Create a new app on [42 Intranet](https://profile.intra.42.fr/oauth/applications)

### (Environments variables)
In the project root $> `touch .env`

then in your file add the following keys
```gradle
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=myDB
FT_API_ENDPOINT=https://api.intra.42.fr
FT_API_UID=MY_APP_UID
FT_API_SECRET=MY_APP_SECRET
FT_API_RATE_LIMIT_PER_SECOND=1.8
FT_API_RATE_LIMIT_PER_HOUR=1200
```

### (Start)
$> `npm run scripts` or `grunt`

note: not all tasks are in the prompt, to see all available tasks run `grunt --help`
to run a specific tasks you can run `grunt init-database` where `grunt specific-task`

## License
[MIT](LICENSE.md)
