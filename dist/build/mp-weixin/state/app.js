"use strict";const t=require("../common/vendor.js").defineStore({id:"app-store",state:()=>({conunt:1}),getters:{getNum(){return this.conunt}},actions:{addnum(){this.conunt++}}});exports.useAppStore=t;