// web routes controlller

module.exports.get_home = function(req, res){

	res.locals.title = 'Jobson Okosun | Full Stack Web Developer';
	res.render('home');
}