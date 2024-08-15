import { CollectionPoint } from '../models/CollectionPoint.model.js';
import { Address } from '../models/Address.model.js';


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

export const getPointByCity = async (req, res) => {
  try {
      const { city } = req.params;

      const points = await CollectionPoint.findAll({
          include: {
              model: Address,
              where: { city }
          }
      });

      if (points.length === 0) {
          return res.status(404).json({ message: 'Nenhum ponto de coleta encontrado para esta cidade.' });
      }

      return res.status(200).json({ points });

  } catch (error) {
      return res.status(400).json({ messageError: error.message });
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
            where: { collection_point_id: id }
          }
        }
      )

    return res.status(201).json({message: 'Ponto de coleta editado com sucesso'});
}