var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { SlideGesture } from './slide-gesture';
import { defaults } from '../util/util';
import { pointerCoord } from '../util/dom';
/**
 * @hidden
 */
var SlideEdgeGesture = (function (_super) {
    __extends(SlideEdgeGesture, _super);
    /**
     * @param {?} plt
     * @param {?} element
     * @param {?=} opts
     */
    function SlideEdgeGesture(plt, element, opts) {
        if (opts === void 0) { opts = {}; }
        var _this = this;
        defaults(opts, {
            edge: 'left',
            maxEdgeStart: 50
        });
        _this = _super.call(this, plt, element, opts) || this;
        // Can check corners through use of eg 'left top'
        _this.edges = opts.edge.split(' ');
        _this.maxEdgeStart = opts.maxEdgeStart;
        return _this;
    }
    /**
     * @param {?} ev
     * @return {?}
     */
    SlideEdgeGesture.prototype.canStart = function (ev) {
        var _this = this;
        var /** @type {?} */ coord = pointerCoord(ev);
        this._d = this.getContainerDimensions();
        return this.edges.every(function (edge) { return _this._checkEdge(edge, coord); });
    };
    /**
     * @return {?}
     */
    SlideEdgeGesture.prototype.getContainerDimensions = function () {
        return {
            left: 0,
            top: 0,
            width: this.plt.width(),
            height: this.plt.height()
        };
    };
    /**
     * @param {?} edge
     * @param {?} pos
     * @return {?}
     */
    SlideEdgeGesture.prototype._checkEdge = function (edge, pos) {
        switch (edge) {
            case 'left': return pos.x <= this._d.left + this.maxEdgeStart;
            case 'right': return pos.x >= this._d.width - this.maxEdgeStart;
            case 'top': return pos.y <= this._d.top + this.maxEdgeStart;
            case 'bottom': return pos.y >= this._d.height - this.maxEdgeStart;
        }
    };
    return SlideEdgeGesture;
}(SlideGesture));
export { SlideEdgeGesture };
function SlideEdgeGesture_tsickle_Closure_declarations() {
    /** @type {?} */
    SlideEdgeGesture.prototype.edges;
    /** @type {?} */
    SlideEdgeGesture.prototype.maxEdgeStart;
    /** @type {?} */
    SlideEdgeGesture.prototype._d;
}
//# sourceMappingURL=slide-edge-gesture.js.map