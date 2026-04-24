!(function (t) {
  function e(t, e, a) {
    ;(this.onClick = new c()),
      (this.onDown = new c()),
      (this.onUp = new c()),
      (this.onOut = new c()),
      e && ((e = e.bind(a || this)), this.onClick.add(e)),
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
  function a(t, e) {
    PIXI.Container.call(this),
      (this.name = t || 'Item'),
      (this.zOrder = e || Z.zOrder.defaultZ),
      (this._body = null),
      (this.angleUpdate = !1),
      (this.positionUpdate = !1)
  }
  function n() {
    PIXI.Container.call(this)
    var t = new PIXI.TextStyle({ fontFamily: 'Impact', fontSize: 42, fill: 'white', align: 'center' }),
      e = new PIXI.Graphics()
    e.beginFill(0),
      e.drawRect(0, 0, Pt.gameWidth0, Pt.gameHeight0),
      e.endFill(),
      this.addChild(e),
      (this._txtLoading = new PIXI.Text('Loading', t)),
      this._txtLoading.scale.set(0.5, 0.5),
      this._txtLoading.anchor.set(0.5, 0.5),
      (this._txtLoading.x = Pt.gameWidth0 / 2),
      (this._txtLoading.y = Pt.gameHeight0 / 2 - 10),
      this.addChild(this._txtLoading),
      Pt.pixi.ticker.add(this._update, this),
      (this._loaded = 0),
      (this._curr = 0)
  }
  function i() {
    PIXI.Container.call(this)
    var t = Pt.assets.getSprite('splash')
    t.anchor.set(0.5, 0.5), (t.x = Pt.gameWidth0 / 2), (t.y = Pt.gameHeight0 / 2), this.addChild(t)
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
  function r(t, e, a, n, i) {
    ;(this.up = t),
      (this.over = e),
      (this.down = a),
      (this.onClick = new c()),
      (this.onDown = new c()),
      (this.onUp = new c()),
      (this.onOut = new c()),
      n && ((n = n.bind(i || this)), this.onClick.add(n)),
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
  function l(t, a, n, i) {
    var s = Pt.assets.getTexture('btnNumLevel' + a, 'atlasUI')
    e.call(this, s, n, i), (this.num = t), (this.name = 'ButtonLevel' + t)
    var o = new PIXI.TextStyle({
      fontFamily: 'CroMagnum',
      fontSize: 42,
      fill: '#FEF4B0',
      stroke: '#4D1604',
      strokeThickness: 8
    })
    this.setLabel(t + '', o)
    var r = Pt.assets.getSprite('icoStarLevelBtn', 'atlasUI')
    r.anchor.set(0.5, 0.5), (r.x = s.width / 2), (r.y = s.height - r.height / 2 + 3), this.addChild(r)
    var l = Pt.assets.getSprite('icoStarLevelBtn', 'atlasUI')
    l.anchor.set(0.5, 0.5), (l.x = r.x - r.width + 3), (l.y = r.y), this.addChild(l)
    var y = Pt.assets.getSprite('icoStarLevelBtn', 'atlasUI')
    y.anchor.set(0.5, 0.5),
      (y.x = r.x + r.width - 3),
      (y.y = r.y),
      this.addChild(y),
      this.scale.set(0.5, 0.5),
      (this._stars = [r, l, y])
  }
  function y(t, a, n, i, s) {
    PIXI.Container.call(this),
      (this._callback = i),
      (this._callbackScope = s),
      (this._on = e.generateButton(t, n, this._onClick, this)),
      (this._on.name = 'ON'),
      this.addChild(this._on),
      (this._off = e.generateButton(a, n, this._onClick, this)),
      (this._off.name = 'OFF'),
      this.addChild(this._off),
      (this.on = !0)
  }
  function h(t) {
    ;(this.name = t || 'Collection#' + ++h.__id),
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
  function g(t) {
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
  function m() {
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
      (Pt.physWorld = this.world),
      this.clearDoIt(),
      (this._canvas = null),
      (this._context = null),
      e && this.enableDebugDraw(),
      Pt.pixi.ticker.add(this._update, this)
  }
  function x(t) {
    'undefined' == typeof t && (t = []), (this.c = 1), (this.s0 = 0), (this.s1 = 0), (this.s2 = 0), this.sow(t)
  }
  function w(t) {
    PIXI.Container.call(this)
    var e = Pt.assets.getSprite('levelsBoard', 'atlasUI')
    e.scale.set(0.5, 0.5), e.anchor.set(0.5, 0.76), this.addChild(e)
    var a = new PIXI.TextStyle({
        fontFamily: 'CroMagnum',
        fontSize: 42,
        fill: '#EFE9BF',
        stroke: '#4D1604',
        strokeThickness: 8,
        align: 'center',
        lineHeight: 42
      }),
      n = new PIXI.Text(t, a)
    n.scale.set(0.5, 0.5), n.anchor.set(0.5, 0.45), this.addChild(n)
  }
  function P(t, a) {
    PIXI.Container.call(this), (this.x = -Pt.gameWidth0)
    var n = new w('Game by\nOLEG KUZYK')
    ;(n.x = 180), (n.y = 210), this.addChild(n)
    var i = new w('Level design by\nGEORGIY STEPANOV')
    ;(i.x = 540), (i.y = 210), this.addChild(i)
    var s = e.generateButton('btnBackLevels', 'atlasUI', t, a)
    ;(s.name = 'BackCredits'),
      s.scale.set(0.3, 0.3),
      (s.x = Pt.gameWidth0 - s.width / 2 - 10),
      (s.y = Pt.gameHeight0 - s.height / 2 - 5),
      this.addChild(s)
  }
  function _(t, e) {
    PIXI.Container.call(this), (this._buttonsHandler = e)
    var a = Pt.assets.getSprite('levelsBoard', 'atlasUI')
    a.scale.set(0.5, 0.5), a.anchor.set(0.5, 0.76), this.addChild(a)
    var n = 10 * (t - 1) + 1
    ;(this._buttons = []), (this._btnsContainer = new PIXI.Container()), this.addChild(this._btnsContainer)
    for (var i = 12, s = 7, o = 0; o < 2; o++)
      for (var r = 0; r < 5; r++) {
        var y = new l(n, t, this._onClick, this)
        ;(y.x += r * (i + y.width)),
          (y.y += o * (s + y.height)),
          y.anchor.set(0, 0),
          this._btnsContainer.addChild(y),
          y.setLocked(n > Pt.levelMng.lastOpened),
          this._buttons.push(y),
          n++
      }
    ;(this._btnsContainer.x = -this._btnsContainer.width / 2), (this._btnsContainer.y = -this._btnsContainer.height / 2)
  }
  function v(t, a) {
    PIXI.Container.call(this), (this._buttonsHandler = t)
    var n = Pt.assets.getSprite('levelCompleted')
    n.scale.set(0.5, 0.5), (n.interactive = !0), this.addChild(n)
    const i = 0.35
    ;(this._btnRestart = e.generateButton('btnRestartComplete', 'atlasUI', t, a)),
      (this._btnRestart.name = 'Restart'),
      this._btnRestart.scale.set(i, i),
      this._btnRestart.anchor.set(0.5, 0.5),
      (this._btnRestart.x = this._btnRestart.xIn = Pt.gameWidth0 / 2),
      (this._btnRestart.y = this._btnRestart.yIn = Pt.gameHeight0 / 2 + 100),
      (this._btnRestart.xOut = this._btnRestart.xIn),
      (this._btnRestart.yOut = Pt.gameHeight0 + this._btnRestart.height / 2 + 10),
      this.addChild(this._btnRestart),
      (this._btnMenu = e.generateButton('btnMenuComplete', 'atlasUI', t, a)),
      (this._btnMenu.name = 'Menu'),
      this._btnMenu.scale.set(i, i),
      this._btnMenu.anchor.set(0.5, 0.5),
      (this._btnMenu.x = this._btnMenu.xIn =
        this._btnRestart.x - this._btnRestart.width / 2 - this._btnMenu.width / 2 - 20),
      (this._btnMenu.y = this._btnMenu.yIn = this._btnRestart.y),
      (this._btnMenu.xOut = -this._btnMenu.width / 2 - 10),
      (this._btnMenu.yOut = this._btnMenu.yIn),
      this.addChild(this._btnMenu),
      (this._btnNext = e.generateButton('btnNextComplete', 'atlasUI', t, a)),
      (this._btnNext.name = 'Next'),
      this._btnNext.scale.set(i, i),
      this._btnNext.anchor.set(0.5, 0.5),
      (this._btnNext.x = this._btnNext.xIn =
        this._btnRestart.x + this._btnRestart.width / 2 + this._btnNext.width / 2 + 20),
      (this._btnNext.y = this._btnNext.yIn = this._btnRestart.y),
      (this._btnNext.xOut = Pt.gameWidth0 + this._btnNext.width / 2 + 10),
      (this._btnNext.yOut = this._btnNext.yIn),
      this.addChild(this._btnNext)
    var s = new PIXI.TextStyle({
        fontFamily: 'CroMagnum',
        fontSize: 42,
        fill: '#EFE9BF',
        stroke: '#4D1604',
        strokeThickness: 6,
        align: 'center'
      }),
      o = 'LEVEL ' + Pt.levelMng.currLevel + ' COMPLETED!'
    Pt.levelMng.currLevel == Pt.levelMng.totalLevels &&
      ((o = "CONGRATULATIONS!\nYOU'VE PASSED THE GAME!"), (s.fontSize = 36)),
      (this._text = new PIXI.Text(o, s)),
      this._text.anchor.set(0.5, 0.5),
      this._text.scale.set(0.5, 0.5),
      (this._text.x = Pt.gameWidth0 / 2),
      (this._text.y = Pt.gameHeight0 / 2 - 120),
      this.addChild(this._text)
    var r = Pt.assets.getSprite('starComplete', 'atlasUI')
    r.anchor.set(0.5, 0.5),
      r.scale.set(0.5, 0.5),
      (r.x = Pt.gameWidth0 / 2),
      (r.y = Pt.gameHeight0 / 2),
      this.addChild(r)
    var l = Pt.assets.getSprite('starComplete', 'atlasUI')
    l.anchor.set(0.5, 0.5),
      l.scale.set(0.5, 0.5),
      (l.x = r.x - r.width / 2 - l.width / 2 - 10),
      (l.y = r.y),
      this.addChild(l)
    var y = Pt.assets.getSprite('starComplete', 'atlasUI')
    y.anchor.set(0.5, 0.5),
      y.scale.set(0.5, 0.5),
      (y.x = r.x + r.width / 2 + y.width / 2 + 10),
      (y.y = r.y),
      this.addChild(y),
      (this._stars = [r, l, y]),
      (this.sndWin = Pt.assets.getSound('sndWin'))
  }
  function S(t, a, n) {
    PIXI.Container.call(this), (this._buttonsHandler = t), (this.x = Pt.gameWidth0)
    var i = new _(1, t)
    ;(i.x = 180), (i.y = 100), this.addChild(i)
    var s = new _(2, t)
    ;(s.x = 540), (s.y = 220), this.addChild(s)
    var o = new _(3, t)
    ;(o.x = 180), (o.y = 340), this.addChildAt(o, 0), (this._boards = [i, s, o])
    var r = e.generateButton('btnBackLevels', 'atlasUI', a, n)
    ;(r.name = 'BackLevels'),
      r.scale.set(0.3, 0.3),
      (r.x = r.width / 2 + 10),
      (r.y = Pt.gameHeight0 - r.height / 2 - 5),
      this.addChild(r)
  }
  function b(t, a) {
    PIXI.Container.call(this)
    var n = Pt.assets.getSprite('gameName', null, !0)
    n.scale.set(0.5, 0.5), (n.x = Pt.gameWidth0 / 2), (n.y = Pt.gameHeight0 / 2 - n.height / 2 - 120), this.addChild(n)
    var i = e.generateButton('btnPlayMenu', 'atlasUI', t, a)
    ;(i.name = 'Play'),
      i.scale.set(0.5, 0.5),
      (i.x = n.x),
      (i.y = n.y + n.height / 2 + i.height / 2 + 30),
      this.addChild(i)

    var o = new y('btnMusicOn', 'btnMusicOff', 'atlasUI', t, a)
    ;(o.name = 'Music'),
      o.scale.set(0.5, 0.5),
      (o.x = o.width / 2 + 10),
      (o.y = Pt.gameHeight0 - o.height / 2 - 7),
      (o.on = Pt.musicOn),
      this.addChild(o)
    var r = new y('btnSoundOn', 'btnSoundOff', 'atlasUI', t, a)
    ;(r.name = 'Sound'),
      r.scale.set(0.5, 0.5),
      (r.x = o.x + o.width / 2 + r.width / 2 + 5),
      (r.y = o.y),
      (r.on = Pt.soundOn),
      this.addChild(r),
      (this.sndButton = Pt.assets.getSound('sndButton'))
  }
  function A(t, e) {
    a.call(this, 'Ball', Z.zOrder.ball)
    var n = Pt.assets.getSprite('ball', 'atlasGame')
    n.scale.set(0.5, 0.5), n.anchor.set(0.5, 0.5), this.addChild(n), (this.x = t), (this.y = e)
    var i = u.createCircleShape(7.5),
      s = u.createFixtureDef(i, 0.5, 0.15, 1, { item: this, isBall: !0, dynamic: !0 }),
      o = u.createBodyDef(t, e, ht.b2_dynamicBody, !1, !0, 0, !0)
    ;(this._body = u.createBody(o, [s])), this._enableUpdate(), (this.angleUpdate = !0), (this.positionUpdate = !0)
  }
  function I(t, e) {
    a.call(this, 'Basket', Z.zOrder.basket), (this.x = t), (this.y = e)
    var n = Pt.assets.getSprite('basket', 'atlasGame')
    n.scale.set(0.55, 0.55), n.anchor.set(0.5, -0.12), this.addChild(n)
    var i = 23,
      s = u.createPolygonShape(22.5, 4, 0, 30 + i),
      o = u.createFixtureDef(s, 0.5, 0.1, 1, this),
      r = u.createPolygonShape(4, 42, 14.85, 10.85 + i, ot.toRadians(15)),
      l = u.createFixtureDef(r, 0.5, 0.1, 1, this),
      y = u.createPolygonShape(4, 42, -14.85, 10.85 + i, ot.toRadians(-15)),
      h = u.createFixtureDef(y, 0.5, 0.1, 1, this),
      d = u.createPolygonShape(7.5, 6.6, 22.8, -7.75 + i, ot.toRadians(-15)),
      c = u.createFixtureDef(d, 0.5, 0.1, 1, this),
      p = u.createPolygonShape(7.5, 6.6, -22.8, -7.75 + i, ot.toRadians(15)),
      g = u.createFixtureDef(p, 0.5, 0.1, 1, this),
      m = u.createPolygonShape(27, 4, 0, i),
      x = u.createFixtureDef(m, 0.5, 0.1, 1, { item: this, basketSensor: !0 }, !0),
      w = u.createBodyDef(t, e, ht.b2_staticBody)
    ;(this._body = u.createBody(w, [o, l, h, c, g, x])),
      Pt.physics.contactListener.addBeginContactListener(this._onBeginContact, this),
      (this.sndBallInBasket = Pt.assets.getSound('sndBallInBasket'))
  }
  function D(t, e, n, i, s) {
    a.call(this, 'BasketRail', Z.zOrder.basket),
      (this._orienation = 0 == n ? 'v' : 'h'),
      (this._end = i),
      (this.x = t),
      (this.y = e),
      (this.id = s)
    var o = Pt.assets.getSprite('railBasket', 'atlasGame')
    o.scale.set(0.55, 0.55), o.anchor.set(0.5, 0.46), this.addChild(o)
    var r = u.createPolygonShape(22.5, 4, 0, 30),
      l = u.createFixtureDef(r, 0.5, 0.1, 1, this),
      y = u.createPolygonShape(4, 42, 14.85, 10.85, ot.toRadians(15)),
      h = u.createFixtureDef(y, 0.5, 0.1, 1, this),
      d = u.createPolygonShape(4, 42, -14.85, 10.85, ot.toRadians(-15)),
      c = u.createFixtureDef(d, 0.5, 0.1, 1, this),
      p = u.createPolygonShape(7.5, 6.6, 22.8, -7.75, ot.toRadians(-15)),
      g = u.createFixtureDef(p, 0.5, 0.1, 1, this),
      m = u.createPolygonShape(7.5, 6.6, -22.8, -7.75, ot.toRadians(15)),
      x = u.createFixtureDef(m, 0.5, 0.1, 1, this),
      w = u.createPolygonShape(27, 4),
      f = u.createFixtureDef(w, 0.5, 0.1, 1, { item: this, basketSensor: !0 }, !0),
      P = u.createBodyDef(t, e, ht.b2_kinematicBody)
    ;(this._body = u.createBody(P, [l, h, c, g, x, f])),
      this._createRails(),
      Pt.physics.contactListener.addBeginContactListener(this._onBeginContact, this),
      a.events.on(a.EVENT_TRIGGER_PRESSED, this._onTriggerEvent, this),
      (this.sndStart = Pt.assets.getSound('sndRailStart')),
      (this.sndStop = Pt.assets.getSound('sndRailStop'))
  }
  function C(t, e, n, i) {
    a.call(this, 'Box', Z.zOrder.defaultZ), (this.x = t), (this.y = e)
    var s = Pt.assets.getSprite('box', 'atlasGame')
    s.scale.set(0.5, 0.5), s.anchor.set(0.5, 0.5), this.addChild(s)
    var o = u.createPolygonShape(45, 45),
      r = u.createFixtureDef(o, 0.5, 0, i, { item: this, dynamic: !0 }),
      l = u.createBodyDef(t, e, ht.b2_dynamicBody, !1, !0, n)
    ;(this._body = u.createBody(l, [r])), this._enableUpdate(), (this.angleUpdate = !0), (this.positionUpdate = !0)
  }
  function B(t, e) {
    a.call(this, 'Cannon', Z.zOrder.cannon),
      (this.lowerAngle = -45),
      (this.upperAngle = 45),
      (this.shotScale = 150),
      (this.minPower = 250),
      (this.maxPower = 500),
      (this.x = t),
      (this.y = e)
    var n = Pt.assets.getSprite('cannonPlatform', 'atlasGame')
    n.anchor.set(0.5, 0.65), n.scale.set(0.5, 0.5), this.addChild(n)
    var i = rt.generateFrameNames('cannon_', 1, 15, '', 4),
      s = Pt.assets.getTextures(i, 'atlasGame')
    ;(this._cannon = new PIXI.extras.AnimatedSprite(s)),
      this._cannon.anchor.set(0.5, 1.32),
      this._cannon.scale.set(0.5, 0.5),
      (this._cannon.animationSpeed = 1),
      (this._cannon.loop = !1),
      this.addChildAt(this._cannon, 0)
    var o = Pt.assets.getSprite('cannonPowerBarBG', 'atlasGame')
    o.anchor.set(0.5, 1),
      (o.x = 35),
      (o.y = -60),
      this._cannon.addChild(o),
      (this._powerBar = Pt.assets.getSprite('cannonPowerBar', 'atlasGame')),
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
      Pt.playState.shotHandler.add(this._shot),
      (this._helperPoint = new PIXI.Point()),
      (this._ballSpawnPoint = new PIXI.Point(0, -43)),
      (this._shoted = !1),
      Pt.pixi.ticker.add(this._update, this),
      (this._isAllowMove = !0),
      Pt.playState.aimControl &&
        (Pt.playState.bg.on('pointerdown', this._pointerDown, this),
        Pt.playState.bg.on('pointerup', this._pointerUp, this),
        (this._isAllowMove = !1),
        (this._countTouches = 0)),
      (this.graphics = new PIXI.Graphics()),
      this.addChild(this.graphics),
      (this.sndShot = Pt.assets.getSound('sndShot'))
  }
  function M(t, e) {
    a.call(this, 'Domino', Z.zOrder.defaultZ), (this.x = t), (this.y = e)
    var n = Pt.assets.getSprite('domino', 'atlasGame')
    n.scale.set(0.5, 0.5), n.anchor.set(0.5, 0.5), this.addChild(n)
    var i = u.createPolygonShape(10, 50),
      s = u.createFixtureDef(i, 0.5, 0, 0.5, { item: this, dynamic: !0 }),
      o = u.createBodyDef(t, e, ht.b2_dynamicBody)
    ;(this._body = u.createBody(o, [s])), this._enableUpdate(), (this.angleUpdate = !0), (this.positionUpdate = !0)
  }
  function E(t, e, n, i, s, o) {
    a.call(this, 'Gate', Z.zOrder.defaultZ)
    var r = 0
    ;(s = void 0 != s ? s : 90),
      (o = o || !1),
      o && ((r = s), (s = 0), 'right' == n && (r = -r)),
      (this.inversed = o),
      (r = ot.toRadians(r)),
      (this.x = t),
      (this.y = e),
      (this.rotation = r),
      (this.openAngle = ot.toRadians(s)),
      (this.direction = n),
      (this.opened = !1),
      (this.rotation = r),
      (this.id = i)
    var l = Pt.assets.getSprite('gate_' + n, 'atlasGame')
    l.scale.set(0.5, 0.5),
      'left' == n ? l.anchor.set(0.2, 0.5) : 'right' == n && l.anchor.set(0.8, 0.5),
      this.addChild(l)
    var y
    'left' == n ? (y = u.createPolygonShape(30, 8, 11)) : 'right' == n && (y = u.createPolygonShape(30, 8, -11))
    var h = u.createFixtureDef(y, 1, 0.1, 0.1),
      d = u.createBodyDef(t, e, ht.b2_kinematicBody, !1, !0, r)
    ;(this._body = u.createBody(d, [h])),
      a.events.on(a.EVENT_TRIGGER_PRESSED, this._onTriggerEvent, this),
      (this.sndGate = Pt.assets.getSound('sndGate'))
  }
  function T(t, e, n, i) {
    a.call(this, 'Hammer', Z.zOrder.defaultZ),
      (i = i || 1),
      (this.x = t),
      (this.y = e),
      (n = ot.toRadians(n)),
      (this.rotation = n)
    var s = Pt.assets.getSprite('hammer', 'atlasGame')
    s.scale.set(0.5, 0.5), s.anchor.set(0.1, 0.5), this.addChild(s)
    var o = u.createPolygonShape(12, 74, 62, 0),
      r = u.createFixtureDef(o, 0.3, 0.1, i, { item: this, dynamic: !0 }),
      l = u.createPolygonShape(59, 12, 26, 0),
      y = u.createFixtureDef(l, 0.3, 0.1, i, { item: this, dynamic: !0 }),
      h = u.createBodyDef(t, e, ht.b2_dynamicBody, !1, !0, n)
    this._body = u.createBody(h, [r, y])
    var d = Pt.physWorld.GetGroundBody(),
      c = new xt()
    c.Initialize(d, this._body, this._body.GetPosition()),
      Pt.physWorld.CreateJoint(c),
      this._enableUpdate(),
      (this.angleUpdate = !0),
      (this.positionUpdate = !0)
  }
  function O(t, e, n, i, s) {
    a.call(this, 'Mill', Z.zOrder.defaultZ),
      (this.x = t),
      (this.y = e),
      (this.enableMotor = n),
      (this.motorSpeed = i),
      (this.signalID = s)
    var o = Pt.assets.getSprite('mill', 'atlasGame')
    o.scale.set(0.5, 0.5), o.anchor.set(0.5, 0.5), this.addChild(o)
    var r = u.createPolygonShape(150, 14),
      l = u.createFixtureDef(r, 0.5, 0, 0.2, { item: this, dynamic: !0 }),
      y = u.createPolygonShape(14, 150),
      h = u.createFixtureDef(y, 0.5, 0, 0.2, { item: this, dynamic: !0 }),
      d = u.createBodyDef(t, e, ht.b2_dynamicBody)
    ;(this._body = u.createBody(d, [l, h])), this._enableUpdate(), (this.angleUpdate = !0), (this.positionUpdate = !0)
    var c = new lt(t / Pt.physScale, e / Pt.physScale),
      p = new xt()
    if (
      (p.Initialize(Pt.physWorld.GetGroundBody(), this._body, c),
      (this._revJoint = Pt.physWorld.CreateJoint(p)),
      this.enableMotor)
    ) {
      var g = this.motorSpeed
      this._revJoint.EnableMotor(!0),
        this._revJoint.SetMotorSpeed(g),
        this._revJoint.SetMaxMotorTorque(Math.abs(g)),
        a.events.on(a.EVENT_TRIGGER_PRESSED, this._onTriggerEvent, this)
    }
  }
  function k(t, e) {
    a.call(this, 'Peg', Z.zOrder.defaultZ), (this.x = t), (this.y = e)
    var n = Pt.assets.getSprite('peg', 'atlasGame')
    n.scale.set(0.5, 0.5), n.anchor.set(0.5, 0.5), this.addChild(n)
    var i = u.createCircleShape(15),
      s = u.createFixtureDef(i, 0.2, 0.1, 1, { item: this, isPeg: !0 }),
      o = u.createBodyDef(t, e, ht.b2_staticBody)
    ;(this._body = u.createBody(o, [s])),
      Pt.physics.contactListener.addBeginContactListener(this._onBeginContact, this),
      (this.sndPeg = Pt.assets.getSound('sndPeg'))
  }
  function R(t, e, n, i, s, o, r, l, y) {
    if ((a.call(this, 'Pivot', Z.zOrder.pivot), (this.x = t), (this.y = e), (this.type = n), 'bolt' == this.type)) {
      var h = Pt.assets.getSprite('bolt', 'atlasGame')
      h.scale.set(0.5, 0.5),
        h.anchor.set(0.5, 0.5),
        this.addChild(h),
        (this.boltLowerAngle = ot.toRadians(l)),
        (this.boltUpperAngle = ot.toRadians(y))
    } else if ('gear' == this.type) {
      var d = 'gear' + s + '_',
        c = rt.generateFrameNames(d, 1, 40, '', 4),
        p = Pt.assets.getTextures(c, 'atlasGame')
      ;(this._gear = new PIXI.extras.AnimatedSprite(p)),
        this._gear.anchor.set(0.5, 0.5),
        this._gear.scale.set(0.5, 0.5),
        (this._gear.animationSpeed = 1),
        (this._gear.loop = !0),
        this.addChildAt(this._gear, 0),
        (this.gearSignalID = i),
        (this.gearColor = s),
        (this.gearMaxAngle = o),
        (this.gearPower = r),
        (this.TO_DESTINATION = 1),
        (this.TO_START_ANGLE = 2),
        (this._movingTo = 0)
    }
    for (var g = [], m = new lt(t / Pt.physScale, e / Pt.physScale), u = Pt.physWorld.GetBodyList(); null != u; ) {
      for (var x = u.GetFixtureList(); null != x; ) {
        var w = x.TestPoint(m)
        if (w) {
          g.push(u)
          break
        }
        x = x.GetNext()
      }
      u = u.GetNext()
    }
    if (g.length > 2) throw 'Too many bodies under pivot. Max is 2'
    1 == g.length && ((g[1] = g[0]), (g[0] = Pt.physWorld.GetGroundBody()))
    var f = g[0],
      P = g[1]
    if (
      (f.type != ht.b2_staticBody && ((f = P), (P = g[0])),
      (this._revJointDef = new xt()),
      this._revJointDef.Initialize(f, P, m),
      'bolt' == this.type)
    )
      (this._revJoint = Pt.physWorld.CreateJoint(this._revJointDef)),
        this._revJoint.EnableLimit(!0),
        this._revJoint.SetLimits(this.boltLowerAngle, this.boltUpperAngle)
    else if ('gear' == this.type) {
      if (
        ((this._trackBody = P),
        (this._massData = new pt()),
        this._trackBody.GetMassData(this._massData),
        (this._massData.mass = 0.1),
        this._trackBody.SetType(ht.b2_staticBody),
        (this._trackBodyStartAngle = ot.toDegrees(this._trackBody.GetAngle())),
        a.events.on(a.EVENT_TRIGGER_PRESSED, this._onTriggerEvent, this),
        (this._lowerAngle = -this._trackBody.GetAngle()),
        (this._upperAngle = ot.toRadians(this.gearMaxAngle)),
        this._lowerAngle > this._upperAngle)
      ) {
        var _ = this._lowerAngle
        ;(this._lowerAngle = this._upperAngle), (this._upperAngle = _)
      }
      this.sndGear = Pt.assets.getSound('sndGear')
    }
  }
  function L(t, e, n, i, s, o) {
    i = ot.toRadians(i || 0)
    var r = u.convertBodyTypeFromStringToNumber(s),
      l = 18
    a.call(this, 'Platform', Z.zOrder.platform), (this.x = t), (this.y = e), (this.rotation = i)
    var y = Pt.assets.getSprite('platform', 'atlasGame')
    y.scale.set(0.5, 0.5), y.anchor.set(0.5, 0.5), (y.x = Pt.rnd.realInRange(0, y.width / 2 - n / 2)), this.addChild(y)
    var h = 2,
      d = new PIXI.Graphics()
    d.lineStyle(h, 3352345, 1), d.drawRect(-n / 2, -l / 2, n, l), this.addChild(d)
    var c = u.createPolygonShape(n, l),
      p = u.createFixtureDef(c, 0.1, 0.1, o, { item: this, dynamic: !0 }),
      g = u.createBodyDef(t, e, r, !1, !0, i, !1)
    this._body = u.createBody(g, [p])
    var m = new PIXI.Graphics()
    m.beginFill(9160191, 0.4),
      m.drawRect(-n / 2, -l / 2, n, l),
      m.endFill(),
      this.addChild(m),
      (this.mask = m),
      r != ht.b2_staticBody && (this._enableUpdate(), (this.angleUpdate = !0), (this.positionUpdate = !0))
  }
  function G(t, e, n) {
    a.call(this, 'Rock', Z.zOrder.defaultZ), (this.x = t), (this.y = e)
    var i = Pt.assets.getSprite('rock', 'atlasGame')
    i.scale.set(0.5, 0.5), i.anchor.set(0.5, 0.5), this.addChild(i)
    var s = u.createCircleShape(24),
      o = u.createFixtureDef(s, 0.5, 0, n, { item: this, dynamic: !0 }),
      r = u.createBodyDef(t, e, ht.b2_dynamicBody)
    ;(this._body = u.createBody(r, [o])), this._enableUpdate(), (this.angleUpdate = !0), (this.positionUpdate = !0)
  }
  function U(t, e, n, i, s) {
    a.call(this, 'Spring', Z.zOrder.defaultZ),
      (n = ot.toRadians(n)),
      (this.x = t),
      (this.y = e),
      (this.rotation = n),
      (this.type = i),
      (this.elasticity = s)
    var o = rt.generateFrameNames('spring_', 1, 8, '', 4),
      r = Pt.assets.getTextures(o, 'atlasGame')
    ;(this._spring = new PIXI.extras.AnimatedSprite(r)),
      this._spring.anchor.set(0.5, 0.95),
      this._spring.scale.set(0.5, 0.5),
      (this._spring.animationSpeed = 0.5),
      (this._spring.loop = !1),
      this._spring.stop(),
      this.addChildAt(this._spring, 0)
    var l = u.createPolygonShape(14, 14),
      y = u.createFixtureDef(l, 0.1, 0.1, 0.1),
      h = u.createBodyDef(t, e, u.convertBodyTypeFromStringToNumber(this.type), !1, !0, n)
    this._body = u.createBody(h, [y])
    var d = u.createPolygonShape(4, 10, -22, -26),
      c = u.createFixtureDef(d, 1, 0, 0.2),
      p = u.createPolygonShape(4, 10, 22, -26),
      g = u.createFixtureDef(p, 1, 0, 0.2),
      m = u.createPolygonShape(48, 6, 0, -24),
      x = u.createFixtureDef(m, 1, 0, 1, this, !0),
      w = u.createPolygonShape(44, 6, 0, -30),
      f = u.createFixtureDef(w, 1, 0, 1, { item: this, isSensor: !1 }, !1),
      P = u.createPolygonShape(14, 11, 0, -15),
      _ = u.createFixtureDef(P, 0.1, 0.1, 0.1, this, 'dynamic' == i),
      v = u.createBodyDef(t, e, u.convertBodyTypeFromStringToNumber(this.type), !1, !0, n)
    if (((this._body2 = u.createBody(v, [c, g, x, f, _])), 'dynamic' == i)) {
      var S = new wt()
      S.Initialize(this._body, this._body2, new lt(t / Pt.physScale, e / Pt.physScale))
      Pt.physWorld.CreateJoint(S)
    }
    Pt.physics.contactListener.addBeginContactListener(this._onBeginContact, this),
      'dynamic' == this.type && (this._enableUpdate(), (this.angleUpdate = !0), (this.positionUpdate = !0)),
      (this.sndSpring = Pt.assets.getSound('sndSpring'))
  }
  function F(t, e) {
    a.call(this, 'Star', Z.zOrder.defaultZ), (this.x = t), (this.y = e)
    var n = rt.generateFrameNames('star_', 1, 52, '', 4),
      i = Pt.assets.getTextures(n, 'atlasGame'),
      s = new PIXI.extras.AnimatedSprite(i)
    s.anchor.set(0.5, 0.5),
      s.scale.set(0.5, 0.5),
      (s.animationSpeed = 1),
      (s.loop = !0),
      s.play(),
      this.addChildAt(s, 0)
    var o = u.createCircleShape(10),
      r = u.createFixtureDef(o, 0.2, 0.1, 1, { item: this, starSensor: !0 }, !0),
      l = u.createBodyDef(t, e, ht.b2_staticBody)
    ;(this._body = u.createBody(l, [r])),
      Pt.physics.contactListener.addBeginContactListener(this._onBeginContact, this),
      (this.sndStar = Pt.assets.getSound('sndStar'))
  }
  function V(t, e) {
    a.call(this, 'Stopper', Z.zOrder.defaultZ), (this.x = t), (this.y = e)
    var n = Pt.assets.getSprite('stopper', 'atlasGame')
    n.scale.set(0.5, 0.5), n.anchor.set(0.5, 0.5), this.addChild(n)
    var i = u.createCircleShape(5),
      s = u.createFixtureDef(i, 0.2, 0.1, 1, this),
      o = u.createBodyDef(t, e, ht.b2_staticBody)
    this._body = u.createBody(o, [s])
  }
  function X(t, e, n, i, s) {
    a.call(this, 'Swings', Z.zOrder.peg),
      (n = ot.toRadians(n)),
      (this.x = t),
      (this.y = e),
      (this.rotation = n),
      (this.lowerAngle = ot.toRadians(i)),
      (this.upperAngle = ot.toRadians(s))
    var o = Pt.assets.getSprite('swings', 'atlasGame')
    o.scale.set(0.5, 0.5), o.anchor.set(0.5, 0.83), this.addChild(o)
    var r = u.createPolygonShape(60, 11, 0, 0.5),
      l = u.createFixtureDef(r, 1, 0, 0.4, this),
      y = u.createPolygonShape(11, 30, 0, -20),
      h = u.createFixtureDef(y, 1, 0, 0.4, this),
      d = u.createBodyDef(t, e, ht.b2_dynamicBody, !1, !0, n)
    this._body = u.createBody(d, [l, h])
    var c = Pt.physWorld.GetGroundBody(),
      p = new xt()
    p.Initialize(c, this._body, this._body.GetPosition())
    var g = Pt.physWorld.CreateJoint(p)
    g.EnableLimit(!0),
      g.SetLimits(this.lowerAngle - n, this.upperAngle - n),
      this._enableUpdate(),
      (this.angleUpdate = !0),
      (this.positionUpdate = !0)
  }
  function N(t, e, n, i, s, o) {
    a.call(this, 'Switcher', Z.zOrder.switcher),
      (n = ot.toRadians(n)),
      (this.x = t),
      (this.y = e),
      (this.rotation = n),
      (this.type = i),
      (this.signalID = s),
      (this.color = o)
    var r = this.type + this.color + '_',
      l = rt.generateFrameNames(r, 1, 6, '', 4),
      y = Pt.assets.getTextures(l, 'atlasGame')
    ;(this._switcher = new PIXI.extras.AnimatedSprite(y)),
      this._switcher.anchor.set(0.5, 1),
      this._switcher.scale.set(0.5, 0.5),
      (this._switcher.animationSpeed = 1),
      (this._switcher.loop = !1),
      this.addChildAt(this._switcher, 0),
      (this._on = !1)
    var h = u.createPolygonShape(30, 8, 0, -12),
      d = u.createFixtureDef(h, 1, 0, 0.1, { item: this, isSensor: !0 }, !0),
      c = u.createPolygonShape(40, 10, 0, -4),
      p = u.createFixtureDef(c, 1, 0, 0.1, this),
      g = u.createBodyDef(t, e, ht.b2_staticBody, !1, !0, n)
    ;(this._body = u.createBody(g, [d, p])),
      Pt.physics.contactListener.addBeginContactListener(this._onBeginContact, this),
      'button' == this.type && Pt.physics.contactListener.addEndContactListener(this._onEndContact, this),
      (this._countContacts = 0),
      (this.sndSwitcher = Pt.assets.getSound('sndSwitcher'))
  }
  function Y(t, e, n, i, s) {
    a.call(this, 'Teleport', Z.zOrder.teleport),
      (i = ot.toRadians(i)),
      (this.x = t),
      (this.y = e),
      (this.rotation = i),
      (this.id = n)
    var o = rt.generateFrameNames('teleport' + s + '_', 1, 20, '', 4),
      r = Pt.assets.getTextures(o, 'atlasGame'),
      l = new PIXI.extras.AnimatedSprite(r)
    l.anchor.set(0.5, 0.3),
      l.scale.set(0.5, 0.5),
      (l.animationSpeed = 0.5),
      (l.loop = !0),
      l.play(),
      this.addChildAt(l, 0)
    var y = u.createPolygonShape(6, 60, -20, 12),
      h = u.createFixtureDef(y, 1, 0, 0.2),
      d = u.createPolygonShape(6, 60, 20, 12),
      c = u.createFixtureDef(d, 1, 0, 0.2),
      p = u.createPolygonShape(44, 6, 0, 39),
      g = u.createFixtureDef(p, 1, 0, 1),
      m = u.createPolygonShape(44, 6),
      x = u.createFixtureDef(m, 1, 0, 1, { item: this, teleportSensor: !0 }, !0),
      w = u.createBodyDef(t, e, ht.b2_staticBody, !0, !0, i)
    ;(this._body = u.createBody(w, [h, c, g, x])),
      Pt.physics.contactListener.addBeginContactListener(this._onBeginContact, this),
      Pt.physics.contactListener.addEndContactListener(this._onEndContact, this),
      a.events.on(a.EVENT_TELEPORTATION, this._teleportation, this),
      (this._inUse = !1),
      (this.sndTeleport = Pt.assets.getSound('sndTeleport'))
  }
  function W(t, e, n, i, s) {
    a.call(this, 'Tube', Z.zOrder.defaultZ),
      (i = i || 0),
      (s = s || 0),
      (n = ot.toRadians(n)),
      (this.x = t),
      (this.y = e),
      (this.rotation = n)
    var o = ot.vectorVelocityRad(n, 100)
    this._force = new lt(o.x, o.y)
    var r = Pt.assets.getSprite('tube', 'atlasGame')
    r.scale.set(0.5, 0.5), r.anchor.set(0.5, 0.5), this.addChild(r)
    var l = i + s,
      y = u.createPolygonShape(50, 6, 0, -13.5),
      h = u.createFixtureDef(y, 1, 0.1, 1),
      d = u.createPolygonShape(50, 6, 0, 13.5),
      c = u.createFixtureDef(d, 1, 0.1, 1),
      p = u.createPolygonShape(50 + l, 10, -i / 2 + s / 2),
      g = u.createFixtureDef(p, 1, 0.1, 1, { item: this, tubeSensor: !0 }, !0),
      m = u.createBodyDef(t, e, ht.b2_staticBody, !1, !0, n)
    ;(this._body = u.createBody(m, [c, g, h])), this._enableUpdate()
  }
  function z(t) {
    if ((a.call(this, 'Tutorial', Z.zOrder.tutorial), 1 == t)) {
      var e = Pt.assets.getSprite('tutorial1_1', 'atlasUI')
      e.scale.set(0.5, 0.5), e.anchor.set(0.5, 0.5), (e.x = 300), (e.y = 100), this.addChild(e)
      var n = Pt.assets.getSprite('tutorial1_2', 'atlasUI')
      n.scale.set(0.5, 0.5), n.anchor.set(0.5, 0.5), (n.x = 300), (n.y = 400), this.addChild(n)
    }
  }
  function H(t, e, n) {
    a.call(this, 'WightBall', Z.zOrder.peg), (n = n || 2), (this.x = t), (this.y = e)
    var i = Pt.assets.getSprite('weightBall', 'atlasGame')
    i.scale.set(0.5, 0.5), i.anchor.set(0.5, 0.5), this.addChild(i)
    var s = u.createCircleShape(40),
      o = u.createFixtureDef(s, 0.2, 0.1, n, this),
      r = u.createBodyDef(t, e, ht.b2_dynamicBody)
    ;(this._body = u.createBody(r, [o])), this._enableUpdate(), (this.angleUpdate = !0), (this.positionUpdate = !0)
  }
  function j() {
    ;(this.currLevel = 1),
      (this.lastOpened = Pt.storage.get(Pt.SAVE_KEY_LAST_OPENED) || 1),
      (this.totalLevels = ft.length)
  }
  function J() {
    PIXI.Container.call(this), Pt.pixi.stage.addChild(this)
    var t = new PIXI.Graphics()
    t.beginFill(0), t.drawRect(0, 0, Pt.gameWidth0, Pt.gameHeight0), t.endFill(), this.addChild(t)
  }
  function K() {
    if (Pt.menuState) throw new Error('MenuState singelton!')
    ;(Pt.menuState = this), PIXI.Container.call(this), Pt.pixi.stage.addChildAt(this, 0)
    var t = Pt.assets.getSprite('bg_menu')
    t.scale.set(0.5, 0.5),
      this.addChild(t),
      (this._onBtnsLevelClick = this._onBtnsLevelClick.bind(this)),
      (this._menuDialog = new b(this._onClick, this)),
      this.addChild(this._menuDialog),
      (this._levelsDialog = new S(this._onBtnsLevelClick, this._onClick, this)),
      this.addChild(this._levelsDialog),
      (this._creditsDialog = new P(this._onClick, this)),
      this.addChild(this._creditsDialog),
      (this.sndButton = Pt.assets.getSound('sndButton'))
  }
  function Z() {
    if (Pt.playState) throw new Error('MenuState singelton!')
    ;(Pt.playState = this),
      PIXI.Container.call(this),
      Pt.pixi.stage.addChildAt(this, 0),
      (this.aimControl = !Pt.device.desktop && !Pt.device.chromeOS)
    var t = Math.ceil(Pt.levelMng.currLevel / 10)
    ;(this.bg = Pt.assets.getSprite('bg_' + t)),
      this.bg.scale.set(0.5, 0.5),
      (this.bg.interactive = !0),
      this.aimControl || this.bg.on('pointerdown', this._onStageClick, this),
      this.addChild(this.bg)
    var e = new PIXI.Graphics()
    ;(e.alpha = 0.1),
      e.beginFill(0),
      e.drawRect(0, 0, Pt.gameWidth0, Pt.gameHeight0),
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
      Pt.levelMng.create(),
      Pt.levelMng.currLevel >= 1 && Pt.levelMng.currLevel <= 2 && this.gameLayer.addChild(new z(Pt.levelMng.currLevel)),
      (this.sndButton = Pt.assets.getSound('sndButton')),
      this.aimControl &&
        ((this.aim = Pt.assets.getSprite('aim')),
        this.aim.scale.set(0.5, 0.5),
        this.aim.anchor.set(0.5, 0.5),
        (this.aim.visible = !1),
        this.addChild(this.aim))
  }
  function q() {
    nt(),
      Pt.inited
        ? ((Pt.pixi.renderer.autoResize = !0),
          Pt.pixi.renderer.resize(Pt.canvasWidth, Pt.canvasHeight),
          Pt.pixi.stage.scale.set(Pt.scale, Pt.scale),
          Pt.physics.enabledDD && Pt.physics.updateCanvasSize())
        : $(),
      Pt.resizeHandler && Pt.resizeHandler.call(),
      Pt.imgRotate &&
        (Pt.imgRotate.position.set(Pt.canvasWidth / 2, Pt.canvasHeight / 2),
        (Pt.imgRotate.scale.x = Pt.imgRotate.scale.y = Pt.scale))
  }
  function $() {
    if (
      ((Pt.device = new Device()),
      (Pt.audioEnabled = Pt.device.canPlayAudio('ogg')),
      Pt.device.android && !Pt.device.chrome)
    ) {
      var t = document.createElement('p'),
        e = document.createTextNode(
          "This game doesn't work correctly in default Android browser. Please install Chrome on your device."
        )
      return t.appendChild(e), void document.getElementById('msg').appendChild(t)
    }
    var a = document.getElementById('msg')
    a.parentNode.removeChild(a),
      (Pt.pixi = new PIXI.Application(Pt.canvasWidth, Pt.canvasHeight, { antialias: !0 })),
      (Pt.pixi.renderer.backgroundColor = 0),
      Pt.pixi.stage.scale.set(Pt.scale, Pt.scale),
      document.body.appendChild(Pt.pixi.view),
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
      console.log(Pt.pixi.renderer.view.width, Pt.pixi.renderer.view.height),
      (Pt.physics = new u(!1)),
      (Pt.currLevelDebug = 29),
      (Pt.browserEvents = new o()),
      Pt.browserEvents.on('onResize', q),
      Pt.browserEvents.on('onOrientationChange', q),
      (Pt.storage = new m())
    var i = []
    i.push(Pt.SAVE_KEY_LAST_OPENED, Pt.SAVE_KEY_MUSIC, Pt.SAVE_KEY_SOUND)
    for (var r = 1; r <= 30; r++) i.push(Pt.SAVE_KEY_STARS + r)
    Pt.storage.read(i), (Pt.assets = new s(Pt)), (Pt.rnd = new x([(Date.now() * Math.random()).toString()]))
    try {
      Pt.fps = new FPSMeter(document.body)
    } catch (t) {}
    if (
      ((Pt.levelMng = new j()),
      (Pt.shutter = new J()),
      Pt.pixi.stage.addChild((Pt.preloader = new n())),
      (PIXI.loader.baseUrl = 'assets'),
      PIXI.loader
        .add('atlasUI', 'images/atlasUI.json')
        .add('atlasGame', 'images/atlasGame.json')
        .add('splash', 'images/splash.png')
        .add('bg_menu', 'images/bg_menu.png')
        .add('bg_1', 'images/bg_1.png')
        .add('bg_2', 'images/bg_2.png')
        .add('bg_3', 'images/bg_3.png'),
      Pt.audioEnabled)
    ) {
      var l = Pt.device.iOS ? '.m4a' : '.ogg'
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
    PIXI.loader.on('progress', Q).load(tt), (Pt.inited = !0)
  }
  function Q(t, e) {
    if ((console.log('loading: ' + e.url), Pt.preloader)) {
      var a = Math.round(t.progress)
      Pt.preloader.setLoading(a)
    }
  }
  function tt() {
    Pt.preloader ? (Pt.preloader.setLoading(100), Pt.preloader.loadedCallback(et)) : at()
  }
  function et() {
    ;(Pt.splash = new i()), Pt.splash.runAfter(at), Pt.pixi.stage.addChild(Pt.splash)
  }
  function at() {
    if (
      (Pt.preloader && (Pt.preloader.destroy(), (Pt.preloader = null)),
      Pt.splash && (Pt.splash.destroy(), (Pt.splash = null)),
      rt.atHome([window.location.hostname]))
    ) {
      Pt._checkAudio()
      var t = 1
      1 == t ? new K() : 2 == t && ((Pt.levelMng.currLevel = Pt.currLevelDebug), new Z()), Pt.shutter.hide()
    }
  }
  function nt() {
    var e = t.innerWidth,
      a = t.innerHeight,
      n = it(Pt.gameWidth0 / Pt.gameHeight0, e, a)
    ;(Pt.gameWidth1 = n.width),
      (Pt.gameHeight1 = n.height),
      (Pt.scale = Pt.gameWidth1 / Pt.gameWidth0),
      (Pt.gameMaxWidth1 = Pt.gameMaxWidth0 * Pt.scale),
      (Pt.gameMaxHeight1 = Pt.gameMaxHeight0 * Pt.scale),
      (Pt.canvasWidth = Pt.gameMaxWidth1 > e ? e : Pt.gameMaxWidth1),
      (Pt.canvasHeight = Pt.gameMaxHeight1 > a ? a : Pt.gameMaxHeight1)
    var i = document.body
    ;(i.style.width = Pt.canvasWidth + 'px'),
      (i.style.height = Pt.canvasHeight + 'px'),
      (i.style.marginLeft = e / 2 - Pt.canvasWidth / 2 + 'px'),
      (i.style.marginTop = a / 2 - Pt.canvasHeight / 2 + 'px')
  }
  function it(t, e, a) {
    var n = Math.floor(e),
      i = Math.floor(a)
    return (
      t < 1 && e >= a
        ? (n = Math.floor(a * t))
        : t >= 1 && e <= a
        ? (i = Math.floor(e / t))
        : Math.floor(a * t) > e
        ? (i = Math.floor(e / t))
        : (n = Math.floor(a * t)),
      { width: n, height: i }
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
        this.onClick.add(function (a) {
          t.open(e, '_blank')
        })
    }),
    (e.prototype.setIcon = function (t, e, a, n, i) {
      if (!this.disposed) {
        ;(a = a || 0), (n = n || 0), (i = i || 1)
        var s
        if ('string' == typeof t) s = this.app.assets.getTexture(t, e)
        else if (t instanceof PIXI.Texture) s = t
        else if (t instanceof PIXI.Sprite) this.icon = t
        else if (null == t && this.icon) return this.removeChild(this.icon), void (this.icon = null)
        s && (this.icon ? this.icon.setTexture(s) : (this.icon = new PIXI.Sprite(s))),
          this.icon.anchor.set(0.5, 0.5),
          (this.icon.x = a),
          (this.icon.y = n),
          this.icon.scale.set(i, i),
          this.addChild(this.icon)
      }
    }),
    (e.prototype.setLabel = function (t, e, a, n) {
      ;(t = t || ''),
        (a = a || 0),
        (n = n || 0),
        this._label || ((this._label = new PIXI.Text(t, e)), this.addChild(this._label)),
        (this._label.text = t),
        e && (this._label.style = e),
        (this._label.x = this.width / 2 - this._label.width / 2 + a),
        (this._label.y = this.height / 2 - this._label.height / 2 + n)
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
    (e.generateButton = function (t, a, n, i) {
      var s = Pt.assets.getTexture(t, a)
      return new e(s, n, i)
    }),
    (a.prototype = Object.create(PIXI.Container.prototype)),
    (a.prototype.constructor = a),
    (a.prototype.destroy = function () {
      PIXI.Container.prototype.destroy.call(this),
        this._body && Pt.physWorld.DestroyBody(this._body),
        (this._body = null),
        Pt.pixi.ticker.remove(this._update, this)
    }),
    (a.prototype.setPosition = function (t, e) {
      if (this._body) {
        var a = this
        Pt.physics.doIt(function () {
          a._body.SetPosition(new lt(t / Pt.physScale, e / Pt.physScale))
        })
      }
      this.position.set(t, e)
    }),
    (a.prototype._enableUpdate = function () {
      Pt.pixi.ticker.add(this._update, this)
    }),
    (a.prototype._disableUpdate = function () {
      Pt.pixi.ticker.remove(this._update, this)
    }),
    (a.prototype._update = function () {
      this.angleUpdate && (this.rotation = this._body.GetAngle()),
        this.positionUpdate &&
          ((this.x = this._body.GetPosition().x * Pt.physScale), (this.y = this._body.GetPosition().y * Pt.physScale)),
        this.y > 3e3 &&
          (console.log('Item ' + this.name + ' has reached position of y at 3000. The item has been destroyed.'),
          this.destroy())
    }),
    (a.prototype.GetBody = function () {
      return this._body
    }),
    (a.events = new EventEmitter()),
    (a.EVENT_TRIGGER_PRESSED = 'TriggerPressed'),
    (a.EVENT_TELEPORTATION = 'Teleportation'),
    (n.prototype = Object.create(PIXI.Container.prototype)),
    (n.prototype.constructor = n),
    (n.prototype.setLoading = function (t) {
      this._loaded = t
    }),
    (n.prototype.loadedCallback = function (t) {
      this._loadedCB = t
    }),
    (n.prototype._update = function () {
      this._curr < this._loaded && (this._curr = Math.round(this._curr + 2 * Pt.pixi.ticker.deltaTime)),
        this._curr > this._loaded && (this._curr = this._loaded),
        (this._txtLoading.text = 'Loading ' + this._curr + '%'),
        100 == this._curr &&
          (Pt.pixi.ticker.remove(this._update, this), this._loadedCB && setTimeout(this._loadedCB, 500))
    }),
    (i.prototype = Object.create(PIXI.Container.prototype)),
    (i.prototype.constructor = i),
    (i.prototype.runAfter = function (t, e) {
      ;(e = void 0 != e ? e : 1e3), setTimeout(t, e)
    }),
    (s.prototype.constructor = s),
    (s.prototype.getTexture = function (t, e) {
      return e ? PIXI.loader.resources[e].textures[t] : PIXI.utils.TextureCache[t]
    }),
    (s.prototype.getTextures = function (t, e) {
      var a
      a = e ? PIXI.loader.resources[e].textures : PIXI.utils.TextureCache
      for (var n = [], i = 0; i < t.length; i++) n.push(a[t[i]])
      return n
    }),
    (s.prototype.getSprite = function (t, e, a) {
      var n = new PIXI.Sprite(this.getTexture(t, e))
      return a && n.anchor.set(0.5, 0.5), n
    }),
    (s.prototype.getSound = function (t) {
      return 0 == Pt.audioEnabled ? null : PIXI.loader.resources[t].sound
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
        function (e, a) {
          void 0 === t[e] && (t[e] = []), t[e].indexOf(a) === -1 && t[e].push(a)
        }),
        (this.dispatchEvent = this.emit =
          function (e) {
            if (t[e.type] && t[e.type].length) for (var a = 0, n = t[e.type].length; a < n; a++) t[e.type][a](e)
          }),
        (this.removeEventListener = this.off =
          function (e, a) {
            var n = t[e].indexOf(a)
            n !== -1 && t[e].splice(n, 1)
          }),
        (this.removeAllEventListeners = function (e) {
          var a = t[e]
          a && (a.length = 0)
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
        this.onClick.add(function (a) {
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
    (r.generateButton = function (t, e, a, n) {
      var i, s, o
      i = Pt.assets.getTexture(t + 'up', e)
      try {
        s = Pt.assets.getTexture(t + 'over', e)
      } catch (t) {}
      try {
        o = Pt.assets.getTexture(t + 'down', e)
      } catch (t) {}
      return new r(i, s, o, a, n)
    }),
    (l.prototype = Object.create(e.prototype)),
    (l.prototype.constructor = l),
    (l.prototype.setLocked = function (t) {
      if (((this.enable = !t), t)) {
        this.alpha = 0.5
        for (var e = 0; e < 3; e++) this._stars[e].visible = !1
      } else {
        for (var a = Pt.storage.get(Pt.SAVE_KEY_STARS + this.num), n = 0; n < 3; n++)
          this._stars[n].visible = n + 1 <= a
        this.alpha = 1
      }
    }),
    (y.prototype = Object.create(PIXI.Container.prototype)),
    (y.prototype.constructor = l),
    (y.prototype._onClick = function (t) {
      t.target == this._on ? (this.on = !1) : t.target == this._off && (this.on = !0),
        (t.target = this),
        (t.isOn = this.on),
        this._callback.call(this._callbackScope, t)
    }),
    Object.defineProperty(y.prototype, 'on', {
      get: function () {
        return this._on.visible
      },
      set: function (t) {
        this.disposed || ((this._on.visible = t), (this._off.visible = !t))
      }
    }),
    (h.__id = 0),
    (h.prototype.add = function (t) {
      var e = this._arr.indexOf(t)
      return e >= 0
        ? void (this.throwIfIn && new Error('Item already in collection. [' + this.name + '].'))
        : void (this._arr[this._arr.length] = t)
    }),
    (h.prototype.remove = function (t) {
      var e = this._arr.indexOf(t)
      return e < 0
        ? void (this.throwIfNotIn && new Error('There is not item in collection. [' + this.name + '].'))
        : void this._arr.splice(e, 1)
    }),
    (h.prototype.at = function (t) {
      return (
        t < 0
          ? (this.throwIfOut && new Error('Index is lower than zero. [' + this.name + '].'), (t = 0))
          : t >= this._arr.length &&
            (this.throwIfOut && new Error('Index is higher than total. [' + this.name + '].'),
            (t = this._arr.length - 1)),
        this._arr[t]
      )
    }),
    (h.prototype.first = function () {
      return this._arr[0]
    }),
    (h.prototype.last = function () {
      return this._arr[this._arr.length - 1]
    }),
    (h.prototype.getByProperty = function (t, e) {
      if (null == t || null == e) return null
      for (var a = this.total(), n = 0; n < a; n++) {
        var i = this._arr[n]
        if (i[t] && i[t] == e) return i
      }
      return null
    }),
    (h.prototype.has = function (t) {
      return this._arr.indexOf(t) >= 0
    }),
    (h.prototype.clear = function () {
      this._arr.splice(0, this._arr.length)
    }),
    (h.prototype.total = function () {
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
          a = !1
        try {
          ;(a = !!e.canPlayType) &&
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
          a = document.createElement('p'),
          n = {
            webkitTransform: '-webkit-transform',
            OTransform: '-o-transform',
            msTransform: '-ms-transform',
            MozTransform: '-moz-transform',
            transform: 'transform'
          }
        document.body.insertBefore(a, null)
        for (var i in n)
          void 0 !== a.style[i] &&
            ((a.style[i] = 'translate3d(1px,1px,1px)'), (e = t.getComputedStyle(a).getPropertyValue(n[i])))
        document.body.removeChild(a), (this.css3D = void 0 !== e && e.length > 0 && 'none' !== e)
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
          a = function () {
            ;(e._callbacks[e.count] = t), e.count++
          }
        this._blocked ? (this._doItAfter[this._doItAfter.length] = a) : a()
      }
    }),
    (c.prototype.remove = function (t) {
      if (!(this.disposed || this._callbacks.indexOf(t) < 0)) {
        var e = this,
          a = function () {
            var a = e._callbacks.indexOf(t)
            e._callbacks.splice(a, 1), e.count--
          }
        this._blocked ? (this._doItAfter[this._doItAfter.length] = a) : a()
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
    (g.prototype.constructor = g)
  var st = ''
  ;(g.prototype.collectInteractiveSprite = function (t, e) {
    for (var a = t.children, n = a.length, i = 0; i < n; i++) {
      var s = a[i]
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
    (g.prototype.setTarget = function (t) {
      ;(this.target = t),
        null === this.interactionDOMElement && this.setTargetDomElement(t.view),
        document.body.addEventListener('mouseup', this.onMouseUp, !0)
    }),
    (g.prototype.setTargetDomElement = function (e) {
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
    (g.prototype.update = function () {
      if (this.target) {
        var t = Date.now(),
          e = t - this.last
        if (((e = (30 * e) / 1e3), !(e < 1))) {
          this.last = t
          var a = 0
          this.dirty &&
            ((this.dirty = !1),
            (this.interactiveItems = []),
            this.stage.interactive && this.interactiveItems.push(this.stage),
            this.collectInteractiveSprite(this.stage, this.stage))
          this.interactionDOMElement.style.cursor = 'inherit'
          var n = this.interactiveItems.length
          for (a = n - 1; a >= 0; a--) {
            var i = this.interactiveItems[a]
            if (i.mouseover || i.mouseout || i.buttonMode) {
              if (i.__iParent && i.__iParent.__target) continue
              ;(i.__hit = null != i.__target || this.hitTest(i, this.mouse)),
                i.__hit
                  ? (i.buttonMode && (this.interactionDOMElement.style.cursor = i.defaultCursor),
                    i.__iParent && (i.__iParent.__target = i),
                    i.__target ? (this.mouse.target = i.__target) : (this.mouse.target = i),
                    i.__isOver || (i.mouseover && i.mouseover(this.mouse), (i.__isOver = !0)))
                  : i.__isOver && (i.mouseout && i.mouseout(this.mouse), (i.__isOver = !1))
            }
          }
          for (a = n - 1; a >= 0; a--) (i = this.interactiveItems[a]), (i.__target = null)
        }
      }
    }),
    (g.prototype.onMouseMove = function (e) {
      this.mouse.originalEvent = e || t.event
      var a = this.interactionDOMElement.getBoundingClientRect()
      ;(this.mouse.global.x = (e.clientX - a.left) * (this.target.width / a.width)),
        (this.mouse.global.y = (e.clientY - a.top) * (this.target.height / a.height))
      for (var n = this.interactiveItems.length, i = 0; i < n; i++) {
        var s = this.interactiveItems[i]
        s.mousemove && s.mousemove(this.mouse)
      }
    }),
    (g.prototype.onMouseDown = function (e) {
      this.mouse.originalEvent = e || t.event
      for (
        var a = this.interactiveItems.length,
          n = function (t, e) {
            return t === e || (!!t.__target && n(t.__target, e))
          },
          i = null,
          s = 0,
          o = a - 1;
        o >= 0;
        o--
      ) {
        var r = this.interactiveItems[o]
        if (r.mousedown || r.click) {
          if (r != i && i && 0 == n(r, i)) continue
          ;(r.__hit = r.__target || this.hitTest(r, this.mouse)),
            s++,
            r.__hit &&
              (i || (i = r),
              r.__iParent && (r.__iParent.__target = r.__target || r),
              (this.mouse.target = r.__target || r),
              r.mousedown && r.mousedown(this.mouse),
              (r.__isDown = !0))
        } else r.__iParent.__target = r.__target
      }
      for (console.log(s, a), o = a - 1; o >= 0; o--) (r = this.interactiveItems[o]), (r.__target = null)
    }),
    (g.prototype.onMouseOut = function () {
      var t = this.interactiveItems.length
      this.interactionDOMElement.style.cursor = 'inherit'
      for (var e = 0; e < t; e++) {
        var a = this.interactiveItems[e]
        a.__isOver && ((this.mouse.target = a), a.mouseout && a.mouseout(this.mouse), (a.__isOver = !1))
      }
    }),
    (g.prototype.onMouseUp = function (e) {
      this.mouse.originalEvent = e || t.event
      for (var a = this.interactiveItems.length, n = !1, i = 0; i < a; i++) {
        var s = this.interactiveItems[i]
        ;(s.__hit = this.hitTest(s, this.mouse)),
          s.__hit && !n
            ? (s.mouseup && s.mouseup(this.mouse),
              s.__isDown && s.click && s.click(this.mouse),
              s.interactiveChildren || (n = !0))
            : s.__isDown && s.mouseupoutside && s.mouseupoutside(this.mouse),
          (s.__isDown = !1)
      }
    }),
    (g.prototype.hitTest = function (t, e) {
      var a = e.global
      if (!t.worldVisible) return !1
      var n = t instanceof PIXI.Sprite,
        i = t.worldTransform,
        s = i[0],
        o = i[1],
        r = i[2],
        l = i[3],
        y = i[4],
        h = i[5],
        d = 1 / (s * y + o * -l),
        c = y * d * a.x + -o * d * a.y + (h * o - r * y) * d,
        p = s * d * a.y + -l * d * a.x + (-h * s + r * l) * d
      if (t.hitArea && t.hitArea.contains) return !!t.hitArea.contains(c, p) && ((e.target = t), !0)
      if (n) {
        var g,
          m = t.texture.frame.width,
          u = t.texture.frame.height,
          x = -m * t.anchor.x
        if (c > x && c < x + m && ((g = -u * t.anchor.y), p > g && p < g + u)) return (e.target = t), !0
      }
      for (var w = t.children.length, f = 0; f < w; f++) {
        var P = t.children[f],
          _ = this.hitTest(P, e)
        if (_) return (e.target = P), (e.currentTarget = t), !0
      }
      return !1
    }),
    (g.prototype.onTouchMove = function (e) {
      var a,
        n = this.interactionDOMElement.getBoundingClientRect(),
        i = e.changedTouches,
        s = 0
      for (s = 0; s < i.length; s++) {
        var o = i[s]
        ;(a = this.touchs[o.identifier]),
          (a.originalEvent = e || t.event),
          (a.global.x = (o.clientX - n.left) * (this.target.width / n.width)),
          (a.global.y = (o.clientY - n.top) * (this.target.height / n.height)),
          navigator.isCocoonJS && ((a.global.x = o.clientX), (a.global.y = o.clientY))
      }
      var r = this.interactiveItems.length
      for (s = 0; s < r; s++) {
        var l = this.interactiveItems[s]
        l.touchmove && l.touchmove(a)
      }
    }),
    (g.prototype.onTouchStart = function (e) {
      for (var a = this.interactionDOMElement.getBoundingClientRect(), n = e.changedTouches, i = 0; i < n.length; i++) {
        var s = n[i],
          o = this.pool.pop()
        o || (o = new PIXI.InteractionData()),
          (o.originalEvent = e || t.event),
          (this.touchs[s.identifier] = o),
          (o.global.x = (s.clientX - a.left) * (this.target.width / a.width)),
          (o.global.y = (s.clientY - a.top) * (this.target.height / a.height)),
          navigator.isCocoonJS && ((o.global.x = s.clientX), (o.global.y = s.clientY))
        for (var r = this.interactiveItems.length, l = 0; l < r; l++) {
          var y = this.interactiveItems[l]
          if (
            (y.touchstart || y.tap) &&
            ((y.__hit = this.hitTest(y, o)),
            y.__hit &&
              (y.touchstart && y.touchstart(o), (y.__isDown = !0), (y.__touchData = o), !y.interactiveChildren))
          )
            break
        }
      }
    }),
    (g.prototype.onTouchEnd = function (e) {
      for (var a = this.interactionDOMElement.getBoundingClientRect(), n = e.changedTouches, i = 0; i < n.length; i++) {
        var s = n[i],
          o = this.touchs[s.identifier],
          r = !1
        ;(o.global.x = (s.clientX - a.left) * (this.target.width / a.width)),
          (o.global.y = (s.clientY - a.top) * (this.target.height / a.height)),
          navigator.isCocoonJS && ((o.global.x = s.clientX), (o.global.y = s.clientY))
        for (var l = this.interactiveItems.length, y = 0; y < l; y++) {
          var h = this.interactiveItems[y],
            d = h.__touchData
          ;(h.__hit = this.hitTest(h, o)),
            d === o &&
              ((o.originalEvent = e || t.event),
              (h.touchend || h.tap) &&
                (h.__hit && !r
                  ? (h.touchend && h.touchend(o), h.__isDown && h.tap && h.tap(o), h.interactiveChildren || (r = !0))
                  : h.__isDown && h.touchendoutside && h.touchendoutside(o),
                (h.__isDown = !1)),
              (h.__touchData = null))
        }
        this.pool.push(o), (this.touchs[s.identifier] = null)
      }
    }),
    (g.InteractionData = function () {
      ;(this.global = new PIXI.Point()),
        (this.local = new PIXI.Point()),
        (this.currentTarget = null),
        (this.target = null),
        (this.originalEvent = null)
    }),
    (g.InteractionData.prototype.getLocalPosition = function (t) {
      var e = t.worldTransform,
        a = this.global,
        n = e[0],
        i = e[1],
        s = e[2],
        o = e[3],
        r = e[4],
        l = e[5],
        y = 1 / (n * r + i * -o)
      return new PIXI.Point(
        r * y * a.x + -i * y * a.y + (l * i - s * r) * y,
        n * y * a.y + -o * y * a.x + (-l * n + s * o) * y
      )
    }),
    (g.InteractionData.prototype.constructor = g.InteractionData)
  var ot = {}
  ;(ot.distance1 = function (t, e, a, n) {
    var i = a - t,
      s = n - e
    return Math.sqrt(i * i + s * s)
  }),
    (ot.distance2 = function (t, e) {
      var a = e.x - t.x,
        n = e.y - t.y
      return Math.sqrt(a * a + n * n)
    }),
    (ot.angleRad1 = function (t, e, a, n) {
      return Math.atan2(n - e, a - t)
    }),
    (ot.angleDeg1 = function (t, e, a, n) {
      return (Math.atan2(n - e, a - t) / Math.PI) * 180
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
      var a = (t * Math.PI) / 180
      return { x: Math.cos(a) * e, y: Math.sin(a) * e }
    }),
    (ot.equal = function (t, e, a) {
      return (a = a || 1e-5), Math.abs(t - e) <= a
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
      var a = ot.pointLength(t)
      return 0 == a ? t : ((t.x /= a), (t.y /= a), e && ((t.x *= e), (t.y *= e)), t)
    }),
    (ot.intersection = function (t, e, a, n, i, s, o, r, l) {
      if (t === i && e === s) return null != l && ((l.x = t), (l.y = e)), !0
      if (t == o && e == r) return null != l && ((l.x = t), (l.y = e)), !0
      if (a == i && n == s) return null != l && ((l.x = a), (l.y = n)), !0
      if (a == o && n == r) return null != l && ((l.x = a), (l.y = n)), !0
      var y = a - t,
        h = n - e,
        d = o - i,
        c = r - s,
        p = -h,
        g = y,
        m = -(p * t + g * e),
        u = -c,
        x = d,
        w = -(u * i + x * s),
        P = u * t + x * e + w,
        _ = u * a + x * n + w,
        v = p * i + g * s + m,
        S = p * o + g * r + m
      if (P * _ >= 0 || v * S >= 0) return !1
      var b = P / (P - _)
      ;(y *= b), (h *= b)
      return null != l && ((l.x = f.x), (l.y = f.y)), !0
    }),
    (ot.intersection = function (t, e, a, n, i) {
      if (t.x == a.x && t.y == a.y) return null != i && i.set(t), !0
      if (t.x == n.x && t.y == n.y) return null != i && i.set(t), !0
      if (e.x == a.x && e.y == a.y) return null != i && i.set(e), !0
      if (e.x == n.x && e.y == n.y) return null != i && i.set(e), !0
      var s = e.sub(t),
        o = n.sub(a),
        r = -s.y,
        l = s.x,
        y = -(r * t.x + l * t.y),
        h = -o.y,
        d = o.x,
        c = -(h * a.x + d * a.y),
        p = h * t.x + d * t.y + c,
        g = h * e.x + d * e.y + c,
        m = r * a.x + l * a.y + y,
        u = r * n.x + l * n.y + y
      if (p * g >= 0 || m * u >= 0) return !1
      var x = p / (p - g)
      ;(s.x *= x), (s.y *= x)
      var w = t.add(s)
      return null != i && (i.x = w.x), null != i && (i.y = w.y), !0
    }),
    (m.prototype.get = function (t) {
      return this._storage[t]
    }),
    (m.prototype.set = function (t, e) {
      ;(this._storage[t] = e.toString()), this.localStorageEnable && localStorage.setItem(t, e.toString())
    }),
    (m.prototype.read = function (t) {
      if (this.localStorageEnable)
        for (var e = t.length, a = 0; a < e; a++) {
          var n = t[a],
            i = localStorage.getItem(n)
          i && (this._storage[n] = i)
        }
    }),
    (m.prototype.clear = function () {
      ;(this._storage = {}), localStorage.clear()
    })
  var rt = {}
  ;(rt.generateFrameNames = function (t, e, a, n, i) {
    'undefined' == typeof n && (n = '')
    var s,
      o = [],
      r = ''
    if (e < a)
      for (s = e; s <= a; s++)
        (r = 'number' == typeof i ? rt.pad(s.toString(), i, '0', 1) : s.toString()), (r = t + r + n), o.push(r)
    else
      for (s = e; s >= a; s--)
        (r = 'number' == typeof i ? Phaser.Utils.pad(s.toString(), i, '0', 1) : s.toString()),
          (r = t + r + n),
          o.push(r)
    return o
  }),
    (rt.pad = function (t, e, a, n) {
      'undefined' == typeof e && (e = 0), 'undefined' == typeof a && (a = ' '), 'undefined' == typeof n && (n = 3)
      var i = 0
      if (e + 1 >= t.length)
        switch (n) {
          case 1:
            t = Array(e + 1 - t.length).join(a) + t
            break
          case 3:
            var s = Math.ceil((i = e - t.length) / 2),
              o = i - s
            t = Array(o + 1).join(a) + t + Array(s + 1).join(a)
            break
          default:
            t += Array(e + 1 - t.length).join(a)
        }
      return t
    }),
    (rt.atHome = function (e) {
      var a = t.location.hostname
      return e.indexOf(a) > -1
    })
  var lt = Box2D.Common.Math.b2Vec2,
    yt = (Box2D.Collision.b2AABB, Box2D.Dynamics.b2BodyDef),
    ht = Box2D.Dynamics.b2Body,
    dt = Box2D.Dynamics.b2FixtureDef,
    ct = (Box2D.Dynamics.b2Fixture, Box2D.Dynamics.b2World),
    pt = Box2D.Collision.Shapes.b2MassData,
    gt = Box2D.Collision.Shapes.b2PolygonShape,
    mt = Box2D.Collision.Shapes.b2CircleShape,
    ut = Box2D.Dynamics.b2DebugDraw,
    xt =
      (Box2D.Dynamics.Joints.b2MouseJointDef,
      Box2D.Dynamics.Joints.b2RevoluteJoint,
      Box2D.Dynamics.Joints.b2RevoluteJointDef),
    wt = Box2D.Dynamics.Joints.b2WeldJointDef
  Box2D.Dynamics.Joints.b2WeldJoint
  ;(u.prototype.constructor = u),
    (u.prototype.enableDebugDraw = function () {
      ;(this.enabledDD = !0),
        (this._canvas = document.createElement('canvas')),
        (this._canvas.id = 'PhysDebugDraw'),
        (this._canvas.width = Pt.pixi.renderer.width),
        (this._canvas.height = Pt.pixi.renderer.height),
        (this._canvas.style.zIndex = 1),
        (this._canvas.style.left = 0),
        (this._canvas.style.position = 'absolute'),
        (this._canvas.style.pointerEvents = 'none'),
        document.body.appendChild(this._canvas),
        (this._context = this._canvas.getContext('2d')),
        this._context.scale(Pt.scale, Pt.scale)
      var t = new ut()
      t.SetSprite(this._context),
        t.SetDrawScale(Pt.physScale),
        t.SetFillAlpha(0.3),
        t.SetLineThickness(1),
        t.SetFlags(ut.e_shapeBit | ut.e_jointBit),
        this.world.SetDebugDraw(t)
    }),
    (u.prototype.updateCanvasSize = function () {
      this.enabledDD &&
        ((this._canvas.width = Pt.pixi.renderer.width),
        (this._canvas.height = Pt.pixi.renderer.height),
        (this._canvas.style.width = Pt.pixi.view.style.width),
        (this._canvas.style.height = Pt.pixi.view.style.height),
        this._context.scale(Pt.scale, Pt.scale))
    }),
    (u.prototype.doIt = function (t) {
      return this.world.IsLocked() ? (this._doIt.push(t), !1) : (t.call(), !0)
    }),
    (u.prototype.doItAll = function () {
      for (var t = this._doIt.length, e = 0; e < t; e++) {
        var a = this._doIt[e]
        a.call()
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
      var e = new yt()
      ;(e.type = ht.b2_staticBody),
        (t.shape = new gt()),
        t.shape.SetAsBox((Pt.gameWidth0 / 2 - 4) / Pt.physScale, 10 / Pt.physScale),
        e.position.Set(Pt.gameWidth0 / 2 / Pt.physScale, Pt.gameHeight0 / Pt.physScale),
        this.world.CreateBody(e).CreateFixture(t)
    }),
    (u.createCircleShape = function (t, e) {
      var a = new mt(t / Pt.physScale)
      return e && a.SetLocalPosition(e), a
    }),
    (u.createPolygonShape = function (t, e, a, n, i) {
      ;(a = a || 0), (n = n || 0), (i = i || 0)
      var s = new gt()
      return (
        0 == a && 0 == n && 0 == i
          ? s.SetAsBox(t / 2 / Pt.physScale, e / 2 / Pt.physScale)
          : s.SetAsOrientedBox(
              t / 2 / Pt.physScale,
              e / 2 / Pt.physScale,
              new lt(a / Pt.physScale, n / Pt.physScale),
              i
            ),
        s
      )
    }),
    (u.createFixtureDef = function (t, e, a, n, i, s, o) {
      var r = new dt()
      return (
        (i = i || null),
        (s = s || !1),
        (o = o || null),
        (r.shape = t),
        (r.friction = e),
        (r.restitution = a),
        (r.density = n),
        (r.isSensor = s),
        (r.userData = i),
        o && (r.filter = o),
        r
      )
    }),
    (u.createBodyDef = function (t, e, a, n, i, s, o) {
      var r = new yt()
      return (
        (n = n || !1),
        (i = i || !0),
        (s = s || 0),
        (o = o || !1),
        (r.type = a),
        r.position.Set(t / Pt.physScale, e / Pt.physScale),
        (r.angle = s),
        (r.active = i),
        (r.bullet = o),
        (r.fixedRotation = n),
        r
      )
    }),
    (u.createBody = function (t, e) {
      var a = Pt.physWorld.CreateBody(t)
      if (e) for (var n = e.length, i = 0; i < n; i++) a.CreateFixture(e[i])
      return a
    }),
    (u.convertBodyTypeFromStringToNumber = function (t) {
      if ('static' == t) return ht.b2_staticBody
      if ('dynamic' == t) return ht.b2_dynamicBody
      if ('kinematic' == t) return ht.b2_kinematicBody
      throw 'Error! typeString has a wrong value.'
    }),
    (u.hasContactPairOfProperties = function (t, e, a) {
      var n = t.GetFixtureA(),
        i = t.GetFixtureB()
      if (null == n || null == i) return !1
      var s = n.GetUserData(),
        o = i.GetUserData()
      if (null == s || null == o) return !1
      var r = s.hasOwnProperty(e) && o.hasOwnProperty(a),
        l = s.hasOwnProperty(a) && o.hasOwnProperty(e)
      return r || l
    }),
    (u.getAnotherOfContact = function (t, e) {
      var a = t.GetFixtureA(),
        n = t.GetFixtureB()
      if (null == a && null == n) return null
      var i = a ? a.GetUserData() : null,
        s = n ? n.GetUserData() : null
      if (null == i && null == s) return null
      var o = null != i ? i.item : null,
        r = null != s ? s.item : null
      return null == o && null == r ? null : o == e ? r : r == e ? o : null
    }),
    (u.getAnotherUserDataOfContact = function (t, e) {
      var a = t.GetFixtureA(),
        n = t.GetFixtureB()
      if (null == a && null == n) return null
      var i = a ? a.GetUserData() : null,
        s = n ? n.GetUserData() : null
      if (null == i && null == s) return null
      var o = null != i ? i.item : null,
        r = null != s ? s.item : null
      return null == o && null == r ? null : o == e ? s : r == e ? i : null
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
        for (var e, a = 0; (e = t[a++]); )
          (this.s0 -= this.hash(e)),
            (this.s0 += ~~(this.s0 < 0)),
            (this.s1 -= this.hash(e)),
            (this.s1 += ~~(this.s1 < 0)),
            (this.s2 -= this.hash(e)),
            (this.s2 += ~~(this.s2 < 0))
      },
      hash: function (t) {
        var e, a, n
        for (n = 4022871197, t = t.toString(), a = 0; a < t.length; a++)
          (n += t.charCodeAt(a)),
            (e = 0.02519603282416938 * n),
            (n = e >>> 0),
            (e -= n),
            (e *= n),
            (n = e >>> 0),
            (e -= n),
            (n += 4294967296 * e)
        return 2.3283064365386963e-10 * (n >>> 0)
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
    (P.prototype = Object.create(PIXI.Container.prototype)),
    (P.prototype.constructor = P),
    (P.prototype.show = function (t) {
      TweenMax.to(this, t, { x: 0, y: this.showY, ease: Expo.easeOut })
    }),
    (P.prototype.hide = function (t) {
      TweenMax.to(this, t, { x: -Pt.gameWidth0, y: this.hideY, ease: Expo.easeOut })
    }),
    (_.prototype = Object.create(PIXI.Container.prototype)),
    (_.prototype.constructor = _),
    (_.prototype._onClick = function (t) {
      this._buttonsHandler(t.target.num)
    }),
    (_.prototype.refresh = function () {
      for (var t = this._buttons.length, e = 0; e < t; e++) {
        var a = this._buttons[e]
        a.setLocked(e + 1 > Pt.levelMng.lastOpened)
      }
    }),
    (v.prototype = Object.create(PIXI.Container.prototype)),
    (v.prototype.constructor = v),
    (v.prototype.show = function (t, e) {
      t = t || 0
      var a = 0.4
      this.visible = !0
      var n = this
      TweenMax.to(this, a, { delay: t, alpha: 1 }),
        TweenMax.to(this._text.scale, 2 * a, {
          delay: (t += 0.1),
          x: 1,
          y: 1,
          ease: Elastic.easeOut,
          onStart: function () {
            Pt.soundOn && n.sndWin.play()
          }
        })
      for (var i = 0; i < 3; i++) {
        var s = this._stars[i]
        ;(s.visible = i + 1 <= e),
          0 != s.visible &&
            (s.scale.set(0, 0),
            TweenMax.to(s.scale, 2 * a, { delay: (t += 0.1), x: 0.5, y: 0.5, ease: Elastic.easeOut }))
      }
      var o = Quad.easeOut,
        r = this._btnMenu.xIn,
        l = this._btnMenu.yIn
      TweenMax.to(this._btnMenu, a, { delay: (t += 0.1), x: r, y: l, ease: o }),
        (r = this._btnRestart.xIn),
        (l = this._btnRestart.yIn),
        TweenMax.to(this._btnRestart, a, { delay: (t += 0.05), x: r, y: l, ease: o }),
        (this._btnNext.enable = Pt.levelMng.currLevel != Pt.levelMng.totalLevels),
        (r = this._btnNext.xIn),
        (l = this._btnNext.yIn),
        TweenMax.to(this._btnNext, a, { delay: (t += 0.05), x: r, y: l, ease: o })
      var y = Pt.storage.get(Pt.SAVE_KEY_STARS + Pt.levelMng.currLevel) || 0
      y < e && Pt.storage.set(Pt.SAVE_KEY_STARS + Pt.levelMng.currLevel, e)
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
      TweenMax.to(this, t, { x: Pt.gameWidth0, y: this.hideY, ease: Expo.easeOut })
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
      TweenMax.to(this, t, { x: -Pt.gameWidth0, y: this.hideY, ease: Expo.easeOut })
    }),
    (b.prototype.hideToRight = function (t) {
      TweenMax.to(this, t, { x: Pt.gameWidth0, y: this.hideY, ease: Expo.easeOut })
    }),
    (A.prototype = Object.create(a.prototype)),
    (A.prototype.constructor = A),
    (A.prototype.destroy = function () {
      a.prototype.destroy.call(this), A._balls.remove(this)
    }),
    (A.prototype.setVelocity = function (t) {
      var e = new lt(t.x / Pt.physScale, t.y / Pt.physScale)
      this._body.SetLinearVelocity(e), this._body.SetAngularVelocity(e.x / 10 + 0.4), this._body.SetAwake(!0)
    }),
    (A.prototype._update = function () {
      a.prototype._update.call(this), this.y > Pt.gameHeight0 + 50 && this.destroy()
    }),
    (A._balls = new h('Balls')),
    (A._maxBalls = 25),
    (A.create = function (t, e, a) {
      if (A._balls.total() >= A._maxBalls) {
        var n = A._balls.first()
        n.destroy(), A._balls.remove(n)
      }
      var i = new A(t, e)
      return a.addChild(i), A._balls.add(i), i
    }),
    (I.prototype = Object.create(a.prototype)),
    (I.prototype.constructor = I),
    (I.prototype.destroy = function () {
      a.prototype.destroy.call(this), Pt.physics.contactListener.removeBeginContactListener(this._onBeginContact, this)
    }),
    (I.prototype._onBeginContact = function (t) {
      var e = u.getAnotherOfContact(t, this)
      e instanceof A && this._ballInTheNet()
    }),
    (I.prototype._ballInTheNet = function () {
      Pt.soundOn && this.sndBallInBasket.play(), Pt.playState.complete()
    }),
    (D.prototype = Object.create(a.prototype)),
    (D.prototype.constructor = D),
    (D.prototype.destroy = function () {
      a.prototype.destroy.call(this),
        Pt.physics.contactListener.removeBeginContactListener(this._onBeginContact, this),
        a.events.off(a.EVENT_TRIGGER_PRESSED, this._onTriggerEvent, this),
        this.sndStart && this.sndStart.stop(),
        this._rails.destroy(!0)
    }),
    (D.prototype._createRails = function () {
      ;(this._rails = new PIXI.Container()),
        (this._rails.x = this.x),
        (this._rails.y = this.y),
        (this._rails.zOrder = Z.zOrder.rail),
        Pt.playState.gameLayer.addChild(this._rails),
        (this._endX = this.x),
        (this._endY = this.y)
      var t
      'v' == this._orienation
        ? ((this._endY = this._end), (this._rails.y = this.y - 22))
        : ((this._endX = this._end), (this._rails.y = this.y - 22)),
        (t = ot.distance1(this.x, this.y, this._endX, this._endY))
      var e = Pt.assets.getSprite('rail', 'atlasGame').width / 2,
        a = Math.ceil(t / e)
      console.log(a)
      for (var n = 0; n < a; n++) {
        var i = Pt.assets.getSprite('rail', 'atlasGame')
        i.scale.set(0.5, 0.5), i.anchor.set(0, 0.5), (i.x = (i.width - 1) * n), this._rails.addChild(i)
      }
      'v' == this._orienation
        ? ((this._rails.rotation = ot.toRadians(90)), this.y > this._endY && (this._rails.y -= t))
        : this.x > this._endX && (this._rails.x -= t)
    }),
    (D.prototype._onBeginContact = function (t) {
      var e = u.getAnotherOfContact(t, this)
      e instanceof A && this._ballInTheNet()
    }),
    (D.prototype._ballInTheNet = function () {
      Pt.playState.complete()
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
        Pt.soundOn && this.sndStart.play())
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
      a.prototype._update.call(this),
        this._isMove &&
          ('v' == this._orienation
            ? ot.equal(this.y, this._stopVal, 3) && this._stop()
            : ot.equal(this.x, this._stopVal, 3) && this._stop())
    }),
    (D.prototype._stop = function () {
      ;(this._isMove = !1),
        this._body.GetLinearVelocity().SetZero(),
        Pt.soundOn && (this.sndStart.stop(), this.sndStop.play())
    }),
    (C.prototype = Object.create(a.prototype)),
    (C.prototype.constructor = G),
    (B.prototype = Object.create(a.prototype)),
    (B.prototype.constructor = B),
    (B.prototype.destroy = function () {
      a.prototype.destroy.call(this),
        Pt.playState.bg.off('pointerdown', this._pointerDown, this),
        Pt.playState.bg.off('pointerup', this._pointerUp, this)
    }),
    (B.prototype._shot = function (t) {
      this._cannon.playing ||
        ((this._shoted = !1), this._cannon.gotoAndStop(0), this._cannon.play(), Pt.soundOn && this.sndShot.play())
    }),
    (B.prototype._pointerDown = function (t) {
      this._countTouches++,
        null == this._pointerData &&
          ((this._pointerData = t.data),
          (this._isAllowMove = !0),
          (Pt.playState.aim.visible = !0),
          (Pt.playState.btnFire.enable = !1))
    }),
    (B.prototype._pointerUp = function (t) {
      this._countTouches--,
        this._countTouches > 0 ||
          ((this._countTouches = 0),
          this._pointerData == t.data &&
            ((this._pointerData = null),
            (this._isAllowMove = !1),
            Pt.playState.blinkBtnFire(),
            (Pt.playState.btnFire.enable = !0)))
    }),
    (B.prototype._frameChanged = function (t) {
      if (t >= 8 && !this._shoted) {
        if (((this._shoted = !0), void 0 == this._launchX || void 0 == this._launchY)) return
        var e = A.create(this._launchX, this._launchY, Pt.playState.ballLayer)
        e.setVelocity(this._direction)
      }
    }),
    (B.prototype._shotComplete = function (t) {
      this._cannon.gotoAndStop(0)
    }),
    (B.prototype._update = function (t) {
      if (this._isAllowMove) {
        var e = Pt.pixi.renderer.plugins.interaction,
          a = {}
        Pt.playState.aimControl
          ? ((a.x = this._pointerData.global.x), (a.y = this._pointerData.global.y))
          : (a = e.pointer.global),
          (a = { x: a.x / Pt.scale, y: a.y / Pt.scale }),
          Pt.playState.aimControl && ((a.y -= 50), Pt.playState.aim.position.set(a.x, a.y)),
          this._helperPoint.set(this.x, this.y)
        var n = ot.angleDeg2(a, this._helperPoint) - 90
        ;(n = ot.normAngleDeg(n, !0)),
          n < this.lowerAngle ? (n = this.lowerAngle) : n > this.upperAngle && (n = this.upperAngle),
          (this._cannon.rotation = ot.toRadians(n)),
          this._cannon.toLocal(this._ballSpawnPoint, this, this._helperPoint)
        var i = { x: -this._helperPoint.x, y: this._helperPoint.y }
        this._helperPoint.x *= -1
        var s = 0,
          o = 0
        Pt.playState.aimControl
          ? ((s = Pt.playState.aim.position.x), (o = Pt.playState.aim.position.y))
          : ((e = Pt.pixi.renderer.plugins.interaction),
            (a = e.pointer.global),
            (s = a.x / Pt.scale),
            (o = a.y / Pt.scale)),
          (this._launchX = this._helperPoint.x + this.x),
          (this._launchY = this._helperPoint.y + this.y)
        var r = ot.distance1(this._launchX, this._launchY, s, o) / this.shotScale,
          l = ot.distance1(this.x, this.y, s, o),
          y = ot.distance1(this._launchX, this._launchY, s, o),
          h = ot.distance1(this.x, this.y, this._launchX, this._launchY)
        ;(l < h || l < y || o > this.y + 50) && (r = 0), r > 1 && (r = 1), (this._powerBarMask.scale.y = r)
        var d = r * (this.maxPower - this.minPower) + this.minPower
        ;(this._direction = { x: this.x - this._launchX, y: this.y - this._launchY }),
          (this._direction = ot.pointNormalize(this._direction, -d))
        var c = { x: this._direction.x, y: this._direction.y }
        ot.pointNormalize(c, d)
        var p = 360
        this.graphics.clear(), this.graphics.drawCircle(i.x, i.y, 4)
        for (var g = 25, m = 4, u = 0.8, x = 1; x <= 15 * r; x++)
          this.graphics.beginFill(16758605, (u /= 1.1)),
            this.graphics.drawCircle(i.x, i.y, (m /= 1.05)),
            this.graphics.endFill(),
            (c.y += p / g),
            (i.x += c.x / g),
            (i.y += c.y / g)
      }
    }),
    (M.prototype = Object.create(a.prototype)),
    (M.prototype.constructor = M),
    (E.prototype = Object.create(a.prototype)),
    (E.prototype.constructor = E),
    (E.prototype.destroy = function () {
      a.prototype.destroy.call(this), a.events.off(a.EVENT_TRIGGER_PRESSED, this._onTriggerEvent, this)
    }),
    (E.prototype._onTriggerEvent = function (t) {
      var e = t.id
      if (this.id == e && !this.opened) {
        this.opened = !0
        var a = 2
        'left' == this.direction
          ? (this._body.SetAwake(!0), this._body.SetAngularVelocity(a * (this.inversed ? -1 : 1)))
          : 'right' == this.direction &&
            (this._body.SetAwake(!0), this._body.SetAngularVelocity(-a * (this.inversed ? -1 : 1))),
          this._enableUpdate(),
          (this.angleUpdate = !0),
          (this.positionUpdate = !0),
          Pt.soundOn && this.sndGate.play()
      }
    }),
    (E.prototype._stop = function () {
      this._body.SetAngularVelocity(0), this._disableUpdate(), (this.angleUpdate = !1), (this.positionUpdate = !1)
    }),
    (E.prototype._update = function () {
      a.prototype._update.call(this),
        this.inversed
          ? (('left' == this.direction && this._body.GetAngle() <= this.openAngle) ||
              ('right' == this.direction && this._body.GetAngle() >= -this.openAngle)) &&
            this._stop()
          : (('left' == this.direction && this._body.GetAngle() >= this.openAngle) ||
              ('right' == this.direction && this._body.GetAngle() <= -this.openAngle)) &&
            this._stop()
    }),
    (T.prototype = Object.create(a.prototype)),
    (T.prototype.constructor = T),
    (O.prototype = Object.create(a.prototype)),
    (O.prototype.constructor = O),
    (O.prototype.destroy = function () {
      a.prototype.destroy.call(this), a.events.off(a.EVENT_TRIGGER_PRESSED, this._onTriggerEvent, this)
    }),
    (O.prototype._onTriggerEvent = function (t) {
      var e = t.id
      this.signalID == e && ((this.motorSpeed *= -1), this._revJoint.SetMotorSpeed(this.motorSpeed))
    }),
    (k.prototype = Object.create(a.prototype)),
    (k.prototype.constructor = k),
    (k.prototype.destroy = function () {
      a.prototype.destroy.call(this), Pt.physics.contactListener.removeBeginContactListener(this._onBeginContact, this)
    }),
    (k.prototype._onBeginContact = function (t) {
      var e = u.getAnotherOfContact(t, this)
      e instanceof A && this.unhook()
    }),
    (k.prototype._update = function () {
      a.prototype._update.call(this), this.y > Pt.gameHeight0 + 50 && this.destroy()
    }),
    (k.prototype.unhook = function () {
      Pt.physics.contactListener.removeBeginContactListener(this._onBeginContact, this),
        this._body.SetType(ht.b2_dynamicBody),
        this._body.SetAwake(!0),
        this._enableUpdate(),
        (this.angleUpdate = !0),
        (this.positionUpdate = !0),
        Pt.soundOn && this.sndPeg.play()
    }),
    (R.prototype = Object.create(a.prototype)),
    (R.prototype.constructor = R),
    (R.prototype.destroy = function () {
      a.prototype.destroy.call(this), a.events.off(a.EVENT_TRIGGER_PRESSED, this._onTriggerEvent, this)
    }),
    (R.prototype._onTriggerEvent = function (t) {
      var e = t.id,
        a = t.state
      this.gearSignalID == e &&
        this._state != a &&
        ((this._state = a),
        'on' == a
          ? this._motorOn(this.gearPower, this.TO_DESTINATION)
          : 'off' == a && this._motorOn(-this.gearPower, this.TO_START_ANGLE))
    }),
    (R.prototype._motorOn = function (t, e) {
      if (!Pt.playState.isDestroying) {
        var a = this
        Pt.physics.doIt(function () {
          ;(a._revJoint = Pt.physWorld.CreateJoint(a._revJointDef)),
            a._trackBody.SetType(ht.b2_dynamicBody),
            a._trackBody.SetMassData(a._massData),
            a._trackBody.SetAngularVelocity(0),
            a._trackBody.SetLinearVelocity(new lt(0, 0)),
            a._revJoint.EnableMotor(!0),
            a._revJoint.SetMotorSpeed(t),
            a._revJoint.SetMaxMotorTorque(Math.abs(t)),
            a._enableUpdate(),
            a._gear.play(),
            (a._movingTo = e),
            Pt.soundOn && a.sndGear.play()
        })
      }
    }),
    (R.prototype._motorOff = function () {
      var t = this
      Pt.physics.doIt(function () {
        t._movingTo == t.TO_DESTINATION
          ? t._trackBody.SetAngle(ot.toRadians(t.gearMaxAngle))
          : t._movingTo == t.TO_START_ANGLE && t._trackBody.SetAngle(ot.toRadians(t._trackBodyStartAngle)),
          Pt.physWorld.DestroyJoint(t._revJoint),
          (t._revJoint = null),
          t._trackBody.SetType(ht.b2_staticBody),
          t._disableUpdate(),
          t._gear.stop(),
          (t._movingTo = 0)
      })
    }),
    (R.prototype._update = function () {
      a.prototype._update.call(this)
      var t = Math.floor(ot.toDegrees(this._trackBody.GetAngle()))
      this._movingTo == this.TO_DESTINATION
        ? ot.equal(t, this.gearMaxAngle, 2) && this._motorOff()
        : this._movingTo == this.TO_START_ANGLE && ot.equal(t, this._trackBodyStartAngle, 2) && this._motorOff()
    }),
    (L.prototype = Object.create(a.prototype)),
    (L.prototype.constructor = L),
    (G.prototype = Object.create(a.prototype)),
    (G.prototype.constructor = G),
    (U.prototype = Object.create(a.prototype)),
    (U.prototype.constructor = U),
    (U.prototype.destroy = function () {
      a.prototype.destroy.call(this),
        Pt.physics.contactListener.removeBeginContactListener(this._onBeginContact, this),
        Pt.physWorld.DestroyBody(this._body2)
    }),
    (U.prototype._onBeginContact = function (t) {
      var e = u.getAnotherUserDataOfContact(t, this)
      null != e && 1 == e.dynamic && this._throwBody(e.item.GetBody())
    }),
    (U.prototype._throwBody = function (t) {
      var e = ot.toDegrees(this.rotation) - 90,
        a = ot.vectorVelocityDeg(e, 5 * this.elasticity)
      t.SetLinearVelocity(a), this._spring.gotoAndPlay(0), this._spring.play(), Pt.soundOn && this.sndSpring.play()
    }),
    (F.prototype = Object.create(a.prototype)),
    (F.prototype.constructor = F),
    (F.prototype.destroy = function () {
      a.prototype.destroy.call(this), Pt.physics.contactListener.removeBeginContactListener(this._onBeginContact, this)
    }),
    (F.prototype._onBeginContact = function (t) {
      var e = u.getAnotherOfContact(t, this)
      e instanceof A && this._catch()
    }),
    (F.prototype._catch = function () {
      this._catched ||
        (Pt.soundOn && this.sndStar.play(),
        (this._catched = !0),
        TweenMax.to(this, 1, { alpha: 0, y: this.y - 30, onComplete: this.destroy, onCompleteScope: this }),
        Pt.playState.addStar())
    }),
    (V.prototype = Object.create(a.prototype)),
    (V.prototype.constructor = V),
    (X.prototype = Object.create(a.prototype)),
    (X.prototype.constructor = X),
    (N.prototype = Object.create(a.prototype)),
    (N.prototype.constructor = N),
    (N.prototype.destroy = function () {
      a.prototype.destroy.call(this),
        Pt.physics.contactListener.removeBeginContactListener(this._onBeginContact, this),
        Pt.physics.contactListener.removeEndContactListener(this._onEndContact, this)
    }),
    (N.prototype._onBeginContact = function (t) {
      var e = u.getAnotherUserDataOfContact(t, this)
      if (null != e && 1 == e.dynamic) {
        if ('button' == this.type) {
          if ((this._countContacts++, (this._switcher.onComplete = null), this._on)) return
          ;(this._on = !0), (this._switcher.animationSpeed = 1), this._switcher.play()
          var n = this
          this._switcher.onComplete = function () {
            n._on && a.events.emit(a.EVENT_TRIGGER_PRESSED, { id: n.signalID, state: 'on' })
          }
        } else
          'toogle' == this.type &&
            (this._on
              ? ((this._on = !1),
                (this._switcher.animationSpeed = -1),
                a.events.emit(a.EVENT_TRIGGER_PRESSED, { id: this.signalID, state: 'off' }))
              : ((this._on = !0),
                (this._switcher.animationSpeed = 1),
                a.events.emit(a.EVENT_TRIGGER_PRESSED, { id: this.signalID, state: 'on' })),
            this._switcher.play())
        Pt.soundOn && this.sndSwitcher.play()
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
          a.events.emit(a.EVENT_TRIGGER_PRESSED, { id: this.signalID, state: 'off' })
      }
    }),
    (Y.prototype = Object.create(a.prototype)),
    (Y.prototype.constructor = Y),
    (Y.prototype.destroy = function () {
      a.prototype.destroy.call(this),
        Pt.physics.contactListener.removeBeginContactListener(this._onBeginContact, this),
        Pt.physics.contactListener.removeEndContactListener(this._onEndContact, this),
        a.events.off(a.EVENT_TELEPORTATION, this._teleportation, this)
    }),
    (Y.prototype._onBeginContact = function (t) {
      var e = u.getAnotherOfContact(t, this)
      e instanceof A &&
        ((null != e.teleportPhase && 0 != e.teleportPhase) ||
          ((e.teleportPhase = 1), a.events.emit(a.EVENT_TELEPORTATION, { sender: this, ball: e, id: this.id })))
    }),
    (Y.prototype._onEndContact = function (t) {
      var e = u.getAnotherOfContact(t, this)
      e instanceof A && (e.teleportPhase++, e.teleportPhase >= 3 && (e.teleportPhase = 0))
    }),
    (Y.prototype._teleportation = function (t) {
      var e = t.sender,
        a = t.ball,
        n = t.id
      if (e != this && n == this.id) {
        var i = this
        Pt.physics.doIt(function () {
          a.setPosition(i.x, i.y)
          var t = a._body.GetLinearVelocity(),
            e = ot.vectorVelocityRad(i.rotation + ot.toDegrees(90), t.Length() * i.mulVel),
            n = new lt(e.x, e.y)
          a._body.SetLinearVelocity(n)
        }),
          Pt.soundOn && this.sndTeleport.play()
      }
    }),
    (W.prototype = Object.create(a.prototype)),
    (W.prototype.constructor = W),
    (W.prototype.suck = function () {
      for (var t = this._body.GetContactList(); null != t; ) {
        var e = t.contact
        if (e.IsEnabled() && e.IsTouching()) {
          var a = u.getAnotherOfContact(e, this)
          a instanceof A && this.suckIt(a._body)
        }
        t = t.next
      }
    }),
    (W.prototype.suckIt = function (t) {
      t.GetLinearVelocity().SetZero(), t.ApplyForce(this._force, t.GetPosition())
    }),
    (W.prototype._update = function () {
      a.prototype._update.call(this), this.suck()
    }),
    (z.prototype = Object.create(a.prototype)),
    (z.prototype.constructor = z),
    (H.prototype = Object.create(a.prototype)),
    (H.prototype.constructor = H),
    (H.prototype._update = function () {
      a.prototype._update.call(this), this.y > Pt.gameHeight0 + 100 && this.destroy()
    }),
    (j.prototype.constructor = j),
    (j.prototype.create = function (t) {
      ;(t = t || this.currLevel),
        t < 1 ? (t = 1) : t > this.totalLevels && (t = this.totalLevels),
        (this.currLevel = t),
        t--
      for (var e = ft[t].items, a = e.length, n = 0; n < a; n++) this._createItem(e[n])
    }),
    (j.prototype.onLevelComplete = function () {
      this.currLevel == this.lastOpened && (this.lastOpened++, Pt.storage.set(Pt.SAVE_KEY_LAST_OPENED, this.lastOpened))
    }),
    (j.prototype._createItem = function (t) {
      if ('Cannon' == t.name) {
        var e = new B(t.x, t.y)
        ;(e.lowerAngle = void 0 != t.lowerAngle ? t.lowerAngle : -45),
          (e.upperAngle = void 0 != t.upperAngle ? t.upperAngle : 45),
          Pt.playState.gameLayer.addChild(e)
      } else if ('Basket' == t.name) {
        var a = new I(t.x, t.y)
        Pt.playState.gameLayer.addChild(a)
      } else if ('Ball' == t.name) {
        var n = new A(t.x, t.y)
        Pt.playState.gameLayer.addChild(n)
      } else if ('Platform' == t.name) {
        var i = new L(t.x, t.y, t.width, t.angle, t.type, t.density)
        Pt.playState.gameLayer.addChild(i)
      } else if ('Star' == t.name) {
        var s = new F(t.x, t.y)
        Pt.playState.gameLayer.addChild(s)
      } else if ('Pivot' == t.name) {
        var o = new R(t.x, t.y, t.type, t.signalID, t.color, t.gearMaxAngle, t.gearPower, t.lowerAngle, t.upperAngle)
        Pt.playState.gameLayer.addChild(o)
      } else if ('Switcher' == t.name) {
        var r = new N(t.x, t.y, t.angle, t.type, t.signalID, t.color)
        Pt.playState.gameLayer.addChild(r)
      } else if ('Teleport' == t.name) {
        var l = new Y(t.x, t.y, t.id, t.angle, t.color)
        ;(l.mulVel = t.mulVel || 1), Pt.playState.gameLayer.addChild(l)
      } else if ('Spring' == t.name) {
        var y = new U(t.x, t.y, t.angle, t.type, t.elasticity)
        Pt.playState.gameLayer.addChild(y)
      } else if ('Mill' == t.name) {
        var h = new O(t.x, t.y, t.enableMotor, t.motorSpeed, t.signalID)
        Pt.playState.gameLayer.addChild(h)
      } else if ('Rock' == t.name) {
        var d = new G(t.x, t.y, t.density)
        Pt.playState.gameLayer.addChild(d)
      } else if ('Box' == t.name) {
        var c = new C(t.x, t.y, t.angle, t.density)
        Pt.playState.gameLayer.addChild(c)
      } else if ('Swings' == t.name) {
        var p = new X(t.x, t.y, t.angle, t.lowerAngle, t.upperAngle)
        Pt.playState.gameLayer.addChild(p)
      } else if ('Peg' == t.name) {
        var g = new k(t.x, t.y)
        Pt.playState.gameLayer.addChild(g)
      } else if ('Hammer' == t.name) {
        var m = new T(t.x, t.y, t.angle, t.hmDensity)
        Pt.playState.gameLayer.addChild(m)
      } else if ('WeightBall' == t.name) {
        var u = new H(t.x, t.y, t.wbDensity)
        Pt.playState.gameLayer.addChild(u)
      } else if ('Stopper' == t.name) {
        var x = new V(t.x, t.y)
        Pt.playState.gameLayer.addChild(x)
      } else if ('PushButton' == t.name) {
        var w = new PushButton(t.x, t.y, t.btnID, t.angle)
        Pt.playState.gameLayer.addChild(w)
      } else if ('Gate' == t.name) {
        var f = new E(t.x, t.y, t.direction, t.gateLeftID || t.gateRightID, t.openAngle, t.inversed || !1)
        Pt.playState.gameLayer.addChild(f)
      } else if ('Domino' == t.name) {
        var P = new M(t.x, t.y)
        Pt.playState.gameLayer.addChild(P)
      } else if ('Tube' == t.name) {
        var _ = new W(t.x, t.y, t.angle, t.plusSensorFront, t.plusSensorBack)
        Pt.playState.gameLayer.addChild(_)
      } else if ('BasketRail' == t.name) {
        var v = new D(t.x, t.y, t.orientation, t.end, t.basketID)
        Pt.playState.gameLayer.addChild(v)
      }
    }),
    (j.prototype.unlockAllLevels = function () {
      this.lastOpened = this.totalLevels
    })
  var ft = []
  ;(ft[0] = {
    items: [
      { name: 'Basket', x: 546.25, y: 197.2 },
      { name: 'Cannon', x: 187.95, y: 333.15, lowerAngle: -70, upperAngle: 70 },
      { name: 'Platform', type: 'static', x: 692.45, y: 73.8, density: 1, width: 143.5, angle: 90 },
      { name: 'Platform', type: 'static', x: 631.65, y: 165.55, density: 1, width: 216.5, angle: 90 },
      { name: 'Platform', type: 'static', x: 661.45, y: 46.3, density: 1, width: 79.1, angle: -30 },
      { name: 'Platform', type: 'static', x: 606.45, y: 198.5, density: 1, width: 65.7, angle: -21 },
      { name: 'Star', x: 314.1, y: 233.95 },
      { name: 'Star', x: 408.45, y: 205.55 },
      { name: 'Star', x: 497.05, y: 181.75 }
    ]
  }),
    (ft[1] = {
      items: [
        { name: 'Platform', type: 'static', x: 463.7, y: 242.1, density: 1, width: 64, angle: -90 },
        { name: 'Platform', type: 'dynamic', x: 514.65, y: 219.1, density: 0.1, width: 120, angle: 0 },
        { name: 'Basket', x: 135.25, y: 286.5 },
        { name: 'Cannon', x: 545, y: 430, lowerAngle: -70, upperAngle: 70 },
        { name: 'Platform', type: 'static', x: 391.6, y: 150.35, density: 1, width: 67, angle: 0 },
        {
          name: 'Pivot',
          x: 463.7,
          y: 219.1,
          type: 'bolt',
          color: 'Red',
          gearMaxAngle: 0,
          gearPower: 1,
          lowerAngle: -180,
          upperAngle: 0,
          signalID: 0
        },
        { name: 'Ball', x: 422.85, y: 133 },
        { name: 'Platform', type: 'static', x: 266.7, y: 218.35, density: 1, width: 238.6, angle: -36 },
        { name: 'Star', x: 152.65, y: 262.4 },
        { name: 'Star', x: 344.7, y: 260.15 },
        { name: 'Star', x: 543.45, y: 259.1 },
        { name: 'Platform', type: 'static', x: 173.95, y: 312.95, density: 1, width: 64, angle: -90 },
        { name: 'Platform', type: 'static', x: 93.95, y: 263.95, density: 1, width: 162, angle: -90 }
      ]
    }),
    (ft[2] = {
      items: [
        { name: 'Platform', type: 'static', x: 662, y: 310, density: 1, width: 200, angle: 90 },
        { name: 'Platform', type: 'dynamic', x: 621.95, y: 218.9, density: 1, width: 98.1, angle: 0 },
        { name: 'Platform', type: 'static', x: 100, y: 420, density: 1, width: 80, angle: 0 },
        { name: 'Platform', type: 'static', x: 589, y: 319, density: 1, width: 181.9, angle: 90 },
        { name: 'Basket', x: 626, y: 380 },
        { name: 'Cannon', x: 380, y: 400, lowerAngle: -70, upperAngle: 70 },
        { name: 'Platform', type: 'static', x: 145.8, y: 368.05, density: 1, width: 126.4, angle: -75 },
        { name: 'Switcher', x: 104, y: 412.25, angle: 0, type: 'button', color: 'Red', signalID: 1 },
        {
          name: 'Pivot',
          x: 662,
          y: 220,
          type: 'gear',
          color: 'Red',
          gearMaxAngle: 45,
          gearPower: 5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 1
        },
        { name: 'Platform', type: 'static', x: 81.8, y: 368.05, density: 1, width: 126.4, angle: -75 },
        { name: 'Platform', type: 'static', x: 204.5, y: 267.9, density: 1, width: 126.4, angle: -45 },
        { name: 'Platform', type: 'static', x: 140.5, y: 266.9, density: 1, width: 126.4, angle: -45 },
        { name: 'Star', x: 658.15, y: 168.15 },
        { name: 'Star', x: 119.8, y: 244.35 },
        { name: 'Star', x: 382.05, y: 37.4 }
      ]
    }),
    (ft[3] = {
      items: [
        { name: 'Platform', type: 'static', x: 230.25, y: 192, density: 1, width: 241.6, angle: -180 },
        { name: 'Platform', type: 'dynamic', x: 118.05, y: 242.7, density: 1, width: 120, angle: 90 },
        { name: 'Basket', x: 75.45, y: 339.35 },
        { name: 'Cannon', x: 646.05, y: 426.8, lowerAngle: -70, upperAngle: 70 },
        { name: 'Platform', type: 'static', x: 360, y: 151.4, density: 1, width: 302.6, angle: 90 },
        { name: 'Switcher', x: 440.8, y: 449.3, angle: 0, type: 'button', color: 'Green', signalID: 1 },
        { name: 'Platform', type: 'dynamic', x: 287.35, y: 320.05, density: 0.1, width: 356.6, angle: 0 },
        {
          name: 'Pivot',
          x: 117.4,
          y: 320,
          type: 'bolt',
          color: 'Red',
          gearMaxAngle: 0,
          gearPower: 1,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 0
        },
        { name: 'Platform', type: 'dynamic', x: 353.45, y: 389.05, density: 1, width: 120, angle: 90 },
        {
          name: 'Pivot',
          x: 355.2,
          y: 440.5,
          type: 'bolt',
          color: 'Red',
          gearMaxAngle: 0,
          gearPower: 1,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 0
        },
        { name: 'Platform', type: 'static', x: 441.7, y: 456.75, density: 1, width: 69, angle: 0 },
        {
          name: 'Pivot',
          x: 118.05,
          y: 191.95,
          type: 'gear',
          color: 'Green',
          gearMaxAngle: 180,
          gearPower: 5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 1
        },
        { name: 'Star', x: 23.1, y: 327.4 },
        { name: 'Star', x: 392.35, y: 362.45 },
        { name: 'Star', x: 387.8, y: 111 }
      ]
    }),
    (ft[4] = {
      items: [
        { name: 'Platform', type: 'static', x: 134.6, y: 374.7, density: 1, width: 71, angle: 60 },
        { name: 'Platform', type: 'static', x: 183.5, y: 378.85, density: 1, width: 80.6, angle: 60 },
        { name: 'Platform', type: 'static', x: 131.55, y: 327.6, density: 1, width: 58.9, angle: 120 },
        { name: 'Platform', type: 'static', x: 178.05, y: 327.6, density: 1, width: 58.9, angle: 120 },
        { name: 'Platform', type: 'static', x: 124.4, y: 260.8, density: 1, width: 107.5, angle: 67 },
        { name: 'Platform', type: 'static', x: 170.9, y: 260.8, density: 1, width: 107.5, angle: 67 },
        { name: 'Platform', type: 'static', x: 114.75, y: 198, density: 1, width: 49.6, angle: 119 },
        { name: 'Platform', type: 'static', x: 161.25, y: 198, density: 1, width: 49.6, angle: 119 },
        { name: 'Platform', type: 'dynamic', x: 108.6, y: 176, density: 0.1, width: 49.6, angle: 30 },
        { name: 'Platform', type: 'dynamic', x: 140.45, y: 167.55, density: 0.1, width: 83.4, angle: 30 },
        { name: 'Basket', x: 173.3, y: 413.35 },
        { name: 'Cannon', x: 501.25, y: 395.7, lowerAngle: -70, upperAngle: 70 },
        { name: 'Platform', type: 'static', x: 394.55, y: 88.4, density: 1, width: 272, angle: -15 },
        { name: 'Platform', type: 'static', x: 410.15, y: 145.25, density: 1, width: 272, angle: -15 },
        { name: 'Switcher', x: 286.85, y: 148.1, angle: 75, type: 'button', color: 'Blue', signalID: 0 },
        { name: 'Teleport', x: 143.7, y: 55.3, angle: 180, color: 'Red', id: 0 },
        { name: 'Teleport', x: 289.55, y: 408.15, angle: 0, color: 'Red', id: 0 },
        { name: 'Platform', type: 'static', x: 279.5, y: 149.5, density: 1, width: 76.6, angle: 75 },
        { name: 'Spring', x: 684.75, y: 169.15, angle: -45, type: 'static', elasticity: 2 },
        { name: 'Platform', type: 'static', x: 692, y: 174.85, density: 1, width: 53, angle: -45 },
        {
          name: 'Pivot',
          x: 122.15,
          y: 183.5,
          type: 'gear',
          color: 'Blue',
          gearMaxAngle: 90,
          gearPower: 2,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 0
        },
        {
          name: 'Pivot',
          x: 168.65,
          y: 183.5,
          type: 'gear',
          color: 'Blue',
          gearMaxAngle: 90,
          gearPower: 2,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 0
        },
        { name: 'Star', x: 238.95, y: 404.45 },
        { name: 'Star', x: 700.25, y: 109.05 },
        { name: 'Star', x: 326.05, y: 134 }
      ]
    }),
    (ft[5] = {
      items: [
        { name: 'Switcher', x: 66.7, y: 105.8, angle: 90, type: 'button', color: 'Yellow', signalID: 1 },
        { name: 'Basket', x: 548.05, y: 424.5 },
        { name: 'Cannon', x: 266.2, y: 438.75, lowerAngle: -70, upperAngle: 70 },
        { name: 'Teleport', x: 516.5, y: 199.55, angle: 180, color: 'Red', id: 1 },
        { name: 'Teleport', x: 435.55, y: 186.8, angle: 0, color: 'Red', id: 1 },
        { name: 'Platform', type: 'static', x: 59, y: 102.9, density: 1, width: 84.4, angle: 90 },
        { name: 'Platform', type: 'static', x: 10.1, y: 101.8, density: 1, width: 112.2, angle: 90 },
        { name: 'Platform', type: 'static', x: 34.5, y: 69.4, density: 1, width: 57.7, angle: 15 },
        { name: 'Platform', type: 'static', x: 34.35, y: 134.1, density: 1, width: 57.9, angle: -15 },
        { name: 'Platform', type: 'static', x: 55.45, y: 188.4, density: 1, width: 110.9, angle: 0 },
        { name: 'Platform', type: 'dynamic', x: 145.05, y: 188.4, density: 0.2, width: 98.9, angle: 0 },
        {
          name: 'Pivot',
          x: 103.65,
          y: 188.35,
          type: 'bolt',
          color: 'Red',
          gearMaxAngle: 0,
          gearPower: 1,
          lowerAngle: -360,
          upperAngle: 0,
          signalID: 0
        },
        { name: 'Platform', type: 'static', x: 476.65, y: 255.4, density: 1, width: 232.6, angle: 90 },
        { name: 'Platform', type: 'dynamic', x: 447.65, y: 146.4, density: 1, width: 76.5, angle: 0 },
        { name: 'Platform', type: 'static', x: 494.95, y: 398.4, density: 1, width: 76.6, angle: 60 },
        {
          name: 'Pivot',
          x: 477.85,
          y: 146.2,
          type: 'gear',
          color: 'Yellow',
          gearMaxAngle: 90,
          gearPower: 5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 1
        },
        { name: 'Platform', type: 'static', x: 476.5, y: 36.1, density: 1, width: 71.7, angle: 90 },
        { name: 'Star', x: 565, y: 175 },
        { name: 'Star', x: 35, y: 160 },
        { name: 'Star', x: 450, y: 400 }
      ]
    }),
    (ft[6] = {
      items: [
        { name: 'Platform', type: 'static', x: 710.1, y: 382.8, density: 1, width: 57, angle: -90 },
        { name: 'Platform', type: 'static', x: 627.45, y: 375.25, density: 1, width: 43.3, angle: 90 },
        { name: 'Basket', x: 668.25, y: 401.5 },
        { name: 'Cannon', x: 479.6, y: 199.2, lowerAngle: -70, upperAngle: 70 },
        { name: 'Mill', x: 318.65, y: 267.7, enableMotor: !0, motorSpeed: -3, signalID: 1 },
        { name: 'Switcher', x: 308.75, y: 18.15, angle: 180, type: 'toogle', color: 'Green', signalID: 1 },
        { name: 'Platform', type: 'static', x: 71.85, y: 238.9, density: 1, width: 208.8, angle: -90 },
        { name: 'Platform', type: 'static', x: 11.3, y: 171.2, density: 1, width: 343.4, angle: -90 },
        { name: 'Platform', type: 'static', x: 564.25, y: 362.4, density: 1, width: 144.9, angle: 0 },
        { name: 'Platform', type: 'static', x: 555.9, y: 225.3, density: 1, width: 326.4, angle: 0 },
        { name: 'Platform', type: 'static', x: 444.75, y: 333.4, density: 1, width: 120, angle: 30 },
        { name: 'Platform', type: 'static', x: 308.75, y: 10.05, density: 1, width: 114.1, angle: 0 },
        { name: 'Platform', type: 'static', x: 203.75, y: 183.45, density: 1, width: 120, angle: 30 },
        { name: 'Platform', type: 'static', x: 41.55, y: 334.3, density: 1, width: 78.5, angle: 0 },
        { name: 'Star', x: 256, y: 350.95 },
        { name: 'Star', x: 111, y: 238.95 },
        { name: 'Star', x: 685.95, y: 182.95 },
        { name: 'Switcher', x: 41.8, y: 326.4, angle: 0, type: 'button', color: 'Red', signalID: 2 },
        { name: 'Platform', type: 'dynamic', x: 679.85, y: 362.6, density: 1, width: 76.5, angle: 0 },
        {
          name: 'Pivot',
          x: 709.55,
          y: 362.4,
          type: 'gear',
          color: 'Red',
          gearMaxAngle: 90,
          gearPower: 5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 2
        }
      ]
    }),
    (ft[7] = {
      items: [
        { name: 'Platform', type: 'static', x: 596.7, y: 255.15, density: 1, width: 18, angle: 0 },
        { name: 'Platform', type: 'static', x: 546.2, y: 199.65, density: 1, width: 18, angle: 0 },
        { name: 'Platform', type: 'static', x: 165.1, y: 254.9, density: 1, width: 193, angle: -30 },
        { name: 'Platform', type: 'dynamic', x: 217.3, y: 167.2, density: 0.1, width: 117.2, angle: -120 },
        { name: 'Basket', x: 51.35, y: 303.95 },
        { name: 'Cannon', x: 405, y: 459.4, lowerAngle: -70, upperAngle: 70 },
        { name: 'Switcher', x: 682.05, y: 231.95, angle: -45, type: 'button', color: 'Red', signalID: 1 },
        { name: 'Platform', type: 'dynamic', x: 603.05, y: 178.1, density: 0.3, width: 135.9, angle: -20 },
        { name: 'Platform', type: 'dynamic', x: 588.6, y: 231, density: 1, width: 70.2, angle: -110 },
        {
          name: 'Pivot',
          x: 597.05,
          y: 254.85,
          type: 'bolt',
          color: 'Red',
          gearMaxAngle: 0,
          gearPower: 1,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 0
        },
        {
          name: 'Pivot',
          x: 546.2,
          y: 199.65,
          type: 'bolt',
          color: 'Red',
          gearMaxAngle: 0,
          gearPower: 1,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 0
        },
        { name: 'Platform', type: 'static', x: 418.4, y: 108.65, density: 1, width: 178.8, angle: -30 },
        {
          name: 'Pivot',
          x: 243,
          y: 210.55,
          type: 'gear',
          color: 'Red',
          gearMaxAngle: -30,
          gearPower: 5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 1
        },
        { name: 'Teleport', x: 448.9, y: 52.6, angle: -120, color: 'Red', id: 0 },
        { name: 'Teleport', x: 139, y: 323.6, angle: 60, color: 'Red', id: 0 },
        { name: 'Platform', type: 'static', x: 687.45, y: 237.35, density: 1, width: 46.9, angle: 135 },
        { name: 'Star', x: 274, y: 110.05 },
        { name: 'Star', x: 644.95, y: 184.65 },
        { name: 'Star', x: 502.95, y: 110.05 },
        { name: 'Platform', type: 'static', x: 107.3, y: 225.15, density: 1, width: 223.7, angle: -30 },
        { name: 'Platform', type: 'static', x: 15.15, y: 321, density: 1, width: 94.9, angle: -90 },
        { name: 'Platform', type: 'static', x: 86.05, y: 331.5, density: 1, width: 71.9, angle: -90 },
        { name: 'Platform', type: 'static', x: 50.6, y: 376.45, density: 1, width: 88.9, angle: 0 }
      ]
    }),
    (ft[8] = {
      items: [
        { name: 'Switcher', x: 398.75, y: 378.65, angle: -45, type: 'toogle', color: 'Green', signalID: 2 },
        { name: 'Platform', type: 'static', x: 460.15, y: 88.85, density: 0.3, width: 265, angle: 0 },
        { name: 'Basket', x: 180.75, y: 316.15 },
        { name: 'Cannon', x: 360.45, y: 333.05, lowerAngle: -70, upperAngle: 70 },
        { name: 'Platform', type: 'static', x: 279.3, y: 348.55, density: 1, width: 156.5, angle: 45 },
        { name: 'Platform', type: 'static', x: 457.65, y: 330.9, density: 1, width: 200.4, angle: -45 },
        { name: 'Rock', x: 652.3, y: 88.25, density: 0.3 },
        { name: 'Platform', type: 'static', x: 109.95, y: 179.4, density: 1, width: 206.4, angle: 45 },
        { name: 'Platform', type: 'dynamic', x: 194.2, y: 264.75, density: 1, width: 67.3, angle: 45 },
        {
          name: 'Pivot',
          x: 175.4,
          y: 247.55,
          type: 'gear',
          color: 'Purple',
          gearMaxAngle: 138,
          gearPower: 2.2,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 1
        },
        { name: 'Platform', type: 'static', x: 373.75, y: 10.15, density: 1, width: 374.3, angle: 0 },
        { name: 'Platform', type: 'static', x: 653.1, y: 136.7, density: 1, width: 118.6, angle: -45 },
        { name: 'Switcher', x: 517.35, y: 281.95, angle: 135, type: 'button', color: 'Purple', signalID: 1 },
        { name: 'Platform', type: 'static', x: 606.15, y: 285.75, density: 1, width: 189, angle: -45 },
        { name: 'Star', x: 20, y: 90 },
        { name: 'Star', x: 704, y: 71 },
        { name: 'Star', x: 503, y: 351 },
        { name: 'Platform', type: 'dynamic', x: 606.75, y: 111.3, density: 0.1, width: 72, angle: 45 },
        {
          name: 'Pivot',
          x: 585.95,
          y: 89.55,
          type: 'gear',
          color: 'Green',
          gearMaxAngle: 135,
          gearPower: 2.2,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 2
        },
        { name: 'Platform', type: 'static', x: 335, y: 44.75, density: 0.3, width: 106.2, angle: 90 }
      ]
    }),
    (ft[9] = {
      items: [
        { name: 'Platform', type: 'static', x: 25.05, y: 285.65, density: 1, width: 117.5, angle: 85 },
        { name: 'Platform', type: 'static', x: 92.6, y: 310.2, density: 1, width: 58.2, angle: 85 },
        { name: 'Platform', type: 'static', x: 657.05, y: 125.2, density: 1, width: 62.9, angle: -60 },
        { name: 'Basket', x: 642.25, y: 388.7 },
        { name: 'Platform', type: 'static', x: 596.6, y: 161.1, density: 1, width: 67.5, angle: 90 },
        { name: 'Platform', type: 'static', x: 642.65, y: 198.6, density: 1, width: 102.5, angle: 90 },
        { name: 'Platform', type: 'dynamic', x: 575.15, y: 247.45, density: 0.1, width: 152, angle: -5 },
        {
          name: 'Pivot',
          x: 642.55,
          y: 241.7,
          type: 'gear',
          color: 'Yellow',
          gearMaxAngle: -23,
          gearPower: -6,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 3
        },
        { name: 'Switcher', x: 34.9, y: 59.4, angle: 90, type: 'toogle', color: 'Yellow', signalID: 3 },
        { name: 'Platform', type: 'static', x: 26.9, y: 59.4, density: 1, width: 62, angle: -90 },
        { name: 'Cannon', x: 319.4, y: 181.85, lowerAngle: -70, upperAngle: 70 },
        { name: 'Platform', type: 'static', x: 304.55, y: 343.55, density: 1, width: 174.5, angle: 0 },
        { name: 'Switcher', x: 196.4, y: 375.05, angle: 0, type: 'button', color: 'Green', signalID: 1 },
        { name: 'Platform', type: 'static', x: 226.35, y: 363.25, density: 1, width: 57.1, angle: -90 },
        { name: 'Platform', type: 'static', x: 709.85, y: 224.25, density: 1, width: 385.9, angle: 90 },
        { name: 'Platform', type: 'static', x: 165.95, y: 346.7, density: 1, width: 90.2, angle: -90 },
        { name: 'Platform', type: 'static', x: 317.45, y: 269.9, density: 1, width: 355.2, angle: -5 },
        { name: 'Platform', type: 'static', x: 308.65, y: 211.7, density: 1, width: 593.9, angle: -5 },
        { name: 'Platform', type: 'dynamic', x: 88.9, y: 271.1, density: 1, width: 55.4, angle: -95 },
        {
          name: 'Pivot',
          x: 90.6,
          y: 290,
          type: 'gear',
          color: 'Green',
          gearMaxAngle: -4,
          gearPower: 1,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 1
        },
        { name: 'Platform', type: 'static', x: 445.55, y: 323.3, density: 1, width: 121.5, angle: -20 },
        { name: 'Platform', type: 'static', x: 195.9, y: 382.8, density: 1, width: 78.6, angle: 0 },
        { name: 'Star', x: 30.25, y: 182.95 },
        { name: 'Star', x: 683.1, y: 296.75 },
        { name: 'Star', x: 124.75, y: 335.7 },
        { name: 'Platform', type: 'static', x: 682.75, y: 350.6, density: 1, width: 70, angle: -45 },
        { name: 'Platform', type: 'static', x: 601.8, y: 350.95, density: 1, width: 70, angle: 45 },
        { name: 'Teleport', x: 642.25, y: 320.05, angle: 180, color: 'Blue', id: 1 },
        { name: 'Teleport', x: 61.35, y: 326.55, angle: -5, color: 'Blue', id: 1 }
      ]
    }),
    (ft[10] = {
      items: [
        { name: 'Platform', type: 'static', x: 330.6, y: 112.15, density: 1, width: 49.4, angle: 0 },
        { name: 'Platform', type: 'static', x: 223, y: 93.3, density: 1, width: 81.4, angle: 30 },
        { name: 'Platform', type: 'static', x: 132.25, y: 418.65, density: 1, width: 79.5, angle: 30 },
        { name: 'Platform', type: 'static', x: 27.15, y: 422.65, density: 1, width: 38.1, angle: 58 },
        { name: 'Platform', type: 'static', x: 93.65, y: 422.65, density: 1, width: 38, angle: -58 },
        { name: 'Spring', x: 462.55, y: 182.1, angle: -35, type: 'static', elasticity: 2 },
        { name: 'Basket', x: 62.75, y: 371 },
        { name: 'Cannon', x: 321.55, y: 386.55, lowerAngle: -70, upperAngle: 70 },
        { name: 'Platform', type: 'static', x: 212.1, y: 436.95, density: 1, width: 101.9, angle: 0 },
        { name: 'Switcher', x: 644.9, y: 419.75, angle: -30, type: 'button', color: 'Blue', signalID: 1 },
        { name: 'Platform', type: 'static', x: 585.25, y: 112.15, density: 1, width: 240.7, angle: 0 },
        { name: 'Switcher', x: 283.9, y: 129.2, angle: 0, type: 'button', color: 'Red', signalID: 2 },
        { name: 'Platform', type: 'static', x: 538.6, y: 236.55, density: 1, width: 17.8, angle: 0 },
        { name: 'Box', x: 537.5, y: 204.75, angle: void 0, density: 1 },
        { name: 'Platform', type: 'static', x: 582.25, y: 442.45, density: 1, width: 83.7, angle: 0 },
        { name: 'Platform', type: 'static', x: 696.35, y: 262.9, density: 1, width: 283, angle: -90 },
        { name: 'Platform', type: 'static', x: 660.2, y: 420.15, density: 1, width: 94.5, angle: -30 },
        { name: 'Platform', type: 'static', x: 100.9, y: 74.35, density: 1, width: 183.1, angle: 0 },
        { name: 'Platform', type: 'static', x: 283.6, y: 137.4, density: 1, width: 80.1, angle: 0 },
        { name: 'Platform', type: 'static', x: 467.45, y: 189.75, density: 1, width: 47.8, angle: -38 },
        { name: 'Platform', type: 'static', x: 102.3, y: 113.7, density: 1, width: 96.8, angle: 90 },
        { name: 'Platform', type: 'static', x: 18.4, y: 247.35, density: 1, width: 327.8, angle: -90 },
        { name: 'Platform', type: 'static', x: 252.4, y: 126.05, density: 1, width: 40.6, angle: 90 },
        { name: 'Platform', type: 'static', x: 314.65, y: 124.15, density: 1, width: 43.9, angle: 90 },
        { name: 'Platform', type: 'dynamic', x: 420.9, y: 112.15, density: 0.1, width: 121.4, angle: 0 },
        {
          name: 'Pivot',
          x: 473.3,
          y: 112.15,
          type: 'gear',
          color: 'Blue',
          gearMaxAngle: 45,
          gearPower: 5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 1
        },
        { name: 'Platform', type: 'static', x: 102.3, y: 315.8, density: 1, width: 191.1, angle: -90 },
        { name: 'Star', x: 129.25, y: 105.45 },
        { name: 'Star', x: 664.7, y: 145.95 },
        { name: 'Star', x: 235.15, y: 71.05 },
        { name: 'Platform', type: 'dynamic', x: 102.3, y: 207.2, density: 0.1, width: 72.1, angle: -90 },
        {
          name: 'Pivot',
          x: 101.8,
          y: 232.15,
          type: 'gear',
          color: 'Red',
          gearMaxAngle: 0,
          gearPower: 5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 2
        }
      ]
    }),
    (ft[11] = {
      items: [
        { name: 'Platform', type: 'static', x: 17.1, y: 76, density: 1, width: 63.3, angle: 0 },
        { name: 'Platform', type: 'dynamic', x: 83.6, y: 75.9, density: 1, width: 106.1, angle: 0 },
        { name: 'Basket', x: 211.6, y: 354.6 },
        { name: 'Cannon', x: 391.65, y: 433.9, lowerAngle: -70, upperAngle: 70 },
        { name: 'Rock', x: 202.8, y: 282.95, density: 3 },
        { name: 'Platform', type: 'static', x: 339.4, y: 61.8, density: 1, width: 120, angle: 90 },
        { name: 'Teleport', x: 117.05, y: 37.05, angle: 180, color: 'Blue', id: 0 },
        { name: 'Platform', type: 'static', x: 552.75, y: 171.2, density: 1, width: 193, angle: 37 },
        {
          name: 'Pivot',
          x: 39.45,
          y: 75.95,
          type: 'gear',
          color: 'Red',
          gearMaxAngle: 90,
          gearPower: 5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 1
        },
        { name: 'Teleport', x: 664.45, y: 222.75, angle: -53, color: 'Blue', id: 0 },
        { name: 'Platform', type: 'static', x: 149.85, y: 187.45, density: 1, width: 494.1, angle: 90 },
        { name: 'Platform', type: 'static', x: 253.6, y: 366.75, density: 1, width: 135.6, angle: 90 },
        { name: 'Platform', type: 'static', x: 486, y: 250.05, density: 1, width: 48.3, angle: 63 },
        { name: 'Switcher', x: 526.45, y: 319.45, angle: 0, type: 'button', color: 'Red', signalID: 1 },
        { name: 'Platform', type: 'static', x: 496.25, y: 301.85, density: 1, width: 69.6, angle: 90 },
        { name: 'Platform', type: 'static', x: 556.85, y: 315.2, density: 1, width: 42.2, angle: -90 },
        { name: 'Spring', x: 697.6, y: 364.95, angle: -45, type: 'static', elasticity: 2 },
        { name: 'Platform', type: 'static', x: 475.8, y: 169.85, density: 1, width: 127.8, angle: -90 },
        { name: 'Platform', type: 'static', x: 526.45, y: 327.65, density: 1, width: 78.8, angle: 0 },
        { name: 'Platform', type: 'static', x: 702.1, y: 371.5, density: 1, width: 33.4, angle: -45 },
        { name: 'Star', x: 369.2, y: 22.05 },
        { name: 'Star', x: 180.6, y: 96.8 },
        { name: 'Star', x: 283, y: 384.85 },
        { name: 'Platform', type: 'dynamic', x: 127.1, y: 322.2, density: 1, width: 205.6, angle: 0 },
        {
          name: 'Pivot',
          x: 149.05,
          y: 323.4,
          type: 'bolt',
          color: 'Red',
          gearMaxAngle: 90,
          gearPower: 1,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 1
        },
        { name: 'Platform', type: 'static', x: 13.6, y: 236.2, density: 1, width: 338.7, angle: 90 },
        { name: 'Platform', type: 'static', x: 36.25, y: 396.55, density: 1, width: 63.3, angle: 0 },
        { name: 'Platform', type: 'static', x: 58.9, y: 389.7, density: 1, width: 31.7, angle: 90 },
        { name: 'Platform', type: 'static', x: 175.9, y: 382.55, density: 1, width: 102.6, angle: 90 }
      ]
    }),
    (ft[12] = {
      items: [
        { name: 'Platform', type: 'static', x: 529.2, y: 380, density: 1, width: 16.2, angle: 0 },
        { name: 'Platform', type: 'static', x: 620, y: 70, density: 1, width: 200, angle: 0 },
        { name: 'Basket', x: 620, y: 250 },
        { name: 'Cannon', x: 360, y: 370, lowerAngle: -70, upperAngle: 70 },
        { name: 'Spring', x: 122.05, y: 301, angle: -30, type: 'static', elasticity: 2 },
        { name: 'Platform', type: 'static', x: 100, y: 190, density: 1, width: 200, angle: 0 },
        { name: 'Platform', type: 'static', x: 620, y: 190, density: 1, width: 200, angle: 0 },
        { name: 'Platform', type: 'dynamic', x: 190.95, y: 238.95, density: 1, width: 115.6, angle: 90 },
        { name: 'Platform', type: 'static', x: 100, y: 310, density: 1, width: 200, angle: 0 },
        { name: 'Platform', type: 'static', x: 100, y: 450, density: 1, width: 200, angle: 0 },
        {
          name: 'Pivot',
          x: 191,
          y: 190,
          type: 'gear',
          color: 'Red',
          gearMaxAngle: 0,
          gearPower: -5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 1
        },
        { name: 'Platform', type: 'static', x: 620, y: 310, density: 1, width: 200, angle: 0 },
        { name: 'Platform', type: 'static', x: 190.95, y: 379.95, density: 1, width: 157.6, angle: 90 },
        { name: 'Teleport', x: 45, y: 360, angle: 120, color: 'Red', id: 0 },
        { name: 'Platform', type: 'static', x: 620, y: 450, density: 1, width: 200, angle: 0 },
        { name: 'Teleport', x: 620, y: 405.8, angle: 0, color: 'Red', id: 0 },
        { name: 'Platform', type: 'dynamic', x: 528.95, y: 238.95, density: 1, width: 115.6, angle: 90 },
        {
          name: 'Pivot',
          x: 529,
          y: 190,
          type: 'gear',
          color: 'Yellow',
          gearMaxAngle: 180,
          gearPower: 5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 4
        },
        { name: 'Platform', type: 'dynamic', x: 528.95, y: 118.45, density: 1, width: 115.6, angle: 90 },
        {
          name: 'Pivot',
          x: 529,
          y: 69.5,
          type: 'gear',
          color: 'Green',
          gearMaxAngle: 180,
          gearPower: 5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 2
        },
        { name: 'Switcher', x: 100, y: 183.05, angle: 0, type: 'button', color: 'Red', signalID: 1 },
        { name: 'Platform', type: 'static', x: 130, y: 169, density: 1, width: 60, angle: -90 },
        { name: 'Platform', type: 'static', x: 70, y: 169, density: 1, width: 60, angle: -90 },
        { name: 'Switcher', x: 63.15, y: 198, angle: 180, type: 'toogle', color: 'Green', signalID: 2 },
        { name: 'Platform', type: 'static', x: 100, y: 204.75, density: 1, width: 40.3, angle: 60 },
        { name: 'Switcher', x: 620, y: 182.05, angle: 0, type: 'button', color: 'Blue', signalID: 3 },
        { name: 'Platform', type: 'static', x: 650, y: 169, density: 1, width: 60, angle: -90 },
        { name: 'Platform', type: 'static', x: 590, y: 169, density: 1, width: 60, angle: -90 },
        { name: 'Platform', type: 'dynamic', x: 529, y: 379.95, density: 1, width: 105.6, angle: 90 },
        {
          name: 'Pivot',
          x: 529,
          y: 378.95,
          type: 'gear',
          color: 'Blue',
          gearMaxAngle: 10,
          gearPower: -5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 3
        },
        { name: 'Switcher', x: 90, y: 443.05, angle: 0, type: 'button', color: 'Yellow', signalID: 4 },
        { name: 'Platform', type: 'static', x: 120, y: 429, density: 1, width: 60, angle: -90 },
        { name: 'Platform', type: 'static', x: 60, y: 429, density: 1, width: 60, angle: -90 },
        { name: 'Box', x: 158, y: 277, angle: void 0, density: 3 },
        { name: 'Platform', type: 'static', x: 580, y: 289, density: 1, width: 60, angle: -90 },
        { name: 'Platform', type: 'static', x: 660, y: 289, density: 1, width: 60, angle: -90 },
        { name: 'Platform', type: 'static', x: 100, y: 70, density: 1, width: 200, angle: 0 },
        { name: 'Star', x: 100, y: 40 },
        { name: 'Star', x: 620, y: 40 },
        { name: 'Star', x: 690, y: 220 }
      ]
    }),
    (ft[13] = {
      items: [
        { name: 'Platform', type: 'static', x: 655.95, y: 155.8, density: 1, width: 58.8, angle: 38 },
        { name: 'Platform', type: 'static', x: 492.45, y: 265.65, density: 1, width: 19.7, angle: 0 },
        { name: 'Platform', type: 'static', x: 657.2, y: 347.95, density: 1, width: 123.3, angle: -19 },
        { name: 'Platform', type: 'static', x: 53.45, y: 392.9, density: 1, width: 31.7, angle: 0 },
        { name: 'Platform', type: 'static', x: 91.05, y: 176.2, density: 1, width: 83, angle: 90 },
        { name: 'Platform', type: 'static', x: 184.9, y: 197.35, density: 1, width: 81.6, angle: 16 },
        { name: 'Platform', type: 'static', x: 217.6, y: 223.85, density: 1, width: 48.3, angle: 90 },
        { name: 'Platform', type: 'dynamic', x: 596.25, y: 338.6, density: 1, width: 80, angle: 71 },
        { name: 'Platform', type: 'static', x: 418.25, y: 416.75, density: 1, width: 74.4, angle: 0 },
        { name: 'Platform', type: 'static', x: 34.6, y: 37.7, density: 1, width: 99.8, angle: 60 },
        { name: 'Platform', type: 'dynamic', x: 67.2, y: 94.2, density: 1, width: 68.5, angle: 60 },
        { name: 'Platform', type: 'static', x: 611.7, y: 286.5, density: 1, width: 85.7, angle: 0 },
        { name: 'Basket', x: 45.3, y: 147.3 },
        { name: 'Cannon', x: 314.35, y: 188.45, lowerAngle: -70, upperAngle: 70 },
        { name: 'Platform', type: 'static', x: 298.5, y: 208.75, density: 1, width: 105.3, angle: 0 },
        { name: 'Spring', x: 248.2, y: 410.3, angle: -21, type: 'static', elasticity: 1.9 },
        { name: 'Spring', x: 579.65, y: 435.45, angle: -15, type: 'static', elasticity: 2.5 },
        { name: 'Platform', type: 'static', x: 250.2, y: 415.95, density: 1, width: 55.7, angle: -21 },
        { name: 'Platform', type: 'dynamic', x: 491.9, y: 223.5, density: 1, width: 99.6, angle: 90 },
        { name: 'Switcher', x: 588.4, y: 278.5, angle: 0, type: 'button', color: 'Purple', signalID: 1 },
        { name: 'Spring', x: 398.8, y: 283.45, angle: 0, type: 'static', elasticity: 2.5 },
        {
          name: 'Pivot',
          x: 491.9,
          y: 262.45,
          type: 'bolt',
          color: 'Red',
          gearMaxAngle: 0,
          gearPower: 1,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 0
        },
        {
          name: 'Pivot',
          x: 54.95,
          y: 72.8,
          type: 'gear',
          color: 'Purple',
          gearMaxAngle: -30,
          gearPower: -5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 1
        },
        { name: 'Platform', type: 'static', x: 581.4, y: 442.4, density: 1, width: 49.6, angle: -15 },
        { name: 'Spring', x: 53.45, y: 394.4, angle: 0, type: 'dynamic', elasticity: 2.8 },
        { name: 'Platform', type: 'static', x: 394.8, y: 181.6, density: 1, width: 112.1, angle: -30 },
        { name: 'Platform', type: 'static', x: 497.45, y: 154.25, density: 1, width: 120, angle: 0 },
        { name: 'Platform', type: 'static', x: 600, y: 189.65, density: 1, width: 121.9, angle: 37 },
        { name: 'Platform', type: 'static', x: 398.75, y: 290.3, density: 1, width: 45, angle: 0 },
        { name: 'Platform', type: 'static', x: 645.55, y: 256.55, density: 1, width: 77.4, angle: 90 },
        { name: 'Platform', type: 'static', x: 709.05, y: 270.05, density: 1, width: 130.9, angle: 90 },
        { name: 'Platform', type: 'static', x: 360.7, y: 444.05, density: 1, width: 75.9, angle: 0 },
        { name: 'Switcher', x: 360.75, y: 435.2, angle: 0, type: 'button', color: 'Green', signalID: 4 },
        { name: 'Platform', type: 'static', x: 331.65, y: 422.85, density: 1, width: 59.8, angle: 90 },
        { name: 'Platform', type: 'static', x: 254.85, y: 223.85, density: 1, width: 48.3, angle: 90 },
        { name: 'Platform', type: 'static', x: 118, y: 157.3, density: 1, width: 88.5, angle: 45 },
        { name: 'Platform', type: 'static', x: 389.9, y: 430.35, density: 1, width: 45.3, angle: 90 },
        { name: 'Platform', type: 'static', x: 507.7, y: 108.25, density: 1, width: 143.5, angle: 0 },
        { name: 'Platform', type: 'static', x: 607.55, y: 125.75, density: 1, width: 79.4, angle: 30 },
        { name: 'Switcher', x: 378.9, y: 19, angle: 180, type: 'toogle', color: 'Red', signalID: 2 },
        { name: 'Platform', type: 'static', x: 492.85, y: 405.4, density: 1, width: 90, angle: -15 },
        { name: 'Star', x: 617.65, y: 311.2 },
        { name: 'Star', x: 687.65, y: 48.1 },
        { name: 'Star', x: 17.05, y: 77.5 },
        { name: 'Platform', type: 'static', x: 40, y: 208.75, density: 1, width: 120.1, angle: 0 },
        {
          name: 'Pivot',
          x: 606.15,
          y: 368.05,
          type: 'gear',
          color: 'Red',
          gearMaxAngle: -19,
          gearPower: -3,
          lowerAngle: -720,
          upperAngle: 720,
          signalID: 2
        },
        {
          name: 'Pivot',
          x: 52.2,
          y: 392.05,
          type: 'gear',
          color: 'Green',
          gearMaxAngle: 60,
          gearPower: 5,
          lowerAngle: 0,
          upperAngle: 0,
          signalID: 4
        },
        { name: 'Platform', type: 'static', x: 691.95, y: 188.65, density: 1, width: 58.8, angle: 46 },
        { name: 'Platform', type: 'static', x: 400.7, y: 11.25, density: 1, width: 143.5, angle: 0 }
      ]
    }),
    (ft[14] = {
      items: [
        { name: 'Platform', type: 'static', x: 92.65, y: 411.6, density: 1, width: 19.2, angle: 0 },
        { name: 'Platform', type: 'static', x: 240.8, y: 58.6, density: 1, width: 19.2, angle: 0 },
        { name: 'Basket', x: 675.5, y: 366.65 },
        { name: 'Cannon', x: 499.55, y: 446.1, lowerAngle: -70, upperAngle: 10 },
        { name: 'Platform', type: 'dynamic', x: 212.75, y: 86.4, density: 1, width: 101.8, angle: -45 },
        { name: 'Platform', type: 'static', x: 189.3, y: 169.5, density: 1, width: 174.8, angle: 0 },
        {
          name: 'Pivot',
          x: 240.15,
          y: 59.3,
          type: 'gear',
          color: 'Red',
          gearMaxAngle: -90,
          gearPower: -16,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 0
        },
        { name: 'Box', x: 243.5, y: 137.6, angle: 0, density: 1 },
        { name: 'Spring', x: 309.55, y: 257, angle: 15, type: 'static', elasticity: 2.9 },
        { name: 'Platform', type: 'static', x: 604.8, y: 414.7, density: 1, width: 110, angle: 0 },
        { name: 'Box', x: 603.7, y: 382.95, angle: 0, density: 3 },
        { name: 'Box', x: 603.7, y: 337.55, angle: 0, density: 3 },
        { name: 'Box', x: 603.75, y: 291.1, angle: 0, density: 3 },
        { name: 'Platform', type: 'static', x: 569.7, y: 350.3, density: 1, width: 145, angle: 90 },
        { name: 'Platform', type: 'static', x: 641.2, y: 324.4, density: 1, width: 199, angle: 90 },
        { name: 'Switcher', x: 465.95, y: 207.2, angle: -165, type: 'toogle', color: 'Red', signalID: 0 },
        { name: 'Teleport', x: 475.2, y: 125.95, angle: 180, color: 'Blue', id: 1, mulVel: 1 },
        { name: 'Platform', type: 'static', x: 503.3, y: 210, density: 1, width: 139.7, angle: 15 },
        { name: 'Teleport', x: 252.3, y: 224, angle: -133, color: 'Blue', id: 1, mulVel: 1 },
        { name: 'Teleport', x: 45.55, y: 128.7, angle: 0, color: 'Red', id: 3, mulVel: 1 },
        { name: 'Box', x: 50, y: 82.65, angle: 0, density: 0.1 },
        { name: 'Teleport', x: 353.35, y: 297.7, angle: 135, color: 'Red', id: 3, mulVel: 1 },
        { name: 'Platform', type: 'static', x: 404.55, y: 230.85, density: 1, width: 120, angle: -45 },
        { name: 'Switcher', x: 121.4, y: 161.4, angle: 0, type: 'button', color: 'Purple', signalID: 3 },
        { name: 'Platform', type: 'static', x: 159, y: 96.7, density: 1, width: 163.7, angle: 90 },
        { name: 'Spring', x: 92.85, y: 411.75, angle: -45, type: 'dynamic', elasticity: 3 },
        {
          name: 'Pivot',
          x: 92.65,
          y: 411.6,
          type: 'gear',
          color: 'Purple',
          gearMaxAngle: 35,
          gearPower: 5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 3
        },
        { name: 'Platform', type: 'static', x: 9.1, y: 114.75, density: 1, width: 199.8, angle: 90 },
        { name: 'Platform', type: 'static', x: 709.5, y: 209.35, density: 1, width: 388.1, angle: 90 },
        { name: 'Platform', type: 'static', x: 308.5, y: 258.05, density: 1, width: 43.2, angle: 15 },
        { name: 'Platform', type: 'static', x: 69.1, y: 222.45, density: 1, width: 139.5, angle: 126 },
        { name: 'Star', x: 560.7, y: 252.5 },
        { name: 'Star', x: 129.4, y: 422.05 },
        { name: 'Star', x: 23.5, y: 307.7 }
      ]
    }),
    (ft[15] = {
      items: [
        { name: 'Platform', type: 'static', x: 8.95, y: 180.35, density: 1, width: 359.1, angle: 90 },
        { name: 'Platform', type: 'static', x: 460.55, y: 417.4, density: 1, width: 18, angle: 0 },
        { name: 'Platform', type: 'static', x: 707.15, y: 361.65, density: 1, width: 18, angle: 0 },
        { name: 'Platform', type: 'static', x: 592.5, y: 262.75, density: 1, width: 18, angle: 0 },
        { name: 'Platform', type: 'static', x: 591.2, y: 101.45, density: 1, width: 18, angle: 0 },
        { name: 'Platform', type: 'static', x: 475.55, y: 50.4, density: 1, width: 18, angle: 0 },
        { name: 'Platform', type: 'static', x: 322.8, y: 32.4, density: 1, width: 18, angle: 0 },
        { name: 'Platform', type: 'dynamic', x: 467.75, y: 404.1, density: 1, width: 46.5, angle: 120 },
        { name: 'Basket', x: 49.4, y: 396.45 },
        { name: 'Cannon', x: 156.35, y: 335.5, lowerAngle: -45, upperAngle: 30 },
        { name: 'Platform', type: 'dynamic', x: 383.55, y: 32, density: 0.5, width: 138.2, angle: 0 },
        {
          name: 'Pivot',
          x: 322.8,
          y: 32.4,
          type: 'bolt',
          color: 'Red',
          gearMaxAngle: 0,
          gearPower: 1,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 0
        },
        { name: 'Platform', type: 'dynamic', x: 461.75, y: 50.4, density: 1, width: 42.7, angle: 0 },
        {
          name: 'Pivot',
          x: 475.55,
          y: 50.4,
          type: 'gear',
          color: 'Yellow',
          gearMaxAngle: -55,
          gearPower: -5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 3
        },
        { name: 'Platform', type: 'dynamic', x: 590.95, y: 66.4, density: 0.05, width: 89.4, angle: 90 },
        { name: 'Platform', type: 'dynamic', x: 592.15, y: 220.5, density: 0.05, width: 106.3, angle: 90 },
        {
          name: 'Pivot',
          x: 590.95,
          y: 101.45,
          type: 'bolt',
          color: 'Red',
          gearMaxAngle: 0,
          gearPower: 1,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 0
        },
        { name: 'Switcher', x: 598.3, y: 368.4, angle: 0, type: 'toogle', color: 'Red', signalID: 1 },
        { name: 'Platform', type: 'dynamic', x: 670.15, y: 361.55, density: 1, width: 91.6, angle: 0 },
        { name: 'Switcher', x: 161.5, y: 160.75, angle: 180, type: 'toogle', color: 'Green', signalID: 2 },
        { name: 'Platform', type: 'static', x: 477.7, y: 194.2, density: 1, width: 259.1, angle: -45 },
        { name: 'Spring', x: 381.2, y: 239.45, angle: 45, type: 'static', elasticity: 3.2 },
        { name: 'Platform', type: 'static', x: 214.65, y: 349.75, density: 1, width: 277.1, angle: 0 },
        { name: 'Platform', type: 'static', x: 438.8, y: 346.65, density: 1, width: 126.1, angle: 30 },
        { name: 'Platform', type: 'static', x: 386.95, y: 370.95, density: 1, width: 90.4, angle: 30 },
        { name: 'Switcher', x: 496.95, y: 428.45, angle: 0, type: 'button', color: 'Yellow', signalID: 3 },
        { name: 'Platform', type: 'static', x: 526.95, y: 419.7, density: 1, width: 51.6, angle: 90 },
        { name: 'Platform', type: 'static', x: 376.1, y: 245.15, density: 1, width: 43.9, angle: 45 },
        { name: 'Platform', type: 'static', x: 504.55, y: 436.55, density: 1, width: 63.2, angle: 0 },
        { name: 'Platform', type: 'static', x: 598.3, y: 376.45, density: 1, width: 40, angle: 0 },
        { name: 'Platform', type: 'static', x: 388.65, y: 301, density: 1, width: 45.7, angle: 90 },
        {
          name: 'Pivot',
          x: 460.55,
          y: 416.4,
          type: 'gear',
          color: 'Red',
          gearMaxAngle: 30,
          gearPower: -5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 1
        },
        { name: 'Platform', type: 'dynamic', x: 31.3, y: 350.95, density: 1, width: 61.5, angle: 0 },
        { name: 'Platform', type: 'static', x: 78.4, y: 381.5, density: 1, width: 49.5, angle: -75 },
        { name: 'Platform', type: 'static', x: 85.1, y: 252.6, density: 1, width: 214.9, angle: 90 },
        { name: 'Platform', type: 'static', x: 144.85, y: 153.45, density: 1, width: 137, angle: 0 },
        { name: 'Star', x: 434, y: 437.95 },
        { name: 'Star', x: 406.5, y: 91.5 },
        { name: 'Star', x: 99.5, y: 123 },
        {
          name: 'Pivot',
          x: 592.15,
          y: 261.75,
          type: 'bolt',
          color: 'Red',
          gearMaxAngle: 0,
          gearPower: 1,
          lowerAngle: -720,
          upperAngle: 720,
          signalID: 0
        },
        {
          name: 'Pivot',
          x: 9.7,
          y: 351.8,
          type: 'gear',
          color: 'Red',
          gearMaxAngle: 75,
          gearPower: 6,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 1
        },
        {
          name: 'Pivot',
          x: 707.15,
          y: 361.65,
          type: 'gear',
          color: 'Green',
          gearMaxAngle: 50,
          gearPower: 7,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 2
        }
      ]
    }),
    (ft[16] = {
      items: [
        { name: 'Platform', type: 'static', x: 620.1, y: 128.6, density: 1, width: 86, angle: 0 },
        { name: 'Platform', type: 'static', x: 526.1, y: 385.75, density: 1, width: 112, angle: 0 },
        { name: 'Platform', type: 'static', x: 190.3, y: 171.2, density: 1, width: 140.3, angle: 36 },
        { name: 'Basket', x: 622.3, y: 199.35 },
        { name: 'Cannon', x: 235, y: 394.6, lowerAngle: -70, upperAngle: 70 },
        { name: 'Switcher', x: 678.85, y: 276.75, angle: 180, type: 'button', color: 'Green', signalID: 1 },
        { name: 'Platform', type: 'static', x: 458.15, y: 318.75, density: 1, width: 38, angle: 0 },
        { name: 'Platform', type: 'static', x: 582.5, y: 254.85, density: 1, width: 279.9, angle: 90 },
        { name: 'Platform', type: 'static', x: 468.1, y: 352.25, density: 1, width: 85, angle: 90 },
        { name: 'Platform', type: 'static', x: 248.05, y: 195.45, density: 1, width: 46.7, angle: -54 },
        { name: 'Platform', type: 'static', x: 97.8, y: 155.7, density: 1, width: 178, angle: 90 },
        { name: 'Spring', x: 59.1, y: 409.4, angle: 0, type: 'static', elasticity: 3.3 },
        { name: 'Platform', type: 'static', x: 97.8, y: 359.15, density: 1, width: 129, angle: 90 },
        { name: 'Platform', type: 'static', x: 69.6, y: 417.15, density: 1, width: 76.7, angle: 0 },
        { name: 'Switcher', x: 72.85, y: 59.6, angle: -144, type: 'toogle', color: 'Purple', signalID: 2 },
        { name: 'Platform', type: 'static', x: 8.1, y: 270.35, density: 1, width: 120, angle: 90 },
        { name: 'Ball', x: 149.25, y: 81.35 },
        { name: 'Ball', x: 167.75, y: 66.15 },
        { name: 'Platform', type: 'static', x: 658, y: 192.55, density: 1, width: 159.1, angle: 90 },
        { name: 'Platform', type: 'static', x: 98.05, y: 68.7, density: 1, width: 165.3, angle: 36 },
        { name: 'Ball', x: 131.6, y: 60 },
        { name: 'Ball', x: 149.25, y: 60.3 },
        { name: 'Ball', x: 179.25, y: 45.3 },
        { name: 'Ball', x: 152.25, y: 39.3 },
        { name: 'Platform', type: 'static', x: 346.8, y: 249.45, density: 1, width: 241.5, angle: 36 },
        { name: 'Star', x: 18.85, y: 376.4 },
        { name: 'Star', x: 440.85, y: 350.5 },
        { name: 'Star', x: 120.15, y: 118.95 },
        { name: 'Platform', type: 'dynamic', x: 187.1, y: 70.7, density: 1, width: 119.4, angle: -54 },
        {
          name: 'Pivot',
          x: 157.15,
          y: 111.85,
          type: 'gear',
          color: 'Purple',
          gearMaxAngle: 37,
          gearPower: 5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 2
        },
        { name: 'Platform', type: 'static', x: 686.25, y: 353.4, density: 1, width: 18, angle: 0 },
        { name: 'Platform', type: 'dynamic', x: 590.45, y: 335.4, density: 0.8, width: 209.5, angle: 0 },
        {
          name: 'Pivot',
          x: 582.25,
          y: 335.4,
          type: 'bolt',
          color: 'Red',
          gearMaxAngle: 0,
          gearPower: 1,
          lowerAngle: -720,
          upperAngle: 720,
          signalID: 0
        },
        { name: 'Platform', type: 'dynamic', x: 593.9, y: 174.2, density: 1, width: 40, angle: 0 },
        {
          name: 'Pivot',
          x: 582.25,
          y: 173.4,
          type: 'gear',
          color: 'Green',
          gearMaxAngle: 40,
          gearPower: 5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 1
        },
        { name: 'Platform', type: 'dynamic', x: 646.85, y: 174.2, density: 1, width: 40, angle: 0 },
        { name: 'Ball', x: 619.85, y: 155.8 },
        {
          name: 'Pivot',
          x: 658.25,
          y: 173.4,
          type: 'gear',
          color: 'Green',
          gearMaxAngle: -40,
          gearPower: -5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 1
        },
        { name: 'Platform', type: 'static', x: 678.95, y: 270.75, density: 1, width: 64.2, angle: 0 }
      ]
    }),
    (ft[17] = {
      items: [
        { name: 'Platform', type: 'static', x: 169.35, y: 213.35, density: 1, width: 146.4, angle: 0 },
        { name: 'Platform', type: 'static', x: 270.65, y: 278.35, density: 1, width: 151.3, angle: 0 },
        { name: 'Basket', x: 60.35, y: 148.15 },
        { name: 'Cannon', x: 433.25, y: 386.2, lowerAngle: -60, upperAngle: 70 },
        { name: 'Platform', type: 'static', x: 134.65, y: 288.35, density: 1, width: 49.3, angle: 0 },
        { name: 'Switcher', x: 50.35, y: 428.35, angle: 0, type: 'button', color: 'Blue', signalID: 1 },
        { name: 'Platform', type: 'static', x: 214.8, y: 10.2, density: 1, width: 414.3, angle: 0 },
        { name: 'Platform', type: 'static', x: 52.05, y: 436.35, density: 1, width: 88.3, angle: 0 },
        { name: 'Platform', type: 'static', x: 340.25, y: 360.5, density: 1, width: 183.1, angle: 90 },
        { name: 'Switcher', x: 688.2, y: 300.7, angle: -132, type: 'button', color: 'Red', signalID: 2 },
        { name: 'Platform', type: 'static', x: 618.55, y: 327.65, density: 0.5, width: 120, angle: 30 },
        { name: 'Platform', type: 'static', x: 693.9, y: 296.5, density: 1, width: 40.5, angle: 48 },
        { name: 'Box', x: 133.8, y: 255.5, angle: void 0, density: 2 },
        { name: 'Platform', type: 'static', x: 100.95, y: 156.35, density: 1, width: 132, angle: 90 },
        { name: 'Platform', type: 'static', x: 16.75, y: 223.3, density: 1, width: 444.5, angle: 90 },
        { name: 'Platform', type: 'static', x: 87.35, y: 418.4, density: 1, width: 54.1, angle: -90 },
        { name: 'Platform', type: 'static', x: 416.65, y: 53.8, density: 1, width: 107.6, angle: -90 },
        { name: 'Platform', type: 'static', x: 560.35, y: 155.55, density: 1, width: 80, angle: 0 },
        { name: 'Rock', x: 560.35, y: 123.25, density: 0.5 },
        { name: 'Star', x: 133.5, y: 135.35 },
        { name: 'Star', x: 280.1, y: 244.9 },
        { name: 'Star', x: 560.45, y: 69.45 },
        { name: 'Platform', type: 'static', x: 36.95, y: 72.05, density: 1, width: 49.2, angle: 45 },
        { name: 'Platform', type: 'static', x: 537.5, y: 167.05, density: 1, width: 40, angle: 90 },
        { name: 'Platform', type: 'static', x: 582.5, y: 167.05, density: 1, width: 40, angle: 90 },
        { name: 'Teleport', x: 524.7, y: 254.35, angle: -135, color: 'Blue', id: 1, mulVel: 1 },
        { name: 'Teleport', x: 217.8, y: 246.8, angle: -90, color: 'Blue', id: 1, mulVel: 2 },
        { name: 'Platform', type: 'dynamic', x: 172.3, y: 99.2, density: 1, width: 205.8, angle: 0 },
        {
          name: 'Pivot',
          x: 100.5,
          y: 99.95,
          type: 'gear',
          color: 'Blue',
          gearMaxAngle: -10,
          gearPower: -10,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 1
        },
        { name: 'Platform', type: 'dynamic', x: 354.8, y: 99.2, density: 1, width: 138.8, angle: 0 },
        {
          name: 'Pivot',
          x: 415.5,
          y: 99.95,
          type: 'gear',
          color: 'Red',
          gearMaxAngle: 30,
          gearPower: 10,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 2
        }
      ]
    }),
    (ft[18] = {
      items: [
        { name: 'Platform', type: 'static', x: 140.1, y: 265.1, density: 1, width: 18, angle: 38 },
        { name: 'Platform', type: 'static', x: 249.1, y: 351.1, density: 1, width: 18, angle: 38 },
        { name: 'Platform', type: 'static', x: 193.6, y: 308.6, density: 1, width: 18, angle: 38 },
        { name: 'Platform', type: 'static', x: 491.9, y: 167.35, density: 1, width: 91.7, angle: 90 },
        { name: 'Platform', type: 'static', x: 647.9, y: 167.35, density: 1, width: 91.7, angle: 90 },
        { name: 'Platform', type: 'static', x: 27.15, y: 169.15, density: 1, width: 206.7, angle: -90 },
        { name: 'Platform', type: 'static', x: 162.25, y: 253.75, density: 1, width: 222.9, angle: 40 },
        { name: 'Basket', x: 657.85, y: 419.4 },
        { name: 'Cannon', x: 304.3, y: 302.2, lowerAngle: -70, upperAngle: 70 },
        { name: 'Platform', type: 'static', x: 119.3, y: 344.2, density: 1, width: 249.3, angle: 40 },
        { name: 'Platform', type: 'dynamic', x: 233.15, y: 370.1, density: 1, width: 69.3, angle: 130 },
        {
          name: 'Pivot',
          x: 249.25,
          y: 349.95,
          type: 'gear',
          color: 'Purple',
          gearMaxAngle: 0,
          gearPower: -7,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 1
        },
        { name: 'Platform', type: 'static', x: 470.6, y: 323.1, density: 1, width: 457.8, angle: 0 },
        { name: 'Platform', type: 'static', x: 240.25, y: 422.9, density: 1, width: 63.3, angle: 0 },
        { name: 'Platform', type: 'static', x: 352.15, y: 422.95, density: 1, width: 63.3, angle: 0 },
        { name: 'Platform', type: 'static', x: 464.2, y: 421.75, density: 1, width: 63.3, angle: 0 },
        { name: 'Platform', type: 'static', x: 589.65, y: 421.7, density: 1, width: 89.6, angle: 0 },
        { name: 'Platform', type: 'static', x: 297.15, y: 467, density: 1, width: 51.8, angle: 0 },
        { name: 'Platform', type: 'static', x: 522.7, y: 467, density: 1, width: 51.8, angle: 0 },
        { name: 'Platform', type: 'static', x: 409.1, y: 467, density: 1, width: 51.8, angle: 0 },
        { name: 'Rock', x: 90.2, y: 273.75, density: 1 },
        { name: 'Rock', x: 144.55, y: 318.65, density: 1 },
        { name: 'Rock', x: 195.25, y: 361.5, density: 1 },
        { name: 'Platform', type: 'dynamic', x: 178.35, y: 328.3, density: 1, width: 65.6, angle: 128 },
        {
          name: 'Pivot',
          x: 192.6,
          y: 309.6,
          type: 'gear',
          color: 'Red',
          gearMaxAngle: 40,
          gearPower: -7,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 2
        },
        { name: 'Platform', type: 'dynamic', x: 124.75, y: 284.55, density: 2, width: 65.4, angle: 128 },
        {
          name: 'Pivot',
          x: 138.85,
          y: 265.85,
          type: 'gear',
          color: 'Blue',
          gearMaxAngle: 40,
          gearPower: -7,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 3
        },
        { name: 'Swings', x: 569.95, y: 178.85, angle: -25, lowerAngle: -25, upperAngle: 25 },
        { name: 'Platform', type: 'static', x: 690.15, y: 312.75, density: 1, width: 236, angle: 90 },
        { name: 'Platform', type: 'static', x: 627.65, y: 303.05, density: 1, width: 57.7, angle: 90 },
        { name: 'Switcher', x: 597.3, y: 315.15, angle: 0, type: 'button', color: 'Blue', signalID: 3 },
        { name: 'Switcher', x: 537.8, y: 315.15, angle: 0, type: 'button', color: 'Red', signalID: 2 },
        { name: 'Switcher', x: 477.8, y: 315.15, angle: 0, type: 'button', color: 'Green', signalID: 4 },
        { name: 'Swings', x: 507.65, y: 257.7, angle: -25, lowerAngle: -25, upperAngle: 30 },
        { name: 'Platform', type: 'static', x: 80.05, y: 137.4, density: 1, width: 103.9, angle: -90 },
        { name: 'Swings', x: 627.65, y: 257.7, angle: -30, lowerAngle: -30, upperAngle: 25 },
        { name: 'Switcher', x: 657.65, y: 315.15, angle: 0, type: 'button', color: 'Purple', signalID: 1 },
        { name: 'Platform', type: 'dynamic', x: 53.65, y: 74.9, density: 2, width: 70.9, angle: 0 },
        {
          name: 'Pivot',
          x: 27.1,
          y: 74.6,
          type: 'gear',
          color: 'Green',
          gearMaxAngle: -45,
          gearPower: -6,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 4
        },
        { name: 'Platform', type: 'static', x: 567.65, y: 287.35, density: 1, width: 181.4, angle: 90 },
        { name: 'Platform', type: 'static', x: 507.65, y: 303.15, density: 1, width: 58, angle: 90 },
        { name: 'Platform', type: 'static', x: 449.4, y: 263.4, density: 1, width: 137.4, angle: 90 },
        { name: 'Platform', type: 'static', x: 470.8, y: 203.95, density: 1, width: 60.3, angle: 0 },
        { name: 'Platform', type: 'static', x: 589.95, y: 113.85, density: 1, width: 50, angle: 90 },
        { name: 'Platform', type: 'static', x: 549.95, y: 113.85, density: 1, width: 50, angle: 90 },
        { name: 'Platform', type: 'static', x: 619.15, y: 130.2, density: 1, width: 75, angle: 0 },
        { name: 'Platform', type: 'static', x: 521.05, y: 130.2, density: 1, width: 75.7, angle: 0 },
        { name: 'Platform', type: 'static', x: 605.05, y: 77.7, density: 1, width: 50, angle: -45 },
        { name: 'Platform', type: 'static', x: 535.05, y: 77.7, density: 1, width: 50, angle: 45 },
        { name: 'Platform', type: 'static', x: 669.05, y: 203.95, density: 1, width: 60.3, angle: 0 },
        { name: 'Star', x: 519, y: 97.45 },
        { name: 'Star', x: 36, y: 24.65 },
        { name: 'Star', x: 690, y: 163.3 }
      ]
    }),
    (ft[19] = {
      items: [
        { name: 'Platform', type: 'static', x: 664.5, y: 357.95, density: 1, width: 69, angle: 0 },
        { name: 'Platform', type: 'static', x: 156, y: 422.7, density: 1, width: 18, angle: 0 },
        { name: 'Platform', type: 'static', x: 428.4, y: 238.1, density: 1, width: 18, angle: 0 },
        { name: 'Platform', type: 'static', x: 565.5, y: 19.45, density: 1, width: 60.3, angle: -90 },
        { name: 'Platform', type: 'static', x: 199.85, y: 19.45, density: 1, width: 60.3, angle: -90 },
        { name: 'Platform', type: 'static', x: 288.3, y: 370.25, density: 1, width: 199.9, angle: 0 },
        { name: 'Platform', type: 'static', x: 232.25, y: 424.95, density: 1, width: 120.7, angle: 0 },
        { name: 'Platform', type: 'static', x: 255.25, y: 213, density: 1, width: 55.8, angle: 0 },
        { name: 'Platform', type: 'static', x: 504.9, y: 212.95, density: 1, width: 62.4, angle: 0 },
        { name: 'Basket', x: 60.6, y: 241.5 },
        { name: 'Cannon', x: 474.2, y: 406.8, lowerAngle: -70, upperAngle: 70 },
        { name: 'Platform', type: 'static', x: 175.65, y: 195, density: 1, width: 140, angle: 0 },
        { name: 'Platform', type: 'static', x: 574.8, y: 194.95, density: 1, width: 113.5, angle: 0 },
        { name: 'Platform', type: 'dynamic', x: 382.1, y: 21.4, density: 0.01, width: 266.7, angle: 0 },
        { name: 'Switcher', x: 121.65, y: 227.85, angle: 90, type: 'toogle', color: 'Green', signalID: 1 },
        { name: 'Teleport', x: 66.5, y: 42.9, angle: 110, color: 'Red', id: 1, mulVel: 1 },
        { name: 'Teleport', x: 570.8, y: 251.25, angle: -135, color: 'Red', id: 1, mulVel: 1 },
        { name: 'Platform', type: 'static', x: 708.15, y: 270, density: 1, width: 342.3, angle: 90 },
        { name: 'Platform', type: 'dynamic', x: 379.5, y: 238.85, density: 1, width: 115.4, angle: 0 },
        {
          name: 'Pivot',
          x: 426.4,
          y: 238.1,
          type: 'gear',
          color: 'Blue',
          gearMaxAngle: 40,
          gearPower: 6,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 2
        },
        { name: 'Switcher', x: 312.45, y: 442.75, angle: 0, type: 'button', color: 'Blue', signalID: 2 },
        { name: 'Platform', type: 'static', x: 312.3, y: 449.95, density: 1, width: 40, angle: 0 },
        { name: 'Platform', type: 'static', x: 417.35, y: 424.95, density: 1, width: 169.7, angle: 0 },
        { name: 'Platform', type: 'static', x: 9.3, y: 108.35, density: 1, width: 216.7, angle: 90 },
        { name: 'Platform', type: 'static', x: 101.65, y: 90.15, density: 1, width: 169.3, angle: -160 },
        { name: 'Platform', type: 'static', x: 43.95, y: 390.95, density: 1, width: 20, angle: 0 },
        { name: 'Platform', type: 'static', x: 379.3, y: 397.7, density: 1, width: 74, angle: 90 },
        { name: 'Platform', type: 'dynamic', x: 172.75, y: 363.25, density: 0.6, width: 133.6, angle: 105 },
        {
          name: 'Pivot',
          x: 158,
          y: 419.7,
          type: 'bolt',
          color: 'Red',
          gearMaxAngle: 0,
          gearPower: 5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 0
        },
        { name: 'Platform', type: 'static', x: 114.65, y: 224.65, density: 1, width: 112.3, angle: 90 },
        { name: 'Platform', type: 'static', x: 236.65, y: 204, density: 1, width: 36, angle: -90 },
        { name: 'Platform', type: 'static', x: 527.05, y: 204, density: 1, width: 36, angle: -90 },
        { name: 'Platform', type: 'dynamic', x: 228.65, y: 40.65, density: 1, width: 75.8, angle: 0 },
        {
          name: 'Pivot',
          x: 197.95,
          y: 41.1,
          type: 'gear',
          color: 'Green',
          gearMaxAngle: 110,
          gearPower: 5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 1
        },
        { name: 'Platform', type: 'dynamic', x: 536.05, y: 40.6, density: 1, width: 76.7, angle: 0 },
        {
          name: 'Pivot',
          x: 567.15,
          y: 41.1,
          type: 'gear',
          color: 'Green',
          gearMaxAngle: -110,
          gearPower: -5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 1
        },
        { name: 'Platform', type: 'static', x: 623, y: 313.5, density: 1, width: 255.3, angle: 90 },
        { name: 'Star', x: 591.45, y: 422.05 },
        { name: 'Star', x: 73.2, y: 429.25 },
        { name: 'Star', x: 163.15, y: 54.05 },
        { name: 'Platform', type: 'dynamic', x: 48, y: 207.7, density: 1, width: 95.4, angle: 0 },
        {
          name: 'Pivot',
          x: 8.75,
          y: 207.45,
          type: 'gear',
          color: 'Yellow',
          gearMaxAngle: -50,
          gearPower: -6,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 3
        },
        { name: 'Switcher', x: 667.15, y: 350.75, angle: 0, type: 'button', color: 'Yellow', signalID: 3 }
      ]
    }),
    (ft[20] = {
      items: [
        { name: 'Platform', type: 'static', x: 580, y: 209, density: 1, width: 18, angle: 0 },
        { name: 'Platform', type: 'static', x: 400, y: 209, density: 1, width: 18, angle: 0 },
        { name: 'Basket', x: 49.25, y: 386.65 },
        { name: 'Cannon', x: 157.3, y: 378.15, lowerAngle: -30, upperAngle: 70 },
        { name: 'Platform', type: 'dynamic', x: 580, y: 210, density: 1, width: 170.8, angle: 50 },
        {
          name: 'Pivot',
          x: 580,
          y: 210,
          type: 'gear',
          color: 'Red',
          gearMaxAngle: -50,
          gearPower: -5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 6
        },
        { name: 'Platform', type: 'static', x: 472.5, y: 295.1, density: 1, width: 331.8, angle: 0 },
        { name: 'Switcher', x: 620.4, y: 431.65, angle: 0, type: 'button', color: 'Green', signalID: 4 },
        { name: 'Platform', type: 'dynamic', x: 400, y: 210, density: 1, width: 172.9, angle: -50 },
        {
          name: 'Pivot',
          x: 400,
          y: 210,
          type: 'gear',
          color: 'Red',
          gearMaxAngle: 50,
          gearPower: 5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 6
        },
        { name: 'Switcher', x: 312.25, y: 316.6, angle: -135, type: 'toogle', color: 'Red', signalID: 6 },
        { name: 'Swings', x: 650, y: 377.15, angle: -20, lowerAngle: -20, upperAngle: 20 },
        { name: 'Platform', type: 'static', x: 630, y: 311.25, density: 1, width: 50, angle: 90 },
        { name: 'Platform', type: 'static', x: 670, y: 311, density: 1, width: 50, angle: 90 },
        { name: 'Platform', type: 'static', x: 689.4, y: 288.25, density: 1, width: 53.9, angle: -14 },
        { name: 'Platform', type: 'static', x: 650, y: 439.65, density: 1, width: 138.2, angle: 0 },
        { name: 'Switcher', x: 680, y: 431.65, angle: 0, type: 'button', color: 'Purple', signalID: 2 },
        { name: 'Platform', type: 'static', x: 650, y: 419.35, density: 1, width: 58.6, angle: 90 },
        { name: 'Platform', type: 'static', x: 710, y: 279.45, density: 1, width: 338, angle: 90 },
        { name: 'Platform', type: 'static', x: 589.5, y: 384.9, density: 1, width: 128, angle: 90 },
        { name: 'Platform', type: 'static', x: 512.95, y: 119.1, density: 1, width: 412.7, angle: 0 },
        { name: 'Platform', type: 'static', x: 89, y: 249.4, density: 1, width: 378.1, angle: 90 },
        { name: 'Platform', type: 'static', x: 9.5, y: 220, density: 1, width: 435.4, angle: 90 },
        { name: 'Platform', type: 'static', x: 165.8, y: 10.2, density: 1, width: 329.1, angle: 0 },
        { name: 'Platform', type: 'static', x: 128.8, y: 69.3, density: 1, width: 97.2, angle: 0 },
        { name: 'Platform', type: 'static', x: 319.9, y: 312.45, density: 1, width: 56, angle: 45 },
        { name: 'Star', x: 114.25, y: 422.4 },
        { name: 'Star', x: 317.95, y: 38.15 },
        { name: 'Star', x: 495.2, y: 261.15 },
        { name: 'Platform', type: 'static', x: 21.9, y: 348.2, density: 1, width: 41.5, angle: 45 },
        { name: 'Platform', type: 'static', x: 77.15, y: 328.2, density: 1, width: 41.5, angle: -45 },
        { name: 'Spring', x: 312.95, y: 120.7, angle: 0, type: 'dynamic', elasticity: 2.5 },
        { name: 'Platform', type: 'static', x: 167.95, y: 83.5, density: 1, width: 46.2, angle: 90 },
        { name: 'Platform', type: 'dynamic', x: 210.1, y: 126.35, density: 1, width: 123.2, angle: 35 },
        {
          name: 'Pivot',
          x: 168.7,
          y: 97.35,
          type: 'gear',
          color: 'Purple',
          gearMaxAngle: 90,
          gearPower: 5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 2
        },
        {
          name: 'Pivot',
          x: 311.7,
          y: 119.2,
          type: 'gear',
          color: 'Green',
          gearMaxAngle: -45,
          gearPower: -5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 4
        }
      ]
    }),
    (ft[21] = {
      items: [
        { name: 'Platform', type: 'static', x: 605.95, y: 124.05, density: 1, width: 18.7, angle: 0 },
        { name: 'Platform', type: 'static', x: 514.95, y: 124.05, density: 1, width: 18.7, angle: 0 },
        { name: 'Platform', type: 'static', x: 569.95, y: 252.05, density: 1, width: 18.7, angle: 0 },
        { name: 'Platform', type: 'static', x: 9, y: 191.3, density: 1, width: 18, angle: 0 },
        { name: 'Platform', type: 'static', x: 9, y: 345.3, density: 1, width: 188.4, angle: 90 },
        { name: 'Platform', type: 'dynamic', x: 30.3, y: 260.05, density: 1, width: 60.7, angle: 0 },
        { name: 'Platform', type: 'dynamic', x: 590, y: 140, density: 1, width: 60, angle: -45 },
        { name: 'Basket', x: 42.9, y: 377.2 },
        { name: 'Cannon', x: 251.3, y: 402.55, lowerAngle: -70, upperAngle: 70 },
        { name: 'Platform', type: 'static', x: 108.45, y: 279.55, density: 1, width: 81, angle: 0 },
        { name: 'Switcher', x: 238.95, y: 95.1, angle: 180, type: 'toogle', color: 'Purple', signalID: 4 },
        { name: 'Platform', type: 'static', x: 438.5, y: 411.8, density: 1, width: 80, angle: 0 },
        { name: 'Platform', type: 'dynamic', x: 362.65, y: 424.1, density: 1, width: 100.8, angle: 165 },
        { name: 'Platform', type: 'dynamic', x: 512.7, y: 424.15, density: 1, width: 100.3, angle: 15 },
        {
          name: 'Pivot',
          x: 473.6,
          y: 413.75,
          type: 'gear',
          color: 'Yellow',
          gearMaxAngle: -90,
          gearPower: -6,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 5
        },
        {
          name: 'Pivot',
          x: 402.45,
          y: 412.6,
          type: 'gear',
          color: 'Yellow',
          gearMaxAngle: 270,
          gearPower: 6,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 5
        },
        { name: 'Switcher', x: 85.2, y: 332.2, angle: 90, type: 'toogle', color: 'Yellow', signalID: 5 },
        { name: 'Platform', type: 'static', x: 605, y: 436.45, density: 1, width: 74.5, angle: 0 },
        { name: 'Spring', x: 678.55, y: 462.1, angle: 0, type: 'static', elasticity: 4.1 },
        { name: 'Platform', type: 'static', x: 393, y: 87, density: 1, width: 449.3, angle: 0 },
        { name: 'Switcher', x: 185.35, y: 52.45, angle: 90, type: 'button', color: 'Green', signalID: 3 },
        { name: 'Platform', type: 'dynamic', x: 530, y: 140, density: 1, width: 60, angle: 45 },
        { name: 'Rock', x: 560, y: 122, density: 1 },
        { name: 'Spring', x: 712.5, y: 34.1, angle: -98, type: 'static', elasticity: 2.2 },
        {
          name: 'Pivot',
          x: 515,
          y: 125,
          type: 'gear',
          color: 'Purple',
          gearMaxAngle: 90,
          gearPower: 6,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 4
        },
        {
          name: 'Pivot',
          x: 605,
          y: 125,
          type: 'gear',
          color: 'Purple',
          gearMaxAngle: -90,
          gearPower: -6,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 4
        },
        { name: 'Platform', type: 'static', x: 678.55, y: 469.05, density: 1, width: 36, angle: 0 },
        { name: 'Switcher', x: 107.3, y: 271.45, angle: 0, type: 'button', color: 'Blue', signalID: 6 },
        { name: 'Platform', type: 'static', x: 177.35, y: 48.2, density: 1, width: 96.4, angle: 90 },
        { name: 'Platform', type: 'static', x: 140.1, y: 245.45, density: 1, width: 86.2, angle: 90 },
        { name: 'Platform', type: 'dynamic', x: 75.75, y: 190.3, density: 1, width: 151.6, angle: 0 },
        {
          name: 'Pivot',
          x: 8,
          y: 190.3,
          type: 'gear',
          color: 'Purple',
          gearMaxAngle: -50,
          gearPower: -9,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 4
        },
        { name: 'Platform', type: 'static', x: 76.1, y: 322.2, density: 1, width: 234.1, angle: 90 },
        {
          name: 'Pivot',
          x: 9,
          y: 260.05,
          type: 'gear',
          color: 'Green',
          gearMaxAngle: -90,
          gearPower: -6,
          lowerAngle: 180,
          upperAngle: 0,
          signalID: 3
        },
        { name: 'Star', x: 38.5, y: 225.45 },
        { name: 'Star', x: 610.15, y: 289.15 },
        { name: 'Star', x: 376.3, y: 448.15 },
        { name: 'Platform', type: 'dynamic', x: 569.95, y: 252.05, density: 1, width: 156.4, angle: 0 },
        {
          name: 'Pivot',
          x: 569.95,
          y: 252.05,
          type: 'gear',
          color: 'Blue',
          gearMaxAngle: -48,
          gearPower: -6,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 6
        },
        { name: 'Platform', type: 'static', x: 483.3, y: 195.4, density: 1, width: 18.7, angle: 0 }
      ]
    }),
    (ft[22] = {
      items: [
        { name: 'Platform', type: 'static', x: 652.85, y: 213.4, density: 1, width: 29.2, angle: -15 },
        { name: 'Basket', x: 204.05, y: 74.8 },
        { name: 'Cannon', x: 340.9, y: 313.05, lowerAngle: -70, upperAngle: 60 },
        { name: 'Box', x: 129.65, y: 214.85, angle: 0, density: 1.3 },
        { name: 'Platform', type: 'static', x: 509.2, y: 321.7, density: 1, width: 117.4, angle: -50 },
        { name: 'Platform', type: 'static', x: 379.85, y: 60.45, density: 1, width: 314.4, angle: -2 },
        { name: 'Platform', type: 'static', x: 129.45, y: 247.5, density: 1, width: 20, angle: 0 },
        { name: 'Platform', type: 'static', x: 327.5, y: 161.25, density: 1, width: 419.7, angle: 0 },
        { name: 'Platform', type: 'static', x: 265.25, y: 9.05, density: 1, width: 294.1, angle: 0 },
        { name: 'Platform', type: 'static', x: 528.4, y: 137.5, density: 1, width: 183.7, angle: 90 },
        { name: 'Platform', type: 'static', x: 502.15, y: 387.85, density: 1, width: 75, angle: 0 },
        { name: 'Platform', type: 'static', x: 371.8, y: 135.15, density: 1, width: 70, angle: -90 },
        { name: 'Switcher', x: 502.3, y: 379.8, angle: 0, type: 'button', color: 'Blue', signalID: 5 },
        { name: 'Platform', type: 'static', x: 587.8, y: 226.65, density: 1, width: 77.8, angle: -52 },
        { name: 'Platform', type: 'static', x: 409.65, y: 109, density: 1, width: 93.8, angle: 0 },
        { name: 'Spring', x: 650.35, y: 209, angle: 0, type: 'dynamic', elasticity: 2.5 },
        { name: 'Platform', type: 'static', x: 703.45, y: 112.1, density: 1, width: 71.7, angle: 81 },
        { name: 'Platform', type: 'static', x: 170.05, y: 47.85, density: 1, width: 82.6, angle: 90 },
        { name: 'Mill', x: 617.4, y: 334.85, enableMotor: !0, motorSpeed: 5, signalID: 4 },
        { name: 'Platform', type: 'static', x: 418.95, y: 424, density: 1, width: 56.9, angle: -50 },
        { name: 'Switcher', x: 84.45, y: 396.7, angle: -44, type: 'button', color: 'Red', signalID: 4 },
        { name: 'Platform', type: 'static', x: 132.25, y: 398.35, density: 1, width: 70.6, angle: 47 },
        { name: 'Platform', type: 'static', x: 530.65, y: 376.55, density: 1, width: 40, angle: 90 },
        { name: 'Platform', type: 'static', x: 473.75, y: 378.65, density: 1, width: 36.1, angle: 90 },
        { name: 'Platform', type: 'static', x: 91.4, y: 401, density: 1, width: 81.2, angle: -44 },
        { name: 'Platform', type: 'static', x: 111.2, y: 426.3, density: 1, width: 103.6, angle: 0 },
        { name: 'Platform', type: 'static', x: 12.35, y: 439.95, density: 1, width: 104.5, angle: -15 },
        { name: 'Star', x: 37.1, y: 212.8 },
        { name: 'Star', x: 12.35, y: 413.4 },
        { name: 'Star', x: 458.1, y: 444.75 },
        { name: 'Platform', type: 'static', x: 89.6, y: 172.55, density: 1, width: 69, angle: -20 },
        { name: 'Platform', type: 'static', x: 30.25, y: 183.85, density: 1, width: 60.8, angle: 0 },
        { name: 'Platform', type: 'static', x: 9, y: 283.2, density: 1, width: 216.8, angle: 90 },
        { name: 'Spring', x: 375.4, y: 421, angle: 40, type: 'static', elasticity: 4 },
        { name: 'Platform', type: 'static', x: 367.3, y: 427.95, density: 1, width: 56.9, angle: 40 },
        {
          name: 'Pivot',
          x: 650.5,
          y: 205.95,
          type: 'gear',
          color: 'Blue',
          gearMaxAngle: -15,
          gearPower: -5,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 5
        }
      ]
    }),
    (ft[23] = {
      items: [
        { name: 'Platform', type: 'static', x: 584.5, y: 166.1, density: 1, width: 133.2, angle: 0 },
        { name: 'Platform', type: 'dynamic', x: 473.6, y: 166.45, density: 1, width: 120, angle: 0 },
        { name: 'Platform', type: 'static', x: 643, y: 310.7, density: 1, width: 300.8, angle: 90 },
        { name: 'Platform', type: 'static', x: 38.35, y: 21.75, density: 1, width: 74.3, angle: 0 },
        { name: 'Platform', type: 'static', x: 10.15, y: 125.65, density: 1, width: 226.3, angle: 90 },
        { name: 'Platform', type: 'static', x: 243.15, y: 290.15, density: 1, width: 165.5, angle: 0 },
        { name: 'Platform', type: 'static', x: 106.35, y: 223.65, density: 1, width: 103.7, angle: 26 },
        { name: 'Platform', type: 'static', x: 517.9, y: 401.4, density: 1, width: 120.3, angle: 90 },
        { name: 'Platform', type: 'static', x: 560.4, y: 337.5, density: 1, width: 43.8, angle: -90 },
        { name: 'Platform', type: 'static', x: 600.4, y: 337.5, density: 1, width: 43.8, angle: -90 },
        { name: 'Platform', type: 'static', x: 620.5, y: 310.2, density: 1, width: 56.8, angle: -30 },
        { name: 'Basket', x: 676.1, y: 411.15 },
        { name: 'Cannon', x: 431.6, y: 349.8, lowerAngle: -46, upperAngle: 35 },
        { name: 'Switcher', x: 549.8, y: 443.1, angle: 0, type: 'button', color: 'Green', signalID: 2 },
        { name: 'Switcher', x: 612.45, y: 443.35, angle: 0, type: 'button', color: 'Red', signalID: 1 },
        {
          name: 'Pivot',
          x: 526.1,
          y: 166.85,
          type: 'gear',
          color: 'Red',
          gearMaxAngle: 65,
          gearPower: 10,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 1
        },
        { name: 'Platform', type: 'static', x: 710.1, y: 295.4, density: 1, width: 271.4, angle: 90 },
        { name: 'Platform', type: 'dynamic', x: 37.35, y: 230.45, density: 1, width: 72.5, angle: 0 },
        {
          name: 'Pivot',
          x: 10.75,
          y: 230.45,
          type: 'gear',
          color: 'Purple',
          gearMaxAngle: 45,
          gearPower: 6,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 3
        },
        { name: 'Platform', type: 'static', x: 86.15, y: 310.35, density: 1, width: 88.4, angle: 45 },
        { name: 'Platform', type: 'static', x: 203.9, y: 343.1, density: 1, width: 189.8, angle: 4 },
        { name: 'Platform', type: 'static', x: 65.2, y: 154.8, density: 1, width: 108.1, angle: 90 },
        { name: 'Platform', type: 'dynamic', x: 95.65, y: 38.9, density: 1, width: 84.7, angle: 30 },
        {
          name: 'Pivot',
          x: 65.95,
          y: 21.75,
          type: 'gear',
          color: 'Purple',
          gearMaxAngle: 90,
          gearPower: 6,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 3
        },
        { name: 'Switcher', x: 677.55, y: 258.35, angle: 0, type: 'button', color: 'Purple', signalID: 3 },
        { name: 'Platform', type: 'static', x: 580.4, y: 437.05, density: 1, width: 47.9, angle: 90 },
        { name: 'Rock', x: 478.85, y: 133.2, density: 0.1 },
        { name: 'Platform', type: 'static', x: 356.8, y: 386.75, density: 1, width: 125.5, angle: 90 },
        { name: 'Spring', x: 202.5, y: 279.2, angle: -20, type: 'static', elasticity: 2.5 },
        { name: 'Platform', type: 'static', x: 580.2, y: 452.45, density: 1, width: 142.6, angle: 0 },
        { name: 'Spring', x: 73.9, y: 163.4, angle: 105, type: 'static', elasticity: 1 },
        { name: 'Swings', x: 580.4, y: 398.75, angle: 20, lowerAngle: -20, upperAngle: 20 },
        { name: 'Platform', type: 'static', x: 544.9, y: 313.45, density: 1, width: 43.8, angle: 30 },
        { name: 'Platform', type: 'static', x: 621.65, y: 350.45, density: 1, width: 60.5, angle: 0 },
        { name: 'Platform', type: 'static', x: 538.95, y: 350.45, density: 1, width: 60, angle: 0 },
        { name: 'Platform', type: 'static', x: 676.65, y: 266.4, density: 1, width: 85.1, angle: 0 },
        { name: 'Platform', type: 'static', x: 233.5, y: 255.25, density: 1, width: 85.8, angle: 70 },
        { name: 'Platform', type: 'static', x: 158.3, y: 268.4, density: 1, width: 57.8, angle: 70 },
        { name: 'Platform', type: 'static', x: 339.2, y: 309.85, density: 1, width: 60.6, angle: 45 },
        { name: 'Platform', type: 'static', x: 289.8, y: 397.3, density: 1, width: 114.7, angle: 90 },
        { name: 'Star', x: 679.35, y: 353.15 },
        { name: 'Star', x: 393.1, y: 166 },
        { name: 'Star', x: 269, y: 260.85 },
        { name: 'Platform', type: 'static', x: 349.95, y: -29, density: 1, width: 263.7, angle: 0 },
        { name: 'Teleport', x: 323.1, y: 415.85, angle: 0, color: 'Red', id: 0, mulVel: 1 },
        { name: 'Teleport', x: 676.85, y: 310.6, angle: 180, color: 'Red', id: 0, mulVel: 1 },
        { name: 'Platform', type: 'static', x: 263.75, y: 114.2, density: 1, width: 245.8, angle: 23 },
        { name: 'Platform', type: 'dynamic', x: 687.6, y: 166.45, density: 1, width: 60, angle: 0 },
        {
          name: 'Pivot',
          x: 710.1,
          y: 166.85,
          type: 'gear',
          color: 'Green',
          gearMaxAngle: 90,
          gearPower: 10,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 2
        },
        { name: 'Platform', type: 'static', x: 159.1, y: 104.9, density: 1, width: 82.9, angle: 90 },
        { name: 'Platform', type: 'static', x: 265.5, y: 149.9, density: 1, width: 222.8, angle: 8 }
      ]
    }),
    (ft[24] = {
      items: [
        { name: 'Platform', type: 'static', x: 620.35, y: 225.1, density: 2, width: 18, angle: 0 },
        { name: 'Platform', type: 'static', x: 322, y: 273.4, density: 1, width: 18, angle: 0 },
        { name: 'Platform', type: 'static', x: 492.5, y: 411.1, density: 1, width: 70.7, angle: 0 },
        { name: 'Platform', type: 'static', x: 489.85, y: 371.1, density: 1, width: 65.7, angle: 0 },
        { name: 'Platform', type: 'static', x: 622.8, y: 411.1, density: 1, width: 74.6, angle: 0 },
        { name: 'Basket', x: 49.45, y: 392.45 },
        { name: 'Cannon', x: 318.35, y: 392.25, lowerAngle: -70, upperAngle: 70 },
        { name: 'Platform', type: 'static', x: 710, y: 226.5, density: 1, width: 268.9, angle: 90 },
        { name: 'Platform', type: 'static', x: 656.5, y: 356.4, density: 1, width: 49.2, angle: -45 },
        { name: 'Platform', type: 'static', x: 614.4, y: 317, density: 1, width: 58.2, angle: 0 },
        { name: 'Platform', type: 'static', x: 608.25, y: 260.6, density: 1, width: 46, angle: 0 },
        { name: 'Switcher', x: 623.55, y: 310.05, angle: 0, type: 'button', color: 'Yellow', signalID: 2 },
        { name: 'Box', x: 494, y: 287.3, angle: 0, density: 0.85 },
        { name: 'Switcher', x: 160, y: 334.55, angle: 90, type: 'toogle', color: 'Green', signalID: 1 },
        { name: 'Platform', type: 'dynamic', x: 236.6, y: 273.6, density: 1, width: 187, angle: 0 },
        { name: 'Platform', type: 'static', x: 88.35, y: 300.5, density: 1, width: 229.2, angle: 90 },
        { name: 'Platform', type: 'static', x: 11.3, y: 253.75, density: 1, width: 323.3, angle: 90 },
        { name: 'Platform', type: 'static', x: 152, y: 349.75, density: 1, width: 131.2, angle: 90 },
        { name: 'Switcher', x: 120.55, y: 398.45, angle: 0, type: 'button', color: 'Blue', signalID: 5 },
        { name: 'Spring', x: 620.9, y: 224.6, angle: 25, type: 'dynamic', elasticity: 3.2 },
        { name: 'Platform', type: 'static', x: 644, y: 163.9, density: 1, width: 65.8, angle: 25 },
        { name: 'Platform', type: 'static', x: 120.1, y: 406.45, density: 1, width: 81.8, angle: 0 },
        {
          name: 'Pivot',
          x: 621.1,
          y: 225.85,
          type: 'gear',
          color: 'Yellow',
          gearMaxAngle: -45,
          gearPower: -6,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 2
        },
        { name: 'Platform', type: 'static', x: 648, y: 240.55, density: 1, width: 64.8, angle: -45 },
        { name: 'Platform', type: 'static', x: 492.05, y: 319.05, density: 2, width: 20, angle: 0 },
        { name: 'Platform', type: 'static', x: 594.3, y: 288.85, density: 1, width: 74.3, angle: 90 },
        { name: 'Platform', type: 'static', x: 652.9, y: 304.2, density: 1, width: 44.4, angle: 135 },
        { name: 'Platform', type: 'dynamic', x: 594.45, y: 439.3, density: 1, width: 74.5, angle: -90 },
        {
          name: 'Pivot',
          x: 594.45,
          y: 411.1,
          type: 'gear',
          color: 'Blue',
          gearMaxAngle: 0,
          gearPower: 6,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 5
        },
        { name: 'Platform', type: 'static', x: 671.25, y: 314.35, density: 1, width: 64, angle: 90 },
        { name: 'Platform', type: 'static', x: 668.35, y: 196.6, density: 1, width: 54.4, angle: -90 },
        { name: 'Platform', type: 'static', x: 432.8, y: 418.05, density: 1, width: 55.3, angle: -15 },
        { name: 'Platform', type: 'static', x: 615.55, y: 371.1, density: 1, width: 60, angle: 0 },
        { name: 'Platform', type: 'static', x: 683.1, y: 384.25, density: 1, width: 83.9, angle: -45 },
        { name: 'Platform', type: 'static', x: 109.6, y: 187.1, density: 1, width: 57.8, angle: -15 },
        { name: 'Platform', type: 'static', x: 413.55, y: 383.1, density: 1, width: 95.2, angle: -15 },
        {
          name: 'Pivot',
          x: 322,
          y: 273.4,
          type: 'gear',
          color: 'Green',
          gearMaxAngle: 25,
          gearPower: 12,
          lowerAngle: 180,
          upperAngle: 0,
          signalID: 1
        },
        { name: 'Platform', type: 'static', x: 28.9, y: 358.2, density: 1, width: 41.5, angle: 45 },
        { name: 'Platform', type: 'static', x: 71.15, y: 315.7, density: 1, width: 41.5, angle: -45 },
        { name: 'Platform', type: 'static', x: 28.9, y: 273.2, density: 1, width: 41.5, angle: 45 },
        { name: 'Platform', type: 'static', x: 71.15, y: 230.7, density: 1, width: 41.5, angle: -45 },
        { name: 'Star', x: 606.35, y: 339.65 },
        { name: 'Star', x: 387.35, y: 417.7 },
        { name: 'Star', x: 112.9, y: 215.15 }
      ]
    }),
    (ft[25] = {
      items: [
        { name: 'Platform', type: 'static', x: 10.4, y: 307.25, density: 1, width: 269.1, angle: 90 },
        { name: 'Platform', type: 'static', x: 156.35, y: 371.6, density: 1, width: 112, angle: 0 },
        { name: 'Platform', type: 'static', x: 623.2, y: 419.75, density: 1, width: 18, angle: 0 },
        { name: 'Platform', type: 'static', x: 600, y: 37.3, density: 1, width: 18, angle: 0 },
        { name: 'Platform', type: 'static', x: 510, y: 38.5, density: 1, width: 18, angle: 0 },
        { name: 'Platform', type: 'static', x: 202.9, y: 172.75, density: 1, width: 406, angle: 0 },
        { name: 'Rock', x: 555, y: 35.5, density: 1 },
        { name: 'Cannon', x: 465.45, y: 196.4, lowerAngle: -52, upperAngle: 70 },
        { name: 'Basket', x: 85.4, y: 78.2 },
        { name: 'Teleport', x: 45.35, y: 400.25, angle: 0, color: 'Blue', id: 0, mulVel: 1.4 },
        { name: 'Switcher', x: 335.9, y: 21.55, angle: 180, type: 'toogle', color: 'Purple', signalID: 1 },
        { name: 'Teleport', x: 38.1, y: 57.3, angle: 90, color: 'Blue', id: 0, mulVel: 1.4 },
        { name: 'Platform', type: 'dynamic', x: 164.4, y: 107.95, density: 0.5, width: 151.3, angle: 109 },
        {
          name: 'Pivot',
          x: 141.8,
          y: 172.75,
          type: 'bolt',
          color: 'Red',
          gearMaxAngle: 0,
          gearPower: 1,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 0
        },
        { name: 'Platform', type: 'static', x: 298.65, y: 440.8, density: 1, width: 282.3, angle: 0 },
        { name: 'Switcher', x: 117.45, y: 421.6, angle: 90, type: 'toogle', color: 'Green', signalID: 3 },
        { name: 'Platform', type: 'static', x: 109.4, y: 402.15, density: 1, width: 79.1, angle: 90 },
        { name: 'Platform', type: 'static', x: 691.5, y: 88.15, density: 1, width: 51.9, angle: 47 },
        { name: 'Spring', x: 696.6, y: 95.1, angle: -132, type: 'static', elasticity: 3 },
        { name: 'Platform', type: 'static', x: 413.55, y: 196.7, density: 1, width: 61.7, angle: 60 },
        { name: 'Platform', type: 'static', x: 237.35, y: 13.6, density: 1, width: 475.1, angle: 0 },
        { name: 'Platform', type: 'static', x: 495, y: 218.15, density: 1, width: 33.7, angle: 0 },
        { name: 'Platform', type: 'static', x: 436.6, y: 218.95, density: 1, width: 31.4, angle: 0 },
        { name: 'Platform', type: 'static', x: 652.95, y: 75.8, density: 1, width: 58.2, angle: -43 },
        { name: 'Platform', type: 'static', x: 265.5, y: 29.5, density: 1, width: 49.9, angle: 90 },
        { name: 'Platform', type: 'static', x: 202.35, y: 141.15, density: 1, width: 81.4, angle: 90 },
        { name: 'Platform', type: 'dynamic', x: 585, y: 53.5, density: 1, width: 60, angle: -45 },
        { name: 'Platform', type: 'dynamic', x: 525, y: 53.5, density: 1, width: 60, angle: 45 },
        {
          name: 'Pivot',
          x: 510,
          y: 38.5,
          type: 'gear',
          color: 'Green',
          gearMaxAngle: 90,
          gearPower: 6,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 3
        },
        {
          name: 'Pivot',
          x: 600,
          y: 38.5,
          type: 'gear',
          color: 'Green',
          gearMaxAngle: -90,
          gearPower: -6,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 3
        },
        { name: 'Platform', type: 'dynamic', x: 621.7, y: 419.4, density: 1, width: 160.9, angle: 0 },
        {
          name: 'Pivot',
          x: 623.2,
          y: 419.75,
          type: 'bolt',
          color: 'Red',
          gearMaxAngle: 0,
          gearPower: 1,
          lowerAngle: -360,
          upperAngle: 0,
          signalID: 0
        },
        { name: 'Ball', x: 661.45, y: 400.45 },
        { name: 'Platform', type: 'static', x: 707.65, y: 330.5, density: 1, width: 235.9, angle: 86 },
        { name: 'Star', x: 229.7, y: 44.85 },
        { name: 'Star', x: 693.8, y: 44.85 },
        { name: 'Star', x: 464.65, y: 251.55 },
        { name: 'Platform', type: 'static', x: 651.1, y: 458.7, density: 1, width: 59.2, angle: 90 },
        { name: 'Platform', type: 'dynamic', x: 205.4, y: 304.9, density: 1, width: 146.1, angle: -90 },
        {
          name: 'Pivot',
          x: 204.4,
          y: 369.7,
          type: 'gear',
          color: 'Purple',
          gearMaxAngle: 0,
          gearPower: 6,
          lowerAngle: 180,
          upperAngle: 0,
          signalID: 1
        },
        { name: 'Platform', type: 'static', x: 92.25, y: 378.5, density: 1, width: 46, angle: -15 }
      ]
    }),
    (ft[26] = {
      items: [
        { name: 'Platform', type: 'static', x: 325, y: 237.5, density: 1, width: 18, angle: 0 },
        { name: 'Platform', type: 'static', x: 110.4, y: 258.95, density: 1, width: 255.7, angle: -5 },
        { name: 'Platform', type: 'static', x: 149.6, y: 443.75, density: 1, width: 178.3, angle: 0 },
        { name: 'Platform', type: 'static', x: 257, y: 274.3, density: 1, width: 82.5, angle: 135 },
        { name: 'Platform', type: 'static', x: 146.35, y: 161.3, density: 1, width: 91.3, angle: 8 },
        { name: 'Platform', type: 'static', x: 230, y: 358.15, density: 1, width: 189.2, angle: -90 },
        { name: 'Platform', type: 'static', x: 693.6, y: 358.25, density: 1, width: 76.6, angle: -100 },
        { name: 'Platform', type: 'dynamic', x: 659.65, y: 334.8, density: 1, width: 76.6, angle: -10 },
        { name: 'Platform', type: 'static', x: 669.85, y: 392.7, density: 1, width: 76.6, angle: -10 },
        { name: 'Platform', type: 'static', x: 359.85, y: 26.95, density: 1, width: 704.3, angle: 0 },
        { name: 'Platform', type: 'static', x: 29.25, y: 128.45, density: 1, width: 43.8, angle: 0 },
        { name: 'Platform', type: 'static', x: 499.45, y: 183.75, density: 1, width: 96.9, angle: 0 },
        { name: 'Basket', x: 504, y: 406 },
        { name: 'Cannon', x: 400, y: 413.65, lowerAngle: -70, upperAngle: 0 },
        { name: 'Spring', x: 325, y: 237.5, angle: 0, type: 'dynamic', elasticity: 2.5 },
        { name: 'Teleport', x: 300.75, y: 292.95, angle: 135, color: 'Blue', id: 1, mulVel: 1 },
        { name: 'Teleport', x: 60, y: 207.25, angle: 90, color: 'Blue', id: 1, mulVel: 1.2 },
        { name: 'Switcher', x: 78.5, y: 134.8, angle: 25, type: 'button', color: 'Purple', signalID: 1 },
        { name: 'Platform', type: 'static', x: 74.85, y: 140.95, density: 1, width: 65.3, angle: 25 },
        {
          name: 'Pivot',
          x: 325,
          y: 237.5,
          type: 'gear',
          color: 'Purple',
          gearMaxAngle: 45,
          gearPower: 6,
          lowerAngle: -90,
          upperAngle: 0,
          signalID: 1
        },
        { name: 'Platform', type: 'static', x: 460, y: 337.2, density: 1, width: 325.6, angle: 90 },
        { name: 'Spring', x: 661, y: 387.5, angle: -20, type: 'static', elasticity: 2.2 },
        { name: 'Switcher', x: 400, y: 35, angle: 180, type: 'toogle', color: 'Red', signalID: 3 },
        { name: 'Platform', type: 'static', x: 673.25, y: 156.55, density: 1, width: 95.6, angle: -45 },
        { name: 'Platform', type: 'static', x: 16.35, y: 123.95, density: 1, width: 209.7, angle: -90 },
        { name: 'Platform', type: 'static', x: 703.35, y: 73.25, density: 1, width: 108.3, angle: -90 },
        { name: 'Platform', type: 'static', x: 128.25, y: 392.9, density: 1, width: 119.7, angle: -90 },
        { name: 'Platform', type: 'dynamic', x: 250.75, y: 167.5, density: 0.1, width: 138.5, angle: 0 },
        {
          name: 'Pivot',
          x: 189.5,
          y: 167.5,
          type: 'bolt',
          color: 'Red',
          gearMaxAngle: 0,
          gearPower: 1,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 0
        },
        { name: 'Platform', type: 'dynamic', x: 230, y: 217, density: 2, width: 80, angle: -90 },
        {
          name: 'Pivot',
          x: 230,
          y: 247,
          type: 'bolt',
          color: 'Red',
          gearMaxAngle: 0,
          gearPower: 1,
          lowerAngle: -720,
          upperAngle: 720,
          signalID: 0
        },
        { name: 'Platform', type: 'dynamic', x: 169.6, y: 346.35, density: 0.4, width: 99, angle: 5 },
        { name: 'Ball', x: 209.3, y: 322.8 },
        {
          name: 'Pivot',
          x: 129.2,
          y: 342.75,
          type: 'gear',
          color: 'Red',
          gearMaxAngle: -15,
          gearPower: -10,
          lowerAngle: -720,
          upperAngle: 720,
          signalID: 3
        },
        { name: 'Switcher', x: 99.2, y: 435.75, angle: 0, type: 'button', color: 'Yellow', signalID: 2 },
        {
          name: 'Pivot',
          x: 688.7,
          y: 329.5,
          type: 'gear',
          color: 'Yellow',
          gearMaxAngle: 80,
          gearPower: 6,
          lowerAngle: -90,
          upperAngle: 0,
          signalID: 2
        },
        { name: 'Platform', type: 'static', x: 69.2, y: 363.7, density: 1, width: 178.2, angle: -90 },
        { name: 'Platform', type: 'static', x: 549, y: 416.2, density: 1, width: 167.5, angle: 90 },
        { name: 'Star', x: 638.95, y: 149.35 },
        { name: 'Star', x: 263.35, y: 444.7 },
        { name: 'Star', x: 95.85, y: 323.65 },
        { name: 'Platform', type: 'static', x: 573.9, y: 196.55, density: 1, width: 78.4, angle: 25 }
      ]
    }),
    (ft[27] = {
      items: [
        { name: 'Platform', type: 'static', x: 510, y: 266, density: 1, width: 18, angle: 0 },
        { name: 'Switcher', x: 512.5, y: 452.05, angle: 0, type: 'button', color: 'Green', signalID: 3 },
        { name: 'Switcher', x: 99.95, y: 263.95, angle: 0, type: 'button', color: 'Purple', signalID: 4 },
        { name: 'Platform', type: 'static', x: 268.05, y: 46.1, density: 1, width: 43.5, angle: -120 },
        { name: 'Platform', type: 'static', x: 400, y: 211.7, density: 1, width: 73.6, angle: -90 },
        { name: 'Platform', type: 'static', x: 334, y: 257.35, density: 1, width: 165.3, angle: -90 },
        { name: 'Platform', type: 'static', x: 383.55, y: 184, density: 1, width: 109.3, angle: 0 },
        { name: 'Platform', type: 'static', x: 577.65, y: 184, density: 1, width: 234.9, angle: 0 },
        { name: 'Cannon', x: 230, y: 410, lowerAngle: -70, upperAngle: 70 },
        { name: 'Platform', type: 'dynamic', x: 510, y: 266, density: 0.05, width: 193.9, angle: 10 },
        { name: 'Basket', x: 36.75, y: 375 },
        { name: 'Switcher', x: 651.75, y: 452.05, angle: 0, type: 'toogle', color: 'Yellow', signalID: 2 },
        { name: 'Platform', type: 'static', x: 620, y: 373.75, density: 1, width: 187.6, angle: -90 },
        { name: 'Platform', type: 'static', x: 400, y: 310, density: 1, width: 60, angle: -90 },
        { name: 'Platform', type: 'static', x: 687, y: 257, density: 1, width: 164, angle: -90 },
        { name: 'Platform', type: 'static', x: 469.1, y: 163, density: 1, width: 60, angle: -90 },
        { name: 'Platform', type: 'static', x: 429.05, y: 163, density: 1, width: 60, angle: -90 },
        { name: 'Platform', type: 'static', x: 483.35, y: 111.6, density: 1, width: 60, angle: -60 },
        { name: 'Platform', type: 'static', x: 407.1, y: 125.8, density: 1, width: 60, angle: 30 },
        { name: 'Platform', type: 'dynamic', x: 400, y: 254.1, density: 1, width: 41.7, angle: -90 },
        {
          name: 'Pivot',
          x: 400,
          y: 241.5,
          type: 'gear',
          color: 'Purple',
          gearMaxAngle: 0,
          gearPower: 6,
          lowerAngle: 180,
          upperAngle: 0,
          signalID: 4
        },
        { name: 'Platform', type: 'static', x: 471.6, y: 449.5, density: 1, width: 37, angle: -90 },
        { name: 'Box', x: 471.15, y: 409.1, angle: 0, density: 1.5 },
        { name: 'Box', x: 471.15, y: 363.1, angle: 0, density: 1.5 },
        { name: 'Platform', type: 'static', x: 137.45, y: 271, density: 1, width: 151, angle: 0 },
        { name: 'Platform', type: 'static', x: 70, y: 250.9, density: 1, width: 360.2, angle: -90 },
        { name: 'Platform', type: 'static', x: 101.45, y: 79.5, density: 1, width: 80, angle: 0 },
        { name: 'Platform', type: 'static', x: 567, y: 459, density: 1, width: 209.8, angle: 0 },
        { name: 'Platform', type: 'static', x: 130, y: 229.55, density: 1, width: 100, angle: -90 },
        { name: 'Spring', x: 260, y: 50, angle: -120, type: 'static', elasticity: 2 },
        { name: 'Platform', type: 'static', x: 148.55, y: 165.15, density: 1, width: 60, angle: -45 },
        { name: 'Platform', type: 'static', x: 620, y: 211.7, density: 1, width: 73.6, angle: -90 },
        { name: 'Platform', type: 'dynamic', x: 620, y: 253.9, density: 1, width: 41.7, angle: 90 },
        {
          name: 'Pivot',
          x: 620,
          y: 241.5,
          type: 'gear',
          color: 'Green',
          gearMaxAngle: 1,
          gearPower: -6,
          lowerAngle: -720,
          upperAngle: 720,
          signalID: 3
        },
        { name: 'Star', x: 589.6, y: 362.1 },
        { name: 'Star', x: 378.6, y: 155.6 },
        { name: 'Star', x: 163.7, y: 243.15 },
        { name: 'Teleport', x: 368, y: 303.8, angle: 0, color: 'Red', id: 1, mulVel: 1 },
        { name: 'Teleport', x: 654, y: 303.8, angle: 0, color: 'Blue', id: 2, mulVel: 1 },
        {
          name: 'Pivot',
          x: 510,
          y: 266,
          type: 'gear',
          color: 'Yellow',
          gearMaxAngle: -10,
          gearPower: -10,
          lowerAngle: 180,
          upperAngle: 0,
          signalID: 2
        },
        { name: 'Teleport', x: 36.75, y: 104.65, angle: 180, color: 'Red', id: 1, mulVel: 1 },
        { name: 'Teleport', x: 654.75, y: 376.2, angle: 180, color: 'Blue', id: 2, mulVel: 1 },
        { name: 'Platform', type: 'static', x: 2.05, y: 250.9, density: 1, width: 360.2, angle: -90 }
      ]
    }),
    (ft[28] = {
      items: [
        { name: 'Platform', type: 'static', x: 561.05, y: 436.4, density: 1, width: 18, angle: 0 },
        { name: 'Switcher', x: 463.75, y: 257.75, angle: -135, type: 'toogle', color: 'Green', signalID: 5 },
        { name: 'Platform', type: 'static', x: 419, y: 231.3, density: 1, width: 262.8, angle: 0 },
        { name: 'Platform', type: 'static', x: 466.5, y: 249.7, density: 1, width: 52, angle: 45 },
        { name: 'Platform', type: 'static', x: 398.65, y: 249.7, density: 1, width: 39.5, angle: -45 },
        { name: 'Platform', type: 'dynamic', x: 411.65, y: 278.9, density: 1, width: 77.4, angle: 45 },
        { name: 'Platform', type: 'static', x: 18.65, y: 61.05, density: 1, width: 42.8, angle: 0 },
        { name: 'Platform', type: 'static', x: 62.7, y: 291.75, density: 1, width: 144.6, angle: -14 },
        { name: 'Platform', type: 'dynamic', x: 31, y: 122.05, density: 1, width: 140, angle: 90 },
        { name: 'Basket', x: 621, y: 356.95 },
        { name: 'Cannon', x: 249.5, y: 391, lowerAngle: -70, upperAngle: 70 },
        { name: 'Teleport', x: 100, y: 210, angle: 0, color: 'Red', id: 1, mulVel: 1.3 },
        {
          name: 'Pivot',
          x: 30.95,
          y: 60.6,
          type: 'gear',
          color: 'Purple',
          gearMaxAngle: 45,
          gearPower: -10,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 1
        },
        { name: 'Switcher', x: 151.15, y: 267.8, angle: 135, type: 'toogle', color: 'Purple', signalID: 1 },
        { name: 'Platform', type: 'static', x: 457.55, y: 77.65, density: 1, width: 376.1, angle: 0 },
        { name: 'Spring', x: 159.9, y: 103.9, angle: 45, type: 'static', elasticity: 1.4 },
        { name: 'Teleport', x: 538.85, y: 340.85, angle: -90, color: 'Red', id: 1, mulVel: 1 },
        { name: 'Platform', type: 'static', x: 552.5, y: 373.4, density: 1, width: 80.8, angle: 0 },
        { name: 'Switcher', x: 576.9, y: 202.15, angle: -90, type: 'toogle', color: 'Blue', signalID: 7 },
        { name: 'Platform', type: 'dynamic', x: 296.55, y: 189.95, density: 1, width: 100.8, angle: 90 },
        {
          name: 'Pivot',
          x: 296.55,
          y: 231.3,
          type: 'gear',
          color: 'Yellow',
          gearMaxAngle: 0,
          gearPower: -6,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 6
        },
        { name: 'Spring', x: 561.05, y: 436.4, angle: 180, type: 'dynamic', elasticity: 2 },
        { name: 'Switcher', x: 213.2, y: 436.4, angle: 90, type: 'toogle', color: 'Red', signalID: 4 },
        {
          name: 'Pivot',
          x: 390.55,
          y: 257.8,
          type: 'gear',
          color: 'Red',
          gearMaxAngle: 180,
          gearPower: 6,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 4
        },
        { name: 'Platform', type: 'static', x: 162.55, y: 245.8, density: 1, width: 91.6, angle: -45 },
        { name: 'Platform', type: 'static', x: 159.8, y: 190.9, density: 1, width: 99.5, angle: 45 },
        { name: 'Platform', type: 'static', x: 709.7, y: 240.15, density: 1, width: 342.5, angle: 90 },
        { name: 'Platform', type: 'static', x: 583.85, y: 272.85, density: 1, width: 268, angle: 90 },
        {
          name: 'Pivot',
          x: 561.05,
          y: 436.4,
          type: 'gear',
          color: 'Blue',
          gearMaxAngle: 270,
          gearPower: 6,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 7
        },
        { name: 'Platform', type: 'static', x: 6.5, y: 122.05, density: 1, width: 140, angle: 90 },
        { name: 'Platform', type: 'static', x: 299.2, y: 464.85, density: 1, width: 206.2, angle: 0 },
        { name: 'Platform', type: 'static', x: 205.05, y: 435.85, density: 1, width: 76.1, angle: 90 },
        { name: 'Platform', type: 'static', x: 299.15, y: 406.6, density: 1, width: 206.2, angle: 0 },
        { name: 'Platform', type: 'static', x: 636.55, y: 112.8, density: 1, width: 87.9, angle: 90 },
        { name: 'Platform', type: 'static', x: 610.15, y: 147.8, density: 1, width: 70.5, angle: 0 },
        { name: 'Platform', type: 'static', x: 296.55, y: 103.7, density: 1, width: 69, angle: 90 },
        { name: 'Platform', type: 'static', x: 679.55, y: 162.75, density: 1, width: 77, angle: -45 },
        { name: 'Platform', type: 'static', x: 679.55, y: 244.75, density: 1, width: 77, angle: -45 },
        { name: 'Platform', type: 'static', x: 613.15, y: 203.75, density: 1, width: 77, angle: 45 },
        { name: 'Platform', type: 'static', x: 679.55, y: 326.75, density: 1, width: 77, angle: -45 },
        { name: 'Platform', type: 'static', x: 613.15, y: 285.75, density: 1, width: 77, angle: 45 },
        { name: 'Platform', type: 'static', x: 684.05, y: 402.35, density: 1, width: 71.9, angle: 0 },
        { name: 'Star', x: 365.55, y: 254.7 },
        { name: 'Star', x: 35.35, y: 431.75 },
        { name: 'Star', x: 553.2, y: 296.45 },
        { name: 'Platform', type: 'dynamic', x: 682.8, y: 77.8, density: 1, width: 70.5, angle: 0 },
        {
          name: 'Pivot',
          x: 708.9,
          y: 77.4,
          type: 'gear',
          color: 'Green',
          gearMaxAngle: 90,
          gearPower: 6,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 5
        },
        { name: 'Switcher', x: 101.8, y: 290.1, angle: 166, type: 'toogle', color: 'Yellow', signalID: 6 }
      ]
    }),
    (ft[29] = {
      items: [
        { name: 'Platform', type: 'static', x: 705, y: 366.3, density: 1, width: 87.1, angle: -90 },
        { name: 'Platform', type: 'static', x: 30, y: 410, density: 1, width: 18, angle: 0 },
        { name: 'Platform', type: 'static', x: 200, y: 306, density: 1, width: 18, angle: 0 },
        { name: 'Platform', type: 'static', x: 199, y: 171, density: 1, width: 18, angle: 0 },
        { name: 'Platform', type: 'static', x: 30, y: 157, density: 1, width: 18, angle: 0 },
        { name: 'Switcher', x: 453.35, y: 408.45, angle: 30, type: 'toogle', color: 'Yellow', signalID: 3 },
        { name: 'Switcher', x: 313.85, y: 192.2, angle: 135, type: 'toogle', color: 'Blue', signalID: 1 },
        { name: 'Switcher', x: 184.65, y: 63.45, angle: 10, type: 'button', color: 'Purple', signalID: 2 },
        { name: 'Platform', type: 'static', x: 610, y: 25, density: 1, width: 50, angle: -90 },
        { name: 'Platform', type: 'static', x: 573.05, y: 216.45, density: 1, width: 84, angle: -24 },
        { name: 'Platform', type: 'static', x: 466.85, y: 216.45, density: 1, width: 84.1, angle: 24 },
        { name: 'Platform', type: 'static', x: 452.1, y: 417.5, density: 1, width: 61.5, angle: 30 },
        { name: 'Platform', type: 'static', x: 307.15, y: 187.25, density: 1, width: 47.8, angle: -45 },
        { name: 'Platform', type: 'static', x: 273.75, y: 150, density: 1, width: 47.8, angle: -30 },
        { name: 'Platform', type: 'static', x: 273.75, y: 250, density: 1, width: 47.8, angle: -30 },
        { name: 'Platform', type: 'static', x: 273.75, y: 350, density: 1, width: 47.8, angle: -30 },
        { name: 'Platform', type: 'static', x: 237.25, y: 200, density: 1, width: 47.8, angle: 30 },
        { name: 'Platform', type: 'static', x: 237.75, y: 300, density: 1, width: 47.8, angle: 30 },
        { name: 'Basket', x: 660, y: 350 },
        { name: 'Cannon', x: 365, y: 350, lowerAngle: -40, upperAngle: 40 },
        { name: 'Platform', type: 'static', x: 430, y: 266.4, density: 1, width: 287.1, angle: -90 },
        { name: 'Platform', type: 'static', x: 220, y: 175, density: 1, width: 350, angle: -90 },
        { name: 'Platform', type: 'static', x: 360, y: 25, density: 1, width: 50, angle: -90 },
        { name: 'Platform', type: 'dynamic', x: 392.7, y: 78.75, density: 1, width: 100, angle: 45 },
        { name: 'Platform', type: 'static', x: 290, y: 236.5, density: 1, width: 227, angle: -90 },
        {
          name: 'Pivot',
          x: 360,
          y: 44,
          type: 'gear',
          color: 'Purple',
          gearMaxAngle: 135,
          gearPower: 6,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 2
        },
        { name: 'Spring', x: 235, y: 430, angle: -45, type: 'static', elasticity: 1.7 },
        { name: 'Spring', x: 30, y: 410, angle: 0, type: 'dynamic', elasticity: 2.05 },
        { name: 'Platform', type: 'static', x: 242.25, y: 435, density: 1, width: 47.8, angle: -45 },
        {
          name: 'Pivot',
          x: 30,
          y: 410,
          type: 'gear',
          color: 'Blue',
          gearMaxAngle: 30,
          gearPower: 10,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 1
        },
        { name: 'Spring', x: 200, y: 305, angle: -45, type: 'dynamic', elasticity: 2 },
        {
          name: 'Pivot',
          x: 200,
          y: 305,
          type: 'gear',
          color: 'Blue',
          gearMaxAngle: -70,
          gearPower: -10,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 1
        },
        { name: 'Spring', x: 30, y: 235, angle: 45, type: 'static', elasticity: 2 },
        { name: 'Spring', x: 200, y: 170, angle: -30, type: 'dynamic', elasticity: 1.8 },
        {
          name: 'Pivot',
          x: 200,
          y: 170,
          type: 'gear',
          color: 'Blue',
          gearMaxAngle: -60,
          gearPower: -10,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 1
        },
        { name: 'Spring', x: 30, y: 155, angle: 0, type: 'dynamic', elasticity: 2 },
        {
          name: 'Pivot',
          x: 30,
          y: 155,
          type: 'gear',
          color: 'Blue',
          gearMaxAngle: 30,
          gearPower: 10,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 1
        },
        { name: 'Platform', type: 'static', x: 193.25, y: 73, density: 1, width: 68, angle: 10 },
        { name: 'Platform', type: 'static', x: 25.4, y: 243, density: 1, width: 47.8, angle: 45 },
        { name: 'Platform', type: 'static', x: 520, y: 370.75, density: 1, width: 78.5, angle: -90 },
        { name: 'Swings', x: 520, y: 315, angle: -20, lowerAngle: -20, upperAngle: 20 },
        { name: 'Platform', type: 'static', x: 540, y: 250, density: 1, width: 50, angle: -90 },
        { name: 'Platform', type: 'static', x: 500, y: 250, density: 1, width: 50, angle: -90 },
        { name: 'Platform', type: 'static', x: 588.1, y: 417.5, density: 1, width: 61.5, angle: -30 },
        { name: 'Switcher', x: 588.6, y: 407.2, angle: -30, type: 'toogle', color: 'Red', signalID: 4 },
        { name: 'Platform', type: 'static', x: 610, y: 266.4, density: 1, width: 287.1, angle: -90 },
        { name: 'Platform', type: 'dynamic', x: 610, y: 77.15, density: 1, width: 85.7, angle: -90 },
        {
          name: 'Pivot',
          x: 610,
          y: 42.25,
          type: 'gear',
          color: 'Yellow',
          gearMaxAngle: 0,
          gearPower: 6,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 3
        },
        { name: 'Spring', x: 467.5, y: 207.15, angle: 24, type: 'static', elasticity: 2 },
        { name: 'Platform', type: 'static', x: 705, y: 117.45, density: 1, width: 234.8, angle: -90 },
        { name: 'Star', x: 48.5, y: 278.75 },
        { name: 'Star', x: 393.35, y: 17.6 },
        { name: 'Star', x: 588.6, y: 152.1 },
        { name: 'Platform', type: 'dynamic', x: 671.15, y: 330.5, density: 1, width: 85.7, angle: 0 },
        {
          name: 'Pivot',
          x: 705.2,
          y: 330.05,
          type: 'gear',
          color: 'Yellow',
          gearMaxAngle: 90,
          gearPower: 10,
          lowerAngle: -360,
          upperAngle: 360,
          signalID: 4
        }
      ]
    }),
    (J.prototype = Object.create(PIXI.Container.prototype)),
    (J.prototype.constructor = J),
    (J.prototype.run = function (t, e) {
      t && this.once('onMiddle', t, e || this)
      var a = this
      this.show(function () {
        TweenMax.delayedCall(
          0.1,
          function () {
            a.emit('onMiddle'), TweenMax.delayedCall(0.1, this.hide, null, this)
          },
          null,
          this
        )
      }, this)
    }),
    (J.prototype.show = function (t, e) {
      t && this.once('showComplete', t, e || this)
      var a = this
      TweenMax.to(this, 0.4, {
        alpha: 1,
        onComplete: function () {
          a.emit('showComplete')
        }
      })
    }),
    (J.prototype.hide = function (t, e) {
      t && this.once('hideComplete', t, e || this)
      var a = this
      TweenMax.to(this, 0.4, {
        alpha: 0,
        onComplete: function () {
          a.emit('hideComplete')
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
            parent.cmgGameEvent('start')
          } catch (t) {}
          break
        case 'BackLevels':
          this._menuDialog.show(e), this._levelsDialog.hide(e)
          break
        case 'Credits':
          break
        case 'BackCredits':
          this._menuDialog.show(e), this._creditsDialog.hide(e)
          break
        case 'Music':
          Pt.setMusicEnable(t.isOn)
          break
        case 'Sound':
          Pt.setSoundEnable(t.isOn)
      }
      Pt.soundOn && this.sndButton.play()
    }),
    (K.prototype._onBtnsLevelClick = function (t) {
      ;(Pt.levelMng.currLevel = t),
        Pt.shutter.run(function () {
          this.destroy({ children: !0 }), (Pt.menuState = null), new Z()
        }, this),
        Pt.soundOn && this.sndButton.play()
      try {
        parent.cmgGameEvent('start', t)
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
        Pt.levelMng.onLevelComplete())
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
        (t.x = Pt.gameWidth0 - t.width / 2 - 5),
        (t.y = t.height + 5),
        this.uiLayer.addChild(t)
      var a = e.generateButton('btnRestartGame', 'atlasUI', this._onBtnsClick, this)
      if (
        ((a.name = 'Restart'),
        a.scale.set(0.5, 0.5),
        a.anchor.set(0.5, 1),
        (a.x = t.x - t.width / 2 - a.width / 2 - 5),
        (a.y = t.y),
        this.uiLayer.addChild(a),
        this.aimControl)
      ) {
        var n = e.generateButton('btnFire', 'atlasUI', this._onBtnsClick, this)
        ;(n.name = 'Fire'),
          n.scale.set(0.5, 0.5),
          n.anchor.set(0.5, 0.5),
          (n.x = 36),
          (n.y = Pt.gameHeight0 - 36),
          this.uiLayer.addChild(n),
          (this.btnFire = n),
          (this._btnFireBlinked = !1),
          (this._blinker = Pt.assets.getSprite('btnFireBlink')),
          this._blinker.scale.set(0.5, 0.5),
          this._blinker.anchor.set(0.5, 0.5),
          (this._blinker.x = n.x),
          (this._blinker.y = n.y),
          (this._blinker.visible = !1),
          this.addChild(this._blinker)
      }
      var i = new PIXI.TextStyle({
        fontFamily: 'CroMagnum',
        fontSize: 42,
        fill: '#D74A1D',
        stroke: '#4D1604',
        strokeThickness: 8,
        align: 'center',
        lineHeight: 42
      })
      ;(this._txtLevel = new PIXI.Text('Level: ' + Pt.levelMng.currLevel, i)),
        (this._txtLevel.x = 5),
        (this._txtLevel.y = 5),
        this._txtLevel.scale.set(0.5, 0.5),
        this.uiLayer.addChild(this._txtLevel)
      var s = Pt.assets.getSprite('toolbarStarPlace', 'atlasUI')
      s.anchor.set(0.5, 0.5),
        s.scale.set(0.5, 0.5),
        (s.x = Pt.gameWidth0 - s.width / 2 - 10),
        (s.y = Pt.gameHeight0 - s.height / 2 - 5),
        (s.empty = !0),
        this.addChild(s)
      var o = Pt.assets.getSprite('toolbarStarPlace', 'atlasUI')
      o.anchor.set(0.5, 0.5),
        o.scale.set(0.5, 0.5),
        (o.x = s.x - s.width / 2 - o.width / 2 - 5),
        (o.y = s.y),
        (o.empty = !0),
        this.addChild(o)
      var r = Pt.assets.getSprite('toolbarStarPlace', 'atlasUI')
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
        var a = Pt.assets.getSprite('toolbarStar', 'atlasUI')
        a.anchor.set(0.5, 0.5),
          a.scale.set(0.5, 0.5),
          (a.x = t.x),
          (a.y = t.y),
          (a.alpha = 0),
          this.addChildAt(a, this.getChildIndex(t) + 1),
          TweenMax.to(a, 1, { alpha: 1 }),
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
          Pt.shutter.run(function () {
            this.destroy({ children: !0 }), (Pt.playState = null), new K()
          }, this)
          break
        case 'Restart':
          Pt.shutter.run(function () {
            try {
              parent.cmgGameEvent('replay', Pt.levelMng.currLevel)
            } catch (t) {}
            ;(Pt.playState.isDestroying = !0), this.destroy({ children: !0 }), (Pt.playState = null), new Z()
          }, this)
          break
        case 'Next':
          Pt.shutter.run(function () {
            Pt.levelMng.currLevel++
            try {
              parent.cmgGameEvent('start', Pt.levelMng.currLevel)
            } catch (t) {}
            ;(Pt.playState.isDestroying = !0), this.destroy({ children: !0 }), (Pt.playState = null), new Z()
          }, this)
          break
        case 'Fire':
          if (this._isComplete) return
          this.shotHandler.call(t), this.stopBlinkBtnFire()
      }
      Pt.soundOn && this.sndButton.play()
    })
  var Pt = {
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
  ;(t.App = Pt),
    (t.trace = console.log),
    q(),
    (Pt.mainTheme = null),
    (Pt._checkAudio = function () {
      Pt.audioEnabled
        ? (void 0 != Pt.storage.get(Pt.SAVE_KEY_MUSIC) && (Pt.musicOn = 'true' == Pt.storage.get(Pt.SAVE_KEY_MUSIC)),
          void 0 != Pt.storage.get(Pt.SAVE_KEY_SOUND) && (Pt.soundOn = 'true' == Pt.storage.get(Pt.SAVE_KEY_SOUND)),
          (Pt.mainTheme = Pt.assets.getSound('sndTheme')),
          (Pt.mainTheme.loop = !0),
          (Pt.mainTheme.volume = 0.3),
          Pt.musicOn && Pt.mainTheme.play(),
          Pt.browserEvents.on('onPageShow', function (t) {
            PIXI.sound.resumeAll()
          }),
          Pt.browserEvents.on('onPageHide', function (t) {
            PIXI.sound.pauseAll()
          }),
          Pt.browserEvents.on('onFocusGet', function (t) {
            PIXI.sound.resumeAll()
          }),
          Pt.browserEvents.on('onFocusLost', function (t) {
            PIXI.sound.pauseAll()
          }))
        : ((Pt.musicOn = !1), (Pt.soundOn = !1))
    }),
    (Pt.setMusicEnable = function (t) {
      Pt.audioEnabled !== !1 &&
        ((Pt.musicOn = t),
        Pt.musicOn
          ? Pt.mainTheme.isPlaying || (Pt.mainTheme.resume(), Pt.mainTheme.isPlaying || Pt.mainTheme.play())
          : Pt.mainTheme.isPlaying && Pt.mainTheme.pause(),
        Pt.storage.set(Pt.SAVE_KEY_MUSIC, Pt.musicOn))
    }),
    (Pt.switchMusicEnable = function () {
      Pt.setMusicEnable(!Pt.musicOn)
    }),
    (Pt.setSoundEnable = function (t) {
      Pt.audioEnabled !== !1 && ((Pt.soundOn = t), Pt.storage.set(Pt.SAVE_KEY_SOUND, Pt.soundOn))
    }),
    (Pt.switchSoundEnable = function () {
      Pt.setSoundEnable(!Pt.soundOn)
    }),
    (t.unlockAllLevels = function () {
      Pt.levelMng && Pt.levelMng.unlockAllLevels(), Pt.menuState && Pt.menuState._levelsDialog.refresh()
    }),
    (parent.unlockAllLevels = t.unlockAllLevels)
})(window)
