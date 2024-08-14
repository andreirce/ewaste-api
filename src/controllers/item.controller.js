import { Item } from "../models/Item.model.js";


export const createItem = async (req, res) => {
    try {
        
        const { item_name, physical_condition, partner_id, user_id, category_id } = req.body;

        await Item.sync();
        const newItem = await Item.create({
            item_name, 
            physical_condition, 
            partner_id, 
            user_id, 
            category_id
        });
        return res.status(201).json({ newItem });

    } catch (error) {
        return res.status(400).json({messageError: error.message})
    }
}

export const getAllItems = async (req,res) => {
    try {

        const items = await Item.findAll();
        return res.status(201).json({items});

    } catch (error) {

        return res.status(400).json({messageError: error.message})
    }
}

export const deleteItems = async (req,res) => {
    const { id } = req.params;
    await Item.destroy({
        where: {
        item_id: id
        },
    });
    return res.status(200).json({message: 'item deletado com sucesso'})
}

export const updatedItem = async (req,res) => {
    const { id } = req.params;
    const { item_name, physical_condition, partner_id, user_id, category_id } = req.body;
    await Item.update(
        { item_name, physical_condition, partner_id, user_id, category_id },
        {
        where: {
            item_id: id
        },
        },
    );
    return res.status(200).json({message: 'produto editado com sucesso'})
}