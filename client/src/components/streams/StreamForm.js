import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  renderError = ({ error, touched }) => {
    if (!touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  renderInput = formProps => {
    // console.log(formProps);
    console.log(formProps.meta.touched);
    return (
      <div className="field">
        <label>{formProps.label}</label>
        <input
          onChange={formProps.input.onChange}
          value={formProps.input.value}
          autoComplete="off"
        />
        {this.renderError(formProps.meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    // console.log(formValues);
    this.props.onSubmit(formValues);
  };

  render() {
    // console.log(this.props);
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};

export default reduxForm({
  form: "streamForm",
  validate: validate
})(StreamForm);
