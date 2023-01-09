import User from "../models/userModel.js";


export async function getUser(req, res) {
    await User.find().then((date) => {
        res.json(date);
    }).catch((err) => {
        res.status(300).
            json({ message: err });
    });
};

export async function addUser(req, res) {
    let date = req.body;
    console.log(req.body);


    await User.insertMany({
        name: date.name,
        lastName: date.lastName,
        email: date.email,

    }).then(() => {
        res.json({ message: "Данные добавлены." });
    }).catch(() => {
        res.status(300).json({ message: "Произошла ошибка при добавлении." });
    });
};