

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type TagDocument = Tag & Document;

@Schema({timestamps: true, collection: "tl_tags"})
export class Tag {

  @Prop({ required: true })
  name: string;
}

export const TagSchema = SchemaFactory.createForClass(Tag);