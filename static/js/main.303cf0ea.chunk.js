(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var s=n(3),c=n.n(s),a=n(4),r=n(5),o=n(7),i=n(6),p=n(1),u=n(0),d=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={pressedKey:""},e.handleDocumentClick=function(t){e.setState({pressedKey:t.key})},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.handleDocumentClick)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.handleDocumentClick)}},{key:"render",value:function(){return Object(u.jsx)("div",{className:"App",children:this.state.pressedKey?Object(u.jsx)("p",{className:"App__message",children:"The last pressed key is [".concat(this.state.pressedKey,"]")}):Object(u.jsx)("p",{className:"App__message",children:"Nothing was pressed yet"})})}}]),n}(p.Component);n(13);c.a.render(Object(u.jsx)(d,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.303cf0ea.chunk.js.map