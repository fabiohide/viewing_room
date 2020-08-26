var APP_DATA = {
  "scenes": [
    {
      "id": "0-sala-1",
      "name": "Sala 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1600,
      "initialViewParameters": {
        "yaw": -1.3557771939230463,
        "pitch": -0.024516847736956393,
        "fov": 1.1736957392994543
      },
      "linkHotspots": [
        {
          "yaw": 0.020938741330494892,
          "pitch": 0.4818759198077469,
          "rotation": 0,
          "target": "1-sala-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-sala-2",
      "name": "Sala 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": -1.211648648289943,
        "pitch": 0.0007377227346321291,
        "fov": 1.8988380755400427
      },
      "linkHotspots": [
        {
          "yaw": 1.8714933381132832,
          "pitch": 0.5933631668141341,
          "rotation": 0,
          "target": "0-sala-1"
        },
        {
          "yaw": -2.6569433556914213,
          "pitch": 0.5888853363516784,
          "rotation": 0,
          "target": "0-sala-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Fábio Hideki - Viewing Room",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
