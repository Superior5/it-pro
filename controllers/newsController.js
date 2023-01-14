import News from "../models/newsModel.js";



export async function getNews(req, res) {
    await News.find().then((date) => {
        res.json(date);
    }).catch((err) => {
        res.status(300).
            json({ message: err });
    });
};

export async function addNews(req, res) {
    let date = req.body;

    await News.insertMany({
        title: date.title,
        content: date.content,
        img: req.file?.path.replaceAll("\\", "/"),
    }).then(() => {
        res.json({ message: "Данные добавлены." });
    }).catch(() => {
        res.status(300).json({ message: "Произошла ошибка при добавлении." });
    });
};



export async function deleteNews(req, res) {
    let date = req.body;


    await News.deleteOne({
        _id: date.id,
    }).then(() => {
        res.json({ message: "Данные добавлены." });
    }).catch(() => {
        res.status(300).json({ message: "Произошла ошибка при удалении." });
    });
};



export async function updateNews(req, res) {
    let date = req.body;

    await News.updateOne({
        _id: date.id,
    }, {
        title: date.title,
        content: date.content,
        img: req.file?.path.replaceAll("\\", "/"),
    }).then(() => {
        res.json({ message: "Данные добавлены." });
    }).catch(() => {
        res.status(300).json({ message: "Произошла ошибка при обновлении." });
    });
};