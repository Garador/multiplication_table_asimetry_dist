(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-grid\">\n\t<div class=\"mdl-cell mdl-cell--12-col header_title\">\n\t\t<h1>Multiplication Simetry</h1>\n\t</div>\n\t<div class=\"mdl-cell mdl-cell--4-col mdl-cell-12-col-phone\">\n\t\t<form class=\"formA\">\n\t\t\t<input name=\"multiplierFactorRange\" [(ngModel)]=\"multiplierFactor\" class=\"mdl-slider mdl-js-slider\" type=\"range\" min=\"0\"\n\t\t\t max=\"100\" value=\"2\" tabindex=\"0\">\n\n\t\t\t<div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n\t\t\t\t<input class=\"mdl-textfield__input\" name=\"multiplierFactor\" [(ngModel)]=\"multiplierFactor\" type=\"number\" pattern=\"-?[0-9]*(\\.[0-9]+)?\"\n\t\t\t\t id=\"sample4\">\n\t\t\t\t<label class=\"mdl-textfield__label\" for=\"sample4\">Multiplier</label>\n\t\t\t\t<span class=\"mdl-textfield__error\">Input is not a number!</span>\n\t\t\t</div>\n\n\t\t\t<input name=\"pointsAmmountRange\" [(ngModel)]=\"pointsAmmount\" class=\"mdl-slider mdl-js-slider\" type=\"range\" min=\"0\"\n\t\t\t max=\"100\" value=\"20\" tabindex=\"0\">\n\n\t\t\t<div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n\t\t\t\t<input class=\"mdl-textfield__input\" name=\"pointsAmmount\" [(ngModel)]=\"pointsAmmount\" type=\"number\" pattern=\"-?[0-9]*(\\.[0-9]+)?\"\n\t\t\t\t id=\"sample4\">\n\t\t\t\t<label class=\"mdl-textfield__label\" for=\"sample4\">Ammount of points</label>\n\t\t\t\t<span class=\"mdl-textfield__error\">Input is not a number!</span>\n\t\t\t</div>\n\t\t\t<br/>\n\t\t\t<button (click)=\"calculate()\" class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored\">\n\t\t\t\tGenerate\n\t\t\t</button>\n\t\t</form>\n\t\t<table \n\t\t*ngIf=\"false\"\n\t\tclass=\"mdl-data-table mdl-js-data-table mdl-shadow--2dp results_table\">\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th>From</th>\n\t\t\t\t\t<th>To</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr *ngFor=\"let item of drawResult.points; let i = index\">\n\t\t\t\t\t<td>{{item.pointA.label}}</td>\n\t\t\t\t\t<td>{{getReverseBLabel(i)}}</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n\t<div class=\"mdl-cell mdl-cell--8-col mdl-cell-4-col-tablet\" id=\"graphContainer_a\">\n\t\t<app-svg-chart #mainSvgChart [multFactor]=\"multiplierFactor\" (generateEmitter)=\"drewChart($event)\"\n\t\t [canonicPointsAmmount]=\"pointsAmmount\"></app-svg-chart>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#graphContainer_a {\n  min-height: 350px !important; }\n\n.header_title {\n  text-align: center; }\n\n.formA {\n  text-align: center; }\n\n.formA .mdl-textfield {\n    width: 100%; }\n\n.results_table {\n  margin-top: 2em;\n  text-align: center;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6b2xvdC9Eb2N1bWVudHMvV29yay9HaWdzL1JlZGRpdC9LVFhBQi9hcHAxL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsNEJBQTRCLEVBQUE7O0FBRzdCO0VBQ0Msa0JBQWlCLEVBQUE7O0FBR2xCO0VBQ0Msa0JBQWtCLEVBQUE7O0FBRG5CO0lBR0UsV0FBVSxFQUFBOztBQUlaO0VBQ0MsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZ3JhcGhDb250YWluZXJfYSB7XG5cdG1pbi1oZWlnaHQ6IDM1MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXJfdGl0bGUge1xuXHR0ZXh0LWFsaWduOmNlbnRlcjtcbn1cblxuLmZvcm1BIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHQubWRsLXRleHRmaWVsZCB7XG5cdFx0d2lkdGg6MTAwJTtcblx0fVxufVxuXG4ucmVzdWx0c190YWJsZSB7XG5cdG1hcmdpbi10b3A6IDJlbTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_svg_chart_svg_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/svg-chart/svg-chart.component */ "./src/app/components/svg-chart/svg-chart.component.ts");



//declare var SVG:any;
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app1';
        this.multiplierFactor = 2;
        this.pointsAmmount = 10;
        this._loaded = false;
        this.drawResult = null;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.calculate = function () {
        this.svgComponent.drawGraph();
    };
    AppComponent.prototype.getReverseBLabel = function (i) {
        if (i == 0)
            return;
        var reversedResult = this.drawResult.points[this.drawResult.points.length - i];
        if (reversedResult) {
            return reversedResult.pointB.label;
        }
    };
    AppComponent.prototype.drewChart = function (resultA) {
        this.drawResult = this.drawResult ? this.drawResult : {};
        this._loaded = true;
        this.drawResult.points = resultA.points;
        this.drawResult.multiplier = this.multiplierFactor;
        //console.log(this.drawResult.points);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("mainSvgChart"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _components_svg_chart_svg_chart_component__WEBPACK_IMPORTED_MODULE_2__["SvgChartComponent"])
    ], AppComponent.prototype, "svgComponent", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_svg_chart_svg_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/svg-chart/svg-chart.component */ "./src/app/components/svg-chart/svg-chart.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_svg_chart_svg_chart_component__WEBPACK_IMPORTED_MODULE_5__["SvgChartComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/svg-chart/svg-chart.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/svg-chart/svg-chart.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"svgComponentContainer\">\n\n</div>"

/***/ }),

