import {McpServer} from "@modelcontextprotocol/sdk/server/mcp.js";
import {z} from "zod"; // schema validation library
import {StdioServerTransport} from "@modelcontextprotocol/sdk/server/stdio.js";

// create MCP server
const server = new McpServer({
    name: 'add-sever',
    version: '1.0.0',
});

// add an additional tool
server.registerTool(
    "add",
    {
        title: 'Additional tool',
        description: 'Add two numbers',
        inputSchema: {
            a: z.number(),
            b: z.number(),
        },
    },
    async ({a, b}) => {
        return {
            content: [{
                type: 'text',
                text: String(a + b)
            }]
        };
    }
);

// start recv msgs on stdin and send msgs on stdout
const transport = new StdioServerTransport();
await server.connect(transport);

// # List available tools:
// echo '{"jsonrpc": "2.0", "id": 1, "method": "tools/list", "params": {"name": "add", "arguments": {}}}' | node mcp.js | jq
// 
// # Call a tool:
// echo '{"jsonrpc": "2.0", "id": 1, "method": "tools/call", "params": {"name": "add", "arguments": {"a": 5, "b": 3}}}' | node mcp.js