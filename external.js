var isSocketInGame = !!("socket" in GAME);
if (!isSocketInGame) {
  for (var key in GAME) {
    if (key.startsWith('socxxx')) {
      var newKey = "socket";
      GAME.socket = GAME[key];
      break;
    }
  }
}
Object.assign(BOT, {
  'stop': true,
  'last_location': 0x0
});
BOT.finder = new EasyStar.js();
BOT.finder.setAcceptableTiles([0x1]);
BOT.emit = _0x591392 => GAME.socket.emit('ga', _0x591392);
GAME.bindBDB = _0x369678 => {
  BOT.emit({
    'a': 0x15,
    'bid': _0x369678.attr("data-bid")
  });
  _0x369678.remove();
};
GAME.questAction = () => {
  if (GAME.quest_action && GAME.quest_action_count < GAME.quest_action_max) {
    BOT.emit({
      'a': 0x16,
      'type': 0x7,
      'id': GAME.quest_action_qid,
      'cnt': GAME.quest_action_max
    });
  }
};
BOT.Start = () => {
  if (BOT.last_location != GAME.char_data.loc) {
    if (!GAME.mapcell) {
      BOT.SetMapcell();
    } else {
      false;
    }
    BOT.last_location = parseInt(GAME.char_data.loc);
    BOT.SetMatrix();
    BOT.location = BOT.SetLocation(BOT.last_location);
  }
  BOT.cd_start = Date.now();
  BOT.moveSteps = BOT.location.steps.slice();
  if (BOT.moveSteps[0x0][0x0] == GAME.char_data.x && BOT.moveSteps[0x0][0x1] == GAME.char_data.y) {
    BOT.moveSteps.shift();
  }
  setTimeout(() => {
    BOT.Go();
  }, 0x3e8);
};
BOT.SetMapcell = () => {
  Object.defineProperty(GAME, "mapcell", {
    'get': () => {
      return GAME[Object.keys(GAME).find(_0x5e6a24 => GAME[_0x5e6a24] && GAME[_0x5e6a24]["1_1"])];
    }
  });
};
BOT.SetLocation = _0x5c2aad => {
  let _0x4e04b5 = BOT.locations.filter(_0x1654e9 => _0x1654e9.id === _0x5c2aad)[0x0];
  if (_0x4e04b5 && !_0x4e04b5.x) {
    _0x4e04b5.x = _0x4e04b5.steps[0x0][0x0];
    _0x4e04b5.y = _0x4e04b5.steps[0x0][0x1];
  }
  $('.BOT_mapper').fadeOut();
  return !_0x4e04b5 ? BOT.AutoMapper() : _0x4e04b5;
};
BOT.SetMatrix = () => {
  BOT.matrix = [];
  for (let _0x1f7f82 = 0x0; _0x1f7f82 < GAME.map.max_y; _0x1f7f82++) {
    BOT.matrix[_0x1f7f82] = [];
    for (let _0x1f2953 = 0x0; _0x1f2953 < GAME.map.max_x; _0x1f2953++) {
      BOT.matrix[_0x1f7f82][_0x1f2953] = GAME.mapcell[_0x1f2953 + 0x1 + '_' + (_0x1f7f82 + 0x1)].m == 0x1 ? 0x1 : 0x0;
    }
  }
  BOT.finder.setGrid(BOT.matrix);
};
BOT.AutoMapper = () => {
  let _0x4918e6 = [];
  let _0x5ed53d = false;
  let _0x28fb78 = false;
  for (y = 0x0; y < BOT.matrix.length; y++) {
    if (BOT.matrix[y].includes(0x1)) {
      if (!_0x28fb78) {
        for (x = 0x0; x < BOT.matrix[y].length; x++) {
          if (BOT.matrix[y][x] === 0x1) {
            if (!_0x5ed53d) {
              _0x5ed53d = [x + 0x1, y + 0x1];
            } else {
              false;
            }
            _0x4918e6.push([x + 0x1, y + 0x1]);
          }
        }
        _0x28fb78 = true;
      } else {
        for (x = BOT.matrix[y].length; x > 0x0; x--) {
          if (BOT.matrix[y][x - 0x1] === 0x1) {
            if (!_0x5ed53d) {
              _0x5ed53d = [x, y + 0x1];
            } else {
              false;
            }
            _0x4918e6.push([x, y + 0x1]);
          }
        }
        _0x28fb78 = false;
      }
    }
  }
  _0x4918e6.push(_0x5ed53d);
  $(".BOT_mapper").fadeIn();
  return {
    'x': _0x5ed53d[0x0],
    'y': _0x5ed53d[0x1],
    'steps': _0x4918e6
  };
};
BOT.GetCooldown = (_0x13a7e3, _0x2693cd) => {
  let _0x421ee5 = 0x3e8;
  if (BOT.char.cooldown) {
    let _0x420ca7 = 0x3ff70 - (_0x2693cd - _0x13a7e3);
    _0x421ee5 = _0x420ca7 < 0x0 ? 0x3e8 : _0x420ca7;
    $(".BOT_box .cooldown").html(GAME.showTimer(_0x421ee5 / 0x3e8)).show();
  }
  return _0x421ee5;
};
BOT.Go = () => {
  if (BOT.moveSteps.length > 0x0) {
    BOT.finder.findPath(GAME.char_data.x - 0x1, GAME.char_data.y - 0x1, BOT.moveSteps[0x0][0x0] - 0x1, BOT.moveSteps[0x0][0x1] - 0x1, _0x558447 => {
      if (_0x558447 === null) {
        console.log("path not found");
      } else {
        BOT.path = _0x558447;
        if (BOT.moveSteps.length > 0x0) {
          BOT.path.shift();
          BOT.Move();
        }
      }
    });
    BOT.finder.calculate();
  } else if (GAME.char_data.x == BOT.location.steps[0x0][0x0] && GAME.char_data.y == BOT.location.steps[0x0][0x1]) {
    BOT.cd_wait = setTimeout(() => {
      BOT.Start();
      $(".BOT_box .cooldown").hide();
    }, BOT.GetCooldown(BOT.cd_start, Date.now()));
  }
};
BOT.Move = () => {
  if (!BOT.stop) {
    if (BOT.senzu.use && GAME.char_data.pr <= BOT.char.min_pa) {
      setTimeout(() => {
        BOT.UseSenzu();
      }, 0x3e8);
    } else {
      if (BOT.sub.use && $("#doubler_bar").css("display") === 'none') {
        setTimeout(() => {
          BOT.UseSub();
        }, 0x3e8);
      } else {
        if ($('#ssj_status').text() == "--:--:--") {
          setTimeout(() => {
            BOT.CancelSSJ();
          }, 0x3e8);
          console.log("cancel ssj");
        } else if (BOT.char.ssj && $("#ssj_bar").css("display") === "none") {
          setTimeout(() => {
            BOT.UseSSJ();
          }, 0xbb8);
        } else {
          setTimeout(() => {
            if (BOT.path[0x0].x > GAME.char_data.x - 0x1 && BOT.path[0x0].y == GAME.char_data.y - 0x1) {
              BOT.emit({
                'a': 0x4,
                'dir': 0x7,
                'vo': GAME.map_options.vo
              });
            } else {
              if (BOT.path[0x0].x < GAME.char_data.x - 0x1 && BOT.path[0x0].y == GAME.char_data.y - 0x1) {
                BOT.emit({
                  'a': 0x4,
                  'dir': 0x8,
                  'vo': GAME.map_options.vo
                });
              } else {
                if (BOT.path[0x0].x == GAME.char_data.x - 0x1 && BOT.path[0x0].y > GAME.char_data.y - 0x1) {
                  BOT.emit({
                    'a': 0x4,
                    'dir': 0x1,
                    'vo': GAME.map_options.vo
                  });
                } else if (BOT.path[0x0].x == GAME.char_data.x - 0x1 && BOT.path[0x0].y < GAME.char_data.y - 0x1) {
                  BOT.emit({
                    'a': 0x4,
                    'dir': 0x2,
                    'vo': GAME.map_options.vo
                  });
                } else {
                  BOT.Go();
                }
              }
            }
          }, 0x64);
        }
      }
    }
  }
};
BOT.Next = () => {
  if (BOT.path.length - 0x1 > 0x0) {
    BOT.path.shift();
    BOT.Move();
  } else if (BOT.moveSteps.length > 0x0) {
    BOT.moveSteps.shift();
    BOT.Go();
  }
};
BOT.RealLevel = () => {
  if (GAME.char_data.level_lock) {
    $(".BOT_real_lvl_box").show();
  } else {
    $(".BOT_real_lvl_box").hide();
  }
  $('.BOT_real_lvl').html('' + GAME.rebPref(GAME.char_data.reborn) + GAME.lvlUpSim());
};
BOT.CountMobs = (_0x20b5ed = false) => {
  let _0x155b8c = 0x0;
  for (i in GAME.map_options.ma) {
    if (GAME.map_options.ma[i] == 0x1) {
      _0x155b8c += parseInt(GAME.field_mobs[0x0].ranks[i]);
    }
  }
  _0x155b8c += _0x20b5ed ? parseInt(GAME.field_mobs[0x0].ranks[0x5]) : 0x0;
  return _0x155b8c;
};
BOT.Fight = () => {
  if (BOT.char.multifight) {
    if (BOT.CountMobs() > 0x0 && GAME.field_mf[0x0] < 0x2) {
      BOT.emit({
        'a': 0x7,
        'order': 0x2,
        'quick': 0x1,
        'fo': GAME.map_options.ma
      });
    } else {
      if (GAME.field_mf[0x0] < 0x3 && GAME.map_options.ma[0x3] === 0x1 && GAME.field_mobs[0x0].ranks[0x3]) {
        BOT.emit({
          'a': 0x7,
          'mob_num': 0x0,
          'rank': 0x3,
          'quick': 0x1
        });
      } else {
        if (GAME.map_options.ma[0x4] === 0x1 && GAME.field_mobs[0x0].ranks[0x4]) {
          BOT.emit({
            'a': 0x7,
            'mob_num': 0x0,
            'rank': 0x4,
            'quick': 0x1
          });
        } else if (GAME.field_mobs[0x0].ranks[0x5]) {
          BOT.emit({
            'a': 0x7,
            'mob_num': 0x0,
            'rank': 0x5,
            'quick': 0x1
          });
        } else {
          BOT.emit({
            'a': 0xd,
            'mob_num': 0x0,
            'fo': GAME.map_options.ma
          });
        }
      }
    }
  } else {
    BOT.emit({
      'a': 0x7,
      'order': 0x2,
      'quick': 0x1,
      'fo': GAME.map_options.ma
    });
  }
};
BOT.CalcYellow = () => {
  let _0x514e8b = GAME.getCharMaxPr() * 0.15 + 0x2710;
  return Math.floor((GAME.getCharMaxPr() - GAME.char_data.pr) / _0x514e8b);
};
BOT.GetSenzu = () => {
  switch (BOT.senzu.which) {
    case "blue":
      return GAME.quick_opts.senzus.find(_0x21d277 => _0x21d277.item_id === 0x4dc);
      break;
    case 'yellow':
      return GAME.quick_opts.senzus.find(_0x23788d => _0x23788d.item_id === 0x4ec);
      break;
    case 'red':
      return GAME.quick_opts.senzus.find(_0xaa1a58 => _0xaa1a58.item_id === 0x4db);
      break;
    case "magic":
      return GAME.quick_opts.senzus.find(_0x5f5bab => _0x5f5bab.item_id === 0x51d);
      break;
  }
};
BOT.UseSenzu = () => {
  let _0x42864f = BOT.GetSenzu();
  if (!_0x42864f) {
    BOT.stop = true;
  } else {
    switch (BOT.senzu.which) {
      case 'blue':
        BOT.emit({
          'a': 0xc,
          'type': 0xe,
          'iid': _0x42864f.id,
          'page': GAME.ekw_page,
          'am': Math.floor(GAME.getCharMaxPr() / 0x64 * 0.5)
        });
        break;
      case "yellow":
        BOT.emit({
          'a': 0xc,
          'type': 0xe,
          'iid': _0x42864f.id,
          'page': GAME.ekw_page,
          'am': BOT.CalcYellow()
        });
        break;
      case 'red':
        BOT.emit({
          'a': 0xc,
          'type': 0xe,
          'iid': _0x42864f.id,
          'page': GAME.ekw_page,
          'am': 0x1
        });
        break;
      case "magic":
        BOT.emit({
          'a': 0xc,
          'type': 0xe,
          'iid': _0x42864f.id,
          'page': GAME.ekw_page,
          'am': 0x1
        });
        break;
    }
  }
};
BOT.UseSSJ = () => {
  BOT.emit({
    'a': 0x12,
    'type': 0x5,
    'tech_id': GAME.quick_opts.ssj[0x0]
  });
};
BOT.CancelSSJ = () => {
  BOT.emit({
    'a': 0x12,
    'type': 0x6
  });
};
BOT.UseSub = () => {
  BOT.emit({
    'a': 0xc,
    'type': 0x13,
    'iid': GAME.quick_opts.sub[BOT.sub.which].id
  });
};
BOT.PreparePanel = () => {
  $(".BOT_cnt input[name=usesenzu]").prop("checked", !!BOT.senzu.use);
  $(".BOT_cnt input[name=usesub]").prop("checked", !!BOT.sub.use);
  $(".BOT_cnt input[name=multi]").prop('checked', !!BOT.char.multifight);
  $(".BOT_cnt input[name=ssj]").prop("checked", !!BOT.char.ssj);
  $(".BOT_version").html('v' + BOT.version);
  if (!BOT.senzu.use) {
    $(".BOT_senzu").hide();
  } else {
    $(".BOT_senzu").show();
  }
  $(".BOT_senzu input[value=" + BOT.senzu.which + ']').prop("checked", true);
  if (!BOT.sub.use) {
    $(".BOT_sub").hide();
  } else {
    $('.BOT_sub').show();
  }
  $(".BOT_sub input[value=" + BOT.sub.which + ']').prop("checked", true);
  $("#BOT_Panel").draggable({
    'handle': '.BOT_header'
  });
  $(".BOT_cnt input[type=checkbox], input[type=radio]").change(_0x3d4dad => {
    BOT.HandleChbox($(_0x3d4dad.target));
  });
  $(".range_slider input[type=range]").val(BOT.char.min_pa);
  $(".minpa_val").html("PA: " + GAME.dots(BOT.char.min_pa));
  BOT.RealLevel();
};
BOT.HandleChbox = _0x3b880d => {
  let _0x4a92f = _0x3b880d.attr("name");
  switch (_0x4a92f) {
    case "usesenzu":
      BOT.senzu.use = !!_0x3b880d.is(':checked');
      $(".BOT_senzu").fadeToggle('fast');
      break;
    case "usesub":
      BOT.sub.use = !!_0x3b880d.is(":checked");
      $(".BOT_sub").fadeToggle("fast");
      break;
    case 'multi':
      BOT.char.multifight = !!_0x3b880d.is(':checked');
      break;
    case "use_senzu":
      BOT.senzu.which = _0x3b880d.val();
      break;
    case "use_sub":
      BOT.sub.which = parseInt(_0x3b880d.val());
      break;
    case 'ssj':
      BOT.char.ssj = !!_0x3b880d.is(":checked");
      break;
  }
};
BOT.CheckIfCummu = _0x5b26d2 => {
  if ('mm' in _0x5b26d2 && 'result' in _0x5b26d2 && 'cummulative_killed' in _0x5b26d2.result) {
    return true;
  } else {
    if (_0x5b26d2.quick === 0x2 && 'remove_mob' in _0x5b26d2) {
      return true;
    } else {
      if (_0x5b26d2.quick === 0x1 && 'remove_mob' in _0x5b26d2) {
        return true;
      } else {
        if ('me' in _0x5b26d2) {
          return true;
        }
      }
    }
  }
  return false;
};
GAME.socket.on('gr', _0x28299b => {
  if (!BOT.stop && _0x28299b.a === 0x4 && _0x28299b.char_id === GAME.char_id) {
    setTimeout(() => {
      BOT.Fight();
    }, 0x14);
  } else {
    if (!BOT.stop && _0x28299b.a === 0x7 && BOT.CheckIfCummu(_0x28299b)) {
      if (BOT.CountMobs(true) == 0x0) {
        BOT.Next();
      } else {
        setTimeout(() => {
          BOT.Fight();
        }, 0x14);
      }
    } else {
      if (!BOT.stop && _0x28299b.a === 0xc && _0x28299b.type === 0xe) {
        setTimeout(() => {
          BOT.Go();
        }, 0x3e8);
      } else {
        if (!BOT.stop && _0x28299b.a === 0x12 && _0x28299b.ssj) {
          setTimeout(() => {
            BOT.Go();
          }, 0x7d0);
        } else {
          if (!BOT.stop && _0x28299b.a === 0x12 && _0x28299b.cancel_ssj) {
            setTimeout(() => {
              BOT.UseSSJ();
            }, 0x3e8);
            console.log("cancel ssj response");
          } else {
            if (!BOT.stop && _0x28299b.a === 0xc && _0x28299b.type === 0x13) {
              setTimeout(() => {
                BOT.Go();
              }, 0x3e8);
            } else if (!this.stop && _0x28299b.a === undefined) {
              setTimeout(() => {
                BOT.Go();
              }, 0x3e8);
            }
          }
        }
      }
    }
  }
});
$(".BOT_box .start").click(_0x3633de => {
  _0x3633de = _0x3633de.target;
  if (BOT.stop) {
    BOT.stop = false;
    BOT.Start();
    $(_0x3633de).addClass('stop').html('STOP');
    $(".BOT_box .resume").hide();
  } else {
    BOT.stop = true;
    $(_0x3633de).removeClass("stop").html("START");
    $(".BOT_box .resume").show();
    if (BOT.cd_wait) {
      clearTimeout(BOT.cd_wait);
    }
    if (BOT.path.length === 0x1) {
      BOT.moveSteps.shift();
    }
    $(".BOT_box .cooldown").hide();
  }
});
$(".BOT_box .resume").click(() => {
  $(".BOT_box .start").addClass('stop').html("STOP");
  $(".BOT_box .resume").hide();
  BOT.stop = false;
  BOT.Go();
});
$(".BOT_box .BOT_calc_Lvl").click(() => {
  BOT.RealLevel();
});
$(".range_slider").on("input", _0x30cba4 => {
  $(".minpa_title").css("display", "none");
  $(".minpa_val").html("PA: " + GAME.dots($(_0x30cba4.target).val())).css('display', "block");
}).mouseup(_0xab8439 => {
  BOT.char.min_pa = parseInt($(_0xab8439.target).val());
  $('.minpa_val').css('display', "none");
  $(".minpa_title").css("display", "block");
});
console.clear();
console.log("%cSkrypt zosta\u0142 poprawnie za\u0142adowany!", "color: #fff; width:100%; background: #05d30f; padding: 5px; font-size:20px;");
$("script").last().remove();
const bot_auth = [0x6fae8, 0x6fba6, 0x33cab, 0x717fc, 0x727c4, 0x6c025, 0x66f61, 0x69a67, 0x745c1, 0x6f066, 0x67a29, 0x63ecc, 0x745b5, 0x7507d, 0x71ab9, 0x7484b, 0x736b4, 0x47154, 0x4ebb3, 0x7555e, 0x70e7a, 0x69bc6, 0x7008f, 0x54534, 0x498f0, 0x6543f, 0x6ed3c, 0x75630, 0x75d5e, 0x757a0, 0x7564c, 0x7541f, 0x7584b, 0x749da, 0x4258d, 0x758d1, 0x7550c, 0x75920, 0x7592c, 0x71b22, 0x71fb7, 0x467bd, 0x7219d, 0x75c98, 0x72178, 0x751b9, 0x538fe, 0x6f23a, 0x75cd4, 0x607e2, 0x716fb, 0x7342d, 0x71fac];
if (!bot_auth.includes(GAME.pid) || GAME.char_data.player_id ==  || GAME.char_data.player_id == 0x6d87f) {
  $("#BOT_Panel").remove();
  delete BOT;
  GAME.socket.disconnect();
  location.href = "https://kosmiczni.pl/rules";
}
