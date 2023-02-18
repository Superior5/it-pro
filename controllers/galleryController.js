import Gallery from "../models/galleryModel.js";


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
    
    let galleryArr = await Gallery.find();
    let result = {};
    galleryArr.forEach((el)=> {
        
        result[el.year] != undefined ? result[el.year].push(...el.imgs) : result[el.year] = el.imgs;
    })
    
    res.json(result);
};
