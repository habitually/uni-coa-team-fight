"use strict";const o=require("../../../../../../common/vendor.js"),e=o.E$1;if(!Array){(o.resolveComponent("vin-button")+o.resolveComponent("vin-popup"))()}Math||((()=>"../button/index.js")+(()=>"../popup/index.js"))();const t=o._export_sfc(e,[["render",function(e,t,n,s,l,r){return o.e({a:e.title},e.title?o.e({b:e.$slots.header},e.$slots.header?{}:{c:o.t(e.title)}):{},{d:e.$slots.default},e.$slots.default?{}:"string"==typeof e.content?{f:e.content}:{},{e:"string"==typeof e.content,g:o.s(e.contentStyle),h:!e.noFooter},e.noFooter?{}:o.e({i:e.$slots.footer},e.$slots.footer?{}:o.e({j:!e.noCancelBtn},e.noCancelBtn?{}:{k:o.t(e.cancelText||e.translate("cancel")),l:o.o(e.onCancel),m:o.p({size:"small",plain:!0,type:"primary","custom-class":"vin-dialog__footer-cancel"})},{n:!e.noOkBtn},e.noOkBtn?{}:{o:o.t(e.okText||e.translate("confirm")),p:o.o(e.onOk),q:o.p({size:"small",type:"primary","custom-class":"vin-dialog__footer-ok"})}),{r:e.footerDirection,s:e.footerDirection?1:""}),{t:o.n(e.mainClass),v:o.s(e.mainStyle),w:o.o(e.closed),x:o.o(e.closed),y:o.o((o=>e.showPopup=o)),z:o.p({"close-on-click-overlay":e.closeOnClickOverlay,"pop-class":e.overlayClass,"custom-style":e.overlayStyle,round:!0,visible:e.showPopup})})}]]);wx.createComponent(t);