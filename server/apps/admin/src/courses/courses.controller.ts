import { Controller, Get, flatten } from '@nestjs/common';
import { Course } from '@libs/db/models//course.model';
import { Crud } from 'nestjs-mongoose-crud';
import { ModelType, ReturnModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel} from 'nestjs-typegoose'
import { ApiTags } from '@nestjs/swagger';
import { prop } from '@typegoose/typegoose';
@Crud({
    model: Course
})
@Controller('courses')
@ApiTags('课程视频')
export class CoursesController {
    constructor(@InjectModel(Course) public model:ReturnModelType<typeof Course>){

    }
    @Get('option')
    option():any{
        return {
            index: true,
            indexLabel: '序号',
            title: "课程视频",
           
            searchShow:false,
            align: "center",
            menuAlign: "center",
            column: [
                {
                   
                    sortable: true,
                    label: "名称",
                    prop: "title",
                    span: 24,
                    searchValue: '',
                    search: true,
                    //自定义搜索正则
                    regex:true,
                },
                {
                    label: "封面",
                    prop: "cover",
                    type: 'upload',
                    width:'120',
                    span: 24,
                    listType: 'picture-img',
                    tip: '只能上传jpg/png文件，且不超过500kb',
                    action: '/imgupload'
                },
           
            ]
        };
    }
}
