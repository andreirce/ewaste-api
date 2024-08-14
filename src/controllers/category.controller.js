import { Category } from "../models/Category.model.js";

export const createCategory = async (req, res) => {
    try {

        const { category_name } = req.body;
        await Category.sync();
        const newCategory = await Category.create({ category_name });
        return res.status(201).json({ newCategory });

    } catch (error) {
        return res.status(400).json({ messageError: error.message });
    }
}

export const getAllCategories = async (req, res) => {

    try {
        const categories = await Category.findAll();
        return res.json({ categories });
        
    } catch (error) {
        return res.status(400).json({ messageError: error.message });
    }
}


export const getCategoryById = async (req, res) => {
    try {

        const { id } = req.params;
        const category = await Category.findByPk(id);

        if (!category) {
            return res.status(404).json({ message: "Categoria não encontrada" });
        }

        return res.json({ category });
    } catch (error) {

        return res.status(400).json({ messageError: error.message });
    }
}

export const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { category_name } = req.body;
        const [updated] = await Category.update(
            { category_name },
            { where: { category_id: id } }
        );

        if (!updated) {
            return res.status(404).json({ message: "Categoria não encontrada" });
        }

        return res.json({ message: 'Categoria atualizada com sucesso' });
    } catch (error) {
        return res.status(400).json({ messageError: error.message });
    }
}

export const deleteCategory = async (req, res) => {

    try {
        const { id } = req.params;
        const deleted = await Category.destroy({
            where: {
                category_id: id
            }
        });

        if (!deleted) {
            return res.status(404).json({ message: "Categoria não encontrada" });
        }

        return res.json({ message: 'Categoria deletada com sucesso' });

    } catch (error) {
        return res.status(400).json({ messageError: error.message });
    }
}
