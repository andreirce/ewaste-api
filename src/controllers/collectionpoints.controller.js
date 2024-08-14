import { CollectionPoint } from '../models/CollectionPoint.model.js';


export const createPoint = async (req, res) => {
    try {
        
        const { responsible_company, operating_hours, address_id } = req.body;

        await CollectionPoint.sync();
        const newPoint = await CollectionPoint.create({ responsible_company, operating_hours, address_id });
        return res.status(201).json({ newPoint })

    } catch (error) {
        return res.status(400).json({messageError: error.message});
    }
}

export const getAllPoints = async (req,res) => {
    try {

        const CollectionPoints = await CollectionPoint.findAll();
        return res.json({CollectionPoints});

    } catch (error) {

        return res.status(400).json({messageError: error.message});
    }
}

export const deletePoints = async (req,res) => {

    const { id } = req.params;
    await CollectionPoint.destroy({
        where: {
          id
        }
      })

    return res.status(201).json({message: 'Ponto de coleta deletado com sucesso'});
}

export const updatePoints = async (req,res) => {
    const { id } = req.params;
    const { responsible_company, operating_hours } = req.body;

    await CollectionPoint.update(
        { responsible_company, operating_hours },

        {
          where: {
            id
          }
        }
      )

    return res.status(201).json({message: 'Ponto de coleta editado com sucesso'});
}