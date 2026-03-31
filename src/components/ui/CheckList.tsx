import { CheckIcon } from '../icons/CheckIcon'

interface CheckListProps {
  items: string[]
  listClassName?: string
  itemClassName?: string
}

export function CheckList({ items, listClassName, itemClassName }: CheckListProps) {
  return (
    <ul className={listClassName}>
      {items.map((item) => (
        <li key={item} className={itemClassName}>
          <CheckIcon />
          {item}
        </li>
      ))}
    </ul>
  )
}
