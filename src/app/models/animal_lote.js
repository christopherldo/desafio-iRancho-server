module.exports = (sequelize, DataTypes) => {
  const animal_lote = sequelize.define('animal_lote', {
    no_lote: DataTypes.STRING,
    ds_lote: DataTypes.DECIMAL
  }, {
    tableName: 'animal_lote',
  });

  return animal_lote;
};