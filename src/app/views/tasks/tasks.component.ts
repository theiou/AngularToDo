import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
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
  dataSource!: MatTableDataSource<Task>;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  tasks!: Task[];

  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit(): void {
    this.dataHandler.getAllTasks().subscribe(tasks => this.tasks = tasks);
    this.dataSource = new MatTableDataSource<Task>();
    this.refreshTable();
  }

  ngAfterViewInit(): void {
    this.addTableObjects();
  }

  toggleCompleted(task: Task): void {
    task.completed = !task.completed;
  }

  getPriorityColor(task: Task) {
    if (task.priority && task.priority.color) {
      return task.priority.color;
    }
    return "#fff";
  }

  refreshTable() {
    this.dataSource.data = this.tasks;
    this.addTableObjects();

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

  addTableObjects() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
