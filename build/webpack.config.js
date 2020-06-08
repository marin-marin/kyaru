const path = require('path')

module.exports = {
  "mode": 'development',
  "entry": path.resolve(__dirname, '../index.js'),
  "output": {
    "path": path.resolve(__dirname, '../dist'),
    "filename": "bundle.js"
  },
  "module": {
    "rules": [
      {
        "test": /\.js$/,
        "use": "babel-loader",
        "exclude": /node_modelus/
      },
      {
        "test": /\.css$/,
        "use": [
          "style-loader",
          {
            "loader": 'css-loader',
            "options": {modules: true}
          }
        ]
      }
    ]
  }
}