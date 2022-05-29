//Adding new Blogs to the backend system

const postBlog = (model) => {
    return async(req, res) => {
        try {
            let item = await model.insertMany([req.body]);
            return res.send(item);
        } catch (error) {
            console.log(error);
        }
    }
};


//Ability to list all blogs by popularity

const getBlogByPopularity = (model) => {
    return async(req, res) => {
        try {
           let item = await model.find({}).sort({"likes" : -1});
           return res.send(item);
        } catch (error) {
            console.log(error);
        }
    }
}

//Ability to search blogs based on author and title

const getBlogByAuthorAndTitle = (model) => {
    return async(req, res) => {
        try {
           let item = await model.find({});
           item = item.filter((ele) => req.body.author?  ele.author == req.body.author : ele.title == req.body.title);
           return res.send(item);
        } catch (error) {
            console.log(error);
        }
    }
}

//Ability to view a blog

const getBlogById = (model) => {
    return async(req, res) => {
        try {
           let item = await model.find({});
           item = item.filter((ele) => ele.id == req.body.id);
           return res.send(item);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = (model) => {
    return {
        postBlog : postBlog(model),
        getBlogByPopularity : getBlogByPopularity(model),
        getBlogByAuthorAndTitle : getBlogByAuthorAndTitle(model),
        getBlogById : getBlogById(model)
    }
};