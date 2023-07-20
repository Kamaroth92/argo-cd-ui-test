import * as React from 'react';

export {};

declare global {
  interface Window {
    extensionsAPI: any;
  }
}

((window) => {
  // Resource Tab
  const resourceComponent = (props: {
      tree: any;
      resource: any;
    }) => {
    return React.createElement("div", {}, `Hello World.`);
  };
  // Sidebar Tab
  const systemComponent = () => {
    return React.createElement(
      "div",
      { style: { padding: "10px" } },
      "Hello World!"
    );
  };

  // Resource Tab available on group/kind */*
  window.extensionsAPI.registerResourceExtension(
    resourceComponent,
    "*",
    "*",
    "Additional Info"
  );
  window.extensionsAPI.registerSystemLevelExtension(
    systemComponent,
    "Hello World",
    "/hello-world",
    "fa-book"
  );
})(window);