function Footer({ items }) {
  let itemCount = items.length;
  let itemCheckedCount = items.filter((item) => item.isChecked).length;
  let percentage = Math.round((itemCheckedCount / itemCount) * 100);
  console.log(itemCheckedCount);
  return (
    <div>
      <p>
        You have <b>{itemCount}</b> item in your lists, and you already
        completed <b>{itemCheckedCount}</b>, {percentage}%
      </p>
    </div>
  );
}
export default Footer;
