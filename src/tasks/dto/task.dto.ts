import { TaskStatus } from "../task.entity"
import { IsString, IsNotEmpty, MinLength, IsOptional, IsIn } from 'class-validator';
export class CreatTaskDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    title: string;

    @IsString()
    description: string;
}

export class UpdateTaskDto {
    @IsString()
    @IsOptional()
    title?: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsOptional()
    @IsIn([TaskStatus.PENDING, TaskStatus.IN_PROGRES, TaskStatus.DONE])
    status?: TaskStatus;
}