import Gallery from "../models/galleryModel.js";
import fs from "fs";

export async function addGallery(req, res) {
    let date = req.body;

    for (let el of req.files) {

        await Gallery.insertMany({
            year: date.year,
            imgs: el?.path.replaceAll("\\", "/"),
        }).catch(() => {
            res.json({ msg: 'ошибка при добавлении' })
        })
    }
    res.json({ msg: "Данные добавленны" })
}

export async function getGalleries(req, res) {

    let galleryArr = await Gallery.find();
    let result = {};
    galleryArr.forEach((el) => {

        result[el.year] != undefined ? result[el.year].push(el.imgs) : result[el.year] = [el.imgs];
    })

    res.json(result);
};


export async function deleteImage(req, res) {
    let date = req.body;


    fs.unlink(`${date.img}`, err => {
        if (err) throw err; // не удалось удалить файл
    });

    await Gallery.deleteOne({
        imgs: date.img
    }).then(() => {
        res.json({ msg: "Данные удалены" })
    }).catch(() => {
        res.json({ msg: "Ошибка при удалении" })
    })
};