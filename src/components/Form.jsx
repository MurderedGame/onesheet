import React from 'react';

export const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Character Name</label>
        <input className="form-control" id="name" />
      </div>
      <div className="form-group">
        <label htmlFor="class">Class</label>
        <input
          className="form-control"
          id="class"
        />
      </div>
      <div className="form-group">
        <label htmlFor="race">Race</label>
        <input
          className="form-control"
          id="race"
        />
      </div>
      <div className="form-group">
        <label htmlFor="str">Strength</label>
        <input
          className="form-control"
          id="str"
        />
      </div>
      <div className="form-group">
        <label htmlFor="dex">Dexterity</label>
        <input
          className="form-control"
          id="dex"
        />
      </div>
      <div className="form-group">
        <label htmlFor="con">Constitution</label>
        <input
          className="form-control"
          id="con"
        />
      </div>
      <div className="form-group">
        <label htmlFor="int">Intelligence</label>
        <input
          className="form-control"
          id="int"
        />
      </div>
      <div className="form-group">
        <label htmlFor="wis">Wisdom</label>
        <input
          className="form-control"
          id="wis"
        />
      </div>
      <div className="form-group">
        <label htmlFor="cha">Charisma</label>
        <input
          className="form-control"
          id="cha"
        />
      </div>
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
export default Form;