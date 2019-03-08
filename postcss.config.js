module.exports = ({ file, options }) => ({
	plugins: {
		'autoprefixer': options.autoprefixer,
		'cssnano': options.cssnano
    }
    // plugins: {
	// 	'autoprefixer': false,
	// 	'cssnano': false
	// }
})