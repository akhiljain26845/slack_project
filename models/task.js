module.exports = (sequelize, DataTypes) => {
  const Tasks = sequelize.define('Tasks', {
    task_Id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    day: DataTypes.INTEGER,
    task: DataTypes.TEXT
  }, {
    timestamps: false
  });
  Tasks.associate = function(model) {
	Tasks.belongsTo(model.Trainings, {
	  "constraints": true,
	  "foreignKey": 'training_id'
	});
  }
  return Tasks;
};