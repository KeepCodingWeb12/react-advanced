export default function List({ items, renderItem, getKey }) {
  return (
    items.length > 0 && (
      <ul>
        {items.map(item => (
          <li key={getKey(item)}>{renderItem(item)}</li>
        ))}
      </ul>
    )
  );
}
