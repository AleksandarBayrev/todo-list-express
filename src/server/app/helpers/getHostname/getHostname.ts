import { serverConfig } from "../../../server.config";
import { express } from "../../dependencies";

export const getHostname = (req: express.Request, port: string = serverConfig.port) => port !== '80' ? `${req.protocol}://${req.hostname}:${port}/` : `${req.protocol}://${req.hostname}/`