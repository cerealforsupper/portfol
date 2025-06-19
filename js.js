
  const models = [
    "photos/led_light.glb",
    "photos/meow_model.glb",
    "photos/another_model.glb"
  ];

  const lastModel = localStorage.getItem("lastModel");
  const availableModels = models.filter(model => model !== lastModel);
  const selectedModel = availableModels[Math.floor(Math.random() * availableModels.length)];

  localStorage.setItem("lastModel", selectedModel);
  document.getElementById("randomModel").setAttribute("src", selectedModel);

