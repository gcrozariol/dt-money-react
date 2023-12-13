import { Transaction } from '../..'
import { PriceHighlight } from './styles'

interface TransactionListItemProps {
  transaction: Transaction
}

export function TransactionListItem({ transaction }: TransactionListItemProps) {
  return (
    <tr>
      <td width="50%">{transaction.description}</td>
      <td>
        <PriceHighlight variant={transaction.type}>
          {transaction.price.toFixed(2)}
        </PriceHighlight>
      </td>
      <td>{transaction.category}</td>
      <td>{transaction.createdAt}</td>
    </tr>
  )
}
