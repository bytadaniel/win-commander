import path from "path";
import rcedit from "rcedit";
/*
exePath is the path to the Windows executable to be modified.

options is an object that can contain following fields:

version-string - An object containing properties to change the exePath's version string.
file-version - File's version to change to.
product-version - Product's version to change to.
icon - Path to the icon file (.ico) to set as the exePath's default icon.
requested-execution-level - Requested execution level to change to, must be either asInvoker, highestAvailable, or requireAdministrator. See here for more details.
application-manifest - String path to a local manifest file to use. See here for more details.
Returns a Promise with no value.
*/

rcedit(path.resolve(__dirname, "../pc-commander.exe"), {
  icon: path.resolve(__dirname, "../assets/exe-icon.png"),
});
