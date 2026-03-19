Add in claude desktop > settings > developer > edit config and paste
```json
{
  "mcpServers": {
    "demo-server": {
      "command": "C:\\Program Files\\..\\node",
      "args": [
        "C:\\Users\\...\\comp-intro-mcp\\mcp.js"
      ],
      "env": {
        "NODE_OPTIONS": "--no-deprecation"
      }
    }
  },
  "preferences": {
    "coworkScheduledTasksEnabled": false,
    "ccdScheduledTasksEnabled": false,
    "coworkWebSearchEnabled": true,
    "sidebarMode": "chat"
  }
}
```
restart claude desktop each time after changing config
Now call `add 123 456` from chat in claude desktop
`get_weather 17.4401° N, 78.3489° E` 
`get_weather Tanuku`
