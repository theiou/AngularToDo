import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from 'src/app/services/data-handler.service';
import {Task} from "../../models/Task";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  displayedColumns: String[] = ['color', 'id', 'title', 'date', 'priority', 'category'];
  dataSource!: MatTableDataSource<Task>;
  tasks: Task[] = [];

  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit(): void {
    this.dataHandler.tasksSubject.subscribe(tasks => this.tasks = tasks);
    this.dataSource = new MatTableDataSource<Task>();
    this.refreshTable();
  }

  toggleCompleted(task: Task):void {
    task.completed = !task.completed;
  }

  getPriorityColor(task: Task){
    if (task.priority && task.priority.color){
      return task.priority.color;
    }
    return "#fff";
  }

  refreshTable(): void {
    this.dataSource.data = this.tasks;
  }

}
