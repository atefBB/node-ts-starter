import { addAliases } from "module-alias";
import { resolve } from "path";

addAliases({
    "@root": resolve(__dirname, ""),
    "@routes": resolve(__dirname, "routes"),
    "@controllers": resolve(__dirname, "controllers"),
    "@helpers": resolve(__dirname, "helpers"),
});
