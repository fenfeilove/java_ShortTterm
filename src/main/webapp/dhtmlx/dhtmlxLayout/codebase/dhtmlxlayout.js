//v.3.6 build 130619

/*
Copyright DHTMLX LTD. http://www.dhtmlx.com
You allowed to use this component or parts of it under GPL terms
To use it on other terms or get Professional edition of the component please contact us at sales@dhtmlx.com
 */
function dhtmlXLayoutPanel() {}
function dhtmlXLayoutObject(f, k, l) {
	if (window.dhtmlXContainer) {
		var h = this;
		this._autodetectSkin = function () {
			var a = document.createElement("DIV");
			a.className = "dhxlayout_skin_detect";
			document.body.childNodes.length > 0 ? document.body.insertBefore(a, document.body.childNodes[0]) : document.body.appendChild(a);
			var c = a.offsetWidth;
			document.body.removeChild(a);
			a = null;
			return c == 199 ? "dhx_skyblue" : c == 299 ? "dhx_blue" : c == 399 ? "dhx_black" : c == 499 ? "dhx_web" : c == 599 ? "dhx_terrace" : "dhx_skyblue"
		};
		this.skin = l != null ? l : typeof dhtmlx !=
			"undefined" && typeof dhtmlx.skin == "string" ? dhtmlx.skin : this._autodetectSkin();
		this.setSkin = function (a) {
			if (this.skinParams[a]) {
				this.skin = a;
				this._CPanelHeight = this.skinParams[this.skin].cpanel_height;
				this._collapsedW = this.skinParams[this.skin].cpanel_collapsed_width;
				this._collapsedH = this.skinParams[this.skin].cpanel_collapsed_height;
				this.tpl.className = "dhtmlxLayoutPolyContainer_" + this.skin + (this._r ? " dhxlayout_rtl" : "");
				this.sizer.className = "dhxLayout_Sizer_" + this.skin;
				this.dhxWins && this.dhxWins.setSkin(this.skin);
				for (var c in this.polyObj)
					this.polyObj[c].skin = this.skin;
				this.base.skin = this.skin;
				this._fixIcons();
				this.setSizes()
			}
		};
		this._isIPad = navigator.userAgent.search(/iPad/gi) >= 0;
		this._dblClickTM = 600;
		this._mBottom = this._mTop = 0;
		typeof f == "string" && (f = document.getElementById(f));
		if ((f._isWindow == !0 || f._isCell) && !this.base) {
			if (f._isCell && f.attachLayout)
				return f.attachLayout(k, l);
			if (f.isWindow)
				return f.attachLayout(k, l);
			this.base = f
		}
		if (f == document.body && !this.base)
			document.body.style.overflow = "hidden";
		if ((typeof f ==
				"object" || f == document.body) && !this.base) {
			var t = document.createElement("DIV");
			t.className = "dhxcont_global_layout_area";
			f.appendChild(t);
			f._isLayout = !0;
			this.cont = new dhtmlXContainer(f);
			this.cont.setContent(t);
			if (f == document.body) {
				if (this.skin == "dhx_skyblue" || this.skin == "dhx_blue")
					this.cont.obj._offsetTop = 2, this.cont.obj._offsetLeft = 2, this.cont.obj._offsetHeight = -4, this.cont.obj._offsetWidth = -4;
				if (this.skin == "dhx_web")
					this.cont.obj._offsetTop = 9, this.cont.obj._offsetLeft = 9, this.cont.obj._offsetHeight =
						-18, this.cont.obj._offsetWidth = -18;
				if (this.skin == "dhx_terrace")
					this.cont.obj._offsetTop = 14, this.cont.obj._offsetLeft = 14, this.cont.obj._offsetHeight = -28, this.cont.obj._offsetWidth = -28;
				document.body.className += " dhxlayout_fullscreened"
			}
			f.adjustContent(f, this._mTop, null, null, this._mBottom);
			this.base = document.createElement("DIV");
			this.base.style.overflow = "hidden";
			this.base.style.position = "absolute";
			this.base.style.left = "0px";
			this.base.style.top = "0px";
			this.base.style.width = t.childNodes[0].style.width;
			this.base.style.height = t.childNodes[0].style.height;
			t.childNodes[0].appendChild(this.base);
			if (f == document.body)
				this._lw = this._tmTime = null, this._doOnResizeStart = function () {
					window.clearTimeout(this._tmTime);
					this._tmTime = window.setTimeout(function () {
							h._doOnResizeEnd()
						}, 200)
				},
			this._doOnResizeEnd = function () {
				this.setSizes(!1)
			},
			_isIE ? window.attachEvent("onresize", h._doOnResizeStart) : window.addEventListener("resize", h._doOnResizeStart, !1);
			f._doOnAttachToolbar = function () {
				h != null && typeof h.setSizes == "function" &&
				h.setSizes()
			}
		}
		this.items = [];
		this.cells = function (a) {
			return this.polyObj[a] != null ? this.polyObj[a] : null
		};
		this.getIdByIndex = function (a) {
			return a < 0 ? null : a >= this.items.length ? null : this.items[a]._idd
		};
		this.getIndexById = function (a) {
			return this.cells(a) != null ? this.cells(a).getIndex() : null
		};
		this.imagePath = dhtmlx.image_path || "codebase/imgs/";
		this.setImagePath = function (a) {
			this.imagePath = a
		};
		this.polyObj = {};
		this.sepHor = [];
		this.sepVer = [];
		this._layoutView = k != null ? String(k).toUpperCase() : "3E";
		this._minHeight = this._minWidth =
			40;
		this._CPanelBtnsWidth = 32;
		this.skinParams = {
			dhx_black : {
				hor_sep_height : 5,
				ver_sep_width : 5,
				cpanel_height : 34,
				cpanel_collapsed_width : 18,
				cpanel_collapsed_height : 18
			},
			dhx_blue : {
				hor_sep_height : 5,
				ver_sep_width : 5,
				cpanel_height : 34,
				cpanel_collapsed_width : 18,
				cpanel_collapsed_height : 18
			},
			dhx_skyblue : {
				hor_sep_height : 5,
				ver_sep_width : 5,
				cpanel_height : 26,
				cpanel_collapsed_width : 18,
				cpanel_collapsed_height : 18
			},
			dhx_web : {
				hor_sep_height : 9,
				ver_sep_width : 9,
				cpanel_height : 27,
				cpanel_collapsed_width : 18,
				cpanel_collapsed_height : 18,
				cell_pading_max : 1,
				cell_pading_min : 0
			},
			dhx_terrace : {
				hor_sep_height : 14,
				ver_sep_width : 14,
				cpanel_height : 37,
				cpanel_collapsed_width : 18,
				cpanel_collapsed_height : 18,
				cell_pading_max : 1,
				cell_pading_min : 0
			}
		};
		this._CPanelHeight = this.skinParams[this.skin].cpanel_height;
		this._collapsedW = this.skinParams[this.skin].cpanel_collapsed_width;
		this._collapsedH = this.skinParams[this.skin].cpanel_collapsed_height;
		this.tpl = document.createElement("TABLE");
		this.tpl.dir = "ltr";
		this.tpl.className = "dhtmlxLayoutPolyContainer_" + this.skin;
		this.tpl.cellSpacing = 0;
		this.tpl.cellPadding = 0;
		var v = document.createElement("TBODY");
		this.tpl.appendChild(v);
		this.tpl.border = 0;
		this.tplSizes = {};
		this._effects = {
			collapse : !1,
			resize : !1,
			highlight : !0
		};
		this.sizer = document.createElement("DIV");
		this.sizer.className = "dhxLayout_Sizer_" + this.skin;
		this.sizer.style.display = "none";
		document.body.appendChild(this.sizer);
		this._attachSizer = function (a) {
			h.sizer.style.left = getAbsoluteLeft(a) + "px";
			h.sizer.style.top = getAbsoluteTop(a) + "px";
			h.sizer.style.width = a.offsetWidth +
				"px";
			h.sizer.style.height = a.offsetHeight + "px";
			if (h._sizerML != null)
				h.sizer.style.marginLeft = h._sizerML + "px";
			if (h._sizerMT != null)
				h.sizer.style.marginTop = h._sizerMT + "px";
			h.sizer.style.display = "";
			h.sizer.className = "dhxLayout_Sizer_" + h.skin;
			a._dir != null && (h.sizer.className += " " + (a._dir == "hor" ? "dhxCursorNResize" : "dhxCursorWResize"))
		};
		this.listViews = function () {
			var a = [],
			c;
			for (c in this.tplData)
				a[a.length] = c;
			return a
		};
		this._init = function () {
			this.obj = document.createElement("DIV");
			this.obj.className = "dhtmlxLayoutObject";
			this.base.appendChild(this.obj);
			this.obj.appendChild(this.tpl);
			this.w = this.obj.offsetWidth;
			this.h = this.obj.offsetHeight;
			this._xmlLoader.loadXMLString(this.tplData[this._layoutView] != null ? this.tplData[this._layoutView] : this.tplData["3E"]);
			this._initWindows()
		};
		this._autoHor = [];
		this._autoVer = [];
		this._dimension = [320, 200];
		this._colsRatio = this._rowsRatio = 100;
		this._xmlParser = function () {
			for (var a = [], c = [], g = {}, d = this.getXMLTopNode("layout"), b = 0; b < d.childNodes.length; b++) {
				if (d.childNodes[b].tagName == "row") {
					var e =
						d.childNodes[b],
					j = document.createElement("TR");
					h.tpl.childNodes[0].appendChild(j);
					for (var m = 0; m < e.childNodes.length; m++)
						if (e.childNodes[m].tagName == "cell") {
							var i = e.childNodes[m],
							f = document.createElement("TD");
							f._dir = "null";
							if (i.getAttribute("obj") != null) {
								for (var k = i.getAttribute("obj"), r = String(i.getAttribute("wh")).split(","), o = isNaN(r[0]), l = isNaN(r[0]) ? parseInt(h.polyObj[r[0]].style.width) : 0, n = 0; n < a.length; n++)
									for (var p = 0; p < a[n].length; p++)
										if (a[n][p] == k) {
											if (!o) {
												for (var o = !0, F = h.base.offsetWidth -
														g[k][0] * h.skinParams[h.skin].ver_sep_width, w = 0; w < a[n].length; w++)
													isNaN(a[n][w]) || (F -= a[n][w], r[0] -= 1);
												l = Math.ceil(F / r[0])
												//console.log("计算"+l);
											}
											a[n][p] = l
										}
								//console.log("总数"+l);
								f.style.width = l + "px";
								for (var o = isNaN(r[1]), t = isNaN(r[1]) ? parseInt(h.polyObj[r[1]].style.height) : 0, n = 0; n < c.length; n++)
									for (p = 0; p < c[n].length; p++)
										if (c[n][p] == k) {
											if (!o) {
												for (var o = !0, v = h.base.offsetHeight - g[k][1] * h.skinParams[h.skin].hor_sep_height, w = 0; w < c.length; w++)
													isNaN(c[w][p]) || (v -= c[w][p], r[1] -= 1);
												t = Math.ceil(v / r[1])
												//console.log("计算"+t);
											}
											c[n][p] = t
										}
								//console.log("总数"+l);
								f.style.height = t + "px";
								f.className = "dhtmlxLayoutSinglePoly";
								f.innerHTML = "";
								f._minW = i.getAttribute("minWidth") != null ? Number(i.getAttribute("minWidth")) : h._minWidth;
								f._minH = i.getAttribute("minHeight") != null ? Number(i.getAttribute("minHeight")) : h._minHeight;
								f._initCPanel = i.getAttribute("cpanel") != null ? i.getAttribute("cpanel") == "false" ? !1 : !0 : !0;
								f._resize = i.getAttribute("resize");
								for (var A = String(i.getAttribute("neighbors")).split(";"), q = 0; q < A.length; q++) {
									var u = String(A[q]).split(",");
									u.length > 1 && (A[q] = u)
								}
								f._rowData = A;
								h.polyObj[k] = f
							}
							if (i.getAttribute("sep") != null) {
								var G =
									i.getAttribute("sep");
								if (G == "hor") {
									f.className = "dhtmlxLayoutPolySplitterHor";
									f._dir = "hor";
									for (var B = i.getAttribute("top").split(";"), q = 0; q < B.length; q++)
										u = String(B[q]).split(","), u.length > 1 && (B[q] = u);
									f._top = B;
									for (var C = i.getAttribute("bottom").split(";"), q = 0; q < C.length; q++)
										u = String(C[q]).split(","), u.length > 1 && (C[q] = u);
									f._bottom = C;
									h.sepHor[h.sepHor.length] = f
								} else {
									f.className = "dhtmlxLayoutPolySplitterVer";
									f._dir = "ver";
									for (var D = i.getAttribute("left").split(";"), q = 0; q < D.length; q++)
										u = String(D[q]).split(","),
										u.length > 1 && (D[q] = u);
									f._left = D;
									for (var E = i.getAttribute("right").split(";"), q = 0; q < E.length; q++)
										u = String(E[q]).split(","), u.length > 1 && (E[q] = u);
									f._right = E;
									h.sepVer[h.sepVer.length] = f
								}
								f._dblClick = i.getAttribute("dblclick");
								f._isSep = !0;
								f.innerHTML = '<div style="height:2px;overflow:hidden;">&nbsp;</div>'
							}
							if (i.getAttribute("colspan") != null)
								f.colSpan = i.getAttribute("colspan");
							if (i.getAttribute("rowspan") != null)
								f.rowSpan = i.getAttribute("rowspan");
							j.appendChild(f)
						}
				}
				if (d.childNodes[b].tagName == "autosize")
					h._autoHor =
						d.childNodes[b].getAttribute("hor").split(";"), h._autoVer = d.childNodes[b].getAttribute("ver").split(";"), h._totalCols = d.childNodes[b].getAttribute("cols"), h._totalRows = d.childNodes[b].getAttribute("rows"), h._dimension[0] = h._totalCols * h._colsRatio, h._dimension[1] = h._totalRows * h._rowsRatio;
				if (d.childNodes[b].tagName == "table") {
					for (var H = d.childNodes[b].getAttribute("data"), w = String(H).split(";"), n = 0; n < w.length; n++) {
						a[n] = [];
						c[n] = [];
						for (var y = String(w[n]).split(","), p = 0; p < y.length; p++)
							a[n][p] = y[p], c[n][p] =
								y[p], g[y[p]] == null && (g[y[p]] = [0, 0])
					}
					for (var z in g) {
						o = !1;
						for (n = 0; n < a.length; n++)
							for (p = 0; p < a[n].length; p++)
								if (a[n][p] == z && !o) {
									for (var o = !0, x = 0; x < a[n].length; x++)
										a[n][x] != z && g[z][0]++;
									for (x = 0; x < a.length; x++)
										a[x][p] != z && g[z][1]++
								}
					}
				}
			}
			c = a = null;
			h._buildSurface();
			this.destructor()
		};
		this._xmlLoader = new dtmlXMLLoaderObject(this._xmlParser, window);
		this.listAutoSizes = function () {
			var a = this._availAutoSize[this._layoutView + "_hor"],
			c = this._availAutoSize[this._layoutView + "_ver"],
			g = this._autoHor.join(";"),
			d = this._autoVer.join(";");
			return [g, d, a, c]
		};
		this.setAutoSize = function (a, c) {
			if (a != null) {
				for (var g = !1, d = this._availAutoSize[this._layoutView + "_hor"], b = 0; b < d.length; b++)
					g = g || d[b] == a;
				if (g == !0)
					this._autoHor = a.split(";")
			}
			if (c != null) {
				g = !1;
				d = this._availAutoSize[this._layoutView + "_ver"];
				for (b = 0; b < d.length; b++)
					g = g || d[b] == c;
				if (g == !0)
					this._autoVer = c.split(";")
			}
		};
		this._buildSurface = function () {
			for (var a = 0; a < this.tpl.childNodes[0].childNodes.length; a++)
				for (var c = this.tpl.childNodes[0].childNodes[a], g = 0; g < c.childNodes.length; g++) {
					var d = c.childNodes[g],
					b = this;
					if (!d._isSep)
						d._isCell = !0, d.skin = this.skin, d.getId = function () {
							return this._idd
						},
					d.getIndex = function () {
						return this._ind
					},
					d.showHeader = function () {
						b.showPanel(this._idd)
					},
					d.hideHeader = function () {
						b.hidePanel(this._idd)
					},
					d.isHeaderVisible = function () {
						return b.isPanelVisible(this._idd)
					},
					d.setText = function (a) {
						b.setText(this._idd, a)
					},
					d.getText = function () {
						return b.getText(this._idd)
					},
					d.expand = function () {
						b._isCollapsed(this._idd) && b._expand(this._idd, "hide")
					},
					d.collapse = function () {
						b._isCollapsed(this._idd) ||
						b._collapse(this._idd, "hide")
					},
					d.isCollapsed = function () {
						return b._isCollapsed(this._idd)
					},
					d.dock = function () {
						b._isCollapsed(this._idd) && (b._expand(this._idd, "dock"), b.dockWindow(this._idd))
					},
					d.undock = function () {
						b._isCollapsed(this._idd) || (b.unDockWindow(this._idd), b._collapse(this._idd, "dock"))
					},
					d.setWidth = function (a) {
						if (Number(a)) {
							var c = this._isBlockedWidth || !1;
							this._isBlockedWidth = !1;
							b._setWidth(this._idd, a);
							this._isBlockedWidth = c
						}
					},
					d.getWidth = function () {
						return parseInt(this.style.width)
					},
					d.setHeight =
					function (a) {
						if (Number(a)) {
							var c = this._isBlockedHeight || !1;
							this._isBlockedHeight = !1;
							b._setHeight(this._idd, a);
							this._isBlockedHeight = c
						}
					},
					d.getHeight = function () {
						return parseInt(this.style.height)
					},
					d.fixSize = function (a, c) {
						b._fixSize(this._idd, a, c)
					},
					d.progressOn = function () {
						b._progressControl(this._idd, !0)
					},
					d.progressOff = function () {
						b._progressControl(this._idd, !1)
					},
					d._doOnAttachMenu = function () {
						this.adjustContent(this.childNodes[0], this._noHeader ? 0 : b.skinParams[b.skin].cpanel_height);
						this.updateNestedObjects()
					},
					d._doOnAttachToolbar = function () {
						this.adjustContent(this.childNodes[0], this._noHeader ? 0 : b.skinParams[b.skin].cpanel_height);
						this.updateNestedObjects()
					},
					d._doOnAttachStatusBar = function () {
						this.adjustContent(this.childNodes[0], this._noHeader ? 0 : b.skinParams[b.skin].cpanel_height);
						this.updateNestedObjects()
					},
					d._doOnFrameContentLoaded = function () {
						b.callEvent("onContentLoaded", [this._idd])
					},
					d._doOnResize = function () {
						this.adjustContent(this.childNodes[0], this._noHeader ? 0 : b.skinParams[b.skin].cpanel_height);
						this.updateNestedObjects()
					},
					d._redraw = function () {},
					d.showArrow = function () {
						this.childNodes[0].childNodes[0].childNodes[4].style.display = ""
					},
					d.hideArrow = function () {
						this.childNodes[0].childNodes[0].childNodes[4].style.display = "none"
					},
					d.isArrowVisible = function () {
						return this.childNodes[0].childNodes[0].childNodes[4].style.display != "none"
					};
					if (d._dir == "ver")
						d.onselectstart = function (a) {
							a = a || event;
							a.returnValue = !1
						},
					_isIE && (d.ondblclick = function () {
						b._doOnDoubleClick(this)
					}),
					d[this._isIPad ? "ontouchstart" : "onmousedown"] =
					function (a) {
						a = a || event;
						if (!_isIE)
							if (this._lastClick) {
								var c = this._lastClick;
								this._lastClick = (new Date).getTime();
								if (c + b._dblClickTM >= this._lastClick && b._doOnDoubleClick(this) === !0)
									return
							} else
								this._lastClick = (new Date).getTime();
						var d = b._findDockCellsVer(this);
						b._resAreaData = [];
						if (d[0] != null && d[1] != null) {
							String(document.body.className).search("dhxCursorWResize") == -1 && (document.body.className += " dhxCursorWResize");
							b._resObj = this;
							b._anyExpL = d[0];
							b._anyExpR = d[1];
							b._collectResAreaData(d);
							b._resX = b._isIPad ?
								a.touches[0].clientX : a.clientX;
							if (b._effects.resize == !1) {
								b._attachSizer(this);
								b.sizer._leftXStart = parseInt(b.sizer.style.left);
								var e = b.polyObj[b._anyExpL[0]];
								b._resXMaxWidthLeft = parseInt(e.style.width) - b._minWidth;
								var g = b.polyObj[b._anyExpR[0]];
								b._resXMaxWidthRight = parseInt(g.style.width) - b._minWidth;
								if (b._alterSizes.length > 0)
									for (var i = 0; i < b._alterSizes.length; i++) {
										for (var j = 0; j < b._anyExpL.length; j++)
											if (b._alterSizes[i][0] == b._anyExpL[j]) {
												var m = b._resXMaxWidthLeft = parseInt(e.style.width) - b._alterSizes[i][1];
												if (m < b._resXMaxWidthLeft)
													b._resXMaxWidthLeft = m
											}
										for (j = 0; j < b._anyExpR.length; j++)
											if (b._alterSizes[i][0] == b._anyExpR[j] && (m = parseInt(g.style.width) - b._alterSizes[i][1], m < b._resXMaxWidthRight))
												b._resXMaxWidthRight = m
									}
								b._resXStart = b._resX
							}
							b._resFunc = b._resizeVer;
							b._isIPad && a.preventDefault()
						}
					},
					d.onmouseup = function () {
						if (b._effects.resize == !0)
							b._resizeStop(), b._anyExpL = null, b._anyExpR = null
					};
					if (d._dir == "hor")
						d.onselectstart = function (a) {
							a = a || event;
							a.returnValue = !1
						},
					d[this._isIPad ? "ontouchstart" : "onmousedown"] =
					function (a) {
						a = a || event;
						if (this._lastClick) {
							var c = this._lastClick;
							this._lastClick = (new Date).getTime();
							if (c + b._dblClickTM >= this._lastClick && b._doOnDoubleClick(this) === !0)
								return
						} else
							this._lastClick = (new Date).getTime();
						var d = b._findDockCellsHor(this);
						b._resAreaData = [];
						if (d[0] != null && d[1] != null) {
							String(document.body.className).search("dhxCursorNResize") == -1 && (document.body.className += " dhxCursorNResize");
							b._resObj = this;
							b._anyExpT = d[0];
							b._anyExpB = d[1];
							b._collectResAreaData(d);
							b._resY = b._isIPad ? a.touches[0].clientY :
								a.clientY;
							if (b._effects.resize == !1) {
								b._attachSizer(this);
								b.sizer._topYStart = parseInt(b.sizer.style.top);
								var e = b.polyObj[b._anyExpT[0]];
								b._resYMaxHeightTop = parseInt(e.style.height) - b._minHeight;
								var g = b.polyObj[b._anyExpB[0]];
								b._resYMaxHeightBottom = parseInt(g.style.height) - b._minHeight;
								if (b._alterSizes.length > 0)
									for (var i = 0; i < b._alterSizes.length; i++) {
										for (var j = 0; j < b._anyExpT.length; j++)
											if (b._alterSizes[i][0] == b._anyExpT[j]) {
												var m = parseInt(e.style.height) - b._alterSizes[i][2] - (e.childNodes[0].style.display !=
														"none" ? b.skinParams[b.skin].cpanel_height : 0);
												if (m < b._resYMaxHeightTop)
													b._resYMaxHeightTop = m
											}
										for (j = 0; j < b._anyExpB.length; j++)
											if (b._alterSizes[i][0] == b._anyExpB[j] && (m = parseInt(g.style.height) - b._alterSizes[i][2] - (g.childNodes[0].style.display != "none" ? b.skinParams[b.skin].cpanel_height : 0), m < b._resYMaxHeightBottom))
												b._resYMaxHeightBottom = m
									}
								b._resYStart = b._resY
							}
							b._resFunc = b._resizeHor;
							b._isIPad && a.preventDefault()
						}
					},
					d.onmouseup = function () {
						if (b._effects.resize == !0)
							b._resizeStop(), b._anyExpT = null, b._anyExpB =
								null
					}
				}
			for (var e in this.polyObj) {
				this.polyObj[e]._collapsed = !1;
				this.polyObj[e]._idd = e;
				this.polyObj[e]._ind = this.items.length;
				this.items[this.items.length] = this.polyObj[e];
				var j = document.createElement("DIV");
				j.style.position = "relative";
				j.style.left = "0px";
				j.style.top = "0px";
				j.style.width = this.polyObj[e].style.width;
				j.style.height = this.polyObj[e].style.height;
				j.style.overflow = "hidden";
				this.polyObj[e].appendChild(j);
				var m = document.createElement("DIV");
				m._dockCell = e;
				m._resize = this.polyObj[e]._resize;
				m.className =
					"dhtmlxPolyInfoBar";
				m.innerHTML = "<div class='dhtmlxInfoBarLabel'>" + e + "</div><div class='dhtmlxInfoBarButtonsFake'><div class='dhtmlxInfoBarButtonsFake2'></div></div><div class='dhtmlxInfoButtonDock' title='" + this.i18n.dock + "'></div><div class='dhtmlxInfoButtonUnDock' style='display: none;' title='" + this.i18n.undock + "'></div><div class='dhtmlxInfoButtonShowHide_" + m._resize + "' title='" + this.i18n.collapse + "'></div><div class='dhtmlxLineL'></div><div class='dhtmlxLineR'></div>";
				this.polyObj[e]._initCPanel ==
				!0 ? (m._h = this._CPanelHeight, m.style.display = "") : (m._h = 0, m.style.display = "none");
				this.polyObj[e].childNodes[0].appendChild(m);
				m.ondblclick = function () {
					b.callEvent("onDblClick", [this._dockCell])
				};
				m.childNodes[4].onclick = function () {
					var a = this.parentNode._dockCell;
					b._isCollapsed(a) ? b._expand(a, "hide") : b._collapse(a, "hide")
				};
				for (a = 0; a < m.childNodes.length; a++)
					m.childNodes[a].onselectstart = function (a) {
						a = a || event;
						a.returnValue = !1
					};
				var i = document.createElement("DIV");
				i.className = "dhxcont_global_content_area";
				this.polyObj[e].childNodes[0].appendChild(i);
				var h = new dhtmlXContainer(this.polyObj[e]);
				h.setContent(i);
				this.skin == "dhx_web" && this.polyObj[e]._setPadding(this.skinParams[this.skin].cell_pading_max, "dhxcont_layout_dhx_web");
				if (this.skin == "dhx_terrace")
					this.polyObj[e]._setPadding(this.skinParams[this.skin].cell_pading_max, "dhxcont_layout_dhx_terrace"), this.polyObj[e].childNodes[0].style.borderRadius = "3px", this.polyObj[e].childNodes[0].childNodes[1].style.borderBottomLeftRadius = this.polyObj[e].childNodes[0].childNodes[1].style.borderBottomRightRadius =
						"3px";
				this.polyObj[e].adjustContent(this.polyObj[e].childNodes[0], this.skinParams[this.skin].cpanel_height)
			}
			this._fixIcons()
		};
		this._anyExpB = this._anyExpT = this._anyExpR = this._anyExpL = this._resFunc = this._resObj = this._resY = this._resX = null;
		this._expand = function (a, c) {
			this._doExpand(this.polyObj[a]._resize, a, this.polyObj[a]._rowData, c)
		};
		this._collapse = function (a, c) {
			if (!this._isCollapsed(a))
				this.polyObj[a]._savedW = parseInt(this.polyObj[a].style.width), this.polyObj[a]._savedH = parseInt(this.polyObj[a].style.height),
				this._doCollapse(this.polyObj[a]._resize, a, this.polyObj[a]._rowData, c)
		};
		this._isCollapsed = function (a) {
			return this.polyObj[a]._collapsed
		};
		this._checkAlterMinSize = function (a) {
			this._alterSizes = [];
			for (var c = 0; c < a.length; c++)
				for (var g = 0; g < a[c].length; g++)
					if (this.polyObj[a[c][g]].vs[this.polyObj[a[c][g]].av].layout != null) {
						var d = this.polyObj[a[c][g]].vs[this.polyObj[a[c][g]].av].layout._defineWindowMinDimension(this.polyObj[a[c][g]], !0);
						d[0] = a[c][g];
						this._alterSizes[this._alterSizes.length] = d
					}
		};
		this._findDockCellsVer =
		function (a) {
			var c = [null, null];
			if (a == null)
				return c;
			for (var g = null, d = a._left.length - 1; d >= 0; d--)
				if (g == null)
					if (typeof a._left[d] == "object") {
						for (var b = !1, e = 0; e < a._left[d].length; e++)
							b = b || this.polyObj[a._left[d][e]]._isBlockedWidth || !1;
						b || (g = a._left[d])
					} else
						this.polyObj[a._left[d]]._collapsed == !1 && (this.polyObj[a._left[d]]._isBlockedWidth || (g = a._left[d]));
			for (var j = null, d = 0; d < a._right.length; d++)
				if (j == null)
					if (typeof a._right[d] == "object") {
						b = !1;
						for (e = 0; e < a._right[d].length; e++)
							b = b || this.polyObj[a._right[d][e]]._isBlockedWidth ||
								!1;
						b || (j = a._right[d])
					} else
						this.polyObj[a._right[d]]._collapsed == !1 && (this.polyObj[a._right[d]]._isBlockedWidth || (j = a._right[d]));
			if (g == null || j == null)
				return c;
			typeof g == "string" && (g = Array(g));
			typeof j == "string" && (j = Array(j));
			c[0] = g;
			c[1] = j;
			this._checkAlterMinSize(c);
			this._minWRAlter = this._minWLAlter = 0;
			if (this._alterSizes.length > 0 && this._effects.resize == !0) {
				for (var m = [], i = [], d = 0; d < g.length; d++)
					m[d] = this.polyObj[g[d]];
				for (d = 0; d < j.length; d++)
					i[d] = this.polyObj[j[d]];
				for (d = 0; d < m.length; d++)
					for (e = 0; e < this._alterSizes.length; e++)
						if (this._alterSizes[e][0] ==
							m[d]._idd && this._minWLAlter < this._alterSizes[e][1])
							this._minWLAlter = this._alterSizes[e][1];
				for (d = 0; d < i.length; d++)
					for (e = 0; e < this._alterSizes.length; e++)
						if (this._alterSizes[e][0] == i[d]._idd && this._maxWRAlter < this._alterSizes[e][1])
							this._minWRAlter = this._alterSizes[e][1]
			}
			return c
		};
		this._findDockCellsHor = function (a) {
			var c = [null, null];
			if (a == null)
				return c;
			for (var g = null, d = a._top.length - 1; d >= 0; d--)
				if (g == null)
					if (typeof a._top[d] == "object") {
						for (var b = !1, e = 0; e < a._top[d].length; e++)
							b = b || this.polyObj[a._top[d][e]]._isBlockedHeight ||
								!1;
						b || (g = a._top[d])
					} else
						this.polyObj[a._top[d]]._collapsed == !1 && (this.polyObj[a._top[d]]._isBlockedHeight || (g = a._top[d]));
			for (var j = null, d = 0; d < a._bottom.length; d++)
				if (j == null)
					if (typeof a._bottom[d] == "object") {
						b = !1;
						for (e = 0; e < a._bottom[d].length; e++)
							b = b || this.polyObj[a._bottom[d][e]]._isBlockedHeight || !1;
						b || (j = a._bottom[d])
					} else
						this.polyObj[a._bottom[d]]._collapsed == !1 && (this.polyObj[a._bottom[d]]._isBlockedHeight || (j = a._bottom[d]));
			if (g == null || j == null)
				return c;
			typeof g == "string" && (g = Array(g));
			typeof j ==
			"string" && (j = Array(j));
			c[0] = g;
			c[1] = j;
			this._checkAlterMinSize(c);
			this._minHBAlter = this._minHTAlter = 0;
			if (this._alterSizes.length > 0 && this._effects.resize == !0) {
				for (var m = [], i = [], d = 0; d < g.length; d++)
					m[d] = this.polyObj[g[d]];
				for (d = 0; d < j.length; d++)
					i[d] = this.polyObj[j[d]];
				for (d = 0; d < m.length; d++)
					for (e = 0; e < this._alterSizes.length; e++)
						if (this._alterSizes[e][0] == m[d]._idd && this._minHTAlter < this._alterSizes[e][2])
							this._minHTAlter = this._alterSizes[e][2];
				for (d = 0; d < i.length; d++)
					for (e = 0; e < this._alterSizes.length; e++)
						if (this._alterSizes[e][0] ==
							i[d]._idd && this._minHBAlter < this._alterSizes[e][2])
							this._minHBAlter = this._alterSizes[e][2]
			}
			return c
		};
		this._resizeVer = function (a) {
			this._isIPad && a.preventDefault();
			if (!(this._resObj == null || this._anyExpL == null || this._anyExpR == null)) {
				this._showCovers();
				var c = this._isIPad ? a.touches[0].clientX : a.clientX;
				if (this._effects.resize == !1) {
					this._resX = c;
					var g = c - this._resXStart;
					if (-g > this._resXMaxWidthLeft && g < 0)
						g = -this._resXMaxWidthLeft, this._resX = g + this._resXStart;
					if (g > this._resXMaxWidthRight && g > 0)
						g = this._resXMaxWidthRight,
						this._resX = g + this._resXStart;
					this.sizer.style.left = this.sizer._leftXStart + g + "px"
				} else {
					for (var d = this._anyExpL, b = this._anyExpR, e = c, g = c - h._resX, j = [], m = [], i = 0; i < d.length; i++)
						j[i] = this.polyObj[d[i]];
					for (i = 0; i < b.length; i++)
						m[i] = this.polyObj[b[i]];
					var f = parseInt(j[0].style.width),
					k = parseInt(m[0].style.width);
					if (g < 0) {
						var l = f + g;
						if (l > j[0]._minW && l > this._minWLAlter) {
							for (var o = k + f - l, i = 0; i < j.length; i++)
								this._setW(j[i], l);
							for (i = 0; i < m.length; i++)
								this._setW(m[i], o);
							this._resX = e
						}
					} else if (g > 0 && (o = k - g, o > m[0]._minW &&
							o > this._minWRAlter)) {
						l = f + k - o;
						for (i = 0; i < j.length; i++)
							this._setW(j[i], l);
						for (i = 0; i < m.length; i++)
							this._setW(m[i], o);
						this._resX = e
					}
				}
			}
		};
		this._resizeHor = function (a) {
			if (!(this._resObj == null || this._anyExpT == null || this._anyExpB == null)) {
				this._showCovers();
				var c = this._isIPad ? a.touches[0].clientY : a.clientY;
				if (this._effects.resize == !1) {
					this._resY = c;
					var g = c - this._resYStart;
					if (-g > this._resYMaxHeightTop && g < 0)
						g = -this._resYMaxHeightTop, this._resY = g + this._resYStart;
					if (g > this._resYMaxHeightBottom && g > 0)
						g = this._resYMaxHeightBottom,
						this._resY = g + this._resYStart;
					this.sizer.style.top = this.sizer._topYStart + g + "px"
				} else {
					for (var d = this._anyExpT, b = this._anyExpB, e = c, g = c - h._resY, j = [], m = [], i = 0; i < d.length; i++)
						j[i] = this.polyObj[d[i]];
					for (i = 0; i < b.length; i++)
						m[i] = this.polyObj[b[i]];
					var f = parseInt(j[0].style.height),
					k = parseInt(m[0].style.height);
					if (g < 0) {
						var l = f + g;
						if (l > j[0]._minH + this._minHTAlter) {
							for (var o = k + f - l, i = 0; i < j.length; i++)
								this._setH(j[i], l);
							for (i = 0; i < m.length; i++)
								this._setH(m[i], o);
							this._resY = e
						}
					} else if (g > 0 && (o = k - g, o > m[0]._minH + this._minHBAlter)) {
						l =
							f + k - o;
						for (i = 0; i < j.length; i++)
							this._setH(j[i], l);
						for (i = 0; i < m.length; i++)
							this._setH(m[i], o);
						this._resY = e
					}
				}
			}
		};
		this._resizeStop = function () {
			var a = document.body.className;
			if (a.search("dhxCursorWResize") !== -1 || a.search("dhxCursorNResize") !== -1)
				document.body.className = String(document.body.className).replace(/dhxCursorWResize/g, "").replace(/dhxCursorNResize/g, "");
			if (this._resObj != null)
				if (this._effects.resize == !1) {
					this.sizer.style.display = "none";
					if (this._resObj._dir == "hor") {
						var c = typeof this._anyExpT[0] == "object" ?
							this._anyExpT[0][0] : this._anyExpT[0],
						g = this._resY - this._resYStart,
						d = parseInt(this.polyObj[c].style.height) + g;
						this._setHeight(c, d)
					} else {
						var b = typeof this._anyExpL[0] == "object" ? this._anyExpL[0][0] : this._anyExpL[0],
						e = this._resX - this._resXStart,
						j = parseInt(this.polyObj[b].style.width) + e;
						this._setWidth(b, j)
					}
					var m = {},
					i = function (a) {
						if (a != null)
							for (var b = 0; b < a.length; b++)
								typeof a[b] == "object" && i(a[b]), m[a[b]] = !0
					};
					i(this._anyExpT);
					i(this._anyExpB);
					i(this._anyExpL);
					i(this._anyExpR);
					var h = [],
					f;
					for (f in m)
						h[h.length] =
							f;
					if (typeof this._anyExpT == "object" && this._anyExpT != null)
						this.updateNestedObjectsArray(this._anyExpT), this._anyExpT = null;
					if (typeof this._anyExpB == "object" && this._anyExpB != null)
						this.updateNestedObjectsArray(this._anyExpB), this._anyExpB = null;
					if (typeof this._anyExpL == "object" && this._anyExpL != null)
						this.updateNestedObjectsArray(this._anyExpL), this._anyExpL = null;
					if (typeof this._anyExpR == "object" && this._anyExpR != null)
						this.updateNestedObjectsArray(this._anyExpR), this._anyExpR = null;
					this._resFunc = this._resObj =
						null;
					this._hideCovers();
					this._fixToolbars();
					this._fixCollapsedText();
					this.callEvent("onPanelResizeFinish", [h])
				} else {
					var k = [];
					if (this._resObj._left != null)
						for (var l = 0; l < this._resObj._left.length; l++)
							k[k.length] = this._resObj._left[l];
					if (this._resObj._right != null)
						for (l = 0; l < this._resObj._right.length; l++)
							k[k.length] = this._resObj._right[l];
					if (this._resObj._top != null)
						for (l = 0; l < this._resObj._top.length; l++)
							k[k.length] = this._resObj._top[l];
					if (this._resObj._bottom != null)
						for (l = 0; l < this._resObj._bottom.length; l++)
							k[k.length] =
								this._resObj._bottom[l];
					this._resObj = this._resFunc = null;
					this._hideCovers();
					for (var s = [], l = 0; l < k.length; l++)
						if (typeof k[l] == "object")
							for (var n = 0; n < k[l].length; n++)
								s[s.length] = this.polyObj[k[l][n]];
						else
							s[s.length] = this.polyObj[k[l]];
					for (l = 0; l < s.length; l++)
						s[l].updateNestedObjects();
					this._fixCollapsedText();
					this.callEvent("onPanelResizeFinish", [])
				}
		};
		this._showCovers = function () {
			if (!this._cv) {
				for (var a in this.polyObj)
					this._effects.highlight && this._isResizable(a) && this.polyObj[a].showCoverBlocker();
				this._fixToolbars();
				this._cv = !0
			}
		};
		this._hideCovers = function () {
			if (this._cv) {
				for (var a in this.polyObj)
					this.polyObj[a].hideCoverBlocker();
				this._fixToolbars();
				this._cv = !1
			}
		};
		this._isResizable = function (a) {
			for (var c = !1, g = 0; g < this._resAreaData.length; g++)
				c = c || this._resAreaData[g] == a;
			return c
		};
		this._collectResAreaData = function (a) {
			for (var c = 0; c < a.length; c++)
				typeof a[c] == "string" ? this._resAreaData[this._resAreaData.length] = a[c] : typeof a[c] == "object" && this._collectResAreaData(a[c])
		};
		this._doOnDoubleClick = function (a) {
			if (a._dblClick !=
				null && this.polyObj[a._dblClick] != null && !this.polyObj[a._dblClick]._noHeader) {
				var c = this.polyObj[a._dblClick];
				if (c.childNodes[0].style.display != "none")
					return c._collapsed == !0 ? this._doExpand(c._resize, a._dblClick, c._rowData, "hide") : (c._savedW = parseInt(c.style.width), c._savedH = parseInt(c.style.height), this._doCollapse(c._resize, a._dblClick, c._rowData, "hide")), !0
			}
		};
		this._doOnSelectStart = function (a) {
			a = a || event;
			if (h._resObj != null)
				a.returnValue = !1
		};
		this._doOnMouseMove = function (a) {
			a = a || event;
			h._resObj != null &&
			h._resFunc != null && h._resFunc(a)
		};
		this._doOnMouseUp = function () {
			h._resizeStop()
		};
		this._isIPad ? (document.addEventListener("touchmove", h._doOnMouseMove, !1), document.addEventListener("touchend", h._doOnMouseUp, !1)) : _isIE ? (document.body.attachEvent("onselectstart", h._doOnSelectStart), document.body.attachEvent("onmousemove", h._doOnMouseMove), document.body.attachEvent("onmouseup", h._doOnMouseUp)) : (document.body.addEventListener("mousemove", h._doOnMouseMove, !1), document.body.addEventListener("mouseup", h._doOnMouseUp,
				!1));
		this._doExpand = function (a, c, g, d) {
			if (!(g.length <= 1)) {
				for (var b = -1, e = 0; e < g.length; e++)
					g[e] == c && (b = e);
				if (b != -1) {
					for (var j = null, e = b + 1; e < g.length; e++)
						j == null && (typeof g[e] == "string" ? this.polyObj[g[e]]._collapsed == !1 && (j = g[e]) : j = g[e]);
					if (j == null)
						for (e = b - 1; e >= 0; e--)
							j == null && (typeof g[e] == "string" ? this.polyObj[g[e]]._collapsed == !1 && (j = g[e]) : j = g[e]);
					if (j != null) {
						typeof j != "object" && (j = Array(j));
						if (a == "hor") {
							for (var m = 65536, e = 0; e < j.length; e++) {
								var i = this.polyObj[j[e]].vs[this.polyObj[j[e]].av].layout !=
									null ? this.polyObj[j[e]].vs[this.polyObj[j[e]].av].layout._defineWindowMinDimension(this.polyObj[j[e]], !0) : [0, 0],
								h = parseInt(this.polyObj[j[e]].style.width) - this._minWidth - i[1];
								h < m && (m = h)
							}
							var f = this.polyObj[c]._savedW;
							f > m && (f = m);
							if (f < this._minWidth)
								return;
							var k = Math.round(f / 3)
						} else {
							m = 65536;
							for (e = 0; e < j.length; e++)
								i = this.polyObj[j[e]].vs[this.polyObj[j[e]].av].layout != null ? this.polyObj[j[e]].vs[this.polyObj[j[e]].av].layout._defineWindowMinDimension(this.polyObj[j[e]], !0) : [0, 0, 0], h = parseInt(this.polyObj[j[e]].style.height) -
									this._minHeight - i[2], h < m && (m = h);
							f = this.polyObj[c]._savedH;
							f > m && (f = m);
							if (f < this._minHeight)
								return;
							k = Math.round(f / 3)
						}
						this.polyObj[c].childNodes[0].childNodes[1].style.display = "";
						this.polyObj[c].childNodes[0].childNodes[0].className = "dhtmlxPolyInfoBar";
						this.polyObj[c].childNodes[0].childNodes[0].childNodes[1].style.display = "";
						this.polyObj[c].childNodes[0].childNodes[0].childNodes[2].style.display = "";
						this.polyObj[c].childNodes[0].childNodes[0].childNodes[4].style.display = "";
						for (var l = [], e = 0; e < j.length; e++)
							l[e] =
								this.polyObj[j[e]];
						if (this.polyObj[c].className == "dhtmlxLayoutSinglePolyTabbarCollapsed")
							this.polyObj[c].className = "dhtmlxLayoutSinglePolyTabbar";
						this._expandEffect(this.polyObj[c], l, f, d, this._effects.collapse == !0 ? k : 1E6, a)
					}
				}
			}
		};
		this._doCollapse = function (a, c, g, d) {
			if (!(g.length <= 1)) {
				for (var b = -1, e = 0; e < g.length; e++)
					g[e] == c && (b = e);
				if (b != -1) {
					for (var j = null, e = b + 1; e < g.length; e++)
						j == null && (typeof g[e] == "string" ? this.polyObj[g[e]]._collapsed == !1 && (j = g[e]) : j = g[e]);
					if (j == null)
						for (e = b - 1; e >= 0; e--)
							j == null && (typeof g[e] ==
								"string" ? this.polyObj[g[e]]._collapsed == !1 && (j = g[e]) : j = g[e]);
					j == null && g[b + 1] != null && (j = g[b + 1]);
					j == null && b - 1 >= 0 && g[b - 1] != null && (j = g[b - 1]);
					if (j != null) {
						if (typeof j != "object") {
							if (this.polyObj[j]._collapsed == !0) {
								this.polyObj[j].childNodes[0].childNodes[1].style.display = "";
								this.polyObj[j]._collapsed = !1;
								this.polyObj[j].childNodes[0].childNodes[0].className = "dhtmlxPolyInfoBar";
								this.polyObj[j].childNodes[0].childNodes[0].childNodes[1].style.display = "";
								this.polyObj[j].childNodes[0].childNodes[0].childNodes[4].title =
									this.i18n.collapse;
								this.polyObj[j].childNodes[0].childNodes[0].childNodes[2].style.display = "";
								this.polyObj[j].childNodes[0].childNodes[0].childNodes[3].style.display = "none";
								this.polyObj[j].childNodes[0].childNodes[0].childNodes[4].style.display = "";
								this.polyObj[j]._isUnDocked === !0 && this.dockWindow(j);
								if (this.polyObj[j].className == "dhtmlxLayoutSinglePolyTabbarCollapsed")
									this.polyObj[j].className = "dhtmlxLayoutSinglePolyTabbar";
								this._fixSplitters();
								this._fixIcons();
								this.polyObj[j].removeAttribute("title");
								this._fixToolbars();
								this._fixCollapsedText();
								this.callEvent("onExpand", [j])
							}
							j = Array(j)
						}
						for (var m = [], e = 0; e < j.length; e++)
							m[e] = this.polyObj[j[e]];
						var i = a == "hor" ? Math.round(Math.max(this.polyObj[c].offsetWidth, this.polyObj[j[0]].offsetWidth) / 3) : Math.round(Math.max(this.polyObj[c].offsetHeight, this.polyObj[j[0]].offsetHeight) / 3);
						this.polyObj[c].childNodes[0].childNodes[1].style.display = "none";
						this._collapseEffect(this.polyObj[c], m, d, this._effects.collapse == !0 ? i : 1E6, a)
					}
				}
			}
		};
		this.setEffect = function (a, c) {
			this._effects[a] !=
			null && typeof c == "boolean" && (this._effects[a] = c)
		};
		this.getEffect = function (a) {
			return this._effects[a] != null ? this._effects[a] : null
		};
		this._expandEffect = function (a, c, g, d, b, e) {
			if (e == "hor")
				var j = parseInt(a.style.width), m = parseInt(c[0].style.width);
			else
				j = parseInt(a.style.height), m = parseInt(c[0].style.height);
			var i = j + b;
			i > g && (i = g);
			e == "hor" ? (a.style.width = i + "px", a.childNodes[0].style.width = a.style.width) : (a.style.height = i + "px", a.childNodes[0].style.height = a.style.height);
			a.adjustContent(a.childNodes[0], a._noHeader ?
				0 : this.skinParams[this.skin].cpanel_height);
			for (var f = 0; f < c.length; f++)
				e == "hor" ? (c[f].style.width = m + j - i + "px", c[f].childNodes[0].style.width = c[f].style.width) : (c[f].style.height = m + j - i + "px", c[f].childNodes[0].style.height = c[f].style.height), c[f].adjustContent(c[f].childNodes[0], c[f]._noHeader ? 0 : this.skinParams[this.skin].cpanel_height);
			if (i != g)
				window.setTimeout(function () {
					h._expandEffect(a, c, g, d, b, e)
				}, 4);
			else {
				a._collapsed = !1;
				for (f = 0; f < c.length; f++)
					c[f].updateNestedObjects();
				this.polyObj[a._idd].updateNestedObjects();
				this.polyObj[a._idd].childNodes[0].childNodes[0].childNodes[4].title = this.i18n.collapse;
				this._fixSplitters();
				this._fixIcons();
				a.removeAttribute("title");
				this._fixToolbars();
				this._fixCollapsedText();
				this.callEvent("onExpand", [a._idd])
			}
		};
		this._collapseEffect = function (a, c, g, d, b) {
			if (b == "hor")
				var e = parseInt(a.style.width), j = parseInt(c[0].style.width);
			else
				e = parseInt(a.style.height), j = parseInt(c[0].style.height);
			var f = e - d;
			if (b == "hor") {
				if (f < this._collapsedW)
					f = this._collapsedW;
				a.style.width = f + "px";
				a.childNodes[0].style.width =
					a.style.width
			} else {
				if (f < this._collapsedH)
					f = this._collapsedH;
				a.style.height = f + "px";
				a.childNodes[0].style.height = a.style.height
			}
			for (var i = 0; i < c.length; i++)
				b == "hor" ? (c[i].style.width = j + (e - f) + "px", c[i].childNodes[0].style.width = c[i].style.width) : (c[i].style.height = j + (e - f) + "px", c[i].childNodes[0].style.height = c[i].style.height), c[i].adjustContent(c[i].childNodes[0], c[i]._noHeader ? 0 : this.skinParams[this.skin].cpanel_height);
			if (f > this._collapsedW && b == "hor" || f > this._collapsedH && b == "ver")
				window.setTimeout(function () {
					h._collapseEffect(a,
						c, g, d, b)
				}, 4);
			else {
				for (i = 0; i < c.length; i++)
					b == "hor" ? (c[i].style.width = j + (e - f) + "px", c[i].childNodes[0].style.width = c[i].style.width) : (c[i].style.height = j + (e - f) + "px", c[i].childNodes[0].style.height = c[i].style.height), c[i].adjustContent(c[i].childNodes[0], c[i]._noHeader ? 0 : this.skinParams[this.skin].cpanel_height);
				a._collapsed = !0;
				a.childNodes[0].childNodes[0].className = b == "hor" ? "dhtmlxPolyInfoBarCollapsedVer" : "dhtmlxPolyInfoBarCollapsedHor";
				for (i = 0; i < c.length; i++)
					c[i].updateNestedObjects();
				g == "hide" ? (a.childNodes[0].childNodes[0].childNodes[1].style.display =
						"", a.childNodes[0].childNodes[0].childNodes[2].style.display = "none", a.childNodes[0].childNodes[0].childNodes[3].style.display = "none", a.childNodes[0].childNodes[0].childNodes[4].style.display = "") : (a.childNodes[0].childNodes[0].childNodes[1].style.display = "", a.childNodes[0].childNodes[0].childNodes[2].style.display = "", a.childNodes[0].childNodes[0].childNodes[3].style.display = "none", a.childNodes[0].childNodes[0].childNodes[4].style.display = "none");
				if (a.className == "dhtmlxLayoutSinglePolyTabbar")
					a.className =
						"dhtmlxLayoutSinglePolyTabbarCollapsed";
				this.polyObj[a._idd].childNodes[0].childNodes[0].childNodes[4].title = this.i18n.expand;
				this._fixSplitters();
				this._fixIcons();
				a.title = this.getTextTooltip(a._idd);
				this._fixToolbars();
				this._fixCollapsedText();
				this.callEvent("onCollapse", [a._idd])
			}
		};
		this._setW = function (a, c) {
			a.style.width = c + "px";
			a.childNodes[0].style.width = a.style.width;
			a.adjustContent(a.childNodes[0], a._noHeader ? 0 : this.skinParams[this.skin].cpanel_height)
		};
		this._setH = function (a, c) {
			a.style.height =
				c + "px";
			a.childNodes[0].style.height = a.style.height;
			a.adjustContent(a.childNodes[0], a._noHeader ? 0 : this.skinParams[this.skin].cpanel_height)
		};
		this._setWidth = function (a, c) {
			if (this.polyObj[a] != null && Number(c)) {
				for (var g = null, d = 0; d < this.sepVer.length; d++) {
					var b = this.sepVer[d]._left;
					if (b[b.length - 1] == a)
						g = [this.sepVer[d], "left"];
					else if (typeof b[b.length - 1] == "object")
						for (var e = b[b.length - 1], j = 0; j < e.length; j++)
							e[j] == a && (g = [this.sepVer[d], "left"]);
					b = this.sepVer[d]._right;
					if (b[0] == a)
						g = [this.sepVer[d], "right"];
					else if (typeof b[0] == "object") {
						e = b[0];
						for (j = 0; j < e.length; j++)
							e[j] == a && (g = [this.sepVer[d], "right"])
					}
				}
				if (g != null) {
					var f = this._findDockCellsVer(g[0]),
					i = f[0],
					h = f[1];
					if (!(i == null || h == null)) {
						var k = parseInt(this.polyObj[i[0]].style.width) + parseInt(this.polyObj[h[0]].style.width);
						c < this._minWidth ? c = this._minWidth : c > k - this._minWidth && (c = k - this._minWidth);
						for (var l = k - c, d = 0; d < i.length; d++)
							this._setW(this.polyObj[i[d]], g[1] == "left" ? c : l), this.polyObj[i[d]].updateNestedObjects();
						for (d = 0; d < h.length; d++)
							this._setW(this.polyObj[h[d]],
								g[1] == "right" ? c : l), this.polyObj[h[d]].updateNestedObjects()
					}
				}
			}
		};
		this._setHeight = function (a, c) {
			if (this.polyObj[a] != null && Number(c)) {
				for (var g = null, d = 0; d < this.sepHor.length; d++) {
					var b = this.sepHor[d]._top;
					if (b[b.length - 1] == a)
						g = [this.sepHor[d], "top"];
					else if (typeof b[b.length - 1] == "object")
						for (var e = b[b.length - 1], f = 0; f < e.length; f++)
							e[f] == a && (g = [this.sepHor[d], "top"]);
					b = this.sepHor[d]._bottom;
					if (b[0] == a)
						g = [this.sepHor[d], "bottom"];
					else if (typeof b[0] == "object") {
						e = b[0];
						for (f = 0; f < e.length; f++)
							e[f] == a && (g =
									[this.sepHor[d], "bottom"])
					}
				}
				if (g != null) {
					var h = this._findDockCellsHor(g[0]),
					i = h[0],
					k = h[1];
					if (!(i == null || k == null)) {
						var l = parseInt(this.polyObj[i[0]].style.height) + parseInt(this.polyObj[k[0]].style.height);
						c < this._minHeight ? c = this._minHeight : c > l - this._minHeight && (c = l - this._minHeight);
						for (var r = l - c, d = 0; d < i.length; d++)
							this._setH(this.polyObj[i[d]], g[1] == "top" ? c : r), this.polyObj[i[d]].updateNestedObjects();
						for (d = 0; d < k.length; d++)
							this._setH(this.polyObj[k[d]], g[1] == "bottom" ? c : r), this.polyObj[k[d]].updateNestedObjects()
					}
				}
			}
		};
		this.updateNestedObjectsArray = function (a) {
			for (var c = 0; c < a.length; c++)
				typeof a[c] == "object" ? this.updateNestedObjectsArray(a[c]) : this.polyObj[a[c]].updateNestedObjects()
		};
		this.dockWindow = function (a) {
			if (this.dhxWins && this.dhxWins.window(this.dhxWinsIdPrefix + a))
				this.dhxWins.window(this.dhxWinsIdPrefix + a).close(), this.dhxWins.window(this.dhxWinsIdPrefix + a).moveContentTo(this.polyObj[a]), this.polyObj[a]._isUnDocked = !1, this.callEvent("onDock", [a])
		};
		this.unDockWindow = function (a) {
			this._initWindows(a);
			this.polyObj[a].moveContentTo(this.dhxWins.window(this.dhxWinsIdPrefix +
					a));
			this.polyObj[a]._isUnDocked = !0;
			this.callEvent("onUnDock", [a])
		};
		this._initWindows = function (a) {
			if (window.dhtmlXWindows) {
				if (!this.dhxWins && (this.dhxWins = new dhtmlXWindows, this.dhxWins.setSkin(this.skin), this.dhxWins.setImagePath(this.imagePath), this.dhxWinsIdPrefix = "", !a))
					return;
				var c = this.dhxWinsIdPrefix + a;
				if (this.dhxWins.window(c))
					this.dhxWins.window(c).show();
				else {
					var g = this,
					d = this.dhxWins.createWindow(c, 20, 20, 320, 200);
					d.setText(this.polyObj[a].getText());
					d.button("close").hide();
					d.attachEvent("onClose",
						function (a) {
						a.hide()
					});
					d.button("dock").show();
					d.button("dock").attachEvent("onClick", function () {
						g.polyObj[a].dock()
					});
					d.dockedCell = this.polyObj[a]
				}
			}
		};
		this.isPanelVisible = function (a) {
			return !this.polyObj[a]._noHeader
		};
		this.showPanel = function (a) {
			if (this.polyObj[a] != null && this.polyObj[a]._collapsed != !0) {
				var c = this.polyObj[a].childNodes[0].childNodes[0];
				c.style.display = "";
				this.polyObj[a]._noHeader = !1;
				this.skin == "dhx_web" && this.polyObj[a]._setPadding(this.skinParams[this.skin].cell_pading_max, "dhxcont_layout_dhx_web");
				this.skin == "dhx_terrace" && this.polyObj[a]._setPadding(this.skinParams[this.skin].cell_pading_max, "dhxcont_layout_dhx_terrace");
				this.polyObj[a].adjustContent(this.polyObj[a].childNodes[0], this.skinParams[this.skin].cpanel_height);
				this.polyObj[a].updateNestedObjects()
			}
		};
		this.hidePanel = function (a) {
			if (this.polyObj[a] != null && this.polyObj[a]._collapsed != !0) {
				var c = this.polyObj[a].childNodes[0].childNodes[0];
				c.style.display = "none";
				this.polyObj[a]._noHeader = !0;
				this.skin == "dhx_web" && this.polyObj[a]._setPadding(this.skinParams[this.skin].cell_pading_min,
					"");
				this.skin == "dhx_terrace" && this.polyObj[a]._setPadding(this.skinParams[this.skin].cell_pading_min, "");
				this.polyObj[a].adjustContent(this.polyObj[a].childNodes[0], 0);
				this.polyObj[a].updateNestedObjects()
			}
		};
		this.setText = function (a, c) {
			this._changeCPanelText(a, c)
		};
		this.getText = function (a) {
			return this.polyObj[a].childNodes[0].childNodes[0].childNodes[0].innerHTML
		};
		this.getTextTooltip = function (a) {
			var c = this.polyObj[a].childNodes[0].childNodes[0].childNodes[0];
			return c.innerText || c.textContent
		};
		this._changeCPanelText =
		function (a, c) {
			var g = h;
			if (g.polyObj[a] != null)
				g.polyObj[a].childNodes[0].childNodes[0].childNodes[0].innerHTML = c, h.dhxWins != null && h.dhxWins.window(h.dhxWinsIdPrefix + a) != null && h.dhxWins.window(h.dhxWinsIdPrefix + a).setText(c)
		};
		this.forEachItem = function (a) {
			for (var c = 0; c < this.items.length; c++)
				a(this.items[c])
		};
		this._fixPositionInWin = function (a, c) {
			this.base.style.width = a + "px";
			this.base.style.height = c + "px"
		};
		this.attachMenu = function () {
			this.base._isWindow ? this.menu = this.base._window.attachMenu() : (this.cont.obj.skin =
						this.skin, this.menu = this.cont.obj.attachMenu(), this.cont.obj.adjustContent(this.cont.obj, 0), this.setSizes());
			return this.menu
		};
		this.detachMenu = function () {
			if (this.menu)
				this.cont.obj.detachMenu(), this.setSizes(), this.menu = null
		};
		this.showMenu = function () {
			this.menu && (this.cont.obj.showMenu(), this.setSizes())
		};
		this.hideMenu = function () {
			this.menu && (this.cont.obj.hideMenu(), this.setSizes())
		};
		this.attachToolbar = function () {
			this.base._isWindow ? this.toolbar = this.base._window.attachToolbar() : (this.cont.obj.skin =
						this.skin, this.toolbar = this.cont.obj.attachToolbar(), this.cont.obj.adjustContent(this.cont.obj, 0), this.setSizes());
			return this.toolbar
		};
		this.detachToolbar = function () {
			if (this.toolbar)
				this.cont.obj.detachToolbar(), this.setSizes(), this.toolbar = null
		};
		this.showToolbar = function () {
			this.toolbar && (this.cont.obj.showToolbar(), this.setSizes())
		};
		this.hideToolbar = function () {
			this.toolbar && (this.cont.obj.hideToolbar(), this.setSizes())
		};
		this.attachStatusBar = function () {
			this.base._isWindow ? this.statusbar = this.base._window.attachStatusBar() :
				(this.statusbar = this.cont.obj.attachStatusBar(), this.cont.obj.adjustContent(this.cont.obj, 0), this.setSizes());
			return this.statusbar
		};
		this.detachStatusBar = function () {
			if (this.statusbar)
				this.cont.obj.detachStatusBar(), this.setSizes(), this.statusbar = null
		};
		this.showStatusBar = function () {
			this.statusbar && (this.cont.obj.showStatusBar(), this.setSizes())
		};
		this.hideStatusBar = function () {
			this.statusbar && (this.cont.obj.hideStatusBar(), this.setSizes())
		};
		this.progressOn = function () {
			this._progressControlGlobal(!0)
		};
		this.progressOff = function () {
			this._progressControlGlobal(!1)
		};
		this._progressControl = function (a, c) {
			if (this.polyObj[a] != null) {
				if (this.polyObj[a]._progressCover == null) {
					var g = document.createElement("DIV");
					g.className = "dhtmlxLayoutPolyProgress";
					this.polyObj[a].childNodes[0].appendChild(g);
					var d = document.createElement("DIV");
					d.className = "dhtmlxLayoutPolyProgressBGIMG";
					this.polyObj[a].childNodes[0].appendChild(d);
					this.polyObj[a]._progressCover = [g, d]
				}
				this.polyObj[a]._progressCover[0].style.display = c == !0 ? "" :
					"none";
				this.polyObj[a]._progressCover[1].style.display = this.polyObj[a]._progressCover[0].style.display
			}
		};
		this._progressControlGlobal = function (a) {
			if (this._progressCover == null) {
				var c = document.createElement("DIV");
				c.className = "dhtmlxLayoutPolyProgressGlobal_" + this.skin;
				this.obj.appendChild(c);
				var g = document.createElement("DIV");
				g.className = "dhtmlxLayoutPolyProgressBGIMGGlobal_" + this.skin;
				this.obj.appendChild(g);
				this._progressCover = [c, g]
			}
			this._progressCover[0].style.display = a == !0 ? "" : "none";
			this._progressCover[1].style.display =
				this._progressCover[0].style.display
		};
		this._fixSize = function (a, c, g) {
			if (this.polyObj[a] != null)
				this.polyObj[a]._isBlockedWidth = c, this.polyObj[a]._isBlockedHeight = g, this._fixSplitters()
		};
		this._fixSplitters = function () {
			for (var a = 0; a < this.sepVer.length; a++) {
				var c = this._findDockCellsVer(this.sepVer[a]);
				if (c[0] == null || c[1] == null) {
					if (this.sepVer[a].className != "dhtmlxLayoutPolySplitterVerInactive")
						this.sepVer[a].className = "dhtmlxLayoutPolySplitterVerInactive"
				} else if (this.sepVer[a].className != "dhtmlxLayoutPolySplitterVer")
					this.sepVer[a].className =
						"dhtmlxLayoutPolySplitterVer"
			}
			for (a = 0; a < this.sepHor.length; a++)
				if (c = this._findDockCellsHor(this.sepHor[a]), c[0] == null || c[1] == null) {
					if (this.sepHor[a].className != "dhtmlxLayoutPolySplitterHorInactive")
						this.sepHor[a].className = "dhtmlxLayoutPolySplitterHorInactive"
				} else if (this.sepHor[a].className != "dhtmlxLayoutPolySplitterHor")
					this.sepHor[a].className = "dhtmlxLayoutPolySplitterHor"
		};
		this._fixIcons = function () {
			for (var a in this.polyObj) {
				for (var c = this.polyObj[a]._rowData, g = this.polyObj[a]._collapsed, d = -1,
					b = 0; b < c.length; b++)
					typeof c[b] != "object" && c[b] == a && (d = b);
				var e = null;
				if (d != -1) {
					for (b = d + 1; b < c.length; b++)
						typeof c[b] == "object" ? e = this.polyObj[a]._resize == "ver" ? g ? "b" : "t" : g ? "r" : "l" : this.polyObj[c[b]]._collapsed == !1 && (e = this.polyObj[a]._resize == "ver" ? g ? "b" : "t" : g ? "r" : "l");
					if (e == null && d >= 1)
						for (b = d - 1; b >= 0; b--)
							typeof c[b] == "object" ? e = this.polyObj[a]._resize == "ver" ? g ? "t" : "b" : g ? "l" : "r" : this.polyObj[c[b]]._collapsed == !1 && (e = this.polyObj[a]._resize == "ver" ? g ? "t" : "b" : g ? "l" : "r")
				}
				if (e != null) {
					var f = this.polyObj[a]._resize;
					this.polyObj[a].childNodes[0].childNodes[0].childNodes[4].className = "dhtmlxInfoButtonShowHide_" + f + " dhxLayoutButton_" + this.skin + "_" + f + (this.polyObj[a]._collapsed ? "2" : "1") + e
				}
			}
		};
		this._defineWindowMinDimension = function (a, c) {
			if (c == !0) {
				var g = [];
				g[0] = parseInt(a.style.width);
				g[1] = parseInt(a.style.height)
			} else {
				g = a.getDimension();
				if (g[0] == "100%")
					g[0] = a.offsetWidth;
				if (g[1] == "100%")
					g[1] = a.offsetHeight
			}
			var d = h._getNearestParents("hor"),
			b = h._getNearestParents("ver");
			if (!c) {
				var e = [],
				f = [],
				m;
				for (m in d)
					e[e.length] =
						m;
				for (m in b)
					f[f.length] = m;
				h._checkAlterMinSize([e, f]);
				for (var i = {}, k = {}, l = 0; l < h._alterSizes.length; l++) {
					m = h._alterSizes[l][0];
					var r = h._alterSizes[l][1],
					o = h._alterSizes[l][2];
					i[m] == null ? i[m] = r : r > i[m] && (i[m] = r);
					k[m] == null ? k[m] = o : o > k[m] && (k[m] = o)
				}
				for (m in d)
					i[m] != null && (d[m] = d[m] - i[m] + h._minWidth);
				for (m in b)
					k[m] != null && (b[m] = b[m] - k[m] + h._minHeight - (h.polyObj[m].childNodes[0].style.display != "none" ? h.skinParams[h.skin].cpanel_height : 0))
			}
			var s = 65536;
			for (m in d)
				d[m] < s && (s = d[m]);
			s -= h._minWidth;
			s = g[0] - s;
			s < h._dimension[0] && !c && (s = h._dimension[0]);
			var n = 65536;
			for (m in b)
				b[m] < n && (n = b[m]);
			n -= h._minHeight;
			n = g[1] - n;
			n < h._dimension[1] && !c && (n = h._dimension[1]);
			if (c == !0)
				return ["", s, n];
			a.setMinDimension(s, n)
		};
		this._getNearestParents = function (a) {
			for (var c = a == "hor" ? this._autoHor : this._autoVer, g = {}, d = 0; d < c.length; d++) {
				var b = c[d];
				if (this.polyObj[b]._collapsed == !0 && this.polyObj[b]._resize == a) {
					for (var e = this.polyObj[b]._rowData, f = -1, h = 0; h < e.length; h++)
						typeof e[h] == "object" ? f = h : e[h] == b && (f = h);
					var i = f,
					b = null;
					if (f >
						0)
						for (h = f - 1; h >= 0; h--)
							typeof e[h] == "object" ? b = e[h] : this.polyObj[e[h]]._collapsed == !1 && b == null && (b = e[h]);
					if (b == null)
						for (h = i; h < e.length; h++)
							typeof e[h] == "object" ? b = e[h] : this.polyObj[e[h]]._collapsed == !1 && b == null && (b = e[h])
				}
				if (b != null) {
					typeof b == "string" && (b = Array(b));
					for (h = 0; h < b.length; h++)
						g[b[h]] = parseInt(a == "hor" ? this.polyObj[b[h]].style.width : this.polyObj[b[h]].style.height)
				}
			}
			return g
		};
		this.setSizes = function (a) {
			var c = this._defineWindowMinDimension(this.base, !0);
			this.cont.obj.setMinContentSize(c[1],
				c[2]);
			this.cont.obj.adjustContent(this.cont.obj, 0);
			if (this.base.offsetParent) {
				this.cont && a !== !1 && this.cont.obj.adjustContent(this.cont.obj, this._mTop, null, null, this._mBottom);
				var f = this.base.offsetParent.offsetWidth - this.base.offsetWidth + (this._baseWFix != null ? this._baseWFix : 0),
				d = this.base.offsetParent.offsetHeight - this.base.offsetHeight + (this._baseHFix != null ? this._baseHFix : 0);
				this.base.style.width = parseInt(this.base.style.width) + f + "px";
				this.base.style.height = parseInt(this.base.style.height) + d + "px";
				var b = {},
				e;
				for (e in this._getNearestParents("hor"))
					this.polyObj[e].style.width = Math.max(0, parseInt(this.polyObj[e].style.width) + f) + "px", this.polyObj[e].childNodes[0].style.width = this.polyObj[e].style.width, b[e] = 1;
				for (e in this._getNearestParents("ver"))
					this.polyObj[e].style.height = Math.max(0, parseInt(this.polyObj[e].style.height) + d) + "px", this.polyObj[e].childNodes[0].style.height = this.polyObj[e].style.height, b[e] = 1;
				for (e in b)
					this.polyObj[e].adjustContent(this.polyObj[e].childNodes[0], this.polyObj[e]._noHeader ?
						0 : this.skinParams[this.skin].cpanel_height), this.polyObj[e].updateNestedObjects();
				this._fixCollapsedText();
				this.callEvent("onResizeFinish", [])
			}
		};
		dhtmlxEventable(this);
		this._init()
	} else
		alert(this.i18n.dhxcontalert)
}
dhtmlXLayoutObject.prototype.unload = function () {
	this._isIPad ? (document.removeEventListener("touchmove", this._doOnMouseMove, !1), document.removeEventListener("touchend", this._doOnMouseUp, !1)) : _isIE ? (document.body.detachEvent("onselectstart", this._doOnSelectStart), document.body.detachEvent("onmousemove", this._doOnMouseMove), document.body.detachEvent("onmouseup", this._doOnMouseUp)) : (document.body.removeEventListener("mousemove", this._doOnMouseMove, !1), document.body.removeEventListener("mouseup", this._doOnMouseUp,
			!1));
	this._doOnMouseUp = this._doOnMouseMove = this._doOnSelectStart = null;
	for (var f in this.polyObj) {
		var k = this.polyObj[f];
		k._isCell = null;
		k.skin = null;
		k.getId = null;
		k.getIndex = null;
		k.showHeader = null;
		k.hideHeader = null;
		k.isHeaderVisible = null;
		k.setText = null;
		k.getText = null;
		k.expand = null;
		k.collapse = null;
		k.isCollapsed = null;
		k.dock = null;
		k.undock = null;
		k.setWidth = null;
		k.getWidth = null;
		k.setHeight = null;
		k.getHeight = null;
		k.fixSize = null;
		k.progressOn = null;
		k.progressOff = null;
		k._doOnAttachMenu = null;
		k._doOnAttachToolbar =
			null;
		k._doOnAttachStatusBar = null;
		k._collapsed = null;
		k._idd = null;
		k._ind = null;
		k._rowData = null;
		k._dir = null;
		k._initCPanel = null;
		k._minW = null;
		k._minH = null;
		k._resize = null;
		k._savedH = null;
		k._savedW = null;
		k.ondblclick = null;
		var l = k.childNodes[0].childNodes[0];
		l.className = "";
		l._dockCell = null;
		l._resize = null;
		l._h = null;
		l.ondblclick = null;
		l.childNodes[4].onclick = null;
		for (var h = 0; h < l.childNodes.length; h++)
			l.childNodes[h].onselectstart = null;
		for (; l.childNodes.length > 0; )
			l.removeChild(l.childNodes[0]);
		l.parentNode.removeChild(l);
		l = null;
		k._dhxContDestruct();
		k._dhxContDestruct = null;
		k.removeChild(k.childNodes[0]);
		k.parentNode.removeChild(k);
		k = null
	}
	for (f in this.polyObj)
		this.polyObj[f] = null;
	for (var t = 0; t < this.items.length; t++)
		this.items[t] = null;
	this.items = this.polyObj = null;
	for (var v = this.tpl.childNodes[0]; v.childNodes.length > 0; ) {
		for (; v.childNodes[0].childNodes.length > 0; ) {
			h = v.childNodes[0].childNodes[0];
			h._top = null;
			h._bottom = null;
			h._left = null;
			h._right = null;
			h._dblClick = null;
			h._isSep = null;
			h._dir = null;
			h._lastClick = null;
			h.ondblclick =
				null;
			h.onmousedown = null;
			h.onmouseup = null;
			for (h.onselectstart = null; h.childNodes.length > 0; )
				h.removeChild(h.childNodes[0]);
			h.parentNode.removeChild(h);
			h = null
		}
		v.removeChild(v.childNodes[0])
	}
	v.parentNode.removeChild(v);
	v = null;
	this.tpl.parentNode.removeChild(this.tpl);
	this.tpl = null;
	for (f in this.sepHor)
		this.sepHor[f] = null;
	for (f in this.sepVer)
		this.sepVer[f] = null;
	this.sepVer = this.sepHor = null;
	if (this._ha) {
		this.detachEvent(this._haEv);
		for (this._haEv = null; this._ha.childNodes.length > 0; )
			this._ha.removeChild(this._ha.childNodes[0]);
		this._ha.parentNode.removeChild(this._ha);
		this._ha = null
	}
	if (this._fa) {
		this.detachEvent(this._faEv);
		for (this._faEv = null; this._fa.childNodes.length > 0; )
			this._fa.removeChild(this._fa.childNodes[0]);
		this._fa.parentNode.removeChild(this._fa);
		this._fa = null
	}
	this.attachFooter = this.attachHeader = null;
	this.detachAllEvents();
	this._CPanelHeight = this._CPanelBtnsWidth = this.tplSizes = this.tplData = this.skinParams = this.skin = this.imagePath = this.h = this.w = this._xmlLoader = this._totalRows = this._totalCols = this._rowsRatio = this._colsRatio =
		this._resY = this._resX = this._resObj = this._resFunc = this._minHeight = this._minWidth = this._mTop = this._mBottom = this._layoutView = this._effects = this._dimension = this._availAutoSize = this._autoVer = this._autoHor = null;
	this.sizer.parentNode && this.sizer.parentNode.removeChild(this.sizer);
	this._resYMaxHeightBottom = this._resYMaxHeightTop = this._resXMaxWidthRight = this._resXMaxWidthLeft = this._resYStart = this._resXStart = this._minHTAlter = this._minHBAlter = this._minWRAlter = this._minWLAlter = this._collapsedW = this._collapsedH =
		this._dblClickTM = this._doOnDoubleClick = this._autodetectSkin = this.dhx_SeverCatcherPath = this.i18n = this._isIPad = this._effect = this._autosize = this._cells = this.hideStatusBar = this.hideToolbar = this.hideMenu = this.showStatusBar = this.showToolbar = this.showMenu = this.detachStatusBar = this.detachToolbar = this.detachMenu = this.attachStatusBar = this.attachToolbar = this.attachMenu = this.setCollapsedText = this.updateNestedObjectsArray = this.unload = this.unDockWindow = this.showPanel = this.setText = this.setSkin = this.setSizes = this.setImagePath =
		this.setEffect = this.setAutoSize = this.progressOn = this.progressOff = this.listViews = this.listAutoSizes = this.isPanelVisible = this.hidePanel = this.getTextTooltip = this.getText = this.getIndexById = this.getIdByIndex = this.getEffect = this.forEachItem = this.eventCatcher = this.dockWindow = this.detachEvent = this.detachAllEvents = this.checkEvent = this.cells = this.callEvent = this.attachToolbar = this.attachStatusBar = this.attachMenu = this.attachEvent = this._xmlParser = this._showCovers = this._setWidth = this._setW = this._setHeight = this._setH =
		this._resAreaData = this._resizeVer = this._resizeStop = this._resizeHor = this._progressControlGlobal = this._progressControl = this._isResizable = this._isCollapsed = this._initWindows = this._init = this._hideCovers = this._getNearestParents = this._fixSplitters = this._fixSize = this._fixPositionInWin = this._fixIcons = this._findDockCellsVer = this._findDockCellsHor = this._expandEffect = this._expand = this._doExpand = this._doCollapse = this._defineWindowMinDimension = this._collectResAreaData = this._collapseEffect = this._collapse = this._checkAlterMinSize =
		this._changeCPanelText = this._buildSurface = this._attachSizer = this._alterSizes = this.sizer = null;
	if (this.obj)
		this.obj.parentNode.removeChild(this.obj), this.obj = null;
	if (this.base && this.base != document.body)
		this.base.parentNode.removeChild(this.base), this.base = null;
	if (this.cont)
		this.cont.obj._dhxContDestruct(), this.cont = null;
	if (this.dhxWins)
		this.dhxWins.unload(), this.dhxWinsIdPrefix = this.dhxWins = null;
	if (this._doOnResizeStart)
		_isIE ? window.detachEvent("onresize", this._doOnResizeStart) : window.removeEventListener("resize",
			this._doOnResizeStart, !1), this._tmTime = this._doOnResizeEnd = this._doOnResizeStart = null;
	that = null
};
dhtmlXLayoutObject.prototype.tplData = {
	"1C" : '<layout><autosize hor="a" ver="a" rows="1" cols="1"/><table data="a"/><row><cell obj="a" wh="1,1" resize="ver" neighbors="a"/></row></layout>',
	"2E" : '<layout><autosize hor="a;b" ver="b" rows="2" cols="1"/><table data="a;b"/><row><cell obj="a" wh="1,2" resize="ver" neighbors="a;b"/></row><row sep="true"><cell sep="hor" top="a" bottom="b" dblclick="a"/></row><row><cell obj="b" wh="1,2" resize="ver" neighbors="a;b"/></row></layout>',
	"2U" : '<layout><autosize hor="b" ver="a;b" rows="1" cols="2"/><table data="a,b"/><row><cell obj="a" wh="2,1" resize="hor" neighbors="a;b"/><cell sep="ver" left="a" right="b" dblclick="a"/><cell obj="b" wh="2,1" resize="hor" neighbors="a;b"/></row></layout>',
	"3E" : '<layout><autosize hor="a;b;c" ver="c" rows="3" cols="1"/><table data="a;b;c"/><row><cell obj="a" wh="1,3" resize="ver" neighbors="a;b;c"/></row><row sep="yes"><cell sep="hor" top="a" bottom="b;c" dblclick="a"/></row><row><cell obj="b" wh="1,3" resize="ver" neighbors="a;b;c"/></row><row sep="yes"><cell sep="hor" top="a;b" bottom="c" dblclick="b"/></row><row><cell obj="c" wh="1,3" resize="ver" neighbors="a;b;c"/></row></layout>',
	"3W" : '<layout><autosize hor="c" ver="a;b;c" rows="1" cols="3"/><table data="a,b,c"/><row><cell obj="a" wh="3,1" resize="hor" neighbors="a;b;c"/><cell sep="ver" left="a" right="b;c" dblclick="a"/><cell obj="b" wh="3,1" resize="hor" neighbors="a;b;c"/><cell sep="ver" left="a;b" right="c" dblclick="b"/><cell obj="c" wh="3,1" resize="hor" neighbors="a;b;c"/></row></layout>',
	"3J" : '<layout><autosize hor="b" ver="b;c" rows="2" cols="2"/><table data="a,b;c,b"/><row><cell obj="a" wh="2,2" resize="ver" neighbors="a;c"/><cell sep="ver" left="a,c" right="b" dblclick="b" rowspan="3"/><cell obj="b" wh="2,1" resize="hor" neighbors="a,c;b" rowspan="3"/></row><row sep="yes"><cell sep="hor" top="a" bottom="c" dblclick="a"/></row><row><cell obj="c" wh="2,2" resize="ver" neighbors="a;c"/></row></layout>',
	"3T" : '<layout><autosize hor="a;c" ver="b;c" rows="2" cols="2"/><table data="a,a;b,c"/><row><cell obj="a" wh="1,2" resize="ver" neighbors="a;b,c" colspan="3"/></row><row sep="true"><cell sep="hor" top="a" bottom="b,c" dblclick="a" colspan="3"/></row><row><cell obj="b" wh="2,2" resize="hor" neighbors="b;c"/><cell sep="ver" left="b" right="c" dblclick="b"/><cell obj="c" wh="2,2" resize="hor" neighbors="b;c"/></row></layout>',
	"3L" : '<layout><autosize hor="b;c" ver="a;c" rows="2" cols="2"/><table data="a,b;a,c"/><row><cell obj="a" wh="2,1" resize="hor" neighbors="a;b,c" rowspan="3"/><cell sep="ver" left="a" right="b,c" dblclick="a" rowspan="3"/><cell obj="b" wh="2,2" resize="ver" neighbors="b;c"/></row><row sep="true"><cell sep="hor" top="b" dblclick="b" bottom="c"/></row><row><cell obj="c" wh="b,2" resize="ver" neighbors="b;c"/></row></layout>',
	"3U" : '<layout><autosize hor="b;c" ver="c" rows="2" cols="2"/><table data="a,b;c,c"/><row><cell obj="a" wh="2,2" resize="hor" neighbors="a;b"/><cell sep="ver" left="a" right="b" dblclick="a"/><cell obj="b" wh="2,2" resize="hor" neighbors="a;b"/></row><row sep="true"><cell sep="hor" top="a,b" bottom="c" dblclick="c" colspan="3"/></row><row><cell obj="c" wh="1,2" resize="ver" neighbors="a,b;c" colspan="3"/></row></layout>',
	"4H" : '<layout><autosize hor="d" ver="a;c;d" rows="2" cols="3"/><table data="a,b,d;a,c,d"/><row><cell obj="a" wh="3,1" resize="hor" neighbors="a;b,c;d" rowspan="3"/><cell sep="ver" left="a" right="b,c;d" dblclick="a" rowspan="3"/><cell obj="b" wh="3,2" resize="ver" neighbors="b;c"/><cell sep="ver" left="a;b,c" right="d" dblclick="d" rowspan="3"/><cell obj="d" wh="3,1" resize="hor" neighbors="a;b,c;d" rowspan="3"/></row><row sep="true"><cell sep="hor" top="b" dblclick="b" bottom="c"/></row><row><cell obj="c" wh="3,2" resize="ver" neighbors="b;c"/></row></layout>',
	"4I" : '<layout><autosize hor="a;c;d" ver="d" rows="3" cols="2"/><table data="a,a;b,c;d,d"/><row><cell obj="a" wh="1,3" resize="ver" neighbors="a;b,c;d" colspan="3"/></row><row sep="true"><cell sep="hor" top="a" bottom="b,c;d" dblclick="a" colspan="3"/></row><row><cell obj="b" wh="2,3" resize="hor" neighbors="b;c"/><cell sep="ver" left="b" dblclick="b" right="c"/><cell obj="c" wh="2,3" resize="hor" neighbors="b;c"/></row><row sep="true"><cell sep="hor" top="a;b,c" bottom="d" dblclick="d" colspan="3"/></row><row><cell obj="d" wh="1,3" resize="ver" neighbors="a;b,c;d" colspan="3"/></row></layout>',
	"4T" : '<layout><autosize hor="a;d" ver="b;c;d" rows="2" cols="3"/><table data="a,a,a;b,c,d"/><row><cell obj="a" wh="1,2" resize="ver" neighbors="a;b,c,d" colspan="5"/></row><row sep="true"><cell sep="hor" top="a" bottom="b,c,d" dblclick="a" colspan="5"/></row><row><cell obj="b" wh="3,2" resize="hor" neighbors="b;c;d"/><cell sep="ver" left="b" right="c;d" dblclick="b"/><cell obj="c" wh="3,2" resize="hor" neighbors="b;c;d"/><cell sep="ver" left="b;c" right="d" dblclick="c"/><cell obj="d" wh="3,2" resize="hor" neighbors="b;c;d"/></row></layout>',
	"4U" : '<layout><autosize hor="c;d" ver="d" rows="2" cols="3"/><table data="a,b,c;d,d,d"/><row><cell obj="a" wh="3,2" resize="hor" neighbors="a;b;c"/><cell sep="ver" left="a" right="b;c" dblclick="a"/><cell obj="b" wh="3,2" resize="hor" neighbors="a;b;c"/><cell sep="ver" left="a;b" right="c" dblclick="b"/><cell obj="c" wh="3,2" resize="hor" neighbors="a;b;c"/></row><row sep="true"><cell sep="hor" top="a,b,c" bottom="d" dblclick="d" colspan="5"/></row><row><cell obj="d" wh="1,2" resize="ver" neighbors="a,b,c;d" colspan="5"/></row></layout>',
	"5H" : '<layout><autosize hor="b;c;d" ver="a;c;e" rows="3" cols="3"/><table data="a,b,e;a,c,e;a,d,e"/><row><cell obj="a" wh="3,1" resize="hor" neighbors="a;b,c,d" rowspan="5"/><cell sep="ver" left="a" right="b,c,d;e" dblclick="a" rowspan="5"/><cell obj="b" wh="3,3" resize="ver" neighbors="b;c;d"/><cell sep="ver" left="a;b,c,d" right="e" dblclick="e" rowspan="5"/><cell obj="e" wh="3,1" resize="hor" neighbors="b,c,d;e" rowspan="5"/></row><row sep="true"><cell sep="hor" top="b" dblclick="b" bottom="c;d"/></row><row><cell obj="c" wh="3,3" resize="ver" neighbors="b;c;d"/></row><row sep="true"><cell sep="hor" top="b;c" dblclick="c" bottom="d"/></row><row><cell obj="d" wh="3,3" resize="ver" neighbors="b;c;d"/></row></layout>',
	"5I" : '<layout><autosize hor="a;d;e" ver="e" rows="3" cols="3"/><table data="a,a,a;b,c,d;e,e,e"/><row><cell obj="a" wh="1,3" resize="ver" neighbors="a;b,c,d;e" colspan="5"/></row><row sep="match"><cell sep="hor" top="a" bottom="b,c,d;e" dblclick="a" colspan="5"/></row><row><cell obj="b" wh="3,3" resize="hor" neighbors="b;c;d"/><cell sep="ver" left="b" right="c;d" dblclick="b"/><cell obj="c" wh="3,3" resize="hor" neighbors="b;c;d"/><cell sep="ver" left="b;c" right="d" dblclick="c"/><cell obj="d" wh="3,3" resize="hor" neighbors="b;c;d"/></row><row sep="match"><cell sep="hor" top="a;b,c,d" bottom="e" dblclick="e" colspan="5"/></row><row><cell obj="e" wh="1,3" resize="ver" neighbors="a;b,c,d;e" colspan="5"/></row></layout>',
	"6I" : '<layout><autosize hor="a;e;f" ver="f" rows="3" cols="4"/><table data="a,a,a,a;b,c,d,e;f,f,f,f"/><row><cell obj="a" wh="1,3" resize="ver" neighbors="a;b,c,d,e;f" colspan="7"/></row><row sep="true"><cell sep="hor" top="a" bottom="b,c,d,e;f" dblclick="a" colspan="7"/></row><row><cell obj="b" wh="4,3" resize="hor" neighbors="b;c;d;e"/><cell sep="ver" left="b" right="c;d;e" dblclick="b"/><cell obj="c" wh="4,3" resize="hor" neighbors="b;c;d;e"/><cell sep="ver" left="b;c" right="d;e" dblclick="c"/><cell obj="d" wh="4,3" resize="hor" neighbors="b;c;d;e"/><cell sep="ver" left="b;c;d" right="e" dblclick="d"/><cell obj="e" wh="4,3" resize="hor" neighbors="b;c;d;e"/></row><row sep="true"><cell sep="hor" top="a;b,c,d,e" bottom="f" dblclick="f" colspan="7"/></row><row><cell obj="f" wh="1,3" resize="ver" neighbors="a;b,c,d,e;f" colspan="7"/></row></layout>'
};
dhtmlXLayoutObject.prototype._availAutoSize = {
	"1C_hor" : ["a"],
	"1C_ver" : ["a"],
	"2E_hor" : ["a;b"],
	"2E_ver" : ["a", "b"],
	"2U_hor" : ["a", "b"],
	"2U_ver" : ["a;b"],
	"3E_hor" : ["a;b;c"],
	"3E_ver" : ["a", "b", "c"],
	"3W_hor" : ["a", "b", "c"],
	"3W_ver" : ["a;b;c"],
	"3J_hor" : ["a;c", "b"],
	"3J_ver" : ["a;b", "c;b"],
	"3T_hor" : ["a;b", "a;c"],
	"3T_ver" : ["a", "b;c"],
	"3L_hor" : ["a", "b;c"],
	"3L_ver" : ["a;b", "a;c"],
	"3U_hor" : ["a;c", "b;c"],
	"3U_ver" : ["a;b", "c"],
	"4H_hor" : ["a", "b;c", "d"],
	"4H_ver" : ["a;b;d", "a;c;d"],
	"4I_hor" : ["a;b;d", "a;c;d"],
	"4I_ver" : ["a", "b;c",
		"d"],
	"4T_hor" : ["a;b", "a;c", "a;d"],
	"4T_ver" : ["a", "b;c;d"],
	"4U_hor" : ["a;d", "b;d", "c;d"],
	"4U_ver" : ["a;b;c", "d"],
	"5H_hor" : ["a", "b;c;d", "e"],
	"5H_ver" : ["a;b;e", "a;c;e", "a;d;e"],
	"5I_hor" : ["a;b;e", "a;c;e", "a;d;e"],
	"5I_ver" : ["a", "b;c;d", "e"],
	"6I_hor" : ["a;b;f", "a;c;f", "a;d;f", "a;e;f"],
	"6I_ver" : ["a", "b;c;d;e", "f"]
};
dhtmlXLayoutObject.prototype.setCollapsedText = function (f, k) {
	if (this.polyObj[f]) {
		var l = this.polyObj[f].childNodes[0].childNodes[0];
		if (l.childNodes[l.childNodes.length - 1]._ct === !0)
			var h = l.childNodes[l.childNodes.length - 1];
		else
			h = document.createElement("DIV"), h._ct = !0, h.className = "dhtmlxInfoBarLabel_collapsed_" + this.polyObj[f]._resize, l.appendChild(h);
		h.innerHTML = k;
		this._fixCollapsedText();
		l = null
	}
};
dhtmlXLayoutObject.prototype._fixCollapsedText = function () {
	for (var f in this.polyObj)
		if (this.polyObj[f]._resize == "hor") {
			var k = this.polyObj[f].childNodes[0].childNodes[0];
			if (k.childNodes[k.childNodes.length - 1]._ct === !0 && (k.childNodes[k.childNodes.length - 1].style.width = Math.max(0, k.offsetHeight - k.childNodes[4].offsetTop - k.childNodes[4].offsetHeight - 12) + "px", _isFF || _isOpera || _isChrome || navigator.userAgent.indexOf("MSIE 10.0") >= 0))
				k.childNodes[k.childNodes.length - 1].style.bottom = "-12px"
		}
};
dhtmlXLayoutObject.prototype.i18n = {
	dhxcontalert : "dhtmlxcontainer.js is missed on the page",
	collapse : "Collapse",
	expand : "Expand",
	dock : "Dock",
	undock : "UnDock"
};
(function () {
	dhtmlx.extend_api("dhtmlXLayoutObject", {
		_init : function (f) {
			return [f.parent, f.pattern, f.skin]
		},
		image_path : "setImagePath",
		effect : "_effect",
		cells : "_cells",
		autosize : "_autosize"
	}, {
		_cells : function (f) {
			for (var k = 0; k < f.length; k++) {
				var l = f[k],
				h = this.cells(l.id);
				h && (l.height && h.setHeight(l.height), l.width && h.setWidth(l.width), l.text && h.setText(l.text), l.collapse && h.collapse(), l.fix_size && h.fixSize(l.fix_size[0], l.fix_size[1]), l.header === !1 && h.hideHeader())
			}
		},
		_autosize : function (f) {
			this.setAutoSize(f[0],
				f[1])
		},
		_effect : function (f) {
			f.collapse && this.setEffect("collapse", f.collapse);
			f.resize && this.setEffect("resize", f.resize);
			f.highlight && this.setEffect("highlight", f.highlight)
		}
	})
})();
dhtmlXLayoutObject.prototype.attachHeader = function (f) {
	if (!(this._ha || this.cont.obj != document.body)) {
		typeof f != "object" && (f = document.getElementById(f));
		var k = 2,
		l = -4,
		h = 2;
		this.skin == "dhx_web" ? (k = h = 9, l = -18) : this.skin == "dhx_terrace" && (k = h = 14, l = -28);
		if (this._fa != null)
			l = this.cont.obj._offsetHeight;
		this.cont.obj._offsetTop = f.offsetHeight + k * 2;
		this.cont.obj._offsetHeight = -f.offsetHeight + l - k;
		this.setSizes();
		this._ha = document.createElement("DIV");
		this._ha.style.position = "absolute";
		this._ha.style.top = h + "px";
		this._ha.style.left =
			this.cont.obj.vs[this.cont.obj.av].dhxcont.style.left;
		this._ha.style.width = this.cont.obj.vs[this.cont.obj.av].dhxcont.style.width;
		this._ha.style.height = f.offsetHeight + "px";
		document.body.appendChild(this._ha);
		this._ha.appendChild(f);
		this._haEv = this.attachEvent("onResizeFinish", function () {
				this._ha.style.width = this.cont.obj.vs[this.cont.obj.av].dhxcont.style.width
			})
	}
};
dhtmlXLayoutObject.prototype.detachHeader = function () {
	if (this._ha && this.cont.obj == document.body) {
		document.body.appendChild(this._ha.firstChild);
		this.detachEvent(this._haEv);
		this._ha.parentNode.removeChild(this._ha);
		this._ha = this._haEv = null;
		var f = 2,
		k = -4;
		this.skin == "dhx_web" ? (f = 9, k = -18) : this.skin == "dhx_terrace" && (f = 14, k = -28);
		this._fa != null && (k = this.cont.obj._offsetHeight + this.cont.obj._offsetTop - f);
		this.cont.obj._offsetTop = f;
		this.cont.obj._offsetHeight = k;
		this.setSizes()
	}
};
dhtmlXLayoutObject.prototype.attachFooter = function (f) {
	if (!(this._fa || this.cont.obj != document.body)) {
		typeof f != "object" && (f = document.getElementById(f));
		var k = 2,
		l = -4,
		h = 2;
		this.skin == "dhx_web" ? (k = h = 9, l = -18) : this.skin == "dhx_terrace" && (k = h = 14, l = -28);
		if (this._ha != null)
			k = this.cont.obj._offsetTop;
		this.cont.obj._offsetHeight = -f.offsetHeight + l - k;
		this.setSizes();
		this._fa = document.createElement("DIV");
		this._fa.style.position = "absolute";
		this._fa.style.bottom = h + "px";
		this._fa.style.left = this.cont.obj.vs[this.cont.obj.av].dhxcont.style.left;
		this._fa.style.width = this.cont.obj.vs[this.cont.obj.av].dhxcont.style.width;
		this._fa.style.height = f.offsetHeight + "px";
		document.body.appendChild(this._fa);
		this._fa.appendChild(f);
		this._faEv = this.attachEvent("onResizeFinish", function () {
				this._fa.style.width = this.cont.obj.vs[this.cont.obj.av].dhxcont.style.width
			})
	}
};
dhtmlXLayoutObject.prototype.detachFooter = function () {
	if (this._fa && this.cont.obj == document.body) {
		document.body.appendChild(this._fa.firstChild);
		this.detachEvent(this._faEv);
		this._fa.parentNode.removeChild(this._fa);
		this._fa = this._faEv = null;
		var f = 2,
		k = -4;
		this.skin == "dhx_web" ? (f = 9, k = -18) : this.skin == "dhx_terrace" && (f = 14, k = -28);
		if (this._ha != null)
			k = -this.cont.obj._offsetTop - f, f = this.cont.obj._offsetTop;
		this.cont.obj._offsetTop = f;
		this.cont.obj._offsetHeight = k;
		this.setSizes()
	}
};
dhtmlXLayoutObject.prototype._fixToolbars = function () {
	if (_isIE)
		for (var f in this.polyObj)
			this.polyObj[f].vs[this.polyObj[f].av].toolbar != null && this.polyObj[f].vs[this.polyObj[f].av].toolbar._fixSpacer()
};
dhtmlXLayoutObject.prototype._hideBorders = function () {
	if (this.skin == "dhx_terrace") {
		this._cpm_old = this.skinParams[this.skin].cell_pading_max;
		this.skinParams[this.skin].cell_pading_max = [1, 0, 0, 0];
		for (var f in this.polyObj)
			this.polyObj[f]._setPadding(this.skinParams[this.skin].cell_pading_max, "dhxcont_layout_" + this.skin), this.polyObj[f].adjustContent(this.polyObj[f].childNodes[0], this.skinParams[this.skin].cpanel_height)
	}
};

//v.3.6 build 130619

/*
Copyright DHTMLX LTD. http://www.dhtmlx.com
You allowed to use this component or parts of it under GPL terms
To use it on other terms or get Professional edition of the component please contact us at sales@dhtmlx.com
*/
