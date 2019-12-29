import { Controller, Get } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud'
import { User } from '@libs/db/models/user.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose'
import { ApiTags } from '@nestjs/swagger';
@Crud({
    model:User
})
@Controller('users')
 @ApiTags('用户管理')
export class UsersController {
    constructor(@InjectModel(User) public model:ModelType<User>){

    }
    @Get('option')
    option(): any {
        return {
            title: "用户管理",
            page: false,
            align: "left",
            menuAlign: "center",
            column: [
                {
                    label: "用户名",
                    prop: "username"
                }
               
            ]
        };
    }
}
