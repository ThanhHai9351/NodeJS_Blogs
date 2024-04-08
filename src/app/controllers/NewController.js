
class NewController{

    //[GET] /news
    index(req,res){
        res.render('news');
    }

    show(req,res){
        res.send('New DETAILS');
    }
}

module.exports = new NewController;