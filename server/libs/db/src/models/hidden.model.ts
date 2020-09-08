import { Controller } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { prop, Ref, modelOptions } from '@typegoose/typegoose';
@modelOptions({
    schemaOptions: {
        timestamps: true
    }
})
@Controller('hidden')
export class Hidden {
    @ApiProperty({ description: '学生姓名' })
    @prop()
    name: string;

    @ApiProperty({ description: '联系手机' })
    @prop()
    phone: string;

    @ApiProperty({ description: '年级' })
    @prop()
    grade: string;
    // @ApiProperty({ description: '所属分类' })
    // @prop({ ref: 'Course' })
    // course: Ref<Course>
    @ApiProperty({ description: '日期' })
    @prop()
    date: string;
    
    @ApiProperty({ description: '跟进状态' })
    @prop()
    type: string;
}
