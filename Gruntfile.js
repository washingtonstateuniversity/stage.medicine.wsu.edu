module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

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
					'mi_wa_graph_edge.js',
					'mi_wa_graph_edgePreload.js',
					'wa_seats_comparison_edge.js',
					'wa_seats_comparison_edge_preload.js'
				]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Default task(s).
	grunt.registerTask('default', ['uglify']);

};
