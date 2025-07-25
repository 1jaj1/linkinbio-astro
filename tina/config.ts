import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "page",
        label: "Page Content",
        path: "content/page",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "object",
            name: "header",
            label: "Header Section",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Page Title",
                required: true
              },
              {
                type: "string",
                name: "subtitle",
                label: "Page Subtitle"
              }
            ]
          },
          {
            type: "object",
            name: "information",
            label: "Information Section",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Section Title"
              },
              {
                type: "string",
                name: "description",
                label: "Section Description",
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "object",
                name: "cards",
                label: "Content Cards",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "type",
                    label: "Card Type",
                    options: [
                      "image",
                      "video",
                      "gradient",
                      "solid"
                    ]
                  },
                  {
                    type: "object",
                    name: "background",
                    label: "Background Settings",
                    fields: [
                      {
                        type: "string",
                        name: "imageUrl",
                        label: "Background Image URL"
                      },
                      {
                        type: "string",
                        name: "videoUrl",
                        label: "Background Video URL"
                      },
                      {
                        type: "string",
                        name: "backgroundColor",
                        label: "Background Color",
                        ui: {
                          component: "color"
                        }
                      },
                      {
                        type: "string",
                        name: "startColor",
                        label: "Start Color",
                        ui: {
                          component: "color"
                        }
                      },
                      {
                        type: "string",
                        name: "endColor",
                        label: "End Color",
                        ui: {
                          component: "color"
                        }
                      },
                      {
                        type: "string",
                        name: "middleColor",
                        label: "Middle Color (Optional)",
                        ui: {
                          component: "color"
                        }
                      }
                    ]
                  },
                  {
                    type: "object",
                    name: "textStyling",
                    label: "Text Color Override",
                    description: "Override text colors for optimal contrast",
                    fields: [
                      {
                        type: "boolean",
                        name: "useCustomColors",
                        label: "Use Custom Text Colors",
                        description: "Override default text colors for this card"
                      },
                      {
                        type: "string",
                        name: "primaryTextColor",
                        label: "Primary Text Color",
                        ui: {
                          component: "color"
                        }
                      },
                      {
                        type: "string",
                        name: "secondaryTextColor",
                        label: "Secondary Text Color",
                        ui: {
                          component: "color"
                        }
                      }
                    ]
                  },
                  {
                    type: "object",
                    name: "content",
                    label: "Content Details",
                    fields: [
                      {
                        type: "string",
                        name: "username",
                        label: "Username/Handle",
                        description: "e.g., '@testingthetest'"
                      },
                      {
                        type: "rich-text",
                        name: "description",
                        label: "Content Description",
                        description: "Text overlay describing the content"
                      },
                      {
                        type: "string",
                        name: "url",
                        label: "Destination URL",
                        required: true
                      }
                    ]
                  },
                  {
                    type: "object",
                    name: "action",
                    label: "Action Button",
                    fields: [
                      {
                        type: "string",
                        name: "text",
                        label: "Button Text",
                        description: "e.g., 'SEE MORE'"
                      },
                      {
                        type: "object",
                        name: "styling",
                        label: "Button Styling",
                        fields: [
                          {
                            type: "string",
                            name: "backgroundColor",
                            label: "Background Color",
                            ui: {
                              component: "color"
                            }
                          },
                          {
                            type: "string",
                            name: "textColor",
                            label: "Text Color",
                            ui: {
                              component: "color"
                            }
                          },
                          {
                            type: "string",
                            name: "hoverBackgroundColor",
                            label: "Hover Background Color",
                            ui: {
                              component: "color"
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: "object",
                    name: "taxonomy",
                    label: "Categories & Tags",
                    fields: [
                      {
                        type: "string",
                        name: "category",
                        label: "Content Category",
                        options: [
                          "Featured",
                          "Recent",
                          "Tutorial",
                          "Showcase",
                          "Update",
                          "Behind the Scenes"
                        ]
                      },
                      {
                        type: "string",
                        name: "tags",
                        label: "Tags",
                        list: true,
                        description: "Add multiple tags for content organization"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "footer",
            label: "Footer Section",
            fields: [
              {
                type: "string",
                name: "attribution",
                label: "Attribution Text",
                description: "e.g., 'made with ❤️ by urt.media'"
              },
              {
                type: "string",
                name: "attributionUrl",
                label: "Attribution Link",
                description: "Link for the attribution text"
              },
              {
                type: "object",
                name: "styling",
                label: "Footer Styling",
                fields: [
                  {
                    type: "string",
                    name: "textColor",
                    label: "Text Color",
                    ui: {
                      component: "color"
                    }
                  },
                  {
                    type: "number",
                    name: "fontSize",
                    label: "Font Size (rem)",
                    ui: {
                      component: "number"
                    }
                  }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "seo",
            label: "SEO Settings",
            fields: [
              {
                type: "string",
                name: "title",
                label: "SEO Title"
              },
              {
                type: "string",
                name: "description",
                label: "SEO Description",
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "string",
                name: "keywords",
                label: "SEO Keywords",
                list: true
              }
            ]
          },
          {
            type: "object",
            name: "styling",
            label: "Visual Styling",
            fields: [
              {
                type: "object",
                name: "typography",
                label: "Typography",
                fields: [
                  {
                    type: "string",
                    name: "primaryFont",
                    label: "Primary Font",
                    description: "Google Font for headings and titles",
                    options: [
                      "Inter",
                      "Poppins",
                      "Roboto",
                      "Open Sans",
                      "Lato",
                      "Montserrat",
                      "Raleway",
                      "Playfair Display",
                      "Merriweather",
                      "Source Sans Pro"
                    ],
                    default: "Inter"
                  },
                  {
                    type: "string",
                    name: "bodyFont",
                    label: "Body Font",
                    description: "Google Font for body text",
                    options: [
                      "Inter",
                      "Poppins",
                      "Roboto",
                      "Open Sans",
                      "Lato",
                      "Montserrat",
                      "Raleway",
                      "Source Sans Pro",
                      "Merriweather",
                      "Georgia"
                    ],
                    default: "Inter"
                  },
                  {
                    type: "number",
                    name: "baseFontSize",
                    label: "Base Font Size (rem)",
                    min: 0.875,
                    max: 1.25,
                    step: 0.125,
                    default: 1
                  }
                ]
              },
              {
                type: "object",
                name: "colors",
                label: "Color Scheme",
                fields: [
                  {
                    type: "string",
                    name: "primaryColor",
                    label: "Primary Color",
                    ui: {
                      component: "color"
                    },
                    default: "#000000"
                  },
                  {
                    type: "string",
                    name: "secondaryColor",
                    label: "Secondary Color",
                    ui: {
                      component: "color"
                    },
                    default: "#666666"
                  },
                  {
                    type: "string",
                    name: "backgroundColor",
                    label: "Background Color",
                    ui: {
                      component: "color"
                    },
                    default: "#ffffff"
                  },
                  {
                    type: "string",
                    name: "textColor",
                    label: "Text Color",
                    ui: {
                      component: "color"
                    },
                    default: "#000000"
                  }
                ]
              },
              {
                type: "object",
                name: "spacing",
                label: "Spacing & Layout",
                fields: [
                  {
                    type: "number",
                    name: "sectionGap",
                    label: "Section Gap (rem)",
                    min: 1,
                    max: 4,
                    step: 0.5,
                    default: 2
                  },
                  {
                    type: "number",
                    name: "cardGap",
                    label: "Card Gap (rem)",
                    min: 1,
                    max: 3,
                    step: 0.25,
                    default: 1.5
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
});
