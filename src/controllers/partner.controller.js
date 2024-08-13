import { Partner } from "../models/Partner.model.js";


export const createPartner = async (req, res) => {
    try {
        
        const { manufacturer_name, email, cnpj, phone, address_id } = req.body;

        await Partner.sync();
        const newPartner = await Partner.create({ manufacturer_name, email, cnpj, phone, address_id});
        return res.status(201).json({ newPartner });

    } catch (error) {
        return res.status(400).json({messageError: error.message})
    }
}

export const getAllPartner = async (req,res) => {
    try {

        const partners = await Partner.findAll();
        return res.json({partners});

    } catch (error) {

        return res.status(400).json({messageError: error.message})
    }
}

export const deletePartner = async (req,res) => {

    const { id } = req.params;
    await Partner.destroy({
        where: {
          id
        }
      })

    return res.json({message: 'Parceiro deletado com sucesso'})
}

export const updatePartner = async (req,res) => {
    const { id } = req.params;
    const { manufacturer_name, email,cnpj, phone } = req.body;
    
    await Partner.update(
        { manufacturer_name, email,cnpj, phone },

        {
          where: {
            id
          }
        }
      )

    return res.json({message: 'Parceiro editado com sucesso'})
}