import { prop, modelOptions, Ref } from "@typegoose/typegoose";
import { ApiProperty } from "@nestjs/swagger";
import { Course } from "@libs/db/models/course.model";
@modelOptions({
    schemaOptions:{
        timestamps:true
    }
})
export class Episode {
    @ApiProperty({description:'标题'})
    @prop()
    name:string;

    @ApiProperty({ description: '封面' })
    @prop()
    cover:string;
   
    @ApiProperty({ description: '导语' })
    @prop()
    input: string;

    @ApiProperty({ description: '正文' })
    @prop()
    textarea: string;
    
    @ApiProperty({ description: '所属分类' })
    @prop({ref:'Course'})
    course:Ref<Course>

}