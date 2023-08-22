import { useContext } from 'react'
import { CartContext } from '../../../../contexts/cart.context'
import CartProduct from '../../../../types/cart.types'

import * as S from './styles'
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from 'react-icons/ai'

interface CartItemProps {
  product: CartProduct
}

const CartItem: React.FC<CartItemProps> = ({ product }) => {
  const { removeProductFromCart, increaseProductQuantity } =
    useContext(CartContext)

  const handleRemoveClick = () => {
    removeProductFromCart(product.id)
  }
  const handleIncreaseClick = () => {
    increaseProductQuantity(product.id)
  }

  return (
    <>
      <S.CartItemContainer>
        <S.CartItemImage imageUrl={product.imageUrl} />

        <S.CartItemInfo>
          <p>{product.name}</p>
          <p>R${product.price}</p>

          <S.CartItemQuantity>
            <AiOutlineMinus size={20} onClick={} />
            <p>{product.quantity}</p>
            <AiOutlinePlus size={20} onClick={handleIncreaseClick} />
          </S.CartItemQuantity>
        </S.CartItemInfo>
        <S.RemoveButton onClick={handleRemoveClick}>
          <AiOutlineClose size={25} />
        </S.RemoveButton>
      </S.CartItemContainer>
    </>
  )
}

export default CartItem
