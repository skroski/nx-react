import { Prop, Schema } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ServiceDocument = Service & Document
@Schema()
export class Service{
    @Prop()
    name: string;
    @Prop()
    excerpt: string;
    @Prop()
    description: string;
    @Prop()
    price: number;
    @Prop()
    type: string;
};