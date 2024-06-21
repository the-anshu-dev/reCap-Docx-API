import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Users } from './schemas/users.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {

  constructor(
    @InjectModel(Users.name) private model:Model<Users>
  ){}


  create(createUserDto: CreateUserDto) {
    return this.model.create(createUserDto);
  }

  findAll() {
    return this.model.find();
  }

  findOne(id: string) {
    return this.model.findById(id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.model.findByIdAndUpdate(id, updateUserDto,{
      new:true
    });
  }

  async remove(id: string) {
    const res = await  this.model.findByIdAndDelete(id).lean(true)
    if(res){

      return {
        ...res,
        message: "User Deleted"
      };
    }
  }
}
