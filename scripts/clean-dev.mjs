import { rmSync } from "node:fs";
import { spawn, execSync } from "node:child_process";
import { join } from "node:path";

const root = process.cwd();
const cacheDirs = [".next", ".next-dev"];
const devPorts = [3000, 3001, 3002, 3003];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function killPort(port) {
  try {
    if (process.platform === "win32") {
      const output = execSync(`netstat -ano | findstr :${port}`, {
        encoding: "utf8",
        stdio: ["ignore", "pipe", "ignore"],
      });
      const pids = [
        ...new Set(
          output
            .split("\n")
            .map((line) => line.trim().split(/\s+/).pop())
            .filter((pid) => pid && /^\d+$/.test(pid))
        ),
      ];
      for (const pid of pids) {
        try {
          execSync(`taskkill /F /PID ${pid}`, { stdio: "ignore" });
          console.log(`Stopped process ${pid} on port ${port}`);
        } catch {
          // Process may already be gone.
        }
      }
    }
  } catch {
    // No process listening on the port.
  }
}

async function main() {
  for (const port of devPorts) {
    killPort(port);
  }

  await sleep(1500);

  for (const dir of cacheDirs) {
    try {
      rmSync(join(root, dir), {
        recursive: true,
        force: true,
        maxRetries: 5,
        retryDelay: 200,
      });
      console.log(`Removed ${dir}`);
    } catch (error) {
      console.warn(`Could not remove ${dir}:`, error.message);
    }
  }

  console.log("Starting Next.js dev server...\n");

  const child = spawn("npx", ["next", "dev"], {
    cwd: root,
    stdio: "inherit",
    shell: true,
  });

  child.on("exit", (code) => process.exit(code ?? 0));
}

main();
