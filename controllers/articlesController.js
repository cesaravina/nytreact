var Article = require('../models/Article')

module.exports = {
    // Retrieve Articles from DB
    retrieve: function(req, res){
        var query;
        if (req.query) {
            query = req.query;
        }else{
            query = req.params.id ? { _id: req.params.id } : {};
        }
        Article.find(query)
        .then(function(doc){
            res.json(doc);
        }).catch(function(err){
            res.json(err)
        });
    },
    // Save the articles to the DB
    save: function(req, res){
        var article = req.body.article;
        var result = {};

        result.title = article.headline.main;
        result.articleDate = article.pub_date;
        result.url = article.web_url;
        result.saved = true;

        var entry = new Article(result);

        entry.save(function(err, doc){
            if (err){
                console.log(err);
            }else{
                res.json(doc)
            }
        });
    },
    // delete article
    destroy: function(req, res){
        Article.remove({
            _id: req.params.id
        })
        .then(function(doc){
            res.json(doc);
        })
        .catch(function(err){
            res.json(err);
        });
    }
};