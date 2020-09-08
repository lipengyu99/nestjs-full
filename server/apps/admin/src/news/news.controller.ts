import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { Crud } from 'nestjs-mongoose-crud';
import { News } from '@libs/db/models/news.model';
@Crud({
    model: News
})
@Controller('news')
@ApiTags('课程视频')
export class NewsController {
    constructor(@InjectModel(News) public model: ReturnModelType<typeof News>) {

    }
    @Get('option')
    option(): any {
        return {
            index: true,
            indexLabel: '序号',
            title: "课程视频",

            searchShow: false,
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
                    regex: true,
                },
                {
                    label: "封面",
                    prop: "cover",
                    type: 'upload',
                    width: '120',
                    span: 24,
                    listType: 'picture-img',
                    tip: '只能上传jpg/png文件，且不超过500kb',
                    action: '/imgupload'
                },

            ]
        };
    }
}
