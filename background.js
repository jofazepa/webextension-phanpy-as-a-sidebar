browser.menus.create({
  id: "reload-phanpy",
  title: "Reload Phanpy",
  documentUrlPatterns: ["https://phanpy.social/*"]
});

function reloadSidebar() {
  browser.sidebarAction.setPanel({ panel: "https://phanpy.social" });
}

browser.menus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId == "reload-phanpy") {
    browser.sidebarAction.getPanel({}).then(reloadSidebar)
  }
});

browser.commands.onCommand.addListener(function (command) {
  if (command == "toggle-sidebar") {
    browser.sidebarAction.isOpen({}).then(isOpen => {
      if (isOpen) {
        browser.sidebarAction.close()
      } else {
        browser.sidebarAction.open();
      }
    });

  }
});
