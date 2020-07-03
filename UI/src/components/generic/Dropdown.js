import React, { Component } from "react";
import classNames from "classnames";

class Dropdown extends Component {
  constructor(props) {
    super(props);
  }
  generateOptions = () => {
    const { data } = this.props;
    //const data  = [{value:'a',desc:'12'},{value:'b',desc:'c'}]
    console.log('props ',this.props);
    console.log('dataDrop ',data.options.value);
    /* const options = data.map((op, i)=>{
      console.log(op.value)
    }) */
     if (!data || data.length === 0) {
      return null;
    }
    const options = data.options.map((option, i) => {
      return (
        <option key={"option_" + i} value={option.value} name={option.value}>
          {option.description}
        </option>
      );
    }); 
    return options;
  };
  render() {
    const options = this.generateOptions();
    const { data, onChange, value, mandatory, required } = this.props;
    if (!data) {
      return null;
    }
    return (
      <div className="form-group">
        <label className={classNames("col-sm-12", required ? "required" : "")}>
          {/*{data.header}*/}
          Platform
        </label>
        <div className="col-sm-12">
          <select
            name={data.name}
            className={classNames(
              "form-control form-control-line",
              mandatory ? "mandatory" : ""
            )}
            value={value}
            onChange={onChange}
          >
            <option value="">Select</option>
            {options}
          </select>
        </div>
      </div>
    );
  }
}

export default Dropdown;
