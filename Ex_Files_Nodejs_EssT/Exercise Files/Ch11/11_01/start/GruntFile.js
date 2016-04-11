module.exports = function(grunt){
	grunt.initConfig({
		jshint: {
			files: ["*.js", "lib/*.js", "test/*.js"],
			options: {
				esnext: true,
				globals:{
					jquery: true
				}
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.registerTask("default", ["jshint"]);
};