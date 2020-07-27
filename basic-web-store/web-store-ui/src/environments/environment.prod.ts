export const environment = {
  production: true,
  principalUrl: (location.protocol + '//' + (location.host)).replace('8080', '7080') + '/ScyulaShop' ,
  productUrl: (location.protocol + '//' + (location.host)).replace('8080', '7080') + '/ScyulaShop/store/product',
  userUrl: (location.protocol + '//' + (location.host)) .replace('8080', '7080') + '/ScyulaShop/users',
  transaccionUrl: (location.protocol + '//' + (location.host)).replace('8080', '7080') + '/ScyulaShop/store/transaccion',
};
