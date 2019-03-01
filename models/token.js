module.exports = (sequelize, DataTypes) => {
  const Token = sequelize.define('Token', {
    user_id: { 
      type: DataTypes.TEXT,
      primaryKey: true,
      unique: true
    },
    token: {
      type: DataTypes.TEXT,
      unique: true
    }
  }, {
    timestamps: false
  });
  return Token;
};