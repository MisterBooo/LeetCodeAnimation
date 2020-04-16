"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bootstrap = bootstrap;

var _commitizen = require("../commitizen");

var _strategies = require("./strategies");

/**
 * This is the main cli entry point.
 * environment may be used for debugging.
 */
function bootstrap(environment = {}, argv = process.argv) {
  // Get cli args
  let rawGitArgs = argv.slice(2, argv.length);

  let adapterConfig = environment.config || _commitizen.configLoader.load(); // Choose a strategy based on the existance the adapter config


  if (typeof adapterConfig !== 'undefined') {
    // This tells commitizen we're in business
    (0, _strategies.gitCz)(rawGitArgs, environment, adapterConfig);
  } else {
    // This tells commitizen that it is not needed, just use git
    (0, _strategies.git)(rawGitArgs, environment);
  }
}