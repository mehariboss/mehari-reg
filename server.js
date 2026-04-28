const express = require("express");
const crypto = require("crypto");
const fs = require("fs");
const app = express();
const tokens = {};
function generateToken(){

  return { token, expiresAt };

}

app.get("/token", (req, res) => {
  const token = crypto.randomBytes(32).toString("hex");
  const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour expiration
  tokens[token] = expiresAt;
  res.json({ token});
});

// Logging to access.log
function logAccess(req, apiKey, workspace, component) {
  const log = {
    timestamp: new Date().toISOString(),
    apiKey,
    workspace,
    component,
    ip: req.ip,
    userAgent: req.headers["user-agent"]
  };
  fs.appendFile("access.log", JSON.stringify(log) + "\n", (err) => {
    if (err) {
      console.error("Failed to log access:", err);
    }
  });
}


app.get("/r/:name.json", (req, res) => {
  const apiKey = req.headers["x-api-key"];
  const workspace = req.headers["x-workspace-id"];
  const name = req.params.name;

  const tokenData = tokens[apiKey];
  if (!tokenData) {
    return res.status(401).json({ error: "Invalid or expired API key" });
  }
  if( Date.now() > tokenData.expiresAt){
    return res.status(401).json({ error: "Token has expired" });
  }

  if (workspace === "telia-workspace") {
    logAccess(req, apiKey, workspace, name);
    return res.json({
      name,
      type: "registry:ui",
      files: [
        {
          type: "registry:ui",
          path: `components/ui/${name}.tsx`,
          content: `export function ${name}() {
            return <div>Telia ${name}</div>
          }`
        }
      ]
    });
  }

  if (workspace === "volvo-workspace") {
    logAccess(req, apiKey, workspace, name);

    return res.json({
      name,
      type: "registry:ui",
      files: [
        {
          type: "registry:ui",
          path: `components/ui/${name}.tsx`,
          content: `export function ${name}() {
            return <div>Volvo ${name}</div>
          }`
        }
      ]
    });
  }

  return res.status(403).json({ error: "Unknown workspace" });
});


app.get("/registry/:name",(req,res) =>{
  const name = req.params.name;

  const data = {
    "hello-world":{
      versions: ["1.0.0", "1.1.0", "2.0.0"],
      latest: "2.0.0"
    }
  };
  const item = data[name];
  if(!item){
    return res.status(404).json({ error: "Not found"});
  }
  res.json(item);
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});