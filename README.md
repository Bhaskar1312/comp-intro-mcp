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
`Do I need a Jacket in Pune`

// https://github.com/public-apis/public-apis

// Tools are meant to be given to an LLM and then the LLM can decide to use the tools or not.
// Now resources meant for the user to provide to the LLM
// resources (or direct resources, as the docs refer to them as) are not dynamic. You can't pass any parameters into it.
// It's just a static method that gets called and gives back what it gives back. If we were doing a weather resource, you'd have to hardcode in where-ever you were providing weather for.
// There is such a thing as "resource templates" where you can provide parameters to the resource

// `Review code for best practices and potential issues` and attach file

// sampling: it's when your MCP server can give the LLM a prompt directly. An example would be if you had an MCP server that helped with refactoring and the MCP server could hand the LLM a
// piece of code with a prompt on how to refactor it and it would get an answer that way

// Elicitation: your MCP server can ask follow up questions.
