import { Schema, model, Document } from 'mongoose';

interface INews extends Document {
  title: string;
  description: string;
  source: string;
  publishedAt: Date;
}

const newsSchema = new Schema<INews>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  publishedAt: {
    type: Date,
    required: true,
  },
});

const NewsModel = model<INews>('News', newsSchema);

export default NewsModel;