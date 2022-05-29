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

const getBlog = (model) => {
    return async(req, res) => {
        try {
           let item = await model.find({}).sort({"likes" : -1});
           return res.send(item);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = (model) => {
    return {
        postBlog : postBlog(model),
        getBlog : getBlog(model)
    }
};