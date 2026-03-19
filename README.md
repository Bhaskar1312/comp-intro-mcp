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
Now call `add 123 456` from chat in claude desktop