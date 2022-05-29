const postBlog = (model) => {
    return (req, res) => {
        try {
            console.log(req.body);
            return res.send(req.body);
        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = (model) => {
    return {
        postBlog : postBlog(model)
    }
};