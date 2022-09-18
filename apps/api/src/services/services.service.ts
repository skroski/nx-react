import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ServiceDTO } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

import { Service, ServiceDocument } from './entities/service.entity';

@Injectable()
export class ServicesService {
  constructor(
    @InjectModel(Service.name)
    private serviceModel:Model<ServiceDocument>){}
  create(createServiceDto: ServiceDTO) {
    return 'This action adds a new service';
  }

  findAll() {
    return `This action returns all services`;
  }

  findOne(id: number) {
    return `This action returns a #${id} service`;
  }

  async update(id: string, updateServiceDto: UpdateServiceDto) {
    await this.serviceModel.updateOne(
      { _id: id },
      updateServiceDto).exec();
    return this.serviceModel.findById(id).exec();
  }

  remove(id: string) {
    this.serviceModel.deleteOne({_id: id});
  }
}
