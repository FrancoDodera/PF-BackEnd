const data = require('../../fake-api')
const CarModel = require('../../models/CarModel.js')
const Category = require('../../models/CategoryModel.js')
const Marca = require('../../models/MarcaModel.js')

const cleanArray = async (cars) => {
        const updatedCars = [];
        await Promise.all(
            cars.map(async(car)=>{
                const category = await Category.findById(car.idCategory);
                const marca = await Marca.findById(car.idMarca);
                const updatedCar = {
                            _id: car._id,
                            amount: car.amount,
                            idCategory: {
                                _id: category._id,
                                name: category.name
                            },
                            idMarca: {
                                _id: marca._id,
                                name: marca.name
                            },
                            name: car.name,
                            status:car.status,
                            age: car.age,
                            color: car.color,
                            price: car.price,
                            transmission: car.transmission,
                            description: car.description,
                            image: car.image
                        };
                        updatedCars.push(updatedCar);
                })
        )
    return updatedCars;
};  
const setCarsBDD = async () => {
    const result = await CarModel.insertMany(data)
    return result
}
const getAllCars = async () => {
    const cars = await CarModel.find()
    if(cars.length>0){
        const updatedCars = await cleanArray(cars);
        return updatedCars;
    }
    const result = await setCarsBDD();
    const updatedResult = await cleanArray(result);
    return updatedResult;
}
const getCarById = async (id) => {
    const car = await CarModel.findById(id)
    const category = await Category.findById(car.idCategory);
    const marca = await Marca.findById(car.idMarca);
    const updatedCar = {
        _id: car._id,
        amount: car.amount,
        idCategory: {
            _id: category._id,
            name: category.name
        },
        idMarca: {
            _id: marca._id,
            name: marca.name
        },
        name: car.name,
        age: car.age,
        status:car.status,
        color: car.color,
        price: car.price,
        transmission: car.transmission,
        description: car.description,
        image: car.image
    };
    return updatedCar
}
const getCarByName = async (name) => {
    if(name== ""){
        const car = await CarModel.find()
        const updatedCar =await cleanArray(car)
        return updatedCar
    }
    const car = await CarModel.find({ name: { $regex: name, $options: 'i' } })
    const updatedCar =await cleanArray(car)
    return updatedCar
}

const postCar=async(req,res)=>{
    try {
        
        const {amount,idCategory,idMarca,name,age,color,status,price,transmission,description,image}=req.body

        if(amount == 0 || typeof amount !=="number") return res.status(400).send('you must put an amount');
        if(idCategory =="") return res.status(400).send('you must put a category');
        if(idMarca =="") return res.status(400).send('you must place a mark');
        if(name == "") return res.status(400).send('you must put a name');
        if(age===0 || typeof age !=="number") return res.status(400).send('you must put a year');
        if(color == "") return res.status(400).send('you must put at least one color');
        if(price == 0) return res.status(400).send('you must put at least one price');
        if(transmission == "") return res.status(400).send('You must place at least one transmission');
        if(description == "") return res.status(400).send('you must put a description');
        if(image == "") return res.status(400).send('you must put an image');
        if(status == "") return res.status(400).send('you must put an status');


        const newCar = new CarModel({
            amount: amount,
            idCategory:idCategory,
            idMarca:idMarca,
            name:name,
            age:age,
            color:color,
            price:price,
            transmission:transmission,
            description:description,
            image:image,
            status:status
        })

        await newCar.save()
        return res.status(200).send('car uploaded successfully')
    } catch (error) {
        return res.status(404).send(error)
    }

}
const updateCar= async (info)=>{
    const {id,amount,idCategory,idMarca,name,age,color,status,price,transmission,description,image}=info

    try {
        if (amount>0) await CarModel.updateOne({_id:id},{amount:amount})
        if (idCategory != "") await CarModel.updateOne({_id:id},{idCategory:idCategory})
        if (idMarca != "") await CarModel.updateOne({_id:id},{idMarca:idMarca})
        if (name != "") await CarModel.updateOne({_id:id},{name:name})
        if (typeof age==='number' && age>0) await CarModel.updateOne({_id:id},{age:age})
        if (color != "") await CarModel.updateOne({_id:id},{color:color})
        if (typeof price==='number'&& price>0) await CarModel.updateOne({_id:id},{price:price})
        if ( transmission != "") await CarModel.updateOne({_id:id},{transmission:transmission})
        if ( description != "") await CarModel.updateOne({_id:id},{description:description})
        if ( image != "") await CarModel.updateOne({_id:id},{image:image})
        if ( status != "") await CarModel.updateOne({_id:id},{status:status})

    } catch (error) {
        throw error
    }

}

const deleteCar = async (id) => {
    const cars = await CarModel.find();
    const remainingCars = cars.filter(car => car._id.toString() != id);
    console.log(remainingCars);
    return remainingCars;
};

module.exports = {
    setCarsBDD,
    getAllCars,
    getCarById,
    getCarByName,
    postCar,
    updateCar,
    deleteCar}
