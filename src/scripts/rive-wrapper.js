// rive-wrapper.js
const riveInstances = {};

export function loadRiveFromConfig({ canvasId, rivSrc, config }) {
  import("@rive-app/webgl").then(({ Rive }) => {
    const rive = new Rive({
      src: rivSrc,
      canvas: document.getElementById(canvasId),
      autoplay: true,
      stateMachines: config.stateMachines,
      onLoad: () => {
        riveInstances[canvasId] = {
          rive,
          inputs: config.inputs.reduce((map, name) => {
            map[name] = rive.stateMachineInputs(config.stateMachines[0]).find(input => input.name === name);
            return map;
          }, {})
        };
      }
    });
  });
}

export function triggerInput(canvasId, inputName, value = true) {
  const instance = riveInstances[canvasId];
  if (instance && instance.inputs[inputName]) {
    instance.inputs[inputName].value = value;
  }
}
