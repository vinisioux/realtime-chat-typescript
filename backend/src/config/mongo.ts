import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/formare', {
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
