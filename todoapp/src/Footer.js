function Footer({ items }) {
  let itemCount = items.length;
  let itemCheckedCount = items.filter((item) => item.isChecked).length;
  let percentage = (itemCheckedCount / itemCount) * 100;

  console.log(itemCount);
  return (
    <div>
      <p>
        You have {itemCount} item in your list, and you already completed
        {itemCheckedCount}, {percentage}%
      </p>
    </div>
  );
}

export default Footer;