/***/ "./src/app/components/svg-chart/svg-chart.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/svg-chart/svg-chart.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#svgComponentContainer {\n  min-height: 350px;\n  max-height: 60vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2F6b2xvdC9Eb2N1bWVudHMvV29yay9HaWdzL1JlZGRpdC9LVFhBQi9hcHAxL3NyYy9hcHAvY29tcG9uZW50cy9zdmctY2hhcnQvc3ZnLWNoYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zdmctY2hhcnQvc3ZnLWNoYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3N2Z0NvbXBvbmVudENvbnRhaW5lcntcblx0bWluLWhlaWdodDogMzUwcHg7XG5cdG1heC1oZWlnaHQ6IDYwdmg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/svg-chart/svg-chart.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/svg-chart/svg-chart.component.ts ***!
  \*************************************************************/
/*! exports provided: SvgChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgChartComponent", function() { return SvgChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _libs_svgHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../libs/svgHelper */ "./src/app/libs/svgHelper.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);




var SvgChartComponent = /** @class */ (function () {
    function SvgChartComponent() {
        this._containerId = "svgComponentContainer";
        this._svgHelper = _libs_svgHelper__WEBPACK_IMPORTED_MODULE_2__["SvgHelper"].Instance;
        this._correctionFactorPixelsA = 20;
        this._correctionFactorPixelsB = 2;
        this._svgContainerDimensionA = 350;
        this._circleDiameter = 300;
        this._resultEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(SvgChartComponent.prototype, "multFactor", {
        get: function () {
            return this._multFactor;
        },
        set: function (ammount) {
            this._multFactor = ammount;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(SvgChartComponent.prototype, "canonicPointsAmmount", {
        get: function () {
            return this._canonicPointsAmmount;
        },
        set: function (ammount) {
            this._canonicPointsAmmount = ammount;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    SvgChartComponent.prototype.ngOnInit = function () {
    };
    SvgChartComponent.prototype.ngAfterContentInit = function () {
        console.log("Started svg chart...");
        this._svgDoc = this._svgHelper.initialize(this._containerId);
        jquery__WEBPACK_IMPORTED_MODULE_3__(window).resize(function () {
            //console.log("Resized...");
            //this._svgHelper.initialize(this._containerId);
            //this.calculateDimensions();
        });
        this.drawGraph();
    };
    SvgChartComponent.prototype.calculateDimensions = function () {
        this._svgContainerDimensionA = jquery__WEBPACK_IMPORTED_MODULE_3__("#" + this._containerId).height();
        this._circleDiameter = this._svgContainerDimensionA * 0.80;
        this._correctionFactorPixelsA = this._svgContainerDimensionA * .10;
        this._correctionFactorPixelsB = 2;
    };
    /**
     * @description Draws the SVG graph with the lines
     */
    SvgChartComponent.prototype.drawGraph = function () {
        if (this._canonicPointsAmmount < 1 || this._multFactor < 1) {
            return;
        }
        this._svgHelper.initialize(this._containerId);
        this.calculateDimensions();
        this._canonicPoints = this.plotLines();
        this._svgCircle = this.plotCircle();
        this.plotLabels(this._canonicPoints);
        this._resultEmitter.emit({ points: this._canonicPoints });
    };
    SvgChartComponent.prototype.plotLines = function () {
        var _canonicPoints = this._svgHelper.calculatePointLocations(this._canonicPointsAmmount, this._multFactor, this._circleDiameter, this._correctionFactorPixelsA);
        for (var i = 0; i < _canonicPoints.length; i++) {
            _canonicPoints[i] = this._svgHelper.drawCanonicalPointLine(this._svgDoc, _canonicPoints[i], this._correctionFactorPixelsB);
        }
        //console.log(_canonicPoints);
        return _canonicPoints;
    };
    SvgChartComponent.prototype.plotCircle = function () {
        return this._svgHelper.drawCircle(this._svgDoc, this._circleDiameter, this._correctionFactorPixelsA);
    };
    SvgChartComponent.prototype.plotLabels = function (lines) {
        //element:SVG.Doc, point:JointPoint
        var labelsMade = [];
        for (var i = 0; i < lines.length; i++) {
            if (labelsMade.indexOf(lines[i].pointA.label) < 0) {
                if (i == this._canonicPointsAmmount) {
                    continue;
                }
                lines[i].pointA = this._svgHelper.drawLabel(this._svgDoc, lines[i].pointA);
                labelsMade.push(lines[i].pointA.label);
            }
        }
        //Normalize: 9 // 45
        //Normalize Labels
        labelsMade = labelsMade.map(function (el) {
            return parseInt(el);
        });
        if (labelsMade.length < this._canonicPointsAmmount) {
            for (var i = 1; i < this._canonicPointsAmmount - 1; i++) {
                if (labelsMade.indexOf(i) < 0) {
                    var degree = this._svgHelper.getDegreeFromPoint(i, this._canonicPointsAmmount);
                    var xy = this._svgHelper.calculateSinglePoint(degree, this._circleDiameter, this._correctionFactorPixelsA);
                    var point = {
                        label: "" + i,
                        labelObj: null,
                        dot: null,
                        location: {
                            x: xy.X - 1,
                            y: xy.Y - 1,
                            deg: degree
                        }
                    };
                    point.dot = this._svgHelper.drawDot(this._svgDoc, point);
                    point = this._svgHelper.drawLabel(this._svgDoc, point);
                    labelsMade.push(i);
                    console.log(point);
                }
            }
        }
        console.log(labelsMade);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("generateEmitter"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SvgChartComponent.prototype, "_resultEmitter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("multFactor"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
    ], SvgChartComponent.prototype, "multFactor", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("canonicPointsAmmount"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
    ], SvgChartComponent.prototype, "canonicPointsAmmount", null);
    SvgChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-svg-chart",
            template: __webpack_require__(/*! ./svg-chart.component.html */ "./src/app/components/svg-chart/svg-chart.component.html"),
            styles: [__webpack_require__(/*! ./svg-chart.component.scss */ "./src/app/components/svg-chart/svg-chart.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SvgChartComponent);
    return SvgChartComponent;
}());



/***/ }),

/***/ "./src/app/libs/svgHelper.ts":
/*!***********************************!*\
  !*** ./src/app/libs/svgHelper.ts ***!
  \***********************************/
/*! exports provided: SvgHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgHelper", function() { return SvgHelper; });
/* harmony import */ var svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svg.js */ "./node_modules/svg.js/dist/svg.js");
/* harmony import */ var svg_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);


var SvgHelper = /** @class */ (function () {
    function SvgHelper() {
    }
    Object.defineProperty(SvgHelper, "Instance", {
        get: function () {
            return this._instace;
        },
        enumerable: true,
        configurable: true
    });
    SvgHelper.prototype.initialize = function (containerId) {
        if (this._svg) {
            this._svg.clear();
        }
        else {
            this._svg = svg_js__WEBPACK_IMPORTED_MODULE_0__(containerId);
        }
        this._svg.size(jquery__WEBPACK_IMPORTED_MODULE_1__("#" + containerId).width(), jquery__WEBPACK_IMPORTED_MODULE_1__("#" + containerId).width());
        return this._svg;
    };
    /*
    doSomething() {
        function _recalculateContainerWidth() {
            window['graphData'].containerWidth = 400; //$("#graphContainer_a").width();
            window['graphData'].correctionA = (window['graphData'].containerWidth / 15);
        }

        window['graphData'] = {
            element: null,
            containerWidth: 300,
            circleData: {
                element: null,
                diameter: 0
            },
            points: [],
            correctionA: 20,
            correctionB: 2
        }

        function drawGraph() {
            if (!window['graphData'].element) {
                //window['graphData'].element = SVG('grapDrawing');
            } else {
                window['graphData'].element.clear();	//Clears the graph
            }
            window['graphData'].element.size(window['graphData'].containerWidth + window['graphData'].correctionA * 2, window['graphData'].containerWidth + window['graphData'].correctionA * 2);

            //We define the circle data element
            window['graphData'].circleData.diameter = Math.floor(window['graphData'].containerWidth);
            window['graphData'].circleData.element = window['graphData'].element.circle(window['graphData'].circleData.diameter);
            window['graphData'].circleData.element.fill("transparent").stroke({ width: 1, color: 'blue' });
            window['graphData'].circleData.element.move(window['graphData'].correctionA + 2, window['graphData'].correctionA + 2)

            //We plot the points
            let points = plotPoints(this.calcData.points, window['graphData'].circleData.diameter, window['graphData'].element);

            //We set the point labels
            plotLabels(points, window['graphData'].element);

            // We plot the lines
            plotLines(points, window['graphData'].correctionB, this.calcData.multiplier);
            window['graphData'].points = points;
        }

        //This function calculates and plot the actual lines agains the dots.
        function plotLines(points, correctionFactor, multFactor) {
            let plotResult = [];
            for (let i = 0; i < points.length; i++) {
                let spinFactor = 1;
                let plotPointNumber = (multFactor * i);
                if (plotPointNumber > points.length) {
                    spinFactor = Math.floor(plotPointNumber / points.length);
                    plotPointNumber -= (spinFactor * points.length);
                } else if (plotPointNumber == points.length) {
                    continue;
                }
                let pointA = points[i];
                let pointB = undefined;

                //We search the point B
                for (let a = 0; a < points.length; a++) {
                    if (points[a].position === plotPointNumber) {
                        pointB = points[a];
                    }
                }
                if (pointB) {
                    plotLine(pointA, pointB, correctionFactor);
                    console.log({
                        pointA, pointB
                    });
                    plotResult.push({
                        pointA, pointB
                    })
                } else {
                    console.log("Could not find point for pointA. Debug info:\n", {
                        plotPointNumber, spinFactor, pointA, pointB
                    });
                }
            }
            return plotResult;
        }

        function plotLine(pointA, pointB, correctionFactor) {
            window['graphData'].element.line(
                pointA['X'] + correctionFactor,
                pointA['Y'] + correctionFactor,
                pointB['X'] + correctionFactor,
                pointB['Y'] + correctionFactor)
                .stroke({ width: 2, color: 'blue' });
        }

        //This method plots the different points into the
        //element parameter (an SVG object)
        function plotPoints(points, diameter, element) {
            let builtPoints = [];// calculatePoints(points, diameter);
            for (let i = 0; i < builtPoints.length; i++) {
                builtPoints['dot'] = plotPoint(element, builtPoints[i]['X'], builtPoints[i]['Y']);
            }
            return builtPoints;
        }

        //This method plots the labels into the
        // element (an SVG) based on a series of points
        function plotLabels(points, element) {
            for (let i = 0; i < points.length; i++) {
                points[i].label = element.text(`${i}`).font({ fill: 'black', weight: 'bold' });
                points[i].label.move(points[i]['X'] + 5, points[i]['Y'])
            }
        }

        function _handleResize() {
            _recalculateContainerWidth();
        };

        //This method generates a point
        //into the SVG object parameter "element"
        function plotPoint(element, X, Y) {
            return element.circle(5).fill("black").move(Math.floor(X), Math.floor(Y));
        }

        //This methods listen to window resize events
        //in order to resize
        function listenWindowResize() {
            //$(window).resize(_handleResize);
        };

        //This actionates the calcualtions to draw
        //the canvas


        function initialize() {
            listenWindowResize();
            _recalculateContainerWidth();
        };

        initialize();
    }
    */
    /*	This method build the locations for the points
        to be plotted agains the SVG object as canonical points
    */
    SvgHelper.prototype.getStartingPointCoords = function (pointsAmmount, diameter, correctionPixelsA) {
        var degreeJump = (360 / pointsAmmount);
        var builtPoints = [];
        var order = 0;
        for (var deg = 360; deg > 0; deg -= degreeJump) {
            var point = this.calculateSinglePoint(deg, diameter, correctionPixelsA);
            builtPoints.push({
                x: point.X,
                y: point.Y,
                deg: deg
            });
            order++;
        }
        return builtPoints;
    };
    /**
     * @description Translates Degrees to Radians
     * @param deg Ammount of degrees
     */
    SvgHelper.prototype.degToRad = function (deg) {
        return (deg * (Math.PI / 180));
    };
    /**
     * @description This method takes the dev. and the radius, and
     * generates a series of points into the space that
     * represent the circle points to be plotted.
     * @param deg Degrees relative to the point
     * @param radius Radius related to the point
     * @param position Position for
     * @param diameter Diameter of the circle
     * @param correctionPixels Offet for adjusting each single point
     */
    SvgHelper.prototype.calculateSinglePoint = function (deg, diameter, correctionPixelsA) {
        var offsetLocation = (diameter / 2);
        var X = offsetLocation + ((diameter / 2) * Math.cos(this.degToRad(deg))) * -1;
        X += correctionPixelsA;
        var Y = (offsetLocation + ((diameter / 2) * Math.sin(this.degToRad(deg))));
        Y += correctionPixelsA;
        if (deg == 40) {
            console.log({
                X: X, Y: Y
            });
        }
        return {
            X: X, Y: Y
        };
    };
    /**
     * @description Calculates start and end points for lines.
     * @param pointsAmmount Ammounts of canonical points to calculate
     * @param multFactor Multiplication factor provided on UI
     * @param diameter Diameter of the circle
     * @param correctionPx Correction pixels to apply
     */
    SvgHelper.prototype.calculatePointLocations = function (pointsAmmount, multFactor, diameter, correctionPixelsA) {
        //console.log({ pointsAmmount, multFactor, diameter, correctionPixelsA });
        var plotResult = [];
        var startPoints = this.getStartingPointCoords(pointsAmmount, diameter, correctionPixelsA);
        //console.log({startPoints});
        for (var i = 0; i < startPoints.length; i++) {
            var spinFactor = 1; //How many spins it gives
            var plotPointNumber = Math.floor((multFactor * i)); //TODO Work with decimals
            if (plotPointNumber > pointsAmmount) {
                spinFactor = Math.floor(plotPointNumber / pointsAmmount);
                plotPointNumber -= (spinFactor * pointsAmmount);
            }
            else if (plotPointNumber == pointsAmmount) {
                continue;
            }
            var pointA = {
                label: "" + i,
                labelObj: null,
                dot: null,
                location: startPoints[i]
            };
            var pointB_coords = this.calculateSinglePoint(startPoints[plotPointNumber].deg, diameter, correctionPixelsA);
            var labelB = parseInt((startPoints[plotPointNumber].deg / (360 / pointsAmmount)).toFixed(2));
            var pointB = {
                label: "" + labelB,
                dot: null,
                location: {
                    x: pointB_coords.X,
                    y: pointB_coords.Y,
                    deg: startPoints[plotPointNumber].deg,
                },
                labelObj: null
            };
            plotResult.push({
                pointA: pointA,
                pointB: pointB,
                line: null
            });
        }
        return plotResult;
    };
    /**
     * @description Draws a point into two points
     * @param element Element to draw the dots on
     * @param point The point to enmark into it
     * @returns An SVG.Circle object
     */
    SvgHelper.prototype.drawCanonicalPointLine = function (element, point, _correctionFactorPixelsB) {
        point.pointA.dot = this.drawDot(element, point.pointA);
        //element.circle(5).fill("black");
        //point.pointA.dot.move(point.pointA.location.x, point.pointA.location.y);
        point.pointB.dot = this.drawDot(element, point.pointB);
        //point.pointB.dot = element.circle(5).fill("black");
        //point.pointB.dot.move(point.pointB.location.x, point.pointB.location.y);
        point.line = element.line(point.pointA.location.x + _correctionFactorPixelsB, point.pointA.location.y + _correctionFactorPixelsB, point.pointB.location.x + _correctionFactorPixelsB, point.pointB.location.y + _correctionFactorPixelsB).stroke({ width: 2, color: 'green' });
        return point;
    };
    SvgHelper.prototype.drawCircle = function (element, diameter, correctionA) {
        return element.circle(diameter).fill('transparent')
            .stroke({ width: 1, color: 'black' })
            .move(correctionA + 2, correctionA + 2);
        ;
    };
    SvgHelper.prototype.drawDot = function (element, point) {
        return element.circle(5).fill('black')
            .move(point.location.x, point.location.y);
    };
    SvgHelper.prototype.drawLabels = function (element, point) {
        point.pointA.labelObj = element.text("" + point.pointA.label)
            .fill('black')
            .font({ 'weight': 'bold' })
            .move(point.pointA.location.x + 5, point.pointA.location.y);
        point.pointB.labelObj = element.text("" + point.pointB.label)
            .fill('black')
            .font({ 'weight': 'bold' })
            .move(point.pointB.location.x + 5, point.pointB.location.y);
        return point;
    };
    /**
     * @description Gets the degree value from a point,
     * given a max. set of points.
     */
    SvgHelper.prototype.getDegreeFromPoint = function (point, points) {
        var degA = (360 / points) * point;
        return Math.floor(degA);
    };
    //8
    /**
     * @description Draws a single label, based on the coordinates for a JointPoint object
     * @param element Element to draw the label into
     * @param point The point to get the coordinates
     */
    SvgHelper.prototype.drawLabel = function (element, point) {
        point.labelObj = element.text("" + point.label)
            .fill('black')
            .font({ 'weight': 'bold' })
            .move(point.location.x + 5, point.location.y);
        return point;
    };
    SvgHelper._instace = new SvgHelper();
    return SvgHelper;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/azolot/Documents/Work/Gigs/Reddit/KTXAB/app1/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map