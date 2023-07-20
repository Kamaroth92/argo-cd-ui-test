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
    return React.createElement("div", {}, `Hello, I am ${props.resource.metadata.name}. The only informatiom this panel has access to is information specific to this object.`);
  };
  // Sidebar Tab
  const systemComponent = () => {
    return React.createElement(
      "div",
      { style: { padding: "10px" } },
      "This panel can be used to display information specific to the platform. We could even include information like how everyone should contact Kelvin directly if they have any issues and include helpful information like his home phone number."
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
    "SK8S Information",
    "/sk8s-info",
    "fa-person-skating"
  );
})(window);