import { useState,useEffect } from "react";

const initialFormValues = { fullName: '', phoneNumber: ''};

function Form({ addContact, contacts }) {
  const [form, setForm] = useState(initialFormValues);

  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts])

  const onChangeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.fullName === '' || form.phoneNumber === '') {
      return false;
    }
    addContact([...contacts, form]);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="fullName"
          placeholder="Name"
          value={form.fullName}
          onChange={onChangeHandler}
          required
        />
      </div>
      <div>
        <input
          name="phoneNumber"
          placeholder="Phone Number"
          value={form.phoneNumber}
          onChange={onChangeHandler}
          required
        />
      </div>

      <div className="btn">
      <button className="addBtn">Add</button>
      </div>    
    </form>
  );
}

export default Form;
