"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var path_1 = __importDefault(require("path"));
require("resolve-global");
var resolve_from_1 = __importDefault(require("resolve-from"));
var lodash_1 = require("lodash");
var importFresh = require('import-fresh');
function resolveExtends(config, context) {
    if (config === void 0) { config = {}; }
    if (context === void 0) { context = {}; }
    var e = config["extends"];
    var extended = loadExtends(config, context).reduceRight(function (r, c) {
        return lodash_1.mergeWith(r, lodash_1.omit(c, 'extends'), function (objValue, srcValue) {
            if (lodash_1.isArray(objValue)) {
                return srcValue;
            }
        });
    }, e ? { "extends": e } : {});
    return lodash_1.merge({}, extended, config);
}
exports["default"] = resolveExtends;
function loadExtends(config, context) {
    if (config === void 0) { config = {}; }
    if (context === void 0) { context = {}; }
    return (config["extends"] || []).reduce(function (configs, raw) {
        var load = context.require || require;
        var resolved = resolveConfig(raw, context);
        var c = load(resolved);
        var cwd = path_1["default"].dirname(resolved);
        var ctx = lodash_1.merge({}, context, { cwd: cwd });
        // Resolve parser preset if none was present before
        if (!context.parserPreset &&
            typeof c === 'object' &&
            typeof c.parserPreset === 'string') {
            var resolvedParserPreset = resolve_from_1["default"](cwd, c.parserPreset);
            var parserPreset = {
                name: c.parserPreset,
                path: ("./" + path_1["default"].relative(process.cwd(), resolvedParserPreset))
                    .split(path_1["default"].sep)
                    .join('/'),
                parserOpts: require(resolvedParserPreset)
            };
            ctx.parserPreset = parserPreset;
            config.parserPreset = parserPreset;
        }
        return __spreadArrays(configs, [c], loadExtends(c, ctx));
    }, []);
}
function getId(raw, prefix) {
    if (raw === void 0) { raw = ''; }
    if (prefix === void 0) { prefix = ''; }
    var first = raw.charAt(0);
    var scoped = first === '@';
    var relative = first === '.';
    var absolute = path_1["default"].isAbsolute(raw);
    if (scoped) {
        return raw.includes('/') ? raw : [raw, prefix].filter(String).join('/');
    }
    return relative || absolute ? raw : [prefix, raw].filter(String).join('-');
}
function resolveConfig(raw, context) {
    if (context === void 0) { context = {}; }
    var resolve = context.resolve || resolveId;
    var id = getId(raw, context.prefix);
    try {
        return resolve(id, context);
    }
    catch (err) {
        var legacy = getId(raw, 'conventional-changelog-lint-config');
        var resolved = resolve(legacy, context);
        console.warn("Resolving " + raw + " to legacy config " + legacy + ". To silence this warning raise an issue at 'npm repo " + legacy + "' to rename to " + id + ".");
        return resolved;
    }
}
function resolveId(id, context) {
    if (context === void 0) { context = {}; }
    var cwd = context.cwd || process.cwd();
    var localPath = resolveFromSilent(cwd, id);
    if (typeof localPath === 'string') {
        return localPath;
    }
    var resolveGlobal = context.resolveGlobal || resolveGlobalSilent;
    var globalPath = resolveGlobal(id);
    if (typeof globalPath === 'string') {
        return globalPath;
    }
    var err = new Error("Cannot find module \"" + id + "\" from \"" + cwd + "\"");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
}
function resolveFromSilent(cwd, id) {
    try {
        return resolve_from_1["default"](cwd, id);
    }
    catch (err) { }
}
function resolveGlobalSilent(id) {
    try {
        var resolveGlobal = importFresh('resolve-global');
        return resolveGlobal(id);
    }
    catch (err) { }
}
//# sourceMappingURL=index.js.map