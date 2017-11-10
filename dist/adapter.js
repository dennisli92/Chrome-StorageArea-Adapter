"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (storage) { return ({
    0: storage,
    put: function (key, value, callback) {
        storage.set((_a = {}, _a[key] = value, _a), callback);
        var _a;
    },
    get: function (key, callback) {
        try {
            storage.get(key, function (items) { callback(null, items[key]); });
        }
        catch (e) {
            callback(e);
        }
    },
    del: function (key, callback) {
        storage.remove(key, callback);
    },
}); };
//# sourceMappingURL=adapter.js.map