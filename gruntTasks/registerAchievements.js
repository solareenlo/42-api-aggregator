var async = require('async');
var api = require('../app/libraries/api');
var mysql = require('../app/libraries/mysql').client();
var registerAchievements = require('../app/functions/registerAchievements');

module.exports = (grunt) => {
  grunt.task.registerTask('register-achievements', 'Fill Achievements table', function () {
    const done = this.async();
    mysql.connect((error) => {
      if (error) {
        done(error);
        return;
      }
      const pageSize = 50;
      let page = 1; // intra start page 1 (omegalol)
      let resLength = pageSize;
      async.whilst(
        () => resLength >= pageSize,
        (callback) => {
          api.getAchievements(page, pageSize)
            .then((achievements) => {
              resLength = achievements.length;
              page += 1;
              registerAchievements(achievements, mysql, (err) => callback(err));
            })
            .catch(err => {
              if (err.message) {
                grunt.log.writeln('WARN >>'['yellow'], err.message);
              } else {
                grunt.log.writeln('WARN >>'['yellow'], err.message);
              }
              callback();
            });
        },
        (err) => {
          mysql.end();
          done(err);
        }
      );
    });
  });
};
