import News from "../models/newsModel.js";
import fs from 'fs';


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
        img: date.img
    }).then(() => {
        res.json({ message: "Данные добавлены." });
    }).catch(() => {
        res.status(300).json({ message: "Произошла ошибка при добавлении." });
    });
};


export async function uploadImage(req, res) {
    let date = req.body;

    res.json({ imgPath: req.files[0]?.path.replaceAll("\\", "/") });

};

export async function deleteNews(req, res) {
    let date = req.body;
    console.log(date);

    let news = News.find({
        _id: date.id,
    })


    fs.unlink(`.${news.img}`, err => {
        if (err) throw err; // не удалось удалить файл
    });
   
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
        img: date.img
    }).then(() => {
        res.json({ message: "Данные обновлены." });
    }).catch(() => {
        res.status(300).json({ message: "Произошла ошибка при обновлении." });
    });
};