import { Category } from "../models/Category.model.js";


export const createCategory = async (req, res) => {
    try {
        
        const { category_name } = req.body;

        await Category.sync();
        const newCategory = await Category.create({
            category_name
        });
        return res.status(201).json({ newCategory });

    } catch (error) {
        return res.status(400).json({messageError: error.message})
    }
}

export const getAllCategory = async (req,res) => {
    try {

        const category = await Category.findAll();
        return res.status(201).json({category});

    } catch (error) {

        return res.status(400).json({messageError: error.message})
    }
}

export const deleteCategory = async (req,res) => {
    const { id } = req.params;
    await Category.destroy({
        where: {
            category_id: id
        },
    });
    return res.status(201).json({message: 'categoria deletado com sucesso'})
}

export const updatedCategory = async (req,res) => {
    const { id } = req.params
    const { category_name } = req.body

    await Category.update(
        { category_name },
        { where: {
            category_id: id
        }}
    )

    return res.status(200).json({message: 'categoria editada com sucesso'})
}