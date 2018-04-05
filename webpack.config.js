var path = require("path");  //we want to create an absolute path for the bundle file location. 'path' is already included in node.js

// We create an object to tell webpack what to do.
module.exports = {
	entry: "./app/assets/scripts/App.js",  //we tell webpack which file it should be looking at to create the bundle (main App.js file)
	output: {												//we tell where the bundle should be created	
		path: path.resolve(__dirname, "./app/temp/scripts"),  //generate an absolute path to this directory
		filename: "App.js"					//control the name of the bundle file
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				},
				test: /\.js$/, 
				exclude: /node_modules/
			}
		]
	}
}