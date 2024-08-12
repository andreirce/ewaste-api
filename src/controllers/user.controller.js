import { User } from '../models/User.model.js';


export const createUser = async (req, res) => {
    try {
        
        const { name, email, password, cpf, cnpj, phone, address_id } = req.body;

        await User.sync();
        const newUser = await User.create({name, email, password, cpf, cnpj, phone, address_id});
        return res.status(201).json({ newUser });

    } catch (error) {
        return res.status(400).json({messageError: error.message});
    }
}

export const getAllUser = async (req,res) => {
    try {

        const users = await User.findAll();
        return res.json({users});

    } catch (error) {

        return res.status(400).json({messageError: error.message});
    }
}

export const deleteUser = async (req,res) => {

    const { id } = req.params;
    await User.destroy({
        where: {
          id
        }
      })

    return res.status(200).json({message: 'Usuário deletado com sucesso'});
}

export const updateUser = async (req,res) => {
    const { id } = req.params;
    const { name, email, password, cpf, cnpj, phone } = req.body;

    await User.update(
        { name, email, password, cpf, cnpj, phone },

        {
          where: {
            id
          }
        }
      )

    return res.status(200).json({message: 'Usuario editado com sucesso'});
}