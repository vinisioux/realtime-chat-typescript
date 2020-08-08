import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/chat', {
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
