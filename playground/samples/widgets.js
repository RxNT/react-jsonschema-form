import React from "react";

module.exports = {
  schema: {
    title: "Widgets",
    type: "object",
    properties: {
      stringFormats: {
        type: "object",
        title: "String formats",
        properties: {
          email: {
            type: "string",
            format: "email",
          },
          uri: {
            type: "string",
            format: "uri",
          },
        },
      },
      boolean: {
        type: "object",
        title: "Boolean field",
        properties: {
          default: {
            type: "boolean",
            title: "checkbox (default)",
            description: "This is the checkbox-description",
          },
          radio: {
            type: "boolean",
            title: "radio buttons",
            description: "This is the radio-description",
          },
          select: {
            type: "boolean",
            title: "select box",
            description: "This is the select-description",
          },
        },
      },
      string: {
        type: "object",
        title: "String field",
        properties: {
          default: {
            type: "string",
            title: "text input (default)",
          },
          textarea: {
            type: "string",
            title: "textarea",
          },
          color: {
            type: "string",
            title: "color picker",
            default: "#151ce6",
          },
        },
      },
      secret: {
        type: "string",
        default: "I'm a hidden string.",
      },
      disabled: {
        type: "string",
        title: "A disabled field",
        default: "I am disabled.",
      },
      readonly: {
        type: "string",
        title: "A readonly field",
        default: "I am read-only.",
      },
      widgetOptions: {
        title: "Custom widget with options",
        type: "string",
        default: "I am yellow",
      },
      selectWidgetOptions: {
        title: "Custom select widget with options",
        type: "string",
        enum: ["foo", "bar"],
        enumNames: ["Foo", "Bar"],
      },
    },
  },
  uiSchema: {
    boolean: {
      radio: {
        "ui:widget": "radio",
        "ui:options": {
          "titleClassNames": ["text-uppercase", "col-md-3"],
          "controlClassNames": ["col-md-6"],
          "inline": true,
        },
      },
      select: {
        "ui:widget": "select",
        "ui:options": {
          "titleClassNames": ["text-uppercase", "col-md-3"],
          "controlClassNames": ["col-md-6"],
        },
      },
    },
    string: {
      default: {
        "ui:options": {
          "titleClassNames": ["text-uppercase", "col-md-3"],
          "controlClassNames": ["col-md-6"],
        },
      },
      textarea: {
        "ui:widget": "textarea",
        "ui:options": {
          rows: 5,
          "titleClassNames": ["text-uppercase", "col-md-3"],
          "controlClassNames": ["col-md-6"],
        },
      },
      color: {
        "ui:widget": "color",
        "ui:options": {
          "titleClassNames": ["text-uppercase", "col-md-3"],
          "controlClassNames": ["col-md-6"],
        },
      },
    },
    secret: {
      "ui:widget": "hidden",
      "ui:options": {
        "titleClassNames": ["text-uppercase", "col-md-3"],
        "controlClassNames": ["col-md-6"],
      },
    },
    disabled: {
      "ui:disabled": true,
      "ui:options": {
        "titleClassNames": ["text-uppercase", "col-md-3"],
        "controlClassNames": ["col-md-6"],
      },
    },
    readonly: {
      "ui:readonly": true,
      "ui:options": {
        "titleClassNames": ["text-uppercase", "col-md-3"],
        "controlClassNames": ["col-md-6"],
      },
    },
    widgetOptions: {
      "ui:widget": ({ value, onChange, options }) => {
        const { backgroundColor, controlClassNames } = options;
        let classNames = "form-control";

        if(controlClassNames !== "" && controlClassNames !== null && controlClassNames !== undefined) {
          classNames = controlClassNames
                              .join(" ")
                              .trim();
        }
        return (
          <input
            className={classNames}
            onChange={event => onChange(event.target.value)}
            style={{ backgroundColor }}
            value={value}
          />
        );
      },
      "ui:options": {
        backgroundColor: "yellow",
        "titleClassNames": ["text-uppercase", "col-md-6"],
        "controlClassNames": ["col-md-6"],
      },
    },
    selectWidgetOptions: {
      "ui:widget": ({ value, onChange, options }) => {
        const { enumOptions, backgroundColor, controlClassNames } = options;
        let classNames = "form-control";

        if(controlClassNames !== "" && controlClassNames !== null && controlClassNames !== undefined) {
          classNames = controlClassNames
                              .join(" ")
                              .trim();
        }
        return (
          <select
            className={classNames}
            style={{ backgroundColor }}
            value={value}
            onChange={event => onChange(event.target.value)}>
            {enumOptions.map(({ label, value }, i) => {
              return <option key={i} value={value}>{label}</option>;
            })}
          </select>
        );
      },
      "ui:options": {
        backgroundColor: "pink",
        "titleClassNames": ["text-uppercase", "col-md-8"],
        "controlClassNames": ["col-md-4"],
      },
    },
  },
  formData: {
    stringFormats: {
      email: "chuck@norris.net",
      uri: "http://chucknorris.com/",
    },
    boolean: {
      default: true,
      radio: true,
      select: true,
    },
    string: {
      default: "Hello...",
      textarea: "... World",
    },
    secret: "I'm a hidden string.",
  },
};
