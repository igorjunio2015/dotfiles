{
  "configurations": {
    "Node.js": {
      "adapter": "vscode-node-debug2",
      "request": "launch",
      "name": "Launch Program",
      "cwd": "${workspaceFolder}",
      "runtimeExecutable": "node",
      "runtimeArgs": ["${workspaceFolder}/index.js"],
      "protocol": "inspector",
      "port": 9229,
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen"
    }
  }
}
