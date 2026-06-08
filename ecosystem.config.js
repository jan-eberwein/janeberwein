module.exports = {
  apps: [
    {
      name: "janeberwein-portfolio",
      script: "npm",
      args: "start",
      cwd: "/home/jan/apps/portfolio", // Replace with your actual absolute path if different
      instances: "max",
      exec_mode: "cluster",
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env_production: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
