'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/wx/token', controller.home.wechatAuth);

  // admin
  const { admin, api } = controller;
  // 文件上传
  router.post('/admin/upload', admin.index.upload);
  router.get('/admin/index', admin.index.index);
  router.get('/admin/verify', admin.base.verify);
  router.get('/admin/getAuthList', admin.login.getAuthList);
  router.post('/admin/doLogin', admin.login.doLogin);
  router.get('/admin/doLogout', admin.login.doLogout);
  router.post('/admin/doLogout', admin.login.doLogout);
  // 管理员管理
  router.get('/admin/manager/index', admin.manager.index);
  router.get('/admin/manager/detail', admin.manager.detail);
  router.get('/admin/manager/add', admin.manager.add);
  router.post('/admin/manager/doAdd', admin.manager.doAdd);
  router.post('/admin/manager/doEdit', admin.manager.doEdit);
  router.post('/admin/manager/doDel', admin.manager.doDel);
  // 角色管理
  router.get('/admin/role/index', admin.role.index);
  router.get('/admin/role/detail', admin.role.detail);
  router.post('/admin/role/doAdd', admin.role.doAdd);
  router.post('/admin/role/doEdit', admin.role.doEdit);
  router.post('/admin/role/doDel', admin.role.doDel);
  router.get('/admin/role/auth', admin.role.auth);
  router.post('/admin/role/doAuth', admin.role.doAuth);
  // 选贤管理
  router.get('/admin/access/index', admin.access.index);
  router.get('/admin/access/detail', admin.access.detail);
  router.post('/admin/access/doAdd', admin.access.doAdd);
  router.post('/admin/access/doEdit', admin.access.doEdit);
  // 用户列表
  router.get('/admin/user/index', admin.user.index);
  router.get('/admin/user/detail', admin.user.detail);
  router.post('/admin/user/doAdd', admin.user.doAdd);
  router.post('/admin/user/doEdit', admin.user.doEdit);
  router.post('/admin/user/doDel', admin.user.doDel);
  // 类别管理
  router.get('/admin/category/index', admin.category.index);
  router.get('/admin/category/rootList', admin.category.rootList);
  router.get('/admin/category/list', admin.category.list);
  router.get('/admin/category/detail', admin.category.detail);
  router.get('/admin/category/treeByName', admin.category.treeByName);
  router.post('/admin/category/doAdd', admin.category.doAdd);
  router.post('/admin/category/doEdit', admin.category.doEdit);
  router.post('/admin/category/doRootAdd', admin.category.doRootAdd);
  router.post('/admin/category/doRootEdit', admin.category.doRootEdit);
  router.post('/admin/category/doRootDel', admin.category.doRootDel);
  router.post('/admin/category/doDel', admin.category.doDel);
  // 商品管理
  router.get('/admin/product/index', admin.product.index);
  router.get('/admin/product/detail', admin.product.detail);
  router.post('/admin/product/doAdd', admin.product.doAdd);
  router.post('/admin/product/doEdit', admin.product.doEdit);
  router.post('/admin/product/doSale', admin.product.doSale);
  // 商品属性
  router.get('/admin/attr/index', admin.attr.index);
  router.get('/admin/attr/detail', admin.attr.detail);
  router.get('/admin/attr/getAttrByCate', admin.attr.getAttrByCate);
  router.post('/admin/attr/doAdd', admin.attr.doAdd);
  router.post('/admin/attr/doEdit', admin.attr.doEdit);
  router.post('/admin/attr/doDel', admin.attr.doDel);
  // 品牌管理
  router.get('/admin/brand/index', admin.brand.index);
  router.get('/admin/brand/detail', admin.brand.detail);
  router.post('/admin/brand/doAdd', admin.brand.doAdd);
  router.post('/admin/brand/doEdit', admin.brand.doEdit);
  router.post('/admin/brand/doDel', admin.brand.doDel);
  // 字典管理
  router.get('/admin/dict/index', admin.dict.index);
  router.get('/admin/dict/detail', admin.dict.detail);
  router.post('/admin/dict/doAdd', admin.dict.doAdd);
  router.post('/admin/dict/doEdit', admin.dict.doEdit);
  router.post('/admin/dict/doDel', admin.dict.doDel);
  router.get('/admin/dict/groupList', admin.dict.groupList);
  router.post('/admin/dict/doGroupAdd', admin.dict.doGroupAdd);
  // 单页列表
  router.get('/admin/page/index', admin.page.index);
  router.get('/admin/page/detail', admin.page.detail);
  router.post('/admin/page/doAdd', admin.page.doAdd);
  router.post('/admin/page/doEdit', admin.page.doEdit);
  router.post('/admin/page/doDel', admin.page.doDel);
  router.get('/admin/page/groupIndex', admin.page.groupIndex);
  router.get('/admin/page/doGroupAdd', admin.page.doGroupAdd);
  // 单页组
  router.get('/admin/pageGroup/index', admin.pageGroup.index);
  router.get('/admin/pageGroup/detail', admin.pageGroup.detail);
  router.post('/admin/pageGroup/doAdd', admin.pageGroup.doAdd);
  router.post('/admin/pageGroup/doEdit', admin.pageGroup.doEdit);
  router.post('/admin/pageGroup/doDel', admin.pageGroup.doDel);
  // banner管理列表
  router.get('/admin/banner/index', admin.banner.index);
  router.get('/admin/banner/detail', admin.banner.detail);
  router.post('/admin/banner/doAdd', admin.banner.doAdd);
  router.post('/admin/banner/doEdit', admin.banner.doEdit);
  router.post('/admin/banner/doDel', admin.banner.doDel);
  // 订单管理
  router.get('/admin/order/index', admin.order.index);
  router.get('/admin/order/detail', admin.order.detail);
  router.post('/admin/order/doAdd', admin.order.doAdd);
  router.post('/admin/order/doEdit', admin.order.doEdit);
  router.post('/admin/order/doDel', admin.order.doDel);

  // 前端pc路由api 不用登录可访问路径
  router.get('/api/index', api.index.index);
  router.post('/api/doLogin', api.index.doLogin);
  router.get('/api/home', api.index.home);
  router.get('/api/product', api.index.product);
  router.get('/api/productDetail', api.index.productDetail);
  router.get('/api/page', api.index.page);
  router.get('/api/pageById', api.index.pageById);
  router.get('/api/pageList', api.index.pageList);
  router.get('/api/brand', api.index.brand);
  // 需要登录路由 前端地址管理
  router.get('/api/address/index', api.address.index);
  router.get('/api/address/detail', api.address.detail);
  router.post('/api/address/doAdd', api.address.doAdd);
  router.post('/api/address/doEdit', api.address.doEdit);
  router.post('/api/address/doDel', api.address.doDel);
  // 添加购物车
  router.get('/api/cart/index', api.cart.index);
  router.get('/api/cart/detail', api.cart.detail);
  router.post('/api/cart/doAdd', api.cart.doAdd);
  router.get('/api/cart/cartChecks', api.cart.cartCheck);
  router.post('/api/cart/checkChange', api.cart.checkChange);
  router.post('/api/cart/numChange', api.cart.numChange);
  router.post('/api/cart/doDel', api.cart.doDel);
  // 订单管理
  router.get('/api/order/index', api.order.index);
  router.get('/api/order/detail', api.order.detail);
  router.post('/api/order/doOrder', api.order.doOrder);
  router.post('/api/order/checkOrderPay', api.order.checkOrderPay);
};
