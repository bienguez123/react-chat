import{r as o}from"./index.25ad6385.js";var E=(r=>(r.ASSISTANT_INFO="vfrc-assistant-info",r.AVATAR="vfrc-avatar",r.BUBBLE="vfrc-bubble",r.BUTTON="vfrc-button",r.CARD="vfrc-card",r.CAROUSEL="vfrc-carousel",r.CHAT="vfrc-chat",r.CHAT_INPUT="vfrc-chat-input",r.FEEDBACK="vfrc-feedback",r.FOOTER="vfrc-footer",r.HEADER="vfrc-header",r.ICON="vfrc-icon",r.IMAGE="vfrc-image",r.INPUT="vfrc-input",r.LAUNCHER="vfrc-launcher",r.LOADER="vfrc-loader",r.MESSAGE="vfrc-message",r.PROMPT="vfrc-prompt",r.SYSTEM_RESPONSE="vfrc-system-response",r.TIMESTAMP="vfrc-timestamp",r.TOOLTIP="vfrc-tooltip",r.TYPING_INDICATOR="vfrc-typing-indicator",r.USER_RESPONSE="vfrc-user-response",r.WIDGET="vfrc-widget",r.PROACTIVE_CLOSE="vfrc-proactive-close",r.PROACTIVE_MESSAGE="vfrc-proactive-message",r.PROACTIVE="vfrc-proactive",r))(E||{});function n(r){var t,f,c="";if(typeof r=="string"||typeof r=="number")c+=r;else if(typeof r=="object")if(Array.isArray(r))for(t=0;t<r.length;t++)r[t]&&(f=n(r[t]))&&(c&&(c+=" "),c+=f);else for(t in r)r[t]&&(c&&(c+=" "),c+=t);return c}function e(){for(var r,t,f=0,c="";f<arguments.length;)(r=arguments[f++])&&(t=n(r))&&(c&&(c+=" "),c+=t);return c}const v=r=>(t,f)=>o.exports.forwardRef((c,i)=>o.exports.createElement(t,{...c,ref:i,className:e(f?`${r}--${f}`:r,c.className)}));try{v.displayName="tagFactory",v.__docgenInfo={description:"",displayName:"tagFactory",props:{}}}catch{}export{E as C,v as t};
