var Mocha = require('mocha'),
    fs = require('fs'),
    path = require('path'),
    confit = require('confit'),
    handlers = require('shortstop-handlers'),
    yargs = require('yargs'),

    baseDir = path.resolve(__dirname, 'test/functional'),
    testDir = path.resolve(baseDir, 'spec'),
    confitOptions = {
        protocols: {
            path: handlers.path(testDir, {}),
            env: handlers.env({}),
            argv: function argHandler(val) {
                var argv = yargs.argv;
                return argv[val] || '';
            }
        }
    };
confitOptions.basedir = path.join(baseDir, 'config');
console.log(confitOptions);
confit(confitOptions).create(function (err, config) {
    // Instantiate a Mocha instance.
    var target = yargs.argv.target && config.get(`test:${yargs.argv.target}`);

    var base = config.get(`test:base`) || {
            grep: '',
            timeout: 60000,
            reporter: 'spec'
        };
    console.log(target);
    var conf = Object.assign(base, target);
    console.log(conf);
    // process.exit(0)
    var mocha = new Mocha(conf);

    process.env.nemoBaseDir = path.resolve(__dirname, 'test/functional');
// Add each .js file to the mocha instance
    fs.readdirSync(testDir).filter(function(file){
        // Only keep the .js files
        return file.substr(-3) === '.js';

    }).forEach(function(file){
        mocha.addFile(
            path.join(testDir, file)
        );
    });

// Run the tests.
    mocha.run(function(failures){
        process.on('exit', function () {
            process.exit(failures);  // exit with non-zero status if there were failures
        });
    });
});
