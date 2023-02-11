import { OrdersTables } from "../../types/interfaces";

interface Props {
    order: OrdersTables,
}

const FacturaCards = ({ order }: Props) => {
   
    return (
        <>
            <div className='factura__cards'>
                <img className='factura__img' src={order.photo} alt="" />
                <div className='factura__description'>
                    <p className='factura__nameItem'>{order.name}</p>
                    <h2 className='factura__price'>${order.price}.000</h2>
                </div>
                <h3>{order.count}</h3>
            </div>
        </>
    );
};

export default FacturaCards;