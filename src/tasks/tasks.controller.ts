import { Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreatTaskDto, UpdateTaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) { }
    @Get()
    getAllTasks() {
        return this.tasksService.getAllTask();
    }

    @Post()
    createTask(@Body() newTask: CreatTaskDto) {
        return this.tasksService.createTask(newTask.title, newTask.description);
    }
    @Delete(':id')
    deleteTask(@Param('id') id: string) {
        this.tasksService.deleteTask(id)
    }

    @Patch(':id')
    updateTask(@Param("id") id: string, @Body() UploadedFile: UpdateTaskDto) {
        return this.tasksService.updateTask(id, UploadedFile)
    }
}
