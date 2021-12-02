import { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const onChangeHandler = (e) => {
    setFilterText(e.target.value);
  };

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  });
  console.log(filtered);
  return (
    <div>
      <input
        placeholder="Filter Contact"
        value={filterText}
        onChange={onChangeHandler}
      />
      <div className="tags">
        <span>Name:</span>
        <span>Phone Number:</span>
      </div>
      <ul className="list">
        {filtered.map((contact, i) => (
          <li key={i}>
            <span>{contact.fullName}</span>
            <span>{contact.phoneNumber}</span>
          </li>
        ))}
      </ul>
      <div className="total">
        <p>Total contact: ({filtered.length})</p>
      </div>
    </div>
  );
}

export default List;
