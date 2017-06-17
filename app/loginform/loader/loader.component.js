"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var LoaderComponent = (function () {
    function LoaderComponent() {
    }
    return LoaderComponent;
}());
LoaderComponent = __decorate([
    core_1.Component({
        selector: "loader",
        template: "\n     <section id=\"global\">\n        <div id=\"top\" class=\"mask\">\n          <div class=\"plane\"></div>\n        </div>\n        <div id=\"middle\" class=\"mask\">\n          <div class=\"plane\"></div>\n        </div>\n\n        <div id=\"bottom\" class=\"mask\">\n          <div class=\"plane\"></div>\n        </div>\n      <h6><i><br>LOADING...</i></h6>\n     </section>\n    ",
        styles: ["\n     #global{\n        width:70px;\n        margin:auto;\n        margin-top:30px;\n        position:relative;\n        cursor:pointer;\n        height:60px;\n      }\n\n      .mask{\n        position:absolute;\n        border-radius:2px;\n        overflow:hidden;\n        perspective: 1000;\n        backface-visibility: hidden;\n      }\n\n      .plane{\n        background:#ffffff;\n        width:400%;\n        height:100%;\n        position:absolute;\n        transform : translate3d(0px,0,0);\n        /*transition: all 0.8s ease; */\n        z-index:100;\n        perspective: 1000;\n        backface-visibility: hidden;\n        \n      }\n      \n      .animation{\n        transition: all 0.3s ease;\n      }\n\n\n      \n      #top .plane{\n        z-index:2000;\n        animation : trans1 1.3s ease-in infinite  0s backwards;\n      }\n      #middle .plane{\n        transform : translate3d(0px,0,0);  \n        background : #bbbbbb;\n        animation : trans2 1.3s linear infinite  0.3s  backwards;\n\n      }\n      #bottom .plane{\n        z-index:2000;\n        animation : trans3 1.3s ease-out infinite  0.7s backwards;\n      }\n\n\n\n      #top{\n        width:53px;\n        height:20px;\n        left:20px;\n        transform: skew(-15deg, 0);\n        z-index:100;\n      }\n\n      #middle{\n        width:33px;\n        height:20px;\n        left:20px;\n        top:15px;\n        \n        transform: skew(-15deg, 40deg)\n      }\n      #bottom{\n        width:53px;\n        height:20px;\n        top:30px;  \n        transform: skew(-15deg, 0)\n      }\n\n      h6{\n        color:#fff;\n        position:absolute;\n        left: -3px;\n        top:45px;\n        font-family:Arial;\n        text-align:center;\n        font-size:10px;\n      }\n\n      @keyframes trans1{ \n        from { \n          transform : translate3d(53px,0,0)\n        }\n        to { \n          transform : translate3d(-250px,0,0)\n        }\n      }\n\n      @keyframes trans2{ \n        from { \n          transform : translate3d(-160px,0,0)\n        }\n        to { \n          transform : translate3d(53px,0,0)\n        }\n      }\n\n      @keyframes trans3{ \n        from { \n          transform : translate3d(53px,0,0)\n        }\n        to { \n          transform : translate3d(-220px,0,0)\n        }\n      }\n\n      @keyframes animColor{ \n        from { \n          background : red;\n        }\n        25%{\n          background : yellow;\n        }\n        50%{\n          background : green;\n        }\n        75%{\n          background : brown;\n        }\n        to { \n          background : blue;\n        }\n      }\n    "
        ]
    }),
    __metadata("design:paramtypes", [])
], LoaderComponent);
exports.LoaderComponent = LoaderComponent;
//# sourceMappingURL=loader.component.js.map