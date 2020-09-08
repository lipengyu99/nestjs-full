import { prop,  modelOptions } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger';

@modelOptions({
    schemaOptions:{
        timestamps:true
    }
})
export class News {
    @ApiProperty({description:'资讯分类'})
    @prop()
    newstype:string;
    
    @ApiProperty({ description:'资讯标题'})
    @prop()
    newstitle:string

    @ApiProperty({ description: '封面' })
    @prop()
    newscover: string

    @ApiProperty({ description: '编辑时间' })
    @prop()
    newstime: string

    @ApiProperty({ description: '作者' })
    @prop()
    author: string

    @ApiProperty({ description: '状态' })
    @prop()
    type: string
    
}