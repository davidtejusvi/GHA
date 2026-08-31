const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html",
    });

    res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>AWS Planning</title>

      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 40px;
          background: #f4f6f8;
        }

        h1 {
          color: #232f3e;
        }

        .card {
          background: white;
          padding: 20px;
          margin: 15px 0;
          border-radius: 8px;
          box-shadow: 0 2px 5px #ccc;
        }

        button {
          background: #ff9900;
          border: none;
          padding: 10px 20px;
          cursor: pointer;
          border-radius: 5px;
        }
      </style>
    </head>

    <body>

      <h1>AWS Planning Page</h1>

      <div class="card">
        <h2>Project: AWS Application</h2>
        <p>Plan and deploy a web application on AWS.</p>
      </div>

      <div class="card">
        <h3>AWS Services</h3>

        <ul>
          <li>EC2 - Application Server</li>
          <li>S3 - File Storage</li>
          <li>RDS - Database</li>
          <li>VPC - Networking</li>
          <li>CloudWatch - Monitoring</li>
        </ul>
      </div>

      <div class="card">
        <h3>Deployment Plan</h3>

        <ol>
          <li>Create VPC</li>
          <li>Create EC2 instance</li>
          <li>Create RDS database</li>
          <li>Deploy application</li>
          <li>Configure monitoring</li>
        </ol>
      </div>

      <button onclick="alert('AWS plan created!')">
        Start Planning
      </button>

    </body>
    </html>
  `);
});

server.listen(PORT, () => {
    console.log("AWS Planning page running on port " + PORT);
});