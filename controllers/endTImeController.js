import EndTime from "../models/endTimeModel.js";


export async function getTime(req, res) {




    await EndTime.find().then(date => {
        res.json(date[0])
    }).catch(err => {
        res.status(300).json({ msg: 'Ошибка получения даты' })
    });
}


export async function chooseTime(req, res) {
    let time = await EndTime.find();

    if (!Boolean(time[0])) {

        await EndTime.insertMany({
            endDate: req.body.date
        }).then(date => {
            res.json({ msg: 'Дата создана' })
        }).catch(err => {
            res.status(300).json({ msg: 'Ошибка задания даты' })
        });
    }
    else {
        await EndTime.updateOne({
            _id: time[0]._id
        }, {
            endDate: req.body.date
        }).then(date => {
            res.json({ msg: 'Дата изменена' })
        }).catch(err => {
            res.status(300).json({ msg: 'Ошибка задания даты' })
        });
    }
}