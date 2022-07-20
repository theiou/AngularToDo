import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {DataHandlerService} from 'src/app/services/data-handler.service';
import {Task} from "../../models/Task";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit, AfterViewInit {

  displayedColumns: String[] = ['color', 'id', 'title', 'date', 'priority', 'category'];
  dataSource: MatTableDataSource<Task> = new MatTableDataSource();

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  tasks: Task[];

  @Output()
  selectTask = new EventEmitter<Task>();
  selectedTask: Task;

  @Input('tasks')
  set setTasks(tasks: Task[]) {
    this.tasks = tasks;
    this.fillTable();
  }

  constructor(private dataHandler: DataHandlerService) {
  }

  ngAfterViewInit(): void {
    this.fillTable();
  }

  ngOnInit(): void {
    this.fillTable();
  }

  toggleCompleted(task: Task): void {
    task.completed = !task.completed;
  }

  getSelectedTask(task: Task) {
    if (this.selectedTask === task) {
      return;
    }
    this.selectedTask = task;
    this.selectTask.emit(this.selectedTask);

  }

  getPriorityColor(task: Task) {
    if (task.priority && task.priority.color) {
      return task.priority.color;
    }
    return "#fff";
  }

  fillTable() {
    if (!this.dataSource) {
      return;
    }

    this.dataSource.data = this.tasks;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    // @ts-ignore
    this.dataSource.sortingDataAccessor = (task, colName) => {
      switch (colName) {
        case 'priority': {
          return task.priority ? task.priority.id : null;
        }
        case 'category': {
          return task.category ? task.category.title : null;
        }
        case 'date': {
          return task.date ? task.date : null;
        }
        case 'title': {
          return task.title;
        }
      }
    };

  }


}
