!(function (t) {
  function e(t, e, i) {
    ;(this.onClick = new c()),
      (this.onDown = new c()),
      (this.onUp = new c()),
      (this.onOut = new c()),
      e && ((e = e.bind(i || this)), this.onClick.add(e)),
      (this.disposed = !1),
      (this.isDown = !1),
      (this.isOver = !1),
      (this.name = 'TintButton'),
      (this.upTint = 16777215),
      (this.overTint = 15658734),
      (this.downTint = 14540253),
      (this.disableTint = 8947848),
      (this.tint = this.upTint),
      PIXI.Sprite.call(this, t),
      (this.mousedown = this.touchstart = this._mouseDown),
      (this.mouseup = this.touchend = this.mouseupoutside = this.touchendoutside = this._mouseUp),
      (this.mouseover = this._mouseOver),
      (this.mouseout = this._mouseOut),
      (this.click = this.tap = this._clickTap),
      (this.interactive = !0),
      (this.buttonMode = !0),
      this.anchor.set(0.5, 0.5),
      (this._cacheAnchorY = null)
  }
  function i(t, e) {
    PIXI.Container.call(this),
      (this.name = t || 'Item'),
      (this.zOrder = e || Z.zOrder.defaultZ),
      (this._body = null),
      (this.angleUpdate = !1),
      (this.positionUpdate = !1)
  }
  function a() {
    PIXI.Container.call(this)
    var t = new PIXI.TextStyle({ fontFamily: 'Impact', fontSize: 42, fill: 'white', align: 'center' }),
      e = new PIXI.Graphics()
    e.beginFill(0),
      e.drawRect(0, 0, _t.gameWidth0, _t.gameHeight0),
      e.endFill(),
      this.addChild(e),
      (this._txtLoading = new PIXI.Text('Loading', t)),
      this._txtLoading.scale.set(0.5, 0.5),
      this._txtLoading.anchor.set(0.5, 0.5),
      (this._txtLoading.x = _t.gameWidth0 / 2),
      (this._txtLoading.y = _t.gameHeight0 / 2 - 10),
      this.addChild(this._txtLoading),
      _t.pixi.ticker.add(this._update, this),
      (this._loaded = 0),
      (this._curr = 0)
  }
  function n() {
    PIXI.Container.call(this)
    var t = _t.assets.getSprite('splash')
    t.anchor.set(0.5, 0.5), (t.x = _t.gameWidth0 / 2), (t.y = _t.gameHeight0 / 2), this.addChild(t)
  }
  function s(t) {
    this.app = t
  }
  function o() {
    EventTarget.call(this),
      (this._event = {}),
      (this._event.type = ''),
      (this._event.orientation = ''),
      (this._event.originalEvent = null),
      (this._onVisibilityChange = this._onVisibilityChange.bind(this)),
      (this._onWebkitVisibilityChange = this._onWebkitVisibilityChange.bind(this)),
      (this._onPageShow = this._onPageShow.bind(this)),
      (this._onPageHide = this._onPageHide.bind(this)),
      (this._onFocus = this._onFocus.bind(this)),
      (this._onBlur = this._onBlur.bind(this)),
      (this._onResize = this._onResize.bind(this)),
      (this._onOrientationChange = this._onOrientationChange.bind(this)),
      document.addEventListener('visibilitychange', this._onVisibilityChange, !1),
      document.addEventListener('webkitvisibilitychange', this._onWebkitVisibilityChange, !1),
      document.addEventListener('pageshow', this._onPageHide, !1),
      document.addEventListener('pagehide', this._onPageShow, !1),
      (t.onfocus = this._onFocus),
      (t.onblur = this._onBlur),
      (this.orientation = this._getOrientation()),
      (this._event.orientation = this.orientation),
      t.addEventListener('resize', this._onResize, !1),
      t.addEventListener('orientationchange', this._onOrientationChange, !1)
  }
  function r(t, e, i, a, n) {
    ;(this.up = t),
      (this.over = e),
      (this.down = i),
      (this.onClick = new c()),
      (this.onDown = new c()),
      (this.onUp = new c()),
      (this.onOut = new c()),
      a && ((a = a.bind(n || this)), this.onClick.add(a)),
      (this.name = 'Button'),
      (this.disposed = !1),
      (this.isDown = !1),
      (this.isOver = !1),
      PIXI.Sprite.call(this, t),
      (this.mousedown = this.touchstart = this._mouseDown),
      (this.mouseup = this.touchend = this.mouseupoutside = this.touchendoutside = this._mouseUp),
      (this.mouseover = this._mouseOver),
      (this.mouseout = this._mouseOut),
      (this.click = this.tap = this._clickTap),
      (this.interactive = !0),
      this.anchor.set(0.5, 0.5),
      (this._cacheAnchorY = null)
  }
  function l(t, i, a, n) {
    var s = _t.assets.getTexture('btnNumLevel' + i, 'atlasUI')
    e.call(this, s, a, n), (this.num = t), (this.name = 'ButtonLevel' + t)
    var o = 'levelNumbers_' + rt.pad(t + '', 4, '0', 1),
      r = _t.assets.getSprite(o, 'atlasUI', !0)
    if ((r.anchor.set(0.5, 0.5), (r.x = this.width / 2 - 3), (r.y = this.height / 2), this.addChild(r), null == r)) {
      var l = new PIXI.TextStyle({
        fontFamily: 'CroMagnum',
        fontSize: 42,
        fill: '#FEF4B0',
        stroke: '#4D1604',
        strokeThickness: 8
      })
      this.setLabel(t + '', l)
    }
    var h = _t.assets.getSprite('icoStarLevelBtn', 'atlasUI')
    h.anchor.set(0.5, 0.5), (h.x = s.width / 2), (h.y = s.height - h.height / 2 + 3), this.addChild(h)
    var y = _t.assets.getSprite('icoStarLevelBtn', 'atlasUI')
    y.anchor.set(0.5, 0.5), (y.x = h.x - h.width + 3), (y.y = h.y), this.addChild(y)
    var d = _t.assets.getSprite('icoStarLevelBtn', 'atlasUI')
    d.anchor.set(0.5, 0.5),
      (d.x = h.x + h.width - 3),
      (d.y = h.y),
      this.addChild(d),
      this.scale.set(0.5, 0.5),
      (this._stars = [h, y, d])
  }
  function h(t, i, a, n, s) {
    PIXI.Container.call(this),
      (this._callback = n),
      (this._callbackScope = s),
      (this._on = e.generateButton(t, a, this._onClick, this)),
      (this._on.name = 'ON'),
      this.addChild(this._on),
      (this._off = e.generateButton(i, a, this._onClick, this)),
      (this._off.name = 'OFF'),
      this.addChild(this._off),
      (this.on = !0)
  }
  function y(t) {
    ;(this.name = t || 'Collection#' + ++y.__id),
      (this._arr = []),
      (this.throwIfIn = !1),
      (this.throwIfNotIn = !1),
      (this.throwIfOut = !1)
  }
  function d() {
    Box2D.Dynamics.b2ContactListener.call(this),
      (this._ee = new EventEmitter()),
      (this._eventNameBeginContact = 'onBeginContact'),
      (this._eventNameEndContact = 'onEndContact')
  }
  function c() {
    ;(this.count = 0), (this._callbacks = []), (this._doItAfter = []), (this._blocked = !1), (this.disposed = !1)
  }
  function p() {
    ;(this.startTime = Date.now()),
      (this.prevTime = this.startTime),
      (this.ms = 0),
      (this.msMin = 1 / 0),
      (this.msMax = 0),
      (this.fps = 0),
      (this.fpsMin = 1 / 0),
      (this.fpsMax = 0),
      (this.frames = 0),
      (this.update = this.update.bind(this))
  }
  function m(t) {
    ;(this.stage = t),
      (this.mouse = new PIXI.InteractionData()),
      (this.touchs = {}),
      (this.interactInvisible = !1),
      (this.tempPoint = new PIXI.Point()),
      (this.mouseoverEnabled = !0),
      (this.pool = []),
      (this.interactiveItems = []),
      (this.interactionDOMElement = null),
      (this.onMouseMove = this.onMouseMove.bind(this)),
      (this.onMouseDown = this.onMouseDown.bind(this)),
      (this.onMouseOut = this.onMouseOut.bind(this)),
      (this.onMouseUp = this.onMouseUp.bind(this)),
      (this.onTouchStart = this.onTouchStart.bind(this)),
      (this.onTouchEnd = this.onTouchEnd.bind(this)),
      (this.onTouchMove = this.onTouchMove.bind(this)),
      (this.last = 0)
  }
  function g() {
    ;(this.localStorageEnable = !1), (this._storage = {})
    try {
      this.localStorageEnable = 'localStorage' in t && null !== t.localStorage
    } catch (t) {}
  }
  function u(e) {
    ;(t.b2Vec2 = Box2D.Common.Math.b2Vec2),
      (t.b2AABB = Box2D.Collision.b2AABB),
      (t.b2BodyDef = Box2D.Dynamics.b2BodyDef),
      (t.b2Body = Box2D.Dynamics.b2Body),
      (t.b2FixtureDef = Box2D.Dynamics.b2FixtureDef),
      (t.b2Fixture = Box2D.Dynamics.b2Fixture),
      (t.b2World = Box2D.Dynamics.b2World),
      (t.b2MassData = Box2D.Collision.Shapes.b2MassData),
      (t.b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape),
      (t.b2CircleShape = Box2D.Collision.Shapes.b2CircleShape),
      (t.b2DebugDraw = Box2D.Dynamics.b2DebugDraw),
      (t.b2MouseJointDef = Box2D.Dynamics.Joints.b2MouseJointDef),
      (t.b2RevoluteJoint = Box2D.Dynamics.Joints.b2RevoluteJoint),
      (t.b2RevoluteJointDef = Box2D.Dynamics.Joints.b2RevoluteJointDef),
      (this.world = new ct(new lt(0, 12), !0)),
      (this.contactListener = new d()),
      this.world.SetContactListener(this.contactListener),
      (_t.physWorld = this.world),
      this.clearDoIt(),
      (this._canvas = null),
      (this._context = null),
      e && this.enableDebugDraw(),
      _t.pixi.ticker.add(this._update, this)
  }
  function x(t) {
    'undefined' == typeof t && (t = []), (this.c = 1), (this.s0 = 0), (this.s1 = 0), (this.s2 = 0), this.sow(t)
  }
  function w(t) {
    PIXI.Container.call(this)
    var e = _t.assets.getSprite('levelsBoard', 'atlasUI')
    e.scale.set(0.5, 0.5), e.anchor.set(0.5, 0.76), this.addChild(e)
    var i = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: 42,
        fill: '#EFE9BF',
        stroke: '#4D1604',
        strokeThickness: 8,
        align: 'center',
        lineHeight: 42
      }),
      a = new PIXI.Text(t, i)
    a.scale.set(0.5, 0.5), a.anchor.set(0.5, 0.45), this.addChild(a)
  }
  function _(t, i) {
    PIXI.Container.call(this), (this.x = -_t.gameWidth0)
    var a = new w('')
    ;(a.x = 180), (a.y = 210), this.addChild(a)
    var n = new w('')
    ;(n.x = 540), (n.y = 210), this.addChild(n)
    var s = e.generateButton('btnBackCredits', 'atlasUI', t, i)
    ;(s.name = 'BackCredits'),
      s.scale.set(0.5, 0.5),
      (s.x = _t.gameWidth0 - s.width / 2 - 10),
      (s.y = _t.gameHeight0 - s.height / 2 - 5),
      this.addChild(s)
  }
  function P(t, e) {
    PIXI.Container.call(this), (this._buttonsHandler = e)
    var i = _t.assets.getSprite('levelsBoard' + t, 'atlasUI')
    i.scale.set(0.5, 0.5), i.anchor.set(0.5, 0.5), this.addChild(i)
    var a = 15 * (t - 1) + 1
    ;(this._buttons = []), (this._btnsContainer = new PIXI.Container()), this.addChild(this._btnsContainer)
    for (var n = 12, s = 7, o = 0, r = 8, h = 0; h < 2; h++) {
      for (var y = 0; y < r; y++) {
        var d = new l(a, t, this._onClick, this)
        ;(d.x += o + y * (n + d.width)),
          (d.y += h * (s + d.height)),
          d.anchor.set(0, 0),
          this._btnsContainer.addChild(d),
          d.setLocked(a > _t.levelMng.lastOpened),
          this._buttons.push(d),
          a++
      }
      r--, 2 == t && (o = n + d.width)
    }
    ;(this._btnsContainer.x = -this._btnsContainer.width / 2),
      (this._btnsContainer.y = -this._btnsContainer.height / 2 + 10)
  }
  function v(t, i) {
    PIXI.Container.call(this), (this._buttonsHandler = t)
    var a = _t.assets.getSprite('levelCompleted')
    ;(a.interactive = !0), this.addChild(a)
    const n = 0.35
    ;(this._btnRestart = e.generateButton('btnRestartComplete', 'atlasUI', t, i)),
      (this._btnRestart.name = 'Restart'),
      this._btnRestart.scale.set(n, n),
      this._btnRestart.anchor.set(0.5, 0.5),
      (this._btnRestart.x = this._btnRestart.xIn = _t.gameWidth0 / 2),
      (this._btnRestart.y = this._btnRestart.yIn = _t.gameHeight0 / 2 + 100),
      (this._btnRestart.xOut = this._btnRestart.xIn),
      (this._btnRestart.yOut = _t.gameHeight0 + this._btnRestart.height / 2 + 10),
      this.addChild(this._btnRestart),
      (this._btnMenu = e.generateButton('btnMenuComplete', 'atlasUI', t, i)),
      (this._btnMenu.name = 'Menu'),
      this._btnMenu.scale.set(n, n),
      this._btnMenu.anchor.set(0.5, 0.5),
      (this._btnMenu.x = this._btnMenu.xIn =
        this._btnRestart.x - this._btnRestart.width / 2 - this._btnMenu.width / 2 - 20),
      (this._btnMenu.y = this._btnMenu.yIn = this._btnRestart.y),
      (this._btnMenu.xOut = -this._btnMenu.width / 2 - 10),
      (this._btnMenu.yOut = this._btnMenu.yIn),
      this.addChild(this._btnMenu),
      (this._btnNext = e.generateButton('btnNextComplete', 'atlasUI', t, i)),
      (this._btnNext.name = 'Next'),
      this._btnNext.scale.set(n, n),
      this._btnNext.anchor.set(0.5, 0.5),
      (this._btnNext.x = this._btnNext.xIn =
        this._btnRestart.x + this._btnRestart.width / 2 + this._btnNext.width / 2 + 20),
      (this._btnNext.y = this._btnNext.yIn = this._btnRestart.y),
      (this._btnNext.xOut = _t.gameWidth0 + this._btnNext.width / 2 + 10),
      (this._btnNext.yOut = this._btnNext.yIn),
      this.addChild(this._btnNext)
    var s = new PIXI.TextStyle({
        fontFamily: 'CroMagnum',
        fontSize: 72,
        fill: '#FFDC90',
        stroke: '#4D1604',
        strokeThickness: 6,
        align: 'center'
      }),
      o = 'LEVEL ' + _t.levelMng.currLevel + ' COMPLETED!'
    _t.levelMng.currLevel == _t.levelMng.totalLevels &&
      ((o = "CONGRATULATIONS!\nYOU'VE PASSED THE GAME!"), (s.fontSize = 36)),
      (this._text = new PIXI.Text(o, s)),
      this._text.anchor.set(0.5, 0.5),
      this._text.scale.set(0.5, 0.5),
      (this._text.x = _t.gameWidth0 / 2),
      (this._text.y = _t.gameHeight0 / 2 - 100),
      this.addChild(this._text)
    var r = _t.assets.getSprite('starComplete', 'atlasUI')
    r.anchor.set(0.5, 0.5),
      r.scale.set(0.5, 0.5),
      (r.x = _t.gameWidth0 / 2),
      (r.y = _t.gameHeight0 / 2),
      this.addChild(r)
    var l = _t.assets.getSprite('starComplete', 'atlasUI')
    l.anchor.set(0.5, 0.5),
      l.scale.set(0.5, 0.5),
      (l.x = r.x - r.width / 2 - l.width / 2 - 10),
      (l.y = r.y),
      this.addChild(l)
    var h = _t.assets.getSprite('starComplete', 'atlasUI')
    h.anchor.set(0.5, 0.5),
      h.scale.set(0.5, 0.5),
      (h.x = r.x + r.width / 2 + h.width / 2 + 10),
      (h.y = r.y),
      this.addChild(h),
      (this._stars = [r, l, h]),
      (this.sndWin = _t.assets.getSound('sndWin'))
  }
  function S(t, i, a) {
    PIXI.Container.call(this), (this._buttonsHandler = t), (this.x = _t.gameWidth0)
    var n = new P(1, t)
    ;(n.x = 310), (n.y = 122), this.addChild(n)
    var s = new P(2, t)
    ;(s.x = 410), (s.y = 320), this.addChild(s), (this._boards = [n, s])
    var o = e.generateButton('btnBackLevels', 'atlasUI', i, a)
    ;(o.name = 'BackLevels'),
      o.scale.set(0.5, 0.5),
      (o.x = o.width / 2 + 10),
      (o.y = _t.gameHeight0 - o.height / 2 - 5),
      this.addChild(o)
  }
  function b(t, i) {
    PIXI.Container.call(this)
    var a = _t.assets.getSprite('gameName', null, !0)
    a.scale.set(0.45, 0.45), (a.x = _t.gameWidth0 / 2), (a.y = _t.gameHeight0 / 2 - a.height / 2), this.addChild(a)
    var n = e.generateButton('btnPlayMenu', 'atlasUI', t, i)
    ;(n.name = 'Play'),
      n.scale.set(0.45, 0.45),
      (n.x = a.x),
      (n.y = a.y + a.height / 2 + n.height / 2 + 15),
      this.addChild(n)
    var s = e.generateButton('btnCreditsMenu', 'atlasUI', t, i)
    ;(s.name = 'Credits'),
      s.scale.set(0.45, 0.45),
      (s.x = a.x),
      (s.y = n.y + n.height / 2 + s.height / 2 + 20),
      this.addChild(s)
    var o = new h('btnMusicOn', 'btnMusicOff', 'atlasUI', t, i)
    ;(o.name = 'Music'),
      o.scale.set(0.5, 0.5),
      (o.x = n.x + n.width / 2 + o.width / 2 + 10),
      (o.y = n.y + n.height / 2 + 10),
      (o.on = _t.musicOn),
      this.addChild(o)
    var r = new h('btnSoundOn', 'btnSoundOff', 'atlasUI', t, i)
    ;(r.name = 'Sound'),
      r.scale.set(0.5, 0.5),
      (r.x = n.x - n.width / 2 - r.width / 2 - 10),
      (r.y = o.y),
      (r.on = _t.soundOn),
      this.addChild(r),
      (this.sndButton = _t.assets.getSound('sndButton'))
  }
  function I(t, e) {
    i.call(this, 'Ball', Z.zOrder.ball)
    var a = _t.assets.getSprite('ball', 'atlasGame')
    a.scale.set(0.5, 0.5), a.anchor.set(0.5, 0.5), this.addChild(a), (this.x = t), (this.y = e)
    var n = u.createCircleShape(7.5),
      s = u.createFixtureDef(n, 0.5, 0.15, 1, { item: this, isBall: !0, dynamic: !0 }),
      o = u.createBodyDef(t, e, yt.b2_dynamicBody, !1, !0, 0, !0)
    ;(this._body = u.createBody(o, [s])), this._enableUpdate(), (this.angleUpdate = !0), (this.positionUpdate = !0)
  }
  function A(t, e) {
    i.call(this, 'Basket', Z.zOrder.basket), (this.x = t), (this.y = e)
    var a = _t.assets.getSprite('basket', 'atlasGame')
    a.scale.set(0.55, 0.55), a.anchor.set(0.5, -0.12), this.addChild(a)
    var n = 23,
      s = u.createPolygonShape(22.5, 4, 0, 30 + n),
      o = u.createFixtureDef(s, 0.5, 0.1, 1, this),
      r = u.createPolygonShape(4, 42, 14.85, 10.85 + n, ot.toRadians(15)),
      l = u.createFixtureDef(r, 0.5, 0.1, 1, this),
      h = u.createPolygonShape(4, 42, -14.85, 10.85 + n, ot.toRadians(-15)),
      y = u.createFixtureDef(h, 0.5, 0.1, 1, this),
      d = u.createPolygonShape(7.5, 6.6, 22.8, -7.75 + n, ot.toRadians(-15)),
      c = u.createFixtureDef(d, 0.5, 0.1, 1, this),
      p = u.createPolygonShape(7.5, 6.6, -22.8, -7.75 + n, ot.toRadians(15)),
      m = u.createFixtureDef(p, 0.5, 0.1, 1, this),
      g = u.createPolygonShape(27, 4, 0, n),
      x = u.createFixtureDef(g, 0.5, 0.1, 1, { item: this, basketSensor: !0 }, !0),
      f = u.createBodyDef(t, e, yt.b2_staticBody)
    ;(this._body = u.createBody(f, [o, l, y, c, m, x])),
      _t.physics.contactListener.addBeginContactListener(this._onBeginContact, this),
      (this.sndBallInBasket = _t.assets.getSound('sndBallInBasket'))
  }
  function D(t, e, a, n, s) {
    i.call(this, 'BasketRail', Z.zOrder.basket),
      (this._orienation = 0 == a ? 'v' : 'h'),
      (this._end = n),
      (this.x = t),
      (this.y = e),
      (this.id = s)
    var o = _t.assets.getSprite('railBasket', 'atlasGame')
    o.scale.set(0.55, 0.55), o.anchor.set(0.5, 0.46), this.addChild(o)
    var r = u.createPolygonShape(22.5, 4, 0, 30),
      l = u.createFixtureDef(r, 0.5, 0.1, 1, this),
      h = u.createPolygonShape(4, 42, 14.85, 10.85, ot.toRadians(15)),
      y = u.createFixtureDef(h, 0.5, 0.1, 1, this),
      d = u.createPolygonShape(4, 42, -14.85, 10.85, ot.toRadians(-15)),
      c = u.createFixtureDef(d, 0.5, 0.1, 1, this),
      p = u.createPolygonShape(7.5, 6.6, 22.8, -7.75, ot.toRadians(-15)),
      m = u.createFixtureDef(p, 0.5, 0.1, 1, this),
      g = u.createPolygonShape(7.5, 6.6, -22.8, -7.75, ot.toRadians(15)),
      x = u.createFixtureDef(g, 0.5, 0.1, 1, this),
      f = u.createPolygonShape(27, 4),
      w = u.createFixtureDef(f, 0.5, 0.1, 1, { item: this, basketSensor: !0 }, !0),
      _ = u.createBodyDef(t, e, yt.b2_kinematicBody)
    ;(this._body = u.createBody(_, [l, y, c, m, x, w])),
      this._createRails(),
      _t.physics.contactListener.addBeginContactListener(this._onBeginContact, this),
      i.events.on(i.EVENT_TRIGGER_PRESSED, this._onTriggerEvent, this),
      (this.sndStart = _t.assets.getSound('sndRailStart')),
      (this.sndStop = _t.assets.getSound('sndRailStop'))
  }
  function C(t, e, a, n) {
    i.call(this, 'Box', Z.zOrder.defaultZ), (this.x = t), (this.y = e)
    var s = _t.assets.getSprite('box', 'atlasGame')
    s.scale.set(0.5, 0.5), s.anchor.set(0.5, 0.5), this.addChild(s)
    var o = u.createPolygonShape(45, 45),
      r = u.createFixtureDef(o, 0.5, 0, n, { item: this, dynamic: !0 }),
      l = u.createBodyDef(t, e, yt.b2_dynamicBody, !1, !0, a)
    ;(this._body = u.createBody(l, [r])), this._enableUpdate(), (this.angleUpdate = !0), (this.positionUpdate = !0)
  }
  function B(t, e) {
    i.call(this, 'Cannon', Z.zOrder.cannon),
      (this.lowerAngle = -45),
      (this.upperAngle = 45),
      (this.shotScale = 150),
      (this.minPower = 250),
      (this.maxPower = 500),
      (this.x = t),
      (this.y = e)
    var a = _t.assets.getSprite('cannonPlatform', 'atlasGame')
    a.anchor.set(0.5, 0.7), a.scale.set(0.5, 0.5), this.addChild(a)
    var n = rt.generateFrameNames('cannon_', 1, 15, '', 4),
      s = _t.assets.getTextures(n, 'atlasGame')
    ;(this._cannon = new PIXI.extras.AnimatedSprite(s)),
      this._cannon.anchor.set(0.5, 1.32),
      this._cannon.scale.set(0.5, 0.5),
      (this._cannon.animationSpeed = 1),
      (this._cannon.loop = !1),
      this.addChildAt(this._cannon, 0)
    var o = _t.assets.getSprite('cannonPowerBarBG', 'atlasGame')
    o.anchor.set(0.5, 1),
      (o.x = 30),
      (o.y = -60),
      this._cannon.addChild(o),
      (this._powerBar = _t.assets.getSprite('cannonPowerBar', 'atlasGame')),
      this._powerBar.anchor.set(0.5, 1),
      o.addChild(this._powerBar),
      (this._powerBarMask = new PIXI.Graphics()),
      o.addChild(this._powerBarMask),
      this._powerBarMask.beginFill(0),
      this._powerBarMask.drawRect(
        -this._powerBar.width / 2,
        -this._powerBar.height,
        this._powerBar.width,
        this._powerBar.height
      ),
      (this._powerBar.mask = this._powerBarMask),
      (this._shotComplete = this._shotComplete.bind(this)),
      (this._cannon.onComplete = this._shotComplete),
      (this._frameChanged = this._frameChanged.bind(this)),
      (this._cannon.onFrameChange = this._frameChanged),
      (this._shot = this._shot.bind(this)),
      _t.playState.shotHandler.add(this._shot),
      (this._helperPoint = new PIXI.Point()),
      (this._ballSpawnPoint = new PIXI.Point(0, -43)),
      (this._shoted = !1),
      _t.pixi.ticker.add(this._update, this),
      (this._isAllowMove = !0),
      _t.playState.aimControl &&
        (_t.playState.bg.on('pointerdown', this._pointerDown, this),
        _t.playState.bg.on('pointerup', this._pointerUp, this),
        (this._isAllowMove = !1),
        (this._countTouches = 0)),
      (this.graphics = new PIXI.Graphics()),
      this.addChild(this.graphics),
      (this.sndShot = _t.assets.getSound('sndShot'))
  }
  function M(t, e) {
    i.call(this, 'Domino', Z.zOrder.defaultZ), (this.x = t), (this.y = e)
    var a = _t.assets.getSprite('domino', 'atlasGame')
    a.scale.set(0.5, 0.5), a.anchor.set(0.5, 0.5), this.addChild(a)
    var n = u.createPolygonShape(10, 50),
      s = u.createFixtureDef(n, 0.5, 0, 0.5, { item: this, dynamic: !0 }),
      o = u.createBodyDef(t, e, yt.b2_dynamicBody)
    ;(this._body = u.createBody(o, [s])), this._enableUpdate(), (this.angleUpdate = !0), (this.positionUpdate = !0)
  }
  function E(t, e, a, n, s, o) {
    i.call(this, 'Gate', Z.zOrder.defaultZ)
    var r = 0
    ;(s = void 0 != s ? s : 90),
      (o = o || !1),
      o && ((r = s), (s = 0), 'right' == a && (r = -r)),
      (this.inversed = o),
      (r = ot.toRadians(r)),
      (this.x = t),
      (this.y = e),
      (this.rotation = r),
      (this.openAngle = ot.toRadians(s)),
      (this.direction = a),
      (this.opened = !1),
      (this.rotation = r),
      (this.id = n)
    var l = _t.assets.getSprite('gate_' + a, 'atlasGame')
    l.scale.set(0.5, 0.5),
      'left' == a ? l.anchor.set(0.2, 0.5) : 'right' == a && l.anchor.set(0.8, 0.5),
      this.addChild(l)
    var h
    'left' == a ? (h = u.createPolygonShape(30, 8, 11)) : 'right' == a && (h = u.createPolygonShape(30, 8, -11))
    var y = u.createFixtureDef(h, 1, 0.1, 0.1),
      d = u.createBodyDef(t, e, yt.b2_kinematicBody, !1, !0, r)
    ;(this._body = u.createBody(d, [y])),
      i.events.on(i.EVENT_TRIGGER_PRESSED, this._onTriggerEvent, this),
      (this.sndGate = _t.assets.getSound('sndGate'))
  }
  function T(t, e, a, n) {
    i.call(this, 'Hammer', Z.zOrder.defaultZ),
      (n = n || 1),
      (this.x = t),
      (this.y = e),
      (a = ot.toRadians(a)),
      (this.rotation = a)
    var s = _t.assets.getSprite('hammer', 'atlasGame')
    s.scale.set(0.5, 0.5), s.anchor.set(0.1, 0.5), this.addChild(s)
    var o = u.createPolygonShape(12, 74, 62, 0),
      r = u.createFixtureDef(o, 0.3, 0.1, n, { item: this, dynamic: !0 }),
      l = u.createPolygonShape(59, 12, 26, 0),
      h = u.createFixtureDef(l, 0.3, 0.1, n, { item: this, dynamic: !0 }),
      y = u.createBodyDef(t, e, yt.b2_dynamicBody, !1, !0, a)
    this._body = u.createBody(y, [r, h])
    var d = _t.physWorld.GetGroundBody(),
      c = new xt()
    c.Initialize(d, this._body, this._body.GetPosition()),
      _t.physWorld.CreateJoint(c),
      this._enableUpdate(),
      (this.angleUpdate = !0),
      (this.positionUpdate = !0)
  }
  function O(t, e, a, n, s) {
    i.call(this, 'Mill', Z.zOrder.defaultZ),
      (this.x = t),
      (this.y = e),
      (this.enableMotor = a),
      (this.motorSpeed = n),
      (this.signalID = s)
    var o = _t.assets.getSprite('mill', 'atlasGame')
    o.scale.set(0.5, 0.5), o.anchor.set(0.5, 0.5), this.addChild(o)
    var r = u.createPolygonShape(150, 14),
      l = u.createFixtureDef(r, 0.5, 0, 0.2, { item: this, dynamic: !0 }),
      h = u.createPolygonShape(14, 150),
      y = u.createFixtureDef(h, 0.5, 0, 0.2, { item: this, dynamic: !0 }),
      d = u.createBodyDef(t, e, yt.b2_dynamicBody)
    ;(this._body = u.createBody(d, [l, y])), this._enableUpdate(), (this.angleUpdate = !0), (this.positionUpdate = !0)
    var c = new lt(t / _t.physScale, e / _t.physScale),
      p = new xt()
    if (
      (p.Initialize(_t.physWorld.GetGroundBody(), this._body, c),
      (this._revJoint = _t.physWorld.CreateJoint(p)),
      this.enableMotor)
    ) {
      var m = this.motorSpeed
      this._revJoint.EnableMotor(!0),
        this._revJoint.SetMotorSpeed(m),
        this._revJoint.SetMaxMotorTorque(Math.abs(m)),
        i.events.on(i.EVENT_TRIGGER_PRESSED, this._onTriggerEvent, this)
    }
  }
  function k(t, e) {
    i.call(this, 'Peg', Z.zOrder.defaultZ), (this.x = t), (this.y = e)
    var a = _t.assets.getSprite('peg', 'atlasGame')
    a.scale.set(0.5, 0.5), a.anchor.set(0.5, 0.5), this.addChild(a)
    var n = u.createCircleShape(15),
      s = u.createFixtureDef(n, 0.2, 0.1, 1, { item: this, isPeg: !0 }),
      o = u.createBodyDef(t, e, yt.b2_staticBody)
    ;(this._body = u.createBody(o, [s])),
      _t.physics.contactListener.addBeginContactListener(this._onBeginContact, this),
      (this.sndPeg = _t.assets.getSound('sndPeg'))
  }
  function L(t, e, a, n, s, o, r, l, h) {
    if ((i.call(this, 'Pivot', Z.zOrder.pivot), (this.x = t), (this.y = e), (this.type = a), 'bolt' == this.type)) {
      var y = _t.assets.getSprite('bolt', 'atlasGame')
      y.scale.set(0.5, 0.5),
        y.anchor.set(0.5, 0.5),
        this.addChild(y),
        (this.boltLowerAngle = ot.toRadians(l)),
        (this.boltUpperAngle = ot.toRadians(h))
    } else if ('gear' == this.type) {
      var d = 'gear' + s + '_',
        c = rt.generateFrameNames(d, 1, 40, '', 4),
        p = _t.assets.getTextures(c, 'atlasGame')
      ;(this._gear = new PIXI.extras.AnimatedSprite(p)),
        this._gear.anchor.set(0.5, 0.5),
        this._gear.scale.set(0.5, 0.5),
        (this._gear.animationSpeed = 1),
        (this._gear.loop = !0),
        this.addChildAt(this._gear, 0),
        (this.gearSignalID = n),
        (this.gearColor = s),
        (this.gearMaxAngle = o),
        (this.gearPower = r),
        (this.TO_DESTINATION = 1),
        (this.TO_START_ANGLE = 2),
        (this._movingTo = 0)
    }
    for (var m = [], g = new lt(t / _t.physScale, e / _t.physScale), u = _t.physWorld.GetBodyList(); null != u; ) {
      for (var x = u.GetFixtureList(); null != x; ) {
        var f = x.TestPoint(g)
        if (f) {
          m.push(u)
          break
        }
        x = x.GetNext()
      }
      u = u.GetNext()
    }
    if (m.length > 2) throw 'Too many bodies under pivot. Max is 2'
    1 == m.length && ((m[1] = m[0]), (m[0] = _t.physWorld.GetGroundBody()))
    var w = m[0],
      _ = m[1]
    if (
      (w.type != yt.b2_staticBody && ((w = _), (_ = m[0])),
      (this._revJointDef = new xt()),
      this._revJointDef.Initialize(w, _, g),
      'bolt' == this.type)
    )
      (this._revJoint = _t.physWorld.CreateJoint(this._revJointDef)),
        this._revJoint.EnableLimit(!0),
        this._revJoint.SetLimits(this.boltLowerAngle, this.boltUpperAngle)
    else if ('gear' == this.type) {
      if (
        ((this._trackBody = _),
        (this._massData = new pt()),
        this._trackBody.GetMassData(this._massData),
        (this._massData.mass = 0.1),
        this._trackBody.SetType(yt.b2_staticBody),
        (this._trackBodyStartAngle = ot.toDegrees(this._trackBody.GetAngle())),
        i.events.on(i.EVENT_TRIGGER_PRESSED, this._onTriggerEvent, this),
        (this._lowerAngle = -this._trackBody.GetAngle()),
        (this._upperAngle = ot.toRadians(this.gearMaxAngle)),
        this._lowerAngle > this._upperAngle)
      ) {
        var P = this._lowerAngle
        ;(this._lowerAngle = this._upperAngle), (this._upperAngle = P)
      }
      this.sndGear = _t.assets.getSound('sndGear')
    }
  }
  function R(t, e, a, n, s, o) {
    n = ot.toRadians(n || 0)
    var r = u.convertBodyTypeFromStringToNumber(s),
      l = 18
    i.call(this, 'Platform', Z.zOrder.platform), (this.x = t), (this.y = e), (this.rotation = n)
    var h = _t.assets.getSprite('platform', 'atlasGame')
    h.scale.set(0.5, 0.5), h.anchor.set(0.5, 0.5), (h.x = _t.rnd.realInRange(0, h.width / 2 - a / 2)), this.addChild(h)
    var y = 2,
      d = new PIXI.Graphics()
    d.lineStyle(y, 3352345, 1), d.drawRect(-a / 2, -l / 2, a, l), this.addChild(d)
    var c = u.createPolygonShape(a, l),
      p = u.createFixtureDef(c, 0.1, 0.1, o, { item: this, dynamic: !0 }),
      m = u.createBodyDef(t, e, r, !1, !0, n, !1)
    this._body = u.createBody(m, [p])
    var g = new PIXI.Graphics()
    g.beginFill(9160191, 0.4),
      g.drawRect(-a / 2, -l / 2, a, l),
      g.endFill(),
      this.addChild(g),
      (this.mask = g),
      r != yt.b2_staticBody && (this._enableUpdate(), (this.angleUpdate = !0), (this.positionUpdate = !0))
  }
  function G(t, e, a) {
    i.call(this, 'Rock', Z.zOrder.defaultZ), (this.x = t), (this.y = e)
    var n = _t.assets.getSprite('rock', 'atlasGame')
    n.scale.set(0.5, 0.5), n.anchor.set(0.5, 0.5), this.addChild(n)
    var s = u.createCircleShape(24),
      o = u.createFixtureDef(s, 0.5, 0, a, { item: this, dynamic: !0 }),
      r = u.createBodyDef(t, e, yt.b2_dynamicBody)
    ;(this._body = u.createBody(r, [o])), this._enableUpdate(), (this.angleUpdate = !0), (this.positionUpdate = !0)
  }
  function U(t, e, a, n, s) {
    i.call(this, 'Spring', Z.zOrder.defaultZ),
      (a = ot.toRadians(a)),
      (this.x = t),
      (this.y = e),
      (this.rotation = a),
      (this.type = n),
      (this.elasticity = s)
    var o = rt.generateFrameNames('spring_', 1, 8, '', 4),
      r = _t.assets.getTextures(o, 'atlasGame')
    ;(this._spring = new PIXI.extras.AnimatedSprite(r)),
      this._spring.anchor.set(0.5, 0.95),
      this._spring.scale.set(0.5, 0.5),
      (this._spring.animationSpeed = 0.5),
      (this._spring.loop = !1),
      this._spring.stop(),
      this.addChildAt(this._spring, 0)
    var l = u.createPolygonShape(14, 14),
      h = u.createFixtureDef(l, 0.1, 0.1, 0.1),
      y = u.createBodyDef(t, e, u.convertBodyTypeFromStringToNumber(this.type), !1, !0, a)
    this._body = u.createBody(y, [h])
    var d = u.createPolygonShape(4, 10, -22, -26),
      c = u.createFixtureDef(d, 1, 0, 0.2),
      p = u.createPolygonShape(4, 10, 22, -26),
      m = u.createFixtureDef(p, 1, 0, 0.2),
      g = u.createPolygonShape(48, 6, 0, -24),
      x = u.createFixtureDef(g, 1, 0, 1, this, !0),
      f = u.createPolygonShape(44, 6, 0, -30),
      w = u.createFixtureDef(f, 1, 0, 1, { item: this, isSensor: !1 }, !1),
      _ = u.createPolygonShape(14, 11, 0, -15),
      P = u.createFixtureDef(_, 0.1, 0.1, 0.1, this, 'dynamic' == n),
      v = u.createBodyDef(t, e, u.convertBodyTypeFromStringToNumber(this.type), !1, !0, a)
    if (((this._body2 = u.createBody(v, [c, m, x, w, P])), 'dynamic' == n)) {
      var S = new ft()
      S.Initialize(this._body, this._body2, new lt(t / _t.physScale, e / _t.physScale))
      _t.physWorld.CreateJoint(S)
    }
    _t.physics.contactListener.addBeginContactListener(this._onBeginContact, this),
      'dynamic' == this.type && (this._enableUpdate(), (this.angleUpdate = !0), (this.positionUpdate = !0)),
      (this.sndSpring = _t.assets.getSound('sndSpring'))
  }
  function F(t, e) {
    i.call(this, 'Star', Z.zOrder.defaultZ), (this.x = t), (this.y = e)
    var a = rt.generateFrameNames('star_', 1, 52, '', 4),
      n = _t.assets.getTextures(a, 'atlasGame'),
      s = new PIXI.extras.AnimatedSprite(n)
    s.anchor.set(0.5, 0.5),
      s.scale.set(0.5, 0.5),
      (s.animationSpeed = 1),
      (s.loop = !0),
      s.play(),
      this.addChildAt(s, 0)
    var o = u.createCircleShape(10),
      r = u.createFixtureDef(o, 0.2, 0.1, 1, { item: this, starSensor: !0 }, !0),
      l = u.createBodyDef(t, e, yt.b2_staticBody)
    ;(this._body = u.createBody(l, [r])),
      _t.physics.contactListener.addBeginContactListener(this._onBeginContact, this),
      (this.sndStar = _t.assets.getSound('sndStar'))
  }
  function V(t, e) {
    i.call(this, 'Stopper', Z.zOrder.defaultZ), (this.x = t), (this.y = e)
    var a = _t.assets.getSprite('stopper', 'atlasGame')
    a.scale.set(0.5, 0.5), a.anchor.set(0.5, 0.5), this.addChild(a)
    var n = u.createCircleShape(5),
      s = u.createFixtureDef(n, 0.2, 0.1, 1, this),
      o = u.createBodyDef(t, e, yt.b2_staticBody)
    this._body = u.createBody(o, [s])
  }
  function X(t, e, a, n, s) {
    i.call(this, 'Swings', Z.zOrder.peg),
      (a = ot.toRadians(a)),
      (this.x = t),
      (this.y = e),
      (this.rotation = a),
      (this.lowerAngle = ot.toRadians(n)),
      (this.upperAngle = ot.toRadians(s))
    var o = _t.assets.getSprite('swings', 'atlasGame')
    o.scale.set(0.5, 0.5), o.anchor.set(0.5, 0.83), this.addChild(o)
    var r = u.createPolygonShape(60, 11, 0, 0.5),
      l = u.createFixtureDef(r, 1, 0, 0.4, this),
      h = u.createPolygonShape(11, 30, 0, -20),
      y = u.createFixtureDef(h, 1, 0, 0.4, this),
      d = u.createBodyDef(t, e, yt.b2_dynamicBody, !1, !0, a)
    this._body = u.createBody(d, [l, y])
    var c = _t.physWorld.GetGroundBody(),
      p = new xt()
    p.Initialize(c, this._body, this._body.GetPosition())
    var m = _t.physWorld.CreateJoint(p)
    m.EnableLimit(!0),
      m.SetLimits(this.lowerAngle - a, this.upperAngle - a),
      this._enableUpdate(),
      (this.angleUpdate = !0),
      (this.positionUpdate = !0)
  }
  function N(t, e, a, n, s, o) {
    i.call(this, 'Switcher', Z.zOrder.switcher),
      (a = ot.toRadians(a)),
      (this.x = t),
      (this.y = e),
      (this.rotation = a),
      (this.type = n),
      (this.signalID = s),
      (this.color = o)
    var r = this.type + this.color + '_',
      l = rt.generateFrameNames(r, 1, 6, '', 4),
      h = _t.assets.getTextures(l, 'atlasGame')
    ;(this._switcher = new PIXI.extras.AnimatedSprite(h)),
      this._switcher.anchor.set(0.5, 1),
      this._switcher.scale.set(0.5, 0.5),
      (this._switcher.animationSpeed = 1),
      (this._switcher.loop = !1),
      this.addChildAt(this._switcher, 0),
      (this._on = !1)
    var y = u.createPolygonShape(30, 8, 0, -12),
      d = u.createFixtureDef(y, 1, 0, 0.1, { item: this, isSensor: !0 }, !0),
      c = u.createPolygonShape(40, 10, 0, -4),
      p = u.createFixtureDef(c, 1, 0, 0.1, this),
      m = u.createBodyDef(t, e, yt.b2_staticBody, !1, !0, a)
    ;(this._body = u.createBody(m, [d, p])),
      _t.physics.contactListener.addBeginContactListener(this._onBeginContact, this),
      'button' == this.type && _t.physics.contactListener.addEndContactListener(this._onEndContact, this),
      (this._countContacts = 0),
      (this.sndSwitcher = _t.assets.getSound('sndSwitcher'))
  }
  function W(t, e, a, n, s) {
    i.call(this, 'Teleport', Z.zOrder.teleport),
      (n = ot.toRadians(n)),
      (this.x = t),
      (this.y = e),
      (this.rotation = n),
      (this.id = a)
    var o = rt.generateFrameNames('teleport' + s + '_', 1, 20, '', 4),
      r = _t.assets.getTextures(o, 'atlasGame'),
      l = new PIXI.extras.AnimatedSprite(r)
    l.anchor.set(0.5, 0.3),
      l.scale.set(0.5, 0.5),
      (l.animationSpeed = 0.5),
      (l.loop = !0),
      l.play(),
      this.addChildAt(l, 0)
    var h = u.createPolygonShape(6, 60, -20, 12),
      y = u.createFixtureDef(h, 1, 0, 0.2),
      d = u.createPolygonShape(6, 60, 20, 12),
      c = u.createFixtureDef(d, 1, 0, 0.2),
      p = u.createPolygonShape(44, 6, 0, 39),
      m = u.createFixtureDef(p, 1, 0, 1),
      g = u.createPolygonShape(44, 6),
      x = u.createFixtureDef(g, 1, 0, 1, { item: this, teleportSensor: !0 }, !0),
      f = u.createBodyDef(t, e, yt.b2_staticBody, !0, !0, n)
    ;(this._body = u.createBody(f, [y, c, m, x])),
      _t.physics.contactListener.addBeginContactListener(this._onBeginContact, this),
      _t.physics.contactListener.addEndContactListener(this._onEndContact, this),
      i.events.on(i.EVENT_TELEPORTATION, this._teleportation, this),
      (this._inUse = !1),
      (this.sndTeleport = _t.assets.getSound('sndTeleport'))
  }
  function Y(t, e, a, n, s) {
    i.call(this, 'Tube', Z.zOrder.defaultZ),
      (n = n || 0),
      (s = s || 0),
      (a = ot.toRadians(a)),
      (this.x = t),
      (this.y = e),
      (this.rotation = a)
    var o = ot.vectorVelocityRad(a, 100)
    this._force = new lt(o.x, o.y)
    var r = _t.assets.getSprite('tube', 'atlasGame')
    r.scale.set(0.5, 0.5), r.anchor.set(0.5, 0.5), this.addChild(r)
    var l = n + s,
      h = u.createPolygonShape(50, 6, 0, -13.5),
      y = u.createFixtureDef(h, 1, 0.1, 1),
      d = u.createPolygonShape(50, 6, 0, 13.5),
      c = u.createFixtureDef(d, 1, 0.1, 1),
      p = u.createPolygonShape(50 + l, 10, -n / 2 + s / 2),
      m = u.createFixtureDef(p, 1, 0.1, 1, { item: this, tubeSensor: !0 }, !0),
      g = u.createBodyDef(t, e, yt.b2_staticBody, !1, !0, a)
    ;(this._body = u.createBody(g, [c, m, y])), this._enableUpdate()
  }
  function z(t) {
    if ((i.call(this, 'Tutorial', Z.zOrder.tutorial), 1 == t)) {
      var e = _t.assets.getSprite('tutorial1_1', 'atlasUI')
      e.scale.set(0.5, 0.5), e.anchor.set(0.5, 0.5), (e.x = 380), (e.y = 150), this.addChild(e)
      var a = _t.assets.getSprite('tutorial1_2', 'atlasUI')
      a.scale.set(0.5, 0.5), a.anchor.set(0.5, 0.5), (a.x = 300), (a.y = 450), this.addChild(a)
    }
  }
  function H(t, e, a) {
    i.call(this, 'WightBall', Z.zOrder.peg), (a = a || 2), (this.x = t), (this.y = e)
    var n = _t.assets.getSprite('weightBall', 'atlasGame')
    n.scale.set(0.5, 0.5), n.anchor.set(0.5, 0.5), this.addChild(n)
    var s = u.createCircleShape(40),
      o = u.createFixtureDef(s, 0.2, 0.1, a, this),
      r = u.createBodyDef(t, e, yt.b2_dynamicBody)
    ;(this._body = u.createBody(r, [o])), this._enableUpdate(), (this.angleUpdate = !0), (this.positionUpdate = !0)
  }
  function j() {
    ;(this.currLevel = 1),
      (this.lastOpened = _t.storage.get(_t.SAVE_KEY_LAST_OPENED) || 1),
      (this.totalLevels = wt.length)
  }
  function J() {
    PIXI.Container.call(this), _t.pixi.stage.addChild(this)
    var t = new PIXI.Graphics()
    t.beginFill(0), t.drawRect(0, 0, _t.gameWidth0, _t.gameHeight0), t.endFill(), this.addChild(t)
  }
  function K() {
    if (_t.menuState) throw new Error('MenuState singelton!')
    ;(_t.menuState = this), PIXI.Container.call(this), _t.pixi.stage.addChildAt(this, 0)
    var t = _t.assets.getSprite('bg_menu')
    t.scale.set(0.5, 0.5),
      this.addChild(t),
      (this._onBtnsLevelClick = this._onBtnsLevelClick.bind(this)),
      (this._menuDialog = new b(this._onClick, this)),
      this.addChild(this._menuDialog),
      (this._levelsDialog = new S(this._onBtnsLevelClick, this._onClick, this)),
      this.addChild(this._levelsDialog),
      (this._creditsDialog = new _(this._onClick, this)),
      this.addChild(this._creditsDialog),
      (this.sndButton = _t.assets.getSound('sndButton'))
  }
  function Z() {
    if (_t.playState) throw new Error('MenuState singelton!')
    ;(_t.playState = this),
      PIXI.Container.call(this),
      _t.pixi.stage.addChildAt(this, 0),
      (this.aimControl = !_t.device.desktop && !_t.device.chromeOS)
    var t = Math.ceil(_t.levelMng.currLevel / 15)
    ;(this.bg = _t.assets.getSprite('bg_' + t)),
      this.bg.scale.set(0.5, 0.5),
      (this.bg.interactive = !0),
      this.aimControl || this.bg.on('pointerdown', this._onStageClick, this),
      this.addChild(this.bg)
    var e = new PIXI.Graphics()
    ;(e.alpha = 0.1),
      e.beginFill(0),
      e.drawRect(0, 0, _t.gameWidth0, _t.gameHeight0),
      e.endFill(),
      this.addChild(e),
      (this.shotHandler = new c()),
      (this._onGameLayerChildAdded = this._onGameLayerChildAdded.bind(this)),
      (this.gameLayer = new PIXI.Container()),
      (this.gameLayer.onChildrenChange = this._onGameLayerChildAdded),
      this.addChild(this.gameLayer),
      (this.ballLayer = new PIXI.Container()),
      (this.ballLayer.zOrder = Z.zOrder.ball),
      this.gameLayer.addChild(this.ballLayer),
      (this.uiLayer = new PIXI.Container()),
      this.addChild(this.uiLayer),
      this._createUI(),
      (this._levelComplete = new v(this._onBtnsClick, this)),
      this._levelComplete.hide(),
      (this._isComplete = !1),
      _t.levelMng.create(),
      _t.levelMng.currLevel >= 1 && _t.levelMng.currLevel <= 2 && this.gameLayer.addChild(new z(_t.levelMng.currLevel)),
      (this.sndButton = _t.assets.getSound('sndButton')),
      this.aimControl &&
        ((this.aim = _t.assets.getSprite('aim')),
        this.aim.scale.set(0.5, 0.5),
        this.aim.anchor.set(0.5, 0.5),
        (this.aim.visible = !1),
        this.addChild(this.aim))
  }
  function q() {
    at(),
      _t.inited
        ? ((_t.pixi.renderer.autoResize = !0),
          _t.pixi.renderer.resize(_t.canvasWidth, _t.canvasHeight),
          _t.pixi.stage.scale.set(_t.scale, _t.scale),
          _t.physics.enabledDD && _t.physics.updateCanvasSize())
        : $(),
      _t.resizeHandler && _t.resizeHandler.call(),
      _t.imgRotate &&
        (_t.imgRotate.position.set(_t.canvasWidth / 2, _t.canvasHeight / 2),
        (_t.imgRotate.scale.x = _t.imgRotate.scale.y = _t.scale))
  }
  function $() {
    if (
      ((_t.device = new Device()),
      (_t.audioEnabled = _t.device.canPlayAudio('ogg')),
      _t.device.android && !_t.device.chrome)
    ) {
      var t = document.createElement('p'),
        e = document.createTextNode(
          "This game doesn't work correctly in default Android browser. Please install Chrome on your device."
        )
      return t.appendChild(e), void document.getElementById('msg').appendChild(t)
    }
    var i = document.getElementById('msg')
    i.parentNode.removeChild(i),
      (_t.pixi = new PIXI.Application(_t.canvasWidth, _t.canvasHeight, { antialias: !0 })),
      (_t.pixi.renderer.backgroundColor = 0),
      _t.pixi.stage.scale.set(_t.scale, _t.scale),
      document.body.appendChild(_t.pixi.view),
      (document.ontouchstart = function (t) {
        t.preventDefault()
      }),
      document.body.addEventListener(
        'selectstart',
        function (t) {
          t.preventDefault()
        },
        !1
      ),
      console.log(_t.pixi.renderer.view.width, _t.pixi.renderer.view.height),
      (_t.physics = new u(!1)),
      (_t.currLevelDebug = 5),
      (_t.browserEvents = new o()),
      _t.browserEvents.on('onResize', q),
      _t.browserEvents.on('onOrientationChange', q),
      (_t.storage = new g())
    var n = []
    n.push(_t.SAVE_KEY_LAST_OPENED, _t.SAVE_KEY_MUSIC, _t.SAVE_KEY_SOUND)
    for (var r = 1; r <= 30; r++) n.push(_t.SAVE_KEY_STARS + r)
    _t.storage.read(n), (_t.assets = new s(_t)), (_t.rnd = new x([(Date.now() * Math.random()).toString()]))
    try {
      _t.fps = new FPSMeter(document.body)
    } catch (t) {}
    if (
      ((_t.levelMng = new j()),
      (_t.shutter = new J()),
      _t.pixi.stage.addChild((_t.preloader = new a())),
      (PIXI.loader.baseUrl = 'assets'),
      PIXI.loader
        .add('atlasUI', 'images/atlasUI.json')
        .add('atlasGame', 'images/atlasGame.json')
        .add('splash', 'images/splash.png')
        .add('bg_menu', 'images/bg_menu.png')
        .add('bg_1', 'images/bg_1.png')
        .add('bg_2', 'images/bg_2.png'),
      _t.audioEnabled)
    ) {
      var l = _t.device.iOS ? '.m4a' : '.ogg'
      PIXI.loader
        .add('sndButton', 'audio/button' + l)
        .add('sndBallInBasket', 'audio/ball_in_basket' + l)
        .add('sndGear', 'audio/gear' + l)
        .add('sndShot', 'audio/shot' + l)
        .add('sndSpring', 'audio/spring' + l)
        .add('sndStar', 'audio/star' + l)
        .add('sndSwitcher', 'audio/switcher' + l)
        .add('sndTeleport', 'audio/teleport' + l)
        .add('sndTheme', 'audio/theme' + l)
        .add('sndWin', 'audio/win' + l)
    }
    PIXI.loader.on('progress', Q).load(tt), (_t.inited = !0)
  }
  function Q(t, e) {
    if ((console.log('loading: ' + e.url), _t.preloader)) {
      var i = Math.round(t.progress)
      _t.preloader.setLoading(i)
    }
  }
  function tt() {
    _t.preloader ? (_t.preloader.setLoading(100), _t.preloader.loadedCallback(et)) : it()
  }
  function et() {
    ;(_t.splash = new n()), _t.splash.runAfter(it), _t.pixi.stage.addChild(_t.splash)
  }
  function it() {
    if (
      (_t.preloader && (_t.preloader.destroy(), (_t.preloader = null)),
      _t.splash && (_t.splash.destroy(), (_t.splash = null)),
      rt.atHome([]))
    ) {
      _t._checkAudio()
      var t = 1
      1 == t ? new K() : 2 == t && ((_t.levelMng.currLevel = _t.currLevelDebug), new Z()), _t.shutter.hide()
    }
  }
  function at() {
    var e = t.innerWidth,
      i = t.innerHeight,
      a = nt(_t.gameWidth0 / _t.gameHeight0, e, i)
    ;(_t.gameWidth1 = a.width),
      (_t.gameHeight1 = a.height),
      (_t.scale = _t.gameWidth1 / _t.gameWidth0),
      (_t.gameMaxWidth1 = _t.gameMaxWidth0 * _t.scale),
      (_t.gameMaxHeight1 = _t.gameMaxHeight0 * _t.scale),
      (_t.canvasWidth = _t.gameMaxWidth1 > e ? e : _t.gameMaxWidth1),
      (_t.canvasHeight = _t.gameMaxHeight1 > i ? i : _t.gameMaxHeight1)
    var n = document.body
    ;(n.style.width = _t.canvasWidth + 'px'),
      (n.style.height = _t.canvasHeight + 'px'),
      (n.style.marginLeft = e / 2 - _t.canvasWidth / 2 + 'px'),
      (n.style.marginTop = i / 2 - _t.canvasHeight / 2 + 'px')
  }
  function nt(t, e, i) {
    var a = Math.floor(e),
      n = Math.floor(i)
    return (
      t < 1 && e >= i
        ? (a = Math.floor(i * t))
        : t >= 1 && e <= i
        ? (n = Math.floor(e / t))
        : Math.floor(i * t) > e
        ? (n = Math.floor(e / t))
        : (a = Math.floor(i * t)),
      { width: a, height: n }
    )
  }
  ;(e.prototype = Object.create(PIXI.Sprite.prototype)),
    (e.prototype.constructor = e),
    (e.prototype.destroy = function () {
      this.disposed ||
        ((this.disposed = !0),
        this.parent && this.parent.removeChild(this),
        this.onClick.dispose(),
        (this.onClick = null),
        this.onDown.dispose(),
        (this.onDown = null),
        this.onUp.dispose(),
        (this.onUp = null),
        this.onOut.dispose(),
        (this.onOut = null),
        this._label && (this._label.destroy(), (this._label = null)),
        (this.mousedown = this.touchstart = null),
        (this.mouseup = this.touchend = this.mouseupoutside = this.touchendoutside = null),
        (this.mouseover = null),
        (this.mouseout = null),
        (this.click = null),
        (this.interactive = !1),
        (this._cacheAnchorY = null))
    }),
    (e.prototype.setOpenURL = function (e) {
      this.disposed ||
        this.onClick.add(function (i) {
          t.open(e, '_blank')
        })
    }),
    (e.prototype.setIcon = function (t, e, i, a, n) {
      if (!this.disposed) {
        ;(i = i || 0), (a = a || 0), (n = n || 1)
        var s
        if ('string' == typeof t) s = this.app.assets.getTexture(t, e)
        else if (t instanceof PIXI.Texture) s = t
        else if (t instanceof PIXI.Sprite) this.icon = t
        else if (null == t && this.icon) return this.removeChild(this.icon), void (this.icon = null)
        s && (this.icon ? this.icon.setTexture(s) : (this.icon = new PIXI.Sprite(s))),
          this.icon.anchor.set(0.5, 0.5),
          (this.icon.x = i),
          (this.icon.y = a),
          this.icon.scale.set(n, n),
          this.addChild(this.icon)
      }
    }),
    (e.prototype.setLabel = function (t, e, i, a) {
      ;(t = t || ''),
        (i = i || 0),
        (a = a || 0),
        this._label || ((this._label = new PIXI.Text(t, e)), this.addChild(this._label)),
        (this._label.text = t),
        e && (this._label.style = e),
        (this._label.x = this.width / 2 - this._label.width / 2 + i),
        (this._label.y = this.height / 2 - this._label.height / 2 + a)
    }),
    (e.prototype._mouseOver = function (t) {
      this.disposed || ((this.isOver = !0), this.isDown || (this.tint = this.overTint))
    }),
    (e.prototype._mouseOut = function (t) {
      this.disposed || ((this.isOver = !1), this.onOut.call(t), this.isDown || (this.tint = this.upTint))
    }),
    (e.prototype._mouseDown = function (t) {
      this.disposed || ((this.isDown = !0), (this.tint = this.downTint), this.onDown.call(t))
    }),
    (e.prototype._mouseUp = function (t) {
      this.disposed ||
        ((this.isDown = !1), this.isOver ? (this.tint = this.overTint) : (this.tint = this.upTint), this.onUp.call(t))
    }),
    (e.prototype._clickTap = function (t) {
      this.disposed || this.onClick.call(t)
    }),
    Object.defineProperty(e.prototype, 'enable', {
      get: function () {
        return this.interactive
      },
      set: function (t) {
        this.disposed ||
          ((this.interactive = t),
          t === !1 ? ((this.isOver = !1), this._mouseUp(), (this.tint = this.disableTint)) : (this.tint = this.upTint))
      }
    }),
    (e.generateButton = function (t, i, a, n) {
      var s = _t.assets.getTexture(t, i)
      return new e(s, a, n)
    }),
    (i.prototype = Object.create(PIXI.Container.prototype)),
    (i.prototype.constructor = i),
    (i.prototype.destroy = function () {
      PIXI.Container.prototype.destroy.call(this),
        this._body && _t.physWorld.DestroyBody(this._body),
        (this._body = null),
        _t.pixi.ticker.remove(this._update, this)
    }),
    (i.prototype.setPosition = function (t, e) {
      if (this._body) {
        var i = this
        _t.physics.doIt(function () {
          i._body.SetPosition(new lt(t / _t.physScale, e / _t.physScale))
        })
      }
      this.position.set(t, e)
    }),
    (i.prototype._enableUpdate = function () {
      _t.pixi.ticker.add(this._update, this)
    }),
    (i.prototype._disableUpdate = function () {
      _t.pixi.ticker.remove(this._update, this)
    }),
    (i.prototype._update = function () {
      this.angleUpdate && (this.rotation = this._body.GetAngle()),
        this.positionUpdate &&
          ((this.x = this._body.GetPosition().x * _t.physScale), (this.y = this._body.GetPosition().y * _t.physScale)),
        this.y > 3e3 &&
          (console.log('Item ' + this.name + ' has reached position of y at 3000. The item has been destroyed.'),
          this.destroy())
    }),
    (i.prototype.GetBody = function () {
      return this._body
    }),
    (i.events = new EventEmitter()),
    (i.EVENT_TRIGGER_PRESSED = 'TriggerPressed'),
    (i.EVENT_TELEPORTATION = 'Teleportation'),
    (a.prototype = Object.create(PIXI.Container.prototype)),
    (a.prototype.constructor = a),
    (a.prototype.setLoading = function (t) {
      this._loaded = t
    }),
    (a.prototype.loadedCallback = function (t) {
      this._loadedCB = t
    }),
    (a.prototype._update = function () {
      this._curr < this._loaded && (this._curr = Math.round(this._curr + 2 * _t.pixi.ticker.deltaTime)),
        this._curr > this._loaded && (this._curr = this._loaded),
        (this._txtLoading.text = 'Loading ' + this._curr + '%'),
        100 == this._curr &&
          (_t.pixi.ticker.remove(this._update, this), this._loadedCB && setTimeout(this._loadedCB, 500))
    }),
    (n.prototype = Object.create(PIXI.Container.prototype)),
    (n.prototype.constructor = n),
    (n.prototype.runAfter = function (t, e) {
      ;(e = void 0 != e ? e : 1e3), setTimeout(t, e)
    }),
    (s.prototype.constructor = s),
    (s.prototype.getTexture = function (t, e) {
      return e ? PIXI.loader.resources[e].textures[t] : PIXI.utils.TextureCache[t]
    }),
    (s.prototype.getTextures = function (t, e) {
      var i
      i = e ? PIXI.loader.resources[e].textures : PIXI.utils.TextureCache
      for (var a = [], n = 0; n < t.length; n++) a.push(i[t[n]])
      return a
    }),
    (s.prototype.getSprite = function (t, e, i) {
      var a = new PIXI.Sprite(this.getTexture(t, e))
      return i && a.anchor.set(0.5, 0.5), a
    }),
    (s.prototype.getSound = function (t) {
      return 0 == _t.audioEnabled ? null : PIXI.loader.resources[t].sound
    }),
    (o.prototype.constructor = o),
    (o.prototype._onVisibilityChange = function (t) {
      t.preventDefault(),
        (this._event.originalEvent = t),
        (this._event.type = document.hidden === !1 ? 'onPageShow' : 'onPageHide'),
        this.emit(this._event)
    }),
    (o.prototype._onWebkitVisibilityChange = function (t) {
      t.preventDefault(),
        (this._event.originalEvent = t),
        (this._event.type = document.webkitHidden === !1 ? 'onPageShow' : 'onPageHide'),
        this.emit(this._event)
    }),
    (o.prototype._onPageShow = function (t) {
      t.preventDefault(), (this._event.originalEvent = t), (this._event.type = 'onPageShow'), this.emit(this._event)
    }),
    (o.prototype._onPageHide = function (t) {
      t.preventDefault(), (this._event.originalEvent = t), (this._event.type = 'onPageHide'), this.emit(this._event)
    }),
    (o.prototype._onFocus = function (t) {
      t.preventDefault(), (this._event.originalEvent = t), (this._event.type = 'onFocusGet'), this.emit(this._event)
    }),
    (o.prototype._onBlur = function (t) {
      t.preventDefault(), (this._event.originalEvent = t), (this._event.type = 'onFocusLost'), this.emit(this._event)
    }),
    (o.prototype._onResize = function (t) {
      t.preventDefault(), (this._event.originalEvent = t), (this._event.type = 'onResize'), this.emit(this._event)
      var e = this._getOrientation()
      this.orientation !== e && ((this._event.orientation = this.orientation = e), this._onOrientationChange(t))
    }),
    (o.prototype._onOrientationChange = function (t) {
      t.preventDefault(),
        (this._event.originalEvent = t),
        (this._event.type = 'onOrientationChange'),
        (this._event.orientation = this.orientation = this._getOrientation()),
        this.emit(this._event)
    }),
    (o.prototype._getOrientation = function () {
      return t.innerWidth > t.innerHeight ? 'landscape' : 'portrait'
    }),
    (EventTarget = function () {
      var t = {}
      ;(this.addEventListener = this.on =
        function (e, i) {
          void 0 === t[e] && (t[e] = []), t[e].indexOf(i) === -1 && t[e].push(i)
        }),
        (this.dispatchEvent = this.emit =
          function (e) {
            if (t[e.type] && t[e.type].length) for (var i = 0, a = t[e.type].length; i < a; i++) t[e.type][i](e)
          }),
        (this.removeEventListener = this.off =
          function (e, i) {
            var a = t[e].indexOf(i)
            a !== -1 && t[e].splice(a, 1)
          }),
        (this.removeAllEventListeners = function (e) {
          var i = t[e]
          i && (i.length = 0)
        })
    }),
    (r.prototype = Object.create(PIXI.Sprite.prototype)),
    (r.prototype.constructor = r),
    (r.prototype.destroy = function () {
      this.disposed ||
        ((this.disposed = !0),
        this.parent && this.parent.removeChild(this),
        this.onClick.dispose(),
        (this.onClick = null),
        this.onDown.dispose(),
        (this.onDown = null),
        this.onUp.dispose(),
        (this.onUp = null),
        this.onOut.dispose(),
        (this.onOut = null),
        (this.up = null),
        (this.over = null),
        (this.down = null),
        (this.mousedown = this.touchstart = null),
        (this.mouseup = this.touchend = this.mouseupoutside = this.touchendoutside = null),
        (this.mouseover = null),
        (this.mouseout = null),
        (this.click = null),
        (this.interactive = !1),
        (this._cacheAnchorY = null))
    }),
    (r.prototype.setOpenURL = function (e) {
      this.disposed ||
        this.onClick.add(function (i) {
          t.open(e, '_blank')
        })
    }),
    (r.prototype._mouseOver = function (t) {
      this.disposed ||
        ((this.isOver = !0),
        this.isDown ||
          (this.over ? (this.texture = this.over) : ((this._cacheAnchorY = this.anchor.y), (this.anchor.y -= 0.01))))
    }),
    (r.prototype._mouseOut = function (t) {
      this.disposed ||
        ((this.isOver = !1),
        this.onOut.call(t),
        this.isDown ||
          ((this.texture = this.up),
          this._cacheAnchorY && ((this.anchor.y = this._cacheAnchorY), (this._cacheAnchorY = null))))
    }),
    (r.prototype._mouseDown = function (t) {
      this.disposed || ((this.isDown = !0), this.down && (this.texture = this.down), this.onDown.call(t))
    }),
    (r.prototype._mouseUp = function (t) {
      this.disposed ||
        ((this.isDown = !1),
        this.isOver
          ? this.over
            ? (this.texture = this.over)
            : (this.anchor.y = this._cacheAnchorY - 0.01)
          : ((this.texture = this.up),
            this._cacheAnchorY && ((this.anchor.y = this._cacheAnchorY), (this._cacheAnchorY = null))),
        this.onUp.call(t))
    }),
    (r.prototype._clickTap = function (t) {
      this.disposed || this.onClick.call(t)
    }),
    Object.defineProperty(r.prototype, 'enable', {
      get: function () {
        return this.interactive
      },
      set: function (t) {
        this.disposed || ((this.interactive = t), t === !1 && ((this.isOver = !1), this._mouseUp()))
      }
    }),
    (r.generateButton = function (t, e, i, a) {
      var n, s, o
      n = _t.assets.getTexture(t + 'up', e)
      try {
        s = _t.assets.getTexture(t + 'over', e)
      } catch (t) {}
      try {
        o = _t.assets.getTexture(t + 'down', e)
      } catch (t) {}
      return new r(n, s, o, i, a)
    }),
    (l.prototype = Object.create(e.prototype)),
    (l.prototype.constructor = l),
    (l.prototype.setLocked = function (t) {
      if (((this.enable = !t), t)) {
        this.alpha = 0.5
        for (var e = 0; e < 3; e++) this._stars[e].visible = !1
      } else {
        for (var i = _t.storage.get(_t.SAVE_KEY_STARS + this.num), a = 0; a < 3; a++)
          this._stars[a].visible = a + 1 <= i
        this.alpha = 1
      }
    }),
    (h.prototype = Object.create(PIXI.Container.prototype)),
    (h.prototype.constructor = l),
    (h.prototype._onClick = function (t) {
      t.target == this._on ? (this.on = !1) : t.target == this._off && (this.on = !0),
        (t.target = this),
        (t.isOn = this.on),
        this._callback.call(this._callbackScope, t)
    }),
    Object.defineProperty(h.prototype, 'on', {
      get: function () {
        return this._on.visible
      },
      set: function (t) {
        this.disposed || ((this._on.visible = t), (this._off.visible = !t))
      }
    }),
    (y.__id = 0),
    (y.prototype.add = function (t) {
      var e = this._arr.indexOf(t)
      return e >= 0
        ? void (this.throwIfIn && new Error('Item already in collection. [' + this.name + '].'))
        : void (this._arr[this._arr.length] = t)
    }),
    (y.prototype.remove = function (t) {
      var e = this._arr.indexOf(t)
      return e < 0
        ? void (this.throwIfNotIn && new Error('There is not item in collection. [' + this.name + '].'))
        : void this._arr.splice(e, 1)
    }),
    (y.prototype.at = function (t) {
      return (
        t < 0
          ? (this.throwIfOut && new Error('Index is lower than zero. [' + this.name + '].'), (t = 0))
          : t >= this._arr.length &&
            (this.throwIfOut && new Error('Index is higher than total. [' + this.name + '].'),
            (t = this._arr.length - 1)),
        this._arr[t]
      )
    }),
    (y.prototype.first = function () {
      return this._arr[0]
    }),
    (y.prototype.last = function () {
      return this._arr[this._arr.length - 1]
    }),
    (y.prototype.getByProperty = function (t, e) {
      if (null == t || null == e) return null
      for (var i = this.total(), a = 0; a < i; a++) {
        var n = this._arr[a]
        if (n[t] && n[t] == e) return n
      }
      return null
    }),
    (y.prototype.has = function (t) {
      return this._arr.indexOf(t) >= 0
    }),
    (y.prototype.clear = function () {
      this._arr.splice(0, this._arr.length)
    }),
    (y.prototype.total = function () {
      return this._arr.length
    }),
    (d.prototype = Object.create(Box2D.Dynamics.b2ContactListener.prototype)),
    (d.prototype.constructor = d),
    (d.prototype.BeginContact = function (t) {
      this._ee.emit(this._eventNameBeginContact, t)
    }),
    (d.prototype.EndContact = function (t) {
      this._ee.emit(this._eventNameEndContact, t)
    }),
    (d.prototype.addBeginContactListener = function (t, e) {
      this._ee.on(this._eventNameBeginContact, t, e)
    }),
    (d.prototype.removeBeginContactListener = function (t, e) {
      this._ee.off(this._eventNameBeginContact, t, e)
    }),
    (d.prototype.addEndContactListener = function (t, e) {
      this._ee.on(this._eventNameEndContact, t, e)
    }),
    (d.prototype.removeEndContactListener = function (t, e) {
      this._ee.off(this._eventNameEndContact, t, e)
    }),
    (Device = function () {
      ;(this.patchAndroidClearRectBug = !1),
        (this.desktop = !1),
        (this.iOS = !1),
        (this.cocoonJS = !1),
        (this.ejecta = !1),
        (this.android = !1),
        (this.chromeOS = !1),
        (this.linux = !1),
        (this.macOS = !1),
        (this.windows = !1),
        (this.canvas = !1),
        (this.file = !1),
        (this.fileSystem = !1),
        (this.localStorage = !1),
        (this.webGL = !1),
        (this.worker = !1),
        (this.touch = !1),
        (this.mspointer = !1),
        (this.css3D = !1),
        (this.pointerLock = !1),
        (this.typedArray = !1),
        (this.vibration = !1),
        (this.quirksMode = !1),
        (this.arora = !1),
        (this.chrome = !1),
        (this.epiphany = !1),
        (this.firefox = !1),
        (this.ie = !1),
        (this.ieVersion = 0),
        (this.trident = !1),
        (this.tridentVersion = 0),
        (this.mobileSafari = !1),
        (this.midori = !1),
        (this.opera = !1),
        (this.safari = !1),
        (this.webApp = !1),
        (this.silk = !1),
        (this.audioData = !1),
        (this.webAudio = !1),
        (this.ogg = !1),
        (this.opus = !1),
        (this.mp3 = !1),
        (this.wav = !1),
        (this.m4a = !1),
        (this.webm = !1),
        (this.iPhone = !1),
        (this.iPhone4 = !1),
        (this.iPad = !1),
        (this.pixelRatio = 0),
        (this.littleEndian = !1),
        this._checkAudio(),
        this._checkBrowser(),
        this._checkCSS3D(),
        this._checkDevice(),
        this._checkFeatures(),
        this._checkOS()
    }),
    (Device.prototype = {
      _checkOS: function () {
        var t = navigator.userAgent
        ;/Android/.test(t)
          ? (this.android = !0)
          : /CrOS/.test(t)
          ? (this.chromeOS = !0)
          : /iP[ao]d|iPhone/i.test(t)
          ? (this.iOS = !0)
          : /Linux/.test(t)
          ? (this.linux = !0)
          : /Mac OS/.test(t)
          ? (this.macOS = !0)
          : /Windows/.test(t) && (this.windows = !0),
          (this.windows || this.macOS || (this.linux && this.silk === !1)) && (this.desktop = !0)
      },
      _checkFeatures: function () {
        this.canvas = !!t.CanvasRenderingContext2D
        try {
          this.localStorage = !!localStorage.getItem
        } catch (t) {
          this.localStorage = !1
        }
        ;(this.file = !!(t.File && t.FileReader && t.FileList && t.Blob)),
          (this.fileSystem = !!t.requestFileSystem),
          (this.webGL = (function () {
            try {
              var e = document.createElement('canvas')
              return !!t.WebGLRenderingContext && (e.getContext('webgl') || e.getContext('experimental-webgl'))
            } catch (t) {
              return !1
            }
          })()),
          null === this.webGL || this.webGL === !1 ? (this.webGL = !1) : (this.webGL = !0),
          (this.worker = !!t.Worker),
          ('ontouchstart' in document.documentElement ||
            (t.navigator.maxTouchPoints && t.navigator.maxTouchPoints > 1)) &&
            (this.touch = !0),
          (t.navigator.msPointerEnabled || t.navigator.pointerEnabled) && (this.mspointer = !0),
          (this.pointerLock =
            'pointerLockElement' in document ||
            'mozPointerLockElement' in document ||
            'webkitPointerLockElement' in document),
          (this.quirksMode = 'CSS1Compat' !== document.compatMode)
      },
      _checkBrowser: function () {
        var e = navigator.userAgent
        ;/Arora/.test(e)
          ? (this.arora = !0)
          : /Chrome/.test(e)
          ? (this.chrome = !0)
          : /Epiphany/.test(e)
          ? (this.epiphany = !0)
          : /Firefox/.test(e)
          ? (this.firefox = !0)
          : /Mobile Safari/.test(e)
          ? (this.mobileSafari = !0)
          : /MSIE (\d+\.\d+);/.test(e)
          ? ((this.ie = !0), (this.ieVersion = parseInt(RegExp.$1, 10)))
          : /Midori/.test(e)
          ? (this.midori = !0)
          : /Opera/.test(e)
          ? (this.opera = !0)
          : /Safari/.test(e)
          ? (this.safari = !0)
          : /Silk/.test(e)
          ? (this.silk = !0)
          : /Trident\/(\d+\.\d+);/.test(e) &&
            ((this.ie = !0), (this.trident = !0), (this.tridentVersion = parseInt(RegExp.$1, 10))),
          navigator.standalone && (this.webApp = !0),
          navigator.isCocoonJS && (this.cocoonJS = !0),
          'undefined' != typeof t.ejecta && (this.ejecta = !0)
      },
      _checkAudio: function () {
        ;(this.audioData = !!t.Audio), (this.webAudio = !(!t.webkitAudioContext && !t.AudioContext))
        var e = document.createElement('audio'),
          i = !1
        try {
          ;(i = !!e.canPlayType) &&
            (e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, '') && (this.ogg = !0),
            e.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, '') && (this.opus = !0),
            e.canPlayType('audio/mpeg;').replace(/^no$/, '') && (this.mp3 = !0),
            e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, '') && (this.wav = !0),
            (e.canPlayType('audio/x-m4a;') || e.canPlayType('audio/aac;').replace(/^no$/, '')) && (this.m4a = !0),
            e.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, '') && (this.webm = !0))
        } catch (t) {}
      },
      _checkDevice: function () {
        ;(this.pixelRatio = t.devicePixelRatio || 1),
          (this.iPhone = navigator.userAgent.toLowerCase().indexOf('iphone') != -1),
          (this.iPhone4 = 2 == this.pixelRatio && this.iPhone),
          (this.iPad = navigator.userAgent.toLowerCase().indexOf('ipad') != -1),
          'undefined' != typeof Int8Array
            ? ((this.littleEndian = new Int8Array(new Int16Array([1]).buffer)[0] > 0), (this.typedArray = !0))
            : ((this.littleEndian = !1), (this.typedArray = !1)),
          (navigator.vibrate =
            navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate),
          navigator.vibrate && (this.vibration = !0)
      },
      _checkCSS3D: function () {
        var e,
          i = document.createElement('p'),
          a = {
            webkitTransform: '-webkit-transform',
            OTransform: '-o-transform',
            msTransform: '-ms-transform',
            MozTransform: '-moz-transform',
            transform: 'transform'
          }
        document.body.insertBefore(i, null)
        for (var n in a)
          void 0 !== i.style[n] &&
            ((i.style[n] = 'translate3d(1px,1px,1px)'), (e = t.getComputedStyle(i).getPropertyValue(a[n])))
        document.body.removeChild(i), (this.css3D = void 0 !== e && e.length > 0 && 'none' !== e)
      },
      canPlayAudio: function (t) {
        return (
          !('mp3' != t || !this.mp3) ||
          !('ogg' != t || (!this.ogg && !this.opus)) ||
          !('m4a' != t || !this.m4a) ||
          !('wav' != t || !this.wav) ||
          !('webm' != t || !this.webm)
        )
      },
      isConsoleOpen: function () {
        return (
          !(!t.console || !t.console.firebug) ||
          (!!t.console &&
            (console.profile(), console.profileEnd(), console.clear && console.clear(), console.profiles.length > 0))
        )
      }
    }),
    (Device.prototype.constructor = Device),
    (c.prototype.dispose = function () {
      this.disposed || ((this.disposed = !0), (this.count = 0), (this._callbacks = null), (this._doItAfter = null))
    }),
    (c.prototype.has = function (t, e) {
      if (!this.disposed) return this._callbacks.indexOf(t) >= 0
    }),
    (c.prototype.add = function (t) {
      if (!this.disposed && !this.has(t)) {
        var e = this,
          i = function () {
            ;(e._callbacks[e.count] = t), e.count++
          }
        this._blocked ? (this._doItAfter[this._doItAfter.length] = i) : i()
      }
    }),
    (c.prototype.remove = function (t) {
      if (!(this.disposed || this._callbacks.indexOf(t) < 0)) {
        var e = this,
          i = function () {
            var i = e._callbacks.indexOf(t)
            e._callbacks.splice(i, 1), e.count--
          }
        this._blocked ? (this._doItAfter[this._doItAfter.length] = i) : i()
      }
    }),
    (c.prototype.call = function () {
      if (!this.disposed && this._callbacks.length > 0) {
        var t
        for (this._blocked = !0, t = this._callbacks.length - 1; t >= 0; t--)
          this._callbacks[t].apply(null, arguments.length > 0 ? Array.prototype.slice.call(arguments) : null)
        if (((this._blocked = !1), this.disposed)) return
        if (this._doItAfter.length > 0) {
          for (t = this._doItAfter.length - 1; t >= 0; t--) this._doItAfter[t]()
          this._doItAfter.splice(0, this._doItAfter.length)
        }
      }
    }),
    (p.prototype.update = function () {
      var t = Date.now()
      ;(this.ms = t - this.startTime),
        (this.msMin = Math.min(this.msMin, this.ms)),
        (this.msMax = Math.max(this.msMax, this.ms)),
        this.frames++,
        t > this.prevTime + 1e3 &&
          ((this.fps = Math.round((1e3 * this.frames) / (t - this.prevTime))),
          (this.fpsMin = Math.min(this.fpsMin, this.fps)),
          (this.fpsMax = Math.max(this.fpsMax, this.fps)),
          (this.prevTime = t),
          (this.frames = 0))
    }),
    (m.prototype.constructor = m)
  var st = ''
  ;(m.prototype.collectInteractiveSprite = function (t, e) {
    for (var i = t.children, a = i.length, n = 0; n < a; n++) {
      var s = i[n]
      ;(s.visible === !1 && this.interactInvisible === !1) ||
        (s.interactive
          ? (console.log(st, s.name),
            (s.__iParent = e),
            this.interactiveItems.push(s),
            s.children.length > 0 && ((st += '\t'), this.collectInteractiveSprite(s, s)))
          : ((s.__iParent = null), s.children.length > 0 && this.collectInteractiveSprite(s, e)))
    }
    st = ''
  }),
    (m.prototype.setTarget = function (t) {
      ;(this.target = t),
        null === this.interactionDOMElement && this.setTargetDomElement(t.view),
        document.body.addEventListener('mouseup', this.onMouseUp, !0)
    }),
    (m.prototype.setTargetDomElement = function (e) {
      null !== this.interactionDOMElement &&
        ((this.interactionDOMElement.style['-ms-content-zooming'] = ''),
        (this.interactionDOMElement.style['-ms-touch-action'] = ''),
        this.interactionDOMElement.removeEventListener('mousemove', this.onMouseMove, !0),
        this.interactionDOMElement.removeEventListener('mousedown', this.onMouseDown, !0),
        this.interactionDOMElement.removeEventListener('mouseout', this.onMouseOut, !0),
        this.interactionDOMElement.removeEventListener('touchstart', this.onTouchStart, !0),
        this.interactionDOMElement.removeEventListener('touchend', this.onTouchEnd, !0),
        this.interactionDOMElement.removeEventListener('touchmove', this.onTouchMove, !0)),
        t.navigator.msPointerEnabled &&
          ((e.style['-ms-content-zooming'] = 'none'), (e.style['-ms-touch-action'] = 'none')),
        (this.interactionDOMElement = e),
        e.addEventListener('mousemove', this.onMouseMove, !0),
        e.addEventListener('mousedown', this.onMouseDown, !0),
        e.addEventListener('mouseout', this.onMouseOut, !0),
        e.addEventListener('touchstart', this.onTouchStart, !0),
        e.addEventListener('touchend', this.onTouchEnd, !0),
        e.addEventListener('touchmove', this.onTouchMove, !0)
    }),
    (m.prototype.update = function () {
      if (this.target) {
        var t = Date.now(),
          e = t - this.last
        if (((e = (30 * e) / 1e3), !(e < 1))) {
          this.last = t
          var i = 0
          this.dirty &&
            ((this.dirty = !1),
            (this.interactiveItems = []),
            this.stage.interactive && this.interactiveItems.push(this.stage),
            this.collectInteractiveSprite(this.stage, this.stage))
          this.interactionDOMElement.style.cursor = 'inherit'
          var a = this.interactiveItems.length
          for (i = a - 1; i >= 0; i--) {
            var n = this.interactiveItems[i]
            if (n.mouseover || n.mouseout || n.buttonMode) {
              if (n.__iParent && n.__iParent.__target) continue
              ;(n.__hit = null != n.__target || this.hitTest(n, this.mouse)),
                n.__hit
                  ? (n.buttonMode && (this.interactionDOMElement.style.cursor = n.defaultCursor),
                    n.__iParent && (n.__iParent.__target = n),
                    n.__target ? (this.mouse.target = n.__target) : (this.mouse.target = n),
                    n.__isOver || (n.mouseover && n.mouseover(this.mouse), (n.__isOver = !0)))
                  : n.__isOver && (n.mouseout && n.mouseout(this.mouse), (n.__isOver = !1))
            }
          }
          for (i = a - 1; i >= 0; i--) (n = this.interactiveItems[i]), (n.__target = null)
        }
      }
    }),
    (m.prototype.onMouseMove = function (e) {
      this.mouse.originalEvent = e || t.event
      var i = this.interactionDOMElement.getBoundingClientRect()
      ;(this.mouse.global.x = (e.clientX - i.left) * (this.target.width / i.width)),
        (this.mouse.global.y = (e.clientY - i.top) * (this.target.height / i.height))
      for (var a = this.interactiveItems.length, n = 0; n < a; n++) {
        var s = this.interactiveItems[n]
        s.mousemove && s.mousemove(this.mouse)
      }
    }),
    (m.prototype.onMouseDown = function (e) {
      this.mouse.originalEvent = e || t.event
      for (
        var i = this.interactiveItems.length,
          a = function (t, e) {
            return t === e || (!!t.__target && a(t.__target, e))
          },
          n = null,
          s = 0,
          o = i - 1;
        o >= 0;
        o--
      ) {
        var r = this.interactiveItems[o]
        if (r.mousedown || r.click) {
          if (r != n && n && 0 == a(r, n)) continue
          ;(r.__hit = r.__target || this.hitTest(r, this.mouse)),
            s++,
            r.__hit &&
              (n || (n = r),
              r.__iParent && (r.__iParent.__target = r.__target || r),
              (this.mouse.target = r.__target || r),
              r.mousedown && r.mousedown(this.mouse),
              (r.__isDown = !0))
        } else r.__iParent.__target = r.__target
      }
      for (console.log(s, i), o = i - 1; o >= 0; o--) (r = this.interactiveItems[o]), (r.__target = null)
    }),
    (m.prototype.onMouseOut = function () {
      var t = this.interactiveItems.length
      this.interactionDOMElement.style.cursor = 'inherit'
      for (var e = 0; e < t; e++) {
        var i = this.interactiveItems[e]
        i.__isOver && ((this.mouse.target = i), i.mouseout && i.mouseout(this.mouse), (i.__isOver = !1))
      }
    }),
    (m.prototype.onMouseUp = function (e) {
      this.mouse.originalEvent = e || t.event
      for (var i = this.interactiveItems.length, a = !1, n = 0; n < i; n++) {
        var s = this.interactiveItems[n]
        ;(s.__hit = this.hitTest(s, this.mouse)),
          s.__hit && !a
            ? (s.mouseup && s.mouseup(this.mouse),
              s.__isDown && s.click && s.click(this.mouse),
              s.interactiveChildren || (a = !0))
            : s.__isDown && s.mouseupoutside && s.mouseupoutside(this.mouse),
          (s.__isDown = !1)
      }
    }),
    (m.prototype.hitTest = function (t, e) {
      var i = e.global
      if (!t.worldVisible) return !1
      var a = t instanceof PIXI.Sprite,
        n = t.worldTransform,
        s = n[0],
        o = n[1],
        r = n[2],
        l = n[3],
        h = n[4],
        y = n[5],
        d = 1 / (s * h + o * -l),
        c = h * d * i.x + -o * d * i.y + (y * o - r * h) * d,
        p = s * d * i.y + -l * d * i.x + (-y * s + r * l) * d
      if (t.hitArea && t.hitArea.contains) return !!t.hitArea.contains(c, p) && ((e.target = t), !0)
      if (a) {
        var m,
          g = t.texture.frame.width,
          u = t.texture.frame.height,
          x = -g * t.anchor.x
        if (c > x && c < x + g && ((m = -u * t.anchor.y), p > m && p < m + u)) return (e.target = t), !0
      }
      for (var f = t.children.length, w = 0; w < f; w++) {
        var _ = t.children[w],
          P = this.hitTest(_, e)
        if (P) return (e.target = _), (e.currentTarget = t), !0
      }
      return !1
    }),
    (m.prototype.onTouchMove = function (e) {
      var i,
        a = this.interactionDOMElement.getBoundingClientRect(),
        n = e.changedTouches,
        s = 0
      for (s = 0; s < n.length; s++) {
        var o = n[s]
        ;(i = this.touchs[o.identifier]),
          (i.originalEvent = e || t.event),
          (i.global.x = (o.clientX - a.left) * (this.target.width / a.width)),
          (i.global.y = (o.clientY - a.top) * (this.target.height / a.height)),
          navigator.isCocoonJS && ((i.global.x = o.clientX), (i.global.y = o.clientY))
      }
      var r = this.interactiveItems.length
      for (s = 0; s < r; s++) {
        var l = this.interactiveItems[s]
        l.touchmove && l.touchmove(i)
      }
    }),
    (m.prototype.onTouchStart = function (e) {
      for (var i = this.interactionDOMElement.getBoundingClientRect(), a = e.changedTouches, n = 0; n < a.length; n++) {
        var s = a[n],
          o = this.pool.pop()
        o || (o = new PIXI.InteractionData()),
          (o.originalEvent = e || t.event),
          (this.touchs[s.identifier] = o),
          (o.global.x = (s.clientX - i.left) * (this.target.width / i.width)),
          (o.global.y = (s.clientY - i.top) * (this.target.height / i.height)),
          navigator.isCocoonJS && ((o.global.x = s.clientX), (o.global.y = s.clientY))
        for (var r = this.interactiveItems.length, l = 0; l < r; l++) {
          var h = this.interactiveItems[l]
          if (
            (h.touchstart || h.tap) &&
            ((h.__hit = this.hitTest(h, o)),
            h.__hit &&
              (h.touchstart && h.touchstart(o), (h.__isDown = !0), (h.__touchData = o), !h.interactiveChildren))
          )
            break
        }
      }
    }),
    (m.prototype.onTouchEnd = function (e) {
      for (var i = this.interactionDOMElement.getBoundingClientRect(), a = e.changedTouches, n = 0; n < a.length; n++) {
        var s = a[n],
          o = this.touchs[s.identifier],
          r = !1
        ;(o.global.x = (s.clientX - i.left) * (this.target.width / i.width)),
          (o.global.y = (s.clientY - i.top) * (this.target.height / i.height)),
          navigator.isCocoonJS && ((o.global.x = s.clientX), (o.global.y = s.clientY))
        for (var l = this.interactiveItems.length, h = 0; h < l; h++) {
          var y = this.interactiveItems[h],
            d = y.__touchData
          ;(y.__hit = this.hitTest(y, o)),
            d === o &&
              ((o.originalEvent = e || t.event),
              (y.touchend || y.tap) &&
                (y.__hit && !r
                  ? (y.touchend && y.touchend(o), y.__isDown && y.tap && y.tap(o), y.interactiveChildren || (r = !0))
                  : y.__isDown && y.touchendoutside && y.touchendoutside(o),
                (y.__isDown = !1)),
              (y.__touchData = null))
        }
        this.pool.push(o), (this.touchs[s.identifier] = null)
      }
    }),
    (m.InteractionData = function () {
      ;(this.global = new PIXI.Point()),
        (this.local = new PIXI.Point()),
        (this.currentTarget = null),
        (this.target = null),
        (this.originalEvent = null)
    }),
    (m.InteractionData.prototype.getLocalPosition = function (t) {
      var e = t.worldTransform,
        i = this.global,
        a = e[0],
        n = e[1],
        s = e[2],
        o = e[3],
        r = e[4],
        l = e[5],
        h = 1 / (a * r + n * -o)
      return new PIXI.Point(
        r * h * i.x + -n * h * i.y + (l * n - s * r) * h,
        a * h * i.y + -o * h * i.x + (-l * a + s * o) * h
      )
    }),
    (m.InteractionData.prototype.constructor = m.InteractionData)
  var ot = {}
  ;(ot.distance1 = function (t, e, i, a) {
    var n = i - t,
      s = a - e
    return Math.sqrt(n * n + s * s)
  }),
    (ot.distance2 = function (t, e) {
      var i = e.x - t.x,
        a = e.y - t.y
      return Math.sqrt(i * i + a * a)
    }),
    (ot.angleRad1 = function (t, e, i, a) {
      return Math.atan2(a - e, i - t)
    }),
    (ot.angleDeg1 = function (t, e, i, a) {
      return (Math.atan2(a - e, i - t) / Math.PI) * 180
    }),
    (ot.angleRad2 = function (t, e) {
      return Math.atan2(e.y - t.y, e.x - t.x)
    }),
    (ot.angleDeg2 = function (t, e) {
      return (Math.atan2(e.y - t.y, e.x - t.x) / Math.PI) * 180
    }),
    (ot.vectorVelocityRad = function (t, e) {
      return { x: Math.cos(t) * e, y: Math.sin(t) * e }
    }),
    (ot.vectorVelocityDeg = function (t, e) {
      var i = (t * Math.PI) / 180
      return { x: Math.cos(i) * e, y: Math.sin(i) * e }
    }),
    (ot.equal = function (t, e, i) {
      return (i = i || 1e-5), Math.abs(t - e) <= i
    }),
    (ot.toDegrees = function (t) {
      return (180 * t) / Math.PI
    }),
    (ot.toRadians = function (t) {
      return (t * Math.PI) / 180
    }),
    (ot.normAngleDeg = function (t, e) {
      return (t %= 360), (t = (t + 360) % 360), e && t > 180 && (t -= 360), t
    }),
    (ot.pointLength = function (t) {
      return Math.sqrt(t.x * t.x + t.y * t.y)
    }),
    (ot.pointNormalize = function (t, e) {
      var i = ot.pointLength(t)
      return 0 == i ? t : ((t.x /= i), (t.y /= i), e && ((t.x *= e), (t.y *= e)), t)
    }),
    (ot.intersection = function (t, e, i, a, n, s, o, r, l) {
      if (t === n && e === s) return null != l && ((l.x = t), (l.y = e)), !0
      if (t == o && e == r) return null != l && ((l.x = t), (l.y = e)), !0
      if (i == n && a == s) return null != l && ((l.x = i), (l.y = a)), !0
      if (i == o && a == r) return null != l && ((l.x = i), (l.y = a)), !0
      var h = i - t,
        y = a - e,
        d = o - n,
        c = r - s,
        p = -y,
        m = h,
        g = -(p * t + m * e),
        u = -c,
        x = d,
        w = -(u * n + x * s),
        _ = u * t + x * e + w,
        P = u * i + x * a + w,
        v = p * n + m * s + g,
        S = p * o + m * r + g
      if (_ * P >= 0 || v * S >= 0) return !1
      var b = _ / (_ - P)
      ;(h *= b), (y *= b)
      return null != l && ((l.x = f.x), (l.y = f.y)), !0
    }),
    (ot.intersection = function (t, e, i, a, n) {
      if (t.x == i.x && t.y == i.y) return null != n && n.set(t), !0
      if (t.x == a.x && t.y == a.y) return null != n && n.set(t), !0
      if (e.x == i.x && e.y == i.y) return null != n && n.set(e), !0
      if (e.x == a.x && e.y == a.y) return null != n && n.set(e), !0
      var s = e.sub(t),
        o = a.sub(i),
        r = -s.y,
        l = s.x,
        h = -(r * t.x + l * t.y),
        y = -o.y,
        d = o.x,
        c = -(y * i.x + d * i.y),
        p = y * t.x + d * t.y + c,
        m = y * e.x + d * e.y + c,
        g = r * i.x + l * i.y + h,
        u = r * a.x + l * a.y + h
      if (p * m >= 0 || g * u >= 0) return !1
      var x = p / (p - m)
      ;(s.x *= x), (s.y *= x)
      var f = t.add(s)
      return null != n && (n.x = f.x), null != n && (n.y = f.y), !0
    }),
    (g.prototype.get = function (t) {
      return this._storage[t]
    }),
    (g.prototype.set = function (t, e) {
      ;(this._storage[t] = e.toString()), this.localStorageEnable && localStorage.setItem(t, e.toString())
    }),
    (g.prototype.read = function (t) {
      if (this.localStorageEnable)
        for (var e = t.length, i = 0; i < e; i++) {
          var a = t[i],
            n = localStorage.getItem(a)
          n && (this._storage[a] = n)
        }
    }),
    (g.prototype.clear = function () {
      ;(this._storage = {}), localStorage.clear()
    })
  var rt = {}
  ;(rt.generateFrameNames = function (t, e, i, a, n) {
    'undefined' == typeof a && (a = '')
    var s,
      o = [],
      r = ''
    if (e < i)
      for (s = e; s <= i; s++)
        (r = 'number' == typeof n ? rt.pad(s.toString(), n, '0', 1) : s.toString()), (r = t + r + a), o.push(r)
    else
      for (s = e; s >= i; s--)
        (r = 'number' == typeof n ? Phaser.Utils.pad(s.toString(), n, '0', 1) : s.toString()),
          (r = t + r + a),
          o.push(r)
    return o
  }),
    (rt.pad = function (t, e, i, a) {
      'undefined' == typeof e && (e = 0), 'undefined' == typeof i && (i = ' '), 'undefined' == typeof a && (a = 3)
      var n = 0
      if (e + 1 >= t.length)
        switch (a) {
          case 1:
            t = Array(e + 1 - t.length).join(i) + t
            break
          case 3:
            var s = Math.ceil((n = e - t.length) / 2),
              o = n - s
            t = Array(o + 1).join(i) + t + Array(s + 1).join(i)
            break
          default:
            t += Array(e + 1 - t.length).join(i)
        }
      return t
    }),
    (rt.atHome = function (e) {
      var i = t.location.hostname
      return true
    })
  var lt = Box2D.Common.Math.b2Vec2,
    ht = (Box2D.Collision.b2AABB, Box2D.Dynamics.b2BodyDef),
    yt = Box2D.Dynamics.b2Body,
    dt = Box2D.Dynamics.b2FixtureDef,
    ct = (Box2D.Dynamics.b2Fixture, Box2D.Dynamics.b2World),
    pt = Box2D.Collision.Shapes.b2MassData,
    mt = Box2D.Collision.Shapes.b2PolygonShape,
    gt = Box2D.Collision.Shapes.b2CircleShape,
    ut = Box2D.Dynamics.b2DebugDraw,
    xt =
      (Box2D.Dynamics.Joints.b2MouseJointDef,
      Box2D.Dynamics.Joints.b2RevoluteJoint,
      Box2D.Dynamics.Joints.b2RevoluteJointDef),
    ft = Box2D.Dynamics.Joints.b2WeldJointDef
  Box2D.Dynamics.Joints.b2WeldJoint
  ;(u.prototype.constructor = u),
    (u.prototype.enableDebugDraw = function () {
      ;(this.enabledDD = !0),
        (this._canvas = document.createElement('canvas')),
        (this._canvas.id = 'PhysDebugDraw'),
        (this._canvas.width = _t.pixi.renderer.width),
        (this._canvas.height = _t.pixi.renderer.height),
        (this._canvas.style.zIndex = 1),
        (this._canvas.style.left = 0),
        (this._canvas.style.position = 'absolute'),
        (this._canvas.style.pointerEvents = 'none'),
        document.body.appendChild(this._canvas),
        (this._context = this._canvas.getContext('2d')),
        this._context.scale(_t.scale, _t.scale)
      var t = new ut()
      t.SetSprite(this._context),
        t.SetDrawScale(_t.physScale),
        t.SetFillAlpha(0.3),
        t.SetLineThickness(1),
        t.SetFlags(ut.e_shapeBit | ut.e_jointBit),
        this.world.SetDebugDraw(t)
    }),
    (u.prototype.updateCanvasSize = function () {
      this.enabledDD &&
        ((this._canvas.width = _t.pixi.renderer.width),
        (this._canvas.height = _t.pixi.renderer.height),
        (this._canvas.style.width = _t.pixi.view.style.width),
        (this._canvas.style.height = _t.pixi.view.style.height),
        this._context.scale(_t.scale, _t.scale))
    }),
    (u.prototype.doIt = function (t) {
      return this.world.IsLocked() ? (this._doIt.push(t), !1) : (t.call(), !0)
    }),
    (u.prototype.doItAll = function () {
      for (var t = this._doIt.length, e = 0; e < t; e++) {
        var i = this._doIt[e]
        i.call()
      }
      this.clearDoIt()
    }),
    (u.prototype.clearDoIt = function () {
      this._doIt = []
    }),
    (u.prototype._update = function () {
      this.world.Step(1 / 60, 10, 10),
        this.enabledDD && this.world.DrawDebugData(),
        this.world.ClearForces(),
        this._doIt.length > 0 && this.doItAll()
    }),
    (u.prototype._createGround = function () {
      var t = new dt()
      ;(t.density = 1), (t.friction = 0.5), (t.restitution = 0.2)
      var e = new ht()
      ;(e.type = yt.b2_staticBody),
        (t.shape = new mt()),
        t.shape.SetAsBox((_t.gameWidth0 / 2 - 4) / _t.physScale, 10 / _t.physScale),
        e.position.Set(_t.gameWidth0 / 2 / _t.physScale, _t.gameHeight0 / _t.physScale),
        this.world.CreateBody(e).CreateFixture(t)
    }),
    (u.createCircleShape = function (t, e) {
      var i = new gt(t / _t.physScale)
      return e && i.SetLocalPosition(e), i
    }),
    (u.createPolygonShape = function (t, e, i, a, n) {
      ;(i = i || 0), (a = a || 0), (n = n || 0)
      var s = new mt()
      return (
        0 == i && 0 == a && 0 == n
          ? s.SetAsBox(t / 2 / _t.physScale, e / 2 / _t.physScale)
          : s.SetAsOrientedBox(
              t / 2 / _t.physScale,
              e / 2 / _t.physScale,
              new lt(i / _t.physScale, a / _t.physScale),
              n
            ),
        s
      )
    }),
    (u.createFixtureDef = function (t, e, i, a, n, s, o) {
      var r = new dt()
      return (
        (n = n || null),
        (s = s || !1),
        (o = o || null),
        (r.shape = t),
        (r.friction = e),
        (r.restitution = i),
        (r.density = a),
        (r.isSensor = s),
        (r.userData = n),
        o && (r.filter = o),
        r
      )
    }),
    (u.createBodyDef = function (t, e, i, a, n, s, o) {
      var r = new ht()
      return (
        (a = a || !1),
        (n = n || !0),
        (s = s || 0),
        (o = o || !1),
        (r.type = i),
        r.position.Set(t / _t.physScale, e / _t.physScale),
        (r.angle = s),
        (r.active = n),
        (r.bullet = o),
        (r.fixedRotation = a),
        r
      )
    }),
    (u.createBody = function (t, e) {
      var i = _t.physWorld.CreateBody(t)
      if (e) for (var a = e.length, n = 0; n < a; n++) i.CreateFixture(e[n])
      return i
    }),
    (u.convertBodyTypeFromStringToNumber = function (t) {
      if ('static' == t) return yt.b2_staticBody
      if ('dynamic' == t) return yt.b2_dynamicBody
      if ('kinematic' == t) return yt.b2_kinematicBody
      throw 'Error! typeString has a wrong value.'
    }),
    (u.hasContactPairOfProperties = function (t, e, i) {
      var a = t.GetFixtureA(),
        n = t.GetFixtureB()
      if (null == a || null == n) return !1
      var s = a.GetUserData(),
        o = n.GetUserData()
      if (null == s || null == o) return !1
      var r = s.hasOwnProperty(e) && o.hasOwnProperty(i),
        l = s.hasOwnProperty(i) && o.hasOwnProperty(e)
      return r || l
    }),
    (u.getAnotherOfContact = function (t, e) {
      var i = t.GetFixtureA(),
        a = t.GetFixtureB()
      if (null == i && null == a) return null
      var n = i ? i.GetUserData() : null,
        s = a ? a.GetUserData() : null
      if (null == n && null == s) return null
      var o = null != n ? n.item : null,
        r = null != s ? s.item : null
      return null == o && null == r ? null : o == e ? r : r == e ? o : null
    }),
    (u.getAnotherUserDataOfContact = function (t, e) {
      var i = t.GetFixtureA(),
        a = t.GetFixtureB()
      if (null == i && null == a) return null
      var n = i ? i.GetUserData() : null,
        s = a ? a.GetUserData() : null
      if (null == n && null == s) return null
      var o = null != n ? n.item : null,
        r = null != s ? s.item : null
      return null == o && null == r ? null : o == e ? s : r == e ? n : null
    }),
    (x.prototype = {
      rnd: function () {
        var t = 2091639 * this.s0 + 2.3283064365386963e-10 * this.c
        return (this.c = 0 | t), (this.s0 = this.s1), (this.s1 = this.s2), (this.s2 = t - this.c), this.s2
      },
      sow: function (t) {
        'undefined' == typeof t && (t = []),
          (this.s0 = this.hash(' ')),
          (this.s1 = this.hash(this.s0)),
          (this.s2 = this.hash(this.s1)),
          (this.c = 1)
        for (var e, i = 0; (e = t[i++]); )
          (this.s0 -= this.hash(e)),
            (this.s0 += ~~(this.s0 < 0)),
            (this.s1 -= this.hash(e)),
            (this.s1 += ~~(this.s1 < 0)),
            (this.s2 -= this.hash(e)),
            (this.s2 += ~~(this.s2 < 0))
      },
      hash: function (t) {
        var e, i, a
        for (a = 4022871197, t = t.toString(), i = 0; i < t.length; i++)
          (a += t.charCodeAt(i)),
            (e = 0.02519603282416938 * a),
            (a = e >>> 0),
            (e -= a),
            (e *= a),
            (a = e >>> 0),
            (e -= a),
            (a += 4294967296 * e)
        return 2.3283064365386963e-10 * (a >>> 0)
      },
      integer: function () {
        return 4294967296 * this.rnd.apply(this)
      },
      frac: function () {
        return this.rnd.apply(this) + 1.1102230246251565e-16 * ((2097152 * this.rnd.apply(this)) | 0)
      },
      real: function () {
        return this.integer() + this.frac()
      },
      integerInRange: function (t, e) {
        return Math.round(this.realInRange(t, e))
      },
      realInRange: function (t, e) {
        return this.frac() * (e - t) + t
      },
      normal: function () {
        return 1 - 2 * this.frac()
      },
      uuid: function () {
        var t = '',
          e = ''
        for (
          e = t = '';
          t++ < 36;
          e += ~t % 5 | ((3 * t) & 4) ? (15 ^ t ? 8 ^ (this.frac() * (20 ^ t ? 16 : 4)) : 4).toString(16) : '-'
        );
        return e
      },
      pick: function (t) {
        return t[this.integerInRange(0, t.length - 1)]
      },
      weightedPick: function (t) {
        return t[~~(Math.pow(this.frac(), 2) * t.length)]
      },
      timestamp: function (t, e) {
        return this.realInRange(t || 9466848e5, e || 1577862e6)
      }
    }),
    (w.prototype = Object.create(PIXI.Container.prototype)),
    (w.prototype.constructor = w),
    (w.prototype.show = function (t) {
      TweenMax.to(this, t, { x: 0, y: this.showY, ease: Expo.easeOut })
    }),
    (_.prototype = Object.create(PIXI.Container.prototype)),
    (_.prototype.constructor = _),
    (_.prototype.show = function (t) {
      TweenMax.to(this, t, { x: 0, y: this.showY, ease: Expo.easeOut })
    }),
    (_.prototype.hide = function (t) {
      TweenMax.to(this, t, { x: -_t.gameWidth0, y: this.hideY, ease: Expo.easeOut })
    }),
    (P.prototype = Object.create(PIXI.Container.prototype)),
    (P.prototype.constructor = P),
    (P.prototype._onClick = function (t) {
      this._buttonsHandler(t.target.num)
    }),
    (P.prototype.refresh = function () {
      for (var t = this._buttons.length, e = 0; e < t; e++) {
        var i = this._buttons[e]
        i.setLocked(e + 1 > _t.levelMng.lastOpened)
      }
    }),
    (v.prototype = Object.create(PIXI.Container.prototype)),
    (v.prototype.constructor = v),
    (v.prototype.show = function (t, e) {
      t = t || 0
      var i = 0.4
      this.visible = !0
      var a = this
      TweenMax.to(this, i, { delay: t, alpha: 1 }),
        TweenMax.to(this._text.scale, 2 * i, {
          delay: (t += 0.1),
          x: 0.5,
          y: 0.5,
          ease: Elastic.easeOut,
          onStart: function () {
            _t.soundOn && a.sndWin.play()
          }
        })
      for (var n = 0; n < 3; n++) {
        var s = this._stars[n]
        ;(s.visible = n + 1 <= e),
          0 != s.visible &&
            (s.scale.set(0, 0),
            TweenMax.to(s.scale, 2 * i, { delay: (t += 0.1), x: 0.5, y: 0.5, ease: Elastic.easeOut }))
      }
      var o = Quad.easeOut,
        r = this._btnMenu.xIn,
        l = this._btnMenu.yIn
      TweenMax.to(this._btnMenu, i, { delay: (t += 0.1), x: r, y: l, ease: o }),
        (r = this._btnRestart.xIn),
        (l = this._btnRestart.yIn),
        TweenMax.to(this._btnRestart, i, { delay: (t += 0.05), x: r, y: l, ease: o }),
        (this._btnNext.enable = _t.levelMng.currLevel != _t.levelMng.totalLevels),
        (r = this._btnNext.xIn),
        (l = this._btnNext.yIn),
        TweenMax.to(this._btnNext, i, { delay: (t += 0.05), x: r, y: l, ease: o })
      var h = _t.storage.get(_t.SAVE_KEY_STARS + _t.levelMng.currLevel) || 0
      h < e && _t.storage.set(_t.SAVE_KEY_STARS + _t.levelMng.currLevel, e)
    }),
    (v.prototype.hide = function () {
      ;(this.visible = !1),
        (this.alpha = 0),
        (this._btnRestart.x = this._btnRestart.xOut),
        (this._btnRestart.y = this._btnRestart.yOut),
        (this._btnMenu.x = this._btnMenu.xOut),
        (this._btnMenu.y = this._btnMenu.yOut),
        (this._btnNext.x = this._btnNext.xOut),
        (this._btnNext.y = this._btnNext.yOut),
        this._text.scale.set(0, 0)
    }),
    (S.prototype = Object.create(PIXI.Container.prototype)),
    (S.prototype.constructor = S),
    (S.prototype.show = function (t) {
      TweenMax.to(this, t, { x: 0, ease: Expo.easeOut })
    }),
    (S.prototype.hide = function (t) {
      TweenMax.to(this, t, { x: _t.gameWidth0, y: this.hideY, ease: Expo.easeOut })
    }),
    (S.prototype.refresh = function () {
      for (var t = this._boards.length, e = 0; e < t; e++) this._boards[e].refresh()
    }),
    (b.prototype = Object.create(PIXI.Container.prototype)),
    (b.prototype.constructor = b),
    (b.prototype.show = function (t) {
      TweenMax.to(this, t, { x: 0, ease: Expo.easeOut })
    }),
    (b.prototype.hideToLeft = function (t) {
      TweenMax.to(this, t, { x: -_t.gameWidth0, y: this.hideY, ease: Expo.easeOut })
    }),
    (b.prototype.hideToRight = function (t) {
      TweenMax.to(this, t, { x: _t.gameWidth0, y: this.hideY, ease: Expo.easeOut })
    }),
    (I.prototype = Object.create(i.prototype)),
    (I.prototype.constructor = I),
    (I.prototype.destroy = function () {
      i.prototype.destroy.call(this), I._balls.remove(this)
    }),
    (I.prototype.setVelocity = function (t) {
      var e = new lt(t.x / _t.physScale, t.y / _t.physScale)
      this._body.SetLinearVelocity(e), this._body.SetAngularVelocity(e.x / 10 + 0.4), this._body.SetAwake(!0)
    }),
    (I.prototype._update = function () {
      i.prototype._update.call(this), this.y > _t.gameHeight0 + 50 && this.destroy()
    }),
    (I._balls = new y('Balls')),
    (I._maxBalls = 25),
    (I.create = function (t, e, i) {
      if (I._balls.total() >= I._maxBalls) {
        var a = I._balls.first()
        a.destroy(), I._balls.remove(a)
      }
      var n = new I(t, e)
      return i.addChild(n), I._balls.add(n), n
    }),
    (A.prototype = Object.create(i.prototype)),
    (A.prototype.constructor = A),
    (A.prototype.destroy = function () {
      i.prototype.destroy.call(this), _t.physics.contactListener.removeBeginContactListener(this._onBeginContact, this)
    }),
    (A.prototype._onBeginContact = function (t) {
      var e = u.getAnotherOfContact(t, this)
      e instanceof I && this._ballInTheNet()
    }),
    (A.prototype._ballInTheNet = function () {
      _t.soundOn && this.sndBallInBasket.play(), _t.playState.complete()
    }),
    (D.prototype = Object.create(i.prototype)),
    (D.prototype.constructor = D),
    (D.prototype.destroy = function () {
      i.prototype.destroy.call(this),
        _t.physics.contactListener.removeBeginContactListener(this._onBeginContact, this),
        i.events.off(i.EVENT_TRIGGER_PRESSED, this._onTriggerEvent, this),
        this.sndStart && this.sndStart.stop(),
        this._rails.destroy(!0)
    }),
    (D.prototype._createRails = function () {
      ;(this._rails = new PIXI.Container()),
        (this._rails.x = this.x),
        (this._rails.y = this.y),
        (this._rails.zOrder = Z.zOrder.rail),
        _t.playState.gameLayer.addChild(this._rails),
        (this._endX = this.x),
        (this._endY = this.y)
      var t
      'v' == this._orienation
        ? ((this._endY = this._end), (this._rails.y = this.y - 22))
        : ((this._endX = this._end), (this._rails.y = this.y - 22)),
        (t = ot.distance1(this.x, this.y, this._endX, this._endY))
      var e = _t.assets.getSprite('rail', 'atlasGame').width / 2,
        i = Math.ceil(t / e)
      console.log(i)
      for (var a = 0; a < i; a++) {
        var n = _t.assets.getSprite('rail', 'atlasGame')
        n.scale.set(0.5, 0.5), n.anchor.set(0, 0.5), (n.x = (n.width - 1) * a), this._rails.addChild(n)
      }
      'v' == this._orienation
        ? ((this._rails.rotation = ot.toRadians(90)), this.y > this._endY && (this._rails.y -= t))
        : this.x > this._endX && (this._rails.x -= t)
    }),
    (D.prototype._onBeginContact = function (t) {
      var e = u.getAnotherOfContact(t, this)
      e instanceof I && this._ballInTheNet()
    }),
    (D.prototype._ballInTheNet = function () {
      _t.playState.complete()
    }),
    (D.prototype._onTriggerEvent = function (t) {
      var e = t.id
      this.id == e && this._move()
    }),
    (D.prototype._move = function () {
      this._isMove ||
        ((this._isMove = !0),
        this._defDirection(),
        this._enableUpdate(),
        (this.angleUpdate = !0),
        (this.positionUpdate = !0),
        _t.soundOn && this.sndStart.play())
    }),
    (D.prototype._defDirection = function () {
      this._isUsed ||
        ((this._isUsed = !0),
        (this._speed = 2),
        (this._vel = new lt()),
        (this._stopVal = 0),
        'v' == this._orienation
          ? ((this._vel.y = this._speed * (this.y > this._endY ? -1 : 1)),
            (this._stopVal = this._endY),
            this.y > this._endY && (this._rails.y -= length))
          : ((this._vel.x = this._speed * (this.x > this._endX ? -1 : 1)), (this._stopVal = this._endX)),
        this._body.SetAwake(!0),
        this._body.GetLinearVelocity().Set(this._vel.x, this._vel.y))
    }),
    (D.prototype._update = function () {
      i.prototype._update.call(this),
        this._isMove &&
          ('v' == this._orienation
            ? ot.equal(this.y, this._stopVal, 3) && this._stop()
            : ot.equal(this.x, this._stopVal, 3) && this._stop())
    }),
    (D.prototype._stop = function () {
      ;(this._isMove = !1),
        this._body.GetLinearVelocity().SetZero(),
        _t.soundOn && (this.sndStart.stop(), this.sndStop.play())
    }),
    (C.prototype = Object.create(i.prototype)),
    (C.prototype.constructor = G),
    (B.prototype = Object.create(i.prototype)),
    (B.prototype.constructor = B),
    (B.prototype.destroy = function () {
      i.prototype.destroy.call(this),
        _t.playState.bg.off('pointerdown', this._pointerDown, this),
        _t.playState.bg.off('pointerup', this._pointerUp, this)
    }),
    (B.prototype._shot = function (t) {
      this._cannon.playing ||
        ((this._shoted = !1), this._cannon.gotoAndStop(0), this._cannon.play(), _t.soundOn && this.sndShot.play())
    }),
    (B.prototype._pointerDown = function (t) {
      this._countTouches++,
        null == this._pointerData &&
          ((this._pointerData = t.data),
          (this._isAllowMove = !0),
          (_t.playState.aim.visible = !0),
          (_t.playState.btnFire.enable = !1))
    }),
    (B.prototype._pointerUp = function (t) {
      this._countTouches--,
        this._countTouches > 0 ||
          ((this._countTouches = 0),
          this._pointerData == t.data &&
            ((this._pointerData = null),
            (this._isAllowMove = !1),
            _t.playState.blinkBtnFire(),
            (_t.playState.btnFire.enable = !0)))
    }),
    (B.prototype._frameChanged = function (t) {
      if (t >= 8 && !this._shoted) {
        if (((this._shoted = !0), void 0 == this._launchX || void 0 == this._launchY)) return
        var e = I.create(this._launchX, this._launchY, _t.playState.ballLayer)
        e.setVelocity(this._direction)
      }
    }),
    (B.prototype._shotComplete = function (t) {
      this._cannon.gotoAndStop(0)
    }),
    (B.prototype._update = function (t) {
      if (this._isAllowMove) {
        var e = _t.pixi.renderer.plugins.interaction,
          i = {}
        _t.playState.aimControl
          ? ((i.x = this._pointerData.global.x), (i.y = this._pointerData.global.y))
          : (i = e.pointer.global),
          (i = { x: i.x / _t.scale, y: i.y / _t.scale }),
          _t.playState.aimControl && ((i.y -= 50), _t.playState.aim.position.set(i.x, i.y)),
          this._helperPoint.set(this.x, this.y)
        var a = ot.angleDeg2(i, this._helperPoint) - 90
        ;(a = ot.normAngleDeg(a, !0)),
          a < this.lowerAngle ? (a = this.lowerAngle) : a > this.upperAngle && (a = this.upperAngle),
          (this._cannon.rotation = ot.toRadians(a)),
          this._cannon.toLocal(this._ballSpawnPoint, this, this._helperPoint)
        var n = { x: -this._helperPoint.x, y: this._helperPoint.y }
        this._helperPoint.x *= -1
        var s = 0,
          o = 0
        _t.playState.aimControl
          ? ((s = _t.playState.aim.position.x), (o = _t.playState.aim.position.y))
          : ((e = _t.pixi.renderer.plugins.interaction),
            (i = e.pointer.global),
            (s = i.x / _t.scale),
            (o = i.y / _t.scale)),
          (this._launchX = this._helperPoint.x + this.x),
          (this._launchY = this._helperPoint.y + this.y)
        var r = ot.distance1(this._launchX, this._launchY, s, o) / this.shotScale,
          l = ot.distance1(this.x, this.y, s, o),
          h = ot.distance1(this._launchX, this._launchY, s, o),
          y = ot.distance1(this.x, this.y, this._launchX, this._launchY)
        ;(l < y || l < h || o > this.y + 50) && (r = 0), r > 1 && (r = 1), (this._powerBarMask.scale.y = r)
        var d = r * (this.maxPower - this.minPower) + this.minPower
        ;(this._direction = { x: this.x - this._launchX, y: this.y - this._launchY }),
          (this._direction = ot.pointNormalize(this._direction, -d))
        var c = { x: this._direction.x, y: this._direction.y }
        ot.pointNormalize(c, d)
        var p = 360
        this.graphics.clear(), this.graphics.drawCircle(n.x, n.y, 4)
        for (var m = 25, g = 4, u = 0.8, x = 1; x <= 15 * r; x++)
          this.graphics.beginFill(16758605, (u /= 1.1)),
            this.graphics.drawCircle(n.x, n.y, (g /= 1.05)),
            this.graphics.endFill(),
            (c.y += p / m),
            (n.x += c.x / m),
            (n.y += c.y / m)
      }
    }),
    (M.prototype = Object.create(i.prototype)),
    (M.prototype.constructor = M),
    (E.prototype = Object.create(i.prototype)),
    (E.prototype.constructor = E),
    (E.prototype.destroy = function () {
      i.prototype.destroy.call(this), i.events.off(i.EVENT_TRIGGER_PRESSED, this._onTriggerEvent, this)
    }),
    (E.prototype._onTriggerEvent = function (t) {
      var e = t.id
      if (this.id == e && !this.opened) {
        this.opened = !0
        var i = 2
        'left' == this.direction
          ? (this._body.SetAwake(!0), this._body.SetAngularVelocity(i * (this.inversed ? -1 : 1)))
          : 'right' == this.direction &&
            (this._body.SetAwake(!0), this._body.SetAngularVelocity(-i * (this.inversed ? -1 : 1))),
          this._enableUpdate(),
          (this.angleUpdate = !0),
          (this.positionUpdate = !0),
          _t.soundOn && this.sndGate.play()
      }
    }),
    (E.prototype._stop = function () {
      this._body.SetAngularVelocity(0), this._disableUpdate(), (this.angleUpdate = !1), (this.positionUpdate = !1)
    }),
    (E.prototype._update = function () {
      i.prototype._update.call(this),
        this.inversed
          ? (('left' == this.direction && this._body.GetAngle() <= this.openAngle) ||
              ('right' == this.direction && this._body.GetAngle() >= -this.openAngle)) &&
            this._stop()
          : (('left' == this.direction && this._body.GetAngle() >= this.openAngle) ||
              ('right' == this.direction && this._body.GetAngle() <= -this.openAngle)) &&
            this._stop()
    }),
    (T.prototype = Object.create(i.prototype)),
    (T.prototype.constructor = T),
    (O.prototype = Object.create(i.prototype)),
    (O.prototype.constructor = O),
    (O.prototype.destroy = function () {
      i.prototype.destroy.call(this), i.events.off(i.EVENT_TRIGGER_PRESSED, this._onTriggerEvent, this)
    }),
    (O.prototype._onTriggerEvent = function (t) {
      var e = t.id
      this.signalID == e && ((this.motorSpeed *= -1), this._revJoint.SetMotorSpeed(this.motorSpeed))
    }),
    (k.prototype = Object.create(i.prototype)),
    (k.prototype.constructor = k),
    (k.prototype.destroy = function () {
      i.prototype.destroy.call(this), _t.physics.contactListener.removeBeginContactListener(this._onBeginContact, this)
    }),
    (k.prototype._onBeginContact = function (t) {
      var e = u.getAnotherOfContact(t, this)
      e instanceof I && this.unhook()
    }),
    (k.prototype._update = function () {
      i.prototype._update.call(this), this.y > _t.gameHeight0 + 50 && this.destroy()
    }),
    (k.prototype.unhook = function () {
      _t.physics.contactListener.removeBeginContactListener(this._onBeginContact, this),
        this._body.SetType(yt.b2_dynamicBody),
        this._body.SetAwake(!0),
        this._enableUpdate(),
        (this.angleUpdate = !0),
        (this.positionUpdate = !0),
        _t.soundOn && this.sndPeg.play()
    }),
    (L.prototype = Object.create(i.prototype)),
    (L.prototype.constructor = L),
    (L.prototype.destroy = function () {
      i.prototype.destroy.call(this), i.events.off(i.EVENT_TRIGGER_PRESSED, this._onTriggerEvent, this)
    }),
    (L.prototype._onTriggerEvent = function (t) {
      var e = t.id,
        i = t.state
      this.gearSignalID == e &&
        this._state != i &&
        ((this._state = i),
        'on' == i
          ? this._motorOn(this.gearPower, this.TO_DESTINATION)
          : 'off' == i && this._motorOn(-this.gearPower, this.TO_START_ANGLE))
    }),
    (L.prototype._motorOn = function (t, e) {
      if (!_t.playState.isDestroying) {
        var i = this
        _t.physics.doIt(function () {
          ;(i._revJoint = _t.physWorld.CreateJoint(i._revJointDef)),
            i._trackBody.SetType(yt.b2_dynamicBody),
            i._trackBody.SetMassData(i._massData),
            i._trackBody.SetAngularVelocity(0),
            i._trackBody.SetLinearVelocity(new lt(0, 0)),
            i._revJoint.EnableMotor(!0),
            i._revJoint.SetMotorSpeed(t),
            i._revJoint.SetMaxMotorTorque(Math.abs(t)),
            i._enableUpdate(),
            i._gear.play(),
            (i._movingTo = e),
            _t.soundOn && i.sndGear.play()
        })
      }
    }),
    (L.prototype._motorOff = function () {
      var t = this
      _t.physics.doIt(function () {
        t._movingTo == t.TO_DESTINATION
          ? t._trackBody.SetAngle(ot.toRadians(t.gearMaxAngle))
          : t._movingTo == t.TO_START_ANGLE && t._trackBody.SetAngle(ot.toRadians(t._trackBodyStartAngle)),
          _t.physWorld.DestroyJoint(t._revJoint),
          (t._revJoint = null),
          t._trackBody.SetType(yt.b2_staticBody),
          t._disableUpdate(),
          t._gear.stop(),
          (t._movingTo = 0)
      })
    }),
    (L.prototype._update = function () {
      i.prototype._update.call(this)
      var t = Math.floor(ot.toDegrees(this._trackBody.GetAngle()))
      this._movingTo == this.TO_DESTINATION
        ? ot.equal(t, this.gearMaxAngle, 2) && this._motorOff()
        : this._movingTo == this.TO_START_ANGLE && ot.equal(t, this._trackBodyStartAngle, 2) && this._motorOff()
    }),
    (R.prototype = Object.create(i.prototype)),
    (R.prototype.constructor = R),
    (G.prototype = Object.create(i.prototype)),
    (G.prototype.constructor = G),
    (U.prototype = Object.create(i.prototype)),
    (U.prototype.constructor = U),
    (U.prototype.destroy = function () {
      i.prototype.destroy.call(this),
        _t.physics.contactListener.removeBeginContactListener(this._onBeginContact, this),
        _t.physWorld.DestroyBody(this._body2)
    }),
    (U.prototype._onBeginContact = function (t) {
      var e = u.getAnotherUserDataOfContact(t, this)
      null != e && 1 == e.dynamic && this._throwBody(e.item.GetBody())
    }),
    (U.prototype._throwBody = function (t) {
      var e = ot.toDegrees(this.rotation) - 90,
        i = ot.vectorVelocityDeg(e, 5 * this.elasticity)
      t.SetLinearVelocity(i), this._spring.gotoAndPlay(0), this._spring.play(), _t.soundOn && this.sndSpring.play()
    }),
    (F.prototype = Object.create(i.prototype)),
    (F.prototype.constructor = F),
    (F.prototype.destroy = function () {
      i.prototype.destroy.call(this), _t.physics.contactListener.removeBeginContactListener(this._onBeginContact, this)
    }),
    (F.prototype._onBeginContact = function (t) {
      var e = u.getAnotherOfContact(t, this)
      e instanceof I && this._catch()
    }),
    (F.prototype._catch = function () {
      this._catched ||
        (_t.soundOn && this.sndStar.play(),
        (this._catched = !0),
        TweenMax.to(this, 1, { alpha: 0, y: this.y - 30, onComplete: this.destroy, onCompleteScope: this }),
        _t.playState.addStar())
    }),
    (V.prototype = Object.create(i.prototype)),
    (V.prototype.constructor = V),
    (X.prototype = Object.create(i.prototype)),
    (X.prototype.constructor = X),
    (N.prototype = Object.create(i.prototype)),
    (N.prototype.constructor = N),
    (N.prototype.destroy = function () {
      i.prototype.destroy.call(this),
        _t.physics.contactListener.removeBeginContactListener(this._onBeginContact, this),
        _t.physics.contactListener.removeEndContactListener(this._onEndContact, this)
    }),
    (N.prototype._onBeginContact = function (t) {
      var e = u.getAnotherUserDataOfContact(t, this)
      if (null != e && 1 == e.dynamic) {
        if ('button' == this.type) {
          if ((this._countContacts++, (this._switcher.onComplete = null), this._on)) return
          ;(this._on = !0), (this._switcher.animationSpeed = 1), this._switcher.play()
          var a = this
          this._switcher.onComplete = function () {
            a._on && i.events.emit(i.EVENT_TRIGGER_PRESSED, { id: a.signalID, state: 'on' })
          }
        } else
          'toogle' == this.type &&
            (this._on
              ? ((this._on = !1),
                (this._switcher.animationSpeed = -1),
                i.events.emit(i.EVENT_TRIGGER_PRESSED, { id: this.signalID, state: 'off' }))
              : ((this._on = !0),
                (this._switcher.animationSpeed = 1),
                i.events.emit(i.EVENT_TRIGGER_PRESSED, { id: this.signalID, state: 'on' })),
            this._switcher.play())
        _t.soundOn && this.sndSwitcher.play()
      }
    }),
    (N.prototype._onEndContact = function (t) {
      var e = u.getAnotherUserDataOfContact(t, this)
      if (
        null != e &&
        1 == e.dynamic &&
        ((this._switcher.onComplete = null),
        this._countContacts--,
        this._countContacts <= 0 && ((this._countContacts = 0), 'button' == this.type))
      ) {
        if (0 == this._on) return
        ;(this._on = !1),
          this._switcher.stop(),
          (this._switcher.animationSpeed = -1),
          this._switcher.play(),
          i.events.emit(i.EVENT_TRIGGER_PRESSED, { id: this.signalID, state: 'off' })
      }
    }),
    (W.prototype = Object.create(i.prototype)),
    (W.prototype.constructor = W),
    (W.prototype.destroy = function () {
      i.prototype.destroy.call(this),
        _t.physics.contactListener.removeBeginContactListener(this._onBeginContact, this),
        _t.physics.contactListener.removeEndContactListener(this._onEndContact, this),
        i.events.off(i.EVENT_TELEPORTATION, this._teleportation, this)
    }),
    (W.prototype._onBeginContact = function (t) {
      var e = u.getAnotherOfContact(t, this)
      e instanceof I &&
        ((null != e.teleportPhase && 0 != e.teleportPhase) ||
          ((e.teleportPhase = 1), i.events.emit(i.EVENT_TELEPORTATION, { sender: this, ball: e, id: this.id })))
    }),
    (W.prototype._onEndContact = function (t) {
      var e = u.getAnotherOfContact(t, this)
      e instanceof I && (e.teleportPhase++, e.teleportPhase >= 3 && (e.teleportPhase = 0))
    }),
    (W.prototype._teleportation = function (t) {
      var e = t.sender,
        i = t.ball,
        a = t.id
      if (e != this && a == this.id) {
        var n = this
        _t.physics.doIt(function () {
          i.setPosition(n.x, n.y)
          var t = i._body.GetLinearVelocity(),
            e = ot.vectorVelocityRad(n.rotation - ot.toRadians(90), t.Length() * n.mulVel),
            a = new lt(e.x, e.y)
          i._body.SetLinearVelocity(a)
        }),
          _t.soundOn && this.sndTeleport.play()
      }
    }),
    (Y.prototype = Object.create(i.prototype)),
    (Y.prototype.constructor = Y),
    (Y.prototype.suck = function () {
      for (var t = this._body.GetContactList(); null != t; ) {
        var e = t.contact
        if (e.IsEnabled() && e.IsTouching()) {
          var i = u.getAnotherOfContact(e, this)
          i instanceof I && this.suckIt(i._body)
        }
        t = t.next
      }
    }),
    (Y.prototype.suckIt = function (t) {
      t.GetLinearVelocity().SetZero(), t.ApplyForce(this._force, t.GetPosition())
    }),
    (Y.prototype._update = function () {
      i.prototype._update.call(this), this.suck()
    }),
    (z.prototype = Object.create(i.prototype)),
    (z.prototype.constructor = z),
    (H.prototype = Object.create(i.prototype)),
    (H.prototype.constructor = H),
    (H.prototype._update = function () {
      i.prototype._update.call(this), this.y > _t.gameHeight0 + 100 && this.destroy()
    }),
    (j.prototype.constructor = j),
    (j.prototype.create = function (t) {
      ;(t = t || this.currLevel),
        t < 1 ? (t = 1) : t > this.totalLevels && (t = this.totalLevels),
        (this.currLevel = t),
        t--
      for (var e = wt[t].items, i = e.length, a = 0; a < i; a++) this._createItem(e[a])
    }),
    (j.prototype.onLevelComplete = function () {
      this.currLevel == this.lastOpened && (this.lastOpened++, _t.storage.set(_t.SAVE_KEY_LAST_OPENED, this.lastOpened))
    }),
    (j.prototype._createItem = function (t) {
      if ('Cannon' == t.name) {
        var e = new B(t.x, t.y)
        ;(e.lowerAngle = void 0 != t.lowerAngle ? t.lowerAngle : -45),
          (e.upperAngle = void 0 != t.upperAngle ? t.upperAngle : 45),
          _t.playState.gameLayer.addChild(e)
      } else if ('Basket' == t.name) {
        var i = new A(t.x, t.y)
        _t.playState.gameLayer.addChild(i)
      } else if ('Ball' == t.name) {
        var a = new I(t.x, t.y)
        _t.playState.gameLayer.addChild(a)
      } else if ('Platform' == t.name) {
        var n = new R(t.x, t.y, t.width, t.angle, t.type, t.density)
        _t.playState.gameLayer.addChild(n)
      } else if ('Star' == t.name) {
        var s = new F(t.x, t.y)
        _t.playState.gameLayer.addChild(s)
      } else if ('Pivot' == t.name) {
        var o = new L(t.x, t.y, t.type, t.signalID, t.color, t.gearMaxAngle, t.gearPower, t.lowerAngle, t.upperAngle)
        _t.playState.gameLayer.addChild(o)
      } else if ('Switcher' == t.name) {
        var r = new N(t.x, t.y, t.angle, t.type, t.signalID, t.color)
        _t.playState.gameLayer.addChild(r)
      } else if ('Teleport' == t.name) {
        var l = new W(t.x, t.y, t.id, t.angle, t.color)
        ;(l.mulVel = t.mulVel || 1), _t.playState.gameLayer.addChild(l)
      } else if ('Spring' == t.name) {
        var h = new U(t.x, t.y, t.angle, t.type, t.elasticity)
        _t.playState.gameLayer.addChild(h)
      } else if ('Mill' == t.name) {
        var y = new O(t.x, t.y, t.enableMotor, t.motorSpeed, t.signalID)
        _t.playState.gameLayer.addChild(y)
      } else if ('Rock' == t.name) {
        var d = new G(t.x, t.y, t.density)
        _t.playState.gameLayer.addChild(d)
      } else if ('Box' == t.name) {
        var c = new C(t.x, t.y, t.angle, t.density)
        _t.playState.gameLayer.addChild(c)
      } else if ('Swings' == t.name) {
        var p = new X(t.x, t.y, t.angle, t.lowerAngle, t.upperAngle)
        _t.playState.gameLayer.addChild(p)
      } else if ('Peg' == t.name) {
        var m = new k(t.x, t.y)
        _t.playState.gameLayer.addChild(m)
      } else if ('Hammer' == t.name) {
        var g = new T(t.x, t.y, t.angle, t.hmDensity)
        _t.playState.gameLayer.addChild(g)
      } else if ('WeightBall' == t.name) {
        var u = new H(t.x, t.y, t.wbDensity)
        _t.playState.gameLayer.addChild(u)
      } else if ('Stopper' == t.name) {
        var x = new V(t.x, t.y)
        _t.playState.gameLayer.addChild(x)
      } else if ('PushButton' == t.name) {
        var f = new PushButton(t.x, t.y, t.btnID, t.angle)
        _t.playState.gameLayer.addChild(f)
      } else if ('Gate' == t.name) {
        var w = new E(t.x, t.y, t.direction, t.gateLeftID || t.gateRightID, t.openAngle, t.inversed || !1)
        _t.playState.gameLayer.addChild(w)
      } else if ('Domino' == t.name) {
        var _ = new M(t.x, t.y)
        _t.playState.gameLayer.addChild(_)
      } else if ('Tube' == t.name) {
        var P = new Y(t.x, t.y, t.angle, t.plusSensorFront, t.plusSensorBack)
        _t.playState.gameLayer.addChild(P)
      } else if ('BasketRail' == t.name) {
        var v = new D(t.x, t.y, t.orientation, t.end, t.basketID)
        _t.playState.gameLayer.addChild(v)
      }
    }),
    (j.prototype.unlockAllLevels = function () {
      this.lastOpened = this.totalLevels
    })
  var wt = []
  ;(wt[0] = {
    items: [
      { name: 'Cannon', x: 508.3, y: 399.5, lowerAngle: -70, upperAngle: 70 },
      { name: 'Basket', x: 184.05, y: 272.85 },
      { name: 'Platform', type: 'static', x: 163, y: 72, density: 1, width: 258, angle: 0 },
      { name: 'Platform', type: 'static', x: 87.5, y: 181.05, density: 1, width: 238.2, angle: -90 },
      { name: 'Platform', type: 'static', x: 109.5, y: 257.95, density: 1, width: 105.8, angle: 26 },
      { name: 'Platform', type: 'static', x: 61.5, y: 59, density: 1, width: 82.1, angle: -90 },
      { name: 'Platform', type: 'static', x: 265.5, y: 59, density: 1, width: 82.1, angle: -90 },
      { name: 'Star', x: 206.35, y: 200 },
      { name: 'Star', x: 304.35, y: 238.8 },
      { name: 'Star', x: 390.4, y: 288.25 }
    ]
  }),
    (wt[1] = {
      items: [
        { name: 'Basket', x: 470.05, y: 374.8 },
        { name: 'Cannon', x: 201.2, y: 381.6, lowerAngle: -70, upperAngle: 70 },
        { name: 'Platform', type: 'static', x: 521.9, y: 210.5, density: 1, width: 55.6, angle: 150 },
        { name: 'Platform', type: 'static', x: 490.7, y: 167.9, density: 1, width: 177.9, angle: -30 },
        { name: 'Platform', type: 'static', x: 414.45, y: 55.8, density: 1, width: 433.4, angle: 7 },
        { name: 'Platform', type: 'static', x: 397.8, y: 105.6, density: 1, width: 363.5, angle: 6 },
        { name: 'Platform', type: 'static', x: 420, y: 296.75, density: 1, width: 187.2, angle: 90 },
        { name: 'Platform', type: 'static', x: 436.05, y: 252.3, density: 1, width: 47.5, angle: 30 },
        { name: 'Platform', type: 'static', x: 439.2, y: 338.95, density: 1, width: 50.8, angle: 30 },
        { name: 'Platform', type: 'static', x: 505.4, y: 302.85, density: 1, width: 179.2, angle: 90 },
        { name: 'Platform', type: 'static', x: 224.2, y: 137.15, density: 1, width: 118.1, angle: 90 },
        { name: 'Platform', type: 'static', x: 171.25, y: 128, density: 1, width: 131.9, angle: 90 },
        { name: 'Platform', type: 'static', x: 153.4, y: 203.8, density: 1, width: 61.7, angle: 135 },
        { name: 'Platform', type: 'static', x: 243.5, y: 203.05, density: 1, width: 61.7, angle: 45 },
        { name: 'Platform', type: 'static', x: 607.75, y: 178.75, density: 1, width: 53, angle: 150 },
        { name: 'Platform', type: 'static', x: 574.45, y: 211.45, density: 1, width: 69.4, angle: 150 },
        { name: 'Platform', type: 'static', x: 544.7, y: 213.95, density: 1, width: 46.6, angle: -120 },
        { name: 'Platform', type: 'static', x: 594.85, y: 192.05, density: 1, width: 31.6, angle: -120 },
        { name: 'Platform', type: 'static', x: 189.45, y: 49.75, density: 1, width: 65.3, angle: 135 },
        { name: 'Platform', type: 'static', x: 625.2, y: 122.95, density: 1, width: 106.9, angle: 90 },
        { name: 'Platform', type: 'static', x: 490.2, y: 295.65, density: 1, width: 48.7, angle: -30 },
        { name: 'Star', x: 445.3, y: 146.9 },
        { name: 'Star', x: 563.3, y: 188 },
        { name: 'Star', x: 103.35, y: 214 }
      ]
    }),
    (wt[2] = {
      items: [
        { name: 'Platform', type: 'static', x: 388.1, y: 89.5, density: 1, width: 110, angle: -90 },
        { name: 'Platform', type: 'dynamic', x: 387.1, y: 178.4, density: 0.6, width: 120, angle: 90 },
        { name: 'Basket', x: 535.45, y: 306.45 },
        { name: 'Cannon', x: 192.05, y: 393.5, lowerAngle: -70, upperAngle: 70 },
        { name: 'Platform', type: 'static', x: 552.5, y: 224.7, density: 1, width: 132.8, angle: 0 },
        {
          name: 'Pivot',
          x: 387.3,
          y: 131.45,
          type: 'bolt',
          color: 'Red',
          gearMaxAngle: 0,
          gearPower: 1,
          lowerAngle: -360,
          upperAngle: 270,
          signalID: 0
        },
        { name: 'Platform', type: 'static', x: 677.2, y: 175.3, density: 1, width: 282.5, angle: 90 },
        { name: 'Platform', type: 'static', x: 623.5, y: 281.95, density: 1, width: 134.4, angle: -30 },
        { name: 'Platform', type: 'static', x: 478.1, y: 63.5, density: 1, width: 458.9, angle: 0 },
        { name: 'Platform', type: 'static', x: 494.4, y: 273.9, density: 1, width: 116.3, angle: 90 },
        { name: 'Star', x: 493.3, y: 353.95 },
        { name: 'Star', x: 313.35, y: 37 },
        { name: 'Star', x: 652.3, y: 178 }
      ]
    }),
    (wt[3] = {
      items: [
        { name: 'Platform', type: 'static', x: 635.45, y: 123.75, density: 1, width: 20.1, angle: 0 },
        { name: 'Platform', type: 'static', x: 91.05, y: 181.05, density: 1, width: 200, angle: 90 },
        { name: 'Platform', type: 'static', x: 240.95, y: 179.85, density: 1, width: 20.1, angle: 0 },
        { name: 'Platform', type: 'static', x: 97.8, y: 250.7, density: 1, width: 180.4, angle: 45 },
        { name: 'Platform', type: 'static', x: 202.05, y: 328, density: 1, width: 181.9, angle: 90 },
        { name: 'Basket', x: 609, y: 136.3 },
        { name: 'Cannon', x: 486, y: 407, lowerAngle: -70, upperAngle: 70 },
        { name: 'Switcher', x: 135, y: 277.95, angle: 45, type: 'button', color: 'Red', signalID: 1 },
        { name: 'Box', x: 240.9, y: 147.05, angle: 0, density: 0.4 },
        { name: 'Platform', type: 'dynamic', x: 604, y: 124.55, density: 1, width: 80, angle: 0 },
        {
          name: 'Pivot',
          x: 635.45,
          y: 123.75,
          type: 'gear',
          color: 'Red',
          gearMaxAngle: 90,
          gearPower: 6,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 1
        },
        { name: 'Platform', type: 'static', x: 65.4, y: 89.95, density: 1, width: 80, angle: 45 },
        { name: 'Star', x: 606.3, y: 99 },
        { name: 'Star', x: 177.35, y: 333.95 },
        { name: 'Star', x: 228.35, y: 333.95 }
      ]
    }),
    (wt[4] = {
      items: [
        { name: 'Platform', type: 'static', x: 607.45, y: 70.05, density: 1, width: 18, angle: 0 },
        { name: 'Platform', type: 'static', x: 505.55, y: 188.95, density: 1, width: 18, angle: 0 },
        { name: 'Basket', x: 49.2, y: 352.8 },
        { name: 'Cannon', x: 202.05, y: 287.05, lowerAngle: -70, upperAngle: 70 },
        { name: 'Platform', type: 'dynamic', x: 548.35, y: 70.1, density: 0.8, width: 136.7, angle: 0 },
        {
          name: 'Pivot',
          x: 607.45,
          y: 70.05,
          type: 'bolt',
          color: 'Red',
          gearMaxAngle: 0,
          gearPower: 1,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 0
        },
        { name: 'Platform', type: 'dynamic', x: 505.45, y: 139.1, density: 0.2, width: 120, angle: 90 },
        { name: 'Switcher', x: 702.35, y: 142.7, angle: -90, type: 'toogle', color: 'Red', signalID: 1 },
        { name: 'Platform', type: 'static', x: 290.5, y: 330.95, density: 1, width: 90, angle: 90 },
        {
          name: 'Pivot',
          x: 505.55,
          y: 188.95,
          type: 'bolt',
          color: 'Red',
          gearMaxAngle: 0,
          gearPower: 1,
          lowerAngle: -720,
          upperAngle: 720,
          signalID: 0
        },
        { name: 'Platform', type: 'static', x: 190.5, y: 294.9, density: 0.9, width: 218.9, angle: 0 },
        { name: 'Platform', type: 'static', x: 710.35, y: 122, density: 1, width: 118.3, angle: 90 },
        { name: 'Platform', type: 'static', x: 706.35, y: 174, density: 0.9, width: 26.7, angle: 0 },
        { name: 'Platform', type: 'static', x: 674.05, y: 70.85, density: 0.9, width: 90.6, angle: 0 },
        { name: 'Platform', type: 'static', x: 8.45, y: 260.35, density: 1, width: 230.1, angle: 90 },
        { name: 'Platform', type: 'dynamic', x: 61.3, y: 294.75, density: 1, width: 72.1, angle: 0 },
        { name: 'Star', x: 505.3, y: 43 },
        { name: 'Star', x: 32.35, y: 157 },
        { name: 'Star', x: 315.35, y: 322.95 },
        {
          name: 'Pivot',
          x: 89.55,
          y: 295.65,
          type: 'gear',
          color: 'Red',
          gearMaxAngle: -90,
          gearPower: -8,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 1
        }
      ]
    }),
    (wt[5] = {
      items: [
        { name: 'Platform', type: 'static', x: 283.65, y: 260.6, density: 1, width: 18, angle: 0 },
        { name: 'Platform', type: 'static', x: 533.25, y: 320.75, density: 1, width: 133, angle: 90 },
        { name: 'Platform', type: 'static', x: 458, y: 263.25, density: 1, width: 170.5, angle: 180 },
        { name: 'Platform', type: 'static', x: 167.75, y: 179, density: 1, width: 256, angle: 37 },
        { name: 'Basket', x: 147.3, y: 363.9 },
        { name: 'Cannon', x: 463.2, y: 254.4, lowerAngle: -70, upperAngle: 70 },
        { name: 'Teleport', x: 35.2, y: 140.15, angle: 90, color: 'Red', id: 0, mulVel: 1 },
        { name: 'Teleport', x: 547.55, y: 410.25, angle: -90, color: 'Red', id: 0, mulVel: 1 },
        { name: 'Platform', type: 'static', x: 451.9, y: 383.4, density: 1, width: 160.5, angle: 37 },
        { name: 'Platform', type: 'dynamic', x: 248.25, y: 307.4, density: 1, width: 136.7, angle: 127 },
        { name: 'Platform', type: 'static', x: 115.8, y: 223.25, density: 1, width: 163.3, angle: 37 },
        { name: 'Platform', type: 'static', x: 222.2, y: 305.5, density: 1, width: 157.9, angle: 127 },
        { name: 'Switcher', x: 618.85, y: 45.35, angle: 180, type: 'toogle', color: 'Green', signalID: 1 },
        {
          name: 'Pivot',
          x: 283.65,
          y: 260.6,
          type: 'gear',
          color: 'Green',
          gearMaxAngle: 35,
          gearPower: -5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 1
        },
        { name: 'Platform', type: 'static', x: 617.45, y: 36.95, density: 1, width: 110.5, angle: 180 },
        { name: 'Platform', type: 'static', x: 381.75, y: 272.75, density: 1, width: 37, angle: 90 },
        { name: 'Star', x: 29.35, y: 98 },
        { name: 'Star', x: 694.3, y: 40 },
        { name: 'Star', x: 323.35, y: 402.5 }
      ]
    }),
    (wt[6] = {
      items: [
        { name: 'Platform', type: 'static', x: 511.65, y: 289.75, density: 1, width: 85.3, angle: -15 },
        { name: 'Cannon', x: 259.2, y: 355.85, lowerAngle: -70, upperAngle: 70 },
        { name: 'Basket', x: 430.45, y: 406.4 },
        { name: 'Rock', x: 556.7, y: 176, density: 1.4 },
        { name: 'Platform', type: 'static', x: 465.75, y: 248.3, density: 1, width: 444.2, angle: 90 },
        { name: 'Platform', type: 'static', x: 556.5, y: 320.25, density: 1, width: 232.5, angle: 90 },
        { name: 'Teleport', x: 79.3, y: 148.95, angle: 0, color: 'Red', id: 0, mulVel: 1 },
        { name: 'Teleport', x: 616, y: 180.75, angle: -90, color: 'Red', id: 0, mulVel: 1 },
        { name: 'Switcher', x: 472.75, y: 258.45, angle: 90, type: 'button', color: 'Blue', signalID: 1 },
        { name: 'Platform', type: 'static', x: 377.6, y: 264.05, density: 1, width: 274.1, angle: 90 },
        { name: 'Platform', type: 'static', x: 258.65, y: 368.7, density: 1, width: 256, angle: 0 },
        { name: 'Platform', type: 'static', x: 260.55, y: 422.9, density: 1, width: 284.2, angle: 0 },
        { name: 'Platform', type: 'static', x: 46.65, y: 204.9, density: 1, width: 354.6, angle: 90 },
        { name: 'Platform', type: 'static', x: 421.75, y: 32.45, density: 1, width: 106.2, angle: 0 },
        { name: 'Platform', type: 'static', x: 92.15, y: 395.55, density: 1, width: 118.9, angle: 30 },
        { name: 'Star', x: 75.35, y: 251 },
        { name: 'Star', x: 80.35, y: 52 },
        { name: 'Star', x: 337.3, y: 396.95 },
        { name: 'Platform', type: 'static', x: 393.7, y: 444.65, density: 1, width: 45.5, angle: 90 },
        { name: 'Platform', type: 'dynamic', x: 377.6, y: 68.65, density: 1, width: 91.1, angle: 90 },
        {
          name: 'Pivot',
          x: 377.85,
          y: 31.85,
          type: 'gear',
          color: 'Blue',
          gearMaxAngle: 180,
          gearPower: 5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 1
        },
        { name: 'Platform', type: 'static', x: 429.35, y: 468.6, density: 1, width: 89.2, angle: 0 }
      ]
    }),
    (wt[7] = {
      items: [
        { name: 'Platform', type: 'static', x: 211.75, y: 394.85, density: 1, width: 188.2, angle: 0 },
        { name: 'Platform', type: 'static', x: 509.55, y: 108.3, density: 1, width: 424.7, angle: 174 },
        { name: 'Platform', type: 'dynamic', x: 257.7, y: 138.95, density: 1, width: 117, angle: 174 },
        { name: 'Basket', x: 335.35, y: 400.75 },
        { name: 'Cannon', x: 473.1, y: 363.95, lowerAngle: -70, upperAngle: 70 },
        { name: 'Switcher', x: 648.15, y: 145.3, angle: -150, type: 'toogle', color: 'Purple', signalID: 1 },
        {
          name: 'Pivot',
          x: 305.9,
          y: 133.25,
          type: 'gear',
          color: 'Purple',
          gearMaxAngle: 260,
          gearPower: 5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 1
        },
        { name: 'Platform', type: 'static', x: 648.15, y: 136.15, density: 1, width: 159.7, angle: 30 },
        { name: 'Rock', x: 682, y: 55.85, density: 20 },
        { name: 'Platform', type: 'static', x: 64.05, y: 245.75, density: 1, width: 120.3, angle: 90 },
        { name: 'Platform', type: 'static', x: 106.55, y: 181.85, density: 1, width: 43.8, angle: -90 },
        { name: 'Platform', type: 'static', x: 146.55, y: 181.85, density: 1, width: 43.8, angle: -90 },
        { name: 'Platform', type: 'static', x: 188.05, y: 245.4, density: 1, width: 119.6, angle: 90 },
        { name: 'Platform', type: 'static', x: 166.65, y: 154.55, density: 1, width: 56.8, angle: -15 },
        { name: 'Switcher', x: 158.6, y: 288.7, angle: 0, type: 'button', color: 'Yellow', signalID: 2 },
        { name: 'Platform', type: 'static', x: 126.55, y: 328.85, density: 1, width: 142.7, angle: 90 },
        { name: 'Platform', type: 'static', x: 158.4, y: 296.8, density: 1, width: 78.5, angle: 0 },
        { name: 'Swings', x: 126.55, y: 243.1, angle: 20, lowerAngle: -20, upperAngle: 20 },
        { name: 'Platform', type: 'static', x: 91.05, y: 157.8, density: 1, width: 43.8, angle: 15 },
        { name: 'Platform', type: 'static', x: 167.8, y: 194.8, density: 1, width: 60.5, angle: 0 },
        { name: 'Platform', type: 'static', x: 85.1, y: 194.8, density: 1, width: 60, angle: 0 },
        { name: 'Platform', type: 'static', x: 74.5, y: 97.5, density: 1, width: 129.5, angle: 90 },
        { name: 'Platform', type: 'dynamic', x: 330.45, y: 394.85, density: 1, width: 92.7, angle: 0 },
        {
          name: 'Pivot',
          x: 294.5,
          y: 394.05,
          type: 'gear',
          color: 'Yellow',
          gearMaxAngle: -90,
          gearPower: -5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 2
        },
        { name: 'Platform', type: 'static', x: 710.8, y: 129, density: 1, width: 105.6, angle: 90 },
        { name: 'Star', x: 95.85, y: 347 },
        { name: 'Star', x: 574.3, y: 129 },
        { name: 'Star', x: 191.4, y: 170.6 }
      ]
    }),
    (wt[8] = {
      items: [
        { name: 'Platform', type: 'static', x: 547.45, y: 17.3, density: 1, width: 318, angle: 0 },
        { name: 'Basket', x: 545.05, y: 160.5 },
        { name: 'Cannon', x: 235.75, y: 280.1, lowerAngle: -70, upperAngle: 70 },
        { name: 'Platform', type: 'static', x: 17.45, y: 172.15, density: 1, width: 151.5, angle: -90 },
        { name: 'Platform', type: 'static', x: 201.05, y: 331, density: 1, width: 205, angle: 0 },
        { name: 'Platform', type: 'dynamic', x: 395.6, y: 85.9, density: 0.1, width: 156.4, angle: 90 },
        {
          name: 'Pivot',
          x: 395.45,
          y: 16,
          type: 'gear',
          color: 'Blue',
          gearMaxAngle: 180,
          gearPower: 6,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 2
        },
        { name: 'Mill', x: 373.95, y: 381.95, enableMotor: !0, motorSpeed: -5, signalID: 1 },
        { name: 'Box', x: 545.2, y: 70.45, angle: 0, density: 0.3 },
        { name: 'Box', x: 544.55, y: 116.35, angle: 0, density: 0.3 },
        { name: 'Platform', type: 'static', x: 417.05, y: 288.1, density: 1, width: 578.2, angle: 0 },
        { name: 'Platform', type: 'static', x: 552.45, y: 390.6, density: 1, width: 192.3, angle: 0 },
        { name: 'Platform', type: 'static', x: 639.45, y: 411.1, density: 1, width: 59.6, angle: -90 },
        { name: 'Platform', type: 'static', x: 697.7, y: 224.4, density: 1, width: 433.4, angle: -90 },
        { name: 'Switcher', x: 668.65, y: 424.8, angle: 0, type: 'button', color: 'Blue', signalID: 2 },
        { name: 'Platform', type: 'static', x: 668.75, y: 431.85, density: 1, width: 76.1, angle: 0 },
        { name: 'Platform', type: 'static', x: 64.45, y: 179.85, density: 1, width: 94.6, angle: -90 },
        { name: 'Platform', type: 'static', x: 518.4, y: 149.65, density: 1, width: 21.1, angle: 0 },
        { name: 'Platform', type: 'static', x: 570.4, y: 149.65, density: 1, width: 21, angle: 0 },
        { name: 'Platform', type: 'static', x: 396.4, y: 234.25, density: 1, width: 127.6, angle: -90 },
        { name: 'Switcher', x: 65.5, y: 69.4, angle: -30, type: 'toogle', color: 'Green', signalID: 1 },
        { name: 'Platform', type: 'static', x: 70.8, y: 75.6, density: 1, width: 132.6, angle: -30 },
        { name: 'Platform', type: 'static', x: 61.3, y: 284.95, density: 1, width: 140.2, angle: 45 },
        { name: 'Platform', type: 'static', x: 100.45, y: 254.75, density: 1, width: 111.3, angle: 45 },
        { name: 'Star', x: 425.3, y: 43 },
        { name: 'Star', x: 21.35, y: 68 },
        { name: 'Star', x: 668.3, y: 358.95 }
      ]
    }),
    (wt[9] = {
      items: [
        { name: 'Platform', type: 'static', x: 66.35, y: 240.55, density: 1, width: 18, angle: 0 },
        { name: 'Platform', type: 'static', x: 35.95, y: 378.2, density: 1, width: 99.5, angle: -90 },
        { name: 'Platform', type: 'static', x: 538.3, y: 235.7, density: 1, width: 18, angle: 0 },
        { name: 'Platform', type: 'static', x: 499.15, y: 177.3, density: 1, width: 18, angle: 0 },
        { name: 'Switcher', x: 647.35, y: 157.65, angle: -45, type: 'button', color: 'Red', signalID: 2 },
        { name: 'Platform', type: 'static', x: 673.55, y: 142.85, density: 1, width: 101.1, angle: -45 },
        { name: 'Basket', x: 393.2, y: 360.5 },
        { name: 'Platform', type: 'static', x: 478.65, y: 313.1, density: 1, width: 152, angle: -45 },
        { name: 'Cannon', x: 293.75, y: 406.05, lowerAngle: -70, upperAngle: 0 },
        { name: 'Platform', type: 'static', x: 331.75, y: 276.45, density: 1, width: 296.9, angle: -90 },
        { name: 'Teleport', x: 68.8, y: 375.1, angle: 0, color: 'Blue', id: 0, mulVel: 1 },
        { name: 'Platform', type: 'dynamic', x: 537.05, y: 171.6, density: 0.2, width: 149.7, angle: 90 },
        { name: 'Teleport', x: 653.3, y: 87.5, angle: -135, color: 'Blue', id: 0, mulVel: 1.4 },
        { name: 'Platform', type: 'static', x: 420.55, y: 201.35, density: 1, width: 195.1, angle: 0 },
        {
          name: 'Pivot',
          x: 538.3,
          y: 235.7,
          type: 'bolt',
          color: 'Red',
          gearMaxAngle: 0,
          gearPower: 5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 0
        },
        { name: 'Spring', x: 67.15, y: 240.7, angle: 45, type: 'dynamic', elasticity: 3 },
        { name: 'Platform', type: 'static', x: 306.95, y: 136.55, density: 1, width: 70.1, angle: 0 },
        { name: 'Platform', type: 'static', x: 181.95, y: 418.9, density: 1, width: 310, angle: 0 },
        { name: 'Platform', type: 'dynamic', x: 498.9, y: 118.2, density: 0.2, width: 137.7, angle: 90 },
        {
          name: 'Pivot',
          x: 499.15,
          y: 177.3,
          type: 'bolt',
          color: 'Red',
          gearMaxAngle: 0,
          gearPower: 5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 0
        },
        { name: 'Platform', type: 'static', x: 629.9, y: 64.95, density: 1, width: 108.1, angle: -45 },
        {
          name: 'Pivot',
          x: 67.35,
          y: 240.3,
          type: 'gear',
          color: 'Red',
          gearMaxAngle: -10,
          gearPower: -8,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 2
        },
        { name: 'Platform', type: 'static', x: 367.65, y: 31, density: 1, width: 691.9, angle: 0 },
        { name: 'Switcher', x: 57.05, y: 74.45, angle: -135, type: 'toogle', color: 'Blue', signalID: 3 },
        { name: 'Platform', type: 'static', x: 123, y: 65.6, density: 1, width: 108.1, angle: -45 },
        { name: 'Platform', type: 'static', x: 59.85, y: 64.95, density: 1, width: 108.1, angle: 45 },
        { name: 'Platform', type: 'static', x: 704.65, y: 71.35, density: 1, width: 98.6, angle: -90 },
        { name: 'Platform', type: 'dynamic', x: 60.55, y: 334.95, density: 1, width: 66.1, angle: 0 },
        {
          name: 'Pivot',
          x: 37.7,
          y: 335.7,
          type: 'gear',
          color: 'Blue',
          gearMaxAngle: -90,
          gearPower: -5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 3
        },
        { name: 'Platform', type: 'static', x: 476.9, y: 41.35, density: 1, width: 38.6, angle: -90 },
        { name: 'Platform', type: 'static', x: 346.3, y: 347, density: 1, width: 50.7, angle: 45 },
        { name: 'Platform', type: 'static', x: 21.5, y: 184.8, density: 1, width: 111.6, angle: -90 },
        { name: 'Star', x: 309.35, y: 86 },
        { name: 'Star', x: 17.35, y: 289.95 },
        { name: 'Star', x: 20.35, y: 115 }
      ]
    }),
    (wt[10] = {
      items: [
        { name: 'Platform', type: 'static', x: 666.35, y: 379.9, density: 1, width: 97.9, angle: 90 },
        { name: 'Spring', x: 172.9, y: 300.35, angle: -20, type: 'static', elasticity: 2 },
        { name: 'Basket', x: 197.35, y: 73.35 },
        { name: 'Cannon', x: 357.55, y: 382.15, lowerAngle: -70, upperAngle: 70 },
        { name: 'Platform', type: 'static', x: 259.15, y: 137.15, density: 1, width: 185.8, angle: 0 },
        { name: 'Switcher', x: 631.4, y: 432.2, angle: -30, type: 'button', color: 'Red', signalID: 2 },
        { name: 'Platform', type: 'static', x: 514.2, y: 337.15, density: 1, width: 51.8, angle: 0 },
        { name: 'Platform', type: 'dynamic', x: 611.4, y: 338.15, density: 0.1, width: 130.5, angle: 0 },
        {
          name: 'Pivot',
          x: 667.1,
          y: 338.15,
          type: 'gear',
          color: 'Green',
          gearMaxAngle: 90,
          gearPower: 6,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 1
        },
        { name: 'Spring', x: 41.35, y: 190.3, angle: 30, type: 'static', elasticity: 2.5 },
        { name: 'Platform', type: 'static', x: 640.2, y: 435.95, density: 1, width: 73.9, angle: 150 },
        { name: 'Rock', x: 515, y: 304.2, density: 5 },
        { name: 'Platform', type: 'static', x: 174.95, y: 303.95, density: 1, width: 51.7, angle: -20 },
        { name: 'Platform', type: 'static', x: 54.95, y: 298.75, density: 1, width: 201.5, angle: -90 },
        { name: 'Platform', type: 'static', x: 107.95, y: 310.05, density: 1, width: 114.6, angle: -90 },
        { name: 'Platform', type: 'static', x: 366.75, y: 401.8, density: 1, width: 389, angle: 0 },
        { name: 'Platform', type: 'static', x: 552.1, y: 405.9, density: 1, width: 96.1, angle: -90 },
        { name: 'Platform', type: 'static', x: 319.7, y: 446.2, density: 1, width: 361.6, angle: 0 },
        { name: 'Switcher', x: 544.1, y: 430.95, angle: -90, type: 'toogle', color: 'Green', signalID: 1 },
        { name: 'Platform', type: 'static', x: 100.95, y: 418.15, density: 1, width: 118.4, angle: 30 },
        { name: 'Platform', type: 'static', x: 143.4, y: 379.05, density: 1, width: 92.4, angle: 30 },
        { name: 'Platform', type: 'static', x: 37.3, y: 193.5, density: 1, width: 58, angle: 30 },
        { name: 'Platform', type: 'static', x: 175.25, y: 169, density: 1, width: 81.7, angle: -90 },
        { name: 'Star', x: 566.3, y: 46 },
        { name: 'Star', x: 202.3, y: 168 },
        { name: 'Star', x: 146.35, y: 342.95 },
        { name: 'Platform', type: 'static', x: 158.55, y: 18.15, density: 1, width: 18, angle: 0 },
        { name: 'Platform', type: 'dynamic', x: 158.4, y: 66.95, density: 1, width: 114.5, angle: 90 },
        {
          name: 'Pivot',
          x: 158.55,
          y: 18.15,
          type: 'gear',
          color: 'Red',
          gearMaxAngle: 180,
          gearPower: 5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 2
        },
        { name: 'Platform', type: 'static', x: 237.25, y: 64.8, density: 1, width: 162.8, angle: -90 }
      ]
    }),
    (wt[11] = {
      items: [
        { name: 'Platform', type: 'static', x: 62.35, y: 423.55, density: 1, width: 18, angle: 0 },
        { name: 'Switcher', x: 671.3, y: 355, angle: 180, type: 'toogle', color: 'Blue', signalID: 2 },
        { name: 'Basket', x: 372.05, y: 180.85 },
        { name: 'Mill', x: 600.95, y: 223.35, enableMotor: !0, motorSpeed: -7, signalID: 2 },
        { name: 'Platform', type: 'static', x: 482.45, y: 215.75, density: 1, width: 132.7, angle: -45 },
        { name: 'Spring', x: 63, y: 421.65, angle: 0, type: 'dynamic', elasticity: 4 },
        { name: 'Switcher', x: 671.3, y: 339.3, angle: 0, type: 'button', color: 'Red', signalID: 1 },
        { name: 'Platform', type: 'static', x: 612.45, y: 86.1, density: 1, width: 117.2, angle: -45 },
        { name: 'Platform', type: 'static', x: 280.35, y: 117, density: 1, width: 382.9, angle: 0 },
        { name: 'Spring', x: 25.45, y: 47.6, angle: 120, type: 'static', elasticity: 3 },
        { name: 'Cannon', x: 335.25, y: 437.7, lowerAngle: -70, upperAngle: 70 },
        { name: 'Platform', type: 'static', x: 670.4, y: 347.35, density: 1, width: 80.9, angle: 0 },
        { name: 'Platform', type: 'static', x: 702.9, y: 198.5, density: 1, width: 317.2, angle: 90 },
        { name: 'Platform', type: 'static', x: 97, y: 168, density: 1, width: 120, angle: 90 },
        { name: 'Platform', type: 'static', x: 361.65, y: 252.95, density: 1, width: 181, angle: 0 },
        {
          name: 'Pivot',
          x: 62.35,
          y: 421.3,
          type: 'gear',
          color: 'Red',
          gearMaxAngle: 35,
          gearPower: 5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 1
        },
        { name: 'Platform', type: 'static', x: 23.5, y: 45.95, density: 1, width: 46.5, angle: -60 },
        { name: 'Platform', type: 'static', x: 638.3, y: 333.5, density: 1, width: 47.1, angle: 90 },
        { name: 'Platform', type: 'static', x: 442.2, y: 313.1, density: 1, width: 139.5, angle: 90 },
        { name: 'Platform', type: 'static', x: 676.9, y: 48.35, density: 1, width: 69.9, angle: 0 },
        { name: 'Platform', type: 'static', x: 497.4, y: 148, density: 1, width: 95.2, angle: 45 },
        { name: 'Platform', type: 'static', x: 23.95, y: 365.1, density: 1, width: 115.6, angle: 90 },
        { name: 'Platform', type: 'static', x: 409.05, y: 149.45, density: 1, width: 83.1, angle: 90 },
        { name: 'Star', x: 552.3, y: 145 },
        { name: 'Star', x: 404.35, y: 444.95 },
        { name: 'Star', x: 24.35, y: 284.95 }
      ]
    }),
    (wt[12] = {
      items: [
        { name: 'Platform', type: 'static', x: 494, y: 104.65, density: 1, width: 18, angle: 180 },
        { name: 'Platform', type: 'static', x: 129.65, y: 217.55, density: 1, width: 18, angle: 180 },
        { name: 'Platform', type: 'static', x: 60.95, y: 102.65, density: 1, width: 18, angle: 180 },
        { name: 'Platform', type: 'dynamic', x: 108.4, y: 101.9, density: 0.5, width: 114, angle: 0 },
        { name: 'Basket', x: 606.75, y: 122.3 },
        { name: 'Cannon', x: 404.25, y: 375, lowerAngle: -70, upperAngle: 70 },
        { name: 'Platform', type: 'dynamic', x: 559.5, y: 103.9, density: 0.1, width: 147.3, angle: 0 },
        { name: 'Teleport', x: 554.3, y: 150.6, angle: 0, color: 'Red', id: 0, mulVel: 1.5 },
        { name: 'Teleport', x: 507.8, y: 163.8, angle: 180, color: 'Red', id: 0, mulVel: 3 },
        {
          name: 'Pivot',
          x: 494,
          y: 104.65,
          type: 'gear',
          color: 'Green',
          gearMaxAngle: -45,
          gearPower: -6,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 1
        },
        { name: 'Switcher', x: 118.5, y: 315.7, angle: -75, type: 'button', color: 'Green', signalID: 1 },
        { name: 'Platform', type: 'dynamic', x: 129.45, y: 170.1, density: 0.5, width: 118, angle: 90 },
        {
          name: 'Pivot',
          x: 129.65,
          y: 216.55,
          type: 'bolt',
          color: 'Yellow',
          gearMaxAngle: -120,
          gearPower: -1,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 5
        },
        {
          name: 'Pivot',
          x: 61.95,
          y: 103.65,
          type: 'bolt',
          color: 'Red',
          gearMaxAngle: 0,
          gearPower: 6,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 0
        },
        { name: 'Platform', type: 'static', x: 124.95, y: 319, density: 1, width: 60, angle: 105 },
        { name: 'Platform', type: 'static', x: 644.9, y: 104.45, density: 1, width: 112.9, angle: 90 },
        { name: 'Star', x: 40.35, y: 254.95 },
        { name: 'Star', x: 57.55, y: 67.9 },
        { name: 'Star', x: 644.1, y: 207 }
      ]
    }),
    (wt[13] = {
      items: [
        { name: 'Platform', type: 'static', x: 531.9, y: 170.2, density: 1, width: 18, angle: 0 },
        { name: 'Platform', type: 'static', x: 643.25, y: 39.85, density: 1, width: 91.7, angle: 0 },
        { name: 'Platform', type: 'static', x: 680, y: 248.7, density: 1, width: 433.9, angle: 90 },
        { name: 'Basket', x: 642.15, y: 388.6 },
        { name: 'Spring', x: 531.65, y: 171.15, angle: 0, type: 'dynamic', elasticity: 2.8 },
        { name: 'Platform', type: 'static', x: 576.9, y: 456.35, density: 1, width: 225.9, angle: 0 },
        { name: 'Platform', type: 'static', x: 64.5, y: 182.1, density: 1, width: 91.7, angle: 90 },
        { name: 'Platform', type: 'static', x: 219.5, y: 182.1, density: 1, width: 91.7, angle: 90 },
        { name: 'Swings', x: 142.55, y: 193.6, angle: -25, lowerAngle: -25, upperAngle: 25 },
        { name: 'Platform', type: 'static', x: 200.25, y: 317.8, density: 1, width: 57.7, angle: 90 },
        { name: 'Switcher', x: 169.9, y: 330.9, angle: 0, type: 'button', color: 'Purple', signalID: 1 },
        { name: 'Switcher', x: 110.4, y: 330.9, angle: 0, type: 'button', color: 'Green', signalID: 2 },
        { name: 'Swings', x: 80.25, y: 272.45, angle: -25, lowerAngle: -25, upperAngle: 30 },
        { name: 'Swings', x: 200.25, y: 272.45, angle: -30, lowerAngle: -30, upperAngle: 25 },
        { name: 'Platform', type: 'static', x: 140.25, y: 279.1, density: 1, width: 135.4, angle: 90 },
        { name: 'Platform', type: 'static', x: 79.25, y: 317.9, density: 1, width: 58, angle: 90 },
        { name: 'Platform', type: 'static', x: 43.4, y: 218.7, density: 1, width: 60.3, angle: 0 },
        { name: 'Platform', type: 'static', x: 162.55, y: 128.6, density: 1, width: 50, angle: 90 },
        { name: 'Platform', type: 'static', x: 121.55, y: 128.6, density: 1, width: 50, angle: 90 },
        { name: 'Platform', type: 'static', x: 191.75, y: 144.95, density: 1, width: 75, angle: 0 },
        { name: 'Platform', type: 'static', x: 93.65, y: 144.95, density: 1, width: 75.7, angle: 0 },
        { name: 'Platform', type: 'static', x: 250.65, y: 218.7, density: 1, width: 80.2, angle: 0 },
        { name: 'Platform', type: 'static', x: 21.25, y: 277.9, density: 1, width: 135, angle: 90 },
        { name: 'Platform', type: 'static', x: 140.65, y: 337.9, density: 1, width: 138.8, angle: 0 },
        { name: 'Platform', type: 'static', x: 94.3, y: 52.45, density: 1, width: 64.7, angle: 90 },
        { name: 'Platform', type: 'static', x: 162.25, y: 28.1, density: 1, width: 152.7, angle: 0 },
        { name: 'Cannon', x: 334.3, y: 447.5, lowerAngle: -70, upperAngle: 70 },
        { name: 'Platform', type: 'static', x: 281.8, y: 265.6, density: 1, width: 161, angle: 90 },
        { name: 'Platform', type: 'static', x: 603.9, y: 143.8, density: 1, width: 225.9, angle: 90 },
        { name: 'Platform', type: 'static', x: 603.9, y: 406.9, density: 1, width: 119, angle: 90 },
        { name: 'Platform', type: 'dynamic', x: 603.9, y: 290.85, density: 1, width: 99.9, angle: 90 },
        {
          name: 'Pivot',
          x: 604.65,
          y: 249.3,
          type: 'gear',
          color: 'Purple',
          gearMaxAngle: 180,
          gearPower: 5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 1
        },
        { name: 'Switcher', x: 251.25, y: 211.7, angle: 0, type: 'button', color: 'Blue', signalID: 3 },
        {
          name: 'Pivot',
          x: 531.9,
          y: 169.2,
          type: 'gear',
          color: 'Blue',
          gearMaxAngle: -55,
          gearPower: -5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 3
        },
        { name: 'Platform', type: 'static', x: 107.65, y: 92.45, density: 1, width: 50, angle: -135 },
        { name: 'Star', x: 141.15, y: 366.3 },
        { name: 'Star', x: 50.35, y: 317.95 },
        { name: 'Star', x: 579.3, y: 182.6 },
        { name: 'Platform', type: 'dynamic', x: 615.9, y: 369.2, density: 1, width: 40, angle: 0 },
        {
          name: 'Pivot',
          x: 604.25,
          y: 368.4,
          type: 'gear',
          color: 'Green',
          gearMaxAngle: 40,
          gearPower: 5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 2
        },
        { name: 'Platform', type: 'dynamic', x: 668.85, y: 369.2, density: 1, width: 40, angle: 0 },
        {
          name: 'Pivot',
          x: 680.25,
          y: 368.4,
          type: 'gear',
          color: 'Green',
          gearMaxAngle: -40,
          gearPower: -5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 2
        }
      ]
    }),
    (wt[14] = {
      items: [
        { name: 'Platform', type: 'static', x: 547.55, y: 145, density: 1, width: 65.2, angle: 150 },
        { name: 'Platform', type: 'static', x: 229.55, y: 64.15, density: 1, width: 18, angle: 0 },
        { name: 'Platform', type: 'static', x: 133.75, y: 268.85, density: 1, width: 18, angle: 0 },
        { name: 'Platform', type: 'static', x: 251.95, y: 268.85, density: 1, width: 18, angle: 0 },
        { name: 'Basket', x: 207.8, y: 148.9 },
        { name: 'Platform', type: 'static', x: 117.85, y: 423.05, density: 1, width: 100, angle: 0 },
        { name: 'Box', x: 192.45, y: 253.6, angle: 0, density: 1 },
        { name: 'Platform', type: 'static', x: 571.15, y: 109.25, density: 1, width: 117.1, angle: 90 },
        { name: 'Platform', type: 'static', x: 659.45, y: 106.75, density: 1, width: 117.3, angle: 90 },
        { name: 'Cannon', x: 564.3, y: 410.85, lowerAngle: -70, upperAngle: 70 },
        { name: 'Platform', type: 'static', x: 346.95, y: 106.95, density: 1, width: 377.7, angle: 0 },
        { name: 'Platform', type: 'static', x: 410.4, y: 158.95, density: 1, width: 342.7, angle: 0 },
        { name: 'Platform', type: 'dynamic', x: 207.65, y: 63.95, density: 1, width: 62.9, angle: 0 },
        {
          name: 'Pivot',
          x: 229.55,
          y: 64.15,
          type: 'gear',
          color: 'Yellow',
          gearMaxAngle: 35,
          gearPower: 6,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 2
        },
        { name: 'Platform', type: 'static', x: 158.1, y: 445.95, density: 1, width: 62.3, angle: 90 },
        { name: 'Platform', type: 'static', x: 161.9, y: 468.1, density: 1, width: 25.8, angle: 0 },
        { name: 'Platform', type: 'static', x: 310, y: 423.8, density: 1, width: 180, angle: 0 },
        { name: 'Platform', type: 'static', x: 391.9, y: 358.65, density: 1, width: 148.3, angle: 90 },
        { name: 'Platform', type: 'static', x: 320.95, y: 254.6, density: 1, width: 210.3, angle: 90 },
        { name: 'Platform', type: 'static', x: 369.95, y: 406.1, density: 1, width: 65.2, angle: 150 },
        { name: 'Platform', type: 'dynamic', x: 156.9, y: 281.1, density: 1, width: 71.8, angle: 30 },
        { name: 'Platform', type: 'dynamic', x: 228.95, y: 281.1, density: 1, width: 71.8, angle: -30 },
        {
          name: 'Pivot',
          x: 133.75,
          y: 268.85,
          type: 'gear',
          color: 'Green',
          gearMaxAngle: 90,
          gearPower: 6,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 1
        },
        {
          name: 'Pivot',
          x: 251.95,
          y: 268.85,
          type: 'gear',
          color: 'Green',
          gearMaxAngle: -90,
          gearPower: -6,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 1
        },
        { name: 'Switcher', x: 694.3, y: 189.4, angle: -90, type: 'toogle', color: 'Green', signalID: 1 },
        { name: 'Switcher', x: 29.85, y: 410.25, angle: 90, type: 'toogle', color: 'Yellow', signalID: 2 },
        { name: 'Ball', x: 190.55, y: 45.35 },
        { name: 'Platform', type: 'static', x: 615.7, y: 57.1, density: 1, width: 107.7, angle: 0 },
        { name: 'Platform', type: 'static', x: 134.7, y: 209.4, density: 1, width: 241.8, angle: 0 },
        { name: 'Platform', type: 'static', x: 247.1, y: 184.1, density: 1, width: 69.3, angle: 90 },
        { name: 'Platform', type: 'static', x: 22.85, y: 315.6, density: 1, width: 229.4, angle: 90 },
        { name: 'Platform', type: 'static', x: 229.1, y: 445.2, density: 1, width: 61.8, angle: 90 },
        { name: 'Platform', type: 'static', x: 225.5, y: 467.1, density: 1, width: 26.8, angle: 0 },
        { name: 'Platform', type: 'static', x: 702, y: 183.5, density: 1, width: 71.3, angle: 90 },
        { name: 'Platform', type: 'static', x: 680.75, y: 156.85, density: 1, width: 60.5, angle: 0 },
        { name: 'Platform', type: 'static', x: 167, y: 158.55, density: 1, width: 121.3, angle: 90 },
        { name: 'Star', x: 391.35, y: 80 },
        { name: 'Star', x: 194.35, y: 475.95 },
        { name: 'Star', x: 617.35, y: 86.05 }
      ]
    }),
    (wt[15] = {
      items: [
        { name: 'Platform', type: 'static', x: 590.15, y: 174.75, density: 1, width: 18, angle: 0 },
        { name: 'Platform', type: 'dynamic', x: 590.15, y: 133.5, density: 1, width: 106.3, angle: 90 },
        { name: 'Platform', type: 'static', x: 640.75, y: 199.4, density: 1, width: 18, angle: 0 },
        { name: 'Switcher', x: 680.9, y: 207.8, angle: 180, type: 'toogle', color: 'Purple', signalID: 3 },
        { name: 'Basket', x: 333.4, y: 404 },
        {
          name: 'Pivot',
          x: 590.15,
          y: 174.75,
          type: 'bolt',
          color: 'Red',
          gearMaxAngle: 0,
          gearPower: 1,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 0
        },
        { name: 'Switcher', x: 681.05, y: 192.65, angle: 0, type: 'button', color: 'Green', signalID: 1 },
        { name: 'Mill', x: 187, y: 194, enableMotor: !0, motorSpeed: -5, signalID: 1 },
        { name: 'Platform', type: 'static', x: 314.3, y: 191.95, density: 1, width: 110.2, angle: -45 },
        { name: 'Platform', type: 'static', x: 309.7, y: 122.7, density: 1, width: 122.3, angle: 45 },
        { name: 'Platform', type: 'static', x: 91.95, y: 343.5, density: 1, width: 119.8, angle: 0 },
        { name: 'Platform', type: 'static', x: 278, y: 268.4, density: 1, width: 96, angle: 90 },
        { name: 'Switcher', x: 213, y: 318.25, angle: -15, type: 'toogle', color: 'Yellow', signalID: 2 },
        { name: 'Platform', type: 'static', x: 268.9, y: 375.9, density: 1, width: 62.1, angle: 0 },
        { name: 'Platform', type: 'static', x: 392.9, y: 375.9, density: 1, width: 61.8, angle: 0 },
        { name: 'Platform', type: 'static', x: 453.9, y: 39.65, density: 1, width: 496.1, angle: 0 },
        { name: 'Cannon', x: 489.3, y: 312.45, lowerAngle: -70, upperAngle: 70 },
        { name: 'Platform', type: 'static', x: 680.55, y: 200.65, density: 1, width: 45, angle: 0 },
        { name: 'Platform', type: 'static', x: 213.15, y: 325.8, density: 1, width: 149.4, angle: -15 },
        { name: 'Platform', type: 'dynamic', x: 640.55, y: 229.65, density: 1, width: 82, angle: 90 },
        {
          name: 'Pivot',
          x: 640.75,
          y: 199.4,
          type: 'gear',
          color: 'Yellow',
          gearMaxAngle: 180,
          gearPower: 5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 2
        },
        { name: 'Platform', type: 'static', x: 120.25, y: 130.15, density: 1, width: 269.4, angle: -45 },
        { name: 'Platform', type: 'static', x: 260.25, y: 296.05, density: 1, width: 61, angle: -45 },
        { name: 'Star', x: 690.3, y: 375.95 },
        { name: 'Star', x: 89.35, y: 315.95 },
        { name: 'Star', x: 678.3, y: 70 },
        { name: 'Platform', type: 'dynamic', x: 307, y: 375.9, density: 1, width: 40, angle: 0 },
        {
          name: 'Pivot',
          x: 295.35,
          y: 375.1,
          type: 'gear',
          color: 'Purple',
          gearMaxAngle: 40,
          gearPower: 5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 3
        },
        { name: 'Platform', type: 'dynamic', x: 359.95, y: 375.9, density: 1, width: 40, angle: 0 },
        {
          name: 'Pivot',
          x: 371.35,
          y: 375.1,
          type: 'gear',
          color: 'Purple',
          gearMaxAngle: -40,
          gearPower: -5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 3
        }
      ]
    }),
    (wt[16] = {
      items: [
        { name: 'Platform', type: 'static', x: 257.2, y: 240.45, density: 1, width: 408.7, angle: 0 },
        { name: 'Platform', type: 'static', x: 602.95, y: 299.6, density: 1, width: 144.1, angle: 90 },
        { name: 'Basket', x: 98.35, y: 407.3 },
        { name: 'Cannon', x: 602.95, y: 205.55, lowerAngle: -70, upperAngle: 70 },
        { name: 'Platform', type: 'static', x: 205.55, y: 190.2, density: 1, width: 114.6, angle: 90 },
        { name: 'Platform', type: 'static', x: 135.8, y: 203.65, density: 1, width: 365.9, angle: 90 },
        { name: 'Switcher', x: 610.15, y: 351.6, angle: 90, type: 'toogle', color: 'Blue', signalID: 3 },
        { name: 'Platform', type: 'static', x: 61.5, y: 323.95, density: 1, width: 185, angle: 90 },
        { name: 'Switcher', x: 596.35, y: 351.6, angle: -90, type: 'toogle', color: 'Green', signalID: 4 },
        { name: 'Platform', type: 'dynamic', x: 179.05, y: 142.3, density: 1, width: 65.8, angle: 0 },
        {
          name: 'Pivot',
          x: 207.3,
          y: 142.35,
          type: 'gear',
          color: 'Blue',
          gearMaxAngle: 90,
          gearPower: 5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 3
        },
        { name: 'Switcher', x: 102.7, y: 113.55, angle: 0, type: 'button', color: 'Green', signalID: 2 },
        { name: 'Platform', type: 'static', x: 493.5, y: 309.35, density: 1, width: 155.9, angle: 90 },
        { name: 'Platform', type: 'static', x: 708.2, y: 209.55, density: 1, width: 353.8, angle: 90 },
        { name: 'Platform', type: 'static', x: 68.6, y: 76, density: 1, width: 109.1, angle: 90 },
        { name: 'Platform', type: 'static', x: 524.65, y: 377.95, density: 1, width: 77.3, angle: 0 },
        { name: 'Platform', type: 'static', x: 680.05, y: 377.6, density: 1, width: 75.3, angle: 0 },
        { name: 'Platform', type: 'static', x: 99.95, y: 121.3, density: 1, width: 79.7, angle: 180 },
        { name: 'Platform', type: 'static', x: 526.3, y: 344.85, density: 1, width: 92.9, angle: 45 },
        { name: 'Platform', type: 'static', x: 679.2, y: 345.5, density: 1, width: 85.6, angle: 135 },
        { name: 'Platform', type: 'static', x: 603.5, y: 218.65, density: 1, width: 72.9, angle: 0 },
        { name: 'Star', x: 355.3, y: 54.45 },
        { name: 'Star', x: 684.3, y: 57 },
        { name: 'Star', x: 240.1, y: 188 },
        { name: 'Teleport', x: 170.5, y: 195.6, angle: 0, color: 'Red', id: 0, mulVel: 1 },
        { name: 'Teleport', x: 102.6, y: 54.55, angle: 180, color: 'Red', id: 0, mulVel: 1 },
        { name: 'Mill', x: 229.45, y: 330.9, enableMotor: !0, motorSpeed: -5, signalID: 2 },
        { name: 'Mill', x: 389.45, y: 330.9, enableMotor: !0, motorSpeed: -5, signalID: 4 },
        { name: 'Platform', type: 'static', x: 313.85, y: 420.4, density: 1, width: 377.8, angle: 0 },
        { name: 'Platform', type: 'static', x: 437.1, y: 207.9, density: 1, width: 69.4, angle: 60 },
        { name: 'Platform', type: 'static', x: 476.7, y: 370.2, density: 1, width: 36.1, angle: 135 },
        { name: 'Platform', type: 'static', x: 509.75, y: 207.5, density: 1, width: 70.3, angle: -60 },
        { name: 'Platform', type: 'static', x: 603.5, y: 318.65, density: 1, width: 72.9, angle: 0 }
      ]
    }),
    (wt[17] = {
      items: [
        { name: 'Platform', type: 'static', x: 56.35, y: 124.35, density: 1, width: 18, angle: 0 },
        { name: 'Platform', type: 'static', x: 459.3, y: 11.35, density: 1, width: 18, angle: 0 },
        { name: 'Switcher', x: 631.55, y: 267.35, angle: -90, type: 'toogle', color: 'Blue', signalID: 1 },
        { name: 'Basket', x: 674.55, y: 378.4 },
        { name: 'Cannon', x: 484.25, y: 432.2, lowerAngle: -60, upperAngle: 70 },
        { name: 'Box', x: 100.8, y: 339.2, angle: 0, density: 0.4 },
        { name: 'Box', x: 100.8, y: 294.2, angle: 0, density: 0.4 },
        { name: 'Platform', type: 'static', x: 638.55, y: 290.7, density: 1, width: 327.6, angle: 90 },
        { name: 'Platform', type: 'static', x: 709.15, y: 230.25, density: 1, width: 450.4, angle: -90 },
        { name: 'Platform', type: 'static', x: 56.7, y: 371.55, density: 1, width: 68, angle: 0 },
        { name: 'Platform', type: 'dynamic', x: 459.15, y: 62, density: 1, width: 120, angle: 90 },
        { name: 'Platform', type: 'static', x: 697.75, y: 252, density: 1, width: 45, angle: -45 },
        { name: 'Platform', type: 'static', x: 655, y: 204.25, density: 1, width: 50, angle: 45 },
        { name: 'Spring', x: 56.95, y: 126, angle: 0, type: 'dynamic', elasticity: 4 },
        { name: 'Platform', type: 'static', x: 143.95, y: 371.9, density: 1, width: 68, angle: 0 },
        { name: 'Platform', type: 'static', x: 100.95, y: 422.9, density: 1, width: 72, angle: 0 },
        { name: 'Switcher', x: 99.95, y: 415.9, angle: 0, type: 'button', color: 'Red', signalID: 2 },
        {
          name: 'Pivot',
          x: 56.35,
          y: 124.35,
          type: 'gear',
          color: 'Blue',
          gearMaxAngle: 75,
          gearPower: 5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 1
        },
        { name: 'Platform', type: 'static', x: 588.9, y: 267.4, density: 1, width: 81.9, angle: 90 },
        {
          name: 'Pivot',
          x: 459.3,
          y: 11.35,
          type: 'gear',
          color: 'Red',
          gearMaxAngle: 0,
          gearPower: -5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 2
        },
        { name: 'Platform', type: 'static', x: 586.5, y: 447.5, density: 1, width: 267.1, angle: 0 },
        { name: 'Platform', type: 'static', x: 536.55, y: 136, density: 1, width: 224, angle: 0 },
        { name: 'Platform', type: 'static', x: 575.95, y: 219.9, density: 1, width: 50, angle: 45 },
        { name: 'Platform', type: 'static', x: 72.95, y: 397.35, density: 1, width: 68.8, angle: 90 },
        { name: 'Platform', type: 'static', x: 127.95, y: 397.35, density: 1, width: 68.8, angle: 90 },
        { name: 'Platform', type: 'static', x: 646.45, y: 10.2, density: 1, width: 143.2, angle: 0 },
        { name: 'Platform', type: 'static', x: 413.95, y: 153.15, density: 1, width: 56.3, angle: -45 },
        { name: 'Star', x: 592.3, y: 193 },
        { name: 'Star', x: 31.35, y: 340.95 },
        { name: 'Star', x: 424.3, y: 453.95 }
      ]
    }),
    (wt[18] = {
      items: [
        { name: 'Platform', type: 'static', x: 57.4, y: 144.15, density: 1, width: 206.7, angle: -90 },
        { name: 'Basket', x: 657.85, y: 419.4 },
        { name: 'Cannon', x: 572.7, y: 354.25, lowerAngle: -70, upperAngle: 70 },
        { name: 'Platform', type: 'static', x: 134.85, y: 330.6, density: 1, width: 249.3, angle: 49 },
        { name: 'Platform', type: 'static', x: 295.15, y: 422.95, density: 1, width: 177.3, angle: 0 },
        { name: 'Platform', type: 'static', x: 464.2, y: 421.75, density: 1, width: 63.3, angle: 0 },
        { name: 'Platform', type: 'static', x: 589.65, y: 421.7, density: 1, width: 89.6, angle: 0 },
        { name: 'Platform', type: 'static', x: 522.7, y: 467, density: 1, width: 51.8, angle: 0 },
        { name: 'Platform', type: 'static', x: 409.1, y: 467, density: 1, width: 51.8, angle: 0 },
        { name: 'Rock', x: 409.1, y: 45, density: 1 },
        { name: 'Rock', x: 522.7, y: 45, density: 1 },
        { name: 'Platform', type: 'static', x: 690.15, y: 393.2, density: 1, width: 75, angle: 90 },
        { name: 'Switcher', x: 621.8, y: 76.75, angle: 180, type: 'toogle', color: 'Blue', signalID: 1 },
        { name: 'Star', x: 409.35, y: 432.35 },
        { name: 'Star', x: 182.35, y: 170.65 },
        { name: 'Star', x: 522, y: 432.35 },
        { name: 'Platform', type: 'static', x: 443.35, y: 83.2, density: 1, width: 18, angle: 0 },
        { name: 'Platform', type: 'dynamic', x: 419.65, y: 82.2, density: 2, width: 65.4, angle: 0 },
        {
          name: 'Pivot',
          x: 443.35,
          y: 82.5,
          type: 'gear',
          color: 'Blue',
          gearMaxAngle: -90,
          gearPower: -7,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 1
        },
        { name: 'Platform', type: 'static', x: 371.95, y: 90.55, density: 1, width: 142.4, angle: -90 },
        { name: 'Platform', type: 'static', x: 556.35, y: 83.2, density: 1, width: 18, angle: 0 },
        { name: 'Platform', type: 'dynamic', x: 532.7, y: 82.2, density: 2, width: 65.4, angle: 0 },
        {
          name: 'Pivot',
          x: 556.35,
          y: 82.5,
          type: 'gear',
          color: 'Blue',
          gearMaxAngle: -90,
          gearPower: -7,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 1
        },
        { name: 'Platform', type: 'static', x: 484.95, y: 88.55, density: 1, width: 142.4, angle: -90 },
        { name: 'Switcher', x: 680.65, y: 76.95, angle: 180, type: 'toogle', color: 'Yellow', signalID: 2 },
        { name: 'Platform', type: 'static', x: 443.35, y: 152.2, density: 1, width: 18, angle: 0 },
        { name: 'Platform', type: 'dynamic', x: 419.65, y: 151.2, density: 2, width: 65.4, angle: 0 },
        {
          name: 'Pivot',
          x: 443.35,
          y: 151.5,
          type: 'gear',
          color: 'Yellow',
          gearMaxAngle: -90,
          gearPower: -7,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 2
        },
        { name: 'Platform', type: 'static', x: 556.35, y: 152.2, density: 1, width: 18, angle: 0 },
        { name: 'Platform', type: 'dynamic', x: 532.65, y: 151.2, density: 2, width: 65.4, angle: 0 },
        {
          name: 'Pivot',
          x: 556.35,
          y: 151.5,
          type: 'gear',
          color: 'Yellow',
          gearMaxAngle: -90,
          gearPower: -7,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 2
        },
        { name: 'Platform', type: 'static', x: 646.6, y: 69.1, density: 1, width: 146.8, angle: 0 },
        { name: 'Platform', type: 'static', x: 579.95, y: 131.55, density: 1, width: 142.4, angle: -90 },
        { name: 'Platform', type: 'static', x: 626.1, y: 363.1, density: 1, width: 146.8, angle: 0 }
      ]
    }),
    (wt[19] = {
      items: [
        { name: 'Platform', type: 'static', x: 527.95, y: 137.75, density: 1, width: 18, angle: 0 },
        { name: 'Platform', type: 'static', x: 146.75, y: 437.05, density: 1, width: 73.2, angle: -60 },
        { name: 'Platform', type: 'dynamic', x: 478.2, y: 138, density: 1, width: 120.7, angle: 0 },
        { name: 'Basket', x: 509.85, y: 403.7 },
        { name: 'Cannon', x: 216, y: 296.1, lowerAngle: -70, upperAngle: 70 },
        { name: 'Switcher', x: 71.5, y: 441.9, angle: 60, type: 'button', color: 'Blue', signalID: 2 },
        { name: 'Platform', type: 'static', x: 215.85, y: 303.95, density: 1, width: 55.7, angle: 0 },
        { name: 'Platform', type: 'static', x: 59.35, y: 436.8, density: 1, width: 74, angle: 60 },
        {
          name: 'Pivot',
          x: 527.95,
          y: 137.75,
          type: 'gear',
          color: 'Red',
          gearMaxAngle: -55,
          gearPower: -5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 1
        },
        { name: 'Spring', x: 383, y: 438.55, angle: -15, type: 'static', elasticity: 3 },
        { name: 'Spring', x: 398.2, y: 45.4, angle: -75, type: 'static', elasticity: 2 },
        { name: 'Box', x: 440.35, y: 107, angle: 0, density: 3 },
        { name: 'Platform', type: 'static', x: 88.9, y: 25.45, density: 1, width: 172, angle: 0 },
        { name: 'Platform', type: 'static', x: 163.85, y: 68.95, density: 1, width: 206, angle: 0 },
        { name: 'Platform', type: 'static', x: 11.85, y: 169.05, density: 1, width: 305.9, angle: 90 },
        { name: 'Platform', type: 'static', x: 69.85, y: 190.45, density: 1, width: 261, angle: 90 },
        { name: 'Switcher', x: 40.35, y: 305.3, angle: 0, type: 'button', color: 'Red', signalID: 1 },
        { name: 'Platform', type: 'static', x: 615.25, y: 140.5, density: 1, width: 267.1, angle: 90 },
        { name: 'Teleport', x: 123.15, y: 123.2, angle: 150, color: 'Red', id: 3, mulVel: 1 },
        { name: 'Teleport', x: 655.3, y: 130.65, angle: 180, color: 'Red', id: 3, mulVel: 1 },
        { name: 'Platform', type: 'static', x: 533.05, y: 347.55, density: 1, width: 227.3, angle: -45 },
        { name: 'Platform', type: 'static', x: 40.85, y: 313.05, density: 1, width: 75.9, angle: 0 },
        { name: 'Platform', type: 'static', x: 382.95, y: 438.9, density: 1, width: 38.4, angle: -15 },
        { name: 'Platform', type: 'static', x: 400.95, y: 47, density: 1, width: 38.4, angle: -75 },
        { name: 'Star', x: 102.35, y: 464.95 },
        { name: 'Star', x: 526.3, y: 94 },
        { name: 'Star', x: 418.2, y: 439.95 },
        { name: 'Platform', type: 'static', x: 620.65, y: 344.95, density: 1, width: 223.1, angle: -45 },
        { name: 'Platform', type: 'dynamic', x: 667.85, y: 227.8, density: 1, width: 120.7, angle: 60 },
        {
          name: 'Pivot',
          x: 692.95,
          y: 270.75,
          type: 'gear',
          color: 'Blue',
          gearMaxAngle: 90,
          gearPower: 5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 2
        }
      ]
    }),
    (wt[20] = {
      items: [
        { name: 'Platform', type: 'static', x: 35.8, y: 442.1, density: 1, width: 18, angle: 0 },
        { name: 'Platform', type: 'static', x: 224.35, y: 282.3, density: 1, width: 18, angle: 0 },
        { name: 'Platform', type: 'static', x: 112.2, y: 78.75, density: 1, width: 18, angle: 0 },
        { name: 'Switcher', x: 675.4, y: 331.4, angle: -45, type: 'button', color: 'Red', signalID: 2 },
        { name: 'Platform', type: 'static', x: 195.95, y: 256.95, density: 1, width: 381.7, angle: 0 },
        { name: 'Basket', x: 177.15, y: 338.4 },
        { name: 'Platform', type: 'dynamic', x: 143.35, y: 79.4, density: 0.2, width: 83, angle: 0 },
        { name: 'Cannon', x: 452.5, y: 352.45, lowerAngle: -70, upperAngle: 70 },
        { name: 'Spring', x: 34.8, y: 444.1, angle: -20, type: 'dynamic', elasticity: 2.15 },
        {
          name: 'Pivot',
          x: 112.2,
          y: 78.75,
          type: 'bolt',
          color: 'Blue',
          gearMaxAngle: 0,
          gearPower: 1,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 0
        },
        { name: 'Switcher', x: 45.35, y: 108.35, angle: 0, type: 'button', color: 'Blue', signalID: 1 },
        { name: 'Platform', type: 'dynamic', x: 262.05, y: 282.05, density: 1, width: 96, angle: 0 },
        {
          name: 'Pivot',
          x: 224.35,
          y: 282.3,
          type: 'gear',
          color: 'Red',
          gearMaxAngle: 99,
          gearPower: 5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 2
        },
        { name: 'Platform', type: 'static', x: 198.8, y: 15.9, density: 1, width: 501.3, angle: 90 },
        { name: 'Platform', type: 'static', x: 578.95, y: 159, density: 1, width: 70.5, angle: 45 },
        { name: 'Platform', type: 'static', x: 620.65, y: 136.75, density: 1, width: 70.6, angle: 45 },
        { name: 'Platform', type: 'static', x: 645.8, y: 370.35, density: 1, width: 161.8, angle: 135 },
        { name: 'Platform', type: 'static', x: 584.7, y: 367.9, density: 1, width: 52.1, angle: 135 },
        { name: 'Platform', type: 'static', x: 473.05, y: 383.65, density: 1, width: 199.9, angle: 0 },
        { name: 'Platform', type: 'static', x: 264.45, y: 153.45, density: 1, width: 226.3, angle: 90 },
        { name: 'Platform', type: 'static', x: 194.45, y: 99, density: 1, width: 25.9, angle: 0 },
        { name: 'Platform', type: 'static', x: 44.75, y: 116.35, density: 1, width: 41.5, angle: 180 },
        { name: 'Platform', type: 'static', x: 599.7, y: 265.4, density: 1, width: 187, angle: 90 },
        { name: 'Platform', type: 'static', x: 641.95, y: 264.95, density: 1, width: 230, angle: 90 },
        { name: 'Platform', type: 'static', x: 340.8, y: 422.95, density: 1, width: 516.1, angle: 0 },
        { name: 'Platform', type: 'static', x: 676.3, y: 107.9, density: 1, width: 70.6, angle: 45 },
        { name: 'Platform', type: 'static', x: 697.4, y: 223.75, density: 1, width: 201.1, angle: 90 },
        { name: 'Platform', type: 'static', x: 378.8, y: 319.95, density: 1, width: 144, angle: 90 },
        { name: 'Star', x: 554.3, y: 356.95 },
        { name: 'Star', x: 303.35, y: 202.15 },
        { name: 'Star', x: 693.3, y: 75 },
        { name: 'Teleport', x: 231.05, y: 212.55, angle: 0, color: 'Red', id: 3, mulVel: 1 },
        { name: 'Teleport', x: 144.4, y: 130.3, angle: 0, color: 'Red', id: 3, mulVel: 2 },
        {
          name: 'Pivot',
          x: 35.8,
          y: 442.1,
          type: 'gear',
          color: 'Blue',
          gearMaxAngle: 20,
          gearPower: 5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 1
        }
      ]
    }),
    (wt[21] = {
      items: [
        { name: 'Platform', type: 'static', x: 510.9, y: 195, density: 1, width: 29.9, angle: 90 },
        { name: 'Platform', type: 'static', x: 129.35, y: 208.35, density: 1, width: 18, angle: 0 },
        { name: 'Basket', x: 652.2, y: 203.1 },
        { name: 'Cannon', x: 480.25, y: 456.4, lowerAngle: -20, upperAngle: 70 },
        { name: 'Platform', type: 'static', x: 650, y: 438.65, density: 1, width: 138.2, angle: 0 },
        { name: 'Platform', type: 'static', x: 710, y: 278.45, density: 1, width: 338, angle: 90 },
        { name: 'Platform', type: 'static', x: 304.65, y: 465.25, density: 1, width: 589.4, angle: 0 },
        { name: 'Platform', type: 'static', x: 214.85, y: 100.95, density: 1, width: 60.3, angle: -90 },
        { name: 'Platform', type: 'dynamic', x: 367.95, y: 103.9, density: 1, width: 260.6, angle: 0 },
        { name: 'Platform', type: 'dynamic', x: 231.1, y: 122.15, density: 1, width: 50.7, angle: 0 },
        {
          name: 'Pivot',
          x: 213.95,
          y: 122.6,
          type: 'gear',
          color: 'Green',
          gearMaxAngle: 30,
          gearPower: 1,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 2
        },
        { name: 'Platform', type: 'static', x: 549.5, y: 200, density: 1, width: 145, angle: 0 },
        { name: 'Teleport', x: 209.55, y: 35.3, angle: 120, color: 'Red', id: 1, mulVel: 1 },
        { name: 'Teleport', x: 560.3, y: 252.15, angle: -135, color: 'Red', id: 1, mulVel: 1 },
        { name: 'Teleport', x: 33.2, y: 421.05, angle: 0, color: 'Blue', id: 5, mulVel: 1.5 },
        { name: 'Teleport', x: 261.8, y: 258, angle: 120, color: 'Blue', id: 5, mulVel: 1 },
        { name: 'Platform', type: 'dynamic', x: 129, y: 258.4, density: 0.05, width: 120.9, angle: -90 },
        {
          name: 'Pivot',
          x: 129.35,
          y: 209.35,
          type: 'gear',
          color: 'Purple',
          gearMaxAngle: 15,
          gearPower: 12,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 1
        },
        { name: 'Platform', type: 'static', x: 214.7, y: 209, density: 1, width: 60.2, angle: 0 },
        { name: 'Platform', type: 'static', x: 191.95, y: 179.95, density: 1, width: 221.9, angle: 90 },
        { name: 'Switcher', x: 163.6, y: 225.95, angle: 0, type: 'button', color: 'Green', signalID: 2 },
        { name: 'Platform', type: 'static', x: 518.9, y: 70.45, density: 1, width: 122.9, angle: 90 },
        { name: 'Platform', type: 'dynamic', x: 507.4, y: 123.4, density: 1, width: 41.2, angle: 0 },
        {
          name: 'Pivot',
          x: 520.3,
          y: 122.35,
          type: 'gear',
          color: 'Green',
          gearMaxAngle: -90,
          gearPower: -1,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 2
        },
        { name: 'Switcher', x: 453.4, y: 228.3, angle: 150, type: 'toogle', color: 'Purple', signalID: 1 },
        { name: 'Spring', x: 643.05, y: 407.05, angle: -60, type: 'static', elasticity: 4.2 },
        { name: 'Platform', type: 'static', x: 589.9, y: 451.9, density: 1, width: 43.9, angle: 90 },
        { name: 'Platform', type: 'static', x: 646.4, y: 407.6, density: 1, width: 39.7, angle: 120 },
        { name: 'Platform', type: 'static', x: 451.05, y: 219.65, density: 1, width: 83.5, angle: -30 },
        { name: 'Platform', type: 'static', x: 612.95, y: 226.15, density: 1, width: 70.3, angle: 90 },
        { name: 'Platform', type: 'static', x: 592.15, y: 221.75, density: 1, width: 68.2, angle: 45 },
        { name: 'Platform', type: 'static', x: 216.2, y: 245.8, density: 1, width: 95.4, angle: -60 },
        { name: 'Platform', type: 'static', x: 697.35, y: 190.2, density: 1, width: 43.2, angle: -45 },
        { name: 'Platform', type: 'static', x: 203.25, y: 78, density: 1, width: 40.6, angle: 0 },
        { name: 'Platform', type: 'static', x: 172.7, y: 232.95, density: 1, width: 60.2, angle: 0 },
        { name: 'Star', x: 682.3, y: 410.95 },
        { name: 'Star', x: 685.35, y: 260.2 },
        { name: 'Star', x: 33.35, y: 89 }
      ]
    }),
    (wt[22] = {
      items: [
        { name: 'Platform', type: 'static', x: 170.45, y: 116.6, density: 1, width: 18, angle: 0 },
        { name: 'Basket', x: 598.6, y: 405.2 },
        { name: 'Cannon', x: 291.6, y: 405.15, lowerAngle: -70, upperAngle: 70 },
        { name: 'Platform', type: 'static', x: 651.55, y: 350.35, density: 1, width: 209.5, angle: 90 },
        { name: 'Spring', x: 170.6, y: 117.6, angle: 0, type: 'dynamic', elasticity: 10 },
        { name: 'Platform', type: 'static', x: 40.4, y: 375.95, density: 1, width: 153.6, angle: -90 },
        { name: 'Platform', type: 'static', x: 651.45, y: 195.7, density: 1, width: 70.8, angle: -90 },
        { name: 'Box', x: 537.75, y: 119.25, angle: 0, density: 0.6 },
        { name: 'Platform', type: 'static', x: 416.95, y: 150.95, density: 1, width: 284.5, angle: 0 },
        { name: 'Platform', type: 'dynamic', x: 59.75, y: 258.8, density: 1, width: 119, angle: -71 },
        { name: 'Platform', type: 'static', x: 101.5, y: 329.4, density: 1, width: 246.9, angle: 90 },
        {
          name: 'Pivot',
          x: 44.3,
          y: 306.3,
          type: 'gear',
          color: 'Purple',
          gearMaxAngle: -110,
          gearPower: -5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 2
        },
        { name: 'Switcher', x: 71.4, y: 435.85, angle: 0, type: 'button', color: 'Green', signalID: 3 },
        { name: 'Switcher', x: 417.85, y: 193.4, angle: -135, type: 'toogle', color: 'Purple', signalID: 2 },
        {
          name: 'Pivot',
          x: 170.45,
          y: 113.6,
          type: 'gear',
          color: 'Green',
          gearMaxAngle: 90,
          gearPower: 1,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 3
        },
        { name: 'Platform', type: 'static', x: 638.9, y: 352.9, density: 1, width: 40.6, angle: 135 },
        { name: 'Platform', type: 'static', x: 459.9, y: 187, density: 1, width: 88.1, angle: 90 },
        { name: 'Platform', type: 'static', x: 421.95, y: 186.35, density: 1, width: 107.7, angle: -135 },
        { name: 'Platform', type: 'static', x: 71.75, y: 443.85, density: 1, width: 80.7, angle: 0 },
        { name: 'Platform', type: 'static', x: 549.8, y: 298.7, density: 1, width: 312, angle: 90 },
        { name: 'Platform', type: 'static', x: 560.2, y: 353.15, density: 1, width: 40.6, angle: -135 },
        { name: 'Platform', type: 'static', x: 559.25, y: 394, density: 1, width: 40.6, angle: -135 },
        { name: 'Platform', type: 'static', x: 641.85, y: 397.9, density: 1, width: 40.6, angle: 135 },
        { name: 'Star', x: 425.3, y: 433.95 },
        { name: 'Star', x: 70.35, y: 351.95 },
        { name: 'Star', x: 506.3, y: 243 },
        { name: 'Platform', type: 'static', x: 703.45, y: 120.15, density: 1, width: 221.9, angle: -90 }
      ]
    }),
    (wt[23] = {
      items: [
        { name: 'Platform', type: 'static', x: 338.05, y: 427.95, density: 1, width: 105.9, angle: -65 },
        { name: 'Platform', type: 'static', x: 189.1, y: 424.8, density: 1, width: 112.8, angle: 65 },
        { name: 'Mill', x: 264.65, y: 380.35, enableMotor: !0, motorSpeed: 4, signalID: 2 },
        { name: 'Platform', type: 'static', x: 707.1, y: 355.9, density: 1, width: 207.8, angle: 90 },
        { name: 'Switcher', x: 700.55, y: 174.35, angle: -90, type: 'button', color: 'Purple', signalID: 3 },
        { name: 'Rock', x: 426.1, y: 348.2, density: 0.05 },
        { name: 'Spring', x: 51.9, y: 437.35, angle: 15, type: 'static', elasticity: 3.5 },
        { name: 'Platform', type: 'static', x: 637, y: 279.7, density: 1, width: 356.7, angle: 90 },
        { name: 'Platform', type: 'static', x: 631.1, y: 451.35, density: 1, width: 177.8, angle: 0 },
        { name: 'Cannon', x: 585.3, y: 442.55, lowerAngle: -70, upperAngle: 70 },
        { name: 'Platform', type: 'static', x: 377.65, y: 138.95, density: 1, width: 103.8, angle: 0 },
        { name: 'Switcher', x: 583.45, y: 108.2, angle: -176, type: 'toogle', color: 'Yellow', signalID: 1 },
        { name: 'Platform', type: 'dynamic', x: 401.7, y: 383.15, density: 1, width: 106.2, angle: 0 },
        {
          name: 'Pivot',
          x: 359.75,
          y: 382.9,
          type: 'gear',
          color: 'Yellow',
          gearMaxAngle: -65,
          gearPower: -10,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 1
        },
        { name: 'Basket', x: 298.35, y: 123.7 },
        { name: 'Platform', type: 'static', x: 261.45, y: 111, density: 1, width: 81.6, angle: 90 },
        { name: 'Switcher', x: 674.3, y: 443.3, angle: 0, type: 'button', color: 'Green', signalID: 2 },
        { name: 'Platform', type: 'static', x: 708, y: 100.9, density: 1, width: 191.8, angle: 90 },
        { name: 'Platform', type: 'static', x: 138.05, y: 389.3, density: 1, width: 83.7, angle: 165 },
        { name: 'Platform', type: 'static', x: 51.9, y: 437.35, density: 1, width: 47.6, angle: 15 },
        { name: 'Platform', type: 'static', x: 449.15, y: 92.1, density: 1, width: 394.6, angle: 4 },
        { name: 'Platform', type: 'static', x: 647.4, y: 438.55, density: 1, width: 36.9, angle: -135 },
        { name: 'Platform', type: 'static', x: 698.3, y: 439.3, density: 1, width: 36.9, angle: -45 },
        { name: 'Platform', type: 'dynamic', x: 422.3, y: 127.15, density: 1, width: 44.9, angle: 90 },
        {
          name: 'Pivot',
          x: 422.3,
          y: 139.35,
          type: 'gear',
          color: 'Purple',
          gearMaxAngle: 270,
          gearPower: 1,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 3
        },
        { name: 'Star', x: 281.35, y: 472.95 },
        { name: 'Star', x: 342.3, y: 171 },
        { name: 'Star', x: 149.35, y: 164 }
      ]
    }),
    (wt[24] = {
      items: [
        { name: 'Platform', type: 'static', x: 668.7, y: 152.7, density: 1, width: 254.9, angle: 90 },
        { name: 'Platform', type: 'static', x: 510.75, y: 413.85, density: 1, width: 18, angle: 0 },
        { name: 'Platform', type: 'static', x: 530.15, y: 199.2, density: 1, width: 18, angle: 0 },
        { name: 'Platform', type: 'static', x: 413.65, y: 159.6, density: 1, width: 18, angle: 0 },
        { name: 'Platform', type: 'static', x: 256.95, y: 109.25, density: 1, width: 18, angle: 0 },
        { name: 'Platform', type: 'static', x: 370.1, y: 28.65, density: 1, width: 618, angle: 0 },
        { name: 'Basket', x: 624.75, y: 207.7 },
        { name: 'Cannon', x: 105.5, y: 379, lowerAngle: -70, upperAngle: 70 },
        { name: 'Platform', type: 'static', x: 453.4, y: 271.15, density: 1, width: 441.8, angle: 0 },
        { name: 'Platform', type: 'static', x: 69.5, y: 240.6, density: 1, width: 443, angle: 90 },
        { name: 'Platform', type: 'dynamic', x: 510.75, y: 410.85, density: 1, width: 71.3, angle: -15 },
        { name: 'Rock', x: 509.45, y: 376.35, density: 0.05 },
        { name: 'Platform', type: 'static', x: 453, y: 370.7, density: 1, width: 216.8, angle: 90 },
        { name: 'Platform', type: 'static', x: 574.7, y: 370.45, density: 1, width: 216.9, angle: 90 },
        { name: 'Switcher', x: 566.7, y: 380.3, angle: -90, type: 'button', color: 'Red', signalID: 1 },
        { name: 'Switcher', x: 461, y: 380.85, angle: 90, type: 'button', color: 'Blue', signalID: 2 },
        { name: 'Switcher', x: 212.4, y: 258.4, angle: -128, type: 'toogle', color: 'Green', signalID: 3 },
        { name: 'Platform', type: 'static', x: 295.6, y: 318.1, density: 1, width: 112.9, angle: 90 },
        { name: 'Platform', type: 'static', x: 219, y: 253.5, density: 1, width: 258.1, angle: 52 },
        { name: 'Platform', type: 'static', x: 139.4, y: 130.1, density: 1, width: 60, angle: 90 },
        { name: 'Platform', type: 'static', x: 185.4, y: 104.55, density: 1, width: 109.9, angle: 0 },
        { name: 'Platform', type: 'dynamic', x: 257.8, y: 173.65, density: 1, width: 155.2, angle: 90 },
        {
          name: 'Pivot',
          x: 256.95,
          y: 109.25,
          type: 'gear',
          color: 'Red',
          gearMaxAngle: 0,
          gearPower: -10,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 1
        },
        { name: 'Platform', type: 'static', x: 358.45, y: 469.9, density: 1, width: 94, angle: 0 },
        { name: 'Platform', type: 'static', x: 274.3, y: 428.65, density: 1, width: 130.1, angle: 45 },
        { name: 'Switcher', x: 425.45, y: 479.85, angle: 0, type: 'button', color: 'Yellow', signalID: 4 },
        { name: 'Platform', type: 'dynamic', x: 530.05, y: 223.1, density: 1, width: 70.2, angle: 90 },
        { name: 'Platform', type: 'dynamic', x: 413.5, y: 201.7, density: 1, width: 107.2, angle: 90 },
        {
          name: 'Pivot',
          x: 413.65,
          y: 159.25,
          type: 'gear',
          color: 'Yellow',
          gearMaxAngle: 0,
          gearPower: -10,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 4
        },
        {
          name: 'Pivot',
          x: 530.15,
          y: 199.2,
          type: 'gear',
          color: 'Blue',
          gearMaxAngle: 0,
          gearPower: -6,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 2
        },
        { name: 'Spring', x: 76.55, y: 41.15, angle: 120, type: 'static', elasticity: 1 },
        { name: 'Platform', type: 'static', x: 431.35, y: 406.75, density: 1, width: 63, angle: 0 },
        { name: 'Platform', type: 'static', x: 76.55, y: 38.95, density: 1, width: 36.3, angle: 120 },
        { name: 'Platform', type: 'static', x: 548.9, y: 470.1, density: 1, width: 211.6, angle: 0 },
        { name: 'Platform', type: 'static', x: 96.3, y: 387.85, density: 1, width: 72.5, angle: 0 },
        { name: 'Star', x: 370.3, y: 244 },
        { name: 'Star', x: 151.35, y: 421 },
        { name: 'Star', x: 342.2, y: 444.8 },
        {
          name: 'Pivot',
          x: 510.75,
          y: 410.85,
          type: 'gear',
          color: 'Green',
          gearMaxAngle: 15,
          gearPower: 12,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 3
        }
      ]
    }),
    (wt[25] = {
      items: [
        { name: 'Platform', type: 'static', x: 574.3, y: 451.3, density: 1, width: 18, angle: 0 },
        { name: 'Platform', type: 'static', x: 473.75, y: 102.3, density: 1, width: 18, angle: 0 },
        { name: 'Cannon', x: 352.6, y: 316.05, lowerAngle: -52, upperAngle: 70 },
        { name: 'Basket', x: 614.35, y: 431.8 },
        { name: 'Teleport', x: 64.7, y: 147, angle: 90, color: 'Blue', id: 1, mulVel: 1.4 },
        { name: 'Teleport', x: 665.15, y: 418.85, angle: -90, color: 'Red', id: 2, mulVel: 3 },
        { name: 'Switcher', x: 381.9, y: 99.1, angle: 15, type: 'button', color: 'Purple', signalID: 2 },
        { name: 'Spring', x: 605.05, y: 156.95, angle: -42, type: 'static', elasticity: 2 },
        { name: 'Teleport', x: 665.8, y: 40.25, angle: 180, color: 'Blue', id: 1, mulVel: 1.4 },
        { name: 'Platform', type: 'dynamic', x: 542.5, y: 451.1, density: 1, width: 81, angle: 0 },
        {
          name: 'Pivot',
          x: 574.3,
          y: 451.3,
          type: 'gear',
          color: 'Purple',
          gearMaxAngle: 90,
          gearPower: 6,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 2
        },
        { name: 'Platform', type: 'static', x: 625.95, y: 168.95, density: 1, width: 262, angle: 90 },
        { name: 'Platform', type: 'static', x: 704.95, y: 182.9, density: 1, width: 298, angle: 90 },
        { name: 'Platform', type: 'static', x: 485.15, y: 367.5, density: 1, width: 305.1, angle: 0 },
        { name: 'Teleport', x: 64.15, y: 448.3, angle: 0, color: 'Red', id: 2, mulVel: 1.4 },
        { name: 'Platform', type: 'static', x: 169.35, y: 431.2, density: 1, width: 156.1, angle: 0 },
        { name: 'Platform', type: 'static', x: 447.9, y: 323.9, density: 1, width: 257.1, angle: 0 },
        { name: 'Platform', type: 'static', x: 135.5, y: 376.9, density: 1, width: 234.1, angle: 0 },
        { name: 'Platform', type: 'dynamic', x: 473.75, y: 61.05, density: 1, width: 104.3, angle: 90 },
        {
          name: 'Pivot',
          x: 473.75,
          y: 101.3,
          type: 'bolt',
          color: 'Red',
          gearMaxAngle: 0,
          gearPower: 1,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 0
        },
        { name: 'Mill', x: 153, y: 83, enableMotor: !0, motorSpeed: -6, signalID: 3 },
        { name: 'Platform', type: 'static', x: 130.5, y: 173, density: 1, width: 83.1, angle: 0 },
        { name: 'Platform', type: 'static', x: 343.15, y: 23.9, density: 1, width: 224.9, angle: 90 },
        { name: 'Switcher', x: 374.75, y: 112.5, angle: -165, type: 'toogle', color: 'Green', signalID: 3 },
        { name: 'Platform', type: 'dynamic', x: 299.75, y: 397.25, density: 1, width: 111, angle: -34 },
        {
          name: 'Pivot',
          x: 337,
          y: 371.55,
          type: 'gear',
          color: 'Green',
          gearMaxAngle: -90,
          gearPower: -8,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 3
        },
        { name: 'Platform', type: 'static', x: 17.5, y: 149.15, density: 1, width: 65, angle: 90 },
        { name: 'Platform', type: 'static', x: 599.9, y: 307.95, density: 1, width: 73.3, angle: 150 },
        { name: 'Platform', type: 'static', x: 285.8, y: 351.1, density: 1, width: 101.1, angle: -34 },
        { name: 'Platform', type: 'static', x: 665.35, y: 345.15, density: 1, width: 102.3, angle: -30 },
        { name: 'Platform', type: 'static', x: 689.15, y: 161.6, density: 1, width: 49.9, angle: 150 },
        { name: 'Platform', type: 'static', x: 642.6, y: 109.4, density: 1, width: 52.7, angle: 30 },
        { name: 'Platform', type: 'static', x: 609, y: 153.85, density: 1, width: 51.9, angle: 137 },
        { name: 'Platform', type: 'static', x: 413.15, y: 115.05, density: 1, width: 158.5, angle: 15 },
        { name: 'Star', x: 27.35, y: 268.95 },
        { name: 'Star', x: 259.35, y: 465.95 },
        { name: 'Star', x: 369.35, y: 50 },
        { name: 'Platform', type: 'static', x: 27.9, y: 409.45, density: 1, width: 75.1, angle: 90 }
      ]
    }),
    (wt[26] = {
      items: [
        { name: 'Platform', type: 'static', x: 191.75, y: 101.75, density: 1, width: 56.7, angle: 90 },
        { name: 'Platform', type: 'static', x: 211.05, y: 9.95, density: 1, width: 206.7, angle: 0 },
        { name: 'Platform', type: 'static', x: 443.7, y: 9.95, density: 1, width: 153.8, angle: 0 },
        { name: 'Platform', type: 'static', x: 32.25, y: 436.9, density: 1, width: 18, angle: 0 },
        { name: 'Platform', type: 'static', x: 350.6, y: 78.95, density: 1, width: 335.7, angle: 0 },
        { name: 'Rock', x: 549, y: 348.75, density: 1.4 },
        { name: 'Cannon', x: 380.05, y: 422.15, lowerAngle: -70, upperAngle: 70 },
        { name: 'Platform', type: 'static', x: 614, y: 424.7, density: 1, width: 94.9, angle: 90 },
        { name: 'Platform', type: 'static', x: 199.45, y: 359.05, density: 1, width: 234.7, angle: 90 },
        { name: 'Spring', x: 32.25, y: 437.65, angle: 0, type: 'dynamic', elasticity: 2 },
        { name: 'Platform', type: 'dynamic', x: 575.4, y: 386.05, density: 0.1, width: 95, angle: 0 },
        {
          name: 'Pivot',
          x: 613.3,
          y: 386.2,
          type: 'bolt',
          color: 'Red',
          gearMaxAngle: 0,
          gearPower: 1,
          lowerAngle: -720,
          upperAngle: 720,
          signalID: 0
        },
        { name: 'Platform', type: 'static', x: 671.95, y: 305.05, density: 1, width: 66.6, angle: -90 },
        { name: 'Switcher', x: 664.25, y: 304.75, angle: -90, type: 'button', color: 'Red', signalID: 1 },
        { name: 'Basket', x: 155.75, y: 68.45 },
        { name: 'Switcher', x: 505, y: 246, angle: -90, type: 'toogle', color: 'Green', signalID: 2 },
        {
          name: 'Pivot',
          x: 32.25,
          y: 436.9,
          type: 'gear',
          color: 'Blue',
          gearMaxAngle: 30,
          gearPower: 5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 3
        },
        { name: 'Platform', type: 'static', x: 133.5, y: 273, density: 1, width: 68.7, angle: 90 },
        { name: 'Platform', type: 'static', x: 465.9, y: 222.1, density: 1, width: 162.7, angle: 90 },
        { name: 'Platform', type: 'static', x: 512, y: 175.6, density: 1, width: 350.8, angle: 90 },
        { name: 'Platform', type: 'static', x: 517.9, y: 409, density: 1, width: 30.1, angle: 0 },
        { name: 'Star', x: 218.45, y: 107.05 },
        { name: 'Star', x: 234.35, y: 439.8 },
        { name: 'Star', x: 53.35, y: 160 },
        { name: 'Teleport', x: 465, y: 44.6, angle: -90, color: 'Blue', id: 1, mulVel: 4 },
        { name: 'Platform', type: 'dynamic', x: 374.1, y: 31.05, density: 0.5, width: 61, angle: -90 },
        {
          name: 'Pivot',
          x: 374.3,
          y: 10.2,
          type: 'gear',
          color: 'Red',
          gearMaxAngle: 0,
          gearPower: 5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 1
        },
        { name: 'Platform', type: 'dynamic', x: 73.95, y: 10.1, density: 0.5, width: 94, angle: 0 },
        {
          name: 'Pivot',
          x: 114.3,
          y: 10.2,
          type: 'gear',
          color: 'Green',
          gearMaxAngle: -90,
          gearPower: -5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 2
        },
        { name: 'Teleport', x: 165.75, y: 438.2, angle: 0, color: 'Blue', id: 1, mulVel: 1.4 },
        { name: 'Teleport', x: 564.95, y: 438.2, angle: 0, color: 'Red', id: 2, mulVel: 2 },
        { name: 'Teleport', x: 294.9, y: 124.65, angle: 180, color: 'Red', id: 2, mulVel: 1 },
        { name: 'Platform', type: 'static', x: 133.5, y: 429.5, density: 1, width: 91.7, angle: 90 },
        { name: 'Switcher', x: 207.2, y: 266, angle: 90, type: 'toogle', color: 'Blue', signalID: 3 },
        { name: 'Platform', type: 'static', x: 512, y: 439.7, density: 1, width: 72.8, angle: 90 },
        { name: 'Platform', type: 'static', x: 166.45, y: 247.25, density: 1, width: 83.9, angle: 0 }
      ]
    }),
    (wt[27] = {
      items: [
        { name: 'Platform', type: 'static', x: 228.4, y: 96.1, density: 1, width: 210.1, angle: 15 },
        { name: 'Switcher', x: 143, y: 238.35, angle: 90, type: 'toogle', color: 'Green', signalID: 2 },
        { name: 'Basket', x: 446.45, y: 203.9 },
        { name: 'Platform', type: 'static', x: 705, y: 224.7, density: 1, width: 445.6, angle: -90 },
        { name: 'Cannon', x: 398.75, y: 386.45, lowerAngle: -70, upperAngle: 70 },
        { name: 'Mill', x: 511.95, y: 81, enableMotor: !0, motorSpeed: 6, signalID: 2 },
        { name: 'Spring', x: 55, y: 450.65, angle: 0, type: 'static', elasticity: 5 },
        { name: 'Spring', x: 687.2, y: 449.35, angle: -30, type: 'static', elasticity: 3.4 },
        { name: 'Platform', type: 'static', x: 529.45, y: 169, density: 1, width: 195, angle: 0 },
        { name: 'Platform', type: 'static', x: 42.5, y: 35.95, density: 1, width: 86.8, angle: -45 },
        { name: 'Platform', type: 'static', x: 332.15, y: 266.4, density: 1, width: 309.2, angle: 0 },
        { name: 'Platform', type: 'static', x: 135, y: 168.5, density: 1, width: 197, angle: 90 },
        { name: 'Switcher', x: 266.75, y: 463.55, angle: -30, type: 'toogle', color: 'Blue', signalID: 1 },
        { name: 'Platform', type: 'static', x: 13.45, y: 394.9, density: 1, width: 136, angle: 90 },
        { name: 'Platform', type: 'dynamic', x: 368.45, y: 133.75, density: 1, width: 112.3, angle: 15 },
        {
          name: 'Pivot',
          x: 323.35,
          y: 121.35,
          type: 'gear',
          color: 'Blue',
          gearMaxAngle: 105,
          gearPower: 6,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 1
        },
        { name: 'Platform', type: 'static', x: 362.2, y: 393.95, density: 1, width: 285.9, angle: 0 },
        { name: 'Platform', type: 'static', x: 420.55, y: 437.4, density: 1, width: 255.6, angle: -5 },
        { name: 'Platform', type: 'static', x: 271.6, y: 468.45, density: 1, width: 65.9, angle: -30 },
        { name: 'Platform', type: 'static', x: 554.95, y: 406.9, density: 1, width: 148, angle: 90 },
        { name: 'Platform', type: 'static', x: 617.95, y: 207.45, density: 1, width: 94, angle: 90 },
        { name: 'Platform', type: 'static', x: 54.45, y: 454.15, density: 1, width: 36.2, angle: 0 },
        { name: 'Platform', type: 'static', x: 611, y: 52.9, density: 1, width: 100.9, angle: 90 },
        { name: 'Platform', type: 'static', x: 691.7, y: 450.1, density: 1, width: 44.8, angle: -30 },
        { name: 'Platform', type: 'static', x: 658.05, y: 11.3, density: 1, width: 112.1, angle: 0 },
        { name: 'Platform', type: 'static', x: 519.4, y: 302.15, density: 1, width: 114.3, angle: 45 },
        { name: 'Platform', type: 'static', x: 388.6, y: 217.45, density: 1, width: 146.1, angle: -45 },
        { name: 'Star', x: 141.35, y: 432.25 },
        { name: 'Star', x: 15.35, y: 307.95 },
        { name: 'Star', x: 295.8, y: 243.3 },
        { name: 'Platform', type: 'static', x: 633.4, y: 210.75, density: 1, width: 46.4, angle: 45 },
        { name: 'Platform', type: 'static', x: 688.4, y: 161.7, density: 1, width: 46.4, angle: -45 }
      ]
    }),
    (wt[28] = {
      items: [
        { name: 'Platform', type: 'static', x: 553.35, y: 132.8, density: 1, width: 145, angle: 0 },
        { name: 'Platform', type: 'static', x: 598.5, y: 12.6, density: 1, width: 242.9, angle: 0 },
        { name: 'Switcher', x: 614.2, y: 424.6, angle: 0, type: 'button', color: 'Red', signalID: 1 },
        { name: 'Switcher', x: 578.4, y: 250.85, angle: -90, type: 'button', color: 'Yellow', signalID: 3 },
        { name: 'Cannon', x: 291.5, y: 343, lowerAngle: -70, upperAngle: 70 },
        { name: 'Platform', type: 'static', x: 600.45, y: 432.35, density: 1, width: 239.3, angle: 0 },
        { name: 'Platform', type: 'static', x: 585.2, y: 326.95, density: 1, width: 229.5, angle: -90 },
        { name: 'Teleport', x: 157.55, y: 196.35, angle: -45, color: 'Red', id: 0, mulVel: 1 },
        { name: 'Teleport', x: 126.15, y: 395, angle: 0, color: 'Red', id: 0, mulVel: 5 },
        { name: 'Platform', type: 'static', x: 161.45, y: 351.35, density: 1, width: 229.5, angle: -90 },
        { name: 'Platform', type: 'static', x: 133.7, y: 217.8, density: 1, width: 89.4, angle: 45 },
        { name: 'Platform', type: 'static', x: 14.35, y: 282.95, density: 1, width: 94.5, angle: -90 },
        { name: 'Switcher', x: 22.35, y: 286.35, angle: 90, type: 'toogle', color: 'Blue', signalID: 2 },
        { name: 'Platform', type: 'static', x: 646.55, y: 213, density: 1, width: 140.8, angle: 0 },
        { name: 'Platform', type: 'static', x: 711, y: 113.9, density: 1, width: 217, angle: 90 },
        { name: 'Platform', type: 'static', x: 486.05, y: 282.5, density: 1, width: 317.5, angle: -90 },
        { name: 'Platform', type: 'static', x: 671.6, y: 187.85, density: 1, width: 107, angle: -30 },
        { name: 'Platform', type: 'dynamic', x: 145.7, y: 157.15, density: 1, width: 116.3, angle: 136 },
        {
          name: 'Pivot',
          x: 108.35,
          y: 192.35,
          type: 'gear',
          color: 'Red',
          gearMaxAngle: 45,
          gearPower: -8,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 1
        },
        { name: 'Platform', type: 'static', x: 418.4, y: 334.9, density: 1, width: 209.6, angle: -90 },
        { name: 'Platform', type: 'static', x: 513.75, y: 269.65, density: 1, width: 80.2, angle: 45 },
        { name: 'Platform', type: 'dynamic', x: 484.1, y: 56.05, density: 1, width: 105, angle: -90 },
        {
          name: 'Pivot',
          x: 484.3,
          y: 11.35,
          type: 'gear',
          color: 'Blue',
          gearMaxAngle: 0,
          gearPower: 6,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 2
        },
        { name: 'Platform', type: 'static', x: 337.8, y: 401.85, density: 1, width: 178.3, angle: 0 },
        { name: 'Rock', x: 561.65, y: 98.25, density: 0.5 },
        { name: 'Platform', type: 'static', x: 88.45, y: 243.95, density: 1, width: 166.2, angle: 0 },
        { name: 'Platform', type: 'static', x: 141.3, y: 265.4, density: 1, width: 66.1, angle: 45 },
        { name: 'Basket', x: 212.95, y: 422.7 },
        { name: 'Star', x: 52.35, y: 216 },
        { name: 'Star', x: 53.35, y: 402.95 },
        { name: 'Star', x: 513.3, y: 220 },
        { name: 'Platform', type: 'dynamic', x: 228.2, y: 401.6, density: 1, width: 71.8, angle: 0 },
        {
          name: 'Pivot',
          x: 256.85,
          y: 401.6,
          type: 'gear',
          color: 'Yellow',
          gearMaxAngle: 90,
          gearPower: 5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 3
        },
        { name: 'Teleport', x: 452.15, y: 403.95, angle: 0, color: 'Blue', id: 2, mulVel: 1 },
        { name: 'Teleport', x: 679.45, y: 372.75, angle: -30, color: 'Blue', id: 2, mulVel: 2 },
        { name: 'Platform', type: 'static', x: 686.1, y: 319.9, density: 1, width: 154, angle: -120 },
        { name: 'Platform', type: 'static', x: 620.7, y: 280.05, density: 1, width: 90.1, angle: -30 },
        { name: 'Platform', type: 'static', x: 643.2, y: 410.9, density: 1, width: 60.5, angle: -90 },
        { name: 'Platform', type: 'static', x: 426.95, y: 266.1, density: 1, width: 36.4, angle: 45 },
        { name: 'Platform', type: 'static', x: 431.1, y: 349.75, density: 1, width: 36.4, angle: 45 },
        { name: 'Platform', type: 'static', x: 469.5, y: 309.55, density: 1, width: 36.4, angle: -45 }
      ]
    }),
    (wt[29] = {
      items: [
        { name: 'Platform', type: 'static', x: 239.05, y: 126, density: 1, width: 252, angle: -3 },
        { name: 'Platform', type: 'static', x: 484.3, y: 58.35, density: 1, width: 18, angle: 0 },
        { name: 'Switcher', x: 669, y: 222.8, angle: 135, type: 'toogle', color: 'Purple', signalID: 1 },
        { name: 'Cannon', x: 536.95, y: 459.3, lowerAngle: -70, upperAngle: 70 },
        { name: 'Basket', x: 45, y: 152.55 },
        { name: 'Platform', type: 'static', x: 355, y: 136.5, density: 1, width: 49, angle: 90 },
        { name: 'Platform', type: 'static', x: 432.9, y: 141.45, density: 1, width: 52.9, angle: 90 },
        { name: 'Platform', type: 'static', x: 360, y: 165, density: 1, width: 28.1, angle: 0 },
        { name: 'Platform', type: 'static', x: 427.9, y: 170, density: 1, width: 30.1, angle: 0 },
        { name: 'Platform', type: 'static', x: 99.9, y: 148.85, density: 1, width: 58.7, angle: -30 },
        { name: 'Platform', type: 'dynamic', x: 461, y: 58.35, density: 1, width: 64.1, angle: 0 },
        {
          name: 'Pivot',
          x: 484.3,
          y: 58.35,
          type: 'gear',
          color: 'Blue',
          gearMaxAngle: -30,
          gearPower: -1,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 4
        },
        { name: 'Platform', type: 'static', x: 595.1, y: 138.3, density: 1, width: 61.5, angle: 30 },
        { name: 'Platform', type: 'static', x: 602, y: 207.05, density: 1, width: 49.5, angle: 135 },
        { name: 'Platform', type: 'static', x: 660.1, y: 220.8, density: 1, width: 102.6, angle: 135 },
        { name: 'Platform', type: 'static', x: 641.05, y: 97.5, density: 1, width: 81.6, angle: 30 },
        { name: 'Platform', type: 'static', x: 616.05, y: 170.3, density: 1, width: 49.5, angle: 90 },
        { name: 'Platform', type: 'static', x: 682, y: 151.65, density: 1, width: 89.3, angle: 75 },
        { name: 'Platform', type: 'static', x: 500.5, y: 124, density: 1, width: 153.1, angle: 0 },
        { name: 'Platform', type: 'static', x: 564.4, y: 78.95, density: 1, width: 102.3, angle: 0 },
        { name: 'Box', x: 441.6, y: 26.5, angle: 0, density: 2 },
        { name: 'Platform', type: 'static', x: 375, y: 411.55, density: 1, width: 99, angle: 90 },
        { name: 'Platform', type: 'dynamic', x: 361, y: 370.55, density: 10, width: 46.7, angle: 0 },
        { name: 'Star', x: 390.35, y: 178 },
        { name: 'Star', x: 127.65, y: 454.5 },
        { name: 'Star', x: 462.3, y: 153.1 },
        { name: 'Platform', type: 'static', x: 9, y: 118, density: 1, width: 121.9, angle: 90 },
        { name: 'Teleport', x: 583.55, y: 263.1, angle: 45, color: 'Red', id: 2, mulVel: 5 },
        { name: 'Teleport', x: 312.2, y: 393.75, angle: 30, color: 'Red', id: 2, mulVel: 3 },
        { name: 'Box', x: 361.5, y: 334.7, angle: 0, density: 0.1 },
        { name: 'Box', x: 361.5, y: 287.75, angle: 0, density: 0.1 },
        { name: 'Box', x: 361.5, y: 240.75, angle: 0, density: 0.1 },
        {
          name: 'Pivot',
          x: 376.15,
          y: 369.75,
          type: 'gear',
          color: 'Purple',
          gearMaxAngle: 90,
          gearPower: 12,
          lowerAngle: 180,
          upperAngle: 0,
          signalID: 1
        },
        { name: 'Platform', type: 'static', x: 94.05, y: 400.75, density: 1, width: 120.3, angle: 90 },
        { name: 'Platform', type: 'static', x: 136.55, y: 336.85, density: 1, width: 43.8, angle: -90 },
        { name: 'Platform', type: 'static', x: 176.55, y: 336.85, density: 1, width: 43.8, angle: -90 },
        { name: 'Platform', type: 'static', x: 218.05, y: 400.4, density: 1, width: 119.6, angle: 90 },
        { name: 'Switcher', x: 188.6, y: 444.7, angle: 0, type: 'button', color: 'Blue', signalID: 4 },
        { name: 'Platform', type: 'static', x: 156.55, y: 435.4, density: 1, width: 45.7, angle: 90 },
        { name: 'Swings', x: 156.55, y: 398.1, angle: 20, lowerAngle: -20, upperAngle: 20 },
        { name: 'Platform', type: 'static', x: 197.8, y: 349.8, density: 1, width: 60.5, angle: 0 },
        { name: 'Platform', type: 'static', x: 115.1, y: 349.8, density: 1, width: 60, angle: 0 },
        { name: 'Platform', type: 'static', x: 186.35, y: 452.05, density: 1, width: 75.6, angle: 0 },
        { name: 'Platform', type: 'static', x: 108.2, y: 296.6, density: 1, width: 85.7, angle: 45 },
        { name: 'Platform', type: 'static', x: 190.2, y: 307.6, density: 1, width: 46.1, angle: -45 }
      ]
    }),
    (J.prototype = Object.create(PIXI.Container.prototype)),
    (J.prototype.constructor = J),
    (J.prototype.run = function (t, e) {
      t && this.once('onMiddle', t, e || this)
      var i = this
      this.show(function () {
        TweenMax.delayedCall(
          0.1,
          function () {
            i.emit('onMiddle'), TweenMax.delayedCall(0.1, this.hide, null, this)
          },
          null,
          this
        )
      }, this)
    }),
    (J.prototype.show = function (t, e) {
      t && this.once('showComplete', t, e || this)
      var i = this
      TweenMax.to(this, 0.4, {
        alpha: 1,
        onComplete: function () {
          i.emit('showComplete')
        }
      })
    }),
    (J.prototype.hide = function (t, e) {
      t && this.once('hideComplete', t, e || this)
      var i = this
      TweenMax.to(this, 0.4, {
        alpha: 0,
        onComplete: function () {
          i.emit('hideComplete')
        }
      })
    }),
    (K.prototype = Object.create(PIXI.Container.prototype)),
    (K.prototype.constructor = K),
    (K.prototype._onClick = function (t) {
      const e = 1
      switch (t.target.name) {
        case 'Play':
          this._menuDialog.hideToLeft(e), this._levelsDialog.show(e)
          try {
            parent.whgGameEvent('start')
          } catch (t) {}
          break
        case 'BackLevels':
          this._menuDialog.show(e), this._levelsDialog.hide(e)
          break
        case 'Credits':
          this._menuDialog.hideToRight(e), this._creditsDialog.show(e)
          break
        case 'BackCredits':
          this._menuDialog.show(e), this._creditsDialog.hide(e)
          break
        case 'Music':
          _t.setMusicEnable(t.isOn)
          break
        case 'Sound':
          _t.setSoundEnable(t.isOn)
      }
      _t.soundOn && this.sndButton.play()
    }),
    (K.prototype._onBtnsLevelClick = function (t) {
      ;(_t.levelMng.currLevel = t),
        _t.shutter.run(function () {
          this.destroy({ children: !0 }), (_t.menuState = null), new Z()
        }, this),
        _t.soundOn && this.sndButton.play()
      try {
        parent.whgGameEvent('start', t)
      } catch (t) {}
    }),
    (Z.prototype = Object.create(PIXI.Container.prototype)),
    (Z.prototype.constructor = Z),
    (Z.prototype.destroy = function (t) {
      PIXI.Container.prototype.destroy.call(this, t)
    }),
    (Z.prototype._onStageClick = function (t) {
      this._isComplete || this.shotHandler.call(t)
    }),
    (Z.prototype._onGameLayerChildAdded = function () {
      this.updateLayersOrder()
    }),
    (Z.prototype.updateLayersOrder = function () {
      this.gameLayer.children.sort(function (t, e) {
        return (
          (t.zOrder = t.zOrder || 0), (e.zOrder = e.zOrder || 0), t.zOrder != e.zOrder ? t.zOrder - e.zOrder : t.y - e.y
        )
      })
    }),
    (Z.prototype.complete = function () {
      this._isComplete ||
        ((this._isComplete = !0),
        this.addChild(this._levelComplete),
        this._levelComplete.show(0.5, this._catchedStars),
        _t.levelMng.onLevelComplete())
    }),
    (Z.zOrder = {
      defaultZ: 100,
      cannon: 100,
      ball: 50,
      basket: 100,
      platform: 150,
      switcher: 40,
      teleport: 41,
      rail: 30,
      tutorial: 20,
      pivot: 200
    }),
    (Z.prototype._createUI = function () {
      var t = e.generateButton('btnMenuGame', 'atlasUI', this._onBtnsClick, this)
      ;(t.name = 'Menu'),
        t.scale.set(0.5, 0.5),
        t.anchor.set(0.5, 1),
        (t.x = _t.gameWidth0 - t.width / 2 - 5),
        (t.y = t.height + 5),
        this.uiLayer.addChild(t)
      var i = e.generateButton('btnRestartGame', 'atlasUI', this._onBtnsClick, this)
      if (
        ((i.name = 'Restart'),
        i.scale.set(0.5, 0.5),
        i.anchor.set(0.5, 1),
        (i.x = t.x - t.width / 2 - i.width / 2 - 5),
        (i.y = t.y),
        this.uiLayer.addChild(i),
        this.aimControl)
      ) {
        var a = e.generateButton('btnFire', 'atlasUI', this._onBtnsClick, this)
        ;(a.name = 'Fire'),
          a.scale.set(0.4, 0.4),
          a.anchor.set(0.5, 0.5),
          (a.x = 40),
          (a.y = _t.gameHeight0 - 40),
          this.uiLayer.addChild(a),
          (this.btnFire = a),
          (this._btnFireBlinked = !1),
          (this._blinker = _t.assets.getSprite('btnFireBlink')),
          this._blinker.scale.set(0.4, 0.4),
          this._blinker.anchor.set(0.5, 0.5),
          (this._blinker.x = a.x),
          (this._blinker.y = a.y),
          (this._blinker.visible = !1),
          this.addChild(this._blinker)
      }
      var n = new PIXI.TextStyle({
        fontFamily: 'CroMagnum',
        fontSize: 42,
        fill: '#FFDC90',
        stroke: '#4D1604',
        strokeThickness: 8,
        align: 'center',
        lineHeight: 42
      })
      ;(this._txtLevel = new PIXI.Text('Level: ' + _t.levelMng.currLevel, n)),
        (this._txtLevel.x = 5),
        (this._txtLevel.y = 5),
        this._txtLevel.scale.set(0.5, 0.5),
        this.uiLayer.addChild(this._txtLevel)
      var s = _t.assets.getSprite('toolbarStarPlace', 'atlasUI')
      s.anchor.set(0.5, 0.5),
        s.scale.set(0.5, 0.5),
        (s.x = _t.gameWidth0 - s.width / 2 - 10),
        (s.y = _t.gameHeight0 - s.height / 2 - 5),
        (s.empty = !0),
        this.addChild(s)
      var o = _t.assets.getSprite('toolbarStarPlace', 'atlasUI')
      o.anchor.set(0.5, 0.5),
        o.scale.set(0.5, 0.5),
        (o.x = s.x - s.width / 2 - o.width / 2 - 5),
        (o.y = s.y),
        (o.empty = !0),
        this.addChild(o)
      var r = _t.assets.getSprite('toolbarStarPlace', 'atlasUI')
      r.anchor.set(0.5, 0.5),
        r.scale.set(0.5, 0.5),
        (r.x = o.x - o.width / 2 - r.width / 2 - 5),
        (r.y = s.y),
        (r.empty = !0),
        this.addChild(r),
        (this._starPlaces = [s, o, r]),
        (this._catchedStars = 0)
    }),
    (Z.prototype.addStar = function () {
      for (var t = null, e = 0; e < this._starPlaces.length; e++)
        if (this._starPlaces[e].empty) {
          ;(t = this._starPlaces[e]), (t.empty = !1)
          break
        }
      if (null != t) {
        var i = _t.assets.getSprite('toolbarStar', 'atlasUI')
        i.anchor.set(0.5, 0.5),
          i.scale.set(0.5, 0.5),
          (i.x = t.x),
          (i.y = t.y),
          (i.alpha = 0),
          this.addChildAt(i, this.getChildIndex(t) + 1),
          TweenMax.to(i, 1, { alpha: 1 }),
          this._catchedStars++
      }
    }),
    (Z.prototype.blinkBtnFire = function () {
      this._btnFireBlinked ||
        ((this._btnFireBlinked = !0),
        (this._blinker.visible = !0),
        (this._blinker.alpha = 0),
        (this._blinkTween = TweenMax.to(this._blinker, 0.5, { alpha: 1, repeat: -1, yoyo: !0 })))
    }),
    (Z.prototype.stopBlinkBtnFire = function () {
      this._blinkTween && ((this._blinker.visible = !1), this._blinkTween.kill(), (this._blinkTween = null))
    }),
    (Z.prototype._onBtnsClick = function (t) {
      switch (t.target.name) {
        case 'Menu':
          _t.shutter.run(function () {
            this.destroy({ children: !0 }), (_t.playState = null), new K()
          }, this)
          break
        case 'Restart':
          _t.shutter.run(function () {
            try {
              parent.whgGameEvent('replay', _t.levelMng.currLevel)
            } catch (t) {}
            ;(_t.playState.isDestroying = !0), this.destroy({ children: !0 }), (_t.playState = null), new Z()
          }, this)
          break
        case 'Next':
          _t.shutter.run(function () {
            _t.levelMng.currLevel++
            try {
              parent.whgGameEvent('start', _t.levelMng.currLevel)
            } catch (t) {}
            ;(_t.playState.isDestroying = !0), this.destroy({ children: !0 }), (_t.playState = null), new Z()
          }, this)
          break
        case 'Fire':
          if (this._isComplete) return
          this.shotHandler.call(t), this.stopBlinkBtnFire()
      }
      _t.soundOn && this.sndButton.play()
    })
  var _t = {
    pixi: null,
    physics: null,
    physWorld: null,
    physScale: 30,
    soundMng: null,
    assets: null,
    inited: !1,
    audioEnabled: !1,
    musicOn: !0,
    soundOn: !0,
    levelMng: null,
    menuState: null,
    playState: null,
    shutter: null,
    tutorial: null,
    SAVE_KEY_LAST_OPENED: 'lastOpened',
    SAVE_KEY_MUSIC: 'saveMusic',
    SAVE_KEY_SOUND: 'saveSound',
    SAVE_KEY_STARS: 'saveStars',
    storage: null,
    browserEvents: null,
    gameWidth0: 720,
    gameHeight0: 500,
    gameMaxWidth0: 720,
    gameMaxHeight0: 500,
    gameWidth1: null,
    gameHeight1: null,
    gameMaxWidth1: null,
    gameMaxHeight1: null,
    border: null,
    canvasWidth: null,
    canvasHeight: null,
    scale: 1,
    imgRotate: null,
    rnd: null,
    device: null,
    fps: null,
    sponsorURL: ''
  }
  ;(t.App = _t),
    (t.trace = console.log),
    q(),
    (_t.mainTheme = null),
    (_t._checkAudio = function () {
      _t.audioEnabled
        ? (void 0 != _t.storage.get(_t.SAVE_KEY_MUSIC) && (_t.musicOn = 'true' == _t.storage.get(_t.SAVE_KEY_MUSIC)),
          void 0 != _t.storage.get(_t.SAVE_KEY_SOUND) && (_t.soundOn = 'true' == _t.storage.get(_t.SAVE_KEY_SOUND)),
          (_t.mainTheme = _t.assets.getSound('sndTheme')),
          (_t.mainTheme.loop = !0),
          (_t.mainTheme.volume = 0.3),
          _t.musicOn && _t.mainTheme.play(),
          _t.browserEvents.on('onPageShow', function (t) {
            PIXI.sound.resumeAll()
          }),
          _t.browserEvents.on('onPageHide', function (t) {
            PIXI.sound.pauseAll()
          }),
          _t.browserEvents.on('onFocusGet', function (t) {
            PIXI.sound.resumeAll()
          }),
          _t.browserEvents.on('onFocusLost', function (t) {
            PIXI.sound.pauseAll()
          }))
        : ((_t.musicOn = !1), (_t.soundOn = !1))
    }),
    (_t.setMusicEnable = function (t) {
      _t.audioEnabled !== !1 &&
        ((_t.musicOn = t),
        _t.musicOn
          ? _t.mainTheme.isPlaying || (_t.mainTheme.resume(), _t.mainTheme.isPlaying || _t.mainTheme.play())
          : _t.mainTheme.isPlaying && _t.mainTheme.pause(),
        _t.storage.set(_t.SAVE_KEY_MUSIC, _t.musicOn))
    }),
    (_t.switchMusicEnable = function () {
      _t.setMusicEnable(!_t.musicOn)
    }),
    (_t.setSoundEnable = function (t) {
      _t.audioEnabled !== !1 && ((_t.soundOn = t), _t.storage.set(_t.SAVE_KEY_SOUND, _t.soundOn))
    }),
    (_t.switchSoundEnable = function () {
      _t.setSoundEnable(!_t.soundOn)
    }),
    (t.unlockAllLevels = function () {
      _t.levelMng && _t.levelMng.unlockAllLevels(), _t.menuState && _t.menuState._levelsDialog.refresh()
    }),
    (parent.unlockAllLevels = t.unlockAllLevels)
})(window)
