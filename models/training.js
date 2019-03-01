module.exports = (sequelize, DataTypes) => {
  const Trainings = sequelize.define('Trainings', {
    training_id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    duration: DataTypes.INTEGER
  }, {
    timestamps: false
  });
  
  Trainings.associate = function(models) {
	  Trainings.hasMany(models.Tasks, {
      as: 'Tasks', 
      foreignKey: 'training_id'
    });
  }
  return Trainings;
};