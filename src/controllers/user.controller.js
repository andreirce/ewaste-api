import { User } from '../models/User.model.js';
import bcrypt from 'bcrypt';

const saltRounds = 10;

export const createUser = async (req, res) => {
    try {
        const { name, email, password, cpf, cnpj, phone, address_id } = req.body;

        const hashedPassword = await bcrypt.hash(password, saltRounds);

        await User.sync();
        const newUser = await User.create({ name, email, password: hashedPassword, cpf, cnpj, phone, address_id });
        return res.status(201).json({ newUser });

    } catch (error) {
        return res.status(400).json({ messageError: error.message });
    }
}

export const getAllUser = async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: { exclude: ['password'] }
        });
        return res.json({ users });

    } catch (error) {
        return res.status(400).json({ messageError: error.message });
    }
}

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    await User.destroy({
        where: {
            id
        }
    });

    return res.status(200).json({ message: 'Usuário deletado com sucesso' });
}

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, password, cpf, cnpj, phone } = req.body;

    const updateData = {
        name,
        email,
        cpf,
        cnpj,
        phone
    };

    if (password) {
        updateData.password = await bcrypt.hash(password, saltRounds);
    }

    await User.update(updateData, {
        where: {
            id
        }
    });

    return res.status(200).json({ message: 'Usuário editado com sucesso' });
}