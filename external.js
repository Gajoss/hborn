const _0x25e8e4 = _0x3c30;
(function (_0x7b5301, _0x2a08a7) {
  const _0x4897a1 = _0x3c30, _0x2be755 = _0x7b5301();
  while (true) {
    try {
      const _0x442ec4 = parseInt(_0x4897a1(436)) / 1 + -parseInt(_0x4897a1(386)) / 2 + -parseInt(_0x4897a1(522)) / 3 * (parseInt(_0x4897a1(460)) / 4) + parseInt(_0x4897a1(418)) / 5 + -parseInt(_0x4897a1(506)) / 6 * (parseInt(_0x4897a1(486)) / 7) + parseInt(_0x4897a1(512)) / 8 + -parseInt(_0x4897a1(509)) / 9 * (parseInt(_0x4897a1(520)) / 10);
      if (_0x442ec4 === _0x2a08a7) break; else _0x2be755.push(_0x2be755.shift());
    } catch (_0x4d416f) {
      _0x2be755.push(_0x2be755.shift());
    }
  }
}(_0x2aa6, 772624), Object.assign(BOT, {stop: true, last_location: 0}), BOT[_0x25e8e4(477)] = new EasyStar.js, BOT.finder.setAcceptableTiles([1]), BOT[_0x25e8e4(447)] = _0x384b0b => GAME[_0x25e8e4(456)][_0x25e8e4(447)]("ga", _0x384b0b), GAME[_0x25e8e4(445)] = _0x4af907 => {
  const _0x12b9e1 = _0x25e8e4;
  BOT[_0x12b9e1(447)]({a: 21, bid: _0x4af907.attr("data-bid")}), _0x4af907[_0x12b9e1(361)]();
}, GAME[_0x25e8e4(428)] = () => {
  const _0x4e1cdc = _0x25e8e4;
  GAME.quest_action && GAME[_0x4e1cdc(478)] < GAME[_0x4e1cdc(504)] && BOT.emit({a: 22, type: 7, id: GAME[_0x4e1cdc(366)], cnt: GAME[_0x4e1cdc(504)]});
}, BOT[_0x25e8e4(417)] = () => {
  const _0x310a23 = _0x25e8e4;
  BOT[_0x310a23(362)] != GAME.char_data[_0x310a23(446)] && (!GAME[_0x310a23(503)] ? BOT[_0x310a23(401)]() : false, BOT[_0x310a23(362)] = parseInt(GAME[_0x310a23(415)].loc), BOT[_0x310a23(359)](), BOT[_0x310a23(527)] = BOT[_0x310a23(395)](BOT[_0x310a23(362)])), BOT[_0x310a23(467)] = Date[_0x310a23(435)](), BOT[_0x310a23(480)] = BOT.location.steps[_0x310a23(408)](), BOT[_0x310a23(480)][0][0] == GAME[_0x310a23(415)].x && BOT[_0x310a23(480)][0][1] == GAME[_0x310a23(415)].y && BOT[_0x310a23(480)][_0x310a23(466)](), setTimeout(() => {
    BOT.Go();
  }, 1e3);
}, BOT.SetMapcell = () => {
  const _0x487072 = _0x25e8e4;
  Object[_0x487072(514)](GAME, _0x487072(503), {get: () => {
    const _0x45a6de = _0x487072;
    return GAME[Object[_0x45a6de(511)](GAME)[_0x45a6de(364)](_0x5520ee => GAME[_0x5520ee] && GAME[_0x5520ee]["1_1"])];
  }});
}, BOT[_0x25e8e4(395)] = _0x1fc3e9 => {
  const _0x53d876 = _0x25e8e4;
  let _0x44802a = BOT[_0x53d876(379)].filter("id" ? _0x547303 => _0x547303.id === _0x1fc3e9 : _0x35a7d4 => Object.keys(_0x35a7d4)[_0x53d876(399)](_0x1b8628 => _0x35a7d4[_0x1b8628] === _0x1fc3e9))[0];
  return _0x44802a && !_0x44802a.x && (_0x44802a.x = _0x44802a[_0x53d876(389)][0][0], _0x44802a.y = _0x44802a[_0x53d876(389)][0][1]), $(".BOT_mapper").fadeOut(), !_0x44802a ? BOT[_0x53d876(377)]() : _0x44802a;
}, BOT[_0x25e8e4(359)] = () => {
  const _0x3c8e96 = _0x25e8e4;
  BOT[_0x3c8e96(430)] = [];
  for (let _0x574ac3 = 0; _0x574ac3 < GAME.map[_0x3c8e96(422)]; _0x574ac3++) {
    BOT.matrix[_0x574ac3] = [];
    for (let _0x41f2dc = 0; _0x41f2dc < GAME[_0x3c8e96(483)][_0x3c8e96(526)]; _0x41f2dc++) {
      BOT[_0x3c8e96(430)][_0x574ac3][_0x41f2dc] = GAME[_0x3c8e96(503)][_0x41f2dc + 1 + "_" + (_0x574ac3 + 1)].m == 1 ? 1 : 0;
    }
  }
  BOT.finder[_0x3c8e96(452)](BOT[_0x3c8e96(430)]);
}, BOT[_0x25e8e4(377)] = () => {
  const _0x227e9b = _0x25e8e4;
  let _0x4d522d = [], _0x4710d8 = false, _0x4d8ad4 = false;
  for (y = 0; y < BOT[_0x227e9b(430)].length; y++) {
    if (BOT[_0x227e9b(430)][y][_0x227e9b(482)](1)) {
      if (!_0x4d8ad4) {
        for (x = 0; x < BOT[_0x227e9b(430)][y][_0x227e9b(437)]; x++) {
          BOT[_0x227e9b(430)][y][x] === 1 && (!_0x4710d8 ? _0x4710d8 = [x + 1, y + 1] : false, _0x4d522d[_0x227e9b(497)]([x + 1, y + 1]));
        }
        _0x4d8ad4 = true;
      } else {
        for (x = BOT.matrix[y][_0x227e9b(437)]; x > 0; x--) {
          BOT[_0x227e9b(430)][y][x - 1] === 1 && (!_0x4710d8 ? _0x4710d8 = [x, y + 1] : false, _0x4d522d[_0x227e9b(497)]([x, y + 1]));
        }
        _0x4d8ad4 = false;
      }
    }
  }
  return _0x4d522d[_0x227e9b(497)](_0x4710d8), $(_0x227e9b(424))[_0x227e9b(432)](), {x: _0x4710d8[0], y: _0x4710d8[1], steps: _0x4d522d};
}, BOT[_0x25e8e4(423)] = (_0x615a64, _0x423ccb) => {
  const _0x4e8bfd = _0x25e8e4;
  let _0xaeabed = 1e3;
  if (BOT[_0x4e8bfd(474)][_0x4e8bfd(391)]) {
    let _0x4a87ff = 262e3, _0x1ce8ac = _0x4a87ff - (_0x423ccb - _0x615a64);
    _0xaeabed = _0x1ce8ac < 0 ? 1e3 : _0x1ce8ac, $(".BOT_box .cooldown")[_0x4e8bfd(409)](GAME[_0x4e8bfd(465)](_0xaeabed / 1e3))[_0x4e8bfd(500)]();
  }
  return _0xaeabed;
}, BOT.Go = () => {
  const _0x20860 = _0x25e8e4;
  if (BOT.moveSteps[_0x20860(437)] > 0) BOT[_0x20860(477)][_0x20860(384)](GAME[_0x20860(415)].x - 1, GAME[_0x20860(415)].y - 1, BOT[_0x20860(480)][0][0] - 1, BOT.moveSteps[0][1] - 1, _0x54847d => {
    const _0x53685a = _0x20860;
    _0x54847d === null ? console[_0x53685a(485)](_0x53685a(397)) : (BOT.path = _0x54847d, BOT[_0x53685a(480)].length > 0 && (BOT[_0x53685a(370)][_0x53685a(466)](), BOT[_0x53685a(454)]()));
  }), BOT.finder.calculate(); else GAME[_0x20860(415)].x == BOT[_0x20860(527)].steps[0][0] && GAME[_0x20860(415)].y == BOT[_0x20860(527)][_0x20860(389)][0][1] && (BOT[_0x20860(510)] = setTimeout(() => {
    const _0x4fbc06 = _0x20860;
    BOT[_0x4fbc06(417)](), $(_0x4fbc06(420))[_0x4fbc06(517)]();
  }, BOT.GetCooldown(BOT[_0x20860(467)], Date[_0x20860(435)]())));
}, BOT[_0x25e8e4(454)] = () => {
  const _0x4c9db3 = _0x25e8e4;
  if (!BOT.stop) {
    if (BOT[_0x4c9db3(492)].use && GAME[_0x4c9db3(415)].pr <= BOT[_0x4c9db3(474)][_0x4c9db3(442)]) setTimeout(() => {
      const _0x134aa8 = _0x4c9db3;
      BOT[_0x134aa8(487)]();
    }, 1e3); else {
      if (BOT[_0x4c9db3(518)][_0x4c9db3(524)] && $(_0x4c9db3(476))[_0x4c9db3(473)](_0x4c9db3(475)) === _0x4c9db3(378)) setTimeout(() => {
        BOT.UseSub();
      }, 1e3); else {
        if ($(_0x4c9db3(403))[_0x4c9db3(363)]() == _0x4c9db3(407)) setTimeout(() => {
          const _0x58f0c2 = _0x4c9db3;
          BOT[_0x58f0c2(371)]();
        }, 1e3), console[_0x4c9db3(485)](_0x4c9db3(383)); else BOT[_0x4c9db3(474)][_0x4c9db3(421)] && $(_0x4c9db3(388))[_0x4c9db3(473)](_0x4c9db3(475)) === _0x4c9db3(378) ? setTimeout(() => {
          const _0x1560d1 = _0x4c9db3;
          BOT[_0x1560d1(453)]();
        }, 3e3) : setTimeout(() => {
          const _0x40684f = _0x4c9db3;
          if (BOT.path[0].x > GAME[_0x40684f(415)].x - 1 && BOT[_0x40684f(370)][0].y == GAME.char_data.y - 1) BOT[_0x40684f(447)]({a: 4, dir: 7, vo: GAME.map_options.vo}); else {
            if (BOT[_0x40684f(370)][0].x < GAME.char_data.x - 1 && BOT.path[0].y == GAME[_0x40684f(415)].y - 1) BOT[_0x40684f(447)]({a: 4, dir: 8, vo: GAME[_0x40684f(426)].vo}); else {
              if (BOT.path[0].x == GAME[_0x40684f(415)].x - 1 && BOT[_0x40684f(370)][0].y > GAME[_0x40684f(415)].y - 1) BOT[_0x40684f(447)]({a: 4, dir: 1, vo: GAME[_0x40684f(426)].vo}); else BOT[_0x40684f(370)][0].x == GAME.char_data.x - 1 && BOT.path[0].y < GAME[_0x40684f(415)].y - 1 ? BOT[_0x40684f(447)]({a: 4, dir: 2, vo: GAME[_0x40684f(426)].vo}) : BOT.Go();
            }
          }
        }, 100);
      }
    }
  }
}, BOT[_0x25e8e4(502)] = () => {
  const _0x24e17a = _0x25e8e4;
  BOT[_0x24e17a(370)][_0x24e17a(437)] - 1 > 0 ? (BOT[_0x24e17a(370)][_0x24e17a(466)](), BOT.Move()) : BOT[_0x24e17a(480)][_0x24e17a(437)] > 0 && (BOT.moveSteps[_0x24e17a(466)](), BOT.Go());
}, BOT[_0x25e8e4(451)] = () => {
  const _0x356a8f = _0x25e8e4;
  if (GAME[_0x356a8f(415)].level_lock) $(".BOT_real_lvl_box")[_0x356a8f(500)](); else $(_0x356a8f(440))[_0x356a8f(517)]();
  $(_0x356a8f(372))[_0x356a8f(409)]("" + GAME[_0x356a8f(405)](GAME[_0x356a8f(415)][_0x356a8f(410)]) + GAME[_0x356a8f(449)]());
}, BOT[_0x25e8e4(438)] = (_0x415322 = false) => {
  const _0x29a2fb = _0x25e8e4;
  let _0x455d01 = 0;
  for (i in GAME[_0x29a2fb(426)].ma) {
    GAME[_0x29a2fb(426)].ma[i] == 1 && (_0x455d01 += parseInt(GAME[_0x29a2fb(412)][0][_0x29a2fb(516)][i]));
  }
  return _0x455d01 += _0x415322 ? parseInt(GAME[_0x29a2fb(412)][0].ranks[5]) : 0, _0x455d01;
}, BOT[_0x25e8e4(441)] = () => {
  const _0x7c2b1f = _0x25e8e4;
  if (BOT[_0x7c2b1f(474)][_0x7c2b1f(450)]) {
    if (BOT[_0x7c2b1f(438)]() > 0 && GAME[_0x7c2b1f(376)][0] < 2) BOT[_0x7c2b1f(447)]({a: 7, order: 2, quick: 1, fo: GAME[_0x7c2b1f(426)].ma}); else {
      if (GAME.field_mf[0] < 3 && GAME[_0x7c2b1f(426)].ma[3] === 1 && GAME[_0x7c2b1f(412)][0].ranks[3]) BOT[_0x7c2b1f(447)]({a: 7, mob_num: 0, rank: 3, quick: 1}); else {
        if (GAME[_0x7c2b1f(426)].ma[4] === 1 && GAME[_0x7c2b1f(412)][0][_0x7c2b1f(516)][4]) BOT.emit({a: 7, mob_num: 0, rank: 4, quick: 1}); else GAME[_0x7c2b1f(412)][0].ranks[5] ? BOT[_0x7c2b1f(447)]({a: 7, mob_num: 0, rank: 5, quick: 1}) : BOT.emit({a: 13, mob_num: 0, fo: GAME[_0x7c2b1f(426)].ma});
      }
    }
  } else BOT[_0x7c2b1f(447)]({a: 7, order: 2, quick: 1, fo: GAME[_0x7c2b1f(426)].ma});
}, BOT.CalcYellow = () => {
  const _0x4ca1c0 = _0x25e8e4;
  let _0x17e846 = GAME[_0x4ca1c0(484)]() * 0.15 + 1e4;
  return Math[_0x4ca1c0(444)]((GAME[_0x4ca1c0(484)]() - GAME[_0x4ca1c0(415)].pr) / _0x17e846);
}, BOT[_0x25e8e4(406)] = () => {
  const _0x4d421b = _0x25e8e4;
  switch (BOT[_0x4d421b(492)][_0x4d421b(400)]) {
    case _0x4d421b(425):
      return GAME[_0x4d421b(508)][_0x4d421b(472)][_0x4d421b(364)](_0xb8d9b8 => _0xb8d9b8.item_id === 1244);
      break;
    case _0x4d421b(493):
      return GAME[_0x4d421b(508)].senzus[_0x4d421b(364)](_0x4fd17a => _0x4fd17a[_0x4d421b(368)] === 1260);
      break;
    case "red":
      return GAME.quick_opts[_0x4d421b(472)][_0x4d421b(364)](_0x2c35e2 => _0x2c35e2[_0x4d421b(368)] === 1243);
      break;
    case _0x4d421b(416):
      return GAME.quick_opts.senzus.find(_0x35b63b => _0x35b63b[_0x4d421b(368)] === 1309);
      break;
  }
}, BOT[_0x25e8e4(487)] = () => {
  const _0x3080f5 = _0x25e8e4;
  let _0x44b868 = BOT[_0x3080f5(406)]();
  if (!_0x44b868) BOT[_0x3080f5(513)] = true; else switch (BOT[_0x3080f5(492)][_0x3080f5(400)]) {
    case "blue":
      BOT[_0x3080f5(447)]({a: 12, type: 14, iid: _0x44b868.id, page: GAME[_0x3080f5(382)], am: Math[_0x3080f5(444)](GAME[_0x3080f5(484)]() / 100 * 0.5)});
      break;
    case _0x3080f5(493):
      BOT[_0x3080f5(447)]({a: 12, type: 14, iid: _0x44b868.id, page: GAME.ekw_page, am: BOT[_0x3080f5(404)]()});
      break;
    case _0x3080f5(491):
      BOT[_0x3080f5(447)]({a: 12, type: 14, iid: _0x44b868.id, page: GAME[_0x3080f5(382)], am: 1});
      break;
    case _0x3080f5(416):
      BOT.emit({a: 12, type: 14, iid: _0x44b868.id, page: GAME[_0x3080f5(382)], am: 1});
      break;
  }
}, BOT[_0x25e8e4(453)] = () => {
  const _0x4b934b = _0x25e8e4;
  BOT.emit({a: 18, type: 5, tech_id: GAME[_0x4b934b(508)][_0x4b934b(421)][0]});
}, BOT.CancelSSJ = () => {
  const _0x3c4ce6 = _0x25e8e4;
  BOT[_0x3c4ce6(447)]({a: 18, type: 6});
}, BOT[_0x25e8e4(469)] = () => {
  const _0x3d8ad8 = _0x25e8e4;
  BOT[_0x3d8ad8(447)]({a: 12, type: 19, iid: GAME.quick_opts[_0x3d8ad8(518)][BOT[_0x3d8ad8(518)][_0x3d8ad8(400)]].id});
}, BOT[_0x25e8e4(396)] = () => {
  const _0x40206b = _0x25e8e4;
  $(".BOT_cnt input[name=usesenzu]")[_0x40206b(463)](_0x40206b(374), !BOT[_0x40206b(492)][_0x40206b(524)] ? false : true), $(_0x40206b(457))[_0x40206b(463)](_0x40206b(374), !BOT.sub[_0x40206b(524)] ? false : true), $(".BOT_cnt input[name=multi]")[_0x40206b(463)]("checked", !BOT.char[_0x40206b(450)] ? false : true), $(_0x40206b(381))[_0x40206b(463)](_0x40206b(374), !BOT.char.ssj ? false : true), $(_0x40206b(507))[_0x40206b(409)]("v" + BOT[_0x40206b(464)]), !BOT.senzu[_0x40206b(524)] ? $(_0x40206b(489)).hide() : $(_0x40206b(489))[_0x40206b(500)](), $(".BOT_senzu input[value=" + BOT[_0x40206b(492)].which + "]").prop("checked", true), !BOT[_0x40206b(518)][_0x40206b(524)] ? $(_0x40206b(367))[_0x40206b(517)]() : $(_0x40206b(367))[_0x40206b(500)](), $(_0x40206b(471) + BOT.sub[_0x40206b(400)] + "]")[_0x40206b(463)](_0x40206b(374), true), $("#BOT_Panel")[_0x40206b(455)]({handle: _0x40206b(519)}), $(_0x40206b(505))[_0x40206b(523)](_0x1632b5 => {
    const _0xc1c96b = _0x40206b;
    BOT[_0xc1c96b(525)]($(_0x1632b5[_0xc1c96b(429)]));
  }), $(_0x40206b(419)).val(BOT[_0x40206b(474)][_0x40206b(442)]), $(_0x40206b(411))[_0x40206b(409)]("PA: " + GAME[_0x40206b(414)](BOT[_0x40206b(474)][_0x40206b(442)])), BOT[_0x40206b(451)]();
}, BOT[_0x25e8e4(525)] = _0x3dfc5f => {
  const _0x235a78 = _0x25e8e4;
  let _0x35f604 = _0x3dfc5f.attr(_0x235a78(479));
  switch (_0x35f604) {
    case _0x235a78(439):
      BOT[_0x235a78(492)][_0x235a78(524)] = _0x3dfc5f.is(_0x235a78(385)) ? true : false, $(_0x235a78(489)).fadeToggle(_0x235a78(433));
      break;
    case _0x235a78(470):
      BOT[_0x235a78(518)].use = _0x3dfc5f.is(":checked") ? true : false, $(_0x235a78(367))[_0x235a78(495)](_0x235a78(433));
      break;
    case _0x235a78(481):
      BOT[_0x235a78(474)][_0x235a78(450)] = _0x3dfc5f.is(_0x235a78(385)) ? true : false;
      break;
    case "use_senzu":
      BOT[_0x235a78(492)][_0x235a78(400)] = _0x3dfc5f[_0x235a78(393)]();
      break;
    case _0x235a78(499):
      BOT[_0x235a78(518)][_0x235a78(400)] = parseInt(_0x3dfc5f[_0x235a78(393)]());
      break;
    case _0x235a78(421):
      BOT[_0x235a78(474)][_0x235a78(421)] = _0x3dfc5f.is(":checked") ? true : false;
      break;
  }
}, BOT[_0x25e8e4(490)] = _0x4a9bb6 => {
  const _0x4439e4 = _0x25e8e4;
  if ("mm" in _0x4a9bb6 && "result" in _0x4a9bb6 && _0x4439e4(394) in _0x4a9bb6[_0x4439e4(427)]) return true; else {
    if (_0x4a9bb6[_0x4439e4(387)] === 2 && _0x4439e4(360) in _0x4a9bb6) return true; else {
      if (_0x4a9bb6[_0x4439e4(387)] === 1 && _0x4439e4(360) in _0x4a9bb6) return true; else {
        if ("me" in _0x4a9bb6) return true;
      }
    }
  }
  return false;
}, GAME.socket.on("gr", _0x2ee406 => {
  const _0x2424fa = _0x25e8e4;
  if (!BOT.stop && _0x2ee406.a === 4 && _0x2ee406[_0x2424fa(375)] === GAME[_0x2424fa(375)]) setTimeout(() => {
    const _0x16a15d = _0x2424fa;
    BOT[_0x16a15d(441)]();
  }, 100); else {
    if (!BOT.stop && _0x2ee406.a === 7 && BOT[_0x2424fa(490)](_0x2ee406)) BOT[_0x2424fa(438)](true) == 0 ? BOT[_0x2424fa(502)]() : setTimeout(() => {
      BOT.Fight();
    }, 100); else {
      if (!BOT.stop && _0x2ee406.a === 12 && _0x2ee406[_0x2424fa(458)] === 14) setTimeout(() => {
        BOT.Go();
      }, 1e3); else {
        if (!BOT[_0x2424fa(513)] && _0x2ee406.a === 18 && _0x2ee406.ssj) setTimeout(() => {
          BOT.Go();
        }, 2e3); else {
          if (!BOT.stop && _0x2ee406.a === 18 && _0x2ee406[_0x2424fa(398)]) setTimeout(() => {
            const _0x36bf05 = _0x2424fa;
            BOT[_0x36bf05(453)]();
          }, 1e3), console[_0x2424fa(485)](_0x2424fa(462)); else {
            if (!BOT[_0x2424fa(513)] && _0x2ee406.a === 12 && _0x2ee406.type === 19) setTimeout(() => {
              BOT.Go();
            }, 1e3); else !this[_0x2424fa(513)] && _0x2ee406.a === undefined && setTimeout(() => {
              BOT.Go();
            }, 1e3);
          }
        }
      }
    }
  }
}), $(_0x25e8e4(373))[_0x25e8e4(431)](_0x57b55a => {
  const _0xd31ce8 = _0x25e8e4;
  _0x57b55a = _0x57b55a[_0xd31ce8(429)], BOT[_0xd31ce8(513)] ? (BOT[_0xd31ce8(513)] = false, BOT[_0xd31ce8(417)](), $(_0x57b55a)[_0xd31ce8(365)](_0xd31ce8(513))[_0xd31ce8(409)](_0xd31ce8(461)), $(_0xd31ce8(380))[_0xd31ce8(517)]()) : (BOT.stop = true, $(_0x57b55a)[_0xd31ce8(392)](_0xd31ce8(513))[_0xd31ce8(409)](_0xd31ce8(448)), $(_0xd31ce8(380))[_0xd31ce8(500)](), BOT[_0xd31ce8(510)] && clearTimeout(BOT[_0xd31ce8(510)]), BOT[_0xd31ce8(370)][_0xd31ce8(437)] === 1 && BOT.moveSteps[_0xd31ce8(466)](), $(_0xd31ce8(420))[_0xd31ce8(517)]());
}), $(_0x25e8e4(380))[_0x25e8e4(431)](() => {
  const _0x4910e9 = _0x25e8e4;
  $(".BOT_box .start")[_0x4910e9(365)]("stop").html(_0x4910e9(461)), $(".BOT_box .resume")[_0x4910e9(517)](), BOT[_0x4910e9(513)] = false, BOT.Go();
}), $(_0x25e8e4(498)).click(() => {
  const _0x21f9a0 = _0x25e8e4;
  BOT[_0x21f9a0(451)]();
}), $(_0x25e8e4(434)).on(_0x25e8e4(369), _0x345557 => {
  const _0x1cdc7d = _0x25e8e4;
  $(".minpa_title")[_0x1cdc7d(473)](_0x1cdc7d(475), _0x1cdc7d(378)), $(_0x1cdc7d(411))[_0x1cdc7d(409)]("PA: " + GAME.dots($(_0x345557[_0x1cdc7d(429)])[_0x1cdc7d(393)]())).css(_0x1cdc7d(475), _0x1cdc7d(390));
})[_0x25e8e4(521)](_0x4ba182 => {
  const _0x676c40 = _0x25e8e4;
  BOT.char[_0x676c40(442)] = parseInt($(_0x4ba182.target).val()), $(_0x676c40(411))[_0x676c40(473)]("display", _0x676c40(378)), $(_0x676c40(402)).css(_0x676c40(475), "block");
}), console[_0x25e8e4(443)](), console[_0x25e8e4(485)](_0x25e8e4(515), _0x25e8e4(459)), $("script").last()[_0x25e8e4(361)]());
const bot_auth = [481738,212139,457448,262730,361235,39855,439455,80270,433638,266849,405772,480176,324336,478694,313928,463136];
function _0x2aa6() {
  const _0x4ca4e2 = ["#doubler_bar", "finder", "quest_action_count", "name", "moveSteps", "multi", "includes", "map", "getCharMaxPr", "log", "196ultfMW", "UseSenzu", "pid", ".BOT_senzu", "CheckIfCummu", "red", "senzu", "yellow", "disconnect", "fadeToggle", "href", "push", ".BOT_box .BOT_calc_Lvl", "use_sub", "show", "player_id", "Next", "mapcell", "quest_action_max", ".BOT_cnt input[type=checkbox], input[type=radio]", "146844VLdylp", ".BOT_version", "quick_opts", "9dalgsE", "cd_wait", "keys", "4586688cSuWqW", "stop", "defineProperty", "%cSkrypt został poprawnie załadowany!", "ranks", "hide", "sub", ".BOT_header", "5332900EzDzXa", "mouseup", "1164207khfNtW", "change", "use", "HandleChbox", "max_x", "location", "SetMatrix", "remove_mob", "remove", "last_location", "text", "find", "addClass", "quest_action_qid", ".BOT_sub", "item_id", "input", "path", "CancelSSJ", ".BOT_real_lvl", ".BOT_box .start", "checked", "char_id", "field_mf", "AutoMapper", "none", "locations", ".BOT_box .resume", ".BOT_cnt input[name=ssj]", "ekw_page", "cancel ssj", "findPath", ":checked", "346104emQNXe", "quick", "#ssj_bar", "steps", "block", "cooldown", "removeClass", "val", "cummulative_killed", "SetLocation", "PreparePanel", "path not found", "cancel_ssj", "some", "which", "SetMapcell", ".minpa_title", "#ssj_status", "CalcYellow", "rebPref", "GetSenzu", "--:--:--", "slice", "html", "reborn", ".minpa_val", "field_mobs", "#BOT_Panel", "dots", "char_data", "magic", "Start", "4885310Exilob", ".range_slider input[type=range]", ".BOT_box .cooldown", "ssj", "max_y", "GetCooldown", ".BOT_mapper", "blue", "map_options", "result", "questAction", "target", "matrix", "click", "fadeIn", "fast", ".range_slider", "now", "1389978HcBBlG", "length", "CountMobs", "usesenzu", ".BOT_real_lvl_box", "Fight", "min_pa", "clear", "floor", "bindBDB", "loc", "emit", "START", "lvlUpSim", "multifight", "RealLevel", "setGrid", "UseSSJ", "Move", "draggable", "socket", ".BOT_cnt input[name=usesub]", "type", "color: #fff; width:100%; background: #05d30f; padding: 5px; font-size:20px;", "8NavBlo", "STOP", "cancel ssj response", "prop", "version", "showTimer", "shift", "cd_start", "https://kosmiczni.pl/rules", "UseSub", "usesub", ".BOT_sub input[value=", "senzus", "css", "char", "display"];
  _0x2aa6 = function () {
    return _0x4ca4e2;
  };
  return _0x2aa6();
}
function _0x3c30(_0xc1679f, _0x11493c) {
  const _0x2aa66e = _0x2aa6();
  return _0x3c30 = function (_0x3c3019, _0x3776ac) {
    _0x3c3019 = _0x3c3019 - 359;
    let _0x212ed1 = _0x2aa66e[_0x3c3019];
    return _0x212ed1;
  }, _0x3c30(_0xc1679f, _0x11493c);
}
(!bot_auth.includes(GAME[_0x25e8e4(488)]) || GAME.char_data[_0x25e8e4(501)] == 448639 || GAME[_0x25e8e4(415)][_0x25e8e4(501)] == 448639) && ($(_0x25e8e4(413)).remove(), delete BOT, GAME.socket[_0x25e8e4(494)](), location[_0x25e8e4(496)] = _0x25e8e4(468));
