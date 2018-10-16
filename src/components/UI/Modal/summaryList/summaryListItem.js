import React from "react";
import Icon from "../../assets/icons/Icon";
export default function summaryListItem(props) {
    const {item} = props;
  return (
    <li>
      {item.amount} x {item.type}
      <Icon type={item.type} />
    </li>
  );
}
