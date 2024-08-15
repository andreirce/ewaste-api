import { Coupon } from '../models/Coupon.model.js';

export const createCoupon = async (req, res) => {
    try {

        const { code, discount_value, expiration_date, user_id } = req.body

        await Coupon.sync()
        const newCoupon = await Coupon.create({ code, discount_value, expiration_date, user_id });
        return res.status(201).json({ newCoupon })

    } catch (error) {
        return res.status(400).json({ messageError: error.message })
    }
}

export const getAllCoupon = async (req, res) => {
    try {

        const coupons = await Coupon.findAll()
        return res.json({ coupons })

    } catch (error) {

        return res.status(400).json({ messageError: error.message })
    }
}

export const deleteCoupon = async (req, res) => {

    const { id } = req.params;
    await Coupon.destroy({
        where: {
            id
        }
    })

    return res.status(200).json({ message: 'Cupom deletado com sucesso' })
}

export const updateCoupon = async (req, res) => {
    const { id } = req.params;
    const { discount_value, expiration_date } = req.body;

    await Coupon.update(
        { discount_value, expiration_date },
        {
            where: {
                id
            }
        }
    )

    return res.status(200).json({ message: 'Cupom editado com sucesso' })
}