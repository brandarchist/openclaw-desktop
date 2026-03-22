const { Menu } = require("electron");

function createApplicationMenu(app) {
  const template = [
    {
      label: "Menu",
      submenu: [
        {
          label: "Settings",
          enabled: false
        },
        {
          label: "About",
          enabled: false
        },
        {
          type: "separator"
        },
        {
          label: "Quit",
          accelerator: process.platform === "darwin" ? "Cmd+Q" : "Ctrl+Q",
          click: () => app.quit()
        }
      ]
    }
  ];

  return Menu.buildFromTemplate(template);
}

module.exports = {
  createApplicationMenu
};
