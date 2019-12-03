/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, HostListener, Input } from "@angular/core";
var NgxPrintDirective = /** @class */ (function () {
    function NgxPrintDirective() {
        this._printStyle = [];
        /**
         *
         *
         * \@memberof NgxPrintDirective
         */
        this.useExistingCss = false;
        /**
         * A delay in milliseconds to force the print dialog to wait before opened. Default: 0
         *
         * \@memberof NgxPrintDirective
         */
        this.printDelay = 0;
        /**
         *
         *
         * @return html for the given tag
         *
         * \@memberof NgxPrintDirective
         */
        this._styleSheetFile = '';
    }
    Object.defineProperty(NgxPrintDirective.prototype, "printStyle", {
        /**
         *
         *
         * @memberof NgxPrintDirective
         */
        set: /**
         *
         *
         * \@memberof NgxPrintDirective
         * @param {?} values
         * @return {?}
         */
        function (values) {
            for (var key in values) {
                if (values.hasOwnProperty(key)) {
                    this._printStyle.push((key + JSON.stringify(values[key])).replace(/['"]+/g, ''));
                }
            }
            this.returnStyleValues();
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     *
     * @returns the string that create the stylesheet which will be injected
     * later within <style></style> tag.
     *
     * -join/replace to transform an array objects to css-styled string
     *
     * @memberof NgxPrintDirective
     */
    /**
     *
     *
     * \@memberof NgxPrintDirective
     * @return {?} the string that create the stylesheet which will be injected
     * later within <style></style> tag.
     *
     * -join/replace to transform an array objects to css-styled string
     *
     */
    NgxPrintDirective.prototype.returnStyleValues = /**
     *
     *
     * \@memberof NgxPrintDirective
     * @return {?} the string that create the stylesheet which will be injected
     * later within <style></style> tag.
     *
     * -join/replace to transform an array objects to css-styled string
     *
     */
    function () {
        return "<style> " + this._printStyle.join(' ').replace(/,/g, ';') + " </style>";
    };
    Object.defineProperty(NgxPrintDirective.prototype, "styleSheetFile", {
        /**
         * @memberof NgxPrintDirective
         * @param cssList
         */
        set: /**
         * \@memberof NgxPrintDirective
         * @param {?} cssList
         * @return {?}
         */
        function (cssList) {
            var e_1, _a;
            /** @type {?} */
            var linkTagFn = (/**
             * @param {?} cssFileName
             * @return {?}
             */
            function (cssFileName) {
                return "<link rel=\"stylesheet\" type=\"text/css\" href=\"" + cssFileName + "\">";
            });
            if (cssList.indexOf(',') !== -1) {
                /** @type {?} */
                var valueArr = cssList.split(',');
                try {
                    for (var valueArr_1 = tslib_1.__values(valueArr), valueArr_1_1 = valueArr_1.next(); !valueArr_1_1.done; valueArr_1_1 = valueArr_1.next()) {
                        var val = valueArr_1_1.value;
                        this._styleSheetFile = this._styleSheetFile + linkTagFn(val);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (valueArr_1_1 && !valueArr_1_1.done && (_a = valueArr_1.return)) _a.call(valueArr_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            else {
                this._styleSheetFile = linkTagFn(cssList);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @returns string which contains the link tags containing the css which will
     * be injected later within <head></head> tag.
     *
     */
    /**
     * @private
     * @return {?} string which contains the link tags containing the css which will
     * be injected later within <head></head> tag.
     *
     */
    NgxPrintDirective.prototype.returnStyleSheetLinkTags = /**
     * @private
     * @return {?} string which contains the link tags containing the css which will
     * be injected later within <head></head> tag.
     *
     */
    function () {
        return this._styleSheetFile;
    };
    /**
     * @private
     * @param {?} tag
     * @return {?}
     */
    NgxPrintDirective.prototype.getElementTag = /**
     * @private
     * @param {?} tag
     * @return {?}
     */
    function (tag) {
        /** @type {?} */
        var html = [];
        /** @type {?} */
        var elements = document.getElementsByTagName(tag);
        for (var index = 0; index < elements.length; index++) {
            html.push(elements[index].outerHTML);
        }
        return html.join('\r\n');
    };
    /**
     *
     *
     * @memberof NgxPrintDirective
     */
    /**
     *
     *
     * \@memberof NgxPrintDirective
     * @return {?}
     */
    NgxPrintDirective.prototype.print = /**
     *
     *
     * \@memberof NgxPrintDirective
     * @return {?}
     */
    function () {
        /** @type {?} */
        var printContents;
        /** @type {?} */
        var popupWin;
        /** @type {?} */
        var styles = '';
        /** @type {?} */
        var links = '';
        if (this.useExistingCss) {
            styles = this.getElementTag('style');
            links = this.getElementTag('link');
        }
        printContents = document.getElementById(this.printSectionId).innerHTML;
        popupWin = window.open("", "_blank", "top=0,left=0,height=auto,width=auto");
        popupWin.document.open();
        popupWin.document.write("\n      <html>\n        <head>\n          <title>" + (this.printTitle ? this.printTitle : "") + "</title>\n          " + this.returnStyleValues() + "\n          " + this.returnStyleSheetLinkTags() + "\n          " + styles + "\n          " + links + "\n        </head>\n        <body>\n          " + printContents + "\n          <script defer>\n            function triggerPrint(event) {\n              window.removeEventListener('load', triggerPrint, false);\n              setTimeout(() => {\n                window.print();\n                setTimeout(() => window.close(), 0);\n              }, " + this.printDelay + ");\n            }\n            window.addEventListener('load', triggerPrint, false);\n          </script>\n        </body>\n      </html>");
        popupWin.document.close();
    };
    NgxPrintDirective.decorators = [
        { type: Directive, args: [{
                    selector: "button[ngxPrint]"
                },] }
    ];
    NgxPrintDirective.propDecorators = {
        printSectionId: [{ type: Input }],
        printTitle: [{ type: Input }],
        useExistingCss: [{ type: Input }],
        printStyle: [{ type: Input }],
        printDelay: [{ type: Input }],
        styleSheetFile: [{ type: Input }],
        print: [{ type: HostListener, args: ['click',] }]
    };
    return NgxPrintDirective;
}());
export { NgxPrintDirective };
if (false) {
    /** @type {?} */
    NgxPrintDirective.prototype._printStyle;
    /**
     *
     *
     * \@memberof NgxPrintDirective
     * @type {?}
     */
    NgxPrintDirective.prototype.printSectionId;
    /**
     *
     *
     * \@memberof NgxPrintDirective
     * @type {?}
     */
    NgxPrintDirective.prototype.printTitle;
    /**
     *
     *
     * \@memberof NgxPrintDirective
     * @type {?}
     */
    NgxPrintDirective.prototype.useExistingCss;
    /**
     * A delay in milliseconds to force the print dialog to wait before opened. Default: 0
     *
     * \@memberof NgxPrintDirective
     * @type {?}
     */
    NgxPrintDirective.prototype.printDelay;
    /**
     *
     *
     * \@return html for the given tag
     *
     * \@memberof NgxPrintDirective
     * @type {?}
     * @private
     */
    NgxPrintDirective.prototype._styleSheetFile;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXByaW50LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1wcmludC8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtcHJpbnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9EO0lBQUE7UUFLUyxnQkFBVyxHQUFHLEVBQUUsQ0FBQzs7Ozs7O1FBcUJmLG1CQUFjLEdBQUcsS0FBSyxDQUFDOzs7Ozs7UUFzQnZCLGVBQVUsR0FBVyxDQUFDLENBQUM7Ozs7Ozs7O1FBd0J4QixvQkFBZSxHQUFHLEVBQUUsQ0FBQztJQWdGL0IsQ0FBQztJQXZIQyxzQkFDSSx5Q0FBVTtRQU5kOzs7O1dBSUc7Ozs7Ozs7O1FBQ0gsVUFDZSxNQUFvRDtZQUNqRSxLQUFLLElBQUksR0FBRyxJQUFJLE1BQU0sRUFBRTtnQkFDdEIsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNoQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUNoRjthQUNGO1lBQ0QsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFVSDs7Ozs7Ozs7O09BU0c7Ozs7Ozs7Ozs7O0lBQ0ksNkNBQWlCOzs7Ozs7Ozs7O0lBQXhCO1FBQ0UsT0FBTyxhQUFXLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUMsR0FBRyxDQUFDLGNBQVcsQ0FBQztJQUMxRSxDQUFDO0lBZUQsc0JBQ0ksNkNBQWM7UUFMbEI7OztXQUdHOzs7Ozs7UUFDSCxVQUNtQixPQUFlOzs7Z0JBQzVCLFNBQVM7Ozs7WUFBRyxVQUFBLFdBQVc7Z0JBQ3pCLE9BQUEsdURBQWdELFdBQVcsUUFBSTtZQUEvRCxDQUErRCxDQUFBO1lBQ2pFLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTs7b0JBQ3pCLFFBQVEsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7b0JBQ25DLEtBQWdCLElBQUEsYUFBQSxpQkFBQSxRQUFRLENBQUEsa0NBQUEsd0RBQUU7d0JBQXJCLElBQUksR0FBRyxxQkFBQTt3QkFDVixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUM5RDs7Ozs7Ozs7O2FBQ0Y7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDM0M7UUFDSCxDQUFDOzs7T0FBQTtJQUVEOzs7O09BSUc7Ozs7Ozs7SUFDSyxvREFBd0I7Ozs7OztJQUFoQztRQUNFLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDOzs7Ozs7SUFDTyx5Q0FBYTs7Ozs7SUFBckIsVUFBc0IsR0FBZ0M7O1lBQzlDLElBQUksR0FBYSxFQUFFOztZQUNuQixRQUFRLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQztRQUNuRCxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNwRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN0QztRQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBR0Q7Ozs7T0FJRzs7Ozs7OztJQUVJLGlDQUFLOzs7Ozs7SUFEWjs7WUFFTSxhQUFhOztZQUFFLFFBQVE7O1lBQUUsTUFBTSxHQUFHLEVBQUU7O1lBQUUsS0FBSyxHQUFHLEVBQUU7UUFFcEQsSUFBRyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3RCLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3JDLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3BDO1FBRUQsYUFBYSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN2RSxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLHFDQUFxQyxDQUFDLENBQUM7UUFDNUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyx1REFHVCxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLDZCQUM3QyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsb0JBQ3hCLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxvQkFDL0IsTUFBTSxvQkFDTixLQUFLLHFEQUdMLGFBQWEsa1NBT04sSUFBSSxDQUFDLFVBQVUsOElBS3BCLENBQUMsQ0FBQztRQUNaLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7Z0JBdkpGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2lCQUM3Qjs7O2lDQVVFLEtBQUs7NkJBT0wsS0FBSztpQ0FPTCxLQUFLOzZCQU9MLEtBQUs7NkJBZUwsS0FBSztpQ0E4QkwsS0FBSzt3QkFxQ0wsWUFBWSxTQUFDLE9BQU87O0lBcUN2Qix3QkFBQztDQUFBLEFBeEpELElBd0pDO1NBckpZLGlCQUFpQjs7O0lBRTVCLHdDQUF3Qjs7Ozs7OztJQU94QiwyQ0FBZ0M7Ozs7Ozs7SUFPaEMsdUNBQTRCOzs7Ozs7O0lBTzVCLDJDQUFnQzs7Ozs7OztJQXNCaEMsdUNBQWdDOzs7Ozs7Ozs7O0lBd0JoQyw0Q0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogXCJidXR0b25bbmd4UHJpbnRdXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIE5neFByaW50RGlyZWN0aXZlIHtcclxuXHJcbiAgcHVibGljIF9wcmludFN0eWxlID0gW107XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgTmd4UHJpbnREaXJlY3RpdmVcclxuICAgKi9cclxuICBASW5wdXQoKSBwcmludFNlY3Rpb25JZDogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIE5neFByaW50RGlyZWN0aXZlXHJcbiAgICovXHJcbiAgQElucHV0KCkgcHJpbnRUaXRsZTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIE5neFByaW50RGlyZWN0aXZlXHJcbiAgICovXHJcbiAgQElucHV0KCkgdXNlRXhpc3RpbmdDc3MgPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBOZ3hQcmludERpcmVjdGl2ZVxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHByaW50U3R5bGUodmFsdWVzOiB7IFtrZXk6IHN0cmluZ106IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfSkge1xyXG4gICAgZm9yIChsZXQga2V5IGluIHZhbHVlcykge1xyXG4gICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgdGhpcy5fcHJpbnRTdHlsZS5wdXNoKChrZXkgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZXNba2V5XSkpLnJlcGxhY2UoL1snXCJdKy9nLCAnJykpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnJldHVyblN0eWxlVmFsdWVzKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIEEgZGVsYXkgaW4gbWlsbGlzZWNvbmRzIHRvIGZvcmNlIHRoZSBwcmludCBkaWFsb2cgdG8gd2FpdCBiZWZvcmUgb3BlbmVkLiBEZWZhdWx0OiAwXHJcbiAgKlxyXG4gICogQG1lbWJlcm9mIE5neFByaW50RGlyZWN0aXZlXHJcbiAgKi9cclxuICBASW5wdXQoKSBwcmludERlbGF5OiBudW1iZXIgPSAwO1xyXG5cclxuXHJcbi8qKlxyXG4gKlxyXG4gKlxyXG4gKiBAcmV0dXJucyB0aGUgc3RyaW5nIHRoYXQgY3JlYXRlIHRoZSBzdHlsZXNoZWV0IHdoaWNoIHdpbGwgYmUgaW5qZWN0ZWRcclxuICogbGF0ZXIgd2l0aGluIDxzdHlsZT48L3N0eWxlPiB0YWcuXHJcbiAqXHJcbiAqIC1qb2luL3JlcGxhY2UgdG8gdHJhbnNmb3JtIGFuIGFycmF5IG9iamVjdHMgdG8gY3NzLXN0eWxlZCBzdHJpbmdcclxuICpcclxuICogQG1lbWJlcm9mIE5neFByaW50RGlyZWN0aXZlXHJcbiAqL1xyXG5wdWJsaWMgcmV0dXJuU3R5bGVWYWx1ZXMoKSB7XHJcbiAgcmV0dXJuIGA8c3R5bGU+ICR7dGhpcy5fcHJpbnRTdHlsZS5qb2luKCcgJykucmVwbGFjZSgvLC9nLCc7Jyl9IDwvc3R5bGU+YDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyBodG1sIGZvciB0aGUgZ2l2ZW4gdGFnXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgTmd4UHJpbnREaXJlY3RpdmVcclxuICAgKi9cclxuICBwcml2YXRlIF9zdHlsZVNoZWV0RmlsZSA9ICcnO1xyXG5cclxuICAvKipcclxuICAgKiBAbWVtYmVyb2YgTmd4UHJpbnREaXJlY3RpdmVcclxuICAgKiBAcGFyYW0gY3NzTGlzdFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHN0eWxlU2hlZXRGaWxlKGNzc0xpc3Q6IHN0cmluZykge1xyXG4gICAgbGV0IGxpbmtUYWdGbiA9IGNzc0ZpbGVOYW1lID0+XHJcbiAgICAgIGA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIiR7Y3NzRmlsZU5hbWV9XCI+YDtcclxuICAgIGlmIChjc3NMaXN0LmluZGV4T2YoJywnKSAhPT0gLTEpIHtcclxuICAgICAgY29uc3QgdmFsdWVBcnIgPSBjc3NMaXN0LnNwbGl0KCcsJyk7XHJcbiAgICAgIGZvciAobGV0IHZhbCBvZiB2YWx1ZUFycikge1xyXG4gICAgICAgIHRoaXMuX3N0eWxlU2hlZXRGaWxlID0gdGhpcy5fc3R5bGVTaGVldEZpbGUgKyBsaW5rVGFnRm4odmFsKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fc3R5bGVTaGVldEZpbGUgPSBsaW5rVGFnRm4oY3NzTGlzdCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcmV0dXJucyBzdHJpbmcgd2hpY2ggY29udGFpbnMgdGhlIGxpbmsgdGFncyBjb250YWluaW5nIHRoZSBjc3Mgd2hpY2ggd2lsbFxyXG4gICAqIGJlIGluamVjdGVkIGxhdGVyIHdpdGhpbiA8aGVhZD48L2hlYWQ+IHRhZy5cclxuICAgKlxyXG4gICAqL1xyXG4gIHByaXZhdGUgcmV0dXJuU3R5bGVTaGVldExpbmtUYWdzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3N0eWxlU2hlZXRGaWxlO1xyXG4gIH1cclxuICBwcml2YXRlIGdldEVsZW1lbnRUYWcodGFnOiBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXApOiBzdHJpbmcge1xyXG4gICAgY29uc3QgaHRtbDogc3RyaW5nW10gPSBbXTtcclxuICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUodGFnKTtcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBlbGVtZW50cy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgaHRtbC5wdXNoKGVsZW1lbnRzW2luZGV4XS5vdXRlckhUTUwpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGh0bWwuam9pbignXFxyXFxuJyk7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBOZ3hQcmludERpcmVjdGl2ZVxyXG4gICAqL1xyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcclxuICBwdWJsaWMgcHJpbnQoKTogdm9pZCB7XHJcbiAgICBsZXQgcHJpbnRDb250ZW50cywgcG9wdXBXaW4sIHN0eWxlcyA9ICcnLCBsaW5rcyA9ICcnO1xyXG5cclxuICAgIGlmKHRoaXMudXNlRXhpc3RpbmdDc3MpIHtcclxuICAgICAgc3R5bGVzID0gdGhpcy5nZXRFbGVtZW50VGFnKCdzdHlsZScpO1xyXG4gICAgICBsaW5rcyA9IHRoaXMuZ2V0RWxlbWVudFRhZygnbGluaycpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaW50Q29udGVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnByaW50U2VjdGlvbklkKS5pbm5lckhUTUw7XHJcbiAgICBwb3B1cFdpbiA9IHdpbmRvdy5vcGVuKFwiXCIsIFwiX2JsYW5rXCIsIFwidG9wPTAsbGVmdD0wLGhlaWdodD1hdXRvLHdpZHRoPWF1dG9cIik7XHJcbiAgICBwb3B1cFdpbi5kb2N1bWVudC5vcGVuKCk7XHJcbiAgICBwb3B1cFdpbi5kb2N1bWVudC53cml0ZShgXHJcbiAgICAgIDxodG1sPlxyXG4gICAgICAgIDxoZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPiR7dGhpcy5wcmludFRpdGxlID8gdGhpcy5wcmludFRpdGxlIDogXCJcIn08L3RpdGxlPlxyXG4gICAgICAgICAgJHt0aGlzLnJldHVyblN0eWxlVmFsdWVzKCl9XHJcbiAgICAgICAgICAke3RoaXMucmV0dXJuU3R5bGVTaGVldExpbmtUYWdzKCl9XHJcbiAgICAgICAgICAke3N0eWxlc31cclxuICAgICAgICAgICR7bGlua3N9XHJcbiAgICAgICAgPC9oZWFkPlxyXG4gICAgICAgIDxib2R5PlxyXG4gICAgICAgICAgJHtwcmludENvbnRlbnRzfVxyXG4gICAgICAgICAgPHNjcmlwdCBkZWZlcj5cclxuICAgICAgICAgICAgZnVuY3Rpb24gdHJpZ2dlclByaW50KGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCB0cmlnZ2VyUHJpbnQsIGZhbHNlKTtcclxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5wcmludCgpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB3aW5kb3cuY2xvc2UoKSwgMCk7XHJcbiAgICAgICAgICAgICAgfSwgJHt0aGlzLnByaW50RGVsYXl9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHRyaWdnZXJQcmludCwgZmFsc2UpO1xyXG4gICAgICAgICAgPC9zY3JpcHQ+XHJcbiAgICAgICAgPC9ib2R5PlxyXG4gICAgICA8L2h0bWw+YCk7XHJcbiAgICBwb3B1cFdpbi5kb2N1bWVudC5jbG9zZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=