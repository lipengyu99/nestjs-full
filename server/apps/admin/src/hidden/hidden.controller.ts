import { Controller, Get } from '@nestjs/common';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { prop, Ref, ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { Crud } from 'nestjs-mongoose-crud';
import { Hidden } from '@libs/db/models/hidden.model';
@Crud({
    model: Hidden
})
@Controller('hidden')
@ApiTags('意向用户')
export class HiddenController {
    constructor(@InjectModel(Hidden) private model: ModelType<Hidden>,
       ) {

    }
    @Get('option')
    option(): any {
        return {
            //dateBtn: true,
            index: true,
            indexLabel: '序号',
            title: "意向用户",
            searchShow: false,
            align: "center",
            menuAlign: "center",
            column: [
                {
                    //sortable: true,
                    label: "姓名",
                    prop: "name",
                    //span: 24,
                    editDisabled: true  
                },
                
                {
                    label: "手机",
                    prop: "phone",
                    
                },
                {
                    label:"年级",
                    prop:"grade",
                    editDisabled: true
                    
                },
                {
                    label: "日期",
                    prop: "createdAt",
                    type: "date",
                    format: "yyyy-MM-dd hh:mm:ss",
                    valueFormat: "yyyy-MM-dd hh:mm:ss",
                    editDisabled: true
                },
                {
                    label:"跟进状态",
                    prop:"type",
                    type:"select",
                    //dicData:DIC.VAILD,
                },
                // {
                //     labelWidth: 0,
                //     label: '',
                //     prop: 'info',
                //     span: 24,
                //     hide: true,
                //     formslot: true,
                // },
                

            ],
            // infoOption: {
            //     column: [{
            //         label: '年龄',
            //         prop: 'sex',
            //     }]
            // }
        };
        
    }
    // @Get('InfoOption')
    // InfoOption(){
    //     return {
    //         column: [{
    //                 label: '年龄',
    //                 prop: 'grade',
    //             }]
    //     }
    // }
}
