import { Item } from '../models/Item.model.js';

export const createItem = async (req, res) => {
    try {
        const { name, description, category } = req.body;

        await Item.sync();
        const newItem = await Item.create({ name, description, category });
        return res.status(201).json({ newItem });

    } catch (error) {
        return res.status(400).json({ messageError: error.message });
    }
}

export const getAllItems = async (req, res) => {
    try {
        const items = await Item.findAll();
        return res.json({ items });

    } catch (error) {
        return res.status(400).json({ messageError: error.message });
    }
}

export const deleteItem = async (req, res) => {
    try {
        const { id } = req.params;
        await Item.destroy({
            where: {
                id
            }
        });

        return res.status(200).json({ message: 'Item deletado com sucesso' });

    } catch (error) {
        return res.status(400).json({ messageError: error.message });
    }
}

export const updateItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, category } = req.body;

        await Item.update(
            { name, description, category },
            {
                where: {
                    id
                }
            }
        );

        return res.status(200).json({ message: 'Item editado com sucesso' });

    } catch (error) {
        return res.status(400).json({ messageError: error.message });
    }
}