import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Episode } from '@libs/db/models/episode.model';
import { ModelType, ReturnModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose'
import { Crud } from 'nestjs-mongoose-crud'
import { Course } from '@libs/db/models/course.model';
@Crud({
    model: Episode
})
@Controller('episodes')
    @ApiTags('资讯详情')
export class EpisodesController {
    constructor(@InjectModel(Episode) private model:ModelType<Episode>,
        @InjectModel(Course) private coursemodel: ReturnModelType<typeof Course>){

    }
    @Get('option')
   async option() {
       const courese = (await this.coursemodel.find()).map(v =>({
           label:v.title,
           value:v._id

       }))
        return {
            index: true,
            indexLabel: '序号',
            title: "资讯详情",
            
            align: "center",
            menuAlign: "center",
            translate:false,
            column: [
                {
                    label: "所属分类",
                    prop: "course",
                    type:"select",
                    span:24,
                    dicData: courese,
                },
                {
                    sortable: true,
                    label: "标题",
                    prop: "name",
                    span:24,
                },
                // {
                //     label: "文件",
                //     prop: "file",
                //     type: 'upload',
                //     params: {
                //         is: 'video'
                //     },
                //     width: '120',
                //     span: 24,
                //     listType: 'picture-img',
                //     tip: '只能上传jpg/png文件，且不超过500kb',
                //     action: '/imgupload'
                // },
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
                {
                    label: '导语',
                    prop: 'input',
                    span:24,
                    maxlength: 25,
                    showWordLimit: true
                }, {
                    label: '正文',
                    prop: 'textarea',
                    type: 'textarea',
                    formslot: true,
                    minRows: 10,
                    maxlength: 200,
                    span: 24,
                    showWordLimit: true
                }
                
            ]
        };
    }
}
