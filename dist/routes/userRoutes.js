"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// === ROTAS DE USER ===

var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// nao deveria existir
// router.get('/', loginRequired, userController.index);
// router.get('/:id', userController.show);

// router.post('/', userController.store);
router.put('/', _loginRequired2.default, _UserController2.default.update);
router.delete('/', _loginRequired2.default, _UserController2.default.delete);

exports. default = router;

/**
 * ===== METODOS API REST ====
 * index -> Lista todos os usuarios -> GET
 * store/create -> Cria um novo usuario -> POST
 * delete -> apaga um usuario -> DELETE
 * show -> mostra um usuario -> GET
 * update -> atualiza um usuario -> PATCH ou PUT
 *
 */
