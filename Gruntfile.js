'use strict';

module.exports = function(grunt) {

grunt.loadNpmTasks('grunt-cordovacli');
grunt.initConfig({
//  cordovacli: {
//    options : {
//      cmd : 'run',
//      platforms : [ 'android' ]
//    },
//      add_platforms: {
//          options: {
//              command: 'platform',
//              action: 'add',
//              platforms: ['android']
//          }
//      }
//  }
    
    cordovacli: {
    options: {
        path: 'myHybridAppFolder',
        cli: 'cordova'
    },
    cordova: {
        options: {
            command: ['create','platform','plugin','build'],
            platforms: ['ios','android'],
            plugins: ['device','dialogs'],
            path: 'myHybridAppFolder',
            id: 'io.cordova.hellocordova',
            name: 'HelloCordova'
        }
    },
    create: {
        options: {
            command: 'create',
            id: 'com.myHybridApp',
            name: 'myHybridApp'
        }
    },
    add_platforms: {
        options: {
            command: 'platform',
            action: 'add',
            platforms: ['ios', 'android', 'browser']
        }
    },
    add_plugins: {
        options: {
            command: 'plugin',
            action: 'add',
            plugins: [
                'battery-status',
                'camera',
                'console',
                'contacts',
                'device',
                'device-motion',
                'device-orientation',
                'dialogs',
                'file',
                'geolocation',
                'globalization',
                'inappbrowser',
                'media',
                'media-capture',
                'network-information',
                'splashscreen',
                'vibration'
            ]
        }
    },
    remove_plugin: {
        options: {
            command: 'plugin',
            action: 'rm',
            plugins: [
                'battery-status'
            ]
        }
    },
    build_ios: {
        options: {
            command: 'build',
            platforms: ['ios']
        }
    },
    build_android: {
        options: {
            command: 'build',
            platforms: ['android']
        }
    },
    emulate_android: {
        options: {
            command: 'emulate',
            platforms: ['android'],
            //args: ['--target','Nexus5']
        }
    },
    run_browser: {
        options: {
            command: 'run',
            platforms: ['browser'],
        }
    },
    add_facebook_plugin: {
        options: {
            command: 'plugin',
            action: 'add',  
            plugins: [                 
                'com.phonegap.plugins.facebookconnect'
            ],
            args:['--variable','APP_ID=fb12132424','--variable','APP_NAME=myappname']
        }
    }
}
});
    
//  // A very basic default task.
//  grunt.registerTask('default', 'Log some stuff.', function() {
//    grunt.log.write('Logging some stuff...').ok();
//  });
    
      // A very basic default task.
  grunt.registerTask('default', [
      'cordovacli:create',
    'cordovacli:add_platforms',
//      'cordovacli:emulate_android',
      'cordovacli:run_browser',
    ]);

};