import React from "react"

const SelectInput = ({
  name,
  label,
  onChange,
  defaultOptions,
  value,
  error,
  options,
}) => {
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <select
          className="form-control"
          name={name}
          value={value}
          onChange={onChange}
        >
          <option value="0">Danışman</option>
          <option value="1">Anabilim Dalı Başkanı</option>
          <option value="2">Öğrenci İşleri</option>
          <option value="3">Enstitü Müdürü</option>
          <option value="4">Enstitü Yönetim Kurulu Başkanı</option>
        </select>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    );
};
export default SelectInput;