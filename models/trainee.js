module.exports = (sequelize, DataTypes) => {
  const Trainees = sequelize.define('trainees', {
    name: {
    	type: DataTypes.STRING,
    	allowNull: false
    },
    gender: {
    	type: DataTypes.STRING,
    	allowNull: false
    },
    day: {
      type: DataTypes.INTEGER
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mentor_id: {
      type: DataTypes.INTEGER
    },
    training_id: {
      type: DataTypes.INTEGER
    }
  });
  return Trainees;
};