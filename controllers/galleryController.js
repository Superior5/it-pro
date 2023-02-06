import Gallery from "../models/adminModel.js";


export async function addGallery(req, res) {
    let date = req.body;
    let imgPaths = []; 
    for(let el of req.files) {
        imgPaths.push(el?.path.replaceAll("\\", "/"));
    }
    console.log(imgPaths);
    await Gallery.insertMany({
        year: date.year,
        imgs: imgPaths,
    }).then(()=> {
        res.json({msg: 'данные добавлены'})
    }).catch(()=> {
        res.json({msg: 'ошибка при добавлении'})
    })

  
}

export async function getGalleries(req, res) {

    res.json(await Gallery.find());
};
