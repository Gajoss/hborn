const _0xb2fb5b = _0x4bf3;
function _0x4c82() {
  const _0x58270e = ["data-bid", "40OIaVpT", "href", "checked", "removeClass", "fast", "ranks", "361341fBEjrq", "char_id", "ssj", "last", "red", "push", ".minpa_title", "1_1", "use_senzu", "questAction", "max_y", "css", "cooldown", "637646qGaOjU", ".BOT_senzu", "magic", "disconnect", "%cSkrypt został poprawnie załadowany!", "https://kosmiczni.pl/rules", "GetCooldown", ".BOT_sub input[value=", "use", "fadeToggle", ".BOT_sub", "PreparePanel", "show", ".range_slider input[type=range]", "quest_action_max", "now", "display", "cancel ssj", "showTimer", "usesenzu", "775368MYUgKA", "mouseup", "script", "lvlUpSim", "clear", "block", "Fight", "matrix", ".BOT_cnt input[name=usesub]", ".minpa_val", ".BOT_cnt input[name=usesenzu]", "char_data", "reborn", "SetMapcell", "GetSenzu", "steps", "#ssj_bar", "socket", ":checked", "sub", "hide", "location", "moveSteps", "rebPref", "includes", "pid", "CalcYellow", "finder", "11087688txmpas", "mapcell", ".BOT_header", "length", "which", "SetLocation", "14kYEJvA", "cd_start", "cd_wait", "item_id", "target", "type", ".BOT_box .resume", "STOP", "1722930PuxGBV", "log", "keys", ".BOT_senzu input[value=", "html", "--:--:--", "click", "SetMatrix", ".BOT_cnt input[name=multi]", "max_x", "830145WTUJTr", "calculate", "level_lock", "UseSenzu", "cancel ssj response", "player_id", "setGrid", "loc", "dots", "emit", "#ssj_status", "remove", "stop", "char", "none", "shift", "fadeIn", "quest_action", "use_sub", "last_location", "path not found", "multifight", "path", "UseSub", "floor", "senzu", "some", "multi", "color: #fff; width:100%; background: #05d30f; padding: 5px; font-size:20px;", "find", ".BOT_box .start", "CountMobs", "val", "quest_action_qid", "yellow", "Start", "quick_opts", "RealLevel", "change", "map", "Next", "PA: ", "blue", "locations", "ekw_page", "Move", "prop", "START", "getCharMaxPr", "235LVliAP", "HandleChbox", ".BOT_mapper", "1zZOXfQ", "field_mf", "61326uFjeEF", "AutoMapper", "UseSSJ", ".BOT_real_lvl", "CancelSSJ", "version", ".BOT_real_lvl_box", "4gfcNls", "senzus", "name", "field_mobs", "min_pa", "setAcceptableTiles", ".BOT_box .cooldown", "map_options", ".BOT_cnt input[type=checkbox], input[type=radio]"];
  _0x4c82 = function () {
    return _0x58270e;
  };
  return _0x4c82();
}
(function (_0x47fda3, _0x48797f) {
  const _0xc159f3 = _0x4bf3, _0x5bea09 = _0x47fda3();
  while (true) {
    try {
      const _0x5e8470 = -parseInt(_0xc159f3(612)) / 1 * (-parseInt(_0xc159f3(488)) / 2) + parseInt(_0xc159f3(560)) / 3 * (-parseInt(_0xc159f3(459)) / 4) + -parseInt(_0xc159f3(609)) / 5 * (parseInt(_0xc159f3(452)) / 6) + -parseInt(_0xc159f3(542)) / 7 * (parseInt(_0xc159f3(508)) / 8) + -parseInt(_0xc159f3(475)) / 9 * (parseInt(_0xc159f3(469)) / 10) + parseInt(_0xc159f3(550)) / 11 + parseInt(_0xc159f3(536)) / 12;
      if (_0x5e8470 === _0x48797f) break; else _0x5bea09.push(_0x5bea09.shift());
    } catch (_0x53b461) {
      _0x5bea09.push(_0x5bea09.shift());
    }
  }
}(_0x4c82, 287887), Object.assign(BOT, {stop: true, last_location: 0}), BOT[_0xb2fb5b(535)] = new EasyStar.js, BOT[_0xb2fb5b(535)][_0xb2fb5b(464)]([1]), BOT[_0xb2fb5b(569)] = _0x339f01 => GAME.socket[_0xb2fb5b(569)]("ga", _0x339f01), GAME.bindBDB = _0x2fc249 => {
  const _0x11c3ca = _0xb2fb5b;
  BOT[_0x11c3ca(569)]({a: 21, bid: _0x2fc249.attr(_0x11c3ca(468))}), _0x2fc249[_0x11c3ca(571)]();
}, GAME[_0xb2fb5b(484)] = () => {
  const _0x4c929d = _0xb2fb5b;
  GAME[_0x4c929d(577)] && GAME.quest_action_count < GAME[_0x4c929d(502)] && BOT[_0x4c929d(569)]({a: 22, type: 7, id: GAME[_0x4c929d(593)], cnt: GAME[_0x4c929d(502)]});
}, BOT.Start = () => {
  const _0x3f4cb8 = _0xb2fb5b;
  BOT[_0x3f4cb8(579)] != GAME[_0x3f4cb8(519)].loc && (!GAME.mapcell ? BOT.SetMapcell() : false, BOT[_0x3f4cb8(579)] = parseInt(GAME.char_data[_0x3f4cb8(567)]), BOT[_0x3f4cb8(557)](), BOT[_0x3f4cb8(529)] = BOT.SetLocation(BOT[_0x3f4cb8(579)])), BOT[_0x3f4cb8(543)] = Date[_0x3f4cb8(503)](), BOT.moveSteps = BOT[_0x3f4cb8(529)][_0x3f4cb8(523)].slice(), BOT[_0x3f4cb8(530)][0][0] == GAME[_0x3f4cb8(519)].x && BOT[_0x3f4cb8(530)][0][1] == GAME[_0x3f4cb8(519)].y && BOT[_0x3f4cb8(530)].shift(), setTimeout(() => {
    BOT.Go();
  }, 1e3);
}, BOT[_0xb2fb5b(521)] = () => {
  const _0x5a2b54 = _0xb2fb5b;
  Object.defineProperty(GAME, _0x5a2b54(537), {get: () => {
    const _0xacc05a = _0x5a2b54;
    return GAME[Object[_0xacc05a(552)](GAME)[_0xacc05a(589)](_0x41f9bb => GAME[_0x41f9bb] && GAME[_0x41f9bb][_0xacc05a(482)])];
  }});
}, BOT[_0xb2fb5b(541)] = _0x27e371 => {
  const _0x3f9ec8 = _0xb2fb5b;
  let _0x38a03a = BOT[_0x3f9ec8(603)].filter("id" ? _0x1acc84 => _0x1acc84.id === _0x27e371 : _0x2a8220 => Object[_0x3f9ec8(552)](_0x2a8220)[_0x3f9ec8(586)](_0x4ba49a => _0x2a8220[_0x4ba49a] === _0x27e371))[0];
  return _0x38a03a && !_0x38a03a.x && (_0x38a03a.x = _0x38a03a[_0x3f9ec8(523)][0][0], _0x38a03a.y = _0x38a03a[_0x3f9ec8(523)][0][1]), $(".BOT_mapper").fadeOut(), !_0x38a03a ? BOT[_0x3f9ec8(453)]() : _0x38a03a;
}, BOT[_0xb2fb5b(557)] = () => {
  const _0x5031f9 = _0xb2fb5b;
  BOT[_0x5031f9(515)] = [];
  for (let _0xbe6653 = 0; _0xbe6653 < GAME.map[_0x5031f9(485)]; _0xbe6653++) {
    BOT[_0x5031f9(515)][_0xbe6653] = [];
    for (let _0x2538b7 = 0; _0x2538b7 < GAME[_0x5031f9(599)][_0x5031f9(559)]; _0x2538b7++) {
      BOT.matrix[_0xbe6653][_0x2538b7] = GAME[_0x5031f9(537)][_0x2538b7 + 1 + "_" + (_0xbe6653 + 1)].m == 1 ? 1 : 0;
    }
  }
  BOT[_0x5031f9(535)][_0x5031f9(566)](BOT.matrix);
}, BOT[_0xb2fb5b(453)] = () => {
  const _0x340dc0 = _0xb2fb5b;
  let _0x2899fa = [], _0x23f162 = false, _0x228b29 = false;
  for (y = 0; y < BOT[_0x340dc0(515)].length; y++) {
    if (BOT[_0x340dc0(515)][y][_0x340dc0(532)](1)) {
      if (!_0x228b29) {
        for (x = 0; x < BOT[_0x340dc0(515)][y].length; x++) {
          BOT.matrix[y][x] === 1 && (!_0x23f162 ? _0x23f162 = [x + 1, y + 1] : false, _0x2899fa.push([x + 1, y + 1]));
        }
        _0x228b29 = true;
      } else {
        for (x = BOT[_0x340dc0(515)][y][_0x340dc0(539)]; x > 0; x--) {
          BOT.matrix[y][x - 1] === 1 && (!_0x23f162 ? _0x23f162 = [x, y + 1] : false, _0x2899fa.push([x, y + 1]));
        }
        _0x228b29 = false;
      }
    }
  }
  return _0x2899fa[_0x340dc0(480)](_0x23f162), $(_0x340dc0(611))[_0x340dc0(576)](), {x: _0x23f162[0], y: _0x23f162[1], steps: _0x2899fa};
}, BOT[_0xb2fb5b(494)] = (_0x333820, _0x42b087) => {
  const _0x5cac47 = _0xb2fb5b;
  let _0x5e9356 = 1e3;
  if (BOT[_0x5cac47(573)][_0x5cac47(487)]) {
    let _0x81b62b = 305e3, _0x3be355 = _0x81b62b - (_0x42b087 - _0x333820);
    _0x5e9356 = _0x3be355 < 0 ? 1e3 : _0x3be355, $(_0x5cac47(465))[_0x5cac47(554)](GAME[_0x5cac47(506)](_0x5e9356 / 1e3))[_0x5cac47(500)]();
  }
  return _0x5e9356;
}, BOT.Go = () => {
  const _0x5d2593 = _0xb2fb5b;
  if (BOT[_0x5d2593(530)][_0x5d2593(539)] > 0) BOT[_0x5d2593(535)].findPath(GAME[_0x5d2593(519)].x - 1, GAME[_0x5d2593(519)].y - 1, BOT.moveSteps[0][0] - 1, BOT[_0x5d2593(530)][0][1] - 1, _0x280514 => {
    const _0x25bfee = _0x5d2593;
    _0x280514 === null ? console[_0x25bfee(551)](_0x25bfee(580)) : (BOT[_0x25bfee(582)] = _0x280514, BOT[_0x25bfee(530)][_0x25bfee(539)] > 0 && (BOT.path[_0x25bfee(575)](), BOT[_0x25bfee(605)]()));
  }), BOT[_0x5d2593(535)][_0x5d2593(561)](); else GAME[_0x5d2593(519)].x == BOT[_0x5d2593(529)][_0x5d2593(523)][0][0] && GAME.char_data.y == BOT[_0x5d2593(529)].steps[0][1] && (BOT[_0x5d2593(544)] = setTimeout(() => {
    const _0xfbe77c = _0x5d2593;
    BOT[_0xfbe77c(595)](), $(".BOT_box .cooldown")[_0xfbe77c(528)]();
  }, BOT.GetCooldown(BOT.cd_start, Date[_0x5d2593(503)]())));
}, BOT[_0xb2fb5b(605)] = () => {
  const _0x19fce1 = _0xb2fb5b;
  if (!BOT[_0x19fce1(572)]) {
    if (BOT[_0x19fce1(585)][_0x19fce1(496)] && GAME[_0x19fce1(519)].pr <= BOT[_0x19fce1(573)][_0x19fce1(463)]) setTimeout(() => {
      const _0x3755b6 = _0x19fce1;
      BOT[_0x3755b6(563)]();
    }, 1e3); else {
      if (BOT[_0x19fce1(527)][_0x19fce1(496)] && $("#doubler_bar").css(_0x19fce1(504)) === _0x19fce1(574)) setTimeout(() => {
        const _0x4fd420 = _0x19fce1;
        BOT[_0x4fd420(583)]();
      }, 1e3); else {
        if ($(_0x19fce1(570)).text() == _0x19fce1(555)) setTimeout(() => {
          const _0x293e32 = _0x19fce1;
          BOT[_0x293e32(456)]();
        }, 1e3), console[_0x19fce1(551)](_0x19fce1(505)); else {
          if (BOT[_0x19fce1(573)][_0x19fce1(477)] && $(_0x19fce1(524))[_0x19fce1(486)](_0x19fce1(504)) === _0x19fce1(574)) setTimeout(() => {
            BOT.UseSSJ();
          }, 3e3); else {
            if (BOT[_0x19fce1(582)][0].x > GAME[_0x19fce1(519)].x - 1 && BOT[_0x19fce1(582)][0].y == GAME.char_data.y - 1) BOT[_0x19fce1(569)]({a: 4, dir: 7, vo: GAME[_0x19fce1(466)].vo}); else {
              if (BOT.path[0].x < GAME[_0x19fce1(519)].x - 1 && BOT[_0x19fce1(582)][0].y == GAME[_0x19fce1(519)].y - 1) BOT[_0x19fce1(569)]({a: 4, dir: 8, vo: GAME[_0x19fce1(466)].vo}); else {
                if (BOT.path[0].x == GAME.char_data.x - 1 && BOT[_0x19fce1(582)][0].y > GAME[_0x19fce1(519)].y - 1) BOT[_0x19fce1(569)]({a: 4, dir: 1, vo: GAME.map_options.vo}); else BOT.path[0].x == GAME[_0x19fce1(519)].x - 1 && BOT[_0x19fce1(582)][0].y < GAME[_0x19fce1(519)].y - 1 ? BOT[_0x19fce1(569)]({a: 4, dir: 2, vo: GAME[_0x19fce1(466)].vo}) : BOT.Go();
              }
            }
          }
        }
      }
    }
  }
}, BOT[_0xb2fb5b(600)] = () => {
  const _0x2f3337 = _0xb2fb5b;
  BOT[_0x2f3337(582)][_0x2f3337(539)] - 1 > 0 ? (BOT.path[_0x2f3337(575)](), BOT.Move()) : BOT[_0x2f3337(530)].length > 0 && (BOT[_0x2f3337(530)][_0x2f3337(575)](), BOT.Go());
}, BOT.RealLevel = () => {
  const _0x2ca698 = _0xb2fb5b;
  if (GAME[_0x2ca698(519)][_0x2ca698(562)]) $(_0x2ca698(458)).show(); else $(_0x2ca698(458))[_0x2ca698(528)]();
  $(_0x2ca698(455))[_0x2ca698(554)]("" + GAME[_0x2ca698(531)](GAME[_0x2ca698(519)][_0x2ca698(520)]) + GAME[_0x2ca698(511)]());
}, BOT[_0xb2fb5b(591)] = (_0x334788 = false) => {
  const _0x1077ef = _0xb2fb5b;
  let _0x34f3b3 = 0;
  for (i in GAME.map_options.ma) {
    GAME.map_options.ma[i] == 1 && (_0x34f3b3 += parseInt(GAME[_0x1077ef(462)][0][_0x1077ef(474)][i]));
  }
  return _0x34f3b3 += _0x334788 ? parseInt(GAME[_0x1077ef(462)][0].ranks[5]) : 0, _0x34f3b3;
}, BOT[_0xb2fb5b(514)] = () => {
  const _0x45f669 = _0xb2fb5b;
  if (BOT.char[_0x45f669(581)]) {
    if (BOT[_0x45f669(591)]() > 0 && GAME.field_mf[0] < 2) BOT[_0x45f669(569)]({a: 7, order: 2, quick: 1, fo: GAME.map_options.ma}); else {
      if (GAME[_0x45f669(451)][0] < 3 && GAME[_0x45f669(466)].ma[3] === 1 && GAME[_0x45f669(462)][0][_0x45f669(474)][3]) BOT[_0x45f669(569)]({a: 7, mob_num: 0, rank: 3, quick: 1}); else {
        if (GAME[_0x45f669(466)].ma[4] === 1 && GAME[_0x45f669(462)][0][_0x45f669(474)][4]) BOT.emit({a: 7, mob_num: 0, rank: 4, quick: 1}); else GAME.field_mobs[0].ranks[5] ? BOT.emit({a: 7, mob_num: 0, rank: 5, quick: 1}) : BOT[_0x45f669(569)]({a: 13, mob_num: 0, fo: GAME[_0x45f669(466)].ma});
      }
    }
  } else BOT[_0x45f669(569)]({a: 7, order: 2, quick: 1, fo: GAME[_0x45f669(466)].ma});
}, BOT[_0xb2fb5b(534)] = () => {
  const _0x155286 = _0xb2fb5b;
  let _0x4ec8c0 = GAME[_0x155286(608)]() * 0.15 + 1e4;
  return Math[_0x155286(584)]((GAME[_0x155286(608)]() - GAME.char_data.pr) / _0x4ec8c0);
}, BOT.GetSenzu = () => {
  const _0x1f533f = _0xb2fb5b;
  switch (BOT[_0x1f533f(585)][_0x1f533f(540)]) {
    case "blue":
      return GAME[_0x1f533f(596)][_0x1f533f(460)][_0x1f533f(589)](_0x5dae7b => _0x5dae7b[_0x1f533f(545)] === 1244);
      break;
    case _0x1f533f(594):
      return GAME[_0x1f533f(596)][_0x1f533f(460)][_0x1f533f(589)](_0x482e9a => _0x482e9a[_0x1f533f(545)] === 1260);
      break;
    case _0x1f533f(479):
      return GAME[_0x1f533f(596)].senzus[_0x1f533f(589)](_0x220bfc => _0x220bfc[_0x1f533f(545)] === 1243);
      break;
    case _0x1f533f(490):
      return GAME.quick_opts.senzus[_0x1f533f(589)](_0x18ef95 => _0x18ef95.item_id === 1309);
      break;
  }
}, BOT[_0xb2fb5b(563)] = () => {
  const _0x2f7480 = _0xb2fb5b;
  let _0x459070 = BOT[_0x2f7480(522)]();
  if (!_0x459070) BOT.stop = true; else switch (BOT[_0x2f7480(585)].which) {
    case _0x2f7480(602):
      BOT[_0x2f7480(569)]({a: 12, type: 14, iid: _0x459070.id, page: GAME[_0x2f7480(604)], am: Math[_0x2f7480(584)](GAME.getCharMaxPr() / 100 * 0.5)});
      break;
    case _0x2f7480(594):
      BOT[_0x2f7480(569)]({a: 12, type: 14, iid: _0x459070.id, page: GAME[_0x2f7480(604)], am: BOT[_0x2f7480(534)]()});
      break;
    case _0x2f7480(479):
      BOT[_0x2f7480(569)]({a: 12, type: 14, iid: _0x459070.id, page: GAME[_0x2f7480(604)], am: 1});
      break;
    case _0x2f7480(490):
      BOT[_0x2f7480(569)]({a: 12, type: 14, iid: _0x459070.id, page: GAME[_0x2f7480(604)], am: 1});
      break;
  }
}, BOT[_0xb2fb5b(454)] = () => {
  const _0x4b9001 = _0xb2fb5b;
  BOT.emit({a: 18, type: 5, tech_id: GAME[_0x4b9001(596)][_0x4b9001(477)][0]});
}, BOT[_0xb2fb5b(456)] = () => {
  const _0x5c6ee7 = _0xb2fb5b;
  BOT[_0x5c6ee7(569)]({a: 18, type: 6});
}, BOT[_0xb2fb5b(583)] = () => {
  const _0x16b7b4 = _0xb2fb5b;
  BOT.emit({a: 12, type: 19, iid: GAME.quick_opts[_0x16b7b4(527)][BOT[_0x16b7b4(527)][_0x16b7b4(540)]].id});
}, BOT[_0xb2fb5b(499)] = () => {
  const _0x5692f5 = _0xb2fb5b;
  $(_0x5692f5(518)).prop(_0x5692f5(471), !BOT[_0x5692f5(585)].use ? false : true), $(_0x5692f5(516))[_0x5692f5(606)](_0x5692f5(471), !BOT[_0x5692f5(527)][_0x5692f5(496)] ? false : true), $(_0x5692f5(558))[_0x5692f5(606)](_0x5692f5(471), !BOT[_0x5692f5(573)][_0x5692f5(581)] ? false : true), $(".BOT_cnt input[name=ssj]")[_0x5692f5(606)](_0x5692f5(471), !BOT[_0x5692f5(573)][_0x5692f5(477)] ? false : true), $(".BOT_version")[_0x5692f5(554)]("v" + BOT[_0x5692f5(457)]), !BOT.senzu[_0x5692f5(496)] ? $(_0x5692f5(489))[_0x5692f5(528)]() : $(".BOT_senzu")[_0x5692f5(500)](), $(_0x5692f5(553) + BOT[_0x5692f5(585)][_0x5692f5(540)] + "]")[_0x5692f5(606)](_0x5692f5(471), true), !BOT[_0x5692f5(527)][_0x5692f5(496)] ? $(_0x5692f5(498))[_0x5692f5(528)]() : $(".BOT_sub")[_0x5692f5(500)](), $(_0x5692f5(495) + BOT[_0x5692f5(527)][_0x5692f5(540)] + "]")[_0x5692f5(606)](_0x5692f5(471), true), $("#BOT_Panel").draggable({handle: _0x5692f5(538)}), $(_0x5692f5(467))[_0x5692f5(598)](_0x3990a0 => {
    const _0x361096 = _0x5692f5;
    BOT[_0x361096(610)]($(_0x3990a0[_0x361096(546)]));
  }), $(_0x5692f5(501))[_0x5692f5(592)](BOT[_0x5692f5(573)].min_pa), $(_0x5692f5(517))[_0x5692f5(554)](_0x5692f5(601) + GAME[_0x5692f5(568)](BOT[_0x5692f5(573)][_0x5692f5(463)])), BOT[_0x5692f5(597)]();
}, BOT[_0xb2fb5b(610)] = _0x3e5f83 => {
  const _0x15f445 = _0xb2fb5b;
  let _0x755aea = _0x3e5f83.attr(_0x15f445(461));
  switch (_0x755aea) {
    case _0x15f445(507):
      BOT[_0x15f445(585)][_0x15f445(496)] = _0x3e5f83.is(":checked") ? true : false, $(_0x15f445(489)).fadeToggle("fast");
      break;
    case "usesub":
      BOT[_0x15f445(527)][_0x15f445(496)] = _0x3e5f83.is(_0x15f445(526)) ? true : false, $(_0x15f445(498))[_0x15f445(497)](_0x15f445(473));
      break;
    case _0x15f445(587):
      BOT[_0x15f445(573)][_0x15f445(581)] = _0x3e5f83.is(_0x15f445(526)) ? true : false;
      break;
    case _0x15f445(483):
      BOT[_0x15f445(585)][_0x15f445(540)] = _0x3e5f83[_0x15f445(592)]();
      break;
    case _0x15f445(578):
      BOT[_0x15f445(527)].which = parseInt(_0x3e5f83[_0x15f445(592)]());
      break;
    case _0x15f445(477):
      BOT[_0x15f445(573)][_0x15f445(477)] = _0x3e5f83.is(_0x15f445(526)) ? true : false;
      break;
  }
}, GAME[_0xb2fb5b(525)].on("gr", _0x1c956c => {
  const _0x2ab33d = _0xb2fb5b;
  if (!BOT[_0x2ab33d(572)] && _0x1c956c.a === 4 && _0x1c956c[_0x2ab33d(476)] === GAME[_0x2ab33d(476)]) BOT.Fight(); else {
    if (!BOT[_0x2ab33d(572)] && _0x1c956c.a === 7) BOT.CountMobs(true) == 0 ? BOT[_0x2ab33d(600)]() : BOT[_0x2ab33d(514)](); else {
      if (!BOT[_0x2ab33d(572)] && _0x1c956c.a === 12 && _0x1c956c[_0x2ab33d(547)] === 14) setTimeout(() => {
        BOT.Go();
      }, 1e3); else {
        if (!BOT[_0x2ab33d(572)] && _0x1c956c.a === 18 && _0x1c956c.ssj) setTimeout(() => {
          BOT.Go();
        }, 2e3); else {
          if (!BOT.stop && _0x1c956c.a === 18 && _0x1c956c.cancel_ssj) setTimeout(() => {
            BOT.UseSSJ();
          }, 1e3), console[_0x2ab33d(551)](_0x2ab33d(564)); else {
            if (!BOT[_0x2ab33d(572)] && _0x1c956c.a === 12 && _0x1c956c[_0x2ab33d(547)] === 19) setTimeout(() => {
              BOT.Go();
            }, 1e3); else !this[_0x2ab33d(572)] && _0x1c956c.a === undefined && setTimeout(() => {
              BOT.Go();
            }, 1e3);
          }
        }
      }
    }
  }
}), $(_0xb2fb5b(590))[_0xb2fb5b(556)](_0x133ac6 => {
  const _0x543242 = _0xb2fb5b;
  _0x133ac6 = _0x133ac6[_0x543242(546)], BOT[_0x543242(572)] ? (BOT[_0x543242(572)] = false, BOT.Start(), $(_0x133ac6).addClass(_0x543242(572))[_0x543242(554)](_0x543242(549)), $(_0x543242(548))[_0x543242(528)]()) : (BOT[_0x543242(572)] = true, $(_0x133ac6)[_0x543242(472)]("stop").html(_0x543242(607)), $(_0x543242(548))[_0x543242(500)](), BOT[_0x543242(544)] && clearTimeout(BOT[_0x543242(544)]), BOT[_0x543242(582)][_0x543242(539)] === 1 && BOT[_0x543242(530)].shift(), $(_0x543242(465))[_0x543242(528)]());
}), $(_0xb2fb5b(548)).click(() => {
  const _0x40c520 = _0xb2fb5b;
  $(_0x40c520(590)).addClass(_0x40c520(572)).html(_0x40c520(549)), $(_0x40c520(548))[_0x40c520(528)](), BOT[_0x40c520(572)] = false, BOT.Go();
}), $(".BOT_box .BOT_calc_Lvl")[_0xb2fb5b(556)](() => {
  const _0x2757a8 = _0xb2fb5b;
  BOT[_0x2757a8(597)]();
}), $(".range_slider").on("input", _0x707205 => {
  const _0x4181b8 = _0xb2fb5b;
  $(".minpa_title")[_0x4181b8(486)](_0x4181b8(504), _0x4181b8(574)), $(".minpa_val").html(_0x4181b8(601) + GAME[_0x4181b8(568)]($(_0x707205[_0x4181b8(546)])[_0x4181b8(592)]()))[_0x4181b8(486)]("display", _0x4181b8(513));
})[_0xb2fb5b(509)](_0x4379fb => {
  const _0x4d041d = _0xb2fb5b;
  BOT.char.min_pa = parseInt($(_0x4379fb[_0x4d041d(546)])[_0x4d041d(592)]()), $(_0x4d041d(517))[_0x4d041d(486)](_0x4d041d(504), _0x4d041d(574)), $(_0x4d041d(481)).css(_0x4d041d(504), _0x4d041d(513));
}), console[_0xb2fb5b(512)](), console.log(_0xb2fb5b(492), _0xb2fb5b(588)), $(_0xb2fb5b(510))[_0xb2fb5b(478)]()[_0xb2fb5b(571)]());
function _0x4bf3(_0xba5163, _0x183a6f) {
  const _0x4c8292 = _0x4c82();
  return _0x4bf3 = function (_0x4bf3ca, _0x50e350) {
    _0x4bf3ca = _0x4bf3ca - 451;
    let _0x59a01f = _0x4c8292[_0x4bf3ca];
    return _0x59a01f;
  }, _0x4bf3(_0xba5163, _0x183a6f);
}
const bot_auth = [212139, 457638, 433273, 464892, 468932, 442405, 421729, 432743, 476609, 454758, 424489, 409292, 476597, 479357, 465593, 477259, 472756, 291156, 322483, 480606, 462458, 433094, 458895, 345396, 301296, 414783, 453948, 480816, 462824, 481184, 480844, 480287, 481355, 477658, 271757, 481489, 480524, 481568, 481580, 465698, 466871, 288701, 467357, 482456];
;
