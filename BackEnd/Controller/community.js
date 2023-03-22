const Post = require("../Model/Post");
const Comment = require('../Model/Comment')
exports.addPost = async (req, res) => {
    try {
        const post = new Post(req.body)
        await post.save()
        res.send(post)
    } catch (error) {
        res.status(400).send(error.message);
    }
}

exports.getOnePost = async (req, res) => {
    try {
        const { pid } = req.body
        const post = await Post.findById(pid)
        res.send(post)

    } catch (error) {
        res.status(400).send(error.message);
    }
}

exports.getAllPost = async (req, res) => {
    try {

        const posts = await Post.find().populate("uid").populate("comments.uid")
        res.send(posts)

    } catch (error) {
        res.status(400).send(error.message);
    }
}

exports.updatePost = async (req, res) => {
    try {
        const pid = req.body.pid
        const newob = req.body.newob
        await Post.findByIdAndUpdate(pid, newob)
        res.send("ss")
    } catch (error) {
        res.status(400).send(error.message);
    }
}

exports.getMyPosts = async (req, res) => {
    try {
        const { uid } = req.body

        const posts = await Post.find({ uid: uid })

        res.send(posts)
    } catch (error) {
        res.status(400).send(error.message);
    }
}

exports.addLilke = async (req, res) => {
    try {
        const { uid, pid } = req.body
        const post = await Post.findById(pid)
        post.likes.push(uid)
        await post.save()
        res.send(post)
    } catch (error) {
        res.status(400).send(error.message);
    }
}

exports.delLilke = async (req, res) => {
    try {
        const { uid, pid } = req.body
        const post = await Post.findById(pid)
        const index = post.likes.indexOf(uid);
        if (index > -1) {
            post.likes.splice(index, 1);
        }
        await post.save()
        res.send(post)
    } catch (error) {
        res.status(400).send(error.message);
    }
}


exports.addComment = async (req, res) => {
    try {
        const { uid, content, pid } = req.body
        const com = { uid, content }
        let post = await Post.findById(pid)
        post.comments.push(com)
        await post.save()
        post = await Post.findById(pid).populate("comments.uid")
        res.send(post)
    } catch (error) {
        res.status(400).send(error.message);
    }
}

exports.deletePost = async (req, res) => {
    try {
        const { pid } = req.body
        await Post.findByIdAndDelete(pid)
        res.send("success")

    } catch (error) {
        res.status(400).send(error.message);
    }
}

exports.searchPost = async (req, res) => {
    try {
        const posts = await Post.find({ title: { $regex: `${req.body.title}` } });
        if (!posts) res.status(200).json({ status: false, message: "No Data Found" });
        res.status(200).json({ status: true, data: posts, message: "Data Fetched Successfully" });
    } catch (err) {
        res.status(500).json({ status: false, error: err, message: "Data Fetch Failed." });
    }
}