(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var s=n(3),c=n.n(s),a=n(4),r=n(5),o=n(7),i=n(6),u=n(1),d=(n(12),n(0)),l=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={pressedKey:""},e.handleDocumentClick=function(t){e.setState({pressedKey:t.key})},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.handleDocumentClick)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.handleDocumentClick)}},{key:"render",value:function(){return Object(d.jsx)("div",{className:"App",children:this.state.pressedKey?Object(d.jsx)("p",{className:"App__message text-3xl font-bold underline",children:"The last pressed key is [".concat(this.state.pressedKey,"]")}):Object(d.jsx)("p",{className:"App__message",children:"Nothing was pressed yet"})})}}]),n}(u.Component);c.a.render(Object(d.jsx)(l,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.cfdbbc8c.chunk.js.map