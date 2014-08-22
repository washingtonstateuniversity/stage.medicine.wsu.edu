module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			states: {
				src: [
					'js/medicine-states-edge.js',
					'js/medicine-states-edge-preload.js'
				],
				dest: 'js/medicine-states-comparison.js'
			},
			seats: {
				src: [
					'js/medicine-seats-edge.js',
					'js/medicine-seats-edge-preload.js'
				],
				dest: 'js/medicine-seats-comparison.js'
			}
		},

		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n' +
					'/*  See https://github.com/washingtonstateuniversity/stage.medicine.wsu.edu/ for full source.*/\n'
			},
			theme: {
				expand: true,
				cwd: 'js/',
				dest: 'js/',
				ext: '.min.js',
				src: [
					'medicine-states-comparison.js',
					'medicine-seats-comparison.js'
				]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Default task(s).
	grunt.registerTask('default', ['concat', 'uglify']);

};
