import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { registerServiceWorker, setupNetworkMonitoring, requestNotificationPermission } from "./utils/pwa-utils";

// Initialize PWA features
registerServiceWorker();
setupNetworkMonitoring();
requestNotificationPermission();

createRoot(document.getElementById("root")!).render(<App />);
