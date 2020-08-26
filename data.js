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
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "yaw": -1.7634963082437203,
        "pitch": 0.030302853397662588,
        "fov": 1.8997940173432455
      },
      "linkHotspots": [
        {
          "yaw": -3.1403924640653003,
          "pitch": 0.5254822057487587,
          "rotation": 6.283185307179586,
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
        "yaw": 1.3891941503879544,
        "pitch": 0.0964494990202791,
        "fov": 1.8997940173432455
      },
      "linkHotspots": [
        {
          "yaw": 3.131620750704851,
          "pitch": 0.5358735796401319,
          "rotation": 0,
          "target": "0-sala-1"
        },
        {
          "yaw": -1.7909392553525283,
          "pitch": 0.5206193110986259,
          "rotation": 31.415926535897956,
          "target": "0-sala-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
