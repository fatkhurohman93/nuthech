"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.COMMON_ATTRIBUTES = exports.ARCHIVING_STATUS = void 0;
var ARCHIVING_STATUS;
exports.ARCHIVING_STATUS = ARCHIVING_STATUS;

(function (ARCHIVING_STATUS) {
  ARCHIVING_STATUS["archived"] = "archived";
  ARCHIVING_STATUS["unarchived"] = "unarchived";
})(ARCHIVING_STATUS || (exports.ARCHIVING_STATUS = ARCHIVING_STATUS = {}));

var COMMON_ATTRIBUTES;
exports.COMMON_ATTRIBUTES = COMMON_ATTRIBUTES;

(function (COMMON_ATTRIBUTES) {
  COMMON_ATTRIBUTES["createdTime"] = "createdTime";
  COMMON_ATTRIBUTES["createdDate"] = "createdDate";
  COMMON_ATTRIBUTES["year"] = "year";
  COMMON_ATTRIBUTES["month"] = "month";
  COMMON_ATTRIBUTES["lastUpdatedTime"] = "lastUpdatedTime";
  COMMON_ATTRIBUTES["createdBy"] = "createdBy";
  COMMON_ATTRIBUTES["lastUpdatedBy"] = "lastUpdatedBy";
  COMMON_ATTRIBUTES["archived"] = "archived";
})(COMMON_ATTRIBUTES || (exports.COMMON_ATTRIBUTES = COMMON_ATTRIBUTES = {}));