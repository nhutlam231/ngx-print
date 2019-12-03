/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, Input } from "@angular/core";
export class NgxPrintDirective {
    constructor() {
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
    /**
     *
     *
     * \@memberof NgxPrintDirective
     * @param {?} values
     * @return {?}
     */
    set printStyle(values) {
        for (let key in values) {
            if (values.hasOwnProperty(key)) {
                this._printStyle.push((key + JSON.stringify(values[key])).replace(/['"]+/g, ''));
            }
        }
        this.returnStyleValues();
    }
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
    returnStyleValues() {
        return `<style> ${this._printStyle.join(' ').replace(/,/g, ';')} </style>`;
    }
    /**
     * \@memberof NgxPrintDirective
     * @param {?} cssList
     * @return {?}
     */
    set styleSheetFile(cssList) {
        /** @type {?} */
        let linkTagFn = (/**
         * @param {?} cssFileName
         * @return {?}
         */
        cssFileName => `<link rel="stylesheet" type="text/css" href="${cssFileName}">`);
        if (cssList.indexOf(',') !== -1) {
            /** @type {?} */
            const valueArr = cssList.split(',');
            for (let val of valueArr) {
                this._styleSheetFile = this._styleSheetFile + linkTagFn(val);
            }
        }
        else {
            this._styleSheetFile = linkTagFn(cssList);
        }
    }
    /**
     * @private
     * @return {?} string which contains the link tags containing the css which will
     * be injected later within <head></head> tag.
     *
     */
    returnStyleSheetLinkTags() {
        return this._styleSheetFile;
    }
    /**
     * @private
     * @param {?} tag
     * @return {?}
     */
    getElementTag(tag) {
        /** @type {?} */
        const html = [];
        /** @type {?} */
        const elements = document.getElementsByTagName(tag);
        for (let index = 0; index < elements.length; index++) {
            html.push(elements[index].outerHTML);
        }
        return html.join('\r\n');
    }
    /**
     *
     *
     * \@memberof NgxPrintDirective
     * @return {?}
     */
    print() {
        /** @type {?} */
        let printContents;
        /** @type {?} */
        let popupWin;
        /** @type {?} */
        let styles = '';
        /** @type {?} */
        let links = '';
        if (this.useExistingCss) {
            styles = this.getElementTag('style');
            links = this.getElementTag('link');
        }
        printContents = document.getElementById(this.printSectionId).innerHTML;
        popupWin = window.open("", "_blank", "top=0,left=0,height=auto,width=auto");
        popupWin.document.open();
        popupWin.document.write(`
      <html>
        <head>
          <title>${this.printTitle ? this.printTitle : ""}</title>
          ${this.returnStyleValues()}
          ${this.returnStyleSheetLinkTags()}
          ${styles}
          ${links}
        </head>
        <body>
          ${printContents}
          <script defer>
            function triggerPrint(event) {
              window.removeEventListener('load', triggerPrint, false);
              setTimeout(() => {
                window.print();
                setTimeout(() => window.close(), 0);
              }, ${this.printDelay});
            }
            window.addEventListener('load', triggerPrint, false);
          </script>
        </body>
      </html>`);
        popupWin.document.close();
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXByaW50LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1wcmludC8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtcHJpbnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJL0QsTUFBTSxPQUFPLGlCQUFpQjtJQUg5QjtRQUtTLGdCQUFXLEdBQUcsRUFBRSxDQUFDOzs7Ozs7UUFxQmYsbUJBQWMsR0FBRyxLQUFLLENBQUM7Ozs7OztRQXNCdkIsZUFBVSxHQUFXLENBQUMsQ0FBQzs7Ozs7Ozs7UUF3QnhCLG9CQUFlLEdBQUcsRUFBRSxDQUFDO0lBZ0YvQixDQUFDOzs7Ozs7OztJQXZIQyxJQUNJLFVBQVUsQ0FBQyxNQUFvRDtRQUNqRSxLQUFLLElBQUksR0FBRyxJQUFJLE1BQU0sRUFBRTtZQUN0QixJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDaEY7U0FDRjtRQUNELElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7Ozs7Ozs7O0lBb0JJLGlCQUFpQjtRQUN0QixPQUFPLFdBQVcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBQyxHQUFHLENBQUMsV0FBVyxDQUFDO0lBQzFFLENBQUM7Ozs7OztJQWVELElBQ0ksY0FBYyxDQUFDLE9BQWU7O1lBQzVCLFNBQVM7Ozs7UUFBRyxXQUFXLENBQUMsRUFBRSxDQUM1QixnREFBZ0QsV0FBVyxJQUFJLENBQUE7UUFDakUsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFOztrQkFDekIsUUFBUSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1lBQ25DLEtBQUssSUFBSSxHQUFHLElBQUksUUFBUSxFQUFFO2dCQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzlEO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzNDO0lBQ0gsQ0FBQzs7Ozs7OztJQU9PLHdCQUF3QjtRQUM5QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQzs7Ozs7O0lBQ08sYUFBYSxDQUFDLEdBQWdDOztjQUM5QyxJQUFJLEdBQWEsRUFBRTs7Y0FDbkIsUUFBUSxHQUFHLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUM7UUFDbkQsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDdEM7UUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Ozs7OztJQVNNLEtBQUs7O1lBQ04sYUFBYTs7WUFBRSxRQUFROztZQUFFLE1BQU0sR0FBRyxFQUFFOztZQUFFLEtBQUssR0FBRyxFQUFFO1FBRXBELElBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN0QixNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNyQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNwQztRQUVELGFBQWEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDdkUsUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxxQ0FBcUMsQ0FBQyxDQUFDO1FBQzVFLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7OzttQkFHVCxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzdDLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUN4QixJQUFJLENBQUMsd0JBQXdCLEVBQUU7WUFDL0IsTUFBTTtZQUNOLEtBQUs7OztZQUdMLGFBQWE7Ozs7Ozs7bUJBT04sSUFBSSxDQUFDLFVBQVU7Ozs7O2NBS3BCLENBQUMsQ0FBQztRQUNaLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7O1lBdkpGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2FBQzdCOzs7NkJBVUUsS0FBSzt5QkFPTCxLQUFLOzZCQU9MLEtBQUs7eUJBT0wsS0FBSzt5QkFlTCxLQUFLOzZCQThCTCxLQUFLO29CQXFDTCxZQUFZLFNBQUMsT0FBTzs7OztJQTlHckIsd0NBQXdCOzs7Ozs7O0lBT3hCLDJDQUFnQzs7Ozs7OztJQU9oQyx1Q0FBNEI7Ozs7Ozs7SUFPNUIsMkNBQWdDOzs7Ozs7O0lBc0JoQyx1Q0FBZ0M7Ozs7Ozs7Ozs7SUF3QmhDLDRDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcImJ1dHRvbltuZ3hQcmludF1cIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4UHJpbnREaXJlY3RpdmUge1xyXG5cclxuICBwdWJsaWMgX3ByaW50U3R5bGUgPSBbXTtcclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBOZ3hQcmludERpcmVjdGl2ZVxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHByaW50U2VjdGlvbklkOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgTmd4UHJpbnREaXJlY3RpdmVcclxuICAgKi9cclxuICBASW5wdXQoKSBwcmludFRpdGxlOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgTmd4UHJpbnREaXJlY3RpdmVcclxuICAgKi9cclxuICBASW5wdXQoKSB1c2VFeGlzdGluZ0NzcyA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIE5neFByaW50RGlyZWN0aXZlXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBzZXQgcHJpbnRTdHlsZSh2YWx1ZXM6IHsgW2tleTogc3RyaW5nXTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB9KSB7XHJcbiAgICBmb3IgKGxldCBrZXkgaW4gdmFsdWVzKSB7XHJcbiAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICB0aGlzLl9wcmludFN0eWxlLnB1c2goKGtleSArIEpTT04uc3RyaW5naWZ5KHZhbHVlc1trZXldKSkucmVwbGFjZSgvWydcIl0rL2csICcnKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMucmV0dXJuU3R5bGVWYWx1ZXMoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogQSBkZWxheSBpbiBtaWxsaXNlY29uZHMgdG8gZm9yY2UgdGhlIHByaW50IGRpYWxvZyB0byB3YWl0IGJlZm9yZSBvcGVuZWQuIERlZmF1bHQ6IDBcclxuICAqXHJcbiAgKiBAbWVtYmVyb2YgTmd4UHJpbnREaXJlY3RpdmVcclxuICAqL1xyXG4gIEBJbnB1dCgpIHByaW50RGVsYXk6IG51bWJlciA9IDA7XHJcblxyXG5cclxuLyoqXHJcbiAqXHJcbiAqXHJcbiAqIEByZXR1cm5zIHRoZSBzdHJpbmcgdGhhdCBjcmVhdGUgdGhlIHN0eWxlc2hlZXQgd2hpY2ggd2lsbCBiZSBpbmplY3RlZFxyXG4gKiBsYXRlciB3aXRoaW4gPHN0eWxlPjwvc3R5bGU+IHRhZy5cclxuICpcclxuICogLWpvaW4vcmVwbGFjZSB0byB0cmFuc2Zvcm0gYW4gYXJyYXkgb2JqZWN0cyB0byBjc3Mtc3R5bGVkIHN0cmluZ1xyXG4gKlxyXG4gKiBAbWVtYmVyb2YgTmd4UHJpbnREaXJlY3RpdmVcclxuICovXHJcbnB1YmxpYyByZXR1cm5TdHlsZVZhbHVlcygpIHtcclxuICByZXR1cm4gYDxzdHlsZT4gJHt0aGlzLl9wcmludFN0eWxlLmpvaW4oJyAnKS5yZXBsYWNlKC8sL2csJzsnKX0gPC9zdHlsZT5gO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIGh0bWwgZm9yIHRoZSBnaXZlbiB0YWdcclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBOZ3hQcmludERpcmVjdGl2ZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX3N0eWxlU2hlZXRGaWxlID0gJyc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBtZW1iZXJvZiBOZ3hQcmludERpcmVjdGl2ZVxyXG4gICAqIEBwYXJhbSBjc3NMaXN0XHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBzZXQgc3R5bGVTaGVldEZpbGUoY3NzTGlzdDogc3RyaW5nKSB7XHJcbiAgICBsZXQgbGlua1RhZ0ZuID0gY3NzRmlsZU5hbWUgPT5cclxuICAgICAgYDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiJHtjc3NGaWxlTmFtZX1cIj5gO1xyXG4gICAgaWYgKGNzc0xpc3QuaW5kZXhPZignLCcpICE9PSAtMSkge1xyXG4gICAgICBjb25zdCB2YWx1ZUFyciA9IGNzc0xpc3Quc3BsaXQoJywnKTtcclxuICAgICAgZm9yIChsZXQgdmFsIG9mIHZhbHVlQXJyKSB7XHJcbiAgICAgICAgdGhpcy5fc3R5bGVTaGVldEZpbGUgPSB0aGlzLl9zdHlsZVNoZWV0RmlsZSArIGxpbmtUYWdGbih2YWwpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9zdHlsZVNoZWV0RmlsZSA9IGxpbmtUYWdGbihjc3NMaXN0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEByZXR1cm5zIHN0cmluZyB3aGljaCBjb250YWlucyB0aGUgbGluayB0YWdzIGNvbnRhaW5pbmcgdGhlIGNzcyB3aGljaCB3aWxsXHJcbiAgICogYmUgaW5qZWN0ZWQgbGF0ZXIgd2l0aGluIDxoZWFkPjwvaGVhZD4gdGFnLlxyXG4gICAqXHJcbiAgICovXHJcbiAgcHJpdmF0ZSByZXR1cm5TdHlsZVNoZWV0TGlua1RhZ3MoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc3R5bGVTaGVldEZpbGU7XHJcbiAgfVxyXG4gIHByaXZhdGUgZ2V0RWxlbWVudFRhZyh0YWc6IGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBodG1sOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSh0YWcpO1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGVsZW1lbnRzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBodG1sLnB1c2goZWxlbWVudHNbaW5kZXhdLm91dGVySFRNTCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaHRtbC5qb2luKCdcXHJcXG4nKTtcclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIE5neFByaW50RGlyZWN0aXZlXHJcbiAgICovXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxyXG4gIHB1YmxpYyBwcmludCgpOiB2b2lkIHtcclxuICAgIGxldCBwcmludENvbnRlbnRzLCBwb3B1cFdpbiwgc3R5bGVzID0gJycsIGxpbmtzID0gJyc7XHJcblxyXG4gICAgaWYodGhpcy51c2VFeGlzdGluZ0Nzcykge1xyXG4gICAgICBzdHlsZXMgPSB0aGlzLmdldEVsZW1lbnRUYWcoJ3N0eWxlJyk7XHJcbiAgICAgIGxpbmtzID0gdGhpcy5nZXRFbGVtZW50VGFnKCdsaW5rJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpbnRDb250ZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMucHJpbnRTZWN0aW9uSWQpLmlubmVySFRNTDtcclxuICAgIHBvcHVwV2luID0gd2luZG93Lm9wZW4oXCJcIiwgXCJfYmxhbmtcIiwgXCJ0b3A9MCxsZWZ0PTAsaGVpZ2h0PWF1dG8sd2lkdGg9YXV0b1wiKTtcclxuICAgIHBvcHVwV2luLmRvY3VtZW50Lm9wZW4oKTtcclxuICAgIHBvcHVwV2luLmRvY3VtZW50LndyaXRlKGBcclxuICAgICAgPGh0bWw+XHJcbiAgICAgICAgPGhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+JHt0aGlzLnByaW50VGl0bGUgPyB0aGlzLnByaW50VGl0bGUgOiBcIlwifTwvdGl0bGU+XHJcbiAgICAgICAgICAke3RoaXMucmV0dXJuU3R5bGVWYWx1ZXMoKX1cclxuICAgICAgICAgICR7dGhpcy5yZXR1cm5TdHlsZVNoZWV0TGlua1RhZ3MoKX1cclxuICAgICAgICAgICR7c3R5bGVzfVxyXG4gICAgICAgICAgJHtsaW5rc31cclxuICAgICAgICA8L2hlYWQ+XHJcbiAgICAgICAgPGJvZHk+XHJcbiAgICAgICAgICAke3ByaW50Q29udGVudHN9XHJcbiAgICAgICAgICA8c2NyaXB0IGRlZmVyPlxyXG4gICAgICAgICAgICBmdW5jdGlvbiB0cmlnZ2VyUHJpbnQoZXZlbnQpIHtcclxuICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIHRyaWdnZXJQcmludCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LnByaW50KCk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHdpbmRvdy5jbG9zZSgpLCAwKTtcclxuICAgICAgICAgICAgICB9LCAke3RoaXMucHJpbnREZWxheX0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgdHJpZ2dlclByaW50LCBmYWxzZSk7XHJcbiAgICAgICAgICA8L3NjcmlwdD5cclxuICAgICAgICA8L2JvZHk+XHJcbiAgICAgIDwvaHRtbD5gKTtcclxuICAgIHBvcHVwV2luLmRvY3VtZW50LmNsb3NlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==