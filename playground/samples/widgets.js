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
        "ui:titleClassNames": ["text-uppercase", "col-md-3"],
        "ui:controlClassNames": ["col-md-6"],
      },
      select: {
        "ui:widget": "select",
        "ui:titleClassNames": ["text-uppercase", "col-md-3"],
        "ui:controlClassNames": ["col-md-6"],
      },
    },
    string: {
      default: {
        "ui:titleClassNames": ["text-uppercase", "col-md-3"],
        "ui:controlClassNames": ["col-md-6"],
      },
      textarea: {
        "ui:widget": "textarea",
        "ui:titleClassNames": ["text-uppercase", "col-md-3"],
        "ui:controlClassNames": ["col-md-6"],
        "ui:options": {
          rows: 5,
        },
      },
      color: {
        "ui:widget": "color",
        "ui:titleClassNames": ["text-uppercase", "col-md-3"],
        "ui:controlClassNames": ["col-md-6"],
      },
    },
    secret: {
      "ui:widget": "hidden",
      "ui:titleClassNames": ["text-uppercase", "col-md-3"],
      "ui:controlClassNames": ["col-md-6"],
    },
    disabled: {
      "ui:disabled": true,
      "ui:titleClassNames": ["text-uppercase", "col-md-3"],
      "ui:controlClassNames": ["col-md-6"],
    },
    readonly: {
      "ui:readonly": true,
      "ui:titleClassNames": ["text-uppercase", "col-md-3"],
      "ui:controlClassNames": ["col-md-6"],
    },
    widgetOptions: {
      "ui:widget": ({ value, onChange, options }) => {
        const { backgroundColor } = options;
        return (
          <input
            className="form-control"
            onChange={event => onChange(event.target.value)}
            style={{ backgroundColor }}
            value={value}
          />
        );
      },
      "ui:options": {
        backgroundColor: "yellow",
      },
    },
    selectWidgetOptions: {
      "ui:widget": ({ value, onChange, options }) => {
        const { enumOptions, backgroundColor } = options;
        return (
          <select
            className="form-control"
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
